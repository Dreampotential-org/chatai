import axios from "axios";
const baseURL = "https://api.dreampotential.org/";
console.log("BASEURL", baseURL);
let headers = {};

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
