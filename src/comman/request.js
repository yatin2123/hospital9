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
        method: "GET",
        url: path
    })
}

export const postRequest = (path, data) => {
    console.log(path, data);
    return sendRequest({
        method: "POST",
        url: path,
        headers: { 'content-type': 'application/json' },
        data: data
    })
}

export const deleteRequest = (path, id) => {
    console.log(path, id);
    return sendRequest({
        method: "DELETE",
        url: path + id,
       
    })
}

export const updateRequest = (path, data) => {
    console.log(path, data);
    return sendRequest({
        method: "PUT",
        url: path + data.id,
        headers: { 'content-type': 'application/json' },
        data: data
       
    })
}

