webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),s=i("Dd8w"),n=i.n(s),r=i("DMPO"),o=i.n(r),c={PAGE_ROOT_PATH:"../../",DOMAIN:"dfsports_h5",VERSION:"1.1.1"};console.log("production"),c.API_URL={lunbo:"//msports.eastday.com/json/msponts/home_lunbo.json",matchdata:"//dfsports_h5.dftoutiao.com/dfsports_h5/matchba",news:"//dfsports_h5.dftoutiao.com/dfsports_h5/newspool",videonews:"//dfsports_h5.dftoutiao.com/dfsports_h5/videonewspool"};var l=c;Date.prototype.format=function(t){var e={"y+":this.getFullYear(),"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"h+":this.getHours()-12,"m+":this.getMinutes(),"s+":this.getSeconds()},i=function(i){var a=new RegExp(i,"g");t=t.replace(a,function(t){return("000000"+e[i]).slice(-t.length)})};for(var a in e)i(a);return t},Array.prototype.shuffle=function(){for(var t=this.length-1;t>=0;t--){var e=Math.floor(Math.random()*(t+1)),i=this[e];this[e]=this[t],this[t]=i}return this};var h={formatTimeToMatch:function(t,e){var i=Date.parse(e.replace(/-/g,"/")),a=new Date(i).format("MM月dd日"),s=e.substring(11),n=new Date(new Date(t/1).format("yyyy/MM/dd")).getTime(),r=(new Date(i).getTime()-n)/864e5;return r>=0&&r<1?s+"开始":r>=1&&r<2?"明天"+s:r>=2&&r<3?"后天"+s:a},getOsType:function(){var t=navigator.userAgent.toLowerCase(),e="";if(/android/i.test(navigator.userAgent)){var i=t.indexOf("android");e="Android "+t.substr(i+8,3)}if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){var a=t.indexOf("os");e="iOS "+t.substr(a+3,3)}return!/Linux/i.test(navigator.userAgent)||/android/i.test(navigator.userAgent)||/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)||(e="Linux"),/windows|win32/i.test(navigator.userAgent)&&(e="windows32"),/windows|win64/i.test(navigator.userAgent)&&(e="windows64"),e},browserType:function(){var t=navigator.userAgent.toLowerCase(),e="";return t.indexOf("msie")>0&&(e="IE"),t.indexOf("firefox")>0&&(e="firefox"),t.indexOf("chrome")>0&&t.indexOf("mb2345browser")<0&&t.indexOf("360 aphone browser")<0&&(e="chrome"),(t.indexOf("360 aphone browser")>0||t.indexOf("qhbrowser")>0)&&(e="360"),t.indexOf("ucbrowser")>0&&(e="UC"),t.indexOf("micromessenger")>0&&(e="WeChat"),(t.indexOf("mqqbrowser")>0||t.indexOf("qq")>0)&&t.indexOf("micromessenger")<0&&(e="QQ"),t.indexOf("miuibrowser")>0&&(e="MIUI"),t.indexOf("mb2345browser")>0&&(e="2345"),t.indexOf("sogoumobilebrowser")>0&&(e="sogou"),t.indexOf("liebaofast")>0&&(e="liebao"),t.indexOf("safari")>0&&t.indexOf("chrome")<0&&t.indexOf("ucbrowser")<0&&t.indexOf("micromessenger")<0&&t.indexOf("mqqbrowser")<0&&t.indexOf("miuibrowser")<0&&t.indexOf("mb2345browser")<0&&t.indexOf("sogoumobilebrowser")<0&&t.indexOf("liebaofast")<0&&t.indexOf("qhbrowser")<0&&(e="safari"),e}},d=l.API_URL,v=d.lunbo,m=d.matchdata,f=d.news,u=d.videonews,_={name:"App",components:{swiper:r.swiper,swiperSlide:r.swiperSlide},data:function(){return{nav:[{channel:901215,type:"tuijian",name:"推荐",toUrl:!1,active:!0},{channel:"",type:"zhibo",name:"直播",toUrl:!0,active:!1},{channel:900047,type:"NBA",name:"NBA",toUrl:!1,active:!1},{channel:900048,type:"CBA",name:"CBA",toUrl:!1,active:!1},{channel:900050,type:"zhongchao",name:"中超",toUrl:!1,active:!1},{channel:900051,type:"yingchao",name:"英超",toUrl:!1,active:!1},{channel:900052,type:"xijia",name:"西甲",toUrl:!1,active:!1},{channel:900053,type:"yijia",name:"意甲",toUrl:!1,active:!1},{channel:901213,type:"shipin",name:"视频",toUrl:!1,active:!1},{channel:900054,type:"dejia",name:"德甲",toUrl:!1,active:!1},{channel:900056,type:"ouguan",name:"欧冠",toUrl:!1,active:!1},{channel:900062,type:"fajia",name:"法甲",toUrl:!1,active:!1},{channel:900058,type:"yaguan",name:"亚冠",toUrl:!1,active:!1}],swiperContainer:{autoplay:!0,delay:3e3},name:"tuijian",lunboData:[],matchArr:[],newsArr:[],newsData:{},isScroll:!0,isVideo:!1,istoUrl:!0}},methods:n()({},h,{changeNav:function(t){console.log(111),this.name!=this.nav[t].type&&(this.nav.forEach(function(t){return t.active=!1}),this.nav[t].active=!0,this.name=this.nav[t].type,this.istoUrl=!this.nav[t].toUrl,this.nav[t].toUrl?this.$router.push({path:"/"+this.nav[t].type}):(this.$router.push({path:"/"}),this.isVideo="shipin"==this.nav[t].type,this.newsArr=[],this.newsData.startkey="",this.newsData.pgnum=1,this.news()))},lunboRender:function(){var t=this;this.$http(v,{},{name:"callbcak"}).then(function(e){e.data.length=e.data.length>5?5:e.data.length,t.lunboData=e.data})},matchdataRender:function(){var t=this,e=new Date((new Date).toLocaleDateString()).getTime(),i=new Date((new Date).toLocaleDateString()).getTime()+864e5;this.$http(m,{startts:e,endts:i,isimp:1,qid:null,domain:"dfsports_h5"},{name:"callback"+new Date/1}).then(function(e){t.matchArr=e.data})},news:function(){var t=this;this.newsData.type=this.nav.filter(function(t){return 1==t.active})[0].type,this.newsData.typecode=this.nav.filter(function(t){return 1==t.active})[0].channel;var e="shipin"==this.newsData.type?u:f;this.$http(e,this.newsData,{name:"callback"+new Date/1}).then(function(e){t.newsArr=t.newsArr.concat(e.data),t.newsData.startkey=e.endkey,t.newsData.pgnum++,t.isScroll=!0})},state:function(t,e){var i="";switch(t.sport_type/1!=1||e||(i+="other "),t.ismatched/1){case-1:i+="no-start";break;case 0:i+="living";break;default:i+="end"}return i},winScroll:function(){var t=this,e=window.innerHeight,i=this.$refs.newsUl;window.addEventListener("scroll",function(){t.nav.filter(function(t){return 1==t.active})[0].toUrl||i.lastChild.offsetTop<window.scrollY+e&&t.isScroll&&(t.isScroll=!1,t.news())})}}),mounted:function(){if("#/"!=location.hash&&-1==location.hash.indexOf(this.name)){var t=this.nav.findIndex(function(t){return location.hash.indexOf(t.type)>-1});this.changeNav(t)}else this.matchdataRender(),this.news(),this.winScroll()},created:function(){this.lunboRender(),this.newsData={type:"",typecode:"",startkey:"",newkey:"",pgnum:1,os:this.getOsType(),recgid:0x3662f5b4e08d3c,qid:null,domain:"dfsports_h5",readhistory:null}}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"lincoapp-tab3",attrs:{id:"headNav"}},[i("div",{staticClass:"tab-scroll-wrap"},[i("div",{staticClass:"nav-new"},[i("ul",t._l(t.nav,function(e,a){return i("li",{key:a,class:{active:e.active},on:{click:function(e){t.changeNav(a)}}},[t._v(t._s(e.name))])})),t._v(" "),i("span",{staticClass:"line"})])]),t._v(" "),t._m(0)]),t._v(" "),t.istoUrl?i("div",{ref:"mainSection",attrs:{id:"mainSection"}},["tuijian"==t.name?i("div",{staticClass:"swiper-wrapper"},[i("swiper",{ref:"mySwiper",attrs:{options:t.swiperContainer}},t._l(t.lunboData,function(e,a){return i("swiper-slide",{key:a},[i("a",{attrs:{href:e.url}},[i("img",{attrs:{src:e.image_url}}),t._v(" "),i("p",[t._v(t._s(e.title)+"\n                  "),i("span",[t._v(t._s(a+1)+" / "),i("i",[t._v(t._s(t.lunboData.length))])])])])])}))],1):t._e(),t._v(" "),"tuijian"==t.name?i("section",{staticClass:"sec-match"},[i("ul",{staticClass:"clearfix"},t._l(t.matchArr,function(e,a){return i("li",{key:a,staticClass:"clearfix",class:t.state(e,!1)},[e.sport_type/1==1?i("a",{attrs:{href:e.liveurl}},[i("h6",[t._v(t._s(e.title02))]),t._v(" "),i("div",{staticClass:"row",class:t.state(e,!0)},[i("div",{staticClass:"t"},[t._v(t._s(e.starttime.split(" ")[1]))])])]):i("a",{attrs:{href:e.liveurl}},[i("h3",[t._v(t._s(e.title02))]),t._v(" "),i("div",{staticClass:"team"},[i("img",{attrs:{src:e.home_logoname,alt:""}}),t._v(" "),i("p",[t._v(t._s(e.home_team))])]),t._v(" "),i("div",{staticClass:"info",attrs:{id:e.matchid}},[i("div",{staticClass:"score"},[t._v(t._s("-1"===e.ismatched?t.formatTimeToMatch(e.currentServerTime,e.starttime):e.home_score+"-"+e.visit_score))]),t._v(" "),"-1"==e.ismatched?i("span",{staticClass:"empty"},[t._v("为开赛")]):"0"==e.ismatched?i("span",{staticClass:"living"},[t._v("LIVE")]):i("span",[t._v("集锦")])]),t._v(" "),i("div",{staticClass:"team"},[i("img",{attrs:{src:e.visit_logoname,alt:""}}),t._v(" "),i("p",[t._v(t._s(e.visit_team))])])])])}))]):t._e(),t._v(" "),"tuijian"==t.name?i("a",{staticClass:"match-more",attrs:{href:"javascript:;",suffix:"hotmatch"}},[i("div",{staticClass:"l"},[t._v("07月06日")]),t._v(" "),i("div",{staticClass:"m"},[t._v("查看今天全部热门比赛")]),t._v(" "),i("div",{staticClass:"r"})]):t._e(),t._v(" "),"tuijian"==t.name?i("div",{staticClass:"separate-line"}):t._e(),t._v(" "),i("section",{staticClass:"sec-news-list"},[i("ul",{ref:"newsUl"},t._l(t.newsArr,function(e,a){return i("li",{key:a,staticClass:"clearfix",class:{"video-list":t.isVideo}},[i("a",{attrs:{href:e.url}},[e.miniimg.length>2?i("div",{staticClass:"title"},[t._v(t._s(e.topic))]):t._e(),t._v(" "),e.miniimg.length<3?i("div",{staticClass:"img"},[i("img",{staticClass:"lazy",attrs:{src:e.miniimg[0].src}}),t._v(" "),"1"!==e.isvideo||t.isVideo?t._e():i("span",{staticClass:"play-btn"}),t._v(" "),t.isVideo?i("div",{staticClass:"title"},[t._v(t._s(e.topic))]):t._e(),t._v(" "),t.isVideo?i("div",{staticClass:"icon"}):t._e(),t._v(" "),t.isVideo?i("div",{staticClass:"duration"},[t._v("04:28")]):t._e()]):i("div",{staticClass:"imgs"},[i("img",{staticClass:"lazy",attrs:{src:e.miniimg[0].src}}),t._v(" "),i("img",{staticClass:"lazy",attrs:{src:e.miniimg[1].src}}),t._v(" "),i("img",{staticClass:"lazy",attrs:{src:e.miniimg[2].src}})]),t._v(" "),t.isVideo?i("div",{staticClass:"info"},[i("div",{staticClass:"img"},[i("img",{attrs:{src:e.dfhheadsrc,alt:""}})]),t._v(" "),i("div",{staticClass:"name"},[t._v(t._s(e.dfhname))])]):i("div",{staticClass:"info"},[e.miniimg.length<3?i("div",{staticClass:"title"},[t._v(t._s(e.topic))]):t._e(),t._v(" "),i("div",{staticClass:"source"},["1"===e.isvideo?i("div",{staticClass:"tag-qt"},[t._v("视频")]):"1"===e.iszhiding?i("div",{staticClass:"tag-zd"},[t._v(t._s(e.tags))]):"1"===e.ishot?i("div",{staticClass:"tag-zd"},[t._v("热门")]):"1"===e.iscommend?i("div",{staticClass:"tag-qt"},[t._v("推荐")]):t._e(),t._v(" "),i("div",{staticClass:"l"},[t._v(t._s(e.source))])])])])])}))])]):t._e(),t._v(" "),t.istoUrl?t._e():i("keep-alive",[i("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pull-down-load-tips"},[e("i",{staticClass:"iloading"}),e("span",{staticClass:"txt"},[this._v("下拉刷新")])])}]};var g=i("VU/8")(_,p,!1,function(t){i("hxLD")},null,null).exports,w=i("/ocq"),C=l.API_URL.matchdata,y={name:"zhibo",data:function(){return{todayL:(new Date).toLocaleDateString(),matchArr:[]}},methods:{matchAjax:function(){var t=this,e=new Date(this.todayL).getTime(),i=new Date(e).getTime()+864e5;this.$http(C,{startts:e,endts:i,isimp:1,qid:null,domain:"dfsports_h5"},{name:"callback"+new Date/1}).then(function(e){e.data.length,t.matchArr=e.data})},toOther:function(t){console.log(new Date(new Date(this.todayL).getTime()+864e5).toLocaleDateString()),this.todayL=t?new Date(new Date(this.todayL).getTime()+864e5).toLocaleDateString():new Date(new Date(this.todayL).getTime()-864e5).toLocaleDateString(),this.matchAjax()},state:function(t){var e="";switch(t.ismatched/1){case-1:e+="unstart";break;case 0:e+="live";break;default:e+="end"}return e},info:function(t,e){var i="";return t/1==1&&(i=e.hasjijin/1+e.hasluxiang/1?(e.hasjijin/1?"<em>集锦</em>":"")+(e.hasluxiang/1?"<em>录像</em>":""):"已结束"),t/1==0&&(i="<em>直播中</em>"+(this.liveInfo(e.zhiboinfozh).length?"<br>"+this.liveInfo(e.zhiboinfozh)[0]:"")),t/1==-1&&(i=this.liveInfo(e.zhiboinfozh).length?(this.liveInfo(e.zhiboinfozh)[0]?this.liveInfo(e.zhiboinfozh)[0]:"")+(this.liveInfo(e.zhiboinfozh)[1]?"<br>"+this.liveInfo(e.zhiboinfozh)[1]:""):"敬请期待"),i},liveInfo:function(t){var e=[];return t.forEach(function(t){var i=t.title.split("(")[0];e.indexOf(i)<0&&e.push(i)}),e}},mounted:function(){this.matchAjax()}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"zhibo"}},[i("div",{staticClass:"crumbs"},[i("div",{staticClass:"time all-time"},[i("div",{staticClass:"cont"},[i("span",{staticClass:"left",on:{click:function(e){t.toOther(!1)}}}),t._v(" "),i("span",{staticClass:"middle",attrs:{id:"dateText","data-data-timestamp":"1531065600000"}},[t._v(t._s(new Date(t.todayL).format("MM-dd"))+" 至 "+t._s(new Date(new Date(t.todayL).getTime()+864e5).format("MM-dd")))]),t._v(" "),i("span",{staticClass:"right",on:{click:function(e){t.toOther(!0)}}})])])]),t._v(" "),i("ul",{staticClass:"matchs"},[t._l(t.matchArr,function(e,a){return i("li",{key:a,class:t.state(e)},[i("a",{attrs:{href:e.liveurl}},[i("div",{staticClass:"tt"},[i("div",{staticClass:"tit"},[i("em",[t._v(t._s(e.starttime.split(" ")[1]))]),i("br"),t._v(t._s(e.title02)+"\n                    ")])]),t._v(" "),i("div",{staticClass:"team"},[i("div",{staticClass:"host"},[i("img",{attrs:{src:e.home_logoname,alt:""}}),i("span",[t._v(t._s(e.home_team))])]),t._v(" "),i("div",{staticClass:"visit"},[i("img",{attrs:{src:e.visit_logoname,alt:""}}),i("span",[t._v(t._s(e.visit_team))])])]),t._v(" "),i("div",{staticClass:"score"},[e.ismatched/1==-1?i("i"):i("div",[i("div",{staticClass:"hscore"},[t._v(t._s("900002"===e.saishi_id?e.visit_score:e.home_score))]),t._v(" "),i("div",{staticClass:"vscore"},[t._v(t._s("900002"===e.saishi_id?e.home_score:e.visit_score))])])]),t._v(" "),i("div",{staticClass:"state"},[i("div",{staticClass:"info",domProps:{innerHTML:t._s(t.info(e.ismatched,e))}})])])])}),t._v(" "),t.matchArr.length?t._e():i("li",{staticStyle:{"text-align":"center","line-height":"40px","font-size":"15px"}},[t._v("\n            无更多数据...\n        ")])],2)])},staticRenderFns:[]};var x=i("VU/8")(y,b,!1,function(t){i("UGOz")},null,null).exports;a.a.use(w.a);var D=new w.a({routes:[{path:"/zhibo",name:"zhibo",component:x}]}),O=i("//Fk"),A=i.n(O),U=i("6yg2"),z=i.n(U);i("D0oh"),i("j/E3");a.a.prototype.$http=function(t,e,i){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var e="";for(var i in t){var a=t[i]?t[i]:"";e+="&"+i+"="+encodeURIComponent(a)}return e||""}(e),new A.a(function(e,a){z()(t,i,function(t,i){t?a(t):e(i)})})},a.a.config.productionTip=!1,a.a.config.debug=!0,a.a.use(o.a),new a.a({mode:"history",el:"#app",router:D,components:{App:g},template:"<App/>"})},UGOz:function(t,e){},hxLD:function(t,e){},"j/E3":function(t,e){}},["NHnr"]);