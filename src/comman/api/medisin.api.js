import { getRequest, postRequest } from "../request"


export const getAllMedisinAPI = () => {
    return getRequest('medicines')
}

export const postAllMedisinAPI = (data) => {
    return postRequest('medicines', data)
}