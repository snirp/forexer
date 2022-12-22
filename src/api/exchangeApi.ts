import axios from "axios";

const API_KEY = "gM6eojoc2Dw9wLvh1az5gXdN5DJzMmj7";
const API_ROOT = "https://api.apilayer.com/exchangerates_data/";

const exchangeApi = axios.create({
  baseURL: API_ROOT,
  headers: {
    apikey: API_KEY,
  },
});

export default exchangeApi;
