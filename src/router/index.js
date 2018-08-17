import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import administrator from '@/page/dataManagement/administratorlist'
import business from '@/page/dataManagement/businesslist'
import food from '@/page/dataManagement/foodlist'
import order from '@/page/dataManagement/orderlist'
import userlist from "@/page/dataManagement/userlist"
import homepage from '@/page/homepage'
import addfoods from "@/page/addData/addfoods"
import addshops from "@/page/addData/addShops"
import textedit from "@/page/edit/textedit"
import adminset from "@/page/adminSet"
Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "homepage",
      meta: ['首页'],
    },{
      path: "/homepage",
      name: "homepage",
      component: homepage,
      meta: ['首页'],
    },{
      path: "/helloworld",
      name: "HelloWorld",
      component: HelloWorld
    },{
      path: "/userlist",
      name: "userlist",
      component: userlist,
      meta: ['数据管理', '用户列表'],
    },{
      path: "/administrator",
      name: "administrator",
      component: administrator,
      meta: ['数据管理', '管理员列表'],
    },{
      path: "/business",
      name: "business",
      component: business,
      meta: ['数据管理', '商家列表'],
    },{
      path: "/food",
      name: "food",
      component: food,
      meta: ['数据管理', '食品列表'],
    },{
      path: "/order",
      name: "order",
      component: order,
      meta: ['数据管理', '订单列表'],
    },{
      path: "/addfoods",
      name: "addfoods",
      component: addfoods,
      meta: ['添加数据', '添加食品'],
    },{
      path: "/addshops",
      name: "addshops",
      component: addshops,
      meta: ['添加数据', '添加商铺'],
    },{
      path: "/textedit",
      name: "textedit",
      component: textedit,
      meta: ['编辑', '文本编辑'],
    },{
      path: "/adminset",
      name: "adminset",
      component: adminset,
      meta: ['设置', '管理员编辑'],
    },
  ]
})

