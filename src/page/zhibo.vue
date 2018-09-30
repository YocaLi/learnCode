<template>
    <div id="zhibo">
        <div class="crumbs">
            <div class="time all-time">
                <div class="cont">
                    <span class="left" @click="toOther(false)"></span>
                    <span class="middle" id="dateText" data-data-timestamp="1531065600000">{{new Date(todayL).format('MM-dd')}} 至 {{new Date(new Date(todayL).getTime() + 24 * 60 * 60 * 1000).format('MM-dd')}}</span>
                    <span class="right" @click="toOther(true)"></span>
                </div>
            </div>
        </div>
        <ul class="matchs">
            <li v-for="(item, index) of matchArr" :key="index" :class="state(item)">
                <a :href="item.liveurl">
                    <div class="tt">
                        <div class="tit">
                            <em>{{item.starttime.split(' ')[1]}}</em><br>{{item.title02}}
                        </div>
                    </div>
                    <div class="team">
                        <div class="host"><img :src="item.home_logoname" alt=""><span>{{item.home_team}}</span></div>
                        <div class="visit"><img :src="item.visit_logoname" alt=""><span>{{item.visit_team}}</span></div>
                    </div>
                    <div class="score"> 
                        <i v-if="item.ismatched / 1 == -1"></i>   
                        <div v-else>
                            <div class="hscore">{{item.saishi_id === '900002' ?item.visit_score : item.home_score}}</div>
                            <div class="vscore" >{{item.saishi_id === '900002' ?item.home_score : item.visit_score}}</div> 
                        </div>         
                    </div>
                    <div class="state"><div class="info" v-html="info(item.ismatched,item)"></div></div>
                </a>
            </li>
            <li v-if="!matchArr.length" style="text-align: center;line-height: 40px;font-size: 15px;">
                无更多数据...
            </li>
        </ul>
    </div>
</template>
<script>
import jiekou from "../assets/js/jiekou.js";
import _util_ from "../assets/js/common.js";
const { matchdata } = jiekou.API_URL;
export default {
    name:'zhibo',
    data() {
        return {
        todayL: new Date().toLocaleDateString(),
        matchArr: []
        };
    },
    methods: {
        matchAjax() {
            let todayL = new Date(this.todayL).getTime()
            let tomorrowL = new Date(todayL).getTime() + 24 * 60 * 60 * 1000
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
                if(!res.data.length){

                }
                this.matchArr = res.data;
            });
        },
        toOther(flag){
            console.log(new Date(new Date(this.todayL).getTime() + 24 * 60 * 60 * 1000).toLocaleDateString())
            this.todayL = flag ? new Date(new Date(this.todayL).getTime() + 24 * 60 * 60 * 1000).toLocaleDateString() : new Date(new Date(this.todayL).getTime() - 24 * 60 * 60 * 1000).toLocaleDateString()
            this.matchAjax()
        },
        state(data) {
            let state = "";
            switch (data.ismatched / 1) {
                case -1:
                state += "unstart";
                break;
                case 0:
                state += "live";
                break;
                default:
                state += "end";
                break;
            }
            return state;
        },
        info(a, v) {
            let state = ''
            if (a / 1 === 1) {
            state = v.hasjijin / 1 + v.hasluxiang / 1 ? `${v.hasjijin / 1 ? "<em>集锦</em>" : ""}${ v.hasluxiang / 1 ? "<em>录像</em>" : "" }` : "已结束";
            }
            if (a / 1 === 0) {
            state = `<em>直播中</em>${ this.liveInfo(v.zhiboinfozh).length ? `<br>${this.liveInfo(v.zhiboinfozh)[0]}` : "" }`;
            }
            if(a / 1 === -1) {
                state = this.liveInfo(v.zhiboinfozh).length ? `${this.liveInfo(v.zhiboinfozh)[0] ? this.liveInfo(v.zhiboinfozh)[0] : ""}${ this.liveInfo(v.zhiboinfozh)[1] ? `<br>${this.liveInfo(v.zhiboinfozh)[1]}` : "" }` : "敬请期待";
            }
            return state
        },
        liveInfo(arr) {
        let infoName = [];
        arr.forEach(function(item) {
            let name = item.title.split("(")[0];
            if (infoName.indexOf(name) < 0) infoName.push(name);
        });
        return infoName;
        }
    },
    mounted() {
        this.matchAjax();
    }
};
</script>
<style lang="less">
@import "swiper/dist/css/swiper.min.css";
@import "../assets/css/zhibo.less";
</style>
