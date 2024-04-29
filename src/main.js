import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        {path: '/zernoffvodka/', name: 'MainPage', component: () => import('./components/MainPage.vue')},
        {path: '/zernoffvodka/catalog', name: 'catalog', component: () => import('./components/Catalog.vue')},
        {path: `/zernoffvodka/catalog/:id`, name: 'drink', component: () => import('./components/Drink.vue')},
        {path: `/zernoffvodka/companie`, name: 'about', component: () => import('./components/About.vue')},
        {path: `/zernoffvodka/news`, name: 'news', component: () => import('./components/News.vue')},
        {path: `/zernoffvodka/post/:id`, name: 'post', component: () => import('./components/Post.vue')},
        {path: '/zernoffvodka/contacts', name: 'contacts', component: () => import('./components/Contacts.vue')}
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
