const getForecast = async ({ location }) => {
  let url = `https://1246105.cn-hangzhou.fc.aliyuncs.com/2016-08-15/proxy/heweather/api/?location=${ location }`

  let res = await fetch(url)
  let data = await res.json()

  return data.data
}

export default getForecast