import axios from "axios";
import { BASE_URL } from "../utils/baseURL";


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 2000,
});

export const sendRequest = (config) => {
    return instance.request(config)
}

export const getRequest = (path) => {
    return sendRequest({
        mathod: "GET",
        url: path
    })
}
