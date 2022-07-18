// pages/zhanghu_anquan/zhanghu_anquan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic_num:null,
    src1:"https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F6~1.jpg",
  },
  pic1(){this.setData({pic_num:1});this.choseimg()},
  pic2(){this.setData({pic_num:2});this.choseimg()},
  pic3(){this.setData({pic_num:3});this.choseimg()},
  pic4(){this.setData({pic_num:4});this.choseimg()},
  pic5(){this.setData({pic_num:5});this.choseimg()},
  pic6(){this.setData({pic_num:6});this.choseimg()},
  choseimg()
  {
    if(this.data.pic_num == 1){this.setData({src1:"https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F6~1.jpg"})}
    if(this.data.pic_num == 2){this.setData({src1:"https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F5~1.jpg"})}
    if(this.data.pic_num == 3){this.setData({src1:"https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F4~1.jpg"})}
    if(this.data.pic_num == 4){this.setData({src1:"https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F3~1.jpg"})}
    if(this.data.pic_num == 5){this.setData({src1:"https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F2~1.jpg"})}
    if(this.data.pic_num == 6){this.setData({src1:"https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F1~1.jpg"})}
  },
  save_img()
  {
    wx.setStorageSync('login_pic', this.data.src1)
    setTimeout(()=>{
      wx.showToast({title: '保存成功',})
    },500)
    wx.switchTab({url: '/pages/my_detail/my_datail',})
  },
  close_login()
  { 
    wx.setStorageSync('student_num', "欢迎您，请登录")
    wx.setStorageSync('student_pas', "0")
    wx.setStorageSync('login_pic', "https://jasonoak-miniprogrom-backpic.oss-cn-hangzhou.aliyuncs.com/insert-pic/%E5%A4%B4%E5%83%8F6~1.jpg")
    setTimeout(()=>{
      wx.showToast({title: '登出成功',})
    },500)
    wx.switchTab({url: '/pages/my_detail/my_datail',})
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