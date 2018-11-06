/* INDEX.JS TEMPLATE */
exports.indexExport = function(name){
    return `import ${name} from './${name}.vue';
export default ${name}`
}
/* INDEX.VUE TEMPLATE */
exports.indexVue= function(name){
    return `<template>
    <div id= ${name}>
      
    </div>
</template>

<script>
    export default {
        // name:'${name}',
        data(){
           return {

           }
        }
    }
</script>

<style scoped>

</style>`
}

/* ROUTER.JS TEMPALT */
exports.routePath = function (files, basenameArr) {
    //遍历文件夹 生成路径
    let arr="",component=""
basenameArr.forEach((name) => {
    let str='import '+name+' from "../view/Interface/'+name+'/index.js";'
    arr+=str
    component += '{path:"/Interface/'+name+'",name:"'+name+'",component:'+name+'},'
})
    return `import Vue from "vue";
import VueRouter from 'vue-router'
import home from '../view/home/index.js'
//文件
${arr}
Vue.use(VueRouter)
export default new VueRouter({
     routes: [

                 ${component}
                //  children: [{
                //          path: 'profile',
                //          component: UserProfile
                //      },
                //      {
                //          path: 'posts',
                //          component: UserPosts
                //      }
                //  ]
              {
                  path: '/Interface',
                  component: home
               },
             {
                 path: '*',
                 redirect: "/Interface"
             }
        ]
})`
}