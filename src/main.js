import {createApp} from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia';
import VueApexCharts from 'vue3-apexcharts'

createApp(App).use(createPinia()).use(VueApexCharts).mount('#app')
