// pages/upload_img/upload_img.js
const DB = wx.cloud.database().collection("list")//个人数据库
const DD = wx.cloud.database().collection("young_study")//青年大学习数据库
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo1:'',//学号
    userInfo2:'',//密码
    img_num:'',//图片数量
    young_study_1:[],
    young_study_2:[],
    curIndex:0,
    imgURL1:'',
    imgURL2:'',

    fileList:[],      //存放有图片地址的图片数组
    linshi:[],   //存放选择的图片的临时数组
  },
//================获取储存里的学号密码=============================
get_login_detail()
{
  let that=this;
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
uploadToCloud() {
  let that = this;
  wx.chooseImage({
    count: 1,         //count属性确定最多可以上传9张，下方属性可以看看官方的说明，就不一一说明
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success (res) {
      wx.showLoading({
        title: '正在上传',
      })    
      console.log(res)
      //赋值给linshi临时数组暂时存储起来
      that.setData({
        linshi:that.data.linshi.concat(res.tempFilePaths)
      })
      console.log(that.data.linshi)//临时地址数组
      //设置图片存储到云存储的位置和图片名称
      let lujin = that.data.userInfo1+'/'+that.data.userInfo1+'第'+Math.floor((Math.random() * 10))+'张'+'.png';
      //这里调用了图片上传函数wx.cloud.uploadFile()
      //传给wx.cloud.uploadFile的cloudPath属性的值不能重复！！！巨坑，加个index就可以避免重复了
      const uploadTasks = that.data.linshi.map((item, index)  =>  that.uploadFilePromise(lujin, item));
      //promise.all方法会等待map方法都执行完全后再继续执行then方法里面的代码 
      Promise.all(uploadTasks)
        .then(data => {
          console.log(data)
          wx.hideLoading()
          wx.showToast({ 
            title: '上传成功', 
            icon: 'none' 
          });
          const newFileList = data.map(item => ({ url: item.fileID,isImage: true,}));
          console.log(newFileList)
          //每次上传成功后，都要清空一次临时数组，避免第二次重复上传，浪费存储资源，
          that.setData({ 
            fileList: that.data.fileList.concat(newFileList),
            linshi:[],
          });
          
        })
        .catch(e => {
          wx.showToast({ title: '上传失败', icon: 'none' });
          console.log(e);
        });
  
    }
  })
},
//上传到云存储，并且获得图片地址
uploadFilePromise(fileName, chooseResult) {
  return wx.cloud.uploadFile({
    cloudPath: fileName,
    filePath: chooseResult
  });
},
//删除图片
delete:function(event){
  let that = this;
  console.log(event)
  let inde = event.currentTarget.dataset.id
  //删除数组里面的值
  that.data.fileList.splice(inde,1)
  that.setData({
      fileList:that.data.fileList,
  })
},
 //预览图片
 previewImage:function(event){
  console.log(event)
  wx.previewImage({
    urls: [event.currentTarget.dataset.url] // 需要预览的图片http链接列表
  })    
},
 //下载图片
 download:function(){
  let url = this.data.fileList[0].url;
  //下载文件
  wx.cloud.downloadFile({
    fileID: url,
    success: res => { 
      console.log("文件下载成功",res);
      //打开文件
      const filePath = res.tempFilePath
      wx.showModal({
        title: '提示',
        content: '下载成功，请打开另存',
        showCancel:false,
        confirmText:'前往另存',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.openDocument({
              filePath: filePath,
              success: function (re) {
                console.log('文件打开成功',re)
              }
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  })
},






//  //预览图片

//  previewImage:function(event){
//   console.log(event)
//   wx.previewImage({
//     urls: [event.currentTarget.dataset.url] // 需要预览的图片http链接列表
//   })    
// },


// uploadimg1(){
//   let _that=this
//   if(_that.data.userInfo1 == '')
//   {
//     wx.showToast({title: '请先登录！',duration: 800,
//     success:res=>{
//       setTimeout(function () {
//         //要延时执行的代码
//         wx.navigateTo({url: '/pages/login_in/login_in',})
//       }, 800) //延迟时间
//     }
//   });
//   return;
//   }
//   wx.chooseImage({
//     count: 1,//一次选择几张照片
//     sizeType: ['original', 'compressed'],
//     sourceType: ['album', 'camera'],
//       success (res) {
//         wx.showLoading({
//           title:'正在上传...',
//         });
//         // tempFilePath可以作为img标签的src属性显示图片
//         const tempFilePaths = res.tempFilePaths
//         //获取到每张图片的名字
//         const fileName=res.tempFilePaths[0].slice(11)
//         //获取到图片的张数
//         const filelen=res.tempFilePaths.length
//     if(filelen == 1)
//     {
//           wx.cloud.uploadFile({
//           cloudPath: _that.data.userInfo1+'/'+_that.data.userInfo1+'第1张'+'.png', // 上传至云端的路径
//           filePath: tempFilePaths[0], // 小程序临时文件路径
//           success: res => {
//             // 返回文件 ID
//             wx.hideLoading()
//             console.log(res.fileID)
//             if(filelen == 1)
//             {
//             _that.setData({
//                 selctedimg:res.fileID
//             })
//           }
//           },
//           fail: console.error
//         })
//     }
//       }
//     })
// },


// uploadimg2(){
//   let _that=this
//   if(_that.data.userInfo1 == '')
//   {
//     wx.showToast({title: '请先登录！',duration: 800,
//     success:res=>{
//       setTimeout(function () {
//         //要延时执行的代码
//         wx.navigateTo({url: '/pages/login_in/login_in',})
//       }, 800) //延迟时间
//     }
//   });
//   return;
//   }
//   wx.chooseImage({
//     count: 1,//一次选择几张照片
//     sizeType: ['original', 'compressed'],
//     sourceType: ['album', 'camera'],
//       success (res) {
//         wx.showLoading({
//           title:'正在上传...',
//         });
//         // tempFilePath可以作为img标签的src属性显示图片
//         const tempFilePaths = res.tempFilePaths
//         //获取到每张图片的名字
//         const fileName=res.tempFilePaths[0].slice(11)
//         //获取到图片的张数
//         const filelen=res.tempFilePaths.length
//     if(filelen == 1)
//     {
//           wx.cloud.uploadFile({
//           cloudPath: _that.data.userInfo1+'/'+_that.data.userInfo1+'第1张'+'.png', // 上传至云端的路径
//           filePath: tempFilePaths[0], // 小程序临时文件路径
//           success: res => {
//             // 返回文件 ID
//             wx.hideLoading()
//             console.log(res.fileID)
//             if(filelen == 1)
//             {
//             _that.setData({
//                 selctedimg2:res.fileID
//             })
//           }
//           },
//           fail: console.error
//         })
//     }
//       }
//     })
// },

// 获取数据库的数据========大学习不会太多，不用分页==============
 getDataList()
 {
   DD.skip(0).get()
   .then(res => {
     console.log("获取成功",res.data)
      this.setData({
        young_study_1:res.data,
        young_study_2:res.data

      })
      console.log("shuju2222",this.data.young_study_1)
   })
   .catch(res => {
     console.log("获取失败",res)
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
    this.get_login_detail();//获取个人信息
    this. getDataList();//获取青年大学习答案的数据库
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