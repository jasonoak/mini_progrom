const DB = wx.cloud.database().collection("list")
const DE = wx.cloud.database().collection("daily_word")

Page({
  data: {
    swiperImgUrls: [
      'https://s1.ax1x.com/2022/07/04/jYJRK0.md.jpg',
      'https://s1.ax1x.com/2022/07/04/jYYYoF.md.jpg',
      'https://jasonoak.github.io/1.jpg',
      'https://jasonoak.github.io/2.jpg',
      'https://jasonoak.github.io/3.jpg',
      'https://s1.ax1x.com/2022/07/04/jYYDL6.jpg'
    ],
    swiperCurrent: 0,

    userInfo1:'',//学号
    userInfo2:'',//密码
    img_num:'',//图片数量

    daily_Word : '',//每日一言

    //======天气数据========
    adcode:'',
    city:'',
    humidity:'',//湿度
    province:'',
//=============================
    reporttime:'',
    temperature:'',
    temperature_night:'',
    weather:'',
    weather_night:'',
    winddirection:'',
    windpower:'',
    week:'',
//==============================
    reporttime1:'',
    temperature1:'',
    temperature1_night:'',
    weather1:'',
    weather1_night:'',
    winddirection1:'',
    windpower1:'',
    week1:'',
//==============================
    reporttime2:'',
    temperature2:'',
    temperature2_night:'',
    weather2:'',
    weather2_night:'',
    winddirection2:'',
    windpower2:'',
    week2:'',
//==============================
    reporttime3:'',
    temperature3:'',
    temperature3_night:'',
    weather3:'',
    weather3_night:'',
    winddirection3:'',
    windpowe3:'',
    week3:'',
//===========================
    weather_config:[],//总的天气数据，传到下一页的
//==============================
    kongge:"     ",
    dataTime:" ",
    tim_bili:'',
    xianshi_tim_bili:'',//学期过去比例

    xianshi_day_bili :'',//一天过去比例
//==============================
    gradientColor: {
      '0%': '#ffd01e',
      '100%': '#ee0a24',
    },
    gradientColor2: {
      '0%': 'rgb(103, 178, 221)',
      '100%': 'rgb(17, 84, 230)',
    },

    src_big:'/static/weather_icon/多云.png',
    src_small1:'/static/weather_icon/多云.png',
    src_small2:'/static/weather_icon/多云.png',
    src_small3:'/static/weather_icon/多云.png',

    show:false,
    webview:"https://mp.weixin.qq.com/s?__biz=MzkzNDM5MTU5Mg==&mid=2247483659&idx=1&sn=4781192a32d9e6204f0b4fc2ab6efb41&chksm=c2bcbb4cf5cb325acb2691e72a6a0fb48af5460d7bb8d3cfefb0f4c1d81592914ea191419a48&token=1645082005&lang=zh_CN#rd"
  },
  //===========================================================
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

  //===========================================================
  //====================轮播图效果==============================
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * 图片手动滑动时，获取当前的轮播id
   */
  imageChange(e) {
    const that = this;
    that.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  //=======================================================
  goto_unloadimg()//跳转青年大学习页面
  {
    wx.navigateTo({url: '/pages/upload_img/upload_img',})
  },
  goto_random_num()//跳转随机数页面
  {
    wx.navigateTo({url: '/pages/random_num/random_num',})
  },
  goto_danmu()//跳转弹幕页面
  {
    wx.navigateTo({url: '/pages/danmu/danmu',})
  },
  goto_jinzhi()//跳转进制转换页面
  {
    wx.navigateTo({url: '/pages/jinzhi_zhuanhuan/jinzhi_zhuanhuan',})
  },
  goto_qinghau()//跳转甜言蜜语页面
  {
    wx.navigateTo({url: '/pages/qinghua/qinghua',})
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
  goto_jiaowu:function(e){//废弃
    var webview=e.target.dataset.webview  
    wx.navigateTo({    
    url: '/pages/wangye/wangye?webview='+webview, 
    })
    },
 goto_ziyaun()//跳转资源下载页面
 {
  wx.navigateTo({url: '/pages/ziyuan/ziyuan',})
 },
 goto_jindu_detail()//跳转进度detail的网页页面
 {
  wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
 },
 goto_xiaoyaun_detail()//跳转校园detail页面
 {
  wx.navigateTo({url: '/pages/xiaoyuan_buauty/xiaoyuan_buauty',})
 },
 goto_xinsheng_navigation()//跳转新生指引detail页面
 {
  wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
 },
 goto_xiaoyaun_navigation()//跳转校园导航detail页面
 {
  wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
 },
 goto_ligong_yingxiang()//跳转理工映像detail页面
 {
  wx.navigateTo({url: '/pages/wangye/wangye?webview_id=jindu_detail',})
 },
 goto_weather_detail()//跳转天气detail页面
 {
  let city = JSON.stringify(this.data.city)
  let humidity = JSON.stringify(this.data.humidity)
  let province = JSON.stringify(this.data.province)

  let reporttime = JSON.stringify(this.data.reporttime)
  let temperature = JSON.stringify(this.data.temperature)
  let temperature_night = JSON.stringify(this.data.temperature_night)
  let weather = JSON.stringify(this.data.weather)
  let weather_night = JSON.stringify(this.data.weather_night)
  let winddirection = JSON.stringify(this.data.winddirection)
  let windpower = JSON.stringify(this.data.windpower)
  let week = JSON.stringify(this.data.week)

  let temperature1 = JSON.stringify(this.data.temperature1)
  let temperature1_night = JSON.stringify(this.data.temperature1_night)
  let weather1 = JSON.stringify(this.data.weather1)
  let weather1_night = JSON.stringify(this.data.weather1_night)
  let winddirection1 = JSON.stringify(this.data.winddirection1)
  let windpower1 = JSON.stringify(this.data.windpower1)
  let week1 = JSON.stringify(this.data.week1)

  let temperature2 = JSON.stringify(this.data.temperature2)
  let temperature2_night = JSON.stringify(this.data.temperature2_night)
  let weather2 = JSON.stringify(this.data.weather2)
  let weather2_night = JSON.stringify(this.data.weather2_night)
  let winddirection2 = JSON.stringify(this.data.winddirection2)
  let windpower2 = JSON.stringify(this.data.windpower2)
  let week2 = JSON.stringify(this.data.week2)

  let temperature3 = JSON.stringify(this.data.temperature3)
  let temperature3_night = JSON.stringify(this.data.temperature3_night)
  let weather3 = JSON.stringify(this.data.weather3)
  let weather3_night = JSON.stringify(this.data.weather3_night)
  let winddirection3 = JSON.stringify(this.data.winddirection3)
  let windpowe3 = JSON.stringify(this.data.windpowe3)
  let week3 = JSON.stringify(this.data.week3)

  wx.navigateTo({
    url: '/pages/weather_detail/weather_detail?city='+city
    +'&humidity='+humidity
    +'&province='+province
    +'&reporttime='+reporttime
    +'&temperature='+temperature
    +'&temperature_night='+temperature_night
    +'&weather='+weather
    +'&weather_night='+weather_night
    +'&winddirection='+winddirection
    +'&windpower='+windpower
    +'&week='+week
    +'&temperature1='+temperature1
    +'&temperature1_night='+temperature1_night
    +'&weather1='+weather1
    +'&weather1_night='+weather1_night
    +'&winddirection1='+winddirection1
    +'&windpower1='+windpower1
    +'&week1='+week1
    +'&temperature2='+temperature2
    +'&temperature2_night='+temperature2_night
    +'&weather2='+weather2
    +'&weather2_night='+weather2_night
    +'&winddirection2='+winddirection2
    +'&windpower2='+windpower2
    +'&week2='+week2
    +'&temperature3='+temperature3
    +'&temperature3_night='+temperature3_night
    +'&weather3='+weather3
    +'&weather3_night='+weather3_night
    +'&winddirection3='+winddirection3
    +'&windpowe3='+windpowe3
    +'&week3='+week3,
  })
 },
  //=========================================================
  

  //=============常熟天气=====================================
  weather_get(){
    var self = this;
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo',
      data:{
        'key': '953c78186712f51b307205d0986b19e5',
        'city': '320581',
        'extensions': 'base',
      },
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        console.log(res.data);
        self.setData({
          humidity: res.data.lives[0].humidity,
          temperature: res.data.lives[0].temperature,
          reporttime: res.data.lives[0].reporttime,
          weather: res.data.lives[0].weather,
        })
      }

    })
    
    wx.request({
      url: 'https://restapi.amap.com/v3/weather/weatherInfo',
      data:{
        'key': '953c78186712f51b307205d0986b19e5',
        'city': '320581',
        'extensions': 'all',
      },
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        console.log(res.data);
        self.setData({
          adcode: res.data.forecasts[0].adcode,//所在城市编号
          city: res.data.forecasts[0].city,//所在城市
          province: res.data.forecasts[0].province,//所在省份

          // temperature: res.data.forecasts[0].casts[0].daytemp,//最高白天气温
          temperature_night: res.data.forecasts[0].casts[0].nighttemp,//最低夜间气温
          // reporttime: res.data.forecasts[0].casts[0].date,//报告的预告时间
          // weather: res.data.forecasts[0].casts[0].dayweather,//白天的天气情况
          winddirection: res.data.forecasts[0].casts[0].daywind,//白天的风向
          windpower: res.data.forecasts[0].casts[0].daypower,//白天的风力
          week: res.data.forecasts[0].casts[0].week,//现在星期几
          weather_night:res.data.forecasts[0].casts[0].nightweather,//夜晚的天气情况

          temperature1: res.data.forecasts[0].casts[1].daytemp,//最高白天气温
          temperature1_night: res.data.forecasts[0].casts[1].nighttemp,//最低夜间气温
          reporttime1: res.data.forecasts[0].casts[1].date,//报告的预告时间
          weather1: res.data.forecasts[0].casts[1].dayweather,//白天的天气情况
          weather1_night:res.data.forecasts[0].casts[1].nightweather,//夜晚的天气情况
          winddirection1: res.data.forecasts[0].casts[1].daywind,//白天的风向
          windpower1: res.data.forecasts[0].casts[1].daypower,//白天的风力
          week1: res.data.forecasts[0].casts[1].week,//现在星期几


          temperature2: res.data.forecasts[0].casts[2].daytemp,//最高白天气温
          temperature2_night: res.data.forecasts[0].casts[2].nighttemp,//最低夜间气温
          reporttime2: res.data.forecasts[0].casts[2].date,//报告的预告时间
          weather2: res.data.forecasts[0].casts[2].dayweather,//白天的天气情况
          weather2_night:res.data.forecasts[0].casts[2].nightweather,//夜晚的天气情况
          winddirection2: res.data.forecasts[0].casts[2].daywind,//白天的风向
          windpower2: res.data.forecasts[0].casts[2].daypower,//白天的风力
          week2: res.data.forecasts[0].casts[2].week,//现在星期几


          temperature3: res.data.forecasts[0].casts[3].daytemp,//最高白天气温
          temperature3_night: res.data.forecasts[0].casts[3].nighttemp,//最低夜间气温
          reporttime3: res.data.forecasts[0].casts[3].date,//报告的预告时间
          weather3: res.data.forecasts[0].casts[3].dayweather,//白天的天气情况
          weather3_night:res.data.forecasts[0].casts[3].nightweather,//夜晚的天气情况
          winddirection3: res.data.forecasts[0].casts[3].daywind,//白天的风向
          windpower3: res.data.forecasts[0].casts[3].daypower,//白天的风力
          week3: res.data.forecasts[0].casts[3].week,//现在星期几

        })

        if(self.data.weather == '晴') {self.setData({src_big : '/static/weather_icon/晴.png'})}
        if(self.data.weather == '小雨'){self.setData({src_big : '/static/weather_icon/小雨.png'})}
        if(self.data.weather == '中雨'){self.setData({src_big : '/static/weather_icon/中雨.png'})}
        if(self.data.weather == '大雨'){self.setData({src_big : '/static/weather_icon/大雨.png'})}
        if(self.data.weather == '多云'){self.setData({src_big : '/static/weather_icon/多云.png'})}
        if(self.data.weather == '阴'){self.setData({src_big : '/static/weather_icon/阴.png'})}
        if(self.data.weather == '雷阵雨'){self.setData({src_big : '/static/weather_icon/雷阵雨.png'})}

        if(self.data.weather1 == '晴') {self.setData({src_small1 : '/static/weather_icon/晴.png'})}
        if(self.data.weather1 == '小雨'){self.setData({src_small1 : '/static/weather_icon/小雨.png'})}
        if(self.data.weather1 == '中雨'){self.setData({src_small1 : '/static/weather_icon/中雨.png'})}
        if(self.data.weather1 == '大雨'){self.setData({src_small1 : '/static/weather_icon/大雨.png'})}
        if(self.data.weather1 == '多云'){self.setData({src_small1 : '/static/weather_icon/多云.png'})}
        if(self.data.weather1 == '阴'){self.setData({src_small1 : '/static/weather_icon/阴.png'})}
        if(self.data.weather1 == '雷阵雨'){self.setData({src_small1 : '/static/weather_icon/雷阵雨.png'})}

        if(self.data.weather2 == '晴') {self.setData({src_small2 : '/static/weather_icon/晴.png'})}
        if(self.data.weather2 == '小雨'){self.setData({src_small2 : '/static/weather_icon/小雨.png'})}
        if(self.data.weather2 == '中雨'){self.setData({src_small2 : '/static/weather_icon/中雨.png'})}
        if(self.data.weather2 == '大雨'){self.setData({src_small2 : '/static/weather_icon/大雨.png'})}
        if(self.data.weather2 == '多云'){self.setData({src_small2 : '/static/weather_icon/多云.png'})}
        if(self.data.weather2 == '阴'){self.setData({src_small2 : '/static/weather_icon/阴.png'})}
        if(self.data.weather2 == '雷阵雨'){self.setData({src_small2 : '/static/weather_icon/雷阵雨.png'})}

        if(self.data.weather3 == '晴') {self.setData({src_small3 : '/static/weather_icon/晴.png'})}
        if(self.data.weather3 == '小雨'){self.setData({src_small3 : '/static/weather_icon/小雨.png'})}
        if(self.data.weather3 == '中雨'){self.setData({src_small3 : '/static/weather_icon/中雨.png'})}
        if(self.data.weather3 == '大雨'){self.setData({src_small3 : '/static/weather_icon/大雨.png'})}
        if(self.data.weather3 == '多云'){self.setData({src_small3 : '/static/weather_icon/多云.png'})}
        if(self.data.weather3 == '阴'){self.setData({src_small3 : '/static/weather_icon/阴.png'})}
        if(self.data.weather3 == '雷阵雨'){self.setData({src_small3 : '/static/weather_icon/雷阵雨.png'})}
//============================================================

//=========================================================
      }
    })
   

  },
//===================map=================================
  get_static_map()
  {
    var self = this;
    wx.request({
      url: 'https://restapi.amap.com/v3/staticmap',
      data:{
        'key': '953c78186712f51b307205d0986b19e5',
        'location':'116.481485,39.990464',
        'zoom':'10',
        'size':'750*300',

      },
      header:{
        'content-type': 'application/json'
      },
      success:function(res){
        console.log(res.data);
        self.setData({

        })
      }

    })
  },
  get_time_now()
  {

    let yy = new Date().getFullYear()
    let mm = new Date().getMonth()+1
    let dd = new Date().getDate()
    let h = new  Date().getHours()
    let m = new  Date().getMinutes()
    let s = new  Date().getSeconds()

    this.setData({
      dataTime : `${yy}-${mm}-${dd}  `+h+":"+m
    })
    //获取当前时间戳
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    console.log("当前时间戳为：" + timestamp);
    
   
    //把放假指定的时间换成时间戳
    var time = '2022-08-28 10:42:00';
    var repTime = time.replace(/-/g, '/');//用正则主要是把“2020-04-01 00:00:00'”转换成“2020/04/01 00:00:00'”兼容ios
    console.log("返回时间：" + repTime);
    var timeTamp = Date.parse(repTime);
    timeTamp = timeTamp / 1000;
    console.log("放学返回时间戳：" + timeTamp)

      //把开学的时间换成时间戳
      var time1 = '2022-07-01 10:42:00';
      var repTime1 = time1.replace(/-/g, '/');//用正则主要是把“2020-04-01 00:00:00'”转换成“2020/04/01 00:00:00'”兼容ios
      console.log("返回时间：" + repTime1);
      var timeTamp1 = Date.parse(repTime1);
      timeTamp1 = timeTamp1 / 1000;
      console.log("开学返回时间戳：" + timeTamp1)

    //计算时间戳的总长
    var minus = timeTamp-timeTamp1
    console.log("中间的总长"+ minus)

    //计算时间戳的差值
    var minus_chazhi = timestamp-timeTamp1//放学时间剪掉现在的时间
     console.log("中间的差值"+ minus_chazhi)

    //计算时间过去的比例
    this.setData({
      tim_bili : minus_chazhi/minus
    })
    if(this.data.tim_bili >= 1)//如果比例大于1，永远显示100
    { 
      this.setData({
        xianshi_tim_bili : 100
    })
    }
    if(this.data.tim_bili < 1)
    { 
      this.setData({
        xianshi_tim_bili : this.data.tim_bili * 100
    })
    }
    console.log("返比例：" + this.data.tim_bili)
  },

  //=============每日一言===================================
  get_dayily_word()
  {
    let that = this
    var a = Math.floor((Math.random() * 10))
    console.log("目前在每日一言收到的随机数是",a)
    DE.where({
      numid : String(a) //查询输入的学号所对应的密码，如果学号都是错的，就下去
    }).get({
      success(res){
         console.log("查询成功1！",res.data[0].daily_word)
         that.setData({//赋值
          daily_Word :res.data[0].daily_word
          })
      },
      fail(res){
        console.log("失败！",res)
      }
    })
    
  },
    upimgtoCloud()
  {
    //把this赋值给that，就相当于that的作用域是全局的。
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        wx.showLoading({
          title:'正在加载...',
        });
        console.log("成功",res);
        that.setData({
          img_num:res.tempFilePaths.length 
          })
        that.uploadImage(res.tempFilePaths[0]);
      }
    })
  },
  uploadImage(fileURL) {
    wx.cloud.uploadFile({
      cloudPath:this.data.userInfo1+'/'+this.data.userInfo1+'第'+this.data.img_num+'张'+'.png', // 上传至云端的路径
      filePath: fileURL, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log("上传成功",res)
        wx.hideLoading();
        wx.showToast({
          title: '上传成功',
        })
        // //获取文件路径
        // this.setData({
        //   imgURL:res.fileID
        // })
      },
      fail: console.error
    })
  },
  uploadImg(temFile)
  {
    wx.cloud.uploadFile({
      cloudPath:'1.png',
      filePath:temFile,
      success: res =>{
        console.log('上传成功',res)
      },
      fail(err){
        console.log('上传成功',err)
      }
    })
  },
  addDate(){
    //向云服务器上添加数据
      DB.add({
        data:{
          name:"孙卓艺",
          age:10
        },
        success(res){
          console.log("添加成功！",res)
        },
        fail(res){
          console.log("添加失败！",res)
        }
      })
  },
  //查询数据
  getDate(){
    DB.get({
      success(res){
        console.log("添加成功！",res)
      },
    })
  },
 
    onLoad()
    {
      this.get_dayily_word()
      this. get_time_now()
      setTimeout(()=>
      {
        this.setData({
          show : true
        })
      }, 600)

      setTimeout(()=>
      {
        this. weather_get()
      }, 1300)
  
    },
    onShow()
    {
      this.get_login_detail()
      this.get_time_now()
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },
})
