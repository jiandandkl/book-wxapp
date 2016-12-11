
var app = getApp();
Page({
    data: {
        userInfo: {},
        personal:[
            {name: '收藏', icon: '../../images/collect.png'},
            {name: '已下载', icon: '../../images/download.png', class: 'border-lr'},
            {name: '设置', icon: '../../images/setting.png'},
        ],
        footerdata:[
            {text: '礼券'},
            {text: '动态'},
            {text: '购书单'},
            {text: '今日免费'},
        ]
    },
    onLoad: function () {
        console.log('onLoad')
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