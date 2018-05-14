<template>
  <div id="app">
    <div class="lincoapp-tab3" id="headNav">
      <div class="tab-scroll-wrap">
          <div class="nav-new">
              <ul>
                  <li v-for="(item, index) in nav" :key="index" :class="{'active': item.active}"  @click="changeNav(index)">{{item.name}}</li>
              </ul>
              <span class="line"></span>
          </div>
      </div>
      <div class="pull-down-load-tips" style="">
          <i class="iloading"></i><span class="txt">下拉刷新</span>
      </div>
    </div>
    
    <router-view/>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'App',
  data () {
    return {
      nav: [
        {
          channel: 901215,
          type: 'tuijian',
          name: '推荐',
          active: true
        },
        {
          channel: '',
          type: 'zhibo',
          name: '直播',
          active: false
        },
        {
          channel: 900047,
          type: 'NBA',
          name: 'NBA',
          active: false
        },
        {
          channel: 900048,
          type: 'CBA',
          name: 'CBA',
          active: false
        },
        {
          channel: 900050,
          type: 'zhongchao',
          name: '中超',
          active: false
        },
        {
          channel: 900051,
          type: 'yingchao',
          name: '英超',
          active: false
        },
        {
          channel: 900052,
          type: 'xijia',
          name: '西甲',
          active: false
        },
        {
          channel: 900053,
          type: 'yijia',
          name: '意甲',
          active: false
        },
        {
          channel: 901213,
          type: 'shipin',
          name: '视频',
          active: false
        },
        {
          channel: 900054,
          type: 'dejia',
          name: '德甲',
          active: false
        },
        {
          channel: 900056,
          type: 'ouguan',
          name: '欧冠',
          active: false
        },
        {
          channel: 900062,
          type: 'fajia',
          name: '法甲',
          active: false
        },
        {
          channel: 900058,
          type: 'yaguan',
          name: '亚冠',
          active: false
        }
      ] 
    }
  },
  mounted () {
     
  },
  methods: {  
    changeNav(index){
      this.nav.forEach((v) => v.active = false)
      this.nav[index].active = true
    }
  }  
}
</script>

<style lang="less">
@import url('./assets/css/base.css');
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
