// pages/navigate/navigate.js
Page({
  data:{
    book_list:[]
  },

  onLoad:function(options){

    wx.setNavigationBarTitle({
      title: options.title
    })
    this.setData({
      title:options.title
    })
    var that = this

    wx.request({
      url:"https://api.ireadercity.com:4430/c/main/GetBooksByBookTag?BookTagId=23&PageIndex=1&PageSize=20&at=0&av=5.50&did=3d67d2836eaebc09242818f1bca2c530c2e6c6cb&dmd=iPhone8%2C1&dtp=0&height=1334&idfa=1ECBD3C8-F748-40F6-B4B8-442D9BD6D675&lang=zh-Hans-CN&ov=10.0.1&sign=&width=750",
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        var data_desc=res.data.data.books;
        data_desc[0].desc=data_desc[0].desc.split("。")[0];
        console.log(data_desc[0].desc);
        that.setData({book_list:res.data.data.books})
        //that.setData({desc:res.data.data.books.desc})
      }


    })





  }

})