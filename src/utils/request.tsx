import axios from 'axios'

const instance = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})

instance.interceptors.request.use(
  (config: any) => {
    console.log(config)
    return config
  },
  (error: any) => {
    console.log(error)
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      return response.data
    }
    return Promise.reject()
  },
  (error: any) => {
    console.log(error)
    return Promise.reject(error)
  },
)

export default instance
