<template>
    <div class="register-component">
        <div class="register-content">
            <div class="tit">和我签订契约，成为魔法骚男吧。</div>
            <div class="con">
                <p class="avatar">
                    <span>
                        <img src="https://shadowshift.com/theme/material/images/users/avatar-001.jpg" alt="">
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
                    <button-ripple @click="register">
                        <slot>注册</slot>
                    </button-ripple>
                </div>
                <div class="form-group">
                    <a class="toLogin" href="javascript:;" @click="$router.push({path: '/login'})">已经注册？请登录</a>
                </div>
                <div class="form-group">
                    <p class="prompt">注册即代表同意成为骚男，以及保证所录入信息的真实性，如有不实信息会导致账号被删除。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import button from './botton.vue';
    export default {
        components: {
            'button-ripple': button
        },
        data(){
            return {
                formConfig: [{
                    label: '用户名',
                    id: 'user',
                }, {
                    label: '昵称',
                    id: 'nikeName',
                }, {
                    label: '密码',
                    id: 'pwd',
                },],
                currentFocus: null,
                form: {
                    user: null,
                    nikeName: null,
                    pwd: null
                },
            }
        },
        methods: {
            /**
             * 注册
             */
            register(){
                this.$Validate({
                    obj:this.form,
                    rules:{
                        user:{
                            required:true
                        },
                        nikeName: {
                            required:true
                        },
                        pwd: {
                            required:true
                        }
                    },
                    message:{
                        user:{
                            required:'请输入用户名'
                        },
                        nikeName: {
                            required:'请输入昵称'
                        },
                        pwd: {
                            required:'请输入密码'
                        }
                    }
                }).then(()=>{
                    this.$http.post('http://192.168.31.74:3000/api/register', this.form).then(res => {
                        res = res.body;
                        alert(res.msg)
                    }).catch(err => {
                        alert('网络错误 ' + err.status)
                    })
                });

            },
            getFocus(index){
                if (this.currentFocus === index) return;
                this.currentFocus = index;
                document.getElementById(this.formConfig[index].id).focus();
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/common/variable";
    @import "../../sass/common/mixin";

    .register-component {
        width: 100%;
        display: flex;
        justify-content: center;
        .register-content {
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
                            color: #ff4081;
                            transform: scale(.85714, .85714) translateY(-27px);
                        }
                    }
                    &.focus {
                        input {
                            border-bottom: 2px solid #ff4081;
                        }
                    }
                    .toLogin {
                        color: #3f51b5;
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
    }
</style>