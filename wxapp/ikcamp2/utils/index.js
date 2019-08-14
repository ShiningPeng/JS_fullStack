import * as Mock from  './mock';
const DEFAULT_OPTION = {};
const util = {
  request(opt) { //Object.assign浅复制，后面的对象依次覆盖前面的对象
    let options = Object.assign(
      {},
      DEFAULT_OPTION,
      opt
    );
    // const { mock, url } = options;
    let {url, data, header, method, dataType, mock = false} = options
      return new Promise((resolve, reject) => {
        if(mock) {//开发环境请求假数据
          let res = {
            statusCode:200,
            data:Mock[url]
          }
          resolve(res);
        }else{
          wx.request({
            url,
            data,
            header,
            method,
            dataType,
            success(res){
              //集中处理请求
              if(res.statusCode === 200 && res.data){
                resolve(res.data);
              }else{
                reject();
              }
            }
          })
        }
      })
  }
};
export default util;