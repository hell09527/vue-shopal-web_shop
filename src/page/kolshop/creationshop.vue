<template>

    <div>
        <span> 店铺名</span><input type="text" placeholder="请输入店铺名" v-model="xm">
        <br>
        <span> 店铺名logo</span> <input type="text" placeholder="请输入手机号" v-model="hm">



        <br>
        <router-link to="/myshop">
            <input type="button" value="提交" @click="creation()" class="sed">
        </router-link>


    </div>



</template>

<script>
    import  {creation}  from '../../axios/kolshop/index';



    export default {
        name: 'xxx',
        data(){
            return {
                xm:"",
                hm:"",


            }
        },
        mounted(){
        },
        methods: {
            creation(){

                var  params={

                    "name": this.xm,

                    'logo' : this.hm,


                };
                creation(params).then(function (res) {

                    console.log(res);


                })
            }

        },
        components: {}

    }
</script>

<style lang='scss' rel="stylesheet/scss" scoped>
    @import "../../assets/css/transform";
    span{
        margin-top: .56rem;
        width: 100%;
        height: 1rem;
        font-size: .46rem;
        line-height: 1rem;
        font-weight: 700;
    }
    input{
        margin: 0 auto;
        text-align: center;
        width: 100%;
        height: 1rem;
        /*margin-top:1rem;*/

        font-weight: 700;


    }

    .sed{
        margin-top: 1rem;
    }


</style>
