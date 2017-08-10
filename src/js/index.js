require('../html/index.html');
require('../sass/index.scss');

import Vue from 'vue';
import VueResouce from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './router';
import Validate from './lib/validate_vue_plugin';
import nav from './components/nav.vue';
Vue.use(VueResouce);
Vue.use(VueRouter);
Vue.use(Validate);
const router  = new VueRouter({
    routes:routes
});
const template = `
        <div class="container">
            <header :class="{'view':headerClassView}"></header>
            <nav>
                <nav-component></nav-component>
            </nav>
            <div class="content" @scroll="scroll">
                <router-view></router-view>
            </div>
            <footer>页面仿制于<a href="https://shadowshift.com" target="_blank">@ShadowShift-影移</a></footer>
        </div>
    `;
const App = new Vue({
    el: '#APP',
    data: {
        headerClassView:false
    },
    router:router,
    template: template,
    components:{
        'nav-component' : nav
    },
    mounted(){
    },
    methods:{
        scroll(e){
            this.headerClassView = e.target.scrollTop < 56?false:true;
        }
    }
});
