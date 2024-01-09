import { LRUCache } from 'lru-cache'
const ssrCache = new LRUCache({
	max: 500,
	maxAge: 1000 * 60 * 60 * 24 // 24h
})
export default ssrCache
