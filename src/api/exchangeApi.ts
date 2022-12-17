import axios from "axios";

const API_KEY = "aDUNQ3R6tCm2glAYbf8GB3JEPmZTiXMd";
const API_ROOT = "https://api.apilayer.com/exchangerates_data/";

const exchangeApi = axios.create({
  baseURL: API_ROOT,
  headers: {
    apikey: API_KEY,
  },
});

export default exchangeApi;
