//index.js
const app = getApp()
// 连上数据库
const db = wx.cloud.database();
// 找到userInfo表
const userInfo = db.collection('userInfo');

Page({
  data: {
    userList: []
  },
  getUserInfo: function (result) {
    console.log(result);
    // 用户 _openid 前端是拿不到的，云开发能够拿到
    wx.cloud.callFunction({
      name: 'getOpenId',
      complete: res => {
        // 默认是open-id，很单一，
        userInfo.where({
          _openid: res.result.openId
        }).count().then(res => {
          if (res.total == 0) {
            userInfo.add({
              data: result.detail.userInfo
            }).then(res => {
              console.log(res);
            })
          } else {
            // console.log('加过了');
            wx.navigateTo({
              url:'/pages/add/add',
              success:res=>{
                console.log(res);
              }
            })
          }
        })
        console.log(res.result.userInfo);
        // 云数据库中，传一个json，就代表一个记录

      }
    })
  },

  onLoad: function (options) {
    userInfo.get().then(res => {
      this.setData({
        userList:res.data
      })
    })
  }

})
