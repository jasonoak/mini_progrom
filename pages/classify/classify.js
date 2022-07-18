// pages/classify/classify.js
const DC = wx.cloud.database().collection("classify")
Page({
  
  data: {
    cateItems:[
      // {
      //   cate_id:1,
      //   cate_name:'洗护',
      //   // children: [
      //   //   { 
      //   //     child_id: 1, 
      //   //     name: '洁面皂', 
      //   //     image: "http://img11.360buyimg.com/n0/jfs/t304/257/1326356931/91893/cf5d3987/5437d505Neb85319a.jpg" 
      //   //   }, 
      //   //   { 
      //   //     child_id: 2, 
      //   //     name: '卸妆', 
      //   //     image: "http://img2.imgtn.bdimg.com/it/u=2773684370,2662418416&fm=26&gp=0.jpg"  
      //   //   }
      //   // ]
      // },
      // {
      //   cate_id:2,
      //   cate_name:'生鲜'
      // },
      // {
      //   cate_id:3,
      //   cate_name:'食品'
      // },
      // {
      //   cate_id: 4,
      //   cate_name: '女装'
      // },
      // {
      //   cate_id: 5,
      //   cate_name: '百货'
      // },
      // {
      //   cate_id: 6,
      //   cate_name: '母婴'
      // },
      // {
      //   cate_id: 7,
      //   cate_name: '手机'
      // },
      // {
      //   cate_id: 8,
      //   cate_name: '鞋靴'
      // },
      // {
      //   cate_id: 9,
      //   cate_name: '运动'
      // },
      // {
      //   cate_id: 10,
      //   cate_name: '美家'
      // },
      // {
      //   cate_id: 11,
      //   cate_name: '男装'
      // },
      // {
      //   cate_id: 12,
      //   cate_name: '水果'
      // },
      // {
      //   cate_id: 13,
      //   cate_name: '电子'
      // }
    ],
    curNav:1,
    curIndex:0,
    len : 0
  },
 
  switchRightTab:function(e){
    let id = e.target.dataset.id,index=e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
    })
  },
  // 获取数据库的数据================
  getDataList()
  {
    // 让len增加的一个方法=================================
    let that=this;
     console.log("list的长度",this.data.len)
     that.setData({//页面data的修改，必须用setData
      'len' :  this.data.cateItems.length,
   })

     console.log("list的长度",this.data.len)
    DC.skip(this.data.len).get()
    .then(res => {
      console.log("获取成功",res.data)
       this.setData({
        cateItems:this.data.cateItems.concat(res.data)
       })
       console.log("shuju2222",this.data.cateItems)
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
    // this.getDataList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})