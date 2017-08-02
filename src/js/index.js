require('../html/index.html');
require('../sass/index.scss');

import Vue from 'vue';
import VueResouce from 'vue-resource';
Vue.use(VueResouce);

const template = `
        <div>111</div>
    `
const App = new Vue({
    el: '#APP',
    data: {

    },
    template: template,
    mounted(){

    },
    methods: {

    }
});
