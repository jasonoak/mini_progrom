// pages/login_register/login_register.js
const DB = wx.cloud.database().collection("list")

let student_num  = ''
let student_pas  = ''
let student_pas2 = ''
let flag_input  =  0
Page({
  backto_login(){
    wx.navigateTo({url: '/pages/login_in/login_in',})
  },

  addnum(e){
    console.log(e.detail.value)
    student_num = e.detail.value
 },
 addpas(e){
  console.log(e.detail.value)
  student_pas = e.detail.value
},
 addpas2(e){
  console.log(e.detail.value)
  student_pas2 = e.detail.value
},
//注册核心代码==================
addDate_login_old(){
  //向云服务器上添加数据,最好封装
  if((student_num == '')||(student_pas == '')){wx.showToast({title: '学号密码不能空', mask: false,  icon: 'error',duration:2000}); console.log("okok",flag_input); return}
  if(student_pas2 != student_pas){wx.showToast({title: '两次输入的密码不一样哦', mask: false,  icon: 'none',duration:2000}); return}

    DB.add({
      data:{
        student_num:student_num,
        student_pas:student_pas
      },
      success(res){
         console.log("添加成功！",res)
      },
      fail(res){
        console.log("添加失败！",res)
      }
    })
    // wx.setStorageSync('userInfo', this.data.userInfo)
    wx.navigateTo({url: '/pages/login_in/login_in',})
  

  },
  /**
   * 页面的初始数据
   */
  data: {

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