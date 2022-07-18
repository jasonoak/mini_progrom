// pages/xiaoyuan_buauty/xiaoyuan_buauty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['东南校区', '东湖校区'],
    currentTab: 0,
    imglist:[
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/1.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/2.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/3.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/4.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/5.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/6.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/7.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/dongnan/8.jpg",
      ],
       imglist_donghu:[
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/donghu/1.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/donghu/2.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/donghu/3.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/donghu/4.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/donghu/5.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/donghu/6.jpg",
      "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/beauty-school/donghu/7.jpg",

      ],
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imglist // 需要预览的图片http链接列表  
    })
  } ,   
  previewImage1: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imglist_donghu // 需要预览的图片http链接列表  
    })
  } ,   
   // 改变顶部导航
   changeNavBar: function (e) {
    this.setData({
        currentTab: e.currentTarget.dataset.tab_index
    })
    wx.pageScrollTo({//滚动回0px
      scrollTop: 0,
      duration:0
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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