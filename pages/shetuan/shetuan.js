// pages/shetuan/shetuan.js
const DD = wx.cloud.database().collection("shetuan")
Page({
  
  data: {
    mainActiveIndex: 0,
    activeId: null,
    items: [],

  },
// 左边
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
    console.log(this.data.mainActiveIndex)
  },
// 右边
  onClickItem({ detail = {} }) {
    const activeId = this.data.activeId === detail.id ? null : detail.id;
    this.setData({ activeId });
    console.log(this.data.activeId)
    
    let userStr = JSON.stringify(this.data.activeId)
    wx.navigateTo({
      url: '/pages/shetuan_detail/shetuan_detail?id='+userStr,
    })
  },
  getDataList()
  {
    DD.skip(0).get()
    .then(res => {
      console.log("获取成功",res.data)
       this.setData({
        items:this.data.items.concat(res.data)
       })
       console.log("shuju2222",this.data.items)
    })
    .catch(res => {
      console.log("获取失败",res)
    })
  },
  // ================
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  this.getDataList()
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
console.log("okok")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})