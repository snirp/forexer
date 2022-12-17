import type { AxiosError } from "axios";
import exchangeApi from "./exchangeApi";
import { useQuery } from "react-query";

import { Ccode } from "../currencies";

interface Timeseries {
  base: string;
  start_date: string;
  end_date: string;
  rates: { [date: string]: Record<Ccode, number> };
  success: true;
  timeseries: true;
}

export const useTimeseries = (code: Ccode) => {
  const end_date = new Date().toISOString().slice(0, 10);
  const start = new Date();
  start.setDate(start.getDate() - 29);
  const start_date = start.toISOString().slice(0, 10);
  return useQuery<Timeseries, AxiosError>(
    ["timeseries", code],
    async () => {
      const { data } = await exchangeApi.get(
        `timeseries?base=${code}&start_date=${start_date}&end_date=${end_date}`
      );
      return data;
    },
    {}
  );
};

export default useTimeseries;
