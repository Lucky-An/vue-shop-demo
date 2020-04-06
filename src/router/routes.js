import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Search from '../pages/Search';

export default [{
    path: '/home',
    name: 'home',
    component: Home,
}, {
    path: '/login',
    component: Login
}, {
    path: '/register',
    component: Register,
    meta: {
        isHideShow: true //添加meta对象用meta的 isHideShow属性控制显示隐藏
    }
}, {
    name: 'search',
    path: '/search/:searchName?', //最后加问号表示参数可传可不传
    component: Search,
    props: (route) => ({
        params: route.params,
        query: route.query
    })
}, {
    path: '/',
    redirect: {
        name: 'home'
    }
}]