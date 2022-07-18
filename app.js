// app.js
App({
  onLaunch : function(){
    wx.cloud.init({
      env:"cloud1-9gs0h0jzebb88265"
    });
    //=============全局字体设置=======================//
    
    // wx.loadFontFace({
    //   global:true, // 版本 2.10.0 后 全局app.js 使用
    //   family: 'FZKT',
    //   source: 'url("https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/font-back/1.ttf")',
    //   success: function (res) {
    //     console.log(res.status) //  loaded
    // },
    // fail: function (res) {
    //     console.log(res.status) //  error
    // },
  
    // complete: function (res) {
    //     console.log(res.status);
    // }
    // });

    // //=============全局字体设置=======================//
    // wx.loadFontFace({
    //   global:true, // 版本 2.10.0 后 全局app.js 使用
    //   family: 'wanzheng',
    //   source: 'url("https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/font-back/wanzheng.ttf")',
    //   success: function (res) {
    //     console.log(res.status) //  loaded
    // },
    // fail: function (res) {
    //     console.log(res.status) //  error
    // },
  
    // complete: function (res) {
    //     console.log(res.status);
    // }
    // });

    
  },
 
    
  
 
  
})
