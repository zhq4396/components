import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from "vant";
import "vant/lib/index.less";
import "lib-flexible";
import less from "less";
Vue.use(Vant);
Vue.use(less);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
