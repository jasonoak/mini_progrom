// pages/ziyuan/ziyuan.js
const DF = wx.cloud.database().collection("ziyuan")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[
    
   ],
     output:true,
     len : 0,
     type:'',
     id:''
  },
  getDataList()
  {
    // 让len增加的一个方法=================================
    let that=this;
     console.log("list的长度",this.data.len)
     that.setData({//页面data的修改，必须用setData
      'len' :  this.data.imglist.length,
   })

     console.log("list的长度",this.data.len)
     DF.skip(this.data.len).get()
    .then(res => {
      console.log("获取成功",res.data)
       this.setData({
        imglist:this.data.imglist.concat(res.data),
        
       })
    })
    .catch(res => {
      console.log("获取失败",res)
    })
  },

  goto_search()
  {
    wx.navigateTo({ url: '/pages/ziyuan_search/ziyuan_search',})
  },
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
     this.getDataList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})