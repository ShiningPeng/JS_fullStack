Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  showPopup: function () {
    // 弹窗
    this.popup.showPopup();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.popup = this.selectComponent('#popup');
  },
  _error(){
    this.popup.hidePopup();
  },
  _success(){
    this.popup.hidePopup();
  },
  change:function(){
    var mComponent=this.selectComponent('#myComponent');
    mComponent.setText('外部调用了');
    console.log('catch');
  },
  onTextChange:function(){
    wx.showToast({
      title:'捕获事件',
    })
  }
})