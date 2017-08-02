<template>

</template>
<script>
    export default {
        data(){
            return {
                msg: 'hello'
            }
        },
        methods: {
            /**
             * 注册
             */
            register(){
                this.$http.post('http://192.168.31.74:3000/api/register',{
                    user:'ldx2',
                    pwd:'284655',
                    nikename:'ldx'
                }).then(res =>{
                    res = res.body;
                    console.log(res.msg)
                }).catch(err=>{
                    this.$message.error('网络错误 ' + err.status);
                })
            }
        },
    }
</script>
<style lang="scss" scoped>
    @import "../../sass/common/variable";
    @import "../../sass/common/mixin";

</style>