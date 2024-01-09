import apiService from '@/utils/apiService'
import ssrCache from '@/utils/cache'

export default async function handler(req, res) {
	try {
		if (ssrCache.has('root')) {
			const cache = ssrCache.get('root')
			res.status(200).send({ message: 'success', data: cache, lru: true })
		} else {
			const result = await apiService.request({
				method: 'GET',
				url: '/'
			})
			const data = result.data
			ssrCache.set('root', data || [])
			res.status(200).json({ message: 'success', data, lru: false })
		}
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Internal Server Error' })
	}
}
