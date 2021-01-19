import {request} from "./request";

// 再做一层封装
// 首页的所有请求单独放到一个js中
// 首页面向这个模块开发
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 获取首页相关商品
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}

// // 函数调用 -> 压入函数栈（保存函数调用过程中所有变量
// // 函数调用结束 -> 弹出函数栈（释放函数中所有的变量
// function test() {
//   const names = ['aaa', 'bbb']
// }
//
// test()
