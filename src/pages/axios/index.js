// axios全局配置
import axios from 'axios'
// 服务器端口号是8080
axios.defaults.baseURL=' http://localhost:8080/'
// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code === 400) {
            return {
                message:"登录过时,退出请重新登录"
            };
        }
        return response.data;
    },
    error => {
        return Promise.reject(error.response) // 返回接口返回的错误信息
    }
);
export default axios