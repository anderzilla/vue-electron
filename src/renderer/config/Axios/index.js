import qs from 'qs'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const apiHost = process.env.VUE_APP_API_URL

const axiosInstance = axios.create({
  baseURL: apiHost,
  headers: {
    'Accept': 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json'
  },
  paramsSerializer (params) {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

Vue.use(VueAxios, axiosInstance)

export default axiosInstance
