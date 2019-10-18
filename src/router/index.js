import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },

  {
    path: '/store',
    component: Layout,
    name: '库存信息',
    meta: { title: '库存信息', icon: 'example' },
    children: [
      {
        path: 'storeInfo',
        name: '当前库存',
        component: () => import('@/views/store/store-info'),
        meta: { title: '当前库存', icon: 'dashboard' }
      },
      {
        path: 'storeTestInfo',
        name: '临时库存',
        component: () => import('@/views/store/store-test-info'),
        meta: { title: '临时库存', icon: 'dashboard' }
      },
      {
        path: 'addMaterial',
        name: '新增物料',
        component: () => import('@/views/store/add-material'),
        meta: { title: '新增物料', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/produce',
    component: Layout,
    redirect: '/produce/produceGoing',
    name: '生产信息',
    meta: { title: '生产信息', icon: 'example' },
    children: [
      {
        path: 'produceGoing',
        name: '已投入产线',
        component: () => import('@/views/produce/produce-going'),
        meta: { title: '正在生产', icon: 'table' }
      },
      {
        path: 'addProduce',
        name: '添加产线',
        component: () => import('@/views/produce/add-produce'),
        meta: { title: '添加产线', icon: 'tree' }
      }
    ]
  },

  {
    path: '/ingredient',
    component: Layout,
    redirect: '/ingredient/ingredientProduction',
    name: '配方信息',
    meta: { title: '配方信息', icon: 'example' },
    children: [
      {
        path: 'ingredientProduction',
        name: '配方总览',
        component: () => import('@/views/ingredient/ingredient_production'),
        meta: { title: '配方总览', icon: 'dashboard' }
      },
      {
        path: 'ingredientInfo',
        name: '配方明细',
        component: () => import('@/views/ingredient/ingredient-info'),
        meta: { title: '配方明细', icon: 'dashboard' }
      },
      {
        path: 'addIngredientInfo',
        name: '新增配方',
        component: () => import('@/views/ingredient/add-ingredient-info'),
        meta: { title: '新增配方', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/production',
    component: Layout,
    // redirect: '/dashboard',
    name: '产品信息',
    meta: { title: '产品信息', icon: 'example' },
    children: [
      {
        path: 'storeInfo',
        name: '产品性能',
        component: () => import('@/views/production/production-info'),
        meta: { title: '产品性能', icon: 'dashboard' }
      },
      {
        path: 'addProductionInfo',
        name: '添加产品',
        component: () => import('@/views/production/add-production-info'),
        meta: { title: '添加产品', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/add-produce',
    component: Layout,
    name: 'addProduce',
    meta: { title: '添加生产', icon: 'example' },
    children: [
      {
        path: 'produceMainAdd',
        name: 'produceMainAdd',
        component: () => import('@/views/add-produce/ProduceInput'),
        meta: { title: '添加产线', icon: 'table' }
      }
    ]
  },
  {
    path: '/hot-press',
    component: Layout,
    name: 'hot-press',
    meta: { title: '热压工艺', icon: 'example' },
    children: [
      {
        path: 'hotPresses',
        name: 'hotPresses',
        component: () => import('@/views/hot-press/HotPresses'),
        meta: { title: '热压工艺汇总', icon: 'dashboard' }
      },
      {
        path: 'techParams',
        name: 'techParams',
        component: () => import('@/views/hot-press/TechParams'),
        meta: { title: '热压参数', icon: 'dashboard' }
      },
      {
        path: 'hpCurData',
        name: 'hpCurData',
        component: () => import('@/views/hot-press/HpCurData'),
        meta: { title: '设备实时数据', icon: 'dashboard' }
      },
      {
        path: 'hpAdjust',
        name: 'hpAdjust',
        component: () => import('@/views/hot-press/HpAdjust'),
        meta: { title: '热压调整记录', icon: 'dashboard' }
      },
      {
        path: 'hpError',
        name: 'hpError',
        component: () => import('@/views/hot-press/HpError'),
        meta: { title: '热压故障记录', icon: 'dashboard' }
      },
      {
        path: 'hpProdCheck',
        name: 'hpProdCheck',
        component: () => import('@/views/hot-press/HpProdCheck'),
        meta: { title: '产品检测', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/heat-treat',
    component: Layout,
    name: 'heat-treat',
    meta: { title: '热处理工艺', icon: 'example' },
    children: [
      {
        path: 'heatTreats',
        name: 'heatTreats',
        component: () => import('@/views/heat-treat/HeatTreats'),
        meta: { title: '信息汇总', icon: 'dashboard' }
      },
      {
        path: 'htTechParams',
        name: 'htTechParams',
        component: () => import('@/views/heat-treat/HtTechParams'),
        meta: { title: '热处理参数', icon: 'dashboard' }
      },
      {
        path: 'htCueTemp',
        name: 'htCueTemp',
        component: () => import('@/views/heat-treat/HtCurTemp'),
        meta: { title: '实时温度', icon: 'dashboard' }
      },
      {
        path: 'htError',
        name: 'htError',
        component: () => import('@/views/heat-treat/HtError'),
        meta: { title: '热处理故障记录', icon: 'dashboard' }
      },
      {
        path: 'htAdjust',
        name: 'htAdjust',
        component: () => import('@/views/heat-treat/HtAdjust'),
        meta: { title: '热处理调整记录', icon: 'dashboard' }
      },
      {
        path: 'htProdCheck',
        name: 'htProdCheck',
        component: () => import('@/views/heat-treat/HtProdCheck'),
        meta: { title: '热处理检测', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/em-main-info',
    component: Layout,
    name: 'em-main-info',
    meta: { title: '外磨', icon: 'dashboard' },
    children: [
      {
        path: 'emMainInfo',
        name: 'emMainInfo',
        component: () => import('@/views/em-main-info/EmMainInfo'),
        meta: { title: '外磨信息汇总', icon: 'dashboard' }
      },
      {
        path: 'emTechParams',
        name: 'emTechParams',
        component: () => import('@/views/em-main-info/EmTechParams'),
        meta: { title: '外磨参数', icon: 'dashboard' }
      },
      {
        path: 'emProdCheck',
        name: 'emProdCheck',
        component: () => import('@/views/em-main-info/EmProdCheck'),
        meta: { title: '外磨检测', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/ig-main-info',
    component: Layout,
    name: 'ig-main-info',
    meta: { title: '内磨', icon: 'dashboard' },
    children: [
      {
        path: 'igMainInfo',
        name: 'igMainInfo',
        component: () => import('@/views/ig-main-info/IgMainInfo'),
        meta: { title: '内磨信息汇总', icon: 'dashboard' }
      },
      {
        path: 'igTechParams',
        name: 'igTechParams',
        component: () => import('@/views/ig-main-info/IgTechParams'),
        meta: { title: '内磨参数', icon: 'dashboard' }
      },
      {
        path: 'IgProdCheck',
        name: 'IgProdCheck',
        component: () => import('@/views/ig-main-info/IgProdCheck'),
        meta: { title: '内磨检测', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/chamfer-main-info',
    component: Layout,
    name: 'chamfer-main-info',
    meta: { title: '倒角', icon: 'dashboard' },
    children: [
      {
        path: 'chamferMainInfo',
        name: 'chamferMainInfo',
        component: () => import('@/views/chamfer-main-info/ChamferMainInfo'),
        meta: { title: '倒角信息汇总', icon: 'dashboard' }
      },
      {
        path: 'chamferTechParams',
        name: 'chamferTechParams',
        component: () => import('@/views/chamfer-main-info/ChamferTechParams'),
        meta: { title: '倒角参数', icon: 'dashboard' }
      },
      {
        path: 'chamferProdCheck',
        name: 'chamferProdCheck',
        component: () => import('@/views/chamfer-main-info/ChamferProdCheck'),
        meta: { title: '倒角检测', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/punch-main-info',
    component: Layout,
    name: 'punch-main-info',
    meta: { title: '打孔', icon: 'dashboard' },
    children: [
      {
        path: 'punchMainInfo',
        name: 'punchMainInfo',
        component: () => import('@/views/punch-main-info/PunchMainInfo'),
        meta: { title: '打孔信息汇总', icon: 'dashboard' }
      },
      {
        path: 'punchTechParams',
        name: 'punchTechParams',
        component: () => import('@/views/punch-main-info/PunchTechParams'),
        meta: { title: '打孔参数', icon: 'dashboard' }
      },
      {
        path: 'punchProdCheck',
        name: 'punchProdCheck',
        component: () => import('@/views/punch-main-info/PunchProdCheck'),
        meta: { title: '打孔检测', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/pack-main-info',
    component: Layout,
    name: 'pack-main-info',
    meta: { title: '包装', icon: 'dashboard' },
    children: [
      {
        path: 'packMainInfo',
        name: 'packMainInfo',
        component: () => import('@/views/pack-main-info/PackMainInfo'),
        meta: { title: '包装信息汇总', icon: 'dashboard' }
      },
      {
        path: 'packTechParams',
        name: 'packTechParams',
        component: () => import('@/views/pack-main-info/PackTechParams'),
        meta: { title: '包装参数', icon: 'dashboard' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
