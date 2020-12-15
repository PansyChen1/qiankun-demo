import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import Kpc from 'kpc-vue';
import _ from 'lodash';
import utils from '@/utils/utils';
import api from '@/api/index';
import { registerMicroApps, start } from 'qiankun';

const app = createApp(App);
// app.use(Kpc);
app.config.devtools = true;
app.config.productionTip = false;
app.config.globalProperties._ = _;
app.config.globalProperties.utils = utils;
app.config.globalProperties.api = api;
// app.component(/* ... */);
// app.directive(/* ... */);
app.use(router)
    .use(store)
    .mount('#app');


registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:7100',
    container: '#yourContainer',
    activeRule: '/yourActiveRule',
  },
]);

start();

