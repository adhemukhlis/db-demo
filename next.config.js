/** @type {import('next').NextConfig} */
const nextConfig = {
	publicRuntimeConfig: {
		// Will be available on both server and client
		AppName: 'DB Demo'
	},
	eslint: {
		dirs: ['.']
	},
	poweredByHeader: false,
	trailingSlash: false,
	// transpilePackages: [
	// 	'antd',
	// 	'rc-util',
	// 	'@babel/runtime',
	// 	'@ant-design/icons',
	// 	'@ant-design/icons-svg',
	// 	'rc-pagination',
	// 	'rc-picker',
	// 	'rc-tree',
	// 	'rc-table'
	// ],
	reactStrictMode: false
}

module.exports = nextConfig