import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        {path: '/zernoffvodka/', name: 'MainPage', component: () => import('./components/pages/MainPage.vue')},
        {path: '/zernoffvodka/catalog', name: 'catalog', component: () => import('./components/pages/CatalogPage.vue')},
        {path: `/zernoffvodka/companie`, name: 'about', component: () => import('./components/pages/AboutPage.vue')},
        {path: `/zernoffvodka/news`, name: 'news', component: () => import('./components/pages/NewsPage.vue')},
        {path: `/zernoffvodka/post/:id`, name: 'post', component: () => import('./components/pages/PostPage.vue')},
        {path: '/zernoffvodka/contacts', name: 'contacts', component: () => import('./components/pages/ContactsPage.vue')},
        {path: '/zernoffvodka/awards', name: 'awards', component: () => import('./components/pages/AwardsPage.vue')}
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ left: 0, top: 0 })
            }, 400)
        })
    }
})
createApp(App).use(router).mount('#app')
