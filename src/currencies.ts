// Currency list compiled from https://gist.github.com/nhalstead/4c1652563dd13357ab936fc97703c019

export interface Currency {
  currency: string;
  code: Ccode;
  symbol: string;
}

export type Ccode =
  | "AED"
  | "AFN"
  | "ALL"
  | "AMD"
  | "ANG"
  | "AOA"
  | "ARS"
  | "AUD"
  | "AWG"
  | "AZN"
  | "BAM"
  | "BBD"
  | "BDT"
  | "BGN"
  | "BHD"
  | "BIF"
  | "BMD"
  | "BND"
  | "BOB"
  | "BRL"
  | "BSD"
  | "BTC"
  | "BTN"
  | "BWP"
  | "BYN"
  | "BYR"
  | "BZD"
  | "CAD"
  | "CDF"
  | "CHF"
  | "CLF"
  | "CLP"
  | "CNY"
  | "COP"
  | "CRC"
  | "CUC"
  | "CUP"
  | "CVE"
  | "CZK"
  | "DJF"
  | "DKK"
  | "DOP"
  | "DZD"
  | "EGP"
  | "ERN"
  | "ETB"
  | "EUR"
  | "FJD"
  | "FKP"
  | "GBP"
  | "GEL"
  | "GGP"
  | "GHS"
  | "GIP"
  | "GMD"
  | "GNF"
  | "GTQ"
  | "GYD"
  | "HKD"
  | "HNL"
  | "HRK"
  | "HTG"
  | "HUF"
  | "IDR"
  | "ILS"
  | "IMP"
  | "INR"
  | "IQD"
  | "IRR"
  | "ISK"
  | "JEP"
  | "JMD"
  | "JOD"
  | "JPY"
  | "KES"
  | "KGS"
  | "KHR"
  | "KMF"
  | "KPW"
  | "KRW"
  | "KWD"
  | "KYD"
  | "KZT"
  | "LAK"
  | "LBP"
  | "LKR"
  | "LRD"
  | "LSL"
  | "LTL"
  | "LVL"
  | "LYD"
  | "MAD"
  | "MDL"
  | "MGA"
  | "MKD"
  | "MMK"
  | "MNT"
  | "MOP"
  | "MRO"
  | "MUR"
  | "MVR"
  | "MWK"
  | "MXN"
  | "MYR"
  | "MZN"
  | "NAD"
  | "NGN"
  | "NIO"
  | "NOK"
  | "NPR"
  | "NZD"
  | "OMR"
  | "PAB"
  | "PEN"
  | "PGK"
  | "PHP"
  | "PKR"
  | "PLN"
  | "PYG"
  | "QAR"
  | "RON"
  | "RSD"
  | "RUB"
  | "RWF"
  | "SAR"
  | "SBD"
  | "SCR"
  | "SDG"
  | "SEK"
  | "SGD"
  | "SHP"
  | "SLE"
  | "SLL"
  | "SOS"
  | "SRD"
  | "STD"
  | "SVC"
  | "SYP"
  | "SZL"
  | "THB"
  | "TJS"
  | "TMT"
  | "TND"
  | "TOP"
  | "TRY"
  | "TTD"
  | "TWD"
  | "TZS"
  | "UAH"
  | "UGX"
  | "USD"
  | "UYU"
  | "UZS"
  | "VEF"
  | "VES"
  | "VND"
  | "VUV"
  | "WST"
  | "XAF"
  | "XAG"
  | "XAU"
  | "XCD"
  | "XDR"
  | "XOF"
  | "XPF"
  | "YER"
  | "ZAR"
  | "ZMK"
  | "ZMW"
  | "ZWL";

const currencies: Currency[] = [
  {
    currency: "Albania Lek",
    code: "ALL",
    symbol: "Lek",
  },
  {
    currency: "Afghanistan Afghani",
    code: "AFN",
    symbol: "؋",
  },
  {
    currency: "Argentina Peso",
    code: "ARS",
    symbol: "$",
  },
  {
    currency: "Aruba Guilder",
    code: "AWG",
    symbol: "ƒ",
  },
  {
    currency: "Australia Dollar",
    code: "AUD",
    symbol: "$",
  },
  {
    currency: "Azerbaijan New Manat",
    code: "AZN",
    symbol: "ман",
  },
  {
    currency: "Bahamas Dollar",
    code: "BSD",
    symbol: "$",
  },
  {
    currency: "Barbados Dollar",
    code: "BBD",
    symbol: "$",
  },
  {
    currency: "Belarus Ruble",
    code: "BYR",
    symbol: "p.",
  },
  {
    currency: "Belize Dollar",
    code: "BZD",
    symbol: "BZ$",
  },
  {
    currency: "Bermuda Dollar",
    code: "BMD",
    symbol: "$",
  },
  {
    currency: "Bolivia Boliviano",
    code: "BOB",
    symbol: "$b",
  },
  {
    currency: "Bosnia Marka",
    code: "BAM",
    symbol: "KM",
  },
  {
    currency: "Botswana Pula",
    code: "BWP",
    symbol: "P",
  },
  {
    currency: "Bulgaria Lev",
    code: "BGN",
    symbol: "лв",
  },
  {
    currency: "Brazil Real",
    code: "BRL",
    symbol: "R$",
  },
  {
    currency: "Brunei Darussalam Dollar",
    code: "BND",
    symbol: "$",
  },
  {
    currency: "Cambodia Riel",
    code: "KHR",
    symbol: "៛",
  },
  {
    currency: "Canada Dollar",
    code: "CAD",
    symbol: "$",
  },
  {
    currency: "Cayman Islands Dollar",
    code: "KYD",
    symbol: "$",
  },
  {
    currency: "Chile Peso",
    code: "CLP",
    symbol: "$",
  },
  {
    currency: "China Yuan Renminbi",
    code: "CNY",
    symbol: "¥",
  },
  {
    currency: "Colombia Peso",
    code: "COP",
    symbol: "$",
  },
  {
    currency: "Costa Rica Colon",
    code: "CRC",
    symbol: "₡",
  },
  {
    currency: "Croatia Kuna",
    code: "HRK",
    symbol: "kn",
  },
  {
    currency: "Cuba Peso",
    code: "CUP",
    symbol: "₱",
  },
  {
    currency: "Czech Republic Koruna",
    code: "CZK",
    symbol: "Kč",
  },
  {
    currency: "Denmark Krone",
    code: "DKK",
    symbol: "kr",
  },
  {
    currency: "Dominican Republic Peso",
    code: "DOP",
    symbol: "RD$",
  },
  {
    currency: "East Caribbean Dollar",
    code: "XCD",
    symbol: "$",
  },
  {
    currency: "Egypt Pound",
    code: "EGP",
    symbol: "£",
  },
  {
    currency: "El Salvador Colon",
    code: "SVC",
    symbol: "$",
  },
  {
    currency: "Euro",
    code: "EUR",
    symbol: "€",
  },
  {
    currency: "Falkland Islands Pound",
    code: "FKP",
    symbol: "£",
  },
  {
    currency: "Fiji Dollar",
    code: "FJD",
    symbol: "$",
  },
  {
    currency: "Ghana Cedis",
    code: "GHS",
    symbol: "¢",
  },
  {
    currency: "Gibraltar Pound",
    code: "GIP",
    symbol: "£",
  },
  {
    currency: "Guatemala Quetzal",
    code: "GTQ",
    symbol: "Q",
  },
  {
    currency: "Guernsey Pound",
    code: "GGP",
    symbol: "£",
  },
  {
    currency: "Guyana Dollar",
    code: "GYD",
    symbol: "$",
  },
  {
    currency: "Honduras Lempira",
    code: "HNL",
    symbol: "L",
  },
  {
    currency: "Hong Kong Dollar",
    code: "HKD",
    symbol: "$",
  },
  {
    currency: "Hungary Forint",
    code: "HUF",
    symbol: "Ft",
  },
  {
    currency: "Iceland Krona",
    code: "ISK",
    symbol: "kr",
  },
  {
    currency: "India Rupee",
    code: "INR",
    symbol: "₹",
  },
  {
    currency: "Indonesia Rupiah",
    code: "IDR",
    symbol: "Rp",
  },
  {
    currency: "Iran Rial",
    code: "IRR",
    symbol: "﷼",
  },
  {
    currency: "Isle of Man Pound",
    code: "IMP",
    symbol: "£",
  },
  {
    currency: "Israel Shekel",
    code: "ILS",
    symbol: "₪",
  },
  {
    currency: "Jamaica Dollar",
    code: "JMD",
    symbol: "J$",
  },
  {
    currency: "Japan Yen",
    code: "JPY",
    symbol: "¥",
  },
  {
    currency: "Jersey Pound",
    code: "JEP",
    symbol: "£",
  },
  {
    currency: "Kazakhstan Tenge",
    code: "KZT",
    symbol: "лв",
  },
  {
    currency: "Korea (North) Won",
    code: "KPW",
    symbol: "₩",
  },
  {
    currency: "Korea (South) Won",
    code: "KRW",
    symbol: "₩",
  },
  {
    currency: "Kyrgyzstan Som",
    code: "KGS",
    symbol: "лв",
  },
  {
    currency: "Laos Kip",
    code: "LAK",
    symbol: "₭",
  },
  {
    currency: "Latvia Lat",
    code: "LVL",
    symbol: "Ls",
  },
  {
    currency: "Lebanon Pound",
    code: "LBP",
    symbol: "£",
  },
  {
    currency: "Liberia Dollar",
    code: "LRD",
    symbol: "$",
  },
  {
    currency: "Lithuania Litas",
    code: "LTL",
    symbol: "Lt",
  },
  {
    currency: "Macedonia Denar",
    code: "MKD",
    symbol: "ден",
  },
  {
    currency: "Malaysia Ringgit",
    code: "MYR",
    symbol: "RM",
  },
  {
    currency: "Mauritius Rupee",
    code: "MUR",
    symbol: "₨",
  },
  {
    currency: "Mexico Peso",
    code: "MXN",
    symbol: "$",
  },
  {
    currency: "Mongolia Tughrik",
    code: "MNT",
    symbol: "₮",
  },
  {
    currency: "Mozambique Metical",
    code: "MZN",
    symbol: "MT",
  },
  {
    currency: "Namibia Dollar",
    code: "NAD",
    symbol: "$",
  },
  {
    currency: "Nepal Rupee",
    code: "NPR",
    symbol: "₨",
  },
  {
    currency: "Netherlands Antilles Guilder",
    code: "ANG",
    symbol: "ƒ",
  },
  {
    currency: "New Zealand Dollar",
    code: "NZD",
    symbol: "$",
  },
  {
    currency: "Nicaragua Cordoba",
    code: "NIO",
    symbol: "C$",
  },
  {
    currency: "Nigeria Naira",
    code: "NGN",
    symbol: "₦",
  },
  {
    currency: "Norway Krone",
    code: "NOK",
    symbol: "kr",
  },
  {
    currency: "Oman Rial",
    code: "OMR",
    symbol: "﷼",
  },
  {
    currency: "Pakistan Rupee",
    code: "PKR",
    symbol: "₨",
  },
  {
    currency: "Panama Balboa",
    code: "PAB",
    symbol: "B/.",
  },
  {
    currency: "Paraguay Guarani",
    code: "PYG",
    symbol: "Gs",
  },
  {
    currency: "Peru Nuevo Sol",
    code: "PEN",
    symbol: "S/.",
  },
  {
    currency: "Philippines Peso",
    code: "PHP",
    symbol: "₱",
  },
  {
    currency: "Poland Zloty",
    code: "PLN",
    symbol: "zł",
  },
  {
    currency: "Qatar Riyal",
    code: "QAR",
    symbol: "﷼",
  },
  {
    currency: "Romania New Leu",
    code: "RON",
    symbol: "lei",
  },
  {
    currency: "Russia Ruble",
    code: "RUB",
    symbol: "руб",
  },
  {
    currency: "Saint Helena Pound",
    code: "SHP",
    symbol: "£",
  },
  {
    currency: "Saudi Arabia Riyal",
    code: "SAR",
    symbol: "﷼",
  },
  {
    currency: "Serbia Dinar",
    code: "RSD",
    symbol: "Дин.",
  },
  {
    currency: "Seychelles Rupee",
    code: "SCR",
    symbol: "₨",
  },
  {
    currency: "Singapore Dollar",
    code: "SGD",
    symbol: "$",
  },
  {
    currency: "Solomon Islands Dollar",
    code: "SBD",
    symbol: "$",
  },
  {
    currency: "Somalia Shilling",
    code: "SOS",
    symbol: "S",
  },
  {
    currency: "South Africa Rand",
    code: "ZAR",
    symbol: "R",
  },
  {
    currency: "Sri Lanka Rupee",
    code: "LKR",
    symbol: "₨",
  },
  {
    currency: "Sweden Krona",
    code: "SEK",
    symbol: "kr",
  },
  {
    currency: "Switzerland Franc",
    code: "CHF",
    symbol: "CHF",
  },
  {
    currency: "Suriname Dollar",
    code: "SRD",
    symbol: "$",
  },
  {
    currency: "Syria Pound",
    code: "SYP",
    symbol: "£",
  },
  {
    currency: "Taiwan New Dollar",
    code: "TWD",
    symbol: "NT$",
  },
  {
    currency: "Thailand Baht",
    code: "THB",
    symbol: "฿",
  },
  {
    currency: "Trinidad and Tobago Dollar",
    code: "TTD",
    symbol: "TT$",
  },
  {
    currency: "Turkey Lira",
    code: "TRY",
    symbol: "₤",
  },
  {
    currency: "Ukraine Hryvna",
    code: "UAH",
    symbol: "₴",
  },
  {
    currency: "United Kingdom Pound",
    code: "GBP",
    symbol: "£",
  },
  {
    currency: "United States Dollar",
    code: "USD",
    symbol: "$",
  },
  {
    currency: "Uruguay Peso",
    code: "UYU",
    symbol: "$U",
  },
  {
    currency: "Uzbekistan Som",
    code: "UZS",
    symbol: "лв",
  },
  {
    currency: "Venezuela Bolivar",
    code: "VEF",
    symbol: "Bs",
  },
  {
    currency: "Viet Nam Dong",
    code: "VND",
    symbol: "₫",
  },
  {
    currency: "Yemen Rial",
    code: "YER",
    symbol: "﷼",
  },
  {
    currency: "Zimbabwe Dollar",
    code: "ZWL",
    symbol: "Z$",
  },
];

export default currencies;
