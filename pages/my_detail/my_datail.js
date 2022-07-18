// pages/my_detail/my_datail.js
const DB = wx.cloud.database().collection("list")
Page({
  goto_login(){
    wx.navigateTo({ url: '/pages/login_in/login_in',})
  },

  /**
   * 页面的初始数据
   */
  data: {
    userInfo1:'欢迎您，请登录',
    userInfo2:'',
    list:[],
    login_pic:""
  },
    get_pic()
    {
      let that = this
        wx.getStorage({
          key: 'login_pic',
          success:function(res) {
            console.log(res.data);
             that.setData({//页面data的修改，必须用setData
               'login_pic' : res.data,
            })
          }
        })
    },
    goto_zhanghu_anquan()
    {
      wx.navigateTo({url: '/pages/zhanghu_anquan/zhanghu_anquan',})
    },
    goto_help_word()
    {
      wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
    },
    goto_joinus()
    {
      wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
    },
    goto_connectme()
    {
      wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
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
    let that=this;
    this.get_pic()
    wx.getStorage({
      key: 'student_num',
      success:function(res) {
        console.log(res.data);
         that.setData({//页面data的修改，必须用setData
           'userInfo1' : res.data,
        })
      }
    }),
    wx.getStorage({
      key: 'student_pas',
      success:function(res) {
        console.log(res.data);
         that.setData({//页面data的修改，必须用setData
           'userInfo2' : res.data,
        })
      }
    })
  },
  //获取数据库的数据，20条一组，要调用分页显示
getDataList()
{
  let len = this.data.list.length
  console.log("list的长度",len)
  DB.skip(len).get()
  .then(res => {
    console.log("获取成功",res)
    this.setData({
      list:this.data.list.concat(res.data)
    })
  })
  .catch(res => {
    console.log("获取失败",res)
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