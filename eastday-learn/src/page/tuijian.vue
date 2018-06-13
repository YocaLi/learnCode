<template>
    <div id="mainSection">
        <div class="swiper-wrapper">
            <div id="swiperContainer" class="swiper-container fs-swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"  v-for="(item,index) of lunboData" :key="index">
                        <a :href="item.url">
                            <img :src="item.image_url">
                            <p>{{item.title}}
                                <span>{{index + 1}} / <i>{{lunboData.length}}</i></span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section class="sec-match">
          <ul class="clearfix">
            <li class="clearfix">
              <a href="" suffix="match">
                <h3></h3>
                <div class="team">
                  <img src="" alt="">
                  <p></p>
                </div>
                <div class="info" id="">
                  <div class="score"></div>
                  <span></span>
                </div>
                <div class="team">
                  <img src="" alt="">
                  <p></p>
                </div>
              </a>
            </li>
          </ul>
        </section>
    </div>
</template>
<script>
import Swiper from "swiper";
import jiekou from '../assets/js/jiekou.js'

const {lunbo, matchdata} = jiekou.API_URL

export default {
  name: "tuijian",
  data() {
    return {
      lunboData: []
    };
  },
  methods: {
    lunboRender() {
      this.$http(
        lunbo,
        {},
        {
          name: "callbcak"
        }
      ).then(res => {
        res.data.length = res.data.length > 5 ? 5 : res.data.length
        this.lunboData = res.data;
      });
    }
  },
  mounted() {
    
  },
  updated () {
    new Swiper("#swiperContainer", {
      loop: true /* spaceBetween: 10, */,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction:false
      }
    });
  },
  created() {
    this.lunboRender();
  }
};
</script>
<style lang="less" scoped>
@import "swiper/dist/css/swiper.min.css";
#mainSection {
  height: 100%;
  padding-top: 80px;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  box-sizing: content-box;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
  .swiper-slide {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
}
.swiper-slide {
  -webkit-overflow-scrolling: touch;
  -webkit-flex-shrink: 0;
  -ms-flex: 0 0 auto;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
}
.fs-swiper-container {
  width: 100%;
  height: 375px;
  .swiper-slide {
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    display: block;
  }
  p {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    height: 60px;
    line-height: 60px;
    font-size: 28px;
    padding: 0 90px 0 20px;
  }
  span {
    position: absolute;
    right: 20px;
    top: 0;
    font-size: 28px;
    i {
      font-size: 24px;
    }
  }
}
</style>
