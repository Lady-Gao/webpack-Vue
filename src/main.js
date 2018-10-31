/**
 * @author: gaoyanan
 * @version 0.0 .1
 * @created: Wed Oct 31 2018 16: 59: 49 GMT + 0800
 * @see https: //github.com/Lady-Gao
 */
import Vue from "vue";
import APP from "./APP.vue";

new Vue({
    el: "#app",
    data: {
        a: 1
    },
    render:h=>h(APP)
})