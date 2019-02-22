//index.js
//获取应用实例
const app = getApp()
var Geturl = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    seatnumber:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  cansao(){
    wx.scanCode({
      onlyFromCamera:true,
      success:(res) =>{
        console.log("扫码结果");
        var number = parseInt(res.result);
        this.setData({
          seatnumber:number
        })
        wx.request({
          // url: //根据id来请求座位状态,
          url: Geturl,
          data: {
            seatid: number
          },
          header: {
            "Content-Type": "json"
          },
          method: 'GET',
          dataType: 'json',
          responseType: 'text',
          success: function (res) {
            console.log(res.data)
            if (res.data == true) {
              wx.navigateTo({
                url: "../seatselect/seatselect?seatid=" + number,
              })
            } else {
              wx.showToast({
                title: '扫描失败！',
                icon: 'none',
                duration: 1000
              })
            }
          },
          fail: function (res) {
          },
        })
      },fail:(res)=>{
        console.log(res);
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})