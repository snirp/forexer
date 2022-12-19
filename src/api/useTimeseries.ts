import type { AxiosError } from "axios";
import exchangeApi from "./exchangeApi";
import { useQuery } from "react-query";

import { Ccode } from "../currencies";
import apiCount from "./apiCount";

interface Timeseries {
  base: string;
  start_date: string;
  end_date: string;
  rates: { [date: string]: Record<Ccode, number> };
  success: true;
  timeseries: true;
}

// Fetch all exchange rates from base currency dating back to start date
export const useTimeseries = (code: Ccode, start_date: string) => {
  const end_date = new Date().toISOString().slice(0, 10);
  return useQuery<Timeseries, AxiosError>(
    ["timeseries", code],
    async () => {
      apiCount.timeseries++;
      const { data } = await exchangeApi.get(
        `timeseries?base=${code}&start_date=${start_date}&end_date=${end_date}`
      );
      return data;
    },
    {}
  );
};

export default useTimeseries;
