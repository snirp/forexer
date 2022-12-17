import { useEffect, useState } from "react";
import { VictoryLine } from "victory";
import useTimeseries from "../api/useTimeseries";
// import timeseries from "../data/timeseries"; // development data
import { Ccode } from "../currencies";

const TimeChart = ({ base, target }: { base: Ccode; target: Ccode }) => {
  const { data: timeseries, isFetched } = useTimeseries(base);
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

  if (!isFetched || timeseries === undefined) return <div>fetching</div>;

  const chartData = Object.entries(timeseries.rates).map(([date, rates]) => ({
    x: date,
    y: rates[target],
  }));
  return (
    <VictoryLine
      animate={{ duration: 500 }}
      domainPadding={{ x: 0, y: [100, 10] }}
      style={{ data: { stroke: "rgba(0,0,0,0.57)", strokeWidth: 3 } }}
      data={chartData}
      padding={0}
      width={width}
      height={200}
    />
  );
};

export default TimeChart;
