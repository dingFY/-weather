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
    weatherIconUrl: 'https://cdn.heweather.com/cond_icon/', // 天气小图标
    requestUrl: {
      // 旧API
      weather: 'https://free-api.heweather.net/s6/weather', 
      hourly: 'https://free-api.heweather.net/s6/weather/hourly',
    },
  },
})