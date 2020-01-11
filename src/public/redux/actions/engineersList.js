import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv'

const api = 'http://'+BASE_URL+':8000/engineer/'

// export const loginAction = (data) => ({
//   type: 'LOGIN_FULFILLED',
//   payload: axios.post(api, data),
// })

export const getEngineersAction = (token) => dispatch => {
    // console.log("terpanggil", api)
    axios.get(api+'?limit=5&page=1', { headers: { Authorization: `Bearer ${token}`}})
    .then(res => {
        // console.log(JSON.stringify(res.data, null, 4), "ini res")
        dispatch({
            type: 'GET_ENGINEERS_FULFILLED',
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err,"Get Engineers Failed")
    })
}