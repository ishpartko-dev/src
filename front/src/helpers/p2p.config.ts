const isProd = process.env.node_env === 'production'
const host = isProd ? 'localhost' : '/'
const port = null || 9000
const secure = isProd

export default {
  host,
  debug: 0,
  port,
  secure,
  path: '/api/p2p/'
}
