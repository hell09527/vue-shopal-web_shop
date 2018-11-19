<template>
  <div id="address">

    <mt-header title="我的地址管理" class="header">
      <router-link to="/userInfo" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <!--address edit-->
    <div class="address-item" v-for="(item, index) in picList" :key="index">

      <div class="item-wrapper" >
        <p class="name"><span>{{item.name}}</span>  <span>{{item.telephone}}</span></p>
        <p class="address">{{item.addressProvince+item.addressProvince}}</p>
        <div class="edit clearfix">

          <router-link :to="'/tallyOrder/'+item.id">

                  <div  @click="dult(item.id)">

        <input  type="radio"  name="fz" :checked="value" @change="check" class="radio"/>默认地址

                  </div>
                      </router-link>

            <div @click="become(item.id)">
              <div @click="popupV = true">
                <span   @click="edit(item.id)">修改</span>
              </div>

        </div>

          <a @click.prevent="del(item.id)">删除</a>
        </div>
      </div>
    </div>

    <div class="add">
      <mt-button type="primary" @click="popupVisible = true"> + 新建地址</mt-button>
    </div>


    <!-- edit  and cearet-->
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade">
      <div id="cearetAddress">
        <mt-field label="姓名" placeholder="请输入姓名" v-model="name" class="fit"></mt-field>
        <mt-field label="手机" @change="checkPhone(phone)" placeholder="请输入手机" v-model="phone" class="fit"></mt-field>
        <select v-model="bigg.name"  @change="show($event)" id="city">

          <option  v-for="item in bigg" :value="item.region_id">{{item.name}}</option>

        </select>
        <br>
        <!--v-model="province"-->
        <select   @change="getcont($event)" >
          <option  v-for="(item, index) in citysk" :key="index" :value="item.region_id">{{item.name}}</option>
        </select>
        <br>
        <select   @change="late($event)">
          <option  v-for="(item, index) in smoot" :key="index" :value="item.region_id">{{item.name}}</option>
        </select>

        <mt-field label="具体地址" placeholder="请输入具体" v-model="row" class="fit"></mt-field>
        <router-link to="/Address"> </router-link>
          <mt-button type="default" @click="over()">保存并使用</mt-button>

      </div>
    </mt-popup>


    <!--修改地址-->
    <mt-popup
            v-model="popupV"
            popup-transition="popup-fade">
      <div id="cearetAddr">
        <div class="loc">
          <h1>地址修改</h1>




          <p>姓名:</p>
          <input  type="text" v-model='getsitew.name'  placeholder="请输入姓名" > <br>
          <p>手机号码:</p>
          <input type="text"  v-model="getsitew.telephone" ><br>
          <p>省/自治州:</p>
          <input  type="text" v-model="getsitew.addressProvince"><br>
          <p>市区/旗:</p>
          <input  type="text" v-model="getsitew.addressCity" ><br>
          <p>区/县：</p>
          <input  type="text" v-model="getsitew.addressCounty"><br>
          <p>详细地址</p>
          <!--type="textarea"-->
          <input type="text"  v-model="getsitew.addressDetail">
          <router-link to="/Address">
          <mt-button type="default" @click="save(getsitew.id)">保存并使用</mt-button>
          </router-link>
        </div>
      </div>
    </mt-popup>







  </div>
</template>
<style lang='scss' rel="stylesheet/scss" scoped>
  @import "../../assets/css/transform";
  #address{
    width: 100%;
    height: 100%;
    #cearetAddress{
      width: px2rem(750px);
      padding: px2rem(100px) 0;
      text-align: center;
      height: auto;
      //height: px2rem(1000px);
      background: #f0f0f0;
      overflow: hidden;
      .fit{
        height: px2rem(80px);
        .captcha{
          @include font-dpr(12px);
          height: px2rem(41px);
          padding: 0 px2rem(18px)
        }
        .mint-cell-title{
          @include font-dpr(12px);
          width: px2rem(120px);
        }
        .mint-cell-value{
          height: 80%;
          input{
            height: 80%;
            padding: px2rem(5px) 0;
            @include font-dpr(12px);



          }
          .mint-field-clear{
            .mintui{
              @include font-dpr(14px);
            }
          }
        }
      }
      .mint-button{
        width: 100%;
        margin-top: px2rem(20px);
        height: px2rem(80px);
        padding: 0 px2rem(12px);
        @include font-dpr(16px)
      }
    }

    .header{
      @include font-dpr(14px);
      height: px2rem(74px);
      .mint-button{
        .mintui{
          @include font-dpr(14px);
          padding: 0 px2rem(8px);
        }
        height: auto;
      }

    }
    .user-cell{
      min-height: px2rem(110px);
      .mint-cell-allow-right::after{
        width: px2rem(12px);
        height: px2rem(12px);
      }
      .mint-cell-wrapper{
        .mint-cell-title{
          @include font-dpr(16px);
          .mint-cell-label{
            @include font-dpr(12px);
            margin-bottom: 10px;
            margin-top: 10px;
            overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
            max-width: 60%;
          }
        }

      }
    }
    .address-item{
      width: 100%;
      min-height: px2rem(200px);
      background: #FFF;
      display: block;
      position: relative;
      border-bottom: 1px solid #cccccc;
      .item-wrapper{
        box-sizing: border-box;
        line-height: 1;
        padding: 0 px2rem(20px);
        overflow: hidden;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
        margin: auto;
        width: 100%;
        height: 50%;
        p{
          @include font-dpr(12px);
          vertical-align: middle;
          color:#7e8c8d;
        }
        .address{
          margin:  px2rem(10px) 0;
          overflow: hidden; text-overflow:ellipsis; white-space: nowrap;
          max-width: 100%;
        }
        .edit{
          width: 100%;
          margin-top: px2rem(5px);
          display: flex;
          justify-content:space-between;
          .label{
            @include font-dpr(12px);
            .radio{
              vertical-align: middle;
              margin-right: px2rem(5px);
              width: px2rem(25px);
              height: px2rem(25px);
            }
          }
          a{
            vertical-align:middle;
            @include font-dpr(12px);
            color: #26a2ff;
            //padding: px2rem(5px);
            padding: 0 px2rem(10px);
            display: inline-block;

          }
        }
      }

    }
    .add{
      margin-top: px2rem(20px);

      .mint-button{
        width: 100%;
        height: px2rem(80px);
        padding: 0 px2rem(12px);
        @include font-dpr(16px)
      }
    }
  }
  #address{
    width: 100%;
    height: 100%;
    #cearetAddr{
      width: px2rem(750px);
      padding: px2rem(100px) 0;
      text-align: center;
      height: auto;
      font-size: 24px;
      //height: px2rem(1000px);
      background: #f0f0f0;
      overflow: hidden;

        .add{
          margin-top: px2rem(20px);

          .mint-button{
            width: 100%;
            height: px2rem(80px);
            padding: 0 px2rem(12px);
            @include font-dpr(16px)
          }
        }
      .loc{
        p{
          height: .68rem;
          line-height: .68rem;
          font-size: .4rem;
        }

        input{
          width: 100%;
          height: 1rem;
          padding-left: 40%;
        }
        .mint-button{
          width: 100%;
          height: px2rem(80px);
          padding: 0 px2rem(12px);
          @include font-dpr(16px);
          margin-top: .33rem;
        }
      }

    }
  }






  select {
    background: transparent;
    border: 1px solid #000;
    padding-left: 40%;
    width: 100%;
    height: 1rem;
    font-size: 24px;
  
  }

</style>
<script type='text/ecmascript-6'>
  import {header,Cell,Switch,Popup,button,} from 'mint-ui'
  import $ from "jquery"
  import {mylocal,address,delRess,dong,getcity,getsite ,getlocal,savelocl,moRess} from '../../axios/order/index'


  var TOKEN = sessionStorage.getItem('TOKEN');



  export default{
      data(){
          return {

              sheng:"请输入你所在省市自治区",
              userCellTit2: '1',
              userCellLabel2: "2",
              value: false,
              popupVisible: false,
              popupV:false,
              name: '',
              phone: '',
              province: '',
              town: '',
              county: '',
              country:"",
              city:"",
              count:"",
              row: '',
              picList: [],
              bigg: [],
              citysk: [],
              smoot: [],
              id: "",
              newscity:"",
              selected:"",
              newbencome:"",
              getsitew:[],
              citybo:"",



              s:"",
              c:"",
              x:"",
              z:"",
              bx:"",
              ph:"",

          }
      },
      mounted(){
          let that = this;

          this.pluil=that.$route.params.pr
      },
      created: function () {
          this.invoking()
          dong({region_grade: 1}).then((res) => {

              if (res.code == 200) {
                  this.bigg = res.data.list
              }


          });








      },

      methods: {

          invoking(){
              mylocal({}).then((res) => {

                  if (res.code == 200) {


                      this.picList = res.data.list

                  }
              });
          },


          check: function () {
              console.log(this.value)
          },
          over(){


              var params = {

                  "name": this.name,
                  "mobile": this.phone,
                  "province": this.province,
                  "city": this.town,
                  "country": this.county,
                  "address": this.row,


              };

              address(params).then((res) => {
                  this.invoking()
              });

          },
          del(id){

              var params = {


                  "username": '18821871221',

                  "addressId": id,

              };
              delRess(params).then((res) => {




              });

              this.$store.commit("del", id);

              this.picList.splice(this.picList.findIndex(v=>{
                  return v.id == id;
              }), 1);
          },
          dult(id){

              var list = {
                  addressId: id,
                  TOKEN
              }

              moRess(list).then((res) => {


              });
          },
          become(id){
              var list = {
                  addressId: id,
                  TOKEN
              }
              getlocal(list).then((res) => {

                  if (res.code == 200) {

                  }


              });

          },
          save(id){


              var list = {
                  addressId:id,
                  name:this.getsitew.name,
                  mobile:this.getsitew.telephone,
                      province:this.getsitew.addressProvince,
                      city: this.getsitew.addressCity,
                      country:this.getsitew.addressCounty,
                      address:this.getsitew.addressDetail,

              }
              savelocl(list).then((res) => {

                  if (res.code == 200) {

                      window.location.reload()

                  }


              });
              this.invoking()

          },
          show:function(e){

              this.bigg.forEach((v,i)=>{
                  if(this.bigg[i].region_id==e.target.value){
                      console.log(this.bigg[i].name);
                      this.province=this.bigg[i].name
                  }

              })

              getcity({region_id:e.target.value}).then((res) => {

                  if (res.code == 200) {

                      this.citysk = res.data.list
                      this.town=res.data.list[0].name


                      getcity({region_id:res.data.list[0].region_id}).then((res) => {

                          if (res.code == 200) {
                              this.county=res.data.list[0].name
                              this.smoot = res.data.list

                          }


                      });

                  }


              });

              console.log(this.citybo);




          },
          getcont:function(e){
              this.citysk.forEach((v,i)=>{

                  if(this.citysk[i].region_id==e.target.value){
                      console.log(this.citysk[i].name);
                      this.town=this.citysk[i].name
                  }

              })


          getcity({region_id:e.target.value}).then((res) => {

              if (res.code == 200) {
                  this.smoot = res.data.list



              }


          });




  },
          late(e){
              this.smoot.forEach((v,i)=>{

                  if(this.smoot[i].region_id==e.target.value){
                      console.log(this.smoot[i].name);
                      this.county=this.smoot[i].name
                  }

              })
          },
          edit(id){

              var  params={
                  addressId:id
              }
              getsite (params).then((res) => {
                  if (res.code == 200) {


                      this.getsitew = res.data.list[0]
                      console.log(this.getsitew);

                  }
              });
              this.invoking()

          },
         checkPhone(value){
             console.log(value);
             if(!(/^1(3|4|5|7|8)\d{9}$/.test(value))){
          alert("手机号码有误，请重填");
          return false;
      }
  }



      }


  }




</script>

