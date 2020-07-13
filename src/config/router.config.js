// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/dashboard/workplace',
    children: [
      // schedule
      {
        path: '/schedule',
        name: 'schedule',
        component: () => import('@/views/schedule/schedule'),
        meta: { title: '计划表', keepAlive: true, permission: ['dashboard'], icon: bxAnaalyse }
      },
      // newpage
      {
        path: '/trade',
        name: 'trade',
        redirect: '/trade/TradeList',
        component: RouteView,
        meta: { title: '我已处理', keepAlive: true, icon: bxAnaalyse, permission: ['dashboard'] },
        children: [
          {
            path: '/trade/TradeList',
            name: 'TradeList',
            component: () => import('@/views/trade/TradeList'),
            meta: { title: '我已处理', keepAlive: false, permission: ['dashboard'], icon: bxAnaalyse }
          },
          {
            path: '/trade/TradeNew',
            name: 'TradeNew',
            component: () => import('@/views/trade/TradeNew'),
            meta: { title: '交易决裁', keepAlive: false, hidden: true, permission: ['dashboard'], icon: bxAnaalyse }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/test',
    component: BlankLayout,
    redirect: '/test/home',
    children: [
      {
        path: 'home',
        name: 'TestHome',
        component: () => import('@/views/Home')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
