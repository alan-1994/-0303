$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'t']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./components/my-tide-row.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
var e2=_v()
_(r,e2)
if(_oz(z,0,e,s,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/my-tide-row.wxml'] = [$gwx_XC_4, './components/my-tide-row.wxml'];else __wxAppCode__['components/my-tide-row.wxml'] = $gwx_XC_4( './components/my-tide-row.wxml' );
	;__wxRoute = "components/my-tide-row";__wxRouteBegin = true;__wxAppCurrentFile__="components/my-tide-row.js";define("components/my-tide-row.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/my-tide-row"],{"3ef2":function(n,t,e){var a=e("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("34cf")),c=e("053a"),r={props:{t:{type:Object,default:function(){return null}}},data:function(){return{}},computed:{bars:function(){var n=this,t=this.t;return t?t.values.map((function(e){var a=(0,o.default)(e,2),r=a[0],u=a[1],f=r%60!=0;return{width:Math.max(u/t.yMax*100,1)+"%",y:(0,c.formatY)(u,2,""),x:f?(0,c.formatX)(r):r/60+":00",isPeak:f,isBeach:n.hasBeach(r)}})):[]}},created:function(){},methods:{hasBeach:function(n){return!!this.t.beachTimes.reduce((function(n,t){return n.concat(t)}),[]).find((function(t){return t[0]===n}))}}};t.default=r},4390:function(n,t,e){e.r(t);var a=e("3ef2"),o=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(c);t.default=o.a},"5ef7":function(n,t,e){e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"a",(function(){}));var a=function(){this.$createElement;this._self._c},o=[]},"76aa":function(n,t,e){},"9def":function(n,t,e){e.r(t);var a=e("5ef7"),o=e("4390");for(var c in o)["default"].indexOf(c)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(c);e("e268");var r=e("828b"),u=Object(r.a)(o.default,a.b,a.c,!1,null,null,null,!1,a.a,void 0);t.default=u.exports},e268:function(n,t,e){var a=e("76aa");e.n(a).a}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/my-tide-row-create-component",{"components/my-tide-row-create-component":function(n,t,e){e("df3c").createComponent(e("9def"))}},[["components/my-tide-row-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/my-tide-row.js'});require("components/my-tide-row.js");