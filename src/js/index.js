require('../html/index.html');
require('../sass/index.scss');

import Vue from 'vue';
let SOCKET;
const template = `
        <div class="content">
            <div class="chatRoom A">
                <div class="view">
                    <div class="info-item">
                        <div v-for="item in info" class="info" :class="item.source">
                            <span>{{item.source}}</span>
                            <span>:</span>
                            <span>{{item.data}}</span>
                        </div>
                    </div>
                </div>
                <div class="enter">
                    <textarea v-model="contentA"  @keyup.enter="send"></textarea>
                    <a class="send" @click="send" >发送</a>
                </div>
            </div>
        </div>
    `
const App = new Vue({
    el: '#APP',
    data: {
        contentA: null,
        info: []
    },
    template: template,
    mounted(){
        let _this = this;
        SOCKET = io('http://192.168.31.74:3000');
        SOCKET.on('newMessage', (data) => {
            _this.info.push({
                data: data,
                source: 'other'
            });
            _this.setScroll();
        });
    },
    methods: {
        send(){
            let data = this.contentA;
            SOCKET.emit('sendMessage', data);
            this.info.push({
                data: data,
                source: 'self'
            });
            this.contentA = null;
            this.setScroll();
        },
        setScroll(){
            setTimeout(()=>{
                let _item = document.getElementsByClassName('view')[0];
                _item.scrollTop = _item.scrollHeight
            },10);
        }
    },
});
