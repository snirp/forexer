import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useMemo, useState } from "react";
import "@fontsource/lemon";

import CurrencySelect from "./CurrencySelect";
import TimeChart from "./TimeChart";

import type { Ccode } from "../currencies";
import useLatest from "../api/useLatest";
// import latest from "../data/latest"; // development data
import currencies from "../currencies";
import DevDashboard from "./DevDashboard";

function App() {
  const [baseCurrency, setBaseCurrency] = useState<Ccode>("EUR");
  const [baseAmount, setBaseAmount] = useState(100);
  const [targetCurrency, setTargetCurrency] = useState<Ccode>("USD");

  const { data: latest, isFetched } = useLatest(baseCurrency);

  const toAmount = useMemo(
    () => (latest ? baseAmount * latest.rates[targetCurrency] : 0),
    [baseAmount, baseCurrency, targetCurrency]
  );

  const handleBaseAmountChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(evt.target.value);
    setBaseAmount(number);
  };

  const inputSx = {
    width: 200,
    margin: 2,
    background: "rgba(255,255,255,0.2)",
  };

  return (
    <div className="app">
      <DevDashboard />
      <h1>forexer</h1>
      <div>
        <div>
          <CurrencySelect
            currency={baseCurrency}
            setCurrency={setBaseCurrency}
          />
          <OutlinedInput
            id="base-amount"
            sx={inputSx}
            type="number"
            value={baseAmount}
            onChange={handleBaseAmountChange}
            startAdornment={
              <InputAdornment position="start" sx={{ width: 40 }}>
                {currencies.find(({ code }) => code === baseCurrency)?.symbol}
              </InputAdornment>
            }
          />
        </div>
        <div>
          <CurrencySelect
            currency={targetCurrency}
            setCurrency={setTargetCurrency}
          />
          <OutlinedInput
            sx={{
              ...inputSx,
              "& fieldset": { border: "none" },
            }}
            value={toAmount}
            disabled
            startAdornment={
              <InputAdornment position="start" sx={{ width: 40 }}>
                {currencies.find(({ code }) => code === targetCurrency)?.symbol}
              </InputAdornment>
            }
          />
        </div>
      </div>
      <TimeChart base={baseCurrency} target={targetCurrency} />
    </div>
  );
}

export default App;
