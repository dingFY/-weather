App({
  onLaunch () {
    wx.cloud.init({
      env: 'weather-4gkvmicz8bd72dee',
      traceUser: true,
    })
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.systeminfo = res
        this.globalData.isIPhoneX = /iphonex/gi.test(res.model.replace(/\s+/, ''))
      },
    })
  },
  globalData: {
    // 是否保持常亮，离开小程序失效
    keepscreenon:false,
    systeminfo: {},
    isIPhoneX: false,
    key: '9d4c739cbecb483eaae110d4e0eadc14', // 和风天气API接口key(开发)
    // key: 'c6c2a9fc69704fc6a6e617c5a0d35295', // 和风天气API接口key（商业）
    weatherIconUrl: 'https://cdn.heweather.com/cond_icon/', // 天气小图标
    requestUrl: {
      // 旧API
      weather: 'https://free-api.heweather.net/s6/weather', 
      hourly: 'https://free-api.heweather.net/s6/weather/hourly',

      // weather: 'https://free-api.heweather.net/s6/weather', 
      //  hourly: 'https://api.qweather.net/s6/weather/hourly',

      
      // 新API
      // city: 'https://geoapi.qweather.com/v2/city/lookup',  // 获取城市
      // now: 'https://devapi.qweather.com/v7/weather/now', // 当前天气
      // sevenDay: 'https://api.qweather.com/v7/weather/7d', // 七天预报
      // indices: 'https://devapi.qweather.com/v7/indices/1d' // 当前生活指数
      // weather: 'https://api.qweather.com/v7/weather/now',  // 商业
    },
  },
})