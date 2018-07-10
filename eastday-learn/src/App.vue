<template>
  <div id="app">
    <div class="lincoapp-tab3" id="headNav">
      <div class="tab-scroll-wrap">
          <div class="nav-new">
              <ul>
                  <li v-for="(item, index) in nav" :key="index" :class="{'active': item.active}"  @click="changeNav(index)" >{{item.name}}</li>
              </ul>
              <span class="line"></span>
          </div>
      </div>
      <div class="pull-down-load-tips" style="">
          <i class="iloading"></i><span class="txt">下拉刷新</span>
      </div>
    </div>
    <div id="mainSection" v-if="istoUrl" ref="mainSection">
        <div class="swiper-wrapper" v-if="name == 'tuijian'">
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
        <section class="sec-match" v-if="name == 'tuijian'">
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
        <a class="match-more" href="javascript:;" v-if="name == 'tuijian'" suffix="hotmatch">
            <div class="l">07月06日</div>
            <div class="m">查看今天全部热门比赛</div>
            <div class="r"></div>
        </a>
        <div class="separate-line" v-if="name == 'tuijian'"></div>
        <section class="sec-news-list">
          <ul ref="newsUl">
            <li class="clearfix" v-for="(item, index) of newsArr" :key="index" :class="{'video-list': isVideo}">
              <a :href="item.url" >
                <div class="title" v-if="item.miniimg.length > 2">{{item.topic}}</div>
                <div class="img" v-if="item.miniimg.length < 3">
                  <img :src=" item.miniimg[0].src" class="lazy" >
                  <span class="play-btn" v-if="item.isvideo === '1' && !isVideo"></span>
                  <div class="title" v-if="isVideo">{{item.topic}}</div>
                  <div class="icon" v-if="isVideo"></div>
                  <div class="duration" v-if="isVideo">04:28</div>
                </div>
                <div class="imgs" v-else>
                  <img :src="item.miniimg[0].src" class="lazy" >
                  <img :src="item.miniimg[1].src" class="lazy" >
                  <img :src="item.miniimg[2].src" class="lazy" >
                </div>
                <div class="info" v-if="!isVideo">
                  <div class="title" v-if="item.miniimg.length < 3">{{item.topic}}</div>
                  <div class="source">
                    <div v-if="item.isvideo === '1'" class="tag-qt">视频</div>
                    <div v-else-if="item.iszhiding === '1'" class="tag-zd">{{item.tags}}</div>
                    <div v-else-if="item.ishot === '1'" class="tag-zd">热门</div>
                    <div v-else-if="item.iscommend === '1'" class="tag-qt">推荐</div>
                  <div class="l">{{item.source}}</div>
                  </div>
                </div>
                <div class="info" v-else>
                  <div class="img"> <img :src="item.dfhheadsrc" alt=""> </div>
                  <div class="name">{{item.dfhname}}</div>
                </div>
              </a>
            </li>
          </ul>
        </section>
    </div>
    <keep-alive v-if="!istoUrl">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import jiekou from "./assets/js/jiekou.js";
import _util_ from "./assets/js/common.js";
const { lunbo, matchdata, news, videonews } = jiekou.API_URL;
export default {
  name: 'App',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      nav: [
        {
          channel: 901215,
          type: 'tuijian',
          name: '推荐',
          toUrl: false,
          active: true
        },
        {
          channel: '',
          type: 'zhibo',
          name: '直播',
          toUrl: true,
          active: false
        },
        {
          channel: 900047,
          type: 'NBA',
          name: 'NBA',
          toUrl: false,
          active: false
        },
        {
          channel: 900048,
          type: 'CBA',
          name: 'CBA',
          toUrl: false,
          active: false
        },
        {
          channel: 900050,
          type: 'zhongchao',
          name: '中超',
          toUrl: false,
          active: false
        },
        {
          channel: 900051,
          type: 'yingchao',
          name: '英超',
          toUrl: false,
          active: false
        },
        {
          channel: 900052,
          type: 'xijia',
          name: '西甲',
          toUrl: false,
          active: false
        },
        {
          channel: 900053,
          type: 'yijia',
          name: '意甲',
          toUrl: false,
          active: false
        },
        {
          channel: 901213,
          type: 'shipin',
          name: '视频',
          toUrl: false,
          active: false
        },
        {
          channel: 900054,
          type: 'dejia',
          name: '德甲',
          toUrl: false,
          active: false
        },
        {
          channel: 900056,
          type: 'ouguan',
          name: '欧冠',
          toUrl: false,
          active: false
        },
        {
          channel: 900062,
          type: 'fajia',
          name: '法甲',
          toUrl: false,
          active: false
        },
        {
          channel: 900058,
          type: 'yaguan',
          name: '亚冠',
          toUrl: false,
          active: false
        }
      ],
      swiperContainer: {
        autoplay: true,
        delay: 3000
      },
      name: 'tuijian',
      lunboData: [],
      matchArr: [],
      newsArr: [],
      newsData: {},
      isScroll: true,
      isVideo: false,
      istoUrl: true
    }
  },
  methods: {  
    ..._util_,
    changeNav(index){
      console.log(111)
      if(this.name == this.nav[index].type) return
      this.nav.forEach((v) => v.active = false)
      this.nav[index].active = true
      this.name = this.nav[index].type
      this.istoUrl = !this.nav[index].toUrl
      if(this.nav[index].toUrl){
        this.$router.push({path: '/' + this.nav[index].type})
      }else{
        this.$router.push({path: '/'})
        this.isVideo = this.nav[index].type == 'shipin'
        this.newsArr = []
        this.newsData.startkey = '';
        this.newsData.pgnum = 1;
        this.news()
      }
    },
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
      this.newsData.type = this.nav.filter((v) => v.active == true)[0].type
      this.newsData.typecode = this.nav.filter((v) => v.active == true)[0].channel
      let url = this.newsData.type == 'shipin' ? videonews : news
      this.$http(url, this.newsData, {
        name: "callback" + new Date() / 1
      }).then(res => {
        this.newsArr = this.newsArr.concat(res.data);
        this.newsData.startkey = res.endkey;
        this.newsData.pgnum++;
        this.isScroll = true;
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
    },
    winScroll(){
      let win = window.innerHeight;
      let Ul = this.$refs.newsUl
      window.addEventListener('scroll',() => {
        if(this.nav.filter((v) => v.active == true)[0].toUrl) return
        let lastTop = Ul.lastChild.offsetTop
        let winScroll = window.scrollY
        if(lastTop < winScroll + win && this.isScroll){
          this.isScroll = false
          this.news()
        }
      })
    }
  },
  mounted () {
    if( location.hash != '#/' && location.hash.indexOf(this.name) == -1){
      let isNow = this.nav.findIndex((n) => location.hash.indexOf(n.type) > -1)
      this.changeNav(isNow)
    }else{
      this.matchdataRender();
      this.news();
      this.winScroll();
    }
  },
  created () {
    this.lunboRender();
    this.newsData = {
      type: "",
      typecode: "",
      startkey: "",
      newkey: "",
      pgnum: 1,
      os: this.getOsType(),
      recgid: 15308456183500092,
      qid: null,
      domain: "dfsports_h5",
      readhistory: null
    };
  } 
}
</script>

<style lang="less">
@import url('./assets/css/base.css');
@import "./assets/css/tuijian.less";
.lincoapp-tab3{
  position: fixed;
  top: 0;
  left: 0;
  width: 750px;
  height: 80px;
  z-index: 2;
  color: #1a1a1a;
  .tab-scroll-wrap{
    padding: 0 24px;
    background: #f7f7f7;
    border-bottom: 1px solid #e0e0e0;
    width: 100%;
    height: 80px;
    z-index: 2;
    position: relative;
    overflow: hidden;
    .nav-new{
      position: relative;
      overflow: hidden;
    }
    ul{
      overflow: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      li{
        display: inline-block;
        line-height: 80px;
        text-align: center;
        padding: 0 20px;
        white-space: nowrap;
        font-size: 32px;
        &.active{
          color: #f62929;
        }
        &:first-child{
          padding-left: 0;
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

}
.pull-down-load-tips{
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 72px;
  line-height: 72px;
  background: rgba(218, 236, 250, 0.9);
  text-align: center;
  color: #7f8387;
  font-size: 32px;
  .iloading{
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url('./assets/images/loading.png') no-repeat;
    background-size: 32px;
    margin-right: 10px;
    vertical-align: -6px;
  }
}
</style>
