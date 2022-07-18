// miniprogram/pages/gao_de/gao_de.js
var amapFile = require('../../libs/amap-wx.js');//如：..­/..­/libs/amap-wx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: "../../img/mapicon_navi_s.png",
      id: 0,
      latitude: 39.989643,
      longitude: 116.481028,
      width: 23,
      height: 33
    },{
      iconPath: "../../img/mapicon_navi_e.png",
      id: 0,
      latitude: 39.90816,
      longitude: 116.434446,
      width: 24,
      height: 34
    }],
    distance: '',
    cost: '',
    polyline: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'d0300141024a5b5495563914d24504af'});
    myAmapFun.getPoiAround({
      success: function(data){
        console.log(data)
        //成功回调
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
    //获取自己所在地址的定位
    myAmapFun.getRegeo({
      success: function(data){
        //成功回调
        console.log('---------')

        console.log(data)
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })

    //获取定位地点天气内容
    myAmapFun.getWeather({
      success: function(data){
        console.log(data,'123')
        //成功回调
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })

    //路线
    myAmapFun.getDrivingRoute({
      origin: '116.481028,39.989643',
      destination: '116.434446,39.90816',
      success: function(data){
        var points = [];
        if(data.paths && data.paths[0] && data.paths[0].steps){
          var steps = data.paths[0].steps;
          for(var i = 0; i < steps.length; i++){
            var poLen = steps[i].polyline.split(';');
            for(var j = 0;j < poLen.length; j++){
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            } 
          }
        }
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if(data.paths[0] && data.paths[0].distance){
          that.setData({
            distance: data.paths[0].distance + '米'
          });
        }
        if(data.taxi_cost){
          that.setData({
            cost: '打车约' + parseInt(data.taxi_cost) + '元'
          });
        }
          
      },
      fail: function(info){

      }
    })

  },
  goDetail: function(){
    wx.navigateTo({
      url: '../navigation_car_detail/navigation'
    })
  },
  goToCar: function (e) {
    wx.redirectTo({
      url: '../navigation_car/navigation'
    })
  },
  goToBus: function (e) {
    wx.redirectTo({
      url: '../navigation_bus/navigation'
    })
  },
  goToRide: function (e) {
    wx.redirectTo({
      url: '../navigation_ride/navigation'
    })
  },
  goToWalk: function (e) {
    wx.redirectTo({
      url: '../navigation_walk/navigation'
    })
  },

})
