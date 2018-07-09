<template>
    <div id="mainSection" ref="mainSection">
        <section class="sec-news-list">
          <ul ref="newsUl">
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
import jiekou from "../assets/js/jiekou.js";
import _util_ from "../assets/js/common.js";
const { news } = jiekou.API_URL;

export default {
  name: "cba",
  data() {
    return {
      swiperContainer: {
        autoplay: true,
        delay: 3000
      },
      newsArr: [],
      newsData :{},
      isScroll : true
    };
  },
  methods: {
    ..._util_,
    news() {
      this.$http(
        news,
        this.newsData,
        {
          name: "callback" + new Date() / 1
        }
      ).then(res => {
        this.newsArr = this.newsArr.concat(res.data)
        this.newsData.startkey = res.endkey
        this.newsData.pgnum++
        this.isScroll = true
      });
    },
    winScroll(){
      let win = window.innerHeight;
      let Ul = this.$refs.newsUl
      window.addEventListener('scroll',() => {
        let lastTop = Ul.lastChild.offsetTop
        let winScroll = window.scrollY
        if(lastTop < winScroll + win && this.isScroll){
          this.isScroll = false
          this.news()
        }
      })
    }
  },
  activated() {
    this.news();
    this.winScroll()
  },
  created() {
    this.newsData = {
      type: 'zhongchao',
      typecode: '900050',
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
@import "../assets/css/newscss.less";
</style>
