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
            <li class="clearfix" v-for="(item, index) of matchArr"  :class="state(item,false)" :key="index" >
              <a :href="item.liveurl" v-if="item.sport_type / 1 == 1">
                <h6>{{item.title02}}</h6>
                <div class="row" :class="state(item,true)">
                    <div class="t">{{item.starttime.split(' ')[1]}}</div>
                </div>
              </a>
              <a :href="item.liveurl" v-else>
                <h3>{{item.title02}}</h3>
                <div class="team">
                    <img :src="item.home_logoname" alt=""/>
                    <p>{{item.home_team}}</p>
                </div>
                <div class="info" :id="item.matchid">
                    <div class="score">{{item.ismatched === '-1' ? formatTimeToMatch(item.currentServerTime, item.starttime) : item.home_score + '-' + item.visit_score}}</div>
                    <span v-if="item.ismatched == '-1'" class="empty">为开赛</span>
                    <span v-else-if="item.ismatched == '0'" class="living">LIVE</span>
                    <span v-else >集锦</span>
                </div>
                <div class="team">
                    <img :src="item.visit_logoname" alt=""/>
                    <p>{{item.visit_team}}</p>
                </div>
              </a>
            </li>
          </ul>
        </section>
        <a class="match-more" href="javascript:;" suffix="hotmatch">
            <div class="l">07月06日</div>
            <div class="m">查看今天全部热门比赛</div>
            <div class="r"></div>
        </a>
        <div class="separate-line"></div>
        <section class="sec-news-list">
          <ul>
            <li class="clearfix" v-for="(item, index) of newsArr" :key="index">
              <a :href="item.url" >
                <div class="title" v-if="item.miniimg.length > 2">{{item.topic}}</div>
                <div class="img" v-if="item.miniimg.length < 3">
                  <img :src="item.miniimg[0].src" class="lazy" >
                  <span class="play-btn" v-if="item.isvideo === '1'"></span>
                </div>
                <div class="imgs" v-else>
                  <img :src="item.miniimg[0].src" class="lazy" >
                  <img :src="item.miniimg[1].src" class="lazy" >
                  <img :src="item.miniimg[2].src" class="lazy" >
                </div>
                <div class="info" >
                  <div class="title" v-if="item.miniimg.length < 3">{{item.topic}}</div>
                  <div class="source">
                    <div v-if="item.isvideo === '1'" class="tag-qt">视频</div>
                    <div v-else-if="item.iszhiding === '1'" class="tag-zd">{{item.tags}}</div>
                    <div v-else-if="item.ishot === '1'" class="tag-zd">热门</div>
                    <div v-else-if="item.iscommend === '1'" class="tag-qt">推荐</div>
                  <div class="l">{{item.source}}</div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import jiekou from "../assets/js/jiekou.js";
import _util_ from "../assets/js/common.js";
const { lunbo, matchdata, news } = jiekou.API_URL;

export default {
  name: "tuijian",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      lunboData: [],
      swiperContainer: {
        autoplay: true,
        delay: 3000
      },
      matchArr: [],
      newsArr: [],
      newsData :{}
    };
  },
  methods: {
    ..._util_,
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
      const todayL = new Date(new Date().toLocaleDateString()).getTime();
      const tomorrowL =
        new Date(new Date().toLocaleDateString()).getTime() +
        24 * 60 * 60 * 1000;
      this.$http(
        matchdata,
        {
          startts: todayL,
          endts: tomorrowL,
          isimp: 1,
          qid: null,
          domain: "dfsports_h5"
        },
        {
          name: "callback" + new Date() / 1
        }
      ).then(res => {
        this.matchArr = res.data;
      });
    },
    news() {
      this.$http(
        news,
        this.newsData,
        {
          name: "callback" + new Date() / 1
        }
      ).then(res => {
        this.newsArr = res.data;
      });
    },
    state(data, flag) {
      let state = "";
      if (data.sport_type / 1 === 1 && !flag) {
        state += "other ";
      }
      switch (data.ismatched / 1) {
        case -1:
          state += "no-start";
          break;
        case 0:
          state += "living";
          break;
        default:
          state += "end";
          break;
      }
      return state;
    }
  },
  mounted() {
    this.matchdataRender();
    this.news();
    console.log(111)
    let win = document.documentElement;
    window.addEventListener('scroll',() => {
      
    })
  },
  updated() {
  },
  created() {
    this.lunboRender();
    this.newsData = {
      type: 'tuijian',
      typecode: '901215',
      startkey: "",
      newkey: "",
      pgnum: 1,
      os: this.getOsType(),
      recgid: 15308456183500092,
      qid: null,
      domain: 'dfsports_h5',
      readhistory: null
    }
  }
};
</script>
<style lang="less" scoped>
@import "swiper/dist/css/swiper.min.css";
@import "../assets/css/tuijian.less";
</style>
