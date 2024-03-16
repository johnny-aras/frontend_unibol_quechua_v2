import { createApp } from 'vue'
//import '@/style.css'
import router from '@/router'
import store from './store'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';

import PrimeVue from 'primevue/config';

import '@/assets/styles.scss';
//import '@/styles/styles.scss';

createApp(App).use(store).use(PrimeVue).use(router).mount('#app')
