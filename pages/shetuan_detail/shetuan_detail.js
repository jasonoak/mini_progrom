// pages/shetuan_detail/shetuan_detail.js
const DE = wx.cloud.database().collection("shetuan_detail")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id_front:null,
    word_real:'',
    web_src:'',
  },
  search_word()
  {
    let that = this
    DE.where({
        id : that.data.id_front//查询
      }).get({
        success(res){
           console.log("查询成功1！",res)
           that.setData({
            word_real:res.data[0].word,
            web_src:res.data[0].web
          })
        },
        fail(res){
          console.log("失败！",res)
        }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('id', JSON.parse(options.id))
    this.setData({
      id_front:JSON.parse(options.id)
    })
    console.log('id1', this.data.id_front)


    this.search_word()
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