// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import QS from 'qs'; //用来解决vue中post请求(详情)
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

Vue.config.productionTip = false;
Vue.use(router);
Vue.use(Element)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
