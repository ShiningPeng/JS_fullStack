// createGroup
// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'shiningpeng-p3idc'//指定作用于哪个服务器，环境

cloud.init()
//获取服务器的句柄(指针)

const db = cloud.database({ env }) //获取哪里服务器的指针


// 云函数入口函数
exports.main = async (event, context) => {
  const userInfo = event.userInfo;
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy:userInfo.openId,
      createTime:new  Date(),
      deleted:false,
      updateTime:new Date()
    }
  })
  .then(res=>{
    return db.collection('user-group').add({
      data:{
        groupId:res._id,
        userId:userInfo.openId,
        invalid:false,
        updateTime:new Date()
      }
    })
  })

}