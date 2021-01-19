import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    // 发送请求成功
    // console.log(config);
    // 拦截后，要返回，否则会报错，Promise处理中
    return config
  }, err => {
    // 发送请求失败
    console.log(err);
  });

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    // 拦截后，返回数据，其他地方需要处理
    return res.data
  }, err=>{
    // console.log(err);
  });

  // 3. 发送真正的网络请求
  // instance的返回值本来就是Promise
  return instance(config)
}


// const totalNums = []
// const num1 = [12, 23, 42]
// const num2 = [43, 23, 53]
//
// // 1. 遍历
// for (let n of num1) {
//   totalNums.push(n)
// }
//
// // 2. 依次解析，将里面的元素一个个取出来，放到totalnums中
// totalNums.push(...num1)
// // 不能这样做，这样会把[12, 23, 42]当成一个元素放到数组中
// totalNums.push([12, 23, 42])
