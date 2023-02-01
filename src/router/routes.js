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
        component: () => import('@/pages/IndexPage.vue'),
        meta: {
          title: 'Biong Biong'
        }
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
          title: 'Biong Biong | Register'
        }
      },
      {
        path: 'about',
        name: 'abput',
        component: () => import('@/pages/front/AboutPage.vue'),
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
        path: 'shopping/:id',
        name: 'product',
        component: () => import('@/pages/front/ProductPage.vue'),
        meta: {
          title: 'Biong Biong | Product'
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
          title: 'Biong Biong | admin'
        }
      },
      {
        path: 'product',
        name: 'admin-product',
        component: () => import('@/pages/admin/ProductsPage.vue'),
        meta: {
          title: 'Biong Biong | admin - product'
        }
      }
    ]
  },
  {
    path: '/setting',
    name: 'setting',
    component: SettingLayout,
    meta: {
      title: 'Biong Biong | Setting'
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
        path: 'cart',
        name: 'setting-cart',
        component: () => import('@/pages/setting/CartPage.vue'),
        meta: {
          title: 'Biong Biong | Setting - Cart'
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
