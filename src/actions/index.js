import axios from "axios";

const proxyurl = "http://0.0.0.0:9999/";
const apiBaseUrl = "127.0.0.1:8080";
export const client = axios.create({
    baseURL: proxyurl+apiBaseUrl,
    headers: {
        "Content-Type": "application/json"
    }
})