// pages/login_in.js
const DB = wx.cloud.database().collection("list")

let student_num = ''
let student_pas = ''
let flag_input  =  0//0->失败；1->成功
Page({
  imageOnLoad()
  {
    wx.showToast({title: '学号密码不能空', mask: false,  icon: 'error',duration:2000});
  },
   addnum(e){
      console.log(e.detail.value)
      student_num = e.detail.value
   },
   addpas(e){
    console.log(e.detail.value)
    student_pas = e.detail.value
 },
 //检验登录的核心====
 addDate_login(){
  if((student_num == '')||(student_pas == '')){ flag_input = 0; wx.showToast({title: '学号密码不能空', mask: false,  icon: 'error',duration:2000});return  }
 var error_flag = 1//全错校验码error_flag

   //============第一步检测登录名===========//
  DB.where({
    student_num : student_num//查询输入的学号所对应的密码，如果学号都是错的，就下去
  }).get({
    success(res){
      // console.log("查询成功1！",res)
      let num_flag = res.data[0].student_num//把查到的学号赋值给本地num_flag
      let pas_flag = res.data[0].student_pas//把查到的密码赋值给本地pas_flag
     

      if(num_flag == student_num)//登录检测通过
      {
         //wx.setStorageSync('error_flag', error_flag)//如果账号输入正确，则在储存里存一个error_flag=1
        if(pas_flag == student_pas)//密码检测通过
        {
          console.log("登录检测时密码也正确!")

        }
        else
        {
          wx.showToast({title: '账号或密码错误', mask: false,  icon: 'error',duration:2000}); return//密码错误,就退出
          
        }
      }
      if((num_flag == student_num)&&(pas_flag == student_pas))
      {
        flag_input = 1;
        wx.showToast({title: '登录成功，大聪明!', mask: false,  icon: 'error',duration:2000});
        wx.setStorageSync('student_num', student_num)
        wx.setStorageSync('student_pas', student_pas)
        wx.switchTab({url: '/pages/my_detail/my_datail',})
        console.log("在登录->密码检测时候通过",flag_input); 
        return//对了就退出了
      }

    },
    fail(res){
      console.log("失败！",res)
    }
  })
  
  //========用密码查用户名（反过来）========//
  DB.where({
    student_pas : student_pas
  }).get({
    success(res){
      // console.log("查询成功2！",res)
      let num_flag2 = res.data[0].student_num
      let pas_flag2 = res.data[0].student_pas
      

      if(pas_flag2 == student_pas)//密码检测通过
      {
         //wx.setStorageSync('error_flag', error_flag)//如果账号输入正确，则在储存里存一个error_flag=1
        if(num_flag2 == student_num)//登录检测通过
        {
          console.log("ok!")
        }
        else
        {
          wx.showToast({title: '账号或密码错误', mask: false,  icon: 'error',duration:2000}); return//密码对，账号错，总体错误，退出
        }
      }

      if((pas_flag2 == student_num)&&(pas_flag2 == student_pas))
      { 
        flag_input = 1;
        wx.showToast({title: '登录成功，大聪明!', mask: false,  icon: 'error',duration:2000});
        wx.setStorageSync('student_num', student_num)
        wx.setStorageSync('student_pas', student_pas)
        wx.switchTab({url: '/pages/my_detail/my_datail',})
        console.log("在密码->登录检测时候通过",flag_input); 
        return//对了就退出了
      }

    },
    fail(res){
      console.log("失败！",res); return
    }
  }) 
   //let error_flag = wx.getStorageSync('error_flag', error_flag)
     console.log(error_flag)
   console.log("全错了",error_flag); 


   
 },
 addDate_login_old(){
  //向云服务器上添加数据,最好封装
  if((student_num == '')||(student_pas == '')){flag_input = 1 ;wx.showToast({title: '学号密码不能空', mask: false,  icon: 'error',duration:2000}); console.log("okok",flag_input)}
  if(flag_input == 0)
  {
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
  
    wx.navigateTo({url: '/pages/login_register/login_register',})
  }

  },
   
//查询数据
getDate(){
  DB.get({
    success(res){
      console.log("查询成功！",res)
    },
  })
},
// 删除数据
delDate(){
  DB.doc(id).remove({
    success(res){
      console.log("删除成功！",res)
    },
    fail(res){
      console.log("删除成功！",res)
    }
  })
},  
//更新数据
upData(){ 
  DB.doc(id).update({
    data:{
      student_num:student_num,//更新的数据，选择
      student_pas:student_pas
    },
    success(res){
      console.log("删除成功！",res)
    },
    fail(res){
      console.log("删除成功！",res)
    }
  })
},
goto_register()
{
  wx.navigateTo({url: '/pages/login_register/login_register',})
},
/**
   * 页面的初始数据
   */
  data: {
      error_flag : 0
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