import Vue from 'vue'
import Router from 'vue-router'
//安装路由
Vue.use(Router)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Car = () => import('views/car/Car')
const Profile = () => import("views/profile/Profile")
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/car',
    component:Car
  },
  {
    path:'/profile',
    component:Profile
  },
]

export default new Router({
  routes,
  mode:'history'
})
