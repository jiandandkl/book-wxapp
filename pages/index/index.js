//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    books:[]
  },
  onLoad: function () {
    console.log('onLoad')

    var that = this;

    wx.request({
      url: 'https://api.ireadercity.com:4430/c/main/GetJingXuanTagInfo?ReqType=1&TagId=1&at=0&av=5.50&did=3d67d2836eaebc09242818f1bca2c530c2e6c6cb&dmd=iPhone8%2C1&dtp=0&height=1334&idfa=1ECBD3C8-F748-40F6-B4B8-442D9BD6D675&lang=zh-Hans-CN&ov=10.0.1&sign=&width=750',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({books:res.data.data.carousels})
      }
    })

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
