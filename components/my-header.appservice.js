$gwx_XC_0=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_0 || [];
function gz$gwx_XC_0_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_0_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_0_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_0=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_0=true;
var x=['./components/my-header.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_0_1()
var oB=_n('slot')
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_0";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_0();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/my-header.wxml'] = [$gwx_XC_0, './components/my-header.wxml'];else __wxAppCode__['components/my-header.wxml'] = $gwx_XC_0( './components/my-header.wxml' );
	;__wxRoute = "components/my-header";__wxRouteBegin = true;__wxAppCurrentFile__="components/my-header.js";define("components/my-header.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["components/my-header"],{"0076":function(e,n,t){t.r(n);var o=t("d758"),a=t.n(o);for(var c in o)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(c);n.default=a.a},"0277":function(e,n,t){},"1a16":function(e,n,t){var o=t("0277");t.n(o).a},"363a":function(e,n,t){t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var o=function(){this.$createElement;this._self._c},a=[]},"440e":function(e,n,t){t.r(n);var o=t("363a"),a=t("0076");for(var c in a)["default"].indexOf(c)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(c);t("1a16");var u=t("828b"),r=Object(u.a)(a.default,o.b,o.c,!1,null,null,null,!1,o.a,void 0);n.default=r.exports},d758:function(e,n,t){(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={props:{fixed:{type:Boolean,default:!1},placeholder:{type:Boolean,default:!0}},data:function(){return{totalHeight:"64px"}},mounted:function(){var n=this;e.createSelectorQuery().in(this).select(".header-w").boundingClientRect((function(e){n.totalHeight=e.height+"px"})).exec()},methods:{}};n.default=t}).call(this,t("df3c").default)}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["components/my-header-create-component",{"components/my-header-create-component":function(e,n,t){t("df3c").createComponent(t("440e"))}},[["components/my-header-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'components/my-header.js'});require("components/my-header.js");