$gwx_XC_8=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
function gz$gwx_XC_8_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'$root']],[3,'m0']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_8=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_8=true;
var x=['./uni_modules/uview-ui/components/u-badge/u-badge.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_8_1()
var xWB=_v()
_(r,xWB)
if(_oz(z,0,e,s,gg)){xWB.wxVkey=1
}
xWB.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_8";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_8();	if (__vd_version_info__.delayedGwx) __wxAppCode__['uni_modules/uview-ui/components/u-badge/u-badge.wxml'] = [$gwx_XC_8, './uni_modules/uview-ui/components/u-badge/u-badge.wxml'];else __wxAppCode__['uni_modules/uview-ui/components/u-badge/u-badge.wxml'] = $gwx_XC_8( './uni_modules/uview-ui/components/u-badge/u-badge.wxml' );
	;__wxRoute = "uni_modules/uview-ui/components/u-badge/u-badge";__wxRouteBegin = true;__wxAppCurrentFile__="uni_modules/uview-ui/components/u-badge/u-badge.js";define("uni_modules/uview-ui/components/u-badge/u-badge.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";(global.webpackJsonp=global.webpackJsonp||[]).push([["uni_modules/uview-ui/components/u-badge/u-badge"],{"209c":function(e,t,u){var n=u("a7eb");u.n(n).a},a7eb:function(e,t,u){},ab66:function(e,t,u){u.r(t);var n=u("d141"),o=u("c189");for(var a in o)["default"].indexOf(a)<0&&function(e){u.d(t,e,(function(){return o[e]}))}(a);u("209c");var i=u("828b"),r=Object(i.a)(o.default,n.b,n.c,!1,null,"361197e0",null,!1,n.a,void 0);t.default=r.exports},ba05:function(e,t,u){(function(e){var n=u("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(u("47e0")),a={name:"u-badge",mixins:[e.$u.mpMixin,o.default,e.$u.mixin],computed:{boxStyle:function(){return{}},badgeStyle:function(){var t={};if(this.color&&(t.color=this.color),this.bgColor&&!this.inverted&&(t.backgroundColor=this.bgColor),this.absolute&&(t.position="absolute",this.offset.length)){var u=this.offset[0],n=this.offset[1]||u;t.top=e.$u.addUnit(u),t.right=e.$u.addUnit(n)}return t},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}};t.default=a}).call(this,u("df3c").default)},c189:function(e,t,u){u.r(t);var n=u("ba05"),o=u.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){u.d(t,e,(function(){return n[e]}))}(a);t.default=o.a},d141:function(e,t,u){u.d(t,"b",(function(){return n})),u.d(t,"c",(function(){return o})),u.d(t,"a",(function(){}));var n=function(){var e=this,t=(e.$createElement,e._self._c,e.show&&(0!==Number(e.value)||e.showZero||e.isDot)),u=t?e.__get_style([e.$u.addStyle(e.customStyle),e.badgeStyle]):null;e.$mp.data=Object.assign({},{$root:{m0:t,s0:u}})},o=[]}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["uni_modules/uview-ui/components/u-badge/u-badge-create-component",{"uni_modules/uview-ui/components/u-badge/u-badge-create-component":function(e,t,u){u("df3c").createComponent(u("ab66"))}},[["uni_modules/uview-ui/components/u-badge/u-badge-create-component"]]]);
},{isPage:false,isComponent:true,currentFile:'uni_modules/uview-ui/components/u-badge/u-badge.js'});require("uni_modules/uview-ui/components/u-badge/u-badge.js");