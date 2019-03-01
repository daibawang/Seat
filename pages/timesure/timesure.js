// pages/timesure/timesure.js
var util = require('../../utils/util.js');
const times=[]
for(let i=1;i<=12;i++){
  times.push(i)
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    times,
    selecthour:null,
    value:[1],
    datahour:null,
    datatime:null,
  },
  bindpickend(e){
    const val = e.detail.value
    this.setData({
      selecthour: this.data.times[val[0]]
    })
    console.log("选择了" + this.data.times[val[0]])
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const date = new Date()
    this.setData({
      datahour: date.getHours(),
      datatime: date.getHours() + ":" + date.getMinutes()
    })
    console.log(this.data.datatime)
  },
  timesure:function(){
    var tomeover = this.data.selecthour + this.data.datahour
    if (tomeover>22){
      wx.showModal({
        content: '时间超过闭馆时间，不可定制',
        showCancel: false,
        confirmText: '确定',
        confirmColor: "#ffd742"
      })
    }else{
      wx.showModal({
        content: '定制成功,您可以使用该座位至' + this.data.datatime,
        showCancel: false,
        confirmText: '确定',
        confirmColor: "#ffd742"
      })
    }
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