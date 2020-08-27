import Vue from 'vue'
import App from './App.vue'
import store from './store'
import "./utils/filters"

import resize from 'vue-element-resize-detector'
import VueDraggableResizable from 'vue-draggable-resizable'
import VueResizable from 'vue-resizable'
import vSelect from 'vue-select';

// optionally import default styles
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

Vue.component('vue-draggable-resizable', VueDraggableResizable)
Vue.component("v-select", vSelect);


 Vue.use(resize)

Vue.use(VueResizable)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
