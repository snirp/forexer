import type { AxiosError } from "axios";
import exchangeApi from "./exchangeApi";
import { useQuery } from "react-query";

import { Ccode } from "../currencies";

interface Latest {
  base: Ccode;
  date: string;
  rates: Record<Ccode, number>;
  success: boolean;
  timestamp: number;
}

export const useLatest = (code: Ccode) =>
  useQuery<Latest, AxiosError>(
    ["latest", code],
    async () => {
      const { data } = await exchangeApi.get(`latest?base=${code}`);
      return data;
    },
    {}
  );

export default useLatest;
