import axios from "axios";
import { showMessage } from "react-native-flash-message";
import { API_HOST } from '../../config';
import { storeData } from "../../utils";
import { setLoading } from "./global";

export const daftarAction = (dataRegister, navigation) => (dispatch) => {
    axios.post(`${API_HOST.url}/register`, dataRegister)
    .then(res => {
        dispatch(setLoading(false));
        showToast('Registrasi berhasil! Tolong cek email Anda untuk melakukan verifikasi email.', 'success');
        navigation.reset({index: 0, routes: [{name: 'Masuk'}]});
    })
    .catch(err => {
        dispatch(setLoading(false))
        console.log('sign up error: ', err.response)
        showToast(err?.response?.data?.data?.error)
    })
}

export const masukAction = (form, navigation) => (dispatch) => {
    dispatch(setLoading(true))
    axios.post(`${API_HOST.url}/login`, form)
        .then((res) => {
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`
            const profile = res.data.data.user
            dispatch(setLoading(false))
            console.log(`${res.data.data.token_type} ${res.data.data.access_token}`)

            storeData('token', token)
            storeData('userProfile', profile )
            navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
        })
        .catch((err) => {
            dispatch(setLoading(false))
            showToast(err?.response?.data?.meta?.message)
        });
}

const showToast = (message, type) => {
    showMessage({
        message,
        type: type === 'success' ? 'success' : 'danger',
        backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    })
}