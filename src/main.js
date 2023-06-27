import './assets/main.css';

import { createApp } from 'vue';
import { store } from './store/index';
import router from './router';

import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
