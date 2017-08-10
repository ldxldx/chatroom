<template>
    <nav class="nav-component">
        <div class="tit">菜单</div>
        <ul>
            <li v-for="(item,index) in list" @click="switchComponent(item)">{{item.label}}</li>
        </ul>
    </nav>
</template>
<script>
    export default {
        data(){
            return {
                list:[{
                    label:'首页',
                    tag:'',
                    icon:'',
                    component:'/welcome',
                },{
                    label:'登录',
                    tag:'',
                    icon:'',
                    component:'/login',
                },{
                    label:'注册',
                    tag:'',
                    icon:'',
                    component:'/register',
                }]
            }
        },
        methods:{
            switchComponent(item){
                this.$router.push({
                    path:item.component
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/common/variable";
    @import "../../sass/common/mixin";
    nav.nav-component{
        width: 100%;
        height: 100%;
        .tit{
            height: 56px;
            line-height: 56px;
            font-size: 20px;
            padding-left: 20px;
            border-bottom: 1px solid #dadada;
            margin-bottom: 8px;
        }
        ul{
            font-size: 16px;
            li{
                height: 48px;
                line-height: 48px;
                padding: 0 20px;
                cursor: pointer;
                &:hover{
                    background: #f5f5f5;

                }
            }
        }
    }
</style>