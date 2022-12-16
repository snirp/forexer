import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useMemo, useState } from "react";

import CurrencySelect from "./CurrencySelect";
import TimeChart from "./TimeChart";

import currencies from "../currencies"; // development data
import latest from "../data/latest";

function App() {
  // TODO query latest when base currency changes
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [baseAmount, setBaseAmount] = useState(100);
  const [targetCurrency, setTargetCurrency] = useState("USD");

  const handleBaseAmountChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const number = Number(evt.target.value);
    setBaseAmount(number);
  };

  const toAmount = useMemo(
    () => baseAmount * latest.rates[targetCurrency] || 0,
    [baseAmount, baseCurrency, targetCurrency]
  );

  return (
    <div className="App">
      <div>forexer</div>
      <div>
        <OutlinedInput
          sx={{ width: 150 }}
          type="number"
          value={baseAmount}
          onChange={handleBaseAmountChange}
          startAdornment={
            <InputAdornment position="start" sx={{ width: 20 }}>
              {currencies.find(({ code }) => code === baseCurrency)?.symbol}
            </InputAdornment>
          }
        />
        <CurrencySelect currency={baseCurrency} setCurrency={setBaseCurrency} />
      </div>
      <div>
        <OutlinedInput
          sx={{ width: 150 }}
          value={toAmount}
          disabled
          startAdornment={
            <InputAdornment position="start" sx={{ width: 20 }}>
              {currencies.find(({ code }) => code === targetCurrency)?.symbol}
            </InputAdornment>
          }
        />
        <CurrencySelect
          currency={targetCurrency}
          setCurrency={setTargetCurrency}
        />
      </div>
      <TimeChart base={baseCurrency} target={targetCurrency} />
    </div>
  );
}

export default App;
