require('../html/index.html');
require('../sass/index.scss');

import Vue from 'vue';
import VueResouce from 'vue-resource';
Vue.use(VueResouce);
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';
const template = `
        <div class="container">
            <header></header>
            <div class="content"></div>
            <footer></footer>
        </div>
    `;
const App = new Vue({
    el: '#APP',
    data: {

    },
    routes:router,
    template: template,
    mounted(){

    },
    methods: {

    }
});
