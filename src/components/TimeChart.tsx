import { useEffect, useMemo, useState } from "react";
import { VictoryArea } from "victory";
import useTimeseries from "../api/useTimeseries";
// import timeseries from "../data/timeseries"; // development data
import { Ccode } from "../currencies";
import CircularProgress from "@mui/material/CircularProgress";

// Number of days for the timeseries
const DURATION = 30;
const start = new Date();
start.setDate(start.getDate() - DURATION + 1);
const start_date = start.toISOString().slice(0, 10);

const TimeChart = ({ base, target }: { base: Ccode; target: Ccode }) => {
  const { data: timeseries, isFetched } = useTimeseries(base, start_date);
  // Victory does not do fluid widths, so we track the width of the window
  // and use that to hard code the chart width
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = (evt: Event) => {
    const target = evt.target as Window;
    setWidth(target.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Prepare data for Victory chart
  const chartData = useMemo(
    () =>
      timeseries === undefined
        ? []
        : Object.entries(timeseries.rates).map(([date, rates]) => ({
            x: date,
            y: rates[target],
          })),
    [timeseries, target]
  );

  // Dynamically adept the y-domain to increase the fluctuations
  const domainY = useMemo(() => {
    if (timeseries === undefined) return [0, 0];
    const ratesList = Object.values(timeseries.rates).map(
      (rates) => rates[target]
    );
    const min = Math.min(...ratesList);
    const max = Math.max(...ratesList);
    const padding = (max - min) * 0.5;
    return [min - padding, max];
  }, [timeseries, target]);

  if (!isFetched || timeseries === undefined)
    return (
      <div style={{ height: 200 }}>
        <CircularProgress sx={{ color: "white" }} />
      </div>
    );

  return (
    <div>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
          </linearGradient>
        </defs>
      </svg>
      <VictoryArea
        animate={{ duration: 500 }}
        domain={{ y: domainY as [number, number] }}
        style={{
          data: {
            stroke: "rgba(255,255,255,0.87)",
            strokeWidth: 1,
            fill: "url(#myGradient)",
          },
        }}
        data={chartData}
        padding={0}
        width={width}
        height={200}
      />
      <div className="date start-date">{start_date}</div>
      <div className="date end-date">today</div>
    </div>
  );
};

export default TimeChart;
