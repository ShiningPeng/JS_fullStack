//getUserInfo
// 云函数入口文件
const cloud = require('wx-server-sdk')

const env = 'shiningpeng-p3idc'//指定作用于哪个服务器，环境


cloud.init()
const db = cloud.database({ env }) //获取服务器的句柄即获取哪里服务器的指针

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const groupNum = await db.collection('user-group').where({
    userId: cloud.getWXContext().OPENID
  }).get()

  const storeUser = await db.collection('user').where({
    openId: cloud.getWXContext().OPENID
  }).get()
  return {
    groupNum: groupNum.data.length,
    storeUser: storeUser.data[0]
  }

}