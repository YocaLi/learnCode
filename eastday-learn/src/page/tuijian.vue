<template>
    <div id="mainSection">
        <div class="swiper-wrapper">
            <div id="swiperContainer" class="swiper-container fs-swiper-container swiper-container-horizontal">
                <div class="swiper-wrapper" style="transform: translate3d(-1875px, 0px, 0px); transition-duration: 0ms;">
                    <div class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="4" style="width: 375px;">
                        <a href="http://msports.eastday.com/a/180514094433903000000.html?qid=null&amp;idx=5&amp;from=lunbo5&amp;pgtype=tuijian" suffix="lunbo5">
                            <img data-src="//imgsports.eastday.com/res/upload/img/2018-05-14/78a98e01d0217c315f712a08b12e67e5_660_330.jpeg" src="//imgsports.eastday.com/res/upload/img/2018-05-14/78a98e01d0217c315f712a08b12e67e5_660_330.jpeg">
                            <p>火箭太太团PK:哈登新女友惹火 周琦女友不逊色
                                <span>5&nbsp;/&nbsp;<i>5</i></span>
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tuijian',
    data() {
        return {

        }
    },
    methods: {
        lunboRender() {
            this.$http('//msports.eastday.com/json/msponts/home_lunbo.json',{},{
                name:'callbcak'
            }).then((res)=>{
                this.lunboData = res.data
                console.log(res)
            })
        }
    },
    created () {
        this.lunboRender()
    }
};
</script>
<style lang="less" scoped>
#mainSection {
  height: 100%;
  padding-top: 80px;
}
</style>
