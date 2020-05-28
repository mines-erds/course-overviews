(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function p(a,b){if(b){for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
p("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function q(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var na=ja;
function u(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
function oa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function v(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)v(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||pa});
p("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=q(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!v(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(r){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!v(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&v(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&v(k,g)&&v(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&v(k,g)&&v(k[g],this.f)?delete k[g][this.f]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&v(h.g,l))for(var r=0;r<n.length;r++){var w=n[r];if(k!==k&&w.key!==w.key||k===w.key)return{id:l,list:n,index:r,u:w}}return{id:l,list:n,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=q(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(q([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(r){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)v(b,d)&&c.push([d,b[d]]);return c}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==oa(this,b,"includes").indexOf(b,c||0)}});
p("Set",function(a){function b(c){this.f=new Map;if(c){c=q(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(q([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var qa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
p("Reflect.construct",function(){return qa});
var x=this||self;function y(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var ra=/^[\w+/_-]+[=]{0,2}$/,sa=null;function ta(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ra.test(a)?a:""}
function z(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ua(){}
function va(a){a.ha=void 0;a.getInstance=function(){return a.ha?a.ha:a.ha=new a}}
function wa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function xa(a){var b=wa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function A(a){return"function"==wa(a)}
function ya(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function za(a){return Object.prototype.hasOwnProperty.call(a,Aa)&&a[Aa]||(a[Aa]=++Ba)}
var Aa="closure_uid_"+(1E9*Math.random()>>>0),Ba=0;function Ca(a,b,c){return a.call.apply(a.bind,arguments)}
function Da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function B(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?B=Ca:B=Da;return B.apply(null,arguments)}
function Ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var C=Date.now||function(){return+new Date};
function D(a,b){y(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function G(a){if(Error.captureStackTrace)Error.captureStackTrace(this,G);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(G,Error);G.prototype.name="CustomError";function Fa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.h=!b&&/[?&]ae=1(&|$)/.test(a);this.i=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;var Ga=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},H=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ia=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ja=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ka=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
H(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function La(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ma(a,b){var c=Ga(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Na(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Oa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(xa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Pa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Qa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Ra(a,b){var c=xa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Sa(a){var b=Ta,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ua(a){for(var b in a)return!1;return!0}
function Va(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Wa(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Xa(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ya(a){var b=wa(a);if("object"==b||"array"==b){if(A(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Ya(a[c]);return b}return a}
var Za="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $a(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Za.length;f++)c=Za[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ab(a,b){this.f=a===bb&&b||"";this.g=cb}
ab.prototype.K=!0;ab.prototype.J=function(){return this.f.toString()};
ab.prototype.ga=!0;ab.prototype.da=function(){return 1};
function db(a){if(a instanceof ab&&a.constructor===ab&&a.g===cb)return a.f;wa(a);return"type_error:TrustedResourceUrl"}
var cb={},bb={};var eb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function fb(a,b){if(b)a=a.replace(gb,"&amp;").replace(hb,"&lt;").replace(ib,"&gt;").replace(jb,"&quot;").replace(kb,"&#39;").replace(lb,"&#0;");else{if(!mb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(gb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(hb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(ib,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(jb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(kb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(lb,"&#0;"))}return a}
var gb=/&/g,hb=/</g,ib=/>/g,jb=/"/g,kb=/'/g,lb=/\x00/g,mb=/[\x00&<>"']/;function I(a,b){this.f=a===nb&&b||"";this.g=ob}
I.prototype.K=!0;I.prototype.J=function(){return this.f.toString()};
I.prototype.ga=!0;I.prototype.da=function(){return 1};
function pb(a){if(a instanceof I&&a.constructor===I&&a.g===ob)return a.f;wa(a);return"type_error:SafeUrl"}
var qb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function rb(a){if(a instanceof I)return a;a="object"==typeof a&&a.K?a.J():String(a);qb.test(a)||(a="about:invalid#zClosurez");return new I(nb,a)}
var ob={},nb={};var sb;a:{var tb=x.navigator;if(tb){var ub=tb.userAgent;if(ub){sb=ub;break a}}sb=""}function J(a){return-1!=sb.indexOf(a)}
;function vb(){this.f="";this.h=wb;this.g=null}
vb.prototype.ga=!0;vb.prototype.da=function(){return this.g};
vb.prototype.K=!0;vb.prototype.J=function(){return this.f.toString()};
var wb={};function xb(a,b){var c=new vb;c.f=a;c.g=b;return c}
;function yb(a,b){var c=b instanceof I?b:rb(b);a.href=pb(c)}
function zb(a,b){a.src=db(b);var c;(c=a.ownerDocument&&a.ownerDocument.defaultView)&&c!=x?c=ta(c.document):(null===sa&&(sa=ta(x.document)),c=sa);c&&a.setAttribute("nonce",c)}
;function Ab(a){return a=fb(a,void 0)}
function Bb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Db=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function K(a){return a?decodeURI(a):a}
function L(a,b){return b.match(Db)[a]||null}
function Eb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Eb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Fb(a){var b=[],c;for(c in a)Eb(c,a[c],b);return b.join("&")}
function Gb(a,b){var c=Fb(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var Hb=/#|$/;function Ib(a,b){var c=a.search(Hb);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;var Jb=J("Opera"),Kb=J("Trident")||J("MSIE"),Lb=J("Edge"),Mb=J("Gecko")&&!(-1!=sb.toLowerCase().indexOf("webkit")&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),Nb=-1!=sb.toLowerCase().indexOf("webkit")&&!J("Edge");function Ob(){var a=x.document;return a?a.documentMode:void 0}
var Pb;a:{var Qb="",Rb=function(){var a=sb;if(Mb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Lb)return/Edge\/([\d\.]+)/.exec(a);if(Kb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Nb)return/WebKit\/(\S+)/.exec(a);if(Jb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Rb&&(Qb=Rb?Rb[1]:"");if(Kb){var Sb=Ob();if(null!=Sb&&Sb>parseFloat(Qb)){Pb=String(Sb);break a}}Pb=Qb}var Tb=Pb,Ub;if(x.document&&Kb){var Vb=Ob();Ub=Vb?Vb:parseInt(Tb,10)||void 0}else Ub=void 0;var Wb=Ub;var Xb={},Yb=null;var M=window;function Zb(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,$b[b]?b=$b[b]:(b=String(b),$b[b]||(c=/function\s+([^\(]+)/m.exec(b),$b[b]=c?c[1]:"[Anonymous]"),b=$b[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var $b={};function ac(a){this.f=a||{cookie:""}}
m=ac.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.sb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.la}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=eb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{la:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=eb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var bc=new ac("undefined"==typeof document?null:document);var cc=!Kb||9<=Number(Wb);function dc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=dc.prototype;m.clone=function(){return new dc(this.x,this.y)};
m.equals=function(a){return a instanceof dc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function ec(a,b){this.width=a;this.height=b}
m=ec.prototype;m.clone=function(){return new ec(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function fc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function gc(a,b){Qa(b,function(c,d){c&&"object"==typeof c&&c.K&&(c=c.J());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:hc.hasOwnProperty(d)?a.setAttribute(hc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var hc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ic(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!cc&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ab(g.name),'"');if(g.type){f.push(' type="',Ab(g.type),'"');var h={};$a(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=jc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):gc(f,g));2<d.length&&kc(e,f,d);return f}
function kc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!xa(f)||ya(f)&&0<f.nodeType?d(f):H(lc(f)?Na(f):f,d)}}
function jc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function lc(a){if(a&&"number"==typeof a.length){if(ya(a))return"function"==typeof a.item||"string"==typeof a.item;if(A(a))return"function"==typeof a.item}return!1}
function mc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function nc(a){oc();return new ab(bb,a)}
var oc=ua;function pc(a){var b=qc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function rc(){var a=[];pc(function(b){a.push(b)});
return a}
var qc={Ya:"allow-forms",Za:"allow-modals",ab:"allow-orientation-lock",bb:"allow-pointer-lock",cb:"allow-popups",eb:"allow-popups-to-escape-sandbox",fb:"allow-presentation",gb:"allow-same-origin",hb:"allow-scripts",ib:"allow-top-navigation",jb:"allow-top-navigation-by-user-activation"},sc=Pa(function(){return rc()});
function tc(){var a=jc(document,"IFRAME"),b={};H(sc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function N(){this.g=this.g;this.C=this.C}
N.prototype.g=!1;N.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function uc(a,b){a.g?b():(a.C||(a.C=[]),a.C.push(b))}
N.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};
function vc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function wc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];xa(d)?wc.apply(null,d):vc(d)}}
;function xc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var yc=(new Date).getTime();function zc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";
var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Ac(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(r){for(var w=g,t=0;64>t;t+=4)w[t/4]=r[t]<<24|r[t+1]<<16|r[t+2]<<8|r[t+3];for(t=16;80>t;t++)r=w[t-3]^w[t-8]^w[t-14]^w[t-16],w[t]=(r<<1|r>>>31)&4294967295;r=e[0];var F=e[1],W=e[2],ha=e[3],Gc=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var Ha=ha^F&(W^ha);var Cb=1518500249}else Ha=F^W^ha,Cb=1859775393;else 60>t?(Ha=F&W|ha&(F|W),Cb=2400959708):(Ha=F^W^ha,Cb=3395469782);Ha=((r<<5|r>>>27)&4294967295)+Ha+Gc+Cb+w[t]&4294967295;Gc=ha;ha=W;W=(F<<30|F>>>2)&4294967295;F=r;r=Ha}e[0]=e[0]+r&4294967295;e[1]=
e[1]+F&4294967295;e[2]=e[2]+W&4294967295;e[3]=e[3]+ha&4294967295;e[4]=e[4]+Gc&4294967295}
function c(r,w){if("string"===typeof r){r=unescape(encodeURIComponent(r));for(var t=[],F=0,W=r.length;F<W;++F)t.push(r.charCodeAt(F));r=t}w||(w=r.length);t=0;if(0==l)for(;t+64<w;)b(r.slice(t,t+64)),t+=64,n+=64;for(;t<w;)if(f[l++]=r[t++],n++,64==l)for(l=0,b(f);t+64<w;)b(r.slice(t,t+64)),t+=64,n+=64}
function d(){var r=[],w=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=w&255,w>>>=8;b(f);for(t=w=0;5>t;t++)for(var F=24;0<=F;F-=8)r[w++]=e[t]>>F&255;return r}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,wa:function(){for(var r=d(),w="",t=0;t<r.length;t++)w+="0123456789ABCDEF".charAt(Math.floor(r[t]/16))+"0123456789ABCDEF".charAt(r[t]%16);return w}}}
;function Bc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],H(d,function(h){e.push(h)}),Cc(e.join(" "));
var f=[],g=[];H(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];H(d,function(h){e.push(h)});
a=Cc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Cc(a){var b=Ac();b.update(a);return b.wa().toLowerCase()}
;function Dc(a){var b=zc(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new ac(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new ac(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,Bc(zc(d),c,a||null)].join(" "):null}return null}
;function Ec(){this.g=[];this.f=-1}
Ec.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Ec.prototype.get=function(a){return!!this.g[a]};
function Fc(a){-1==a.f&&(a.f=Ka(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Hc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Hc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Ic(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Jc(a){x.setTimeout(function(){throw a;},0)}
var Kc;
function Lc(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!J("Presto")&&(a=function(){var e=jc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=B(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!J("Trident")&&!J("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ka;c.ka=null;e()}};
return function(e){d.next={ka:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function Mc(){this.g=this.f=null}
var Oc=new Hc(function(){return new Nc},function(a){a.reset()});
Mc.prototype.add=function(a,b){var c=Oc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Mc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Nc(){this.next=this.scope=this.f=null}
Nc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Nc.prototype.reset=function(){this.next=this.scope=this.f=null};function Pc(a,b){Qc||Rc();Sc||(Qc(),Sc=!0);Tc.add(a,b)}
var Qc;function Rc(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);Qc=function(){a.then(Uc)}}else Qc=function(){var b=Uc;
!A(x.setImmediate)||x.Window&&x.Window.prototype&&!J("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Kc||(Kc=Lc()),Kc(b)):x.setImmediate(b)}}
var Sc=!1,Tc=new Mc;function Uc(){for(var a;a=Tc.remove();){try{a.f.call(a.scope)}catch(b){Jc(b)}Ic(Oc,a)}Sc=!1}
;function Vc(){this.g=-1}
;function Wc(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(Wc,Vc);Wc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Xc(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Wc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Xc(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Xc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Xc(this,e);f=0;break}}this.h=f;this.j+=b}};
Wc.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Xc(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Yc(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Zc(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function $c(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Yc(a).match(/\S+/g)||[],c=0<=Ga(c,b);return c}
function ad(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):$c(a,"inverted-hdpi")&&Zc(a,Ia(a.classList?a.classList:Yc(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var bd="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function cd(){}
cd.prototype.next=function(){throw bd;};
cd.prototype.D=function(){return this};
function dd(a){if(a instanceof cd)return a;if("function"==typeof a.D)return a.D(!1);if(xa(a)){var b=0,c=new cd;c.next=function(){for(;;){if(b>=a.length)throw bd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ed(a,b){if(xa(a))try{H(a,b,void 0)}catch(c){if(c!==bd)throw c;}else{a=dd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==bd)throw c;}}}
function fd(a){if(xa(a))return Na(a);a=dd(a);var b=[];ed(a,function(c){b.push(c)});
return b}
;function gd(a,b){this.h={};this.f=[];this.F=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof gd)for(c=hd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function hd(a){id(a);return a.f.concat()}
m=gd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||jd;id(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function jd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.F=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.F++,this.f.length>2*this.g&&id(this),!0):!1};
function id(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.F++);this.h[a]=b};
m.forEach=function(a,b){for(var c=hd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new gd(this)};
m.D=function(a){id(this);var b=0,c=this.F,d=this,e=new cd;e.next=function(){if(c!=d.F)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw bd;var f=d.f[b++];return a?f:d.h[f]};
return e};function kd(a){var b=[];ld(new md,a,b);return b.join("")}
function md(){}
function ld(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ld(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),nd(d,c),c.push(":"),ld(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":nd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var od={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function nd(a,b){b.push('"',a.replace(pd,function(c){var d=od[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),od[c]=d);return d}),'"')}
;function qd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=ua)try{var b=this;a.call(void 0,function(c){rd(b,2,c)},function(c){rd(b,3,c)})}catch(c){rd(this,3,c)}}
function sd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
sd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var td=new Hc(function(){return new sd},function(a){a.reset()});
function ud(a,b,c){var d=td.get();d.g=a;d.onRejected=b;d.context=c;return d}
function vd(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return wd(this,A(a)?a:null,A(b)?b:null,c)};
O.prototype.$goog_Thenable=!0;function xd(a,b){return wd(a,null,b,void 0)}
O.prototype.cancel=function(a){if(0==this.f){var b=new yd(a);Pc(function(){zd(this,b)},this)}};
function zd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?zd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Ad(c),Bd(c,e,3,b)))}a.h=null}else rd(a,3,b)}
function Cd(a,b){a.g||2!=a.f&&3!=a.f||Dd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function wd(a,b,c,d){var e=ud(null,null,null);e.f=new O(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof yd?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;Cd(a,e);return e.f}
O.prototype.w=function(a){this.f=0;rd(this,2,a)};
O.prototype.B=function(a){this.f=0;rd(this,3,a)};
function rd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof O){Cd(d,ud(e||ua,f||null,a));var g=!0}else if(qd(d))d.then(e,f,a),g=!0;else{if(ya(d))try{var h=d.then;if(A(h)){Ed(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.m=c,a.f=b,a.h=null,Dd(a),3!=b||c instanceof yd||Fd(a,c))}}
function Ed(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Dd(a){a.l||(a.l=!0,Pc(a.C,a))}
function Ad(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
O.prototype.C=function(){for(var a;a=Ad(this);)Bd(this,a,this.f,this.m);this.l=!1};
function Bd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Gd(b,c,d);else try{b.h?b.g.call(b.context):Gd(b,c,d)}catch(e){Hd.call(null,e)}Ic(td,b)}
function Gd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Fd(a,b){a.j=!0;Pc(function(){a.j&&Hd.call(null,b)})}
var Hd=Jc;function yd(a){G.call(this,a)}
E(yd,G);yd.prototype.name="cancel";function P(a){N.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
E(P,N);m=P.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Id(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=La(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
m.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=ua):(c&&Ma(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Jd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Jd(a,b,c){Pc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(H(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.o=function(){P.L.o.call(this);this.clear();this.i.length=0};function Kd(a){this.f=a}
Kd.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,kd(b))};
Kd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Kd.prototype.remove=function(a){this.f.remove(a)};function Ld(a){this.f=a}
E(Ld,Kd);function Md(a){this.data=a}
function Nd(a){return void 0===a||a instanceof Md?a:new Md(a)}
Ld.prototype.set=function(a,b){Ld.L.set.call(this,a,Nd(b))};
Ld.prototype.g=function(a){a=Ld.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ld.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Od(a){this.f=a}
E(Od,Ld);Od.prototype.set=function(a,b,c){if(b=Nd(b)){if(c){if(c<C()){Od.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}Od.L.set.call(this,a,b)};
Od.prototype.g=function(a){var b=Od.L.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())Od.prototype.remove.call(this,a);else return b}};function Pd(){}
;function Qd(){}
E(Qd,Pd);Qd.prototype.clear=function(){var a=fd(this.D(!0)),b=this;H(a,function(c){b.remove(c)})};function Rd(a){this.f=a}
E(Rd,Qd);m=Rd.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.D=function(a){var b=0,c=this.f,d=new cd;d.next=function(){if(b>=c.length)throw bd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Sd(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Sd,Rd);function Td(a,b){this.g=a;this.f=null;if(Kb&&!(9<=Number(Wb))){Ud||(Ud=new gd);this.f=Ud.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Ud.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(Td,Qd);var Vd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Ud=null;function Wd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Vd[b]})}
m=Td.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Wd(a),b);Xd(this)};
m.get=function(a){a=this.f.getAttribute(Wd(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Wd(a));Xd(this)};
m.D=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new cd;d.next=function(){if(b>=c.length)throw bd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Xd(this)};
function Xd(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Yd(a,b){this.g=a;this.f=b+"::"}
E(Yd,Qd);Yd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Yd.prototype.get=function(a){return this.g.get(this.f+a)};
Yd.prototype.remove=function(a){this.g.remove(this.f+a)};
Yd.prototype.D=function(a){var b=this.g.D(!0),c=this,d=new cd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function Zd(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var $d=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};y("yt.config_",$d,void 0);function Q(a){Zd($d,arguments)}
function R(a,b){return a in $d?$d[a]:b}
function ae(){return R("PLAYER_CONFIG",{})}
function be(a){var b=$d.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;function ce(){var a=de;z("yt.ads.biscotti.getId_")||y("yt.ads.biscotti.getId_",a,void 0)}
function ee(a){y("yt.ads.biscotti.lastId_",a,void 0)}
;var fe=[];function ge(a){fe.forEach(function(b){return b(a)})}
function he(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ie(b),ge(b)}}:a}
function ie(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Q("ERRORS",b))}
function je(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Q("ERRORS",b))}
;function ke(a){a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?Oa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};ie(h)}}}return b}
function le(a){var b=[];Qa(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];H(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function me(a){"?"==a.charAt(0)&&(a=a.substr(1));return ke(a)}
function ne(a,b){return oe(a,b||{},!0)}
function oe(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=me(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Gb(a,e)+d}
;function pe(a){var b=qe;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(re(b),se(b));b.ca_type="image";a&&(b.bid=a);return b}
function re(a){var b={};b.dt=yc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?M:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!M.navigator&&"unknown"!==typeof M.navigator.javaEnabled&&!!M.navigator.javaEnabled&&M.navigator.javaEnabled();M.screen&&(b.u_h=M.screen.height,b.u_w=M.screen.width,b.u_ah=M.screen.availHeight,b.u_aw=M.screen.availWidth,b.u_cd=M.screen.colorDepth);
M.navigator&&M.navigator.plugins&&(b.u_nplug=M.navigator.plugins.length);M.navigator&&M.navigator.mimeTypes&&(b.u_nmime=M.navigator.mimeTypes.length);return b}
function se(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(r){}try{var e=b.outerWidth;var f=b.outerHeight}catch(r){}try{var g=b.innerWidth;var h=b.innerHeight}catch(r){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new ec(l.clientWidth,l.clientHeight)).round()}catch(r){n=new ec(-12245933,-12245933)}k=n;n={};l=new Ec;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=tc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=Fc(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!M.WebGLRenderingContext,n}
var qe=new function(){var a=window.document;this.f=window;this.g=a};
y("yt.ads_.signals_.getAdSignalsString",function(a){return le(pe(a))},void 0);C();function S(a){a=te(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ue(a,b){var c=te(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function te(a){var b=R("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:R("EXPERIMENT_FLAGS",{})[a]}
;var ve=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function we(){if(!ve)return null;var a=ve();return"open"in a?a:null}
function xe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){A(a)&&(a=he(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;var ye={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ze="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ae=!1;
function Be(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(1,a),e=K(L(3,a));d&&e?(d=c,c=a.match(Db),d=d.match(Db),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(L(3,c))==e&&(Number(L(4,c))||null)==(Number(L(4,a))||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in ye)e=R(ye[f]),!e||!c&&!Ce(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ce(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Ce(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Ce(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=le(pe(void 0));return b}
function De(a){var b=window.location.search,c=K(L(3,a)),d=K(L(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=me(b),f={};H(ze,function(g){e[g]&&(f[g]=e[g])});
return oe(a,f||{},!1)}
function Ce(a,b){var c=R("CORS_HEADER_WHITELIST")||{},d=K(L(3,a));return d?(c=c[d])?0<=Ga(c,b):!1:!0}
function Ee(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Fe(a,b);var d=Ge(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&U(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||x;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.ia&&b.ia.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.oa&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.oa.call(b.context||x))},b.timeout))}else He(a,b)}
function He(a,b){var c=b.format||"JSON";a=Fe(a,b);var d=Ge(a,b),e=!1,f,g=Ie(a,function(h){if(!e){e=!0;f&&U(f);var k=xe(h),l=null,n=400<=h.status&&500>h.status,r=500<=h.status&&600>h.status;if(k||n||r)l=Je(c,h,b.nb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||x;k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.ia&&b.ia.call(n,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.O.call(b.context||x,g))},b.timeout));
return g}
function Fe(a,b){b.qb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME",void 0),d=b.Xa;d&&(d[c]&&delete d[c],a=ne(a,d));return a}
function Ge(a,b){var c=R("XSRF_FIELD_NAME",void 0),d=R("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.A,g=R("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.pb||K(L(3,a))&&!b.withCredentials&&K(L(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.A&&b.A[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=me(e),$a(e,f),e=b.qa&&"JSON"==b.qa?JSON.stringify(e):Fb(e));f=e||f&&!Ua(f);!Ae&&f&&"POST"!=b.method&&(Ae=!0,ie(Error("AJAX request with postData should use POST")));
return e}
function Je(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ke(b):null)d={},H(b.getElementsByTagName("*"),function(e){d[e.tagName]=Le(e)})}c&&Me(d);
return d}
function Me(a){if(ya(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=xb(a[b],null);a[c]=d}else Me(a[b])}}
function Ke(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Le(a){var b="";H(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ie(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&he(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=we();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;S("debug_forward_web_query_parameters")&&(a=De(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Be(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ne={},Oe=0;
function Pe(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=sb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof I||(a="object"==typeof a&&a.K?a.J():String(a),qb.test(a)||(a="about:invalid#zClosurez"),a=new I(nb,a)),b=pb(a),"about:invalid#zClosurez"===b?a="":(b instanceof vb?a=b:(d="object"==typeof b,a=null,d&&b.ga&&(a=b.da()),b=fb(d&&b.K?b.J():String(b)),a=xb(b,a)),a instanceof vb&&a.constructor===vb&&a.h===wb?a=a.f:(wa(a),a="type_error:SafeHtml"),a=encodeURIComponent(String(kd(a.toString())))),/^[\s\xa0]*$/.test(a)||
(a=ic("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ie(a,b,"POST",e,d):R("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ie(a,b,"GET","",d):Qe(a,b)||Re(a,b))}
function Qe(a,b){if(!be("web_use_beacon_api_for_ad_click_server_pings"))return!1;if(be("use_sonic_js_library_for_v4_support")){a:{try{var c=new Fa({url:a});if(c.h&&c.g||c.i){var d=K(L(5,a));var e=!(!d||!d.endsWith("/aclk")||"1"!==Ib(a,"ri"));break a}}catch(f){}e=!1}if(!e)return!1}else if(e=K(L(5,a)),!e||-1==e.indexOf("/aclk")||"1"!==Ib(a,"ae")||"1"!==Ib(a,"act"))return!1;return Se(a)?(b&&b(),!0):!1}
function Se(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Re(a,b){var c=new Image,d=""+Oe++;Ne[d]=c;c.onload=c.onerror=function(){b&&Ne[d]&&b();delete Ne[d]};
c.src=a}
;var Te=z("ytPubsubPubsubInstance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.N;P.prototype.publish=P.prototype.M;P.prototype.clear=P.prototype.clear;y("ytPubsubPubsubInstance",Te,void 0);var Ue=z("ytPubsubPubsubSubscribedKeys")||{};y("ytPubsubPubsubSubscribedKeys",Ue,void 0);var Ve=z("ytPubsubPubsubTopicToKeys")||{};y("ytPubsubPubsubTopicToKeys",Ve,void 0);var We=z("ytPubsubPubsubIsSynchronous")||{};y("ytPubsubPubsubIsSynchronous",We,void 0);
function Xe(a,b){var c=Ye();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Ue[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{We[a]?f():T(f,0)}catch(g){ie(g)}},void 0);
Ue[d]=!0;Ve[a]||(Ve[a]=[]);Ve[a].push(d);return d}return 0}
function Ze(a){var b=Ye();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),H(a,function(c){b.unsubscribeByKey(c);delete Ue[c]}))}
function $e(a,b){var c=Ye();c&&c.publish.apply(c,arguments)}
function af(a){var b=Ye();if(b)if(b.clear(a),a)bf(a);else for(var c in Ve)bf(c)}
function Ye(){return z("ytPubsubPubsubInstance")}
function bf(a){Ve[a]&&(a=Ve[a],H(a,function(b){Ue[b]&&delete Ue[b]}),a.length=0)}
;var cf=window,V=cf.ytcsi&&cf.ytcsi.now?cf.ytcsi.now:cf.performance&&cf.performance.timing&&cf.performance.now&&cf.performance.timing.navigationStart?function(){return cf.performance.timing.navigationStart+cf.performance.now()}:function(){return(new Date).getTime()};var df=ue("initial_gel_batch_timeout",1E3),ef=Math.pow(2,16)-1,ff=null,gf=0,hf=void 0,jf=0,kf=0,lf=0,mf=!0,nf=z("ytLoggingTransportLogPayloadsQueue_")||{};y("ytLoggingTransportLogPayloadsQueue_",nf,void 0);var of=z("ytLoggingTransportGELQueue_")||new Map;y("ytLoggingTransportGELQueue_",of,void 0);var pf=z("ytLoggingTransportTokensToCttTargetIds_")||{};y("ytLoggingTransportTokensToCttTargetIds_",pf,void 0);
function qf(){U(jf);U(kf);kf=0;hf&&hf.isReady()?(rf(of),"log_event"in nf&&rf(Object.entries(nf.log_event)),of.clear(),delete nf.log_event):sf()}
function sf(){S("web_gel_timeout_cap")&&!kf&&(kf=T(qf,6E4));U(jf);var a=R("LOGGING_BATCH_TIMEOUT",ue("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&mf&&(a=df);jf=T(qf,a)}
function rf(a){var b=hf,c=Math.round(V());a=q(a);for(var d=a.next();!d.done;d=a.next()){var e=q(d.value);d=e.next().value;var f=e.next().value;e=Ya({context:tf(b.f||uf())});e.events=f;(f=pf[d])&&vf(e,d,f);delete pf[d];wf(e,c);xf(b,"log_event",e,{retry:!0,onSuccess:function(){gf=Math.round(V()-c)}});
mf=!1}}
function wf(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=R("EVENT_ID",void 0);if(c){var d=R("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*ef/2));d++;d>ef&&(d=1);Q("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;ff&&gf&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ff,roundtripMs:String(gf)});ff=c;gf=0}}
function vf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var yf=0;y("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++yf},void 0);var zf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Af(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in zf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function Bf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Af.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Af.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Af.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ta=z("ytEventsEventsListeners")||{};y("ytEventsEventsListeners",Ta,void 0);var Cf=z("ytEventsEventsCounter")||{count:0};y("ytEventsEventsCounter",Cf,void 0);
function Df(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Sa(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=ya(e[4])&&ya(d)&&Wa(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Ef=Pa(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function X(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Df(a,b,c,d);if(e)return e;e=++Cf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Af(h);if(!mc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Af(h);
h.currentTarget=a;return c.call(a,h)};
g=he(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ef()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Ta[e]=[a,b,c,g,d];return e}
function Ff(a){a&&("string"==typeof a&&(a=[a]),H(a,function(b){if(b in Ta){var c=Ta[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ef()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Ta[b]}}))}
;var Gf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Hf(a){this.w=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.G=X(window,"mousemove",B(this.H,this));a=B(this.B,this);A(a)&&(a=he(a));this.I=window.setInterval(a,25)}
E(Hf,N);Hf.prototype.H=function(a){void 0===a.f&&Bf(a);var b=a.f;void 0===a.g&&Bf(a);this.f=new dc(b,a.g)};
Hf.prototype.B=function(){if(this.f){var a=Gf();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.w();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
Hf.prototype.o=function(){window.clearInterval(this.I);Ff(this.G)};function If(){}
function Jf(a,b){return Kf(a,1,b)}
;function Lf(){}
u(Lf,If);function Kf(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
Lf.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
Lf.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
va(Lf);Lf.getInstance();var Mf={};
function Nf(a){var b=void 0===a?{}:a;a=void 0===b.Ba?!0:b.Ba;b=void 0===b.Ma?!1:b.Ma;if(null==z("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?C()-Math.max(c,0):-1;y("_lact",c,window);y("_fact",c,window);-1==c&&Of();X(document,"keydown",Of);X(document,"keyup",Of);X(document,"mousedown",Of);X(document,"mouseup",Of);a&&(b?X(window,"touchmove",function(){Pf("touchmove",200)},{passive:!0}):(X(window,"resize",function(){Pf("resize",200)}),X(window,"scroll",function(){Pf("scroll",200)})));
new Hf(function(){Pf("mouse",100)});
X(document,"touchstart",Of,{passive:!0});X(document,"touchend",Of,{passive:!0})}}
function Pf(a,b){Mf[a]||(Mf[a]=!0,Jf(function(){Of();Mf[a]=!1},b))}
function Of(){null==z("_lact",window)&&Nf();var a=C();y("_lact",a,window);-1==z("_fact",window)&&y("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function Qf(){var a=z("_lact",window);return null==a?-1:Math.max(C()-a,0)}
;var Rf=z("ytLoggingGelSequenceIdObj_")||{};y("ytLoggingGelSequenceIdObj_",Rf,void 0);
function Sf(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||V());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:Qf())};S("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,Rf[b]=b in Rf?Rf[b]+1:0,a.sequence={index:Rf[b],groupKey:b},d.ob&&delete Rf[d.P]);d=d.ca;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),pf[d.token]=a,a=d.token);d=of.get(a)||[];of.set(a,d);d.push(e);c&&(hf=new c);c=ue("web_logging_max_batch")||100;e=
V();d.length>=c?qf():10<=e-lf&&(sf(),lf=e)}
;function Tf(){for(var a={},b=q(Object.entries(me(R("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=q(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Uf(){return"INNERTUBE_API_KEY"in $d&&"INNERTUBE_API_VERSION"in $d}
function uf(){return{innertubeApiKey:R("INNERTUBE_API_KEY",void 0),innertubeApiVersion:R("INNERTUBE_API_VERSION",void 0),Ca:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Da:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Fa:R("INNERTUBE_CONTEXT_HL",void 0),Ea:R("INNERTUBE_CONTEXT_GL",void 0),Ga:R("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ha:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function tf(a){a={client:{hl:a.Fa,gl:a.Ea,clientName:a.Da,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ca}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=R("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=R("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=R("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(a.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,Tf());return a}
function Vf(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.lb||R("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().kb:b=Dc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=R("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return d}
function Wf(a){a=Object.assign({},a);delete a.Authorization;var b=Dc();if(b){var c=new Wc;c.update(R("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;xa(b);void 0===c&&(c=0);if(!Yb){Yb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Xb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Yb[k]&&(Yb[k]=h)}}}c=Xb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Xf(a,b,c,d){bc.set(""+a,b,{la:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Yf(){var a=new Sd;(a=a.isAvailable()?new Yd(a,"yt.innertube"):null)||(a=new Td("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Od(a):null;this.g=document.domain||window.location.hostname}
Yf.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(kd(b))}catch(f){return}else e=escape(b);Xf(a,e,c,this.g)};
Yf.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=bc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Yf.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;bc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Zf=new Yf;function $f(a,b,c,d){if(d)return null;d=Zf.get("nextId",!0)||1;var e=Zf.get("requests",!0)||{};e[d]={method:a,request:b,authState:Wf(c),requestTime:Math.round(V())};Zf.set("nextId",d+1,86400,!0);Zf.set("requests",e,86400,!0);return d}
function ag(a){var b=Zf.get("requests",!0)||{};delete b[a];Zf.set("requests",b,86400,!0)}
function bg(a){var b=Zf.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(V())-d.requestTime)){var e=d.authState,f=Wf(Vf(!1));Wa(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),xf(a,d.method,e,{}));delete b[c]}}Zf.set("requests",b,86400,!0)}}
;function cg(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(q(c)))}
u(cg,Error);function dg(a){var b=this;this.f=null;a?this.f=a:Uf()&&(this.f=uf());Kf(function(){bg(b)},0,5E3)}
dg.prototype.isReady=function(){!this.f&&Uf()&&(this.f=uf());return!!this.f};
function xf(a,b,c,d){!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&je(new cg("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.f)throw b=new cg("innertube xhrclient not ready",b,c,d),ie(b),b.f=0,b;var e={headers:{"Content-Type":"application/json"},method:"POST",A:c,qa:"JSON",O:function(){d.O()},
oa:d.O,onSuccess:function(w,t){if(d.onSuccess)d.onSuccess(t)},
na:function(w){if(d.onSuccess)d.onSuccess(w)},
onError:function(w,t){if(d.onError)d.onError(t)},
rb:function(w){if(d.onError)d.onError(w)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ga;g&&(f=g);g=a.f.Ha||!1;var h=Vf(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ne(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=$f(b,c,h,g))){var n=e.onSuccess,r=e.na;e.onSuccess=function(w,t){ag(l);n(w,t)};
c.na=function(w,t){ag(l);r(w,t)}}try{S("use_fetch_for_op_xhr")?Ee(k,e):(e.method="POST",e.A||(e.A={}),He(k,e))}catch(w){if("InvalidAccessError"==w.name)l&&(ag(l),l=0),je(Error("An extension is blocking network request."));
else throw w;}l&&Kf(function(){bg(a)},0,5E3)}
;function eg(a,b,c){c=void 0===c?{}:c;var d=dg;R("ytLoggingEventsDefaultDisabled",!1)&&dg==dg&&(d=null);Sf(a,b,d,c)}
;var fg=new Set,gg=0;function hg(a){ig(a,"WARNING")}
function ig(a,b,c,d,e){e=void 0===e?{}:e;e.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=e||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;d=window&&window.yterr||!1;if(a&&d&&!(5<=gg)&&(S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),
a)),0!==a.f)){d=a.g;e=a.columnNumber;if(a.args&&a.args.length)for(var f=0,g=0;g<a.args.length;g++){var h=a.args[g],k="params."+g;f+=k.length;if(h)if(Array.isArray(h))for(var l=c,n=0;n<h.length&&!(h[n]&&(f+=jg(n,h[n],k,l),500<f));n++);else if("object"===typeof h)for(l in l=void 0,n=c,h){if(h[l]&&(f+=jg(l,h[l],k,n),500<f))break}else c[k]=String(JSON.stringify(h)).substring(0,500),f+=c[k].length;else c[k]=String(JSON.stringify(h)).substring(0,500),f+=c[k].length;if(500<=f)break}else if(a.hasOwnProperty("params"))if(h=
a.params,"object"===typeof a.params)for(g in k=0,h){if(h[g]&&(f="params."+g,l=String(JSON.stringify(h[g])).substr(0,500),c[f]=l,k+=f.length+l.length,500<k))break}else c.params=String(JSON.stringify(h)).substr(0,500);a=Zb(a);(d=d||a.stack)||(d="Not available");h={stackTrace:d};a.fileName&&(h.filename=a.fileName);g=a.lineNumber.toString();isNaN(g)||!e||isNaN(e)||(h.lineNumber=Number(g),h.columnNumber=Number(e),g=g+":"+e);window.yterr&&A(window.yterr)&&(a.params=c,window.yterr(a));if(!(fg.has(a.message)||
0<=d.indexOf("/YouTubeCenter.js")||0<=d.indexOf("/mytube.js"))){if(S("kevlar_gel_error_routing")){k=b;e={level:"ERROR_LEVEL_UNKNOWN",message:a.message};"ERROR"===k?e.level="ERROR_LEVEL_ERROR":"WARNING"===k&&(e.level="ERROR_LEVEL_WARNNING");h={isObfuscated:!0,browserStackInfo:h};k={pageUrl:window.location.href,kvPairs:[]};f=q(Object.keys(c));for(l=f.next();!l.done;l=f.next())l=l.value,k.kvPairs.push({key:"client."+l,value:String(c[l])});eg("clientError",{errorMetadata:k,stackTrace:h,logMessage:e});
qf()}b={Xa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:g,level:b,"client.name":c.name},A:{url:R("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(b["client.version"]=c.version);if(b.A){d&&(b.A.stack=d);d=q(Object.keys(c));for(e=d.next();!e.done;e=d.next())e=e.value,b.A["client."+e]=c[e];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=q(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,b.A[e]=c[e];c=R("SERVER_NAME",void 0);
d=R("SERVER_VERSION",void 0);c&&d&&(b.A["server.name"]=c,b.A["server.version"]=d)}He(R("ECATCHER_REPORT_HOST","")+"/error_204",b);fg.add(a.message);gg++}}}
function jg(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function kg(a,b,c,d,e,f){ig(a,void 0===b?"ERROR":b,c,d,f)}
;var lg=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};y("yt.msgs_",lg,void 0);function mg(a){Zd(lg,arguments)}
;function ng(a){a&&(a.dataset?a.dataset[og("loaded")]="true":a.setAttribute("data-loaded","true"))}
function pg(a,b){return a?a.dataset?a.dataset[og(b)]:a.getAttribute("data-"+b):null}
var qg={};function og(a){return qg[a]||(qg[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var rg=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,sg=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function tg(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(rg,""),c=c.replace(sg,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ug(a,b,c)}
function ug(a,b,c){c=void 0===c?null:c;var d=vg(a),e=document.getElementById(d),f=e&&pg(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Xe(d,b),b=""+za(b),wg[b]=f),g||(e=xg(a,d,function(){pg(e,"loaded")||(ng(e),$e(d),T(Ea(af,d),0))},c)))}
function xg(a,b,c,d){d=void 0===d?null:d;var e=jc(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);zb(e,nc(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function yg(a){a=vg(a);var b=document.getElementById(a);b&&(af(a),b.parentNode.removeChild(b))}
function zg(a,b){if(a&&b){var c=""+za(b);(c=wg[c])&&Ze(c)}}
function vg(a){var b=document.createElement("a");yb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Bb(a)}
var wg={};var Ag=[],Bg=!1;function Cg(){if("1"!=Ra(ae(),"args","privembed")){var a=function(){Bg=!0;"google_ad_status"in window?Q("DCLKSTAT",1):Q("DCLKSTAT",2)};
tg("//static.doubleclick.net/instream/ad_status.js",a);Ag.push(Jf(function(){Bg||"google_ad_status"in window||(zg("//static.doubleclick.net/instream/ad_status.js",a),Bg=!0,Q("DCLKSTAT",3))},5E3))}}
function Dg(){return parseInt(R("DCLKSTAT",0),10)}
;function Eg(){this.g=!1;this.f=null}
Eg.prototype.initialize=function(a,b,c,d,e,f){var g=this;f=void 0===f?!1:f;b?(this.g=!0,tg(b,function(){g.g=!1;window.botguard?Fg(g,c,d,f):(yg(b),hg(new cg("Unable to load Botguard","from "+b)))},e)):a&&(eval(a),window.botguard?Fg(this,c,d,f):hg(Error("Unable to load Botguard from JS")))};
function Fg(a,b,c,d){if(d)try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:ua)}catch(e){hg(e)}else{try{a.f=new window.botguard.bg(b)}catch(e){hg(e)}c&&c(b)}}
Eg.prototype.dispose=function(){this.f=null};var Gg=new Eg,Hg=!1,Ig=0,Jg="";function Kg(a){S("botguard_periodic_refresh")?Ig=V():S("botguard_always_refresh")&&(Jg=a)}
function Lg(a){if(a){if(Gg.g)return!1;if(S("botguard_periodic_refresh"))return 72E5<V()-Ig;if(S("botguard_always_refresh"))return Jg!=a}else return!1;return!Hg}
function Mg(){return!!Gg.f}
function Ng(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Gg.f?Gg.f.invoke(void 0,void 0,a):null}
;var Og=C().toString();
function Pg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=C();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Og)for(a=1,b=0;b<Og.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Og.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Qg=z("ytLoggingDocDocumentNonce_")||Pg();y("ytLoggingDocDocumentNonce_",Qg,void 0);var Rg=1;function Sg(a){this.f=a}
function Tg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,void 0!==a.f.veCounter&&(b.veCounter=a.f.veCounter),void 0!==a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=Tg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
Sg.prototype.toString=function(){return JSON.stringify(Tg(this))};function Ug(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Vg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Wg(a){return R(Vg(void 0===a?0:a),void 0)}
y("yt_logging_screen.getRootVeType",Wg,void 0);function Xg(){var a=Wg(0),b;a?b=new Sg({veType:a,youtubeData:void 0}):b=null;return b}
function Yg(){var a=R("csn-to-ctt-auth-info");a||(a={},Q("csn-to-ctt-auth-info",a));return a}
function Zg(a){a=void 0===a?0:a;var b=R(Ug(a));if(!b&&!R("USE_CSN_FALLBACK",!0))return null;b||0!=a||(S("kevlar_client_side_screens")||S("c3_client_side_screens")?b="UNDEFINED_CSN":b=R("EVENT_ID"));return b?b:null}
y("yt_logging_screen.getCurrentCsn",Zg,void 0);function $g(a,b,c){var d=Yg();(c=Zg(c))&&delete d[c];b&&(d[a]=b)}
function ah(a){return Yg()[a]}
y("yt_logging_screen.getCttAuthInfo",ah,void 0);function bh(a,b,c,d){c=void 0===c?0:c;if(a!==R(Ug(c))||b!==R(Vg(c)))if($g(a,d,c),Q(Ug(c),a),Q(Vg(c),b),0==c||S("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&Sf("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Qg,clientScreenNonce:a},dg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
y("yt_logging_screen.setCurrentScreen",bh,void 0);function ch(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=K(L(3,window.location.href));g&&f.push(g);g=K(L(3,d));if(0<=Ga(f,g)||!g&&0==d.lastIndexOf("/",0))if(S("autoescape_tempdata_url")&&(f=document.createElement("a"),yb(f,d),d=f.href),d){g=d.match(Db);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:Zg()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Bb(d).toString(36),e=e?Fb(e):"",Xf(b,e,k||5))}else k=b,e="ST-"+Bb(d).toString(36),k=k?Fb(k):"",Xf(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var r=void 0===r?window:r;c=r.location;a=Gb(a,l)+n;a=a instanceof I?a:rb(a);c.href=pb(a)}return!0}
;function dh(a,b){this.version=a;this.args=b}
;function eh(a,b){this.topic=a;this.f=b}
eh.prototype.toString=function(){return this.topic};var fh=z("ytPubsub2Pubsub2Instance")||new P;P.prototype.subscribe=P.prototype.subscribe;P.prototype.unsubscribeByKey=P.prototype.N;P.prototype.publish=P.prototype.M;P.prototype.clear=P.prototype.clear;y("ytPubsub2Pubsub2Instance",fh,void 0);var gh=z("ytPubsub2Pubsub2SubscribedKeys")||{};y("ytPubsub2Pubsub2SubscribedKeys",gh,void 0);var hh=z("ytPubsub2Pubsub2TopicToKeys")||{};y("ytPubsub2Pubsub2TopicToKeys",hh,void 0);var ih=z("ytPubsub2Pubsub2IsAsync")||{};y("ytPubsub2Pubsub2IsAsync",ih,void 0);
y("ytPubsub2Pubsub2SkipSubKey",null,void 0);function jh(a,b){var c=kh();c&&c.publish.call(c,a.toString(),a,b)}
function lh(a){var b=mh,c=kh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(gh[d])try{if(f&&b instanceof eh&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.F){var l=new h;h.F=l.version}var n=h.F}catch(r){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Na(k.args))}catch(r){throw r.message="yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+r.message,r;}a.call(window,f)}catch(r){ie(r)}},ih[b.toString()]?z("yt.scheduler.instance")?Jf(g):T(g,0):g())});
gh[d]=!0;hh[b.toString()]||(hh[b.toString()]=[]);hh[b.toString()].push(d);return d}
function nh(){var a=oh,b=lh(function(c){a.apply(void 0,arguments);ph(b)});
return b}
function ph(a){var b=kh();b&&("number"===typeof a&&(a=[a]),H(a,function(c){b.unsubscribeByKey(c);delete gh[c]}))}
function kh(){return z("ytPubsub2Pubsub2Instance")}
;function qh(a){dh.call(this,1,arguments);this.csn=a}
u(qh,dh);var mh=new eh("screen-created",qh),rh=[],sh=0;function th(a,b,c){var d=S("use_default_events_client")?void 0:dg;b={csn:a,parentVe:Tg(b),childVes:Ja(c,function(f){return Tg(f)})};
c=q(c);for(var e=c.next();!e.done;e=c.next())e=Tg(e.value),(Ua(e)||!e.trackingParams&&!e.veType)&&kg(Error("Child VE logged with no data"),"WARNING");c={ca:ah(a),P:a};"UNDEFINED_CSN"==a?uh("visualElementAttached",b,c):d?Sf("visualElementAttached",b,d,c):eg("visualElementAttached",b,c)}
function uh(a,b,c){rh.push({payloadName:a,payload:b,options:c});sh||(sh=nh())}
function oh(a){if(rh){for(var b=q(rh),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Sf(c.payloadName,c.payload,null,c.options));rh.length=0}sh=0}
;function vh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Xa(b);this.assets=a.assets||{};this.attrs=a.attrs||Xa(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
vh.prototype.clone=function(){var a=new vh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==wa(c)?a[b]=Xa(c):a[b]=c}return a};function wh(){N.call(this);this.f=[]}
u(wh,N);wh.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.mb)}N.prototype.o.call(this)};var xh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function yh(a){a=a||"";if(window.spf){var b=a.match(xh);spf.style.load(a,b?b[1]:"",void 0)}else zh(a)}
function zh(a){var b=Ah(a),c=document.getElementById(b),d=c&&pg(c,"loaded");d||c&&!d||(c=Bh(a,b,function(){pg(c,"loaded")||(ng(c),$e(b),T(Ea(af,b),0))}))}
function Bh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=nc(a);d.rel="stylesheet";d.href=db(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ah(a){var b=jc(document,"A");yb(b,new I(nb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Bb(a)}
;function Ch(a,b,c,d){N.call(this);var e=this;this.m=this.X=a;this.U=b;this.w=!1;this.api={};this.V=this.G=null;this.H=new P;uc(this,Ea(vc,this.H));this.j={};this.R=this.W=this.h=this.ba=this.f=null;this.I=!1;this.l=this.B=null;this.Y={};this.ta=["onReady"];this.aa=null;this.ja=NaN;this.S={};this.i=d;Dh(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ja.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.Ka.bind(this));this.Z("onAdAnnounce",this.va.bind(this));this.ua=new wh(this);uc(this,Ea(vc,this.ua));
this.T=0;c?this.T=T(function(){e.loadNewVideoConfig(c)},0):d&&(Eh(this),Fh(this))}
u(Ch,N);m=Ch.prototype;m.getId=function(){return this.U};
m.loadNewVideoConfig=function(a){if(!this.g){this.T&&(U(this.T),this.T=0);a instanceof vh||(a=new vh(a));this.ba=a;this.f=a.clone();Eh(this);this.W||(this.W=Gh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.m.style.width=xc(Number(a)||a);if(a=this.f.attrs.height)this.m.style.height=xc(Number(a)||a);Fh(this);this.w&&Hh(this)}};
function Eh(a){var b;a.i?b=a.i.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.m.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
m.ya=function(){return this.ba};
function Hh(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Ih(a){var b=!0,c=Jh(a);c&&a.f&&(a=Kh(a),b=pg(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function Fh(a){if(!a.g&&!a.I){var b=Ih(a);if(b&&"html5"==(Jh(a)?"html5":null))a.R="html5",a.w||Lh(a);else if(Mh(a),a.R="html5",b&&a.l)a.X.appendChild(a.l),Lh(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.B=function(){c=!0;if(a.i)var d=a.i.serializedExperimentFlags;else a.f&&a.f.args&&(d=a.f.args.fflags);d="true"==ke(d||"").player_bootstrap_method?z("yt.player.Application.createAlternate")||z("yt.player.Application.create"):z("yt.player.Application.create");var e=a.f?a.f.clone():void 0;d(a.X,e,a.i);Lh(a)};
a.I=!0;b?a.B():(tg(Kh(a),a.B),(b=a.i?a.i.cssUrl:a.f.assets.css)&&yh(b),Nh(a)&&!c&&y("yt.player.Application.create",null,void 0))}}}
function Jh(a){var b=fc(a.h);!b&&a.m&&a.m.querySelector&&(b=a.m.querySelector("#"+a.h));return b}
function Lh(a){if(!a.g){var b=Jh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.I=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Oh(a)):a.ja=T(function(){Lh(a)},50)}}
function Oh(a){Dh(a);a.w=!0;var b=Jh(a);b.addEventListener&&(a.G=Ph(a,b,"addEventListener"));b.removeEventListener&&(a.V=Ph(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Ph(a,b,e))}for(var f in a.j)a.G(f,a.j[f]);Hh(a);a.W&&a.W(a.api);a.H.M("onReady",a.api)}
function Ph(a,b,c){var d=b[c];return function(){try{return a.aa=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.aa=e,je(e))}}}
function Dh(a){a.w=!1;if(a.V)for(var b in a.j)a.V(b,a.j[b]);for(var c in a.S)U(parseInt(c,10));a.S={};a.G=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Oa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.za.bind(a);a.api.getPlayerType=a.Aa.bind(a);a.api.getCurrentVideoConfig=a.ya.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ia.bind(a)}
m.Ia=function(){return this.w};
m.Z=function(a,b){var c=this,d=Gh(this,b);if(d){if(!(0<=Ga(this.ta,a)||this.j[a])){var e=Qh(this,a);this.G&&this.G(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.w&&T(function(){d(c.api)},0)}};
m.Oa=function(a,b){if(!this.g){var c=Gh(this,b);c&&Id(this.H,a,c)}};
function Gh(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=z(b);d&&d.apply(x,arguments)};
a.Y[b]=c}return c?c:null}
function Qh(a,b){var c="ytPlayer"+b+a.U;a.j[b]=c;x[c]=function(d){var e=T(function(){if(!a.g){a.H.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
Va(a.S,String(e))};
return c}
m.va=function(a){$e("a11y-announce",a)};
m.Ja=function(a){$e("WATCH_LATER_VIDEO_ADDED",a)};
m.Ka=function(a){$e("WATCH_LATER_VIDEO_REMOVED",a)};
m.Aa=function(){return this.R||(Jh(this)?"html5":null)};
m.za=function(){return this.aa};
function Mh(a){a.cancel();Dh(a);a.R=null;a.f&&(a.f.loaded=!1);var b=Jh(a);b&&(Ih(a)||!Nh(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&zg(Kh(this),this.B);U(this.ja);this.I=!1};
m.o=function(){Mh(this);if(this.l&&this.f&&this.l.destroy)try{this.l.destroy()}catch(b){ie(b)}this.Y=null;for(var a in this.j)x[this.j[a]]=null;this.ba=this.f=this.api=null;delete this.X;delete this.m;N.prototype.o.call(this)};
function Nh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Kh(a){return a.i?a.i.jsUrl:a.f.assets.js}
;var Rh={},Sh="player_uid_"+(1E9*Math.random()>>>0);function Th(a){delete Rh[a.getId()]}
;function Uh(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Vh(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});a:{if((b=a.mediaContentUrl)&&(b=/\/([ve]|embed)\/([^#?]+)/.exec(b))&&b[2]){b=b[2];break a}b=null}a.videoId=b;return Wh(a)}
function Wh(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Xh(a,b,c,d){if(ya(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Yh(a){a=void 0===a?!1:a;N.call(this);this.f=new P(a);uc(this,Ea(vc,this.f))}
E(Yh,N);Yh.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Yh.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function Zh(a,b,c){Yh.call(this);this.h=a;this.i=b;this.l=c}
u(Zh,Yh);function $h(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(kd(a),d.i))}}
Zh.prototype.o=function(){this.i=this.h=null;Yh.prototype.o.call(this)};function ai(a){N.call(this);this.f=a;this.f.subscribe("command",this.ra,this);this.h={};this.j=!1}
u(ai,N);m=ai.prototype;m.start=function(){this.j||this.g||(this.j=!0,$h(this.f,"RECEIVING"))};
m.ra=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=B(this.Qa,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&bi(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=ci(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=di(a,c))&&this.j&&!this.g&&$h(this.f,a,c))}}};
m.Qa=function(a,b){this.j&&!this.g&&$h(this.f,a,this.ea(a,b))};
m.ea=function(a,b){if(null!=b)return{value:b}};
function bi(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.o=function(){var a=this.f;a.g||Id(a.f,"command",this.ra,this);this.f=null;for(var b in this.h)bi(this,b);N.prototype.o.call(this)};function ei(a,b){ai.call(this,b);this.i=a;this.start()}
u(ei,ai);ei.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
ei.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function ci(a,b){switch(a){case "loadVideoById":return b=Wh(b),[b];case "cueVideoById":return b=Wh(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Xh(b),[b];case "cuePlaylist":return b=Xh(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function di(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ei.prototype.ea=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ai.prototype.ea.call(this,a,b)};
ei.prototype.o=function(){ai.prototype.o.call(this);delete this.i};function fi(a,b,c){N.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.w="*";this.i=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.w=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ga(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
u(fi,N);fi.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.w)}catch(e){je(e)}}};
fi.prototype.o=function(){window.removeEventListener("message",this.m);N.prototype.o.call(this)};function gi(){var a=this.g=new fi(!!R("WIDGET_ID_ENFORCE")),b=B(this.Na,this);a.j=b;a.l=null;this.g.channel="widget";if(a=R("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=gi.prototype;m.Na=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,hi(this,a)),this.j[a]=!0)):this.ma(a,b,c)};
m.ma=function(){};
function hi(a,b){return B(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.xa=function(){this.l=!0;this.sendMessage("initialDelivery",this.fa());this.sendMessage("onReady");H(this.i,this.sa,this);this.i=[]};
m.fa=function(){return null};
function ii(a,b){a.sendMessage("infoDelivery",b)}
m.sa=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.sa({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function ji(a){gi.call(this);this.f=a;this.h=[];this.addEventListener("onReady",B(this.La,this));this.addEventListener("onVideoProgress",B(this.Ua,this));this.addEventListener("onVolumeChange",B(this.Va,this));this.addEventListener("onApiChange",B(this.Pa,this));this.addEventListener("onPlaybackQualityChange",B(this.Ra,this));this.addEventListener("onPlaybackRateChange",B(this.Sa,this));this.addEventListener("onStateChange",B(this.Ta,this));this.addEventListener("onWebglSettingsChanged",B(this.Wa,
this))}
u(ji,gi);m=ji.prototype;m.ma=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Uh(a)){var d=b;if(ya(d[0])&&!Array.isArray(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=Wh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=Vh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Xh.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);Uh(a)&&ii(this,this.fa())}};
m.La=function(){var a=B(this.xa,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.fa=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ma(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=C()/1E3;return b};
m.Ta=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());ii(this,a)};
m.Ra=function(a){ii(this,{playbackQuality:a})};
m.Sa=function(a){ii(this,{playbackRate:a})};
m.Pa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Va=function(){ii(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Ua=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:C()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());ii(this,a)};
m.Wa=function(){var a={sphericalProperties:this.f.getSphericalProperties()};ii(this,a)};
m.dispose=function(){gi.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function ki(a,b,c){N.call(this);this.f=a;this.i=c;this.j=X(window,"message",B(this.l,this));this.h=new Zh(this,a,b);uc(this,Ea(vc,this.h))}
u(ki,N);ki.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
ki.prototype.o=function(){Ff(this.j);this.f=null;N.prototype.o.call(this)};function li(){var a=Xa(mi),b;return xd(new O(function(c,d){a.onSuccess=function(e){xe(e)?c(e):d(new ni("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new ni("Unknown request error","net.unknown",e))};
a.O=function(e){d(new ni("Request timed out","net.timeout",e))};
b=He("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof yd&&b.abort();
return vd(c)})}
function ni(a,b){G.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
u(ni,G);function oi(){this.g=0;this.f=null}
oi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),qd(a)?a:pi(a)):2===this.g&&b?(a=b.call(c,this.f),qd(a)?a:qi(a)):this};
oi.prototype.getValue=function(){return this.f};
oi.prototype.$goog_Thenable=!0;function qi(a){var b=new oi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function pi(a){var b=new oi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function ri(a){G.call(this,a.message||a.description||a.name);this.isMissing=a instanceof si;this.isTimeout=a instanceof ni&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof yd}
u(ri,G);ri.prototype.name="BiscottiError";function si(){G.call(this,"Biscotti ID is missing from server")}
u(si,G);si.prototype.name="BiscottiMissingError";var mi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},ti=null;function de(){if("1"===Ra(ae(),"args","privembed"))return vd(Error("Biscotti ID is not available in private embed mode"));ti||(ti=xd(li().then(ui),function(a){return vi(2,a)}));
return ti}
function ui(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new si;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new si;a=a.id;ee(a);ti=pi(a);wi(18E5,2);return a}
function vi(a,b){var c=new ri(b);ee("");ti=qi(c);0<a&&wi(12E4,a-1);throw c;}
function wi(a,b){T(function(){xd(li().then(ui,function(c){return vi(b,c)}),ua)},a)}
function xi(){try{var a=z("yt.ads.biscotti.getId_");return a?a():de()}catch(b){return vd(b)}}
;function yi(a){if("1"!==Ra(ae(),"args","privembed")){a&&ce();try{xi().then(function(){},function(){}),T(yi,18E5)}catch(b){ie(b)}}}
;var Y=z("ytglobal.prefsUserPrefsPrefs_")||{};y("ytglobal.prefsUserPrefsPrefs_",Y,void 0);function zi(){this.f=R("ALT_PREF_COOKIE_NAME","PREF");var a=bc.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Y[d]=c.toString())}}}
m=zi.prototype;m.get=function(a,b){Ai(a);Bi(a);var c=void 0!==Y[a]?Y[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){Ai(a);Bi(a);if(null==b)throw Error("ExpectedNotNull");Y[a]=b.toString()};
m.remove=function(a){Ai(a);Bi(a);delete Y[a]};
m.save=function(){Xf(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Y)delete Y[a]};
m.dump=function(){var a=[],b;for(b in Y)a.push(b+"="+encodeURIComponent(String(Y[b])));return a.join("&")};
function Bi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ai(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Ci(a){a=void 0!==Y[a]?Y[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
va(zi);function Di(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Ei(a)||c.some(function(e){return!Ei(e)}))throw Error("Only objects may be merged.");
c=q(c);for(d=c.next();!d.done;d=c.next())Fi(a,d.value);return a}
function Fi(a,b){for(var c in b)if(Ei(b[c])){if(c in a&&!Ei(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Fi(a[c],b[c])}else if(Gi(b[c])){if(c in a&&!Gi(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Hi(a[c],b[c])}else a[c]=b[c];return a}
function Hi(a,b){for(var c=q(b),d=c.next();!d.done;d=c.next())d=d.value,Ei(d)?a.push(Fi({},d)):Gi(d)?a.push(Hi([],d)):a.push(d);return a}
function Ei(a){return"object"===typeof a&&!Array.isArray(a)}
function Gi(a){return"object"===typeof a&&Array.isArray(a)}
;function Ii(a,b){dh.call(this,1,arguments)}
u(Ii,dh);function Ji(a,b){dh.call(this,1,arguments)}
u(Ji,dh);var Ki=new eh("aft-recorded",Ii),Li=new eh("timing-sent",Ji);var Mi=window;function Ni(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Oi=Mi.performance||Mi.mozPerformance||Mi.msPerformance||Mi.webkitPerformance||new Ni;var Pi=!1;B(Oi.clearResourceTimings||Oi.webkitClearResourceTimings||Oi.mozClearResourceTimings||Oi.msClearResourceTimings||Oi.oClearResourceTimings||ua,Oi);function Qi(a){var b=Ri(a);if(b.aft)return b.aft;a=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Si(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ti(a){a=Si(a);a.info||(a.info={});return a.info}
function Ri(a){a=Si(a);a.tick||(a.tick={});return a.tick}
function Ui(a){var b=Si(a).nonce;b||(b=Pg(),Si(a).nonce=b);return b}
function Vi(a){var b=Ri(a||""),c=Qi(a);c&&!Pi&&(jh(Ki,new Ii(Math.round(c-b._start),a)),Pi=!0)}
;function Wi(){var a=z("ytcsi.debug");a||(a=[],y("ytcsi.debug",a,void 0),y("ytcsi.reference",{},void 0));return a}
function Xi(a){a=a||"";var b=z("ytcsi.reference");b||(Wi(),b=z("ytcsi.reference"));if(b[a])return b[a];var c=Wi(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Yi=z("ytLoggingLatencyUsageStats_")||{};y("ytLoggingLatencyUsageStats_",Yi,void 0);function Zi(){this.f=0}
function $i(){Zi.instance||(Zi.instance=new Zi);return Zi.instance}
Zi.prototype.tick=function(a,b,c){aj(this,"tick_"+a+"_"+b)||eg("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Zi.prototype.info=function(a,b){var c=Object.keys(a).join("");aj(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,eg("latencyActionInfo",a))};
Zi.prototype.span=function(a,b){var c=Object.keys(a).join("");aj(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,eg("latencyActionSpan",a))};
function aj(a,b){Yi[b]=Yi[b]||{count:0};var c=Yi[b];c.count++;c.time=V();a.f||(a.f=Kf(function(){var d=V(),e;for(e in Yi)Yi[e]&&6E4<d-Yi[e].time&&delete Yi[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new cg("CSI data exceeded logging limit with key",b),0===b.indexOf("info")?hg(c):ig(c)),!0):!1}
;var Z={},bj=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid="requestIds",Z.GetBrowse_rid=
"requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",Z.ncnp="webInfo.nonPreloadedNodeCount",
Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",Z.aq="tvInfo.appQuality",Z.br_trs="tvInfo.bedrockTriggerState",
Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",Z.GetSettings_rid="requestIds",Z.GetTrending_rid=
"requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),cj="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),dj={},ej=(dj.ccs="CANARY_STATE_",dj.mver="MEASUREMENT_VERSION_",dj.pis="PLAYER_INITIALIZED_STATE_",
dj.yt_pt="LATENCY_PLAYER_",dj.pa="LATENCY_ACTION_",dj.yt_vst="VIDEO_STREAM_TYPE_",dj),fj="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");function gj(a){return!!R("FORCE_CSI_ON_GEL",!1)||S("csi_on_gel")||!!Si(a).useGel}
function hj(a){a=Si(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function ij(a,b,c){if(null!==b)if(Ti(c)[a]=b,gj(c)){var d=b;b=hj(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a in bj){if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}b=bj[a];0<=Ga(cj,b)&&(d=!!d);a in ej&&"string"===typeof d&&(d=ej[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=Di({},e)}else 0<=Ga(fj,a)||hg(new cg("Unknown label logged with GEL CSI",
a)),f=void 0;f&&gj(c)&&(b=Xi(c||""),Di(b.info,f),b=hj(c),"gelInfos"in b||(b.gelInfos={}),Di(b.gelInfos,f),c=Ui(c),$i().info(f,c))}else Xi(c||"").info[a]=b}
function jj(a,b,c){var d=Ri(c);if(S("use_first_tick")&&kj(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Oi.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Oi.mark(e))}e=b||V();d[a]=e;e=hj(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||V();if(gj(c)){Xi(c||"").tick[a]=b||V();e=Ui(c);if("_start"===a){var f=$i();aj(f,"baseline_"+e)||eg("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else $i().tick(a,e,b);Vi(c);e=!0}else e=!1;if(!e){if(!z("yt.timing."+(c||"")+"pingSent_")&&
(f=R((c||"")+"TIMING_ACTION",void 0),e=Ri(c),z("ytglobal.timing"+(c||"")+"ready_")&&f&&kj("_start")&&Qi(c)))if(Vi(c),c)lj(c);else{f=!0;var g=R("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&lj(c)}Xi(c||"").tick[a]=b||V()}return d[a]}
function kj(a,b){var c=Ri(b);return a in c}
function lj(a){if(!gj(a)){var b=Ri(a),c=Ti(a),d=b._start,e=R("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:R((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Qi(a);var h=Ri(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Ti(a).yt_pvis&&"youtube"===e&&(ij("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=V();n={};e=[];for(var r in b)"_"!==r.charAt(0)&&(k=Math.round(b[r]-d),n[r]=k,e.push(r+"."+k));f.rt=
e.join(",");b=!!c.ap;S("debug_csi_data")&&(c=z("yt.timing.csiData"),c||(c=[],D("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var w in f)f.hasOwnProperty(w)&&(c+="&"+w+"="+f[w]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var t=void 0===t?"":t;Se(f,t)||Pe(f,void 0,void 0,void 0,t)}else Pe(f);y("yt.timing."+(a||"")+"pingSent_",!0,void 0);jh(Li,new Ji(n.aft+(Number(g)||0),a))}}
if(S("overwrite_polyfill_on_logging_lib_loaded")){var mj=window;mj.ytcsi&&(mj.ytcsi.info=ij,mj.ytcsi.tick=jj)};var nj=null,oj=null,pj=null,qj={};function rj(a){var b=a.id;a=a.ve_type;var c=Rg++;a=new Sg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});qj[b]=a;b=Zg();c=Xg();b&&c&&th(b,c,[a])}
function sj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(bh(b,a),a=Xg()))for(var c in qj){var d=qj[c];d&&th(b,a,[d])}}
function tj(a){qj[a.id]=new Sg({trackingParams:a.tracking_params})}
function uj(a){var b=Zg(),c=qj[a.id];if(b&&c){a=S("use_default_events_client")?void 0:dg;c={csn:b,ve:Tg(c),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var d={ca:ah(b),P:b};"UNDEFINED_CSN"==b?uh("visualElementGestured",c,d):a?Sf("visualElementGestured",c,a,d):eg("visualElementGestured",c,d)}}
function vj(a){a=a.ids;var b=Zg();if(b)for(var c=0;c<a.length;c++){var d=qj[a[c]];if(d){var e=b,f=S("use_default_events_client")?void 0:dg;d={csn:e,ve:Tg(d),eventType:1};var g={ca:ah(e),P:e};"UNDEFINED_CSN"==e?uh("visualElementShown",d,g):f?Sf("visualElementShown",d,f,g):eg("visualElementShown",d,g)}}}
;y("yt.setConfig",Q,void 0);y("yt.config.set",Q,void 0);y("yt.setMsg",mg,void 0);y("yt.msgs.set",mg,void 0);y("yt.logging.errors.log",kg,void 0);
y("writeEmbed",function(){var a=R("PLAYER_CONFIG",void 0);yi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=R("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);R("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?fc(b):b;var e=Sh+"_"+za(b),f=Rh[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Ch(b,e,a,void 0),Rh[e]=f,$e("player-added",f.api),uc(f,Ea(Th,f)));a=f.api;nj=a;a.addEventListener("onScreenChanged",sj);a.addEventListener("onLogClientVeCreated",rj);a.addEventListener("onLogServerVeCreated",tj);a.addEventListener("onLogVeClicked",uj);a.addEventListener("onLogVesShown",vj);d=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?pj=new ji(a):R("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(oj=new ki(window.parent,d,c),pj=new ei(a,oj.h));
c=R("BG_P",void 0);Lg(c)&&(R("BG_I")||R("BG_IU"))&&(Hg=!0,Gg.initialize(R("BG_I",null),R("BG_IU",null),c,Kg,void 0,!!R("BG_CE",!1)));Cg()},void 0);
y("yt.www.watch.ads.restrictioncookie.spr",function(a){Pe(a+"mac_204?action_fcts=1");return!0},void 0);
var wj=he(function(){jj("ol");var a=zi.getInstance(),b=!!((Ci("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&$c(document.body,"exp-invert-logo"))if(c&&!$c(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!$c(d,"inverted-hdpi")){var e=Yc(d);Zc(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&$c(document.body,"inverted-hdpi")&&ad();b!=c&&(b="f"+(Math.floor(119/31)+1),d=Ci(b)||0,d=c?d|67108864:
d&-67108865,0==d?delete Y[b]:(c=d.toString(16),Y[b]=c.toString()),a.save())}),xj=he(function(){var a=nj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();R("PL_ATT")&&Gg.dispose();a=0;for(var b=Ag.length;a<b;a++){var c=Ag[a];if(!isNaN(c)){var d=z("yt.scheduler.instance.cancelJob");d?d(c):U(c)}}Ag.length=0;yg("//static.doubleclick.net/instream/ad_status.js");Bg=!1;Q("DCLKSTAT",0);wc(pj,oj);if(a=nj)a.removeEventListener("onScreenChanged",sj),a.removeEventListener("onLogClientVeCreated",rj),a.removeEventListener("onLogServerVeCreated",tj),a.removeEventListener("onLogVeClicked",uj),a.removeEventListener("onLogVesShown",
vj),a.destroy();qj={}});
window.addEventListener?(window.addEventListener("load",wj),window.addEventListener("unload",xj)):window.attachEvent&&(window.attachEvent("onload",wj),window.attachEvent("onunload",xj));D("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Mg);D("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||Ng);D("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||Dg);D("yt.player.exports.navigate",z("yt.player.exports.navigate")||ch);
D("yt.util.activity.init",z("yt.util.activity.init")||Nf);D("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||Qf);D("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||Of);}).call(this);
