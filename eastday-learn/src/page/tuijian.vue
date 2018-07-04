<template>
    <div id="mainSection">
        <div class="swiper-wrapper">
            <swiper :options="swiperContainer" ref="mySwiper">
              <swiper-slide v-for="(item,index) of lunboData" :key="index">
                <a :href="item.url">
                  <img :src="item.image_url">
                  <p>{{item.title}}
                    <span>{{index + 1}} / <i>{{lunboData.length}}</i></span>
                  </p>
                </a>
              </swiper-slide>
            </swiper>
        </div>
        <section class="sec-match">
          <ul class="clearfix">
            <li class="clearfix" v-for="(item, index) of matchdata"  :class="state(item)" :key="index" >
              <a :href="item.liveurl" v-html="matchRender(item)">
                matchRender(item)
              </a>
            </li>
          </ul>
        </section>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import jiekou from "../assets/js/jiekou.js";

const { lunbo, matchdata } = jiekou.API_URL;

export default {
  name: "tuijian",
  components: {  
      swiper,  
      swiperSlide  
  },
  data() {
    return {
      lunboData: [],
      swiperContainer:{
         autoplay: true,
         delay: 3000
      },
      matchdata:[]
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
        res.data.length = res.data.length > 5 ? 5 : res.data.length;
        this.lunboData = res.data;
      });
    },
    matchdataRender() {
      const todayL = new Date(new Date().toLocaleDateString()).getTime()
      const tomorrowL = new Date(new Date().toLocaleDateString()).getTime() + 24*60*60*1000
      this.$http(matchdata,{
        startts:todayL,
        endts:tomorrowL,
        isimp:1,
        qid:null,
        domain:'dfsports_h5'

      },{
        name:'callback'
      }).then((res) => {
        console.log(res.data)
        this.matchdata = res.data
      })
    },
    state(data) {
      let state = ''
      if(data.sport_type / 1 === 1){
        state += 'other '
      }
      switch (data.ismathced / 1) {
        case -1:
          state += 'no-start';
          break;
        case 0:
          state += 'living';
          break;
        default:
          state += 'end';
          break;
      }
      return state
    },
    matchRender(data){
      let html = ''
      let orderStr = ''
      let className = ''
      if (data.ismatched === '-1') {
          orderStr = '<span class="empty">未开赛</span>'
          className = 'no-start'
      } else if (data.ismatched === '0') {
          orderStr = '<span class="living">LIVE</span>'
          className = 'living'
      } else {
          orderStr = '<span>集锦</span>'
          className = 'end'
      }
      if(data.sport_type / 1 === 1){
        html = `<h6>${data.title02}</h6>
          <div class="row ${className}">
              <div class="t">${data.starttime.split(' ')[1]}</div>
              ${orderStr}
          </div>`
      }else{
        html = `<h3>${data.title02}</h3>
                <div class="team">
                    <img src="${data.home_logoname}" alt=""/>
                    <p>${data.home_team}</p>
                </div>
                <div class="info" id="${data.matchid}">
                    <div class="score"></div>
                </div>
                <div class="team">
                    <img src="${data.visit_logoname}" alt=""/>
                    <p>${data.visit_team}</p>
                </div>`
      }
      console.log()
      return html
    }
  },
  mounted() {
  },
  updated() {
  },
  created() {
    this.lunboRender();
    this.matchdataRender()
  }
};
</script>
<style lang="less" scoped>
@import "swiper/dist/css/swiper.min.css";
@import '../assets/css/tuijian.less';
</style>
