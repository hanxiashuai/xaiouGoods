import { createRouter, createWebHashHistory } from 'vue-router'

import store from "@/store/index"
// 导入进度条插件
import useNProgress from "@/hooks/useNProgress.js";
const NProgress = useNProgress();

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: 'homepage' },
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    children: [
      // 首页
      {
        path: "homepage",
        name: "homepage",
        meta: {
          title: "首页",
          Breadcrumb: ["首页"],
        },
        component: () => import(/* webpackChunkName: "homepage" */ "../views/Aside/Homepage.vue"),
      },
      // 系统设置
      {
        path: "/",
        children: [
          //菜单
          {
            path: "menu",
            name: "menu",
            meta: {
              title: "菜单管理",
              Breadcrumb: ["系统设置", "菜单管理"]
            },
            component: () => import(/* webpackChunkName: "menu" */ "../views/Aside/backStage/menu/Index.vue"),
          },
          // 菜单添加
          {
            path: "menu/add",
            name: "menuadd",
            meta: {
              title: "菜单添加",
              Breadcrumb: ["系统设置", "菜单添加"]
            },
            component: () => import(/* webpackChunkName: "homepage" */ "../views/Aside/backStage/menu/Info.vue"),
          },
          // 菜单编辑
          {
            path: "menu/:id",
            name: "menuedit",
            meta: {
              title: "菜单编辑",
              Breadcrumb: ["系统设置", "菜单编辑"]
            },
            component: () => import(/* webpackChunkName: "homepage" */ "../views/Aside/backStage/menu/Info.vue"),
          },
          //角色
          {
            path: "role",
            name: "role",
            meta: {
              title: "角色管理",
              Breadcrumb: ["系统设置", "角色管理"]
            },
            component: () => import(/* webpackChunkName: "user" */ "../views/Aside/backStage/role/Index.vue"),
          },
          // 角色添加
          {
            path: "role/add",
            name: "roleadd",
            meta: {
              title: "角色添加",
              Breadcrumb: ["系统设置", "角色添加"]
            },
            component: () => import(/* webpackChunkName: "homepage" */ "../views/Aside/backStage/role/Info.vue"),
          },
          // 角色编辑
          {
            path: "role/:id",
            name: "roleedit",
            meta: {
              title: "角色编辑",
              Breadcrumb: ["系统设置", "角色编辑"]
            },
            component: () => import(/* webpackChunkName: "homepage" */ "../views/Aside/backStage/role/Info.vue"),
          },

          //管理员
          {
            path: "admin",
            name: "admin",
            meta: {
              title: "管理员管理",
              Breadcrumb: ["系统设置", "管理员管理"]
            },
            component: () => import(/* webpackChunkName: "user" */ "../views/Aside/backStage/admin/Index.vue"),
          },
          // 管理员添加
          {
            path: "admin/add",
            name: "adminadd",
            meta: {
              title: "管理员添加",
              Breadcrumb: ["系统设置", "管理员添加"]
            },
            component: () => import(/* webpackChunkName: "homepage" */ "../views/Aside/backStage/admin/Info.vue"),
          },
          // 管理员编辑
          {
            path: "admin/:id",
            name: "adminedit",
            meta: {
              title: "管理员编辑",
              Breadcrumb: ["系统设置", "管理员编辑"]
            },
            component: () => import(/* webpackChunkName: "homepage" */ "../views/Aside/backStage/admin/Info.vue"),
          },
        ]
      },
      // 商城管理
      {
        path: "/",
        name: "problem",
        children: [
          //商品分类
          {
            path: "category",
            name: "category",
            meta: {
              title: "商品分类",
              Breadcrumb: ["商城管理", "商品分类"]
            },
            component: () => import(/* webpackChunkName: "category" */ "../views/Aside/shopAdmin/category/Index.vue"),
          },
          //会员管理
          {
            path: "specs",
            name: "specs",
            meta: {
              title: "会员管理",
              Breadcrumb: ["商城管理", "会员管理"]
            },
            component: () => import(/* webpackChunkName: "specs" */ "../views/Aside/shopAdmin/specs/Index.vue"),
          },
          //商品管理
          {
            path: "goods",
            name: "goods",
            meta: {
              title: "商品管理",
              Breadcrumb: ["商城管理", "商品管理"]
            },
            component: () => import(/* webpackChunkName: "goods" */ "../views/Aside/shopAdmin/goods/Index.vue"),
          },
          //商品规格
          {
            path: "member",
            name: "member",
            meta: {
              title: "商品规格",
              Breadcrumb: ["商城管理", "商品规格"]
            },
            component: () => import(/* webpackChunkName: "member" */ "../views/Aside/shopAdmin/member/Index.vue"),
          },
          //轮播图管理
          {
            path: "banner",
            name: "banner",
            meta: {
              title: "轮播图管理",
              Breadcrumb: ["商城管理", "轮播图管理"]
            },
            component: () => import(/* webpackChunkName: "banner" */ "../views/Aside/shopAdmin/banner/Index.vue"),
          },
          //秒杀活动
          {
            path: "seckill",
            name: "seckill",
            meta: {
              title: "秒杀活动",
              Breadcrumb: ["商城管理", "秒杀活动"]
            },
            component: () => import(/* webpackChunkName: "seckill" */ "../views/Aside/shopAdmin/seck/Index.vue"),
          },
        ]
      },
      // 个人中心
      {
        path: "/Userfilled/:id",
        name: "Userfilled",
        meta: {
          title: "个人中心",
          Breadcrumb: ["个人中心"]
        },
        component: () => import(/* webpackChunkName: "home" */ "../views/Aside/Userfilled.vue"),
      },
      // 404页面
      {
        path: "/:pathMatch(.*)*",
        name: "notFound",
        meta: {
          name: "404",
          Breadcrumb: ["404"]
        },
        component: () => import(/* webpackChunkName: "home" */ "../views/Aside/NotFound.vue"),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    // 这将为这条路由生成一个单独的chunk (about.[hash].js)
    // 路由懒加载.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//导航前置守卫
router.beforeEach((to, from, next) => {
  // 开启进度条
  NProgress.start();
  const isLogin = store.state.userStore.isLogin;
  if (to.name !== "login" && !isLogin) {
    // 取消本次导航
    // return false;
    // 返回到登录页
    next({ name: "login" });
  } else {
    next();
  }
});

// 导航后置守卫
router.afterEach(() => {
  // 关闭进度条
  NProgress.done();
});

export default router
