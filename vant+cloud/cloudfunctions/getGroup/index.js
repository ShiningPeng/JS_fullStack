//getGroup.js
// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'shiningpeng-p3idc'//指定作用于哪个服务器，环境


cloud.init()
const db = cloud.database({ env }) //获取哪里服务器的指针


// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext.OPENID;
  // console.log(cloud.getWxContext.OPENID);
  let groupList = await db.collection('user-group').where({
    userId: openId
  }).get();
  let returnResult = [];
  for (let item of groupList.data) {
    const oneGroup = await db.collection('group').where({
      _id: item.groupId,
      deleted: false
    }).get();
    if (oneGroup.data.length > 0) {
      const userInfo = await db.collection('user').where({
        openId: oneGroup.data[0].createBy
      }).get();
      oneGroup.data[0].createBy = userInfo.data[0];
      oneGroup.data[0].relateUserGroupId = item._id;
      returnResult.push(oneGroup.data[0]);
    }
  }
  return returnResult.sort((a, b) => a.createTime < b.createTime ? 1 : -1)


  // const userInfo = event.userInfo;
  // return await db.collection('group').where({
  //   deleted:false,
  //   createBy:userInfo.openId
  // }).get();
}