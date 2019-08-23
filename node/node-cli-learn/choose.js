const inquirer = require('inquirer');
inquirer.prompt([{
  type:'input',
  name:'age',
  message:'please input your age',
  default:18
}, {
  type:'rowlist',
  name:'css',
  message:'使用什么css预处理',
  choices:[{name:'less', value:'less-less', short:'less-short'},
  {
    name:'sass', value:'sass-sass', short:'sass-short'
  }]
}]).then(res => {
  console.log(res);
})