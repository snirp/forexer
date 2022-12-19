import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import currencies from "../currencies";
import type { Ccode } from "../currencies";
import { Dispatch, SetStateAction } from "react";

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

// Suggested list of currencies (> 5% trade volume)
const suggestedCurrencies = currencies.filter(({ code }) =>
  mostTraded.includes(code)
);

interface Props {
  currency: string;
  setCurrency: Dispatch<SetStateAction<Ccode>>;
}

const CurrencySelect = ({ currency, setCurrency }: Props) => {
  const handleChange = (evt: SelectChangeEvent) => {
    setCurrency(evt.target.value as Ccode);
  };

  return (
    <Select
      value={currency}
      onChange={handleChange}
      sx={{ width: 300, background: "rgba(255,255,255,0.2)" }}
    >
      {suggestedCurrencies.map(({ code, currency }) => (
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
      {currencies.map(({ code, currency }) => (
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
