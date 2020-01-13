import axios from 'axios'
import { BASE_URL } from 'react-native-dotenv'

const url = 'http://'+BASE_URL+':8000/project/'

export const getProject = (token) => dispatch => {
    axios.get(url+`mycompany`, { headers: { Authorization: `Bearer ${token}`}})
    .then(res =>{
      console.log(res.data.data,"hasil res")
      dispatch({
        type: "GET_PROJECT",
        payload : res.data.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
}

export const getEngProject = (token, id) => dispatch => {
  axios.get(url, { headers: { Authorization: `Bearer ${token}`}})
  .then(res =>{
    console.log(res.data.data,"hasil res")
    dispatch({
      type: "GET_PROJECT",
      payload : res.data.data.filter((p) => p.id_engineer == id)
    })
  })
  .catch(err =>{
    console.log(err)
  })
}

export const addProject = (token, data) => {
  console.log(data," ini data di actio")
  console.log(url,"ini rl di actio")
  axios.post(url, data, { headers: { Authorization: `Bearer ${token}`}})
}

export const updateProject = (token, data, id_project) => {
  console.log(data," ini data hire engineer")
  console.log(url,"ini rl di actio")
  axios.patch(url+id_project, data, { headers: { Authorization: `Bearer ${token}`}})
}

export default getProject