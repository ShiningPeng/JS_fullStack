//app.js
App({
  onLaunch: function (options) {
    const self = this
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
        env: 'shiningpeng-p3idc'
      })
    }

    this.globalData.shareParam = options.query
    //查询是否授权
    wx.getSetting({
      success(settingRes) {
        //已经授权
        if (settingRes.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: (infoRes) => {
              self.globalData.userInfo = infoRes.userInfo
              if (self.catchUserInfo) {
                self.catchUserInfo(infoRes.userInfo);
              }
              //如果是旧用户的话就跟新信息
              wx.cloud.callFunction({
                name: 'createUser',
                data: {
                  avatarUrl: infoRes.userInfo.avatarUrl,
                  name: '',
                  nickName: infoRes.userInfo.nickName,
                  sex: infoRes.userInfo.gender
                }
              })
            },
            fail: (err) => { console.log(err)},
          })
        }else{
          wx.redirectTo({
            //跳转页面
            url:`/pages/login/login?back=${options.path.split('/')[1]}`
          })
        }
      }
    })
    wx.cloud.callFunction({
      name:'getUserInfo',
      data:{
        success(res){
          self.globalData.userInfoFromCloud = res.result.storeUser
        }
      }
    })
  },
  globalData:{
    currentGroupInfo:null,
    currentGroupList:[],
    currentBill:null,
    userInfo:null,
    shareParam:null,
    billId:'',
    userInfoFromCloud:null,
    userRemark:{}
  }
})
