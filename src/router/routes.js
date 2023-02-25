import MainLayout from '@/layouts/MainLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'
import SettingLayout from '@/layouts/SettingLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    meta: {
      title: 'Biong Biong',
      login: false,
      admin: false
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/pages/front/IndexPage.vue')
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('@/pages/front/LoginPage.vue'),
        meta: {
          title: 'Biong Biong | Login'
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
          title: 'Biong Biong | About'
        }
      },
      {
        path: 'about/:id',
        name: 'about-photo',
        component: () => import('@/pages/front/PhotoPage.vue'),
        meta: {
          title: 'Biong Biong | About'
        }
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('@/pages/front/NewsPage.vue'),
        meta: {
          title: 'Biong Biong | New'
        }
      },
      {
        path: 'news/:id',
        name: 'newsInfo',
        component: () => import('@/pages/front/NewInfoPage.vue'),
        meta: {
          title: 'Biong Biong | NewInfo'
        }
      },
      {
        path: 'shopping',
        name: 'shopping',
        component: () => import('@/pages/front/ShoppingPage.vue'),
        meta: {
          title: 'Biong Biong | Shopping'
        }
      },
      {
        path: 'event',
        name: 'event',
        component: () => import('@/pages/front/EventPage.vue'),
        meta: {
          title: 'Biong Biong | Event'
        }
      },
      {
        path: 'event/:id',
        name: 'eventInfo',
        component: () => import('@/pages/front/EventInfoPage.vue'),
        meta: {
          title: 'Biong Biong | EventInfo'
        }
      },
      {
        path: 'shopping/:id',
        name: 'product',
        component: () => import('@/pages/front/ProductPage.vue'),
        meta: {
          title: 'Biong Biong | Product'
        }
      },
      {
        path: 'cart',
        name: 'setting-cart',
        component: () => import('@/pages/front/CartPage.vue'),
        meta: {
          title: 'Biong Biong | Setting - Cart'
        }
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    meta: {
      title: 'Biong Biong | admin',
      login: true,
      admin: true
    },
    children: [
      {
        path: '',
        name: 'admin',
        component: () => import('@/pages/admin/HomePage.vue')
      },
      {
        path: 'view',
        name: 'admin-view',
        component: () => import('@/pages/admin/ViewPage.vue'),
        meta: {
          title: 'Biong Biong | admin - view'
        }
      },
      {
        path: 'product',
        name: 'admin-product',
        component: () => import('@/pages/admin/ProductsPage.vue'),
        meta: {
          title: 'Biong Biong | admin - product'
        }
      },
      {
        path: 'order',
        name: 'admin-order',
        component: () => import('@/pages/admin/OrdersPage.vue'),
        meta: {
          title: 'Biong Biong | admin - order'
        }
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingLayout,
    meta: {
      title: 'Biong Biong | Setting',
      login: true,
      admin: false
    },
    children: [
      {
        path: '',
        name: 'setting',
        component: () => import('@/pages/setting/HomePage.vue'),
        meta: {
          title: 'Biong Biong | Setting'
        }
      },
      {
        path: 'order',
        name: 'setting-order',
        component: () => import('@/pages/setting/OrdersPage.vue'),
        meta: {
          title: 'Biong Biong | Setting - Orders'
        }
      },
      {
        path: 'event',
        name: 'setting-event',
        component: () => import('@/pages/setting/EventsPage.vue'),
        meta: {
          title: 'Biong Biong | Setting - Event'
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
