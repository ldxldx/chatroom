<template>
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
</template>
<script>
    let SOCKET;
    export default {
        data(){
            return {
                contentA: null,
                info: []
            }
        },
        mounted(){
            // let _this = this;
            // SOCKET = io('http://192.168.31.74:3000');
            // SOCKET.on('newMessage', (data) => {
            //     _this.info.push({
            //         data: data,
            //         source: 'other'
            //     });
            //     _this.setScroll();
            // });
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
                setTimeout(() => {
                    let _item = document.getElementsByClassName('view')[0];
                    _item.scrollTop = _item.scrollHeight
                }, 10);
            },
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/common/variable";
    @import "../../sass/common/mixin";
    .content{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #eee;
    }
    .chatRoom{
        width: 50%;
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        .view{
            height: 370px;
            background: #eee;
            margin-bottom: 5px;
            padding: 5px;
            position: relative;
            overflow: auto;
            &::-webkit-scrollbar {
                width: 5px;
                height: 100%;
                border-radius: 2px;
            }
            &::-webkit-scrollbar-thumb {
                background: #A2A2A2;
                border-radius: 2px;
            }
            .info-item{

            }
            .info{
                overflow: hidden;
                margin: 3px;
                padding: 2px;
                &.self{
                    margin-right: 5px;
                    *{
                        float: right;
                    }
                }
                &.other{
                    margin-left: 5px;
                }
            }
        }
        .enter{
            width: 100%;
            overflow: hidden;
            textarea{
                box-sizing: border-box;
                width: 100%;
                height: 130px;
                border: #fff;
                font-size: 16px;
                padding: 2px 5px;
                overflow: auto;
                &::-webkit-scrollbar {
                    width: 5px;
                    height: 100%;
                    border-radius: 2px;
                }
                &::-webkit-scrollbar-thumb {
                    background: #A2A2A2;
                    border-radius: 2px;
                }
            }
            .send{
                float: right;
                padding: 2px 10px;
                background: #eee;
                border-radius: 2px;
            }
        }
    }
</style>