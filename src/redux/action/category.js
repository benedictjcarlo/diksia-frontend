import axios from 'axios';
import { API_HOST } from '../../config';

export const getDonationDataByTypes = (type) => (dispatch) => {
  axios.get(`${API_HOST.url}/donation?types=${type}`)
    .then((res) => {
      if (type === 'uang') {
        dispatch({ type: 'SET_UANG', value: res.data.data.data });
      } else if (type === 'perangkat') {
        dispatch({ type: 'SET_PERANGKAT', value: res.data.data.data });
      } else {
        dispatch({ type: 'SET_ALL', value: res.data.data.data });
      }
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};