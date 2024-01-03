import { getRequest } from "../request"


export const getAllMedisinAPI = () => {
    return getRequest('medicines')
}