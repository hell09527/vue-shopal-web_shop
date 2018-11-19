<template>
  <div>
    <ul class="vr">




      <li>品牌分类</li>
      <li>艾惟诺</li>
      <li>欧缇丽</li>
      <li>EB</li>
      <li>小马斑斑</li>
    </ul>
    <ul class="vt">
      <li>
        <div class="img">
          <img alt="Aveeno艾惟诺燕麦洗护套装 宝宝霜舒缓止痒泡澡粉 婴儿润肤沐浴露"
               src="//img.alicdn.com/bao/uploaded/i3/2957921311/TB1nOVNd26H8KJjy0FjXXaXepXa_!!0-item_pic.jpg_180x180.jpg">
        </div>

        <div class="alt">
          <div class="title">
            美国进口Aveeno baby艾惟诺燕麦婴儿润肤乳
             宝宝儿童补水保湿面霜
          </div>


          <div class="pri">$233</div>

        </div>

      </li>
      <li>

        <img alt="美国进口Aveeno baby艾惟诺燕麦婴儿润肤乳 宝宝儿童补水保湿面霜"
             src="//img.alicdn.com/bao/uploaded/i4/2957921311/TB1h5H8cP3z9KJjy0FmXXXiwXXa_!!0-item_pic.jpg_180x180.jpg">
        <div class="alt">
          <div class="title">
            美国进口Aveeno baby艾惟诺燕麦婴儿润肤乳
             宝宝儿童补水保湿面霜
          </div>


          <div class="pri">$233</div>

        </div>
      </li>
      <li><img alt="美国进口Aveeno baby艾惟诺燕麦婴儿舒缓柔嫩润肤乳 儿童保湿霜"
               src="//img.alicdn.com/bao/uploaded/i3/2957921311/TB1TYTQcAfb_uJjSsrbXXb6bVXa_!!0-item_pic.jpg_180x180.jpg">
        <div class="alt">
          <div class="title">
            美国进口Aveeno baby艾惟诺燕麦婴儿润肤乳
             宝宝儿童补水保湿面霜
          </div>


          <div class="pri">$233</div>

        </div>
      <li></li>
    </ul>

  </div>
</template>

<script>
  import {header} from 'mint-ui';
  import Bscroll from 'better-scroll'

  export default {
    name: 'xxx',
    data(){
      return {}
    },
    mounted(){
    },
    methods: {},
    components: {

    }

  }
</script>

<style lang='scss' rel="stylesheet/scss" scoped>

  @import "../../assets/css/transform";
  .vr{width: 3rem;
    height: 25rem;

    border-right: 1px solid #000;
    li{
      width: 3rem;
      height: 1.5rem;
      border-bottom: 1px solid #000;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.5rem;
      text-align: center;
    }
    li:hover{
      color: cyan;
    }
  }


  .vt{
    /*overflow: hidden;*/
    margin-left: 26%;
    position: absolute;
    top: 0;
    /*right: 0;*/
    width: 100%;
    height: 25rem;
    background-color:#fff;
    li{
      width: 74%;
      height: 4.2rem;
      border: 1px solid #000;

      img{
        display:block;
        width: 60%;
        height:  4.2rem;
      }

      .alt{

        margin-top:-4.2rem;
        margin-left: 60%;
        width: 33%;
        height:  4.2rem;


        .title{
          margin: .24rem .24rem;

          height: 3rem;
          width: 100%;
          font-size: .35rem;

        }
        .pri{
          margin-left:1.6rem;
          color: #f00;
          font-size: .48rem;
          font-weight: 700;

        }
      }

    }

  }

</style>

