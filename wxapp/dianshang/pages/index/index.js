//index.js
//获取应用实例
const app = getApp()
const WXAPI = require('../../wxapi/main');

Page({
  data: {
    goods: [], //商品列表
    categories: [], //分类
    activeCategoryId: 0 ,//当前分类
    noticeList:[] //通知列表
  },
  onLoad() {
    this.getBanners();  //请求Banner位
    this.loadGoods();  //商品
    this.getNotice();
  },
  getNotice(){
    WXAPI.noticeList({
      pageSize:5
    }).then(res=>{
      console.log(res);
      this.setData({
        noticeList:res.data
      });
    })
  },
  getBanners() {
    WXAPI.banners({
      type: 'new'
    }).then(res => {
      console.log(res)
    }
    )
  },
  loadGoods() {
    WXAPI.goods({
      recommendStatus:1
    }).then(res=>{
      console.log(res);
    })
  }
})
