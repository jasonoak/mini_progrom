// pages/bizhi_load/bizhi_load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[
      'https://s1.ax1x.com/2022/07/14/jfxpLt.jpg',
      'https://s1.ax1x.com/2022/07/14/jfxSsI.jpg',
      'https://s1.ax1x.com/2022/07/14/jfvzQA.jpg',
      'https://s1.ax1x.com/2022/07/14/jfvvzd.jpg',
      'https://s1.ax1x.com/2022/07/14/jfvXJe.jpg',
      'https://s1.ax1x.com/2022/07/14/jfvOiD.jpg',
     ' https://s1.ax1x.com/2022/07/14/jfvqIO.jpg',
    '  https://s1.ax1x.com/2022/07/14/jfvbdK.jpg',
    '  https://s1.ax1x.com/2022/07/14/jfvHZ6.jpg',
     ' https://s1.ax1x.com/2022/07/14/jfvTqx.jpg',
     ' https://s1.ax1x.com/2022/07/14/jfvos1.jpg',
      'https://s1.ax1x.com/2022/07/14/jfvIMR.jpg',
    '  https://s1.ax1x.com/2022/07/14/jfv4z9.jpg',
     ' https://s1.ax1x.com/2022/07/14/jfvhRJ.jpg',
    '  https://s1.ax1x.com/2022/07/14/jfvfG4.jpg',
     ' https://s1.ax1x.com/2022/07/14/jfvWiF.jpg',
     ' https://s1.ax1x.com/2022/07/14/jfv2IU.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRoiy4.jpg',
      'https://s1.ax1x.com/2022/07/13/jRoPlF.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRoCSU.jpg',
    '  https://s1.ax1x.com/2022/07/13/jRIvoq.jpg',
      'https://s1.ax1x.com/2022/07/13/jRIjwn.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRIXes.jpg',
      'https://s1.ax1x.com/2022/07/13/jRILLj.jpg' ,
      'https://s1.ax1x.com/2022/07/13/jRIqyQ.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRIbQg.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRIHSS.jpg',
    '  https://s1.ax1x.com/2022/07/13/jRITW8.jpg',
    '  https://s1.ax1x.com/2022/07/13/jRIoJf.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRIIFP.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRI4ot.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRIhdI.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRIfeA.jpg',
     ' https://s1.ax1x.com/2022/07/13/jRIRLd.jpg',
      'https://s1.ax1x.com/2022/07/13/jRI2sH.jpg',
      'https://s1.ax1x.com/2022/07/13/jRIgQe.jpg',
      'https://s1.ax1x.com/2022/07/13/jR5M4K.jpg',
      'https://s1.ax1x.com/2022/07/13/jR5KN6.jpg',
     ' https://s1.ax1x.com/2022/07/13/jR5mH1.jpg',
      'https://s1.ax1x.com/2022/07/13/jR5eBR.jpg',
      'https://s1.ax1x.com/2022/07/13/jR5Zu9.jpg',
      'https://s1.ax1x.com/2022/07/13/jR5EjJ.jpg',
    '  https://s1.ax1x.com/2022/07/13/jR5Ac4.jpg',
     ' https://s1.ax1x.com/2022/07/13/jR5k3F.jpg',
     ' https://s1.ax1x.com/2022/07/13/jR5F9U.jpg',
    '  https://s1.ax1x.com/2022/07/13/jR5PhT.jpg',
   '   https://s1.ax1x.com/2022/07/13/jR5CNV.jpg',
   '   https://s1.ax1x.com/2022/07/13/jR59A0.jpg'
   ],
     output:true
  },
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.imglist // 需要预览的图片http链接列表  
    })
  } ,   
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
    this.setData({
      output : false
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