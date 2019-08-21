const Schedule = require('node-schedule');
// //每天定时任务
const date = new Date(2019, 7, 21, 16, 37, 0);
Schedule.scheduleJob(date, () => {
  console.log('执行了');
})
// let rule = new Schedule.RecurrenceRule();
// rule.dayOfWeek = [0, 1, 2, 3, 4, 5, 6]; //一周中的那几天执行，0为周日 
// rule.hour = 16;
// rule.minute = 30;
// let job = Schedule.scheduleJob(rule, function() {
//   console.log('执行了');
// })