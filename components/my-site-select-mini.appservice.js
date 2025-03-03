$gwx_XC_2=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];
function gz$gwx_XC_2_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'show']])
Z([3,'__e'])
Z([3,'my-site-select'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[1,'height:'],[[6],[[6],[[7],[3,'hyy']],[3,'win']],[3,'height']]],[1,'px']])
Z([3,'__l'])
Z([3,'170e4524-1'])
Z([[2,'==='],[[7],[3,'index']],[1,1]])
Z([[6],[[7],[3,'treeList']],[[7],[3,'navIndex']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_2=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_2=true;
var x=['./components/my-site-select-mini.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_2_1()
var cT=_v()
_(r,cT)
if(_oz(z,0,e,s,gg)){cT.wxVkey=1
var hU=_mz(z,'view',['bindtouchmove',1,'class',1,'data-event-opts',2,'style',3],[],e,s,gg)
var cW=_mz(z,'my-header',['bind:__l',5,'vueId',1],[],e,s,gg)
_(hU,cW)
var oV=_v()
_(hU,oV)
if(_oz(z,7,e,s,gg)){oV.wxVkey=1
var oX=_v()
_(oV,oX)
if(_oz(z,8,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
}
oV.wxXCkey=1
_(cT,hU)
}
cT.wxXCkey=1
cT.wxXCkey=3
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_2";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_2();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/my-site-select-mini.wxml'] = [$gwx_XC_2, './components/my-site-select-mini.wxml'];else __wxAppCode__['components/my-site-select-mini.wxml'] = $gwx_XC_2( './components/my-site-select-mini.wxml' );
	;__wxRoute = "components/my-site-select-mini";__wxRouteBegin = true;__wxAppCurrentFile__="components/my-site-select-mini.js";define("components/my-site-select-mini.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/my-site-select-mini"],{"4a93":function(n,t,e){e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}));var i={myHeader:function(){return e.e("components/my-header").then(e.bind(null,"440e"))}},o=function(){this.$createElement;this._self._c},a=[]},"56f4":function(n,t,e){e.r(t);var i=e("4a93"),o=e("d14e");for(var a in o)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(a);e("f8d0");var c=e("828b"),r=Object(c.a)(o.default,i.b,i.c,!1,null,null,null,!1,i.a,void 0);t.default=r.exports},"5eb2":function(n,t,e){},d14e:function(n,t,e){e.r(t);var i=e("d812"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t.default=o.a},d812:function(n,t,e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{show:{type:Boolean,default:!1},sites:{type:Array,default:function(){return[]}},value:{type:String,default:""}},data:function(){return{index:1,tabs:[{label:"附近"},{label:"地区"},{label:"地图"}],location:null,navIndex:0}},computed:{nearList:function(){var n=this;return this.location?this.sites.map((function(t){var e=n.getDistance(n.location.lng,n.location.lat,t.location[0],t.location[1]);return{province:t.province,city:t.city,name:t.name,code:t.code,d:e,distance:e>=1e3?(e/1e3).toFixed(1)+" km":e.toFixed(0)+" m"}})).sort((function(n,t){return n.d-t.d})).slice(0,5):[]},treeList:function(){var n=[],t={},e={};return this.sites.sort((function(n,t){var e=["广西","海南","广东","福建","浙江","上海","江苏","山东","河北","天津","辽宁"],i=e.indexOf(n.province);return e.indexOf(t.province)-i})),this.sites.forEach((function(i){var o=t[i.province];void 0===o&&(n.push({label:i.province,children:[]}),t[i.province]=o=n.length-1);var a=e[i.city];void 0===a&&(n[o].children.push({label:i.city,children:[]}),e[i.city]=a=n[o].children.length-1),n[o].children[a].children.push({label:i.name,value:i.code})})),n},center:function(){var n=this,t=this.sites.find((function(t){return t.code===n.value}));return t?{lng:t.location[0],lat:t.location[1]}:{lng:109.12788,lat:21.45508}},markers:function(){return this.sites.map((function(n,t){return{id:t,longitude:n.location[0],latitude:n.location[1],joinCluster:!1,callout:{display:"ALWAYS",borderRadius:8,fontSize:14,content:n.name,bgColor:"#ffffff",padding:5,color:"#e16531"},width:8,height:8,iconPath:"/static/images/icon/icon-site.png",_value:n.code}}))}},watch:{show:function(n){var t=this;if(n){var e=this.sites.find((function(n){return n.code===t.value}));e&&(this.navIndex=this.treeList.findIndex((function(n){return n.label===e.province})))}}},methods:{clickTab:function(n){this.index=n.index},clickAddress:function(){var n=this;this.$hyy.chooseLocation({success:function(t){n.location={address:t.name,lng:t.longitude,lat:t.latitude}}})},clickNav:function(n){this.navIndex=n},callouttap:function(n){var t=n.detail.markerId,e=this.markers.find((function(n){return n.id===t}));e&&this.confirm(e._value,"地图")},confirm:function(n,t){this.$emit("input",n),this.$emit("confirm",n,t)},getDistance:function(n,t,e,i){n=n||0,i=i||0,e=e||0;var o=(t=t||0)*Math.PI/180,a=i*Math.PI/180,c=o-a,r=n*Math.PI/180-e*Math.PI/180;return 12756274*Math.asin(Math.sqrt(Math.pow(Math.sin(c/2),2)+Math.cos(o)*Math.cos(a)*Math.pow(Math.sin(r/2),2)))}}};t.default=i},f8d0:function(n,t,e){var i=e("5eb2");e.n(i).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/my-site-select-mini-create-component",{"components/my-site-select-mini-create-component":function(n,t,e){e("df3c").createComponent(e("56f4"))}},[["components/my-site-select-mini-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/my-site-select-mini.js'});require("components/my-site-select-mini.js");