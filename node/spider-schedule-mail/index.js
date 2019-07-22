const superagent = require('superagent');
const cheerio = require('cheerio');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const local = 'jiangxi/qingshanhu-district'
const weatherUrl = `https://tianqi.moji.com/weather/china/${local}`;
const getWeatherTpis = function () {
  return new Promise((resolve, reject) => {
    superagent.get(weatherUrl).end((err, res) => {
      if (err) {
        reject(err);
      }
      const $ = cheerio.load(res.text);
      const $weatherTip = $('.wea_tips');
      // 查找 xx 元素下面的节点
      const weatherTip = $weatherTip.find('em').text();
      let threeDaysData = [];
      $('.forecast .days').each((index, dayNode) => {
        const $singleDay = $(dayNode).find('li');
        const day = $singleDay.eq(0).text().trim();
        const weatherText = $singleDay.eq(1).text().trim();
        const temperature = $singleDay.eq(2).text().trim();
        threeDaysData.push({
          day, weatherText, temperature
        })
      })
      resolve({ weatherTip, threeDaysData });
    })
  })
};
const getOneData = function () {
  return new Promise((resolve, reject) => {
    superagent.get('http://wufazhuce.com/')
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        let $ = cheerio.load(res.text);
        let selectItem = $("#carousel-one .carousel-inner .item");
        let todayOne = selectItem[0];
        let todayOneData = {
          type: $(todayOne)
            .find(".fp-one-imagen-footer")
            .text()
            .replace(/\s/g, ''),
          text: $(todayOne)
            .find(".fp-one-cita")
            .text()
            .replace(/\s/g, '')
        };
        resolve(todayOneData)
      })
  })
}
getOneData();
Promise.all()
getWeatherTpis().then(tip => {
  console.log(tip);
})
//聚合数据
function getSpiderData() {
  const htmlData = {};
  Promise.all([getWeatherTpis(), getOneData()])
    .then(spiderArr => {
      // spiderArr 是一个数组 ，由Promise resolve 出来的数组组成。
      const [weatherData, oneData] = spiderArr;
      htmlData['weatherTip'] = weatherData.weatherTip;
      console.log(weatherData, oneData);
      sendEmail(htmlData);
    })
}
function sendEmail() {
  const template = ejs.compile(
    fs.readFileSync(path.resolve(__dirname, 'email.ejs'), 'utf8')
  )
  const html = template(htmlData);
  // 发送邮件
  let transporter = nodemailer.createTransport({
    service: 'qq',
    port: 465, //smtp协议的一个端口号
    secureConnection: true,
    auth: {
      user: '1494228462@qq.com',
      pass: 'rrjypoczdvncjgeb' //生成的授权码
    }
  })
  transporter.sendMail({
    from: '皮卡丘 <1494228462@qq.com>',
    to: '1494228462@qq.com',
    subject: '邮件',
    html: html
  }, (err, info) => {
    if(err){
      console.log('err',err);
      return false;
    }
    console.log('info',info);
  })
}
getSpiderData();