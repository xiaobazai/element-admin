import axios from 'axios'
const request = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    // timeout: 3000
})

// request.interceptors.request.use(function (config) {
//     console.log('在发送请求前做点什么呢');
//     return config
// }, function (error) {
//     return Promise.reject(error)
// })



export default request