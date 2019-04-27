Page({
  data:{

  },
  navigateToAdd(){
    wx.navigateTo({
      url: '../add/add'
    })
  },
  navigateToIndex() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  navigateToComplex() {
    wx.navigateTo({
      url: '../complex/complex'
    })
  }
})
