// pages/ziyuan_detail/ziyuan_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "", //跳转携带过来的文件名字
    detail_img:"",//跳转携带过来的图片路径
    web:''//跳转携带过来的下载路径
  },
  copyHandler(){
    var that=this;
    wx.setClipboardData({
      data: that.data.web,
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
  onLoad: function(options) {
    this.setData({
      name: options.name,
      detail_img:options.detail_img,
      web:options.web,
    })
    if(this.data.detail_img == '')
    {
      this.setData({
        detail_img:"https://s1.ax1x.com/2022/07/15/j4Zz7D.jpg",
      })
    }
    if(this.data.web == '')
    {
      this.setData({
        web:"jasonoak睡大觉啦！发QQ提醒他上线！2236167155",
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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