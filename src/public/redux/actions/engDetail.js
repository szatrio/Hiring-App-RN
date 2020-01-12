import axios from 'axios';
import { BASE_URL } from 'react-native-dotenv'

const api = 'http://'+BASE_URL+':8000/engineer/'

export const engDetail = (e, token) => dispatch => {
    axios.get(api+e, { headers: { Authorization: `Bearer ${token}`}})
    .then(res =>{
      dispatch({
        type: "ENGINEER_DETAIL",
        payload : res.data.data[0]
      })
    })
    .catch(err =>{
      console.log(err)
    })
}