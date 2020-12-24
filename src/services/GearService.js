import axios from 'axios'

// single axios instance we can use for the entire app

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
    // apiClient2 is needed due to size limits of my-json-server
    baseURL: 'https://my-json-server.typicode.com/MikeParish/json-server-2',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  
  export default {
    getPopGears() {
      //popgears is added onto baseURL so we can grab all of the popular gear from our JSON object
      return apiClient.get('/popgears')
    },
    getGears() {
      return apiClient.get('/gears')
    },
    getRecVideos() {
      return apiClient2.get('/recvideos')
    },
    getRevVideos() {
      return apiClient2.get('/revvideos')
    }
  }