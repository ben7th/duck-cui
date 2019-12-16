require('./env')

const { respJSON } = require('ben7th-fc-utils')
const util = require('util')
const fetch = require('node-fetch')

const { HF_API_KEY } = process.env

const func = async ({ location }) => {
  let url = encodeURI(`https://free-api.heweather.net/s6/weather/forecast?location=${ location }&key=${ HF_API_KEY }`)

  let res = await fetch(url)
  let data = await res.json()

  return { data, url }
}

module.exports.handler = (req, resp, context) => {
  let params = {
    path: req.path,
    queries: req.queries,
    headers: req.headers,
    method : req.method,
    requestURI : req.url,
    clientIP : req.clientIP,
  }

  let { location } = params.queries
  // location = decodeURIComponent(location)

  func({ location })
    .then(({ data, url }) => {
      respJSON(resp, { data, location, url })
    })
    .catch(e => {
      respJSON(resp, { error: util.inspect(e).split(`\n`) })
    })
}