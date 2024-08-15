import axios from 'axios'
import { getData } from '../../utils'
import { API_HOST } from '../../config'

export const getAktivitas = () => (dispatch) => {
    getData('token').then(resToken => {
        console.log('token aktivitas ', resToken)
        axios.all([
            axios.get(`${API_HOST.url}/transaction?status=BERHASIL`, {
                headers: {
                    'Authorization': resToken
                }
            }),
            axios.get(`${API_HOST.url}/transaction?status=GAGAL`, {
                headers: {
                    'Authorization': resToken
                }
            }),
            axios.get(`${API_HOST.url}/shipment?status=DITERIMA`, {
                headers: {
                    'Authorization': resToken
                }
            }),

        ])
        .then(axios.spread((res1, res2, res3) => {
            const success = res1.data.data.data
            const failed = res2.data.data.data
            const received = res3.data.data.data
            dispatch({type: 'SET_AKTIVITAS', value: [...success, ...failed, ...received],
            })
        })
        )
        .catch(err => {
            console.log('error get activity: ', err.response)
        })
    })
}