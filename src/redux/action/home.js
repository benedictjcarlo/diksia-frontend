import axios from "axios"
import { API_HOST } from "../../config"

export const getDonationData = () => (dispatch) => {
    axios.get(`${API_HOST.url}/donation`)
   .then((res) => {
        dispatch({type: 'SET_DONATION', value: res.data.data.data})
        dispatch({type: 'SET_ALL', value: res.data.data.data})
    })
   .catch((err) =>{
        console.log('err: ', err)
    })
}

export const setType = (type) => {
    return {
        type: 'SET_TYPE',
        value: type,
    };
}