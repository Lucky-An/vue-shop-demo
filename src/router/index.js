import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

/* 
方案2: 修正Vue原型上的push和replace方法
*/

// const originPush = VueRouter.prototype.push
//     // 给成功回调的参数指定一个默认的函数
// VueRouter.prototype.push = function(location, onComplete = () => {}, onAbort) {
//     return originPush.call(this, location, onComplete, onAbort)
// }

// // 通过失败的回调
// /* 
// VueRouter.prototype.replace = function (location, onComplete, onAbort=()=>{}) {
//   return originPush.call(this, location, onComplete, onAbort)
// } */
// VueRouter.prototype.replace = function(location, onComplete, onAbort) {
//     return originPush.call(this, location, onComplete, onAbort).catch(() => {})
// }


Vue.use(VueRouter);


export default new VueRouter({
    mode: 'history',
    routes
})