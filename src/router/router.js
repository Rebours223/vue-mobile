import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import login from '@/components/login'
import user from '@/components/user'
import products from '@/components/products'
import details from '@/components/details'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/index', name: 'index', component: index},
    {path: '/login', name: 'login', component: login, meta: {needLogin: true}},
    {path: '/user', name: 'user', component: user, meta: {needLogin: true}},
    {path: '/products', name: 'products', component: products},
    {path: '/details', name: 'details', component: details},
    {path: '/test', name: 'test', component: test}
  ]
})
