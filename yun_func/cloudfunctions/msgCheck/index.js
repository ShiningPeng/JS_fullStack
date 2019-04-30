// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init()
const got = require('got')

let appid = 'wxa214bf0b5706e881';
let secret = 'd70b4289ceda1c8b1a4ee5f8fba05a8b';

let msgCheckUrl = 'https://api.weixin.qq.com/wxa/msg_sec_check?access_token='
let tokenUrl = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + appid + '&secret=' + secret;
// https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxa214bf0b5706e881&secret=d70b4289ceda1c8b1a4ee5f8fba05a8b

// 云函数入口函数
exports.main = async (event, context) => {
  //令牌许可
  let tokenResponse = await got(tokenUrl);
  let token = JSON.parse(tokenResponse.body).access_token;
  console.log(token);
  let checkResponse = await got(msgCheckUrl + token, {
    body: JSON.stringify({
      content: event.text
    })
  });
  console.log(checkResponse);
  return checkResponse.body;
  // return event.a + event.b;
}