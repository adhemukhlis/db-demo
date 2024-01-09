import axios from 'axios'
const axiosInstance = axios.create({
	baseURL: process.env.NEXT_BACKEND_API_HOST
})
const _apiService = () => {
	axiosInstance.interceptors.request.use(
		async (config) => {
			config.url = config.url + '.json'
			return config
		},
		(error) => {
			Promise.reject(error)
		}
	)
	return axiosInstance
}
const apiService = _apiService()
export default apiService
