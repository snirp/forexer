import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useMemo, useState } from "react";

import CurrencySelect from "./CurrencySelect";
// import TimeChart from "./TimeChart";
import TimeChart from "./TimeChart";

import currencies from "../currencies"; // development data
import latest from "../data/latest";
import useLatest from "../api/useLatest";

function App() {
  // TODO query latest when base currency changes
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [baseAmount, setBaseAmount] = useState(100);
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const { data, status } = useLatest(baseCurrency);

  const handleBaseAmountChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(evt.target.value);
    setBaseAmount(number);
  };

  const toAmount = useMemo(
    () => baseAmount * latest.rates[targetCurrency] || 0,
    [baseAmount, baseCurrency, targetCurrency]
  );

  return (
    <div className="app">
      <div>forexer</div>
      <div>
        <div>
          <OutlinedInput
            sx={{ width: 200, margin: 2 }}
            type="number"
            value={baseAmount}
            onChange={handleBaseAmountChange}
            startAdornment={
              <InputAdornment position="start" sx={{ width: 40 }}>
                {currencies.find(({ code }) => code === baseCurrency)?.symbol}
              </InputAdornment>
            }
          />
          <CurrencySelect
            currency={baseCurrency}
            setCurrency={setBaseCurrency}
          />
        </div>
        <div>
          <OutlinedInput
            sx={{ width: 200, margin: 2 }}
            value={toAmount}
            disabled
            startAdornment={
              <InputAdornment position="start" sx={{ width: 40 }}>
                {currencies.find(({ code }) => code === targetCurrency)?.symbol}
              </InputAdornment>
            }
          />
          <CurrencySelect
            currency={targetCurrency}
            setCurrency={setTargetCurrency}
          />
        </div>
      </div>
      <TimeChart base={baseCurrency} target={targetCurrency} />
    </div>
  );
}

export default App;
