import "whatwg-fetch";

let base_url = "";

export default function(url, method, params = "") {
  let header = {
    "Content-Type": "application/json;charset=UTF-8"
    // "accesstoken":token  //用户登陆后返回的token，某些涉及用户数据的接口需要在header中加上token
  };
  if (params == "") {
    //如果网络请求中没有参数
    return new Promise(function(resolve, reject) {
      fetch(base_url + url, {
        method: method,
        headers: header
      })
      .then(response => response.json())
      .then(responseData => {
        resolve(responseData);
      })
      .catch(err => {
        console.log("err:", url, err); //网络请求失败返回的数据
        reject(err);
      });
    });
  } else {
    //如果网络请求中带有参数
    return new Promise(function(resolve, reject) {
      fetch(base_url + url, {
        method: method,
        headers: header,
        body: JSON.stringify(params) //body参数，通常需要转换成字符串后服务器才能解析
      })
      .then(response => response.json())
      .then(responseData => {
        resolve(responseData);
      })
      .catch(err => {
        console.log("err:", url, err); //网络请求失败返回的数据
        reject(err);
      });
    });
  }
}
