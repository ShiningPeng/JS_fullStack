//index.js
const db = wx.cloud.database();
const productsCollection = db.collection('products');
const _ = db.command;
const app = getApp()

Page({
  data: {
    products:[],
    page:0
  },

  onLoad: function(options) {
   productsCollection.get().then(res => {
     this.setData({
       products:res.data
     })
   })
     
  },
  onPullDownRefresh: function() {
    productsCollection.get().then(res => {
      this.setData({
        products: res.data
      },res=>{
        console.log("更新完成");
        wx.stopPullDownRefresh();
      }
      );
    })
  },
  onReachBottom() {
    let page = this.data.page + 20;
    productsCollection.skip(page).get().then(
      res => {
        let new_data = res.data;
        let old_data = this.data.products;
        this.setData({
          products: old_data.concat(new_data),
          page: page
        },res2 => {
          console.log(`第${page}页数据加载`)
        })
      }
    )
  },

  onGetUserInfo: function(e) {
    
  },

  onGetOpenid: function() {
    // 调用云函数
    
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
   
  },

})
