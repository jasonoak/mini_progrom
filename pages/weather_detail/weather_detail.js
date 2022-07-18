// pages/weather_detail/weather_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'常熟市',
    humidity:'89',
    province:'江苏',
    reporttime:'2022-07-16 14:06:49',
    temperature:'32',
    temperature_night:'31',
    weather:'阴',
    weather_night:'阴阴阴',
    winddirection:'南南',
    windpower:'≤3',
    week:'7',
    temperature1:'32',
    temperature1_night:'32',
    weather1:'阴阴阴',
    weather1_night:'阴阴阴',
    winddirection1:'南南',
    windpower1:'≤3',
    week1:'2',
    temperature2:'22',
    temperature2_night:'21',
    weather2:'阴阴阴',
    weather2_night:'阴阴阴',  
    winddirection2:'南南',
    windpower2:'≤3',
    week2:'2',
    temperature3:'12',
    temperature3_night:'32',
    weather3:'阴阴阴',
    weather3_night:'阴阴阴',
    winddirection3:'南南',
    windpowe3:'≤3',
    week3:'2',    
   //================================
   bigimg:"/static/weather_icon/多云.png",
   smallimg1:"/static/weather_icon/多云.png",
   smallimg2:"/static/weather_icon/多云.png",
   smallimg3:"/static/weather_icon/多云.png",

   xingqi_first:"",
   xingqi_second:"",
   xingqi_third:"",
   //=====================================
   show : false
  },
  choseimg()
  {
    let self = this
    if(self.data.weather == '晴'){self.setData({bigimg : '/static/weather_icon/晴.png'})}
    if(self.data.weather == '小雨'){self.setData({bigimg : '/static/weather_icon/小雨.png'})}
    if(self.data.weather == '中雨'){self.setData({bigimg : '/static/weather_icon/中雨.png'})}
    if(self.data.weather == '大雨'){self.setData({bigimg : '/static/weather_icon/大雨.png'})}
    if(self.data.weather == '多云'){self.setData({bigimg : '/static/weather_icon/多云.png'})}
    if(self.data.weather == '阴'){self.setData({bigimg : '/static/weather_icon/阴.png'})}
    if(self.data.weather == '雷阵雨'){self.setData({bigimg : '/static/weather_icon/雷阵雨.png'})}


    if(self.data.weather1 == '晴'){self.setData({smallimg1 : '/static/weather_icon/晴.png'})}
    if(self.data.weather1 == '小雨'){self.setData({smallimg1 : '/static/weather_icon/小雨.png'})}
    if(self.data.weather1 == '中雨'){self.setData({smallimg1 : '/static/weather_icon/中雨.png'})}
    if(self.data.weather1 == '大雨'){self.setData({smallimg1 : '/static/weather_icon/大雨.png'})}
    if(self.data.weather1 == '多云'){self.setData({smallimg1 : '/static/weather_icon/多云.png'})}
    if(self.data.weather1 == '阴'){self.setData({smallimg1 : '/static/weather_icon/阴.png'})}
    if(self.data.weather1 == '雷阵雨'){self.setData({smallimg1 : '/static/weather_icon/雷阵雨.png'})}
    
    if(self.data.weather2 == '晴'){self.setData({smallimg2 : '/static/weather_icon/晴.png'})}
    if(self.data.weather2 == '小雨'){self.setData({smallimg2 : '/static/weather_icon/小雨.png'})}
    if(self.data.weather2 == '中雨'){self.setData({smallimg2 : '/static/weather_icon/中雨.png'})}
    if(self.data.weather2 == '大雨'){self.setData({smallimg2 : '/static/weather_icon/大雨.png'})}
    if(self.data.weather2 == '多云'){self.setData({smallimg2 : '/static/weather_icon/多云.png'})}
    if(self.data.weather2 == '阴'){self.setData({smallimg2 : '/static/weather_icon/阴.png'})}
    if(self.data.weather2 == '雷阵雨'){self.setData({smallimg2 : '/static/weather_icon/雷阵雨.png'})}

    if(self.data.weather3 == '晴'){self.setData({smallimg3 : '/static/weather_icon/晴.png'})}
    if(self.data.weather3 == '小雨'){self.setData({smallimg3 : '/static/weather_icon/小雨.png'})}
    if(self.data.weather3 == '中雨'){self.setData({smallimg3 : '/static/weather_icon/中雨.png'})}
    if(self.data.weather3 == '大雨'){self.setData({smallimg3 : '/static/weather_icon/大雨.png'})}
    if(self.data.weather3 == '多云'){self.setData({smallimg3 : '/static/weather_icon/多云.png'})}
    if(self.data.weather3 == '阴'){self.setData({smallimg3 : '/static/weather_icon/阴.png'})}
    if(self.data.weather3 == '雷阵雨'){self.setData({smallimg3 : '/static/weather_icon/雷阵雨.png'})}

  },
  choseday()
  {
    let self = this
    if(self.data.week1 == '1'){self.setData({xingqi_first : 'Mon'})}
    if(self.data.week1 == '2'){self.setData({xingqi_first : 'Tues'})}
    if(self.data.week1 == '3'){self.setData({xingqi_first : 'Wednes'})}
    if(self.data.week1 == '4'){self.setData({xingqi_first : 'Thurs'})}
    if(self.data.week1 == '5'){self.setData({xingqi_first : 'Fri'})}
    if(self.data.week1 == '6'){self.setData({xingqi_first : 'Satur'})}
    if(self.data.week1 == '7'){self.setData({xingqi_first : 'Sun'})}

    if(self.data.week2 == '1'){self.setData({xingqi_second : 'Mon'})}
    if(self.data.week2 == '2'){self.setData({xingqi_second : 'Tues'})}
    if(self.data.week2 == '3'){self.setData({xingqi_second : 'Wednes'})}
    if(self.data.week2 == '4'){self.setData({xingqi_second : 'Thurs'})}
    if(self.data.week2 == '5'){self.setData({xingqi_second : 'Fri'})}
    if(self.data.week2 == '6'){self.setData({xingqi_second : 'Satur'})}
    if(self.data.week2 == '7'){self.setData({xingqi_second : 'Sun'})}

    if(self.data.week3 == '1'){self.setData({xingqi_third : 'Mon'})}
    if(self.data.week3 == '2'){self.setData({xingqi_third : 'Tues'})}
    if(self.data.week3 == '3'){self.setData({xingqi_third : 'Wednes'})}
    if(self.data.week3 == '4'){self.setData({xingqi_third : 'Thurs'})}
    if(self.data.week3 == '5'){self.setData({xingqi_third : 'Fri'})}
    if(self.data.week3 == '6'){self.setData({xingqi_third : 'Satur'})}
    if(self.data.week3 == '7'){self.setData({xingqi_third : 'Sun'})}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      city:JSON.parse(options.city),
      humidity:JSON.parse(options.humidity),
      province:JSON.parse(options.province),
      reporttime:JSON.parse(options.reporttime),
      temperature:JSON.parse(options.temperature),
      temperature_night:JSON.parse(options.temperature_night),
      weather:JSON.parse(options.weather),
      weather_night:JSON.parse(options.weather_night),
      winddirection:JSON.parse(options.winddirection),
      windpower:JSON.parse(options.windpower),
      week:JSON.parse(options.week),
      temperature1:JSON.parse(options.temperature1),
      temperature1_night:JSON.parse(options.temperature1_night),
      weather1:JSON.parse(options.weather1),
      weather1_night:JSON.parse(options.weather1_night),
      winddirection1:JSON.parse(options.winddirection1),
      windpower1:JSON.parse(options.windpower1),
      week1:JSON.parse(options.week1),
      temperature2:JSON.parse(options.temperature2),
      temperature2_night:JSON.parse(options.temperature2_night),
      weather2:JSON.parse(options.weather2),
      weather2_night:JSON.parse(options.weather2_night),
      winddirection2:JSON.parse(options.winddirection2),
      windpower2:JSON.parse(options.windpower2),
      week2:JSON.parse(options.week2),
      temperature3:JSON.parse(options.temperature3),
      temperature3_night:JSON.parse(options.temperature3_night),
      weather3:JSON.parse(options.weather3),
      weather3_night:JSON.parse(options.weather3_night),
      winddirection3:JSON.parse(options.winddirection3),
      windpowe3:JSON.parse(options.windpowe3),
      week3:JSON.parse(options.week3),
    })
    this.choseimg()
    this.choseday()
    setTimeout(()=>
    {
      this.setData({
        show : true
      })
    }, 600)
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