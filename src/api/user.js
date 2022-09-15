// 专门出来用户相关的网络请求
import request from "@/utils/request";

export function login(data) {
  // return request.post("/login",data)
  // 密码采用sha.js加密传输密码
  // var shajs = require('sha.js')
  // data.password = shajs('sha256').update(data.password).digest('hex')

  return request({
    method: "post",
    url: "/userlogin",
    data,
  });
};

