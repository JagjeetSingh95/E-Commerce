import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import Shop from '@/components/shop/Shop'
import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Home - E-Commerce App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          }
        ]
      },
      component: Home
    },
    {
      path: '/home',
      meta: {
        title: 'Home - E-Commerce App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      },
      component: Home
    },
    {
      path: '/shop',
      meta: {
        title: 'Shop - E-Commerce App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      },
      component: Shop
    },
    {
      path: '/about',
      meta: {
        title: 'About - E-Commerce App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      },
      component: About
    },
    {
      path: '/contact',
      meta: {
        title: 'Contact - E-Commerce App',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our example app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our example app.'
          }
        ]
      },
      component: Contact
    }
  ],
  mode: 'history'
})
