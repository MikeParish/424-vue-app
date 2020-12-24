import axios from 'axios'

/* single axios instance we can use for the entire app
**
*/
const apiClient = axios.create({
    // baseURL is the base url for all calls to use
    baseURL: 'https://my-json-server.typicode.com/MikeParish/json-server',
    withCredentials: false,
    headers: {
      // authentication and configuration for communicating with server
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

const apiClient2 = axios.create({
    // baseURL is the base url for all calls to use
    baseURL: 'https://my-json-server.typicode.com/MikeParish/json-server-2',
    withCredentials: false,
    headers: {
      // authentication and configuration for communicating with server
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
  export default {
    getPopGears() {
      //added onto baseURL so we can grab all the gear from our database
      return apiClient.get('/popgears')
    },
    getGears() {
      //added onto baseURL so we can grab all the gear from our database
      return apiClient.get('/gears')
    },
    getRecVideos() {
      //added onto baseURL so we can grab all the gear from our database
      return apiClient2.get('/recvideos')
    },
    getRevVideos() {
      //added onto baseURL so we can grab all the gear from our database
      return apiClient2.get('/revvideos')
    }
  }