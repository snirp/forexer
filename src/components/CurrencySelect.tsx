import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import currencies from "../currencies";
import type { Ccode } from "../currencies";

const mostTraded: Ccode[] = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "CNY",
  "AUD",
  "CAD",
  "CHF",
];

interface Props {
  currency: string;
  setCurrency: (arg: string) => void;
}

const CurrencySelect = ({ currency, setCurrency }: Props) => {
  const handleChange = (evt: SelectChangeEvent) => {
    console.log(evt.target.value);
    setCurrency(evt.target.value);
  };

  const suggestedCurrencies = currencies.filter(({ code }) =>
    mostTraded.includes(code)
  );
  return (
    <Select value={currency} onChange={handleChange} sx={{ width: 300 }}>
      {suggestedCurrencies.map(({ code, currency, symbol }) => (
        <MenuItem
          value={code}
          key={code}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ flexGrow: 1 }}>{currency}</div>
          <div style={{ flexBasis: 50 }}>{code}</div>
        </MenuItem>
      ))}
      <hr />
      {currencies.map(({ code, currency, symbol }) => (
        <MenuItem
          value={code}
          key={code}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ flexGrow: 1 }}>{currency}</div>
          <div style={{ flexBasis: 50 }}>{code}</div>
        </MenuItem>
      ))}
    </Select>
  );
};

export default CurrencySelect;
