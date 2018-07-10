<template>
    <div id="zhibo">
        <div class="crumbs">
            <div class="time all-time">
                <div class="cont">
                    <span class="left"></span>
                    <span class="middle" id="dateText" data-data-timestamp="1531065600000">07-09 至 07-10</span>
                    <span class="right"></span>
                </div>
            </div>
        </div>
        <ul class="matchs">
            <li class="end">
                <a href="">
                    <div class="tt">
                        <div class="tit">
                            <em>03:00</em><br>NBA夏季联赛
                        </div>
                    </div>
                    <div class="team">
                        <div class="host"><img src="" alt=""><span>鹈鹕</span></div>
                        <div class="visit"><img src="" alt=""><span>活塞</span></div>
                    </div>
                    <div class="score">
                    <div class="hscore">97</div>
                        <div class="vscore">105</div>                      
                    </div>
                    <div class="state"><div class="info"><em>集锦</em></div></div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
import jiekou from "../assets/js/jiekou.js";
import _util_ from "../assets/js/common.js";
export default {
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import "swiper/dist/css/swiper.min.css";
@import "../assets/css/zhibo.less";
</style>
