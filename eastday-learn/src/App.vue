<template>
  <div id="app">
    <div class="lincoapp-tab3" id="headNav">
      <div class="tab-scroll-wrap">
          <div class="nav-new">
              <ul>
                  <li v-for="(item, index) in nav" :key="index" :class="{'active': index == 0}">{{item.name}}</li>
              </ul>
              <span class="line"></span>
          </div>
      </div>
      <!-- <div class="pull-down-load-tips" style="">
          <i class="iloading"></i><span class="txt">下拉刷新</span>
      </div> -->
  </div>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      nav: [
        {
          channel: 901215,
          type: 'tuijian',
          name: '推荐',
        },
        {
          channel: '',
          type: 'zhibo',
          name: '直播'
        },
        {
          channel: 900047,
          type: 'NBA',
          name: 'NBA'
        },
        {
          channel: 900048,
          type: 'CBA',
          name: 'CBA'
        },
        {
          channel: 900050,
          type: 'zhongchao',
          name: '中超'
        },
        {
          channel: 900051,
          type: 'yingchao',
          name: '英超'
        },
        {
          channel: 900052,
          type: 'xijia',
          name: '西甲'
        },
        {
          channel: 900053,
          type: 'yijia',
          name: '意甲'
        },
        {
          channel: 901213,
          type: 'shipin',
          name: '视频'
        },
        {
          channel: 900054,
          type: 'dejia',
          name: '德甲'
        },
        {
          channel: 900056,
          type: 'ouguan',
          name: '欧冠'
        },
        {
          channel: 900062,
          type: 'fajia',
          name: '法甲'
        },
        {
          channel: 900058,
          type: 'yaguan',
          name: '亚冠'
        }
      ]
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
</style>
