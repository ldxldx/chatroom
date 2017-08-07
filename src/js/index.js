require('../html/index.html');
require('../sass/index.scss');

import Vue from 'vue';
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './router';
import Validate from './lib/validate_vue_plugin';
Vue.use(VueResouce);
Vue.use(VueRouter);
Vue.use(Validate);
const router  = new VueRouter({
    routes:routes
});
const template = `
        <div class="container">
            <header></header>
            <div class="content">
                <router-view></router-view>
            </div>
            <footer>页面仿制于<a href="https://shadowshift.com" target="_blank">@ShadowShift-影移</a></footer>
        </div>
    `;
const App = new Vue({
    el: '#APP',
    data: {

    },
    router:router,
    template: template,
    mounted(){

    },
    methods:{

    }
});
