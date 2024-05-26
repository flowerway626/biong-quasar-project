import MainLayout from '@/layouts/MainLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import SettingLayout from '@/layouts/SettingLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/front/IndexPage.vue'),
        meta: {
          title: 'Biong Biong',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/front/LoginPage.vue'),
        meta: {
          title: 'Biong Biong | Login',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('@/pages/front/RegisterPage.vue'),
        meta: {
          title: 'Biong Biong | Register',
          login: false,
          admin: false
        }
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/pages/front/AboutPage.vue'),
        meta: {
          title: 'Biong Biong | 關於地娛室',
          login: false,
          admin: false
        }
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/pages/front/NewsPage.vue'),
        meta: {
          title: 'Biong Biong | 最新消息',
          login: false,
          admin: false
        }
      },
      {
        path: 'news/:id',
        name: 'newsInfo',
        component: () => import('@/pages/front/NewInfoPage.vue'),
        meta: {
          login: false,
          admin: false
        }
      },
      {
        path: 'shopping',
        name: 'shopping',
        component: () => import('@/pages/front/ShoppingPage.vue'),
        meta: {
          title: 'Biong Biong | 周邊商品',
          login: false,
          admin: false
        }
      },
      {
        path: 'event',
        name: 'event',
        component: () => import('@/pages/front/EventPage.vue'),
        meta: {
          title: 'Biong Biong | 活動公告',
          login: false,
          admin: false
        }
      },
      {
        path: 'event/:id',
        name: 'eventInfo',
        component: () => import('@/pages/front/EventInfoPage.vue'),
        meta: {
          title: 'Biong Biong | 購物車',
          login: false,
          admin: false
        }
      },
      {
        path: 'shopping/:id',
        name: 'product',
        component: () => import('@/pages/front/ProductPage.vue'),
        meta: {
          title: 'Biong Biong | 購物車',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/pages/front/CartPage.vue'),
        meta: {
          title: 'Biong Biong | 購物車',
          login: false,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin',
        component: () => import('@/pages/admin/HomePage.vue'),
        meta: {
          title: 'Biong Biong | admin',
          login: true,
          admin: true
        }
      },
      {
        path: 'about',
        name: 'admin-about',
        component: () => import('@/pages/admin/AboutPage.vue'),
        meta: {
          title: 'Biong Biong | admin - 介紹管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'view',
        name: 'admin-view',
        component: () => import('@/pages/admin/ViewPage.vue'),
        meta: {
          title: 'Biong Biong | admin - 頁面管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'product',
        name: 'admin-product',
        component: () => import('@/pages/admin/ProductsPage.vue'),
        meta: {
          title: 'Biong Biong | admin - 商品管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'order',
        name: 'admin-order',
        component: () => import('@/pages/admin/OrdersPage.vue'),
        meta: {
          title: 'Biong Biong | admin - 訂單管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'data',
        name: 'admin-data',
        component: () => import('@/pages/admin/DataPage.vue'),
        meta: {
          title: 'Biong Biong | admin - 資料統計',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingLayout,
    children: [
      {
        path: '',
        name: 'setting',
        component: () => import('@/pages/setting/HomePage.vue'),
        meta: {
          title: 'Biong Biong | 會員專區',
          login: true,
          admin: false
        }
      },
      {
        path: 'order',
        name: 'setting-order',
        component: () => import('@/pages/setting/OrdersPage.vue'),
        meta: {
          title: 'Biong Biong | 會員專區 - 訂單明細',
          login: true,
          admin: false
        }
      },
      {
        path: 'event',
        name: 'setting-event',
        component: () => import('@/pages/setting/EventsPage.vue'),
        meta: {
          title: 'Biong Biong | 會員專區 - 報名活動',
          login: true,
          admin: false
        }
      }
    ]
  },
  // Always leave this as last one, but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue')
  }
]

export default routes
