//index.js
//获取应用实例
import util from '../../utils/index';
const app = getApp()
let page = 0;
Page({
  data: {
    articleList: []
  },
  onLoad: function () {
    this.requestArticle();
  },
  requestArticle() {
    // 分页请求 pa
    page ++;
    util.request({
      mock: true,
      url: 'list',
      page,
      pageSize: 4
    })
    .then(res => {
      // 正常
      let articleList = res.data.data;
      console.log(articleList);
      articleList = this.formatArticle(articleList);
      // 本地缓存
      // 把标记过属性拿出来 拿到所有文章 判断一下
      // 加上 hasVisited 属性
      let oldArticleList = this.data.articleList;
      let newArticleList = oldArticleList
      .concat(articleList)
      this.setData({
        articleList: newArticleList
      })
    })
    .catch((e) => {
      // 
    })
  },
  formatArticle(articleList) {
    let visitedID = wx.getStorageSync('visitedID')
    || [];
    // 根据一份数据 来返回另一份数据 多用 map
    articleList = articleList.map(group => {
      group.articles = group.articles.map(item => {
        if (visitedID.includes(item.contentId)) {
          item.hasVisited = true;
        }
        return item;
      })
      return group;
    })
    return articleList;

  },
  showDetail(e) {
    // console.log(e);
    const contentId = e.currentTarget.dataset.contentid;
    // console.log(contentId);
    let visitedID = wx.getStorageSync('visitedID') 
    || [];
    // 1
    // 1
    // 1 用来判断数组中是否存在某个元素 includes find findIndex
    if (!visitedID.includes(contentId)) {
      visitedID.push(contentId);
    }
    wx.setStorageSync('visitedID', visitedID);
    wx.navigateTo(
      {
        url: `../detail/detail?contentId=${contentId}`
      }
    )
    // contentId
    // 标记为已经阅读过的
    // 设置本地缓存
    // 去到详情页
  },
  onReachBottom() {
    this.requestArticle();
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})