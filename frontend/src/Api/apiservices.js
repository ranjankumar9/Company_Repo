
import axios from "axios";
const ip = "localhost"
const port = "4500"
const base_url = `http://${ip}:${port}`

export const Control_username =  (payload) => {
    try {
        const response =  axios.post(`${base_url}/`, payload)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}


export const Control_form_Api = async (payload) => {
    try {
        const response = await axios.post(`${base_url}/home/form`, payload)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const Control_form_get_Api = async () => {
    try {
        const response = await axios.get(`${base_url}/home/form/get`)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const Control_form_edit_Api = async (payload,id) => {
    try {
        const response = await axios.patch(`${base_url}/form/update/${id}`,payload)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}