// pages/ziyuan_search/ziyuan_search.js
const DF = wx.cloud.database().collection("ziyuan")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    search:"",
    isResultShow:true,
    imglist:[],
    len : 0,
  },
  onChange(event){
    console.log(event.detail)
    this.setData({
      search:event.detail
    })
  },
  onSearch(){
    var that = this;
    //延时执行，防止获取输入框值不对应
    setTimeout(function(){
      console.log(that.data.search)
    },1000)
    this.Loadlist()
  },


  Loadlist()
  {
      // 让len增加的一个方法=================================
      let that=this;
      let key = that.data.search
      console.log("list的长度",that.data.len)
      that.setData({//页面data的修改，必须用setData
       'len' :  that.data.imglist.length,
    })
    DF.where(wx.cloud.database().command.or([{
      courage_name:wx.cloud.database().RegExp({
        regexp:key,
        options:"i",
      })
    },
    {
      othername:wx.cloud.database().RegExp({
        regexp:key,
        options:"i",
      })
    }
  ]))
    .get()
    .then(res=> {
      console.log("请求的数据",res)
      this.setData({
        imglist:res.data,
        isResultShow:false
       })
       if(res.data.length == 0)
       this.setData({
        isResultShow:true
       })
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