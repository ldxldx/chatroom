<template>
    <div class="login-component">
        <div class="login-header">
            账号登录
        </div>
        <div class="login-content">
            <div class="tit">登录到用户中心</div>
            <div class="con">
                <p class="avatar">
                    <span>
                        <img src="http://i2.bvimg.com/1949/26149cb6ab38600d.jpg" alt="">
                    </span>
                </p>
                <div class="form-group"
                     v-for="(item,index) in formConfig"
                     :class="[{'focus':currentFocus===index},form[item.id]===null||form[item.id]===''?'':'have']"
                     @click="getFocus(index)">
                    <label :for="item.id">{{item.label}}</label>
                    <input v-if="item.id === 'pwd'"
                           type="password"
                           :id="item.id"
                           v-model="form[item.id]"
                           @blur="currentFocus=null">
                    <input v-else
                           type="text"
                           v-model="form[item.id]"
                           :id="item.id"
                           @blur="currentFocus=null">
                </div>
                <div class="form-group">
                    <button-cov @click="login">
                        <slot>登录</slot>
                    </button-cov>
                </div>
                <div class="form-group">
                    <checkbox-cov @change="remember = !remember">
                        <slot>记住我</slot>
                    </checkbox-cov>
                </div>
            </div>
        </div>
        <div class="login-footer">
            <a href="javascript:;">忘记密码</a>
            <a href="javascript:;" @click="$router.push({path:'/register'})">注册个账号</a>
        </div>
    </div>
</template>
<script>
    import botton from './botton.vue';
    import checkbox from './checkbox.vue';
    import {httpUrl} from '../lib/httpUrl';
    export default {
        components: {
            'button-cov': botton,
            'checkbox-cov': checkbox,
        },
        data(){
            return {
                formConfig: [{
                    label: '用户名',
                    id: 'user',
                }, {
                    label: '密码',
                    id: 'pwd',
                }, {
                    label: '验证码(没有就别填)',
                    id: 'Vcode',
                }],
                currentFocus: null,
                form: {
                    user: null,
                    pwd: null,
                    Vcode: null,
                },
                remember:false,
            }
        },
        mounted(){

        },
        methods: {
            login(){
                this.$http.post(httpUrl.signIn,this.form).then(res =>{
                    res = res.body;
                    if(res.code === 0){

                        //跳到主页
                        //跳转路由 到前一模块
                        this.$router.go(-1);
                    } else {
                        alert(res.msg);
                    }
                }).catch(err=>{
                    alert('网络错误 ' + err.status);
                })
            },
            getFocus(index){
                if(this.currentFocus === index) return;
                this.currentFocus = index;
                document.getElementById(this.formConfig[index].id).focus();
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/common/variable";
    @import "../../sass/common/mixin";
    .login-component {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        .login-header {
            width: $formWidth;
            height: 48px;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid $mainRoseColor;
            margin-bottom: 24px;
        }
        .login-content {
            width: 415px;
            border-radius: 2px;
            box-shadow: 0 -1px 0 #e5e5e5, 0 0 2px rgba(0, 0, 0, .12), 0 2px 4px rgba(0, 0, 0, .24);
            .tit {
                padding: 12px;
                font-size: 20px;
                line-height: 28px;
                height: 56px;
                border-bottom: 1px solid rgba(0, 0, 0, .12);
            }
            .con {
                margin: 24px 16px;
                .avatar {
                    text-align: center;
                    margin: 12px 0;
                    span {
                        display: inline-block;
                        width: 80px;
                        height: 80px;
                        line-height: 80px;
                    }
                    img {
                        border-radius: 50%;
                        height: 100%;
                        vertical-align: top;
                        width: 100%;
                    }
                }
                .form-group {
                    margin: 36px 0;
                    position: relative;
                    label {
                        color: rgba(0, 0, 0, .38);
                        cursor: text;
                        font-size: 14px;
                        line-height: 1;
                        position: absolute;
                        top: 11px;
                        left: 0;
                        transition: color, transform .3s cubic-bezier(.4, 0, .2, 1);
                    }
                    input {
                        background-color: transparent;
                        background-image: none;
                        border: 0;
                        border-bottom: 1px solid rgba(0, 0, 0, .12);
                        border-radius: 0;
                        display: block;
                        font-size: 14px;
                        height: 36px;
                        line-height: 20px;
                        padding: 8px 0 7px;
                        width: 100%;
                        outline: none;
                    }
                    &.have, &.focus {
                        label {
                            color: $mainRoseColor;
                            transform: scale(.85714, .85714) translateY(-27px);
                        }
                    }
                    &.focus {
                        input {
                            border-bottom: 2px solid $mainRoseColor;
                        }
                    }
                    .toLogin {
                        color: $mainBlueColor;
                    }
                    .prompt {
                        padding: 12px 0;
                        font-size: 14px;
                        line-height: 20px;
                        font-weight: 400;
                    }
                }
            }
        }
        .login-footer {
            width: 434px;
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            a {
                color: #3f51b5;
                font-size: 12px;
            }
        }
    }
</style>