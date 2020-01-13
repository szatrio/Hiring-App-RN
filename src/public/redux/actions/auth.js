import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'

const api = 'http://'+BASE_URL+':8000/user/login'

// export const loginAction = (data) => ({
//   type: 'LOGIN_FULFILLED',
//   payload: axios.post(api, data),
// })

export const loginAction = (data) => dispatch => {
    console.log("terpanggil",data, api)
    axios.post(api, data)
    .then(res => {
        // console.log(res.data.data, "ini res")
        dispatch({
            type: 'LOGIN_FULFILLED',
            payload: res.data.data
        })
    })
    .catch(err => {
        console.log(err,"email or password wrong")
    })
}