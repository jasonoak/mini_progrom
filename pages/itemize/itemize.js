// pages/itemize/itemize.js
const DG = wx.cloud.database().collection("xiaoyuan_jinxuan")
const DH = wx.cloud.database().collection("pu_activities")
const DI = wx.cloud.database().collection("volunteers_activities")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['校园精选', '实用工具'],
    currentTab: 0,
    currentTab1:0,
    detail_list:[],//校园的数组
    detail_list2:[],//校园的数组
    detail_list3:[],
    len:"",//校园的list
    len2:"",//pu的list
    len3:"",//pu的list
    active: 0,
  },
  onChange(event) {
    // wx.showToast({
    //   title: `切换到标签 ${event.detail.name}`,
    //   icon: 'none',
    // });
    this.setData({
    currentTab1:event.detail.name
    })
  },
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
getDataList1()
{
  // 让len增加的一个方法=================================
  let that=this;
   console.log("list的长度",this.data.len)
   that.setData({//页面data的修改，必须用setData
    'len' :  this.data.detail_list.length,
 })

   console.log("list的长度",this.data.len)
   DG.skip(this.data.len).get()
  .then(res => {
    console.log("获取成功",res.data)
     this.setData({
      detail_list:this.data.detail_list.concat(res.data),
      
     })
  })
  .catch(res => {
    console.log("获取失败",res)
  })
},
getDataList2()
{
  // 让len增加的一个方法=================================
  let that=this;
   console.log("list的长度",this.data.len2)
   that.setData({//页面data的修改，必须用setData
    'len2' :  this.data.detail_list2.length,
 })

   console.log("list的长度",this.data.len2)
   DH.skip(this.data.len2).get()
  .then(res => {
    console.log("获取成功",res.data)
     this.setData({
      detail_list2:this.data.detail_list2.concat(res.data),
      
     })
  })
  .catch(res => {
    console.log("获取失败",res)
  })
},
getDataList3()
{
  // 让len增加的一个方法=================================
  let that=this;
   console.log("list的长度",this.data.len3)
   that.setData({//页面data的修改，必须用setData
    'len3' :  this.data.detail_list3.length,
 })

   console.log("list的长度",this.data.len3)
   DI.skip(this.data.len3).get()
  .then(res => {
    console.log("获取成功",res.data)
     this.setData({
      detail_list3:this.data.detail_list3.concat(res.data),
      
     })
  })
  .catch(res => {
    console.log("获取失败",res)
  })
},
  goto_unloadimg()//跳转青年大学习页面
  {
    wx.navigateTo({url: '/pages/upload_img/upload_img',})
  },


  goto_jinzhi()//跳转进制转换页面
  {
    wx.navigateTo({url: '/pages/jinzhi_zhuanhuan/jinzhi_zhuanhuan',})
  },

  goto_wenzhang()//跳转文章生成页面
  {
    wx.navigateTo({url: '/pages/wenzhang_shengcheng/wenzhang_shengcheng',})
  },
  goto_bizhi_load()//跳转壁纸下载页面
  {
    wx.navigateTo({url: '/pages/bizhi_load/bizhi_load',})
  },
  goto_shetuan()//跳转社团页面
  {
    wx.navigateTo({url: '/pages/shetuan/shetuan',})
  },

 goto_ziyaun()//跳转资源下载页面
 {
  wx.navigateTo({url: '/pages/ziyuan/ziyuan',})
 },
 goto_jindu_detail()//跳转进度detail的网页页面
 {
  wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
 },

 goto_ligong_yingxiang()//跳转理工映像detail页面
 {
  wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
 },
 goto_xiaoyaun_detail()//跳转校园detail页面(照片)
 {
  wx.navigateTo({url: '/pages/xiaoyuan_buauty/xiaoyuan_buauty',})
 },
 handleContact (e) {
  console.log(e.detail.path)
  console.log(e.detail.query)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getDataList1()
    this.getDataList2()
    this.getDataList3()
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
    if(this.data.active == 0){ this.getDataList1()}
    if(this.data.active == 1){ this.getDataList2()}
    if(this.data.active == 2){ this.getDataList3()}
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})