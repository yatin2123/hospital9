import { deleteRequest, getRequest, postRequest, updateRequest } from "../request"


export const getAllMedisinAPI = () => {
    return getRequest('medicines')
}

export const postAllMedisinAPI = (data) => {
    console.log(data);
    return postRequest('medicines', data)
}

export const deleteAllMedisinAPI = (id) => {
    return deleteRequest("medicines/", id)
}

export const updateAllMedisinAPI = (data) => {
    console.log(data);
    return updateRequest("medicines", data)
}