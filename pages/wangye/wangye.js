// pages/wangye/wangye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    path:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var webview_id=options.webview_id;  
    this.setData({
       id: webview_id
    })
    if(this.data.id == "jindu_detail")
    {
      this.setData({
        path: "https://mp.weixin.qq.com/s?__biz=MzkzNDM5MTU5Mg==&mid=2247483659&idx=1&sn=4781192a32d9e6204f0b4fc2ab6efb41&chksm=c2bcbb4cf5cb325acb2691e72a6a0fb48af5460d7bb8d3cfefb0f4c1d81592914ea191419a48&token=1645082005&lang=zh_CN#rd"
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