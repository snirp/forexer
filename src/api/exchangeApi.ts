import axios from "axios";

const API_KEY = "pTRfPWmYAtJODOVMQQ2d5sDfVkZdEFSK";
const API_ROOT = "https://api.apilayer.com/exchangerates_data/";

const exchangeApi = axios.create({
  baseURL: API_ROOT,
  headers: {
    apikey: API_KEY,
  },
});

export default exchangeApi;
