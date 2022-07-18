// pages/qinghua/qinghua.js
const DE = wx.cloud.database().collection("daily_word")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daily_Word : '',//每日一言
    show:false
  },
 //=============每日一言===================================
 get_dayily_word()
 {
   let that = this
   var a = Math.floor((Math.random() * 10))
   console.log("目前在每日一言收到的随机数是",a)
   DE.where({
     numid : String(a) //查询输入的学号所对应的密码，如果学号都是错的，就下去
   }).get({
     success(res){
        console.log("查询成功1！",res.data[0].daily_word)
        that.setData({//赋值
         daily_Word :res.data[0].daily_word
         })
     },
     fail(res){
       console.log("失败！",res)
     }
   })
   
 },
 copyHandler(){
  var that=this;
  wx.setClipboardData({
    data: that.data.daily_Word,
    success() {
      wx.showToast({
        title: '复制成功',
        icon: 'success',
        duration: 1000
      })
    }
  })
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.get_dayily_word()
    this.getFLoad()
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    setTimeout(()=>
    {
      this.setData({
        show : true
      })
    }, 1000)

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    wx.onAccelerometerChange(function (e) {//摇一摇
      console.log(e.x)
      console.log(e.y)
      console.log(e.z)
      if (Math.abs(e.x) > 0.6 && Math.abs(e.y) > 0.6) {
      
       
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})