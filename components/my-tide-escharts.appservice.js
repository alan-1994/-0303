$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^finished']],[[4],[[5],[[4],[[5],[1,'init']]]]]]]]])
Z([[7],[3,'cid']])
Z([3,'da767f1c-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./components/my-tide-escharts.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var aZ=_mz(z,'l-echart',['bind:__l',0,'bind:finished',1,'class',1,'data-event-opts',2,'data-ref',3,'vueId',4],[],e,s,gg)
_(r,aZ)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/my-tide-escharts.wxml'] = [$gwx_XC_3, './components/my-tide-escharts.wxml'];else __wxAppCode__['components/my-tide-escharts.wxml'] = $gwx_XC_3( './components/my-tide-escharts.wxml' );
	;__wxRoute = "components/my-tide-escharts";__wxRouteBegin = true;__wxAppCurrentFile__="components/my-tide-escharts.js";define("components/my-tide-escharts.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/my-tide-escharts"],{"152c":function(t,e,n){var o=n("47a9"),r=n("3b2d");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("7eb4")),i=o(n("ee10")),c=n("053a"),l=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var n=function(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return function(t){return t?n:e}(t)}(e);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var c=a?Object.getOwnPropertyDescriptor(t,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=t[i]}return o.default=t,n&&n.set(t,o),o}(n("e294"));var u={},f={props:{t:{type:Object,default:function(){return null}},show:{type:Boolean,default:!0}},data:function(){return{cid:String(Math.random()).substr(2,16)}},computed:{option:function(){var t=this.t;if(!t)return null;var e=function(){var e=t.beachTimes.reduce((function(t,e){return t.concat(e)}),[]);return t.values.map((function(t){return e.find((function(e){return e[0]===t[0]}))||null}))}();return{legend:{data:["Beach","Now","Speed"],selected:{Speed:!1},formatter:function(t){return{Beach:"赶海时间",Now:"当前时间",Speed:"流速"}[t]},left:"center",bottom:0,icon:"circle",itemWidth:8,itemHeight:8,itemGap:28,textStyle:{fontSize:12,color:"rgba(0, 0, 0, .9)"},inactiveColor:"#ddd"},tooltip:{trigger:"axis",axisPointer:{animation:!0,type:"cross",crossStyle:{color:"#999",width:1,opacity:1},label:{backgroundColor:"#ddd",color:"#000",formatter:function(t){var e=t.axisDimension,n=t.value;return"x"===e?(0,c.formatX)(n):(0,c.formatY)(n)}}},backgroundColor:"rgba(255, 255, 255, 0)",textStyle:{color:"#000"},extraCssText:"box-shadow: none;",transitionDuration:0,position:function(t,e,n,o,r){return{top:0,right:0}},formatter:function(e){var n={},o=[];if(e.forEach((function(t){return n[t.seriesName]=t})),n.Tide){var r=n.Tide.data[0],a=n.Tide.data[1];o.push("时间:".concat((0,c.formatX)(r))),o.push("潮高:".concat((0,c.formatY)(a)))}if(n.Beach&&o.push("赶海时间内"),n.Speed){var i=n.Speed.data[1];o.push("流速:".concat(t.formatSpeed(i)))}return o.join(" ")}},xAxis:[{type:"value",axisLine:{lineStyle:{color:"#b4b4b4"},show:!0},splitLine:{lineStyle:{type:[2,4],color:"#ddd"},show:!0},axisTick:{show:!1},axisLabel:{color:"#777",formatter:function(t){return Math.floor(t/60)}},min:0,max:1440,interval:120}],yAxis:[{name:"潮高(米)",nameGap:7,axisLine:{lineStyle:{color:"#b4b4b4"},show:!0},splitLine:{lineStyle:{type:[2,4],color:"#ddd"},show:!0},axisTick:{show:!1},axisLabel:{color:"#777",formatter:function(t){return(0,c.formatY)(t,0,"")}},min:0,max:t.yMax,interval:100}],grid:{left:24,right:12,top:40,bottom:44},series:[{name:"Tide",type:"line",data:t.values,z:2,showSymbol:!1,smooth:!0,itemStyle:{color:"rgb(64, 158, 255)"},areaStyle:{color:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(64, 158, 255, .3)"},{offset:1,color:"rgba(64, 158, 255, 0)"}])},markPoint:{symbolSize:42,label:{color:"#fff",fontSize:11,fontWeight:600,formatter:function(t){var e=t.value;return parseFloat((0,c.formatY)(e))}},data:[{type:"max",itemStyle:{color:"#fa5151"}},{type:"min",itemStyle:{color:"#33c323"}}]}},{name:"Beach",type:"line",data:e,z:4,showSymbol:!1,smooth:!0,itemStyle:{color:"rgb(250, 165, 45)"},areaStyle:{color:new l.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"rgba(250, 165, 45, .7)"},{offset:1,color:"rgba(250, 165, 45, 0)"}])}},{name:"Now",type:"line",data:this.t.nowData,z:3,showSymbol:!1,smooth:!1,lineStyle:{type:"dashed"},itemStyle:{color:"rgb(241, 215, 21)"}}]}}},watch:{t:function(){this.render()}},created:function(){},methods:{init:function(){var t=this;return(0,i.default)(a.default.mark((function e(){var n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$refs[t.cid].init(l);case 2:n=u[t.cid]=e.sent,t.option&&n.setOption(t.option);case 4:case"end":return e.stop()}}),e)})))()},render:function(){var t=u[this.cid];t&&this.option&&t.setOption(this.option)}}};e.default=f},"5da6":function(t,e,n){var o=n("b782");n.n(o).a},"602e":function(t,e,n){n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return o}));var o={lEchart:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/lime-echart/components/l-echart/l-echart")]).then(n.bind(null,"5478"))}},r=function(){this.$createElement;this._self._c},a=[]},b6d2:function(t,e,n){n.r(e);var o=n("152c"),r=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e.default=r.a},b782:function(t,e,n){},c1ec:function(t,e,n){n.r(e);var o=n("602e"),r=n("b6d2");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("5da6");var i=n("828b"),c=Object(i.a)(r.default,o.b,o.c,!1,null,null,null,!1,o.a,void 0);e.default=c.exports}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/my-tide-escharts-create-component",{"components/my-tide-escharts-create-component":function(t,e,n){n("df3c").createComponent(n("c1ec"))}},[["components/my-tide-escharts-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/my-tide-escharts.js'});require("components/my-tide-escharts.js");