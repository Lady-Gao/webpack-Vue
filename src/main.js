/**
 * @author: gaoyanan
 * @version 0.0 .1
 * @created: Wed Oct 31 2018 16: 59: 49 GMT + 0800
 * @see https: //github.com/Lady-Gao
 */
import Vue from "vue";
import APP from "./APP.vue";
//路由
import router from './router/index.js'


new Vue({
    el: "#app",
    data: {
        a: 1
    },
    router,
    render:h=>h(APP)
}).$mount('#app')