import { VictoryArea } from "victory";
import { Ccode } from "../currencies";

import timeseries from "../data/timeseries"; // development data

const TimeChart = ({ base, target }: { base: Ccode; target: Ccode }) => {
  // Todo query timeseries when base currency changes
  const data = Object.entries(timeseries.rates).map(([date, rates]) => ({
    x: date,
    y: rates[target],
  }));
  return <VictoryArea data={data} />;
};

export default TimeChart;
