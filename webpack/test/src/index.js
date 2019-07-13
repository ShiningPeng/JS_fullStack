// 入口文件
const superagent = require('superagent');
const cheerio = require('cheerio');

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
        // const youliangdu = $singleDay.eq(4).text().trim();
        // const wind = $singleDay.eq(5).text().trim();
        threeDaysData.push({
          day, weatherText, temperature
        })
        // var a =  $('.weather ul li').createElement('span');
        // a.text = day;
      })
      resolve({ weatherTip, threeDaysData });
      console.log(weatherTip,threeDaysData);
    })
  })
};

getWeatherTpis();



