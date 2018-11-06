import Vue from "vue";
import VueRouter from 'vue-router'
import home from '../view/home/index.js'
//文件
import vit from "../view/Interface/vit/index.js";
Vue.use(VueRouter)
export default new VueRouter({
     routes: [

                 {path:"/Interface/vit",name:"vit",component:vit},
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
})