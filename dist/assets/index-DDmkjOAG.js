function MI(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Fv={exports:{}},pu={},zv={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),UI=Symbol.for("react.portal"),jI=Symbol.for("react.fragment"),FI=Symbol.for("react.strict_mode"),zI=Symbol.for("react.profiler"),BI=Symbol.for("react.provider"),$I=Symbol.for("react.context"),WI=Symbol.for("react.forward_ref"),HI=Symbol.for("react.suspense"),qI=Symbol.for("react.memo"),GI=Symbol.for("react.lazy"),Wm=Symbol.iterator;function KI(t){return t===null||typeof t!="object"?null:(t=Wm&&t[Wm]||t["@@iterator"],typeof t=="function"?t:null)}var Bv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$v=Object.assign,Wv={};function ps(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||Bv}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hv(){}Hv.prototype=ps.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=Wv,this.updater=n||Bv}var Wd=$d.prototype=new Hv;Wd.constructor=$d;$v(Wd,ps.prototype);Wd.isPureReactComponent=!0;var Hm=Array.isArray,qv=Object.prototype.hasOwnProperty,Hd={current:null},Gv={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qv.call(e,r)&&!Gv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Yo,type:t,key:s,ref:o,props:i,_owner:Hd.current}}function QI(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function XI(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qm=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XI(""+t.key):e.toString(36)}function sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case UI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ac(o,0):r,Hm(i)?(n="",t!=null&&(n=t.replace(qm,"$&/")+"/"),sl(i,e,n,"",function(c){return c})):i!=null&&(qd(i)&&(i=QI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Hm(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Ac(s,l);o+=sl(s,e,n,u,i)}else if(u=KI(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Ac(s,l++),o+=sl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Oa(t,e,n){if(t==null)return t;var r=[],i=0;return sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function YI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},ol={transition:null},JI={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Hd};function Qv(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Oa,forEach:function(t,e,n){Oa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oa(t,function(){e++}),e},toArray:function(t){return Oa(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=ps;ee.Fragment=jI;ee.Profiler=zI;ee.PureComponent=$d;ee.StrictMode=FI;ee.Suspense=HI;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JI;ee.act=Qv;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=$v({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Hd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)qv.call(e,u)&&!Gv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Yo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:$I,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BI,_context:t},t.Consumer=t};ee.createElement=Kv;ee.createFactory=function(t){var e=Kv.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:WI,render:t}};ee.isValidElement=qd;ee.lazy=function(t){return{$$typeof:GI,_payload:{_status:-1,_result:t},_init:YI}};ee.memo=function(t,e){return{$$typeof:qI,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};ee.unstable_act=Qv;ee.useCallback=function(t,e){return pt.current.useCallback(t,e)};ee.useContext=function(t){return pt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return pt.current.useEffect(t,e)};ee.useId=function(){return pt.current.useId()};ee.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return pt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};ee.useRef=function(t){return pt.current.useRef(t)};ee.useState=function(t){return pt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return pt.current.useTransition()};ee.version="18.3.1";zv.exports=ee;var F=zv.exports;const Rr=jv(F),ZI=MI({__proto__:null,default:Rr},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eS=F,tS=Symbol.for("react.element"),nS=Symbol.for("react.fragment"),rS=Object.prototype.hasOwnProperty,iS=eS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sS={key:!0,ref:!0,__self:!0,__source:!0};function Xv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rS.call(e,r)&&!sS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tS,type:t,key:s,ref:o,props:i,_owner:iS.current}}pu.Fragment=nS;pu.jsx=Xv;pu.jsxs=Xv;Fv.exports=pu;var y=Fv.exports,gh={},Yv={exports:{}},Ct={},Jv={exports:{}},Zv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,G){var X=B.length;B.push(G);e:for(;0<X;){var ie=X-1>>>1,ce=B[ie];if(0<i(ce,G))B[ie]=G,B[X]=ce,X=ie;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var G=B[0],X=B.pop();if(X!==G){B[0]=X;e:for(var ie=0,ce=B.length,Ce=ce>>>1;ie<Ce;){var fn=2*(ie+1)-1,pn=B[fn],mn=fn+1,gn=B[mn];if(0>i(pn,X))mn<ce&&0>i(gn,pn)?(B[ie]=gn,B[mn]=X,ie=mn):(B[ie]=pn,B[fn]=X,ie=fn);else if(mn<ce&&0>i(gn,X))B[ie]=gn,B[mn]=X,ie=mn;else break e}}return G}function i(B,G){var X=B.sortIndex-G.sortIndex;return X!==0?X:B.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],f=1,p=null,m=3,T=!1,R=!1,P=!1,N=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var G=n(c);G!==null;){if(G.callback===null)r(c);else if(G.startTime<=B)r(c),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(c)}}function D(B){if(P=!1,S(B),!R)if(n(u)!==null)R=!0,Jt(L);else{var G=n(c);G!==null&&Nt(D,G.startTime-B)}}function L(B,G){R=!1,P&&(P=!1,w(v),v=-1),T=!0;var X=m;try{for(S(G),p=n(u);p!==null&&(!(p.expirationTime>G)||B&&!k());){var ie=p.callback;if(typeof ie=="function"){p.callback=null,m=p.priorityLevel;var ce=ie(p.expirationTime<=G);G=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),S(G)}else r(u);p=n(u)}if(p!==null)var Ce=!0;else{var fn=n(c);fn!==null&&Nt(D,fn.startTime-G),Ce=!1}return Ce}finally{p=null,m=X,T=!1}}var j=!1,I=null,v=-1,E=5,x=-1;function k(){return!(t.unstable_now()-x<E)}function C(){if(I!==null){var B=t.unstable_now();x=B;var G=!0;try{G=I(!0,B)}finally{G?A():(j=!1,I=null)}}else j=!1}var A;if(typeof _=="function")A=function(){_(C)};else if(typeof MessageChannel<"u"){var Be=new MessageChannel,Yt=Be.port2;Be.port1.onmessage=C,A=function(){Yt.postMessage(null)}}else A=function(){N(C,0)};function Jt(B){I=B,j||(j=!0,A())}function Nt(B,G){v=N(function(){B(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){R||T||(R=!0,Jt(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var G=3;break;default:G=m}var X=m;m=G;try{return B()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,G){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=m;m=B;try{return G()}finally{m=X}},t.unstable_scheduleCallback=function(B,G,X){var ie=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ie+X:ie):X=ie,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,B={id:f++,callback:G,priorityLevel:B,startTime:X,expirationTime:ce,sortIndex:-1},X>ie?(B.sortIndex=X,e(c,B),n(u)===null&&B===n(c)&&(P?(w(v),v=-1):P=!0,Nt(D,X-ie))):(B.sortIndex=ce,e(u,B),R||T||(R=!0,Jt(L))),B},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(B){var G=m;return function(){var X=m;m=G;try{return B.apply(this,arguments)}finally{m=X}}}})(Zv);Jv.exports=Zv;var oS=Jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aS=F,kt=oS;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e_=new Set,Eo={};function ui(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(Eo[t]=e,t=0;t<e.length;t++)e_.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yh=Object.prototype.hasOwnProperty,lS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gm={},Km={};function uS(t){return yh.call(Km,t)?!0:yh.call(Gm,t)?!1:lS.test(t)?Km[t]=!0:(Gm[t]=!0,!1)}function cS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hS(t,e,n,r){if(e===null||typeof e>"u"||cS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);Qe[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Kd);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Kd);Qe[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hS(e,n,i,r)&&(n=null),r||i===null?uS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=aS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ii=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),vh=Symbol.for("react.profiler"),t_=Symbol.for("react.provider"),n_=Symbol.for("react.context"),Yd=Symbol.for("react.forward_ref"),_h=Symbol.for("react.suspense"),wh=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),r_=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Rc;function Ys(t){if(Rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Rc=e&&e[1]||""}return`
`+Rc+t}var kc=!1;function Cc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ys(t):""}function dS(t){switch(t.tag){case 5:return Ys(t.type);case 16:return Ys("Lazy");case 13:return Ys("Suspense");case 19:return Ys("SuspenseList");case 0:case 2:case 15:return t=Cc(t.type,!1),t;case 11:return t=Cc(t.type.render,!1),t;case 1:return t=Cc(t.type,!0),t;default:return""}}function Eh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case Ii:return"Portal";case vh:return"Profiler";case Xd:return"StrictMode";case _h:return"Suspense";case wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n_:return(t.displayName||"Context")+".Consumer";case t_:return(t._context.displayName||"Context")+".Provider";case Yd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:Eh(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return Eh(t(e))}catch{}}return null}function fS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eh(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function i_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pS(t){var e=i_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=pS(t))}function s_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=i_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Rl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Th(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Xm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o_(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function Ih(t,e){o_(t,e);var n=Er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Rl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function Vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function xh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Js(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Er(n)}}function a_(t,e){var n=Er(e.value),r=Er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Zm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ah(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ma,u_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ma=Ma||document.createElement("div"),Ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var so={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mS=["Webkit","ms","Moz","O"];Object.keys(so).forEach(function(t){mS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),so[e]=so[t]})});function c_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||so.hasOwnProperty(t)&&so[t]?(""+e).trim():e+"px"}function h_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=c_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gS=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rh(t,e){if(e){if(gS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function kh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ph=null,Li=null,Mi=null;function eg(t){if(t=ea(t)){if(typeof Ph!="function")throw Error(U(280));var e=t.stateNode;e&&(e=_u(e),Ph(t.stateNode,t.type,e))}}function d_(t){Li?Mi?Mi.push(t):Mi=[t]:Li=t}function f_(){if(Li){var t=Li,e=Mi;if(Mi=Li=null,eg(t),e)for(t=0;t<e.length;t++)eg(e[t])}}function p_(t,e){return t(e)}function m_(){}var Pc=!1;function g_(t,e,n){if(Pc)return t(e,n);Pc=!0;try{return p_(t,e,n)}finally{Pc=!1,(Li!==null||Mi!==null)&&(m_(),f_())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=_u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Nh=!1;if(Pn)try{var js={};Object.defineProperty(js,"passive",{get:function(){Nh=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Nh=!1}function yS(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var oo=!1,kl=null,Cl=!1,bh=null,vS={onError:function(t){oo=!0,kl=t}};function _S(t,e,n,r,i,s,o,l,u){oo=!1,kl=null,yS.apply(vS,arguments)}function wS(t,e,n,r,i,s,o,l,u){if(_S.apply(this,arguments),oo){if(oo){var c=kl;oo=!1,kl=null}else throw Error(U(198));Cl||(Cl=!0,bh=c)}}function ci(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tg(t){if(ci(t)!==t)throw Error(U(188))}function ES(t){var e=t.alternate;if(!e){if(e=ci(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return tg(i),t;if(s===r)return tg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function v_(t){return t=ES(t),t!==null?__(t):null}function __(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=__(t);if(e!==null)return e;t=t.sibling}return null}var w_=kt.unstable_scheduleCallback,ng=kt.unstable_cancelCallback,TS=kt.unstable_shouldYield,IS=kt.unstable_requestPaint,Ne=kt.unstable_now,SS=kt.unstable_getCurrentPriorityLevel,ef=kt.unstable_ImmediatePriority,E_=kt.unstable_UserBlockingPriority,Pl=kt.unstable_NormalPriority,xS=kt.unstable_LowPriority,T_=kt.unstable_IdlePriority,mu=null,rn=null;function AS(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(mu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:CS,RS=Math.log,kS=Math.LN2;function CS(t){return t>>>=0,t===0?32:31-(RS(t)/kS|0)|0}var Ua=64,ja=4194304;function Zs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Zs(l):(s&=o,s!==0&&(r=Zs(s)))}else o=n&~i,o!==0?r=Zs(o):s!==0&&(r=Zs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function PS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function NS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=PS(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Dh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function I_(){var t=Ua;return Ua<<=1,!(Ua&4194240)&&(Ua=64),t}function Nc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function bS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function S_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var x_,nf,A_,R_,k_,Oh=!1,Fa=[],lr=null,ur=null,cr=null,So=new Map,xo=new Map,Yn=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rg(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(e.pointerId)}}function Fs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ea(e),e!==null&&nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function OS(t,e,n,r,i){switch(e){case"focusin":return lr=Fs(lr,t,e,n,r,i),!0;case"dragenter":return ur=Fs(ur,t,e,n,r,i),!0;case"mouseover":return cr=Fs(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return So.set(s,Fs(So.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,xo.set(s,Fs(xo.get(s)||null,t,e,n,r,i)),!0}return!1}function C_(t){var e=Br(t.target);if(e!==null){var n=ci(e);if(n!==null){if(e=n.tag,e===13){if(e=y_(n),e!==null){t.blockedOn=e,k_(t.priority,function(){A_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function al(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=ea(n),e!==null&&nf(e),t.blockedOn=n,!1;e.shift()}return!0}function ig(t,e,n){al(t)&&n.delete(e)}function VS(){Oh=!1,lr!==null&&al(lr)&&(lr=null),ur!==null&&al(ur)&&(ur=null),cr!==null&&al(cr)&&(cr=null),So.forEach(ig),xo.forEach(ig)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Oh||(Oh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,VS)))}function Ao(t){function e(i){return zs(i,t)}if(0<Fa.length){zs(Fa[0],t);for(var n=1;n<Fa.length;n++){var r=Fa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&zs(lr,t),ur!==null&&zs(ur,t),cr!==null&&zs(cr,t),So.forEach(e),xo.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)C_(n),n.blockedOn===null&&Yn.shift()}var Ui=Fn.ReactCurrentBatchConfig,bl=!0;function LS(t,e,n,r){var i=le,s=Ui.transition;Ui.transition=null;try{le=1,rf(t,e,n,r)}finally{le=i,Ui.transition=s}}function MS(t,e,n,r){var i=le,s=Ui.transition;Ui.transition=null;try{le=4,rf(t,e,n,r)}finally{le=i,Ui.transition=s}}function rf(t,e,n,r){if(bl){var i=Vh(t,e,n,r);if(i===null)zc(t,e,r,Dl,n),rg(t,r);else if(OS(i,t,e,n,r))r.stopPropagation();else if(rg(t,r),e&4&&-1<DS.indexOf(t)){for(;i!==null;){var s=ea(i);if(s!==null&&x_(s),s=Vh(t,e,n,r),s===null&&zc(t,e,r,Dl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Dl=null;function Vh(t,e,n,r){if(Dl=null,t=Zd(r),t=Br(t),t!==null)if(e=ci(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function P_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SS()){case ef:return 1;case E_:return 4;case Pl:case xS:return 16;case T_:return 536870912;default:return 16}default:return 16}}var ir=null,sf=null,ll=null;function N_(){if(ll)return ll;var t,e=sf,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ll=i.slice(t,1<r?1-r:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function za(){return!0}function sg(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?za:sg,this.isPropagationStopped=sg,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},of=Pt(ms),Zo=Te({},ms,{view:0,detail:0}),US=Pt(Zo),bc,Dc,Bs,gu=Te({},Zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bs&&(Bs&&t.type==="mousemove"?(bc=t.screenX-Bs.screenX,Dc=t.screenY-Bs.screenY):Dc=bc=0,Bs=t),bc)},movementY:function(t){return"movementY"in t?t.movementY:Dc}}),og=Pt(gu),jS=Te({},gu,{dataTransfer:0}),FS=Pt(jS),zS=Te({},Zo,{relatedTarget:0}),Oc=Pt(zS),BS=Te({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),$S=Pt(BS),WS=Te({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=Pt(WS),qS=Te({},ms,{data:0}),ag=Pt(qS),GS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QS[t])?!!e[t]:!1}function af(){return XS}var YS=Te({},Zo,{key:function(t){if(t.key){var e=GS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JS=Pt(YS),ZS=Te({},gu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lg=Pt(ZS),e1=Te({},Zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),t1=Pt(e1),n1=Te({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),r1=Pt(n1),i1=Te({},gu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Pt(i1),o1=[9,13,27,32],lf=Pn&&"CompositionEvent"in window,ao=null;Pn&&"documentMode"in document&&(ao=document.documentMode);var a1=Pn&&"TextEvent"in window&&!ao,b_=Pn&&(!lf||ao&&8<ao&&11>=ao),ug=" ",cg=!1;function D_(t,e){switch(t){case"keyup":return o1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function O_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var xi=!1;function l1(t,e){switch(t){case"compositionend":return O_(e);case"keypress":return e.which!==32?null:(cg=!0,ug);case"textInput":return t=e.data,t===ug&&cg?null:t;default:return null}}function u1(t,e){if(xi)return t==="compositionend"||!lf&&D_(t,e)?(t=N_(),ll=sf=ir=null,xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return b_&&e.locale!=="ko"?null:e.data;default:return null}}var c1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c1[t.type]:e==="textarea"}function V_(t,e,n,r){d_(r),e=Ol(e,"onChange"),0<e.length&&(n=new of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var lo=null,Ro=null;function h1(t){q_(t,0)}function yu(t){var e=ki(t);if(s_(e))return t}function d1(t,e){if(t==="change")return e}var L_=!1;if(Pn){var Vc;if(Pn){var Lc="oninput"in document;if(!Lc){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),Lc=typeof dg.oninput=="function"}Vc=Lc}else Vc=!1;L_=Vc&&(!document.documentMode||9<document.documentMode)}function fg(){lo&&(lo.detachEvent("onpropertychange",M_),Ro=lo=null)}function M_(t){if(t.propertyName==="value"&&yu(Ro)){var e=[];V_(e,Ro,t,Zd(t)),g_(h1,e)}}function f1(t,e,n){t==="focusin"?(fg(),lo=e,Ro=n,lo.attachEvent("onpropertychange",M_)):t==="focusout"&&fg()}function p1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(Ro)}function m1(t,e){if(t==="click")return yu(e)}function g1(t,e){if(t==="input"||t==="change")return yu(e)}function y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:y1;function ko(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!yh.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function pg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mg(t,e){var n=pg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pg(n)}}function U_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j_(){for(var t=window,e=Rl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Rl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v1(t){var e=j_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U_(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=mg(n,s);var o=mg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _1=Pn&&"documentMode"in document&&11>=document.documentMode,Ai=null,Lh=null,uo=null,Mh=!1;function gg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mh||Ai==null||Ai!==Rl(r)||(r=Ai,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),uo&&ko(uo,r)||(uo=r,r=Ol(Lh,"onSelect"),0<r.length&&(e=new of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ri={animationend:Ba("Animation","AnimationEnd"),animationiteration:Ba("Animation","AnimationIteration"),animationstart:Ba("Animation","AnimationStart"),transitionend:Ba("Transition","TransitionEnd")},Mc={},F_={};Pn&&(F_=document.createElement("div").style,"AnimationEvent"in window||(delete Ri.animationend.animation,delete Ri.animationiteration.animation,delete Ri.animationstart.animation),"TransitionEvent"in window||delete Ri.transitionend.transition);function vu(t){if(Mc[t])return Mc[t];if(!Ri[t])return t;var e=Ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F_)return Mc[t]=e[n];return t}var z_=vu("animationend"),B_=vu("animationiteration"),$_=vu("animationstart"),W_=vu("transitionend"),H_=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(t,e){H_.set(t,e),ui(e,[t])}for(var Uc=0;Uc<yg.length;Uc++){var jc=yg[Uc],w1=jc.toLowerCase(),E1=jc[0].toUpperCase()+jc.slice(1);kr(w1,"on"+E1)}kr(z_,"onAnimationEnd");kr(B_,"onAnimationIteration");kr($_,"onAnimationStart");kr("dblclick","onDoubleClick");kr("focusin","onFocus");kr("focusout","onBlur");kr(W_,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);ui("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ui("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ui("onBeforeInput",["compositionend","keypress","textInput","paste"]);ui("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ui("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T1=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function vg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,wS(r,e,void 0,t),t.currentTarget=null}function q_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;vg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;vg(i,l,c),s=u}}}if(Cl)throw t=bh,Cl=!1,bh=null,t}function me(t,e){var n=e[Bh];n===void 0&&(n=e[Bh]=new Set);var r=t+"__bubble";n.has(r)||(G_(e,t,2,!1),n.add(r))}function Fc(t,e,n){var r=0;e&&(r|=4),G_(n,t,r,e)}var $a="_reactListening"+Math.random().toString(36).slice(2);function Co(t){if(!t[$a]){t[$a]=!0,e_.forEach(function(n){n!=="selectionchange"&&(T1.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[$a]||(e[$a]=!0,Fc("selectionchange",!1,e))}}function G_(t,e,n,r){switch(P_(e)){case 1:var i=LS;break;case 4:i=MS;break;default:i=rf}n=i.bind(null,e,n,t),i=void 0,!Nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Br(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}g_(function(){var c=s,f=Zd(n),p=[];e:{var m=H_.get(t);if(m!==void 0){var T=of,R=t;switch(t){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":T=JS;break;case"focusin":R="focus",T=Oc;break;case"focusout":R="blur",T=Oc;break;case"beforeblur":case"afterblur":T=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=og;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=t1;break;case z_:case B_:case $_:T=$S;break;case W_:T=r1;break;case"scroll":T=US;break;case"wheel":T=s1;break;case"copy":case"cut":case"paste":T=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=lg}var P=(e&4)!==0,N=!P&&t==="scroll",w=P?m!==null?m+"Capture":null:m;P=[];for(var _=c,S;_!==null;){S=_;var D=S.stateNode;if(S.tag===5&&D!==null&&(S=D,w!==null&&(D=Io(_,w),D!=null&&P.push(Po(_,D,S)))),N)break;_=_.return}0<P.length&&(m=new T(m,R,null,n,f),p.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",m&&n!==Ch&&(R=n.relatedTarget||n.fromElement)&&(Br(R)||R[Nn]))break e;if((T||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,T?(R=n.relatedTarget||n.toElement,T=c,R=R?Br(R):null,R!==null&&(N=ci(R),R!==N||R.tag!==5&&R.tag!==6)&&(R=null)):(T=null,R=c),T!==R)){if(P=og,D="onMouseLeave",w="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(P=lg,D="onPointerLeave",w="onPointerEnter",_="pointer"),N=T==null?m:ki(T),S=R==null?m:ki(R),m=new P(D,_+"leave",T,n,f),m.target=N,m.relatedTarget=S,D=null,Br(f)===c&&(P=new P(w,_+"enter",R,n,f),P.target=S,P.relatedTarget=N,D=P),N=D,T&&R)t:{for(P=T,w=R,_=0,S=P;S;S=_i(S))_++;for(S=0,D=w;D;D=_i(D))S++;for(;0<_-S;)P=_i(P),_--;for(;0<S-_;)w=_i(w),S--;for(;_--;){if(P===w||w!==null&&P===w.alternate)break t;P=_i(P),w=_i(w)}P=null}else P=null;T!==null&&_g(p,m,T,P,!1),R!==null&&N!==null&&_g(p,N,R,P,!0)}}e:{if(m=c?ki(c):window,T=m.nodeName&&m.nodeName.toLowerCase(),T==="select"||T==="input"&&m.type==="file")var L=d1;else if(hg(m))if(L_)L=g1;else{L=p1;var j=f1}else(T=m.nodeName)&&T.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=m1);if(L&&(L=L(t,c))){V_(p,L,n,f);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Sh(m,"number",m.value)}switch(j=c?ki(c):window,t){case"focusin":(hg(j)||j.contentEditable==="true")&&(Ai=j,Lh=c,uo=null);break;case"focusout":uo=Lh=Ai=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,gg(p,n,f);break;case"selectionchange":if(_1)break;case"keydown":case"keyup":gg(p,n,f)}var I;if(lf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else xi?D_(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(b_&&n.locale!=="ko"&&(xi||v!=="onCompositionStart"?v==="onCompositionEnd"&&xi&&(I=N_()):(ir=f,sf="value"in ir?ir.value:ir.textContent,xi=!0)),j=Ol(c,v),0<j.length&&(v=new ag(v,t,null,n,f),p.push({event:v,listeners:j}),I?v.data=I:(I=O_(n),I!==null&&(v.data=I)))),(I=a1?l1(t,n):u1(t,n))&&(c=Ol(c,"onBeforeInput"),0<c.length&&(f=new ag("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:c}),f.data=I))}q_(p,e)})}function Po(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Io(t,n),s!=null&&r.unshift(Po(t,s,i)),s=Io(t,e),s!=null&&r.push(Po(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _g(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Io(n,s),u!=null&&o.unshift(Po(n,u,l))):i||(u=Io(n,s),u!=null&&o.push(Po(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var I1=/\r\n?/g,S1=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(I1,`
`).replace(S1,"")}function Wa(t,e,n){if(e=wg(e),wg(t)!==e&&n)throw Error(U(425))}function Vl(){}var Uh=null,jh=null;function Fh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zh=typeof setTimeout=="function"?setTimeout:void 0,x1=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,A1=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(R1)}:zh;function R1(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ao(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ao(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),tn="__reactFiber$"+gs,No="__reactProps$"+gs,Nn="__reactContainer$"+gs,Bh="__reactEvents$"+gs,k1="__reactListeners$"+gs,C1="__reactHandles$"+gs;function Br(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[tn])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function ea(t){return t=t[tn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ki(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function _u(t){return t[No]||null}var $h=[],Ci=-1;function Cr(t){return{current:t}}function ye(t){0>Ci||(t.current=$h[Ci],$h[Ci]=null,Ci--)}function de(t,e){Ci++,$h[Ci]=t.current,t.current=e}var Tr={},at=Cr(Tr),_t=Cr(!1),Zr=Tr;function Ki(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wt(t){return t=t.childContextTypes,t!=null}function Ll(){ye(_t),ye(at)}function Ig(t,e,n){if(at.current!==Tr)throw Error(U(168));de(at,e),de(_t,n)}function K_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,fS(t)||"Unknown",i));return Te({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,Zr=at.current,de(at,t),de(_t,_t.current),!0}function Sg(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=K_(t,e,Zr),r.__reactInternalMemoizedMergedChildContext=t,ye(_t),ye(at),de(at,t)):ye(_t),de(_t,n)}var En=null,wu=!1,$c=!1;function Q_(t){En===null?En=[t]:En.push(t)}function P1(t){wu=!0,Q_(t)}function Pr(){if(!$c&&En!==null){$c=!0;var t=0,e=le;try{var n=En;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,wu=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),w_(ef,Pr),i}finally{le=e,$c=!1}}return null}var Pi=[],Ni=0,Ul=null,jl=0,bt=[],Dt=0,ei=null,In=1,Sn="";function Ur(t,e){Pi[Ni++]=jl,Pi[Ni++]=Ul,Ul=t,jl=e}function X_(t,e,n){bt[Dt++]=In,bt[Dt++]=Sn,bt[Dt++]=ei,ei=t;var r=In;t=Sn;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,In=1<<32-Wt(e)+i|n<<i|r,Sn=s+t}else In=1<<s|n<<i|r,Sn=t}function cf(t){t.return!==null&&(Ur(t,1),X_(t,1,0))}function hf(t){for(;t===Ul;)Ul=Pi[--Ni],Pi[Ni]=null,jl=Pi[--Ni],Pi[Ni]=null;for(;t===ei;)ei=bt[--Dt],bt[Dt]=null,Sn=bt[--Dt],bt[Dt]=null,In=bt[--Dt],bt[Dt]=null}var Rt=null,St=null,_e=!1,$t=null;function Y_(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function xg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,St=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ei!==null?{id:In,overflow:Sn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,St=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hh(t){if(_e){var e=St;if(e){var n=e;if(!xg(t,e)){if(Wh(t))throw Error(U(418));e=hr(n.nextSibling);var r=Rt;e&&xg(t,e)?Y_(r,n):(t.flags=t.flags&-4097|2,_e=!1,Rt=t)}}else{if(Wh(t))throw Error(U(418));t.flags=t.flags&-4097|2,_e=!1,Rt=t}}}function Ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function Ha(t){if(t!==Rt)return!1;if(!_e)return Ag(t),_e=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Fh(t.type,t.memoizedProps)),e&&(e=St)){if(Wh(t))throw J_(),Error(U(418));for(;e;)Y_(t,e),e=hr(e.nextSibling)}if(Ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Rt?hr(t.stateNode.nextSibling):null;return!0}function J_(){for(var t=St;t;)t=hr(t.nextSibling)}function Qi(){St=Rt=null,_e=!1}function df(t){$t===null?$t=[t]:$t.push(t)}var N1=Fn.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Rg(t){var e=t._init;return e(t._payload)}function Z_(t){function e(w,_){if(t){var S=w.deletions;S===null?(w.deletions=[_],w.flags|=16):S.push(_)}}function n(w,_){if(!t)return null;for(;_!==null;)e(w,_),_=_.sibling;return null}function r(w,_){for(w=new Map;_!==null;)_.key!==null?w.set(_.key,_):w.set(_.index,_),_=_.sibling;return w}function i(w,_){return w=mr(w,_),w.index=0,w.sibling=null,w}function s(w,_,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<_?(w.flags|=2,_):S):(w.flags|=2,_)):(w.flags|=1048576,_)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,_,S,D){return _===null||_.tag!==6?(_=Xc(S,w.mode,D),_.return=w,_):(_=i(_,S),_.return=w,_)}function u(w,_,S,D){var L=S.type;return L===Si?f(w,_,S.props.children,D,S.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qn&&Rg(L)===_.type)?(D=i(_,S.props),D.ref=$s(w,_,S),D.return=w,D):(D=gl(S.type,S.key,S.props,null,w.mode,D),D.ref=$s(w,_,S),D.return=w,D)}function c(w,_,S,D){return _===null||_.tag!==4||_.stateNode.containerInfo!==S.containerInfo||_.stateNode.implementation!==S.implementation?(_=Yc(S,w.mode,D),_.return=w,_):(_=i(_,S.children||[]),_.return=w,_)}function f(w,_,S,D,L){return _===null||_.tag!==7?(_=Qr(S,w.mode,D,L),_.return=w,_):(_=i(_,S),_.return=w,_)}function p(w,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Xc(""+_,w.mode,S),_.return=w,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return S=gl(_.type,_.key,_.props,null,w.mode,S),S.ref=$s(w,null,_),S.return=w,S;case Ii:return _=Yc(_,w.mode,S),_.return=w,_;case Qn:var D=_._init;return p(w,D(_._payload),S)}if(Js(_)||Us(_))return _=Qr(_,w.mode,S,null),_.return=w,_;qa(w,_)}return null}function m(w,_,S,D){var L=_!==null?_.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return L!==null?null:l(w,_,""+S,D);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Va:return S.key===L?u(w,_,S,D):null;case Ii:return S.key===L?c(w,_,S,D):null;case Qn:return L=S._init,m(w,_,L(S._payload),D)}if(Js(S)||Us(S))return L!==null?null:f(w,_,S,D,null);qa(w,S)}return null}function T(w,_,S,D,L){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(S)||null,l(_,w,""+D,L);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Va:return w=w.get(D.key===null?S:D.key)||null,u(_,w,D,L);case Ii:return w=w.get(D.key===null?S:D.key)||null,c(_,w,D,L);case Qn:var j=D._init;return T(w,_,S,j(D._payload),L)}if(Js(D)||Us(D))return w=w.get(S)||null,f(_,w,D,L,null);qa(_,D)}return null}function R(w,_,S,D){for(var L=null,j=null,I=_,v=_=0,E=null;I!==null&&v<S.length;v++){I.index>v?(E=I,I=null):E=I.sibling;var x=m(w,I,S[v],D);if(x===null){I===null&&(I=E);break}t&&I&&x.alternate===null&&e(w,I),_=s(x,_,v),j===null?L=x:j.sibling=x,j=x,I=E}if(v===S.length)return n(w,I),_e&&Ur(w,v),L;if(I===null){for(;v<S.length;v++)I=p(w,S[v],D),I!==null&&(_=s(I,_,v),j===null?L=I:j.sibling=I,j=I);return _e&&Ur(w,v),L}for(I=r(w,I);v<S.length;v++)E=T(I,w,v,S[v],D),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?v:E.key),_=s(E,_,v),j===null?L=E:j.sibling=E,j=E);return t&&I.forEach(function(k){return e(w,k)}),_e&&Ur(w,v),L}function P(w,_,S,D){var L=Us(S);if(typeof L!="function")throw Error(U(150));if(S=L.call(S),S==null)throw Error(U(151));for(var j=L=null,I=_,v=_=0,E=null,x=S.next();I!==null&&!x.done;v++,x=S.next()){I.index>v?(E=I,I=null):E=I.sibling;var k=m(w,I,x.value,D);if(k===null){I===null&&(I=E);break}t&&I&&k.alternate===null&&e(w,I),_=s(k,_,v),j===null?L=k:j.sibling=k,j=k,I=E}if(x.done)return n(w,I),_e&&Ur(w,v),L;if(I===null){for(;!x.done;v++,x=S.next())x=p(w,x.value,D),x!==null&&(_=s(x,_,v),j===null?L=x:j.sibling=x,j=x);return _e&&Ur(w,v),L}for(I=r(w,I);!x.done;v++,x=S.next())x=T(I,w,v,x.value,D),x!==null&&(t&&x.alternate!==null&&I.delete(x.key===null?v:x.key),_=s(x,_,v),j===null?L=x:j.sibling=x,j=x);return t&&I.forEach(function(C){return e(w,C)}),_e&&Ur(w,v),L}function N(w,_,S,D){if(typeof S=="object"&&S!==null&&S.type===Si&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Va:e:{for(var L=S.key,j=_;j!==null;){if(j.key===L){if(L=S.type,L===Si){if(j.tag===7){n(w,j.sibling),_=i(j,S.props.children),_.return=w,w=_;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Qn&&Rg(L)===j.type){n(w,j.sibling),_=i(j,S.props),_.ref=$s(w,j,S),_.return=w,w=_;break e}n(w,j);break}else e(w,j);j=j.sibling}S.type===Si?(_=Qr(S.props.children,w.mode,D,S.key),_.return=w,w=_):(D=gl(S.type,S.key,S.props,null,w.mode,D),D.ref=$s(w,_,S),D.return=w,w=D)}return o(w);case Ii:e:{for(j=S.key;_!==null;){if(_.key===j)if(_.tag===4&&_.stateNode.containerInfo===S.containerInfo&&_.stateNode.implementation===S.implementation){n(w,_.sibling),_=i(_,S.children||[]),_.return=w,w=_;break e}else{n(w,_);break}else e(w,_);_=_.sibling}_=Yc(S,w.mode,D),_.return=w,w=_}return o(w);case Qn:return j=S._init,N(w,_,j(S._payload),D)}if(Js(S))return R(w,_,S,D);if(Us(S))return P(w,_,S,D);qa(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,_!==null&&_.tag===6?(n(w,_.sibling),_=i(_,S),_.return=w,w=_):(n(w,_),_=Xc(S,w.mode,D),_.return=w,w=_),o(w)):n(w,_)}return N}var Xi=Z_(!0),e0=Z_(!1),Fl=Cr(null),zl=null,bi=null,ff=null;function pf(){ff=bi=zl=null}function mf(t){var e=Fl.current;ye(Fl),t._currentValue=e}function qh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ji(t,e){zl=t,ff=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(vt=!0),t.firstContext=null)}function Mt(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(zl===null)throw Error(U(308));bi=t,zl.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var $r=null;function gf(t){$r===null?$r=[t]:$r.push(t)}function t0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,gf(e)):(n.next=i.next,i.next=n),e.interleaved=n,bn(t,r)}function bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xn=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,bn(t,n)}return i=r.interleaved,i===null?(e.next=e,gf(r)):(e.next=i.next,i.next=e),r.interleaved=e,bn(t,n)}function cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}function kg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bl(t,e,n,r){var i=t.updateQueue;Xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=c:l.next=c,f.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,f=c=u=null,l=s;do{var m=l.lane,T=l.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var R=t,P=l;switch(m=e,T=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){p=R.call(T,p,m);break e}p=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(T,p,m):R,m==null)break e;p=Te({},p,m);break e;case 2:Xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else T={eventTime:T,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(c=f=T,u=p):f=f.next=T,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ni|=o,t.lanes=o,t.memoizedState=p}}function Cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ta={},sn=Cr(ta),bo=Cr(ta),Do=Cr(ta);function Wr(t){if(t===ta)throw Error(U(174));return t}function vf(t,e){switch(de(Do,e),de(bo,t),de(sn,ta),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ah(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ah(e,t)}ye(sn),de(sn,e)}function Yi(){ye(sn),ye(bo),ye(Do)}function r0(t){Wr(Do.current);var e=Wr(sn.current),n=Ah(e,t.type);e!==n&&(de(bo,t),de(sn,n))}function _f(t){bo.current===t&&(ye(sn),ye(bo))}var we=Cr(0);function $l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function wf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var hl=Fn.ReactCurrentDispatcher,Hc=Fn.ReactCurrentBatchConfig,ti=0,Ee=null,Le=null,Fe=null,Wl=!1,co=!1,Oo=0,b1=0;function et(){throw Error(U(321))}function Ef(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function Tf(t,e,n,r,i,s){if(ti=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?L1:M1,t=n(r,i),co){s=0;do{if(co=!1,Oo=0,25<=s)throw Error(U(301));s+=1,Fe=Le=null,e.updateQueue=null,hl.current=U1,t=n(r,i)}while(co)}if(hl.current=Hl,e=Le!==null&&Le.next!==null,ti=0,Fe=Le=Ee=null,Wl=!1,e)throw Error(U(300));return t}function If(){var t=Oo!==0;return Oo=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Ut(){if(Le===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,Le=t;else{if(t===null)throw Error(U(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Vo(t,e){return typeof e=="function"?e(t):e}function qc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var f=c.lane;if((ti&f)===f)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=f,ni|=f}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(vt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,ni|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Ut(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(vt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function i0(){}function s0(t,e){var n=Ee,r=Ut(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,vt=!0),r=r.queue,Sf(l0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Lo(9,a0.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(U(349));ti&30||o0(n,e,i)}return i}function o0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a0(t,e,n,r){e.value=n,e.getSnapshot=r,u0(e)&&c0(t)}function l0(t,e,n){return n(function(){u0(e)&&c0(t)})}function u0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function c0(t){var e=bn(t,1);e!==null&&Ht(e,t,1,-1)}function Pg(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=V1.bind(null,Ee,t),[e.memoizedState,t]}function Lo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h0(){return Ut().memoizedState}function dl(t,e,n,r){var i=en();Ee.flags|=t,i.memoizedState=Lo(1|e,n,void 0,r===void 0?null:r)}function Eu(t,e,n,r){var i=Ut();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&Ef(r,o.deps)){i.memoizedState=Lo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Lo(1|e,n,s,r)}function Ng(t,e){return dl(8390656,8,t,e)}function Sf(t,e){return Eu(2048,8,t,e)}function d0(t,e){return Eu(4,2,t,e)}function f0(t,e){return Eu(4,4,t,e)}function p0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m0(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,p0.bind(null,e,t),n)}function xf(){}function g0(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function y0(t,e){var n=Ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ef(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function v0(t,e,n){return ti&21?(Kt(n,e)||(n=I_(),Ee.lanes|=n,ni|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,vt=!0),t.memoizedState=n)}function D1(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=Hc.transition;Hc.transition={};try{t(!1),e()}finally{le=n,Hc.transition=r}}function _0(){return Ut().memoizedState}function O1(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w0(t))E0(e,n);else if(n=t0(t,e,n,r),n!==null){var i=ft();Ht(n,t,r,i),T0(n,e,r)}}function V1(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w0(t))E0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,gf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=t0(t,e,i,r),n!==null&&(i=ft(),Ht(n,t,r,i),T0(n,e,r))}}function w0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function E0(t,e){co=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function T0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tf(t,n)}}var Hl={readContext:Mt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},L1={readContext:Mt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Mt,useEffect:Ng,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dl(4194308,4,p0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dl(4194308,4,t,e)},useInsertionEffect:function(t,e){return dl(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=O1.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:Pg,useDebugValue:xf,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=Pg(!1),e=t[0];return t=D1.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=en();if(_e){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),ze===null)throw Error(U(349));ti&30||o0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ng(l0.bind(null,r,s,t),[t]),r.flags|=2048,Lo(9,a0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=ze.identifierPrefix;if(_e){var n=Sn,r=In;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},M1={readContext:Mt,useCallback:g0,useContext:Mt,useEffect:Sf,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:y0,useReducer:qc,useRef:h0,useState:function(){return qc(Vo)},useDebugValue:xf,useDeferredValue:function(t){var e=Ut();return v0(e,Le.memoizedState,t)},useTransition:function(){var t=qc(Vo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:s0,useId:_0,unstable_isNewReconciler:!1},U1={readContext:Mt,useCallback:g0,useContext:Mt,useEffect:Sf,useImperativeHandle:m0,useInsertionEffect:d0,useLayoutEffect:f0,useMemo:y0,useReducer:Gc,useRef:h0,useState:function(){return Gc(Vo)},useDebugValue:xf,useDeferredValue:function(t){var e=Ut();return Le===null?e.memoizedState=t:v0(e,Le.memoizedState,t)},useTransition:function(){var t=Gc(Vo)[0],e=Ut().memoizedState;return[t,e]},useMutableSource:i0,useSyncExternalStore:s0,useId:_0,unstable_isNewReconciler:!1};function zt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?ci(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=pr(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Ht(e,t,i,r),cl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=pr(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Ht(e,t,i,r),cl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=pr(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Ht(e,t,r,n),cl(e,t,r))}};function bg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(n,r)||!ko(i,s):!0}function I0(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=wt(e)?Zr:at.current,r=e.contextTypes,s=(r=r!=null)?Ki(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Kh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},yf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=wt(e)?Zr:at.current,i.context=Ki(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tu.enqueueReplaceState(i,i.state,null),Bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ji(t,e){try{var n="",r=e;do n+=dS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var j1=typeof WeakMap=="function"?WeakMap:Map;function S0(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Gl||(Gl=!0,sd=r),Qh(t,e)},n}function x0(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qh(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Og(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new j1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Z1.bind(null,t,e,n),e.then(t,t))}function Vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var F1=Fn.ReactCurrentOwner,vt=!1;function dt(t,e,n,r){e.child=t===null?e0(e,null,n,r):Xi(e,t.child,n,r)}function Mg(t,e,n,r,i){n=n.render;var s=e.ref;return ji(e,i),r=Tf(t,e,n,r,s,i),n=If(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(_e&&n&&cf(e),e.flags|=1,dt(t,e,r,i),e.child)}function Ug(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,A0(t,e,s,r,i)):(t=gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function A0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ko(s,r)&&t.ref===e.ref)if(vt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(vt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Xh(t,e,n,r,i)}function R0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Oi,It),It|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Oi,It),It|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Oi,It),It|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Oi,It),It|=r;return dt(t,e,i,n),e.child}function k0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Xh(t,e,n,r,i){var s=wt(n)?Zr:at.current;return s=Ki(e,s),ji(e,i),n=Tf(t,e,n,r,s,i),r=If(),t!==null&&!vt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(_e&&r&&cf(e),e.flags|=1,dt(t,e,n,i),e.child)}function jg(t,e,n,r,i){if(wt(n)){var s=!0;Ml(e)}else s=!1;if(ji(e,i),e.stateNode===null)fl(t,e),I0(e,n,r),Kh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Mt(c):(c=wt(n)?Zr:at.current,c=Ki(e,c));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&Dg(e,o,r,c),Xn=!1;var m=e.memoizedState;o.state=m,Bl(e,r,o,i),u=e.memoizedState,l!==r||m!==u||_t.current||Xn?(typeof f=="function"&&(Gh(e,n,f,r),u=e.memoizedState),(l=Xn||bg(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,n0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:zt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Mt(u):(u=wt(n)?Zr:at.current,u=Ki(e,u));var T=n.getDerivedStateFromProps;(f=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&Dg(e,o,r,u),Xn=!1,m=e.memoizedState,o.state=m,Bl(e,r,o,i);var R=e.memoizedState;l!==p||m!==R||_t.current||Xn?(typeof T=="function"&&(Gh(e,n,T,r),R=e.memoizedState),(c=Xn||bg(e,n,c,r,m,R,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Yh(t,e,n,r,s,i)}function Yh(t,e,n,r,i,s){k0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sg(e,n,!1),Dn(t,e,s);r=e.stateNode,F1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,l,s)):dt(t,e,l,s),e.memoizedState=r.state,i&&Sg(e,n,!0),e.child}function C0(t){var e=t.stateNode;e.pendingContext?Ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ig(t,e.context,!1),vf(t,e.containerInfo)}function Fg(t,e,n,r,i){return Qi(),df(i),e.flags|=256,dt(t,e,n,r),e.child}var Jh={dehydrated:null,treeContext:null,retryLane:0};function Zh(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return Hh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=xu(o,r,0,null),t=Qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zh(n),e.memoizedState=Jh,t):Af(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return z1(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mr(l,s):(s=Qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jh,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Af(t,e){return e=xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ga(t,e,n,r){return r!==null&&df(r),Xi(e,t.child,null,n),t=Af(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(U(422))),Ga(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=xu({mode:"visible",children:r.children},i,0,null),s=Qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=Zh(o),e.memoizedState=Jh,s);if(!(e.mode&1))return Ga(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Kc(s,r,void 0),Ga(t,e,o,r)}if(l=(o&t.childLanes)!==0,vt||l){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,bn(t,i),Ht(r,t,i,-1))}return bf(),r=Kc(Error(U(421))),Ga(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=ex.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=hr(i.nextSibling),Rt=e,_e=!0,$t=null,t!==null&&(bt[Dt++]=In,bt[Dt++]=Sn,bt[Dt++]=ei,In=t.id,Sn=t.overflow,ei=e),e=Af(e,r.children),e.flags|=4096,e)}function zg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),qh(t.return,e,n)}function Qc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function N0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dt(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zg(t,n,e);else if(t.tag===19)zg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&$l(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&$l(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ni|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function B1(t,e,n){switch(e.tag){case 3:C0(e),Qi();break;case 5:r0(e);break;case 1:wt(e.type)&&Ml(e);break;case 4:vf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(Fl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?P0(t,e,n):(de(we,we.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return N0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,R0(t,e,n)}return Dn(t,e,n)}var b0,ed,D0,O0;b0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};D0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(sn.current);var s=null;switch(n){case"input":i=Th(t,i),r=Th(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=xh(t,i),r=xh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vl)}Rh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&me("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};O0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ws(t,e){if(!_e)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $1(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return wt(e.type)&&Ll(),tt(e),null;case 3:return r=e.stateNode,Yi(),ye(_t),ye(at),wf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(ld($t),$t=null))),ed(t,e),tt(e),null;case 5:_f(e);var i=Wr(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)D0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return tt(e),null}if(t=Wr(sn.current),Ha(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[No]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<eo.length;i++)me(eo[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Xm(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Jm(r,s),me("invalid",r)}Rh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Wa(r.textContent,l,t),i=["children",""+l]):Eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":La(r),Ym(r,s,!0);break;case"textarea":La(r),Zm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[No]=r,b0(t,e,!1,!1),e.stateNode=t;e:{switch(o=kh(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<eo.length;i++)me(eo[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Xm(t,r),i=Th(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),me("invalid",t);break;case"textarea":Jm(t,r),i=xh(t,r),me("invalid",t);break;default:i=r}Rh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?h_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&u_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&To(t,u):typeof u=="number"&&To(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Qd(t,s,u,o))}switch(n){case"input":La(t),Ym(t,r,!1);break;case"textarea":La(t),Zm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)O0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=Wr(Do.current),Wr(sn.current),Ha(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:Wa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return tt(e),null;case 13:if(ye(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_e&&St!==null&&e.mode&1&&!(e.flags&128))J_(),Qi(),e.flags|=98560,s=!1;else if(s=Ha(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[tn]=e}else Qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else $t!==null&&(ld($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?Me===0&&(Me=3):bf())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return Yi(),ed(t,e),t===null&&Co(e.stateNode.containerInfo),tt(e),null;case 10:return mf(e.type._context),tt(e),null;case 17:return wt(e.type)&&Ll(),tt(e),null;case 19:if(ye(we),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ws(s,!1);else{if(Me!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$l(t),o!==null){for(e.flags|=128,Ws(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Zi&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304)}else{if(!r)if(t=$l(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ws(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_e)return tt(e),null}else 2*Ne()-s.renderingStartTime>Zi&&n!==1073741824&&(e.flags|=128,r=!0,Ws(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Nf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?It&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function W1(t,e){switch(hf(e),e.tag){case 1:return wt(e.type)&&Ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Yi(),ye(_t),ye(at),wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(ye(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(we),null;case 4:return Yi(),null;case 10:return mf(e.type._context),null;case 22:case 23:return Nf(),null;case 24:return null;default:return null}}var Ka=!1,it=!1,H1=typeof WeakSet=="function"?WeakSet:Set,W=null;function Di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Bg=!1;function q1(t,e){if(Uh=bl,t=j_(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,f=0,p=t,m=null;t:for(;;){for(var T;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(T=p.firstChild)!==null;)m=p,p=T;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++f===r&&(u=o),(T=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(jh={focusedElem:t,selectionRange:n},bl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,N=R.memoizedState,w=e.stateNode,_=w.getSnapshotBeforeUpdate(e.elementType===e.type?P:zt(e.type,P),N);w.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(D){xe(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return R=Bg,Bg=!1,R}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&td(e,n,s)}i=i.next}while(i!==r)}}function Iu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function V0(t){var e=t.alternate;e!==null&&(t.alternate=null,V0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[No],delete e[Bh],delete e[k1],delete e[C1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function L0(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vl));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}var We=null,Bt=!1;function Hn(t,e,n){for(n=n.child;n!==null;)M0(t,e,n),n=n.sibling}function M0(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(mu,n)}catch{}switch(n.tag){case 5:it||Di(n,e);case 6:var r=We,i=Bt;We=null,Hn(t,e,n),We=r,Bt=i,We!==null&&(Bt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Bt?(t=We,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),Ao(t)):Bc(We,n.stateNode));break;case 4:r=We,i=Bt,We=n.stateNode.containerInfo,Bt=!0,Hn(t,e,n),We=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&td(n,e,o),i=i.next}while(i!==r)}Hn(t,e,n);break;case 1:if(!it&&(Di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xe(n,e,l)}Hn(t,e,n);break;case 21:Hn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Hn(t,e,n),it=r):Hn(t,e,n);break;default:Hn(t,e,n)}}function Wg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H1),e.forEach(function(r){var i=tx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,Bt=!1;break e;case 3:We=l.stateNode.containerInfo,Bt=!0;break e;case 4:We=l.stateNode.containerInfo,Bt=!0;break e}l=l.return}if(We===null)throw Error(U(160));M0(s,o,i),We=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){xe(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U0(e,t),e=e.sibling}function U0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Zt(t),r&4){try{ho(3,t,t.return),Iu(3,t)}catch(P){xe(t,t.return,P)}try{ho(5,t,t.return)}catch(P){xe(t,t.return,P)}}break;case 1:Ft(e,t),Zt(t),r&512&&n!==null&&Di(n,n.return);break;case 5:if(Ft(e,t),Zt(t),r&512&&n!==null&&Di(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(P){xe(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&o_(i,s),kh(l,o);var c=kh(l,s);for(o=0;o<u.length;o+=2){var f=u[o],p=u[o+1];f==="style"?h_(i,p):f==="dangerouslySetInnerHTML"?u_(i,p):f==="children"?To(i,p):Qd(i,f,p,c)}switch(l){case"input":Ih(i,s);break;case"textarea":a_(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?Vi(i,!!s.multiple,T,!1):m!==!!s.multiple&&(s.defaultValue!=null?Vi(i,!!s.multiple,s.defaultValue,!0):Vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[No]=s}catch(P){xe(t,t.return,P)}}break;case 6:if(Ft(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){xe(t,t.return,P)}}break;case 3:if(Ft(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(P){xe(t,t.return,P)}break;case 4:Ft(e,t),Zt(t);break;case 13:Ft(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cf=Ne())),r&4&&Wg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(it=(c=it)||f,Ft(e,t),it=c):Ft(e,t),Zt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(W=t,f=t.child;f!==null;){for(p=W=f;W!==null;){switch(m=W,T=m.child,m.tag){case 0:case 11:case 14:case 15:ho(4,m,m.return);break;case 1:Di(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){xe(r,n,P)}}break;case 5:Di(m,m.return);break;case 22:if(m.memoizedState!==null){qg(p);continue}}T!==null?(T.return=m,W=T):qg(p)}f=f.sibling}e:for(f=null,p=t;;){if(p.tag===5){if(f===null){f=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=c_("display",o))}catch(P){xe(t,t.return,P)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(P){xe(t,t.return,P)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ft(e,t),Zt(t),r&4&&Wg(t);break;case 21:break;default:Ft(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(L0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=$g(t);id(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=$g(t);rd(t,l,o);break;default:throw Error(U(161))}}catch(u){xe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G1(t,e,n){W=t,j0(t)}function j0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ka;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||it;l=Ka;var c=it;if(Ka=o,(it=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Gg(i):u!==null?(u.return=o,W=u):Gg(i);for(;s!==null;)W=s,j0(s),s=s.sibling;W=i,Ka=l,it=c}Hg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Hg(t)}}function Hg(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||Iu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Ao(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}it||e.flags&512&&nd(e)}catch(m){xe(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function qg(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Gg(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Iu(4,e)}catch(u){xe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){xe(e,i,u)}}var s=e.return;try{nd(e)}catch(u){xe(e,s,u)}break;case 5:var o=e.return;try{nd(e)}catch(u){xe(e,o,u)}}}catch(u){xe(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var K1=Math.ceil,ql=Fn.ReactCurrentDispatcher,Rf=Fn.ReactCurrentOwner,Vt=Fn.ReactCurrentBatchConfig,se=0,ze=null,Oe=null,Ge=0,It=0,Oi=Cr(0),Me=0,Mo=null,ni=0,Su=0,kf=0,fo=null,gt=null,Cf=0,Zi=1/0,wn=null,Gl=!1,sd=null,fr=null,Qa=!1,sr=null,Kl=0,po=0,od=null,pl=-1,ml=0;function ft(){return se&6?Ne():pl!==-1?pl:pl=Ne()}function pr(t){return t.mode&1?se&2&&Ge!==0?Ge&-Ge:N1.transition!==null?(ml===0&&(ml=I_()),ml):(t=le,t!==0||(t=window.event,t=t===void 0?16:P_(t.type)),t):1}function Ht(t,e,n,r){if(50<po)throw po=0,od=null,Error(U(185));Jo(t,n,r),(!(se&2)||t!==ze)&&(t===ze&&(!(se&2)&&(Su|=n),Me===4&&Jn(t,Ge)),Et(t,r),n===1&&se===0&&!(e.mode&1)&&(Zi=Ne()+500,wu&&Pr()))}function Et(t,e){var n=t.callbackNode;NS(t,e);var r=Nl(t,t===ze?Ge:0);if(r===0)n!==null&&ng(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ng(n),e===1)t.tag===0?P1(Kg.bind(null,t)):Q_(Kg.bind(null,t)),A1(function(){!(se&6)&&Pr()}),n=null;else{switch(S_(r)){case 1:n=ef;break;case 4:n=E_;break;case 16:n=Pl;break;case 536870912:n=T_;break;default:n=Pl}n=G0(n,F0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F0(t,e){if(pl=-1,ml=0,se&6)throw Error(U(327));var n=t.callbackNode;if(Fi()&&t.callbackNode!==n)return null;var r=Nl(t,t===ze?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ql(t,r);else{e=r;var i=se;se|=2;var s=B0();(ze!==t||Ge!==e)&&(wn=null,Zi=Ne()+500,Kr(t,e));do try{Y1();break}catch(l){z0(t,l)}while(!0);pf(),ql.current=s,se=i,Oe!==null?e=0:(ze=null,Ge=0,e=Me)}if(e!==0){if(e===2&&(i=Dh(t),i!==0&&(r=i,e=ad(t,i))),e===1)throw n=Mo,Kr(t,0),Jn(t,r),Et(t,Ne()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Q1(i)&&(e=Ql(t,r),e===2&&(s=Dh(t),s!==0&&(r=s,e=ad(t,s))),e===1))throw n=Mo,Kr(t,0),Jn(t,r),Et(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:jr(t,gt,wn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=Cf+500-Ne(),10<e)){if(Nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=zh(jr.bind(null,t,gt,wn),e);break}jr(t,gt,wn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K1(r/1960))-r,10<r){t.timeoutHandle=zh(jr.bind(null,t,gt,wn),r);break}jr(t,gt,wn);break;case 5:jr(t,gt,wn);break;default:throw Error(U(329))}}}return Et(t,Ne()),t.callbackNode===n?F0.bind(null,t):null}function ad(t,e){var n=fo;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Ql(t,e),t!==2&&(e=gt,gt=n,e!==null&&ld(e)),t}function ld(t){gt===null?gt=t:gt.push.apply(gt,t)}function Q1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~kf,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Kg(t){if(se&6)throw Error(U(327));Fi();var e=Nl(t,0);if(!(e&1))return Et(t,Ne()),null;var n=Ql(t,e);if(t.tag!==0&&n===2){var r=Dh(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=Mo,Kr(t,0),Jn(t,e),Et(t,Ne()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,gt,wn),Et(t,Ne()),null}function Pf(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(Zi=Ne()+500,wu&&Pr())}}function ri(t){sr!==null&&sr.tag===0&&!(se&6)&&Fi();var e=se;se|=1;var n=Vt.transition,r=le;try{if(Vt.transition=null,le=1,t)return t()}finally{le=r,Vt.transition=n,se=e,!(se&6)&&Pr()}}function Nf(){It=Oi.current,ye(Oi)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,x1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ll();break;case 3:Yi(),ye(_t),ye(at),wf();break;case 5:_f(r);break;case 4:Yi();break;case 13:ye(we);break;case 19:ye(we);break;case 10:mf(r.type._context);break;case 22:case 23:Nf()}n=n.return}if(ze=t,Oe=t=mr(t.current,null),Ge=It=e,Me=0,Mo=null,kf=Su=ni=0,gt=fo=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function z0(t,e){do{var n=Oe;try{if(pf(),hl.current=Hl,Wl){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wl=!1}if(ti=0,Fe=Le=Ee=null,co=!1,Oo=0,Rf.current=null,n===null||n.return===null){Me=1,Mo=e,Oe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ge,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,f=l,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var T=Vg(o);if(T!==null){T.flags&=-257,Lg(T,o,l,s,e),T.mode&1&&Og(s,c,e),e=T,u=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(u),e.updateQueue=P}else R.add(u);break e}else{if(!(e&1)){Og(s,c,e),bf();break e}u=Error(U(426))}}else if(_e&&l.mode&1){var N=Vg(o);if(N!==null){!(N.flags&65536)&&(N.flags|=256),Lg(N,o,l,s,e),df(Ji(u,l));break e}}s=u=Ji(u,l),Me!==4&&(Me=2),fo===null?fo=[s]:fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=S0(s,u,e);kg(s,w);break e;case 1:l=u;var _=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(fr===null||!fr.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=x0(s,l,e);kg(s,D);break e}}s=s.return}while(s!==null)}W0(n)}catch(L){e=L,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function B0(){var t=ql.current;return ql.current=Hl,t===null?Hl:t}function bf(){(Me===0||Me===3||Me===2)&&(Me=4),ze===null||!(ni&268435455)&&!(Su&268435455)||Jn(ze,Ge)}function Ql(t,e){var n=se;se|=2;var r=B0();(ze!==t||Ge!==e)&&(wn=null,Kr(t,e));do try{X1();break}catch(i){z0(t,i)}while(!0);if(pf(),se=n,ql.current=r,Oe!==null)throw Error(U(261));return ze=null,Ge=0,Me}function X1(){for(;Oe!==null;)$0(Oe)}function Y1(){for(;Oe!==null&&!TS();)$0(Oe)}function $0(t){var e=q0(t.alternate,t,It);t.memoizedProps=t.pendingProps,e===null?W0(t):Oe=e,Rf.current=null}function W0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W1(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Me=6,Oe=null;return}}else if(n=$1(n,e,It),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Me===0&&(Me=5)}function jr(t,e,n){var r=le,i=Vt.transition;try{Vt.transition=null,le=1,J1(t,e,n,r)}finally{Vt.transition=i,le=r}return null}function J1(t,e,n,r){do Fi();while(sr!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(bS(t,s),t===ze&&(Oe=ze=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qa||(Qa=!0,G0(Pl,function(){return Fi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=le;le=1;var l=se;se|=4,Rf.current=null,q1(t,n),U0(n,t),v1(jh),bl=!!Uh,jh=Uh=null,t.current=n,G1(n),IS(),se=l,le=o,Vt.transition=s}else t.current=n;if(Qa&&(Qa=!1,sr=t,Kl=i),s=t.pendingLanes,s===0&&(fr=null),AS(n.stateNode),Et(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Gl)throw Gl=!1,t=sd,sd=null,t;return Kl&1&&t.tag!==0&&Fi(),s=t.pendingLanes,s&1?t===od?po++:(po=0,od=t):po=0,Pr(),null}function Fi(){if(sr!==null){var t=S_(Kl),e=Vt.transition,n=le;try{if(Vt.transition=null,le=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Kl=0,se&6)throw Error(U(331));var i=se;for(se|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:ho(8,f,s)}var p=f.child;if(p!==null)p.return=f,W=p;else for(;W!==null;){f=W;var m=f.sibling,T=f.return;if(V0(f),f===c){W=null;break}if(m!==null){m.return=T,W=m;break}W=T}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var N=P.sibling;P.sibling=null,P=N}while(P!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var _=t.current;for(W=_;W!==null;){o=W;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,W=S;else e:for(o=_;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Iu(9,l)}}catch(L){xe(l,l.return,L)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(se=i,Pr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(mu,t)}catch{}r=!0}return r}finally{le=n,Vt.transition=e}}return!1}function Qg(t,e,n){e=Ji(n,e),e=S0(t,e,1),t=dr(t,e,1),e=ft(),t!==null&&(Jo(t,1,e),Et(t,e))}function xe(t,e,n){if(t.tag===3)Qg(t,t,n);else for(;e!==null;){if(e.tag===3){Qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=Ji(n,t),t=x0(e,t,1),e=dr(e,t,1),t=ft(),e!==null&&(Jo(e,1,t),Et(e,t));break}}e=e.return}}function Z1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ge&n)===n&&(Me===4||Me===3&&(Ge&130023424)===Ge&&500>Ne()-Cf?Kr(t,0):kf|=n),Et(t,e)}function H0(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=ft();t=bn(t,e),t!==null&&(Jo(t,e,n),Et(t,n))}function ex(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H0(t,n)}function tx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),H0(t,n)}var q0;q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_t.current)vt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return vt=!1,B1(t,e,n);vt=!!(t.flags&131072)}else vt=!1,_e&&e.flags&1048576&&X_(e,jl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fl(t,e),t=e.pendingProps;var i=Ki(e,at.current);ji(e,n),i=Tf(null,e,r,t,i,n);var s=If();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wt(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,yf(e),i.updater=Tu,e.stateNode=i,i._reactInternals=e,Kh(e,r,t,n),e=Yh(null,e,r,!0,s,n)):(e.tag=0,_e&&s&&cf(e),dt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rx(r),t=zt(r,t),i){case 0:e=Xh(null,e,r,t,n);break e;case 1:e=jg(null,e,r,t,n);break e;case 11:e=Mg(null,e,r,t,n);break e;case 14:e=Ug(null,e,r,zt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Xh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),jg(t,e,r,i,n);case 3:e:{if(C0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,n0(t,e),Bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ji(Error(U(423)),e),e=Fg(t,e,r,n,i);break e}else if(r!==i){i=Ji(Error(U(424)),e),e=Fg(t,e,r,n,i);break e}else for(St=hr(e.stateNode.containerInfo.firstChild),Rt=e,_e=!0,$t=null,n=e0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qi(),r===i){e=Dn(t,e,n);break e}dt(t,e,r,n)}e=e.child}return e;case 5:return r0(e),t===null&&Hh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Fh(r,i)?o=null:s!==null&&Fh(r,s)&&(e.flags|=32),k0(t,e),dt(t,e,o,n),e.child;case 6:return t===null&&Hh(e),null;case 13:return P0(t,e,n);case 4:return vf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):dt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Mg(t,e,r,i,n);case 7:return dt(t,e,e.pendingProps,n),e.child;case 8:return dt(t,e,e.pendingProps.children,n),e.child;case 12:return dt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(Fl,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!_t.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),qh(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),qh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ji(e,n),i=Mt(i),r=r(i),e.flags|=1,dt(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Ug(t,e,r,i,n);case 15:return A0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),fl(t,e),e.tag=1,wt(r)?(t=!0,Ml(e)):t=!1,ji(e,n),I0(e,r,i),Kh(e,r,i,n),Yh(null,e,r,!0,t,n);case 19:return N0(t,e,n);case 22:return R0(t,e,n)}throw Error(U(156,e.tag))};function G0(t,e){return w_(t,e)}function nx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new nx(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rx(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yd)return 11;if(t===Jd)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Si:return Qr(n.children,i,s,e);case Xd:o=8,i|=8;break;case vh:return t=Ot(12,n,e,i|2),t.elementType=vh,t.lanes=s,t;case _h:return t=Ot(13,n,e,i),t.elementType=_h,t.lanes=s,t;case wh:return t=Ot(19,n,e,i),t.elementType=wh,t.lanes=s,t;case r_:return xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t_:o=10;break e;case n_:o=9;break e;case Yd:o=11;break e;case Jd:o=14;break e;case Qn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qr(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function xu(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=r_,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ix(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nc(0),this.expirationTimes=Nc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Of(t,e,n,r,i,s,o,l,u){return t=new ix(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function sx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function K0(t){if(!t)return Tr;t=t._reactInternals;e:{if(ci(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(wt(n))return K_(t,n,e)}return e}function Q0(t,e,n,r,i,s,o,l,u){return t=Of(n,r,!0,t,i,s,o,l,u),t.context=K0(null),n=t.current,r=ft(),i=pr(n),s=Cn(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,Jo(t,i,r),Et(t,r),t}function Au(t,e,n,r){var i=e.current,s=ft(),o=pr(i);return n=K0(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Ht(t,i,o,s),cl(t,i,o)),o}function Xl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Xg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vf(t,e){Xg(t,e),(t=t.alternate)&&Xg(t,e)}function ox(){return null}var X0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}Ru.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Au(t,e,null,null)};Ru.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ri(function(){Au(null,t,null,null)}),e[Nn]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=R_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&C_(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function ax(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Xl(o);s.call(c)}}var o=Q0(e,r,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[Nn]=o.current,Co(t.nodeType===8?t.parentNode:t),ri(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=Xl(u);l.call(c)}}var u=Of(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=u,t[Nn]=u.current,Co(t.nodeType===8?t.parentNode:t),ri(function(){Au(e,u,n,r)}),u}function Cu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Xl(o);l.call(u)}}Au(e,o,t,i)}else o=ax(n,e,t,i,r);return Xl(o)}x_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Zs(e.pendingLanes);n!==0&&(tf(e,n|1),Et(e,Ne()),!(se&6)&&(Zi=Ne()+500,Pr()))}break;case 13:ri(function(){var r=bn(t,1);if(r!==null){var i=ft();Ht(r,t,1,i)}}),Vf(t,1)}};nf=function(t){if(t.tag===13){var e=bn(t,134217728);if(e!==null){var n=ft();Ht(e,t,134217728,n)}Vf(t,134217728)}};A_=function(t){if(t.tag===13){var e=pr(t),n=bn(t,e);if(n!==null){var r=ft();Ht(n,t,e,r)}Vf(t,e)}};R_=function(){return le};k_=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};Ph=function(t,e,n){switch(e){case"input":if(Ih(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_u(r);if(!i)throw Error(U(90));s_(r),Ih(r,i)}}}break;case"textarea":a_(t,n);break;case"select":e=n.value,e!=null&&Vi(t,!!n.multiple,e,!1)}};p_=Pf;m_=ri;var lx={usingClientEntryPoint:!1,Events:[ea,ki,_u,d_,f_,Pf]},Hs={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ux={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=v_(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{mu=Xa.inject(ux),rn=Xa}catch{}}Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx;Ct.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(U(200));return sx(t,e,null,n)};Ct.createRoot=function(t,e){if(!Mf(t))throw Error(U(299));var n=!1,r="",i=X0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Of(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,Co(t.nodeType===8?t.parentNode:t),new Lf(e)};Ct.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=v_(e),t=t===null?null:t.stateNode,t};Ct.flushSync=function(t){return ri(t)};Ct.hydrate=function(t,e,n){if(!ku(e))throw Error(U(200));return Cu(null,t,e,!0,n)};Ct.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=X0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Q0(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,Co(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ru(e)};Ct.render=function(t,e,n){if(!ku(e))throw Error(U(200));return Cu(null,t,e,!1,n)};Ct.unmountComponentAtNode=function(t){if(!ku(t))throw Error(U(40));return t._reactRootContainer?(ri(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Ct.unstable_batchedUpdates=Pf;Ct.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Cu(t,e,n,!1,r)};Ct.version="18.3.1-next-f1338f8080-20240426";function Y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)}catch(t){console.error(t)}}Y0(),Yv.exports=Ct;var cx=Yv.exports,Jg=cx;gh.createRoot=Jg.createRoot,gh.hydrateRoot=Jg.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uo.apply(null,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const Zg="popstate";function hx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return ud("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yl(i)}return fx(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Uf(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dx(){return Math.random().toString(36).substr(2,8)}function ey(t,e){return{usr:t.state,key:t.key,idx:e}}function ud(t,e,n,r){return n===void 0&&(n=null),Uo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ys(e):e,{state:n,key:e&&e.key||r||dx()})}function Yl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ys(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function fx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=or.Pop,u=null,c=f();c==null&&(c=0,o.replaceState(Uo({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function p(){l=or.Pop;let N=f(),w=N==null?null:N-c;c=N,u&&u({action:l,location:P.location,delta:w})}function m(N,w){l=or.Push;let _=ud(P.location,N,w);c=f()+1;let S=ey(_,c),D=P.createHref(_);try{o.pushState(S,"",D)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(D)}s&&u&&u({action:l,location:P.location,delta:1})}function T(N,w){l=or.Replace;let _=ud(P.location,N,w);c=f();let S=ey(_,c),D=P.createHref(_);o.replaceState(S,"",D),s&&u&&u({action:l,location:P.location,delta:0})}function R(N){let w=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof N=="string"?N:Yl(N);return _=_.replace(/ $/,"%20"),be(w,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,w)}let P={get action(){return l},get location(){return t(i,o)},listen(N){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Zg,p),u=N,()=>{i.removeEventListener(Zg,p),u=null}},createHref(N){return e(i,N)},createURL:R,encodeLocation(N){let w=R(N);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:T,go(N){return o.go(N)}};return P}var ty;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ty||(ty={}));function px(t,e,n){return n===void 0&&(n="/"),mx(t,e,n)}function mx(t,e,n,r){let i=typeof e=="string"?ys(e):e,s=jf(i.pathname||"/",n);if(s==null)return null;let o=J0(t);gx(o);let l=null,u=kx(s);for(let c=0;l==null&&c<o.length;++c)l=xx(o[c],u);return l}function J0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(be(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=gr([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),J0(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ix(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of Z0(s.path))i(s,o,u)}),e}function Z0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Z0(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function gx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Sx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yx=/^:[\w-]+$/,vx=3,_x=2,wx=1,Ex=10,Tx=-2,ny=t=>t==="*";function Ix(t,e){let n=t.split("/"),r=n.length;return n.some(ny)&&(r+=Tx),e&&(r+=_x),n.filter(i=>!ny(i)).reduce((i,s)=>i+(yx.test(s)?vx:s===""?wx:Ex),r)}function Sx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function xx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",p=Ax({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},f),m=u.route;if(!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:gr([s,p.pathname]),pathnameBase:Dx(gr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=gr([s,p.pathnameBase]))}return o}function Ax(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Rx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,f,p)=>{let{paramName:m,isOptional:T}=f;if(m==="*"){let P=l[p]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=l[p];return T&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Rx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Uf(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Uf(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const Cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Px=t=>Cx.test(t);function Nx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ys(t):t,s;if(n)if(Px(n))s=n;else{if(n.includes("//")){let o=n;n=ew(n),Uf(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=ry(n.substring(1),"/"):s=ry(n,e)}else s=e;return{pathname:s,search:Ox(r),hash:Vx(i)}}function ry(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function bx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Ff(t,e){let n=bx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zf(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ys(t):(i=Uo({},t),be(!i.pathname||!i.pathname.includes("?"),Jc("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Jc("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Jc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=Nx(i,l),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||f)&&(u.pathname+="/"),u}const ew=t=>t.replace(/\/\/+/g,"/"),gr=t=>ew(t.join("/")),Dx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ox=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Vx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Lx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const tw=["post","put","patch","delete"];new Set(tw);const Mx=["get",...tw];new Set(Mx);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jo(){return jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jo.apply(null,arguments)}const Bf=F.createContext(null),Ux=F.createContext(null),Nr=F.createContext(null),Pu=F.createContext(null),zn=F.createContext({outlet:null,matches:[],isDataRoute:!1}),nw=F.createContext(null);function jx(t,e){let{relative:n}=e===void 0?{}:e;vs()||be(!1);let{basename:r,navigator:i}=F.useContext(Nr),{hash:s,pathname:o,search:l}=iw(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:gr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function vs(){return F.useContext(Pu)!=null}function na(){return vs()||be(!1),F.useContext(Pu).location}function rw(t){F.useContext(Nr).static||F.useLayoutEffect(t)}function Nu(){let{isDataRoute:t}=F.useContext(zn);return t?Zx():Fx()}function Fx(){vs()||be(!1);let t=F.useContext(Bf),{basename:e,future:n,navigator:r}=F.useContext(Nr),{matches:i}=F.useContext(zn),{pathname:s}=na(),o=JSON.stringify(Ff(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return rw(()=>{l.current=!0}),F.useCallback(function(c,f){if(f===void 0&&(f={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=zf(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:gr([e,p.pathname])),(f.replace?r.replace:r.push)(p,f.state,f)},[e,r,o,s,t])}function zx(){let{matches:t}=F.useContext(zn),e=t[t.length-1];return e?e.params:{}}function iw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(Nr),{matches:i}=F.useContext(zn),{pathname:s}=na(),o=JSON.stringify(Ff(i,r.v7_relativeSplatPath));return F.useMemo(()=>zf(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function Bx(t,e){return $x(t,e)}function $x(t,e,n,r){vs()||be(!1);let{navigator:i}=F.useContext(Nr),{matches:s}=F.useContext(zn),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=na(),f;if(e){var p;let N=typeof e=="string"?ys(e):e;u==="/"||(p=N.pathname)!=null&&p.startsWith(u)||be(!1),f=N}else f=c;let m=f.pathname||"/",T=m;if(u!=="/"){let N=u.replace(/^\//,"").split("/");T="/"+m.replace(/^\//,"").split("/").slice(N.length).join("/")}let R=px(t,{pathname:T}),P=Kx(R&&R.map(N=>Object.assign({},N,{params:Object.assign({},l,N.params),pathname:gr([u,i.encodeLocation?i.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?u:gr([u,i.encodeLocation?i.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),s,n,r);return e&&P?F.createElement(Pu.Provider,{value:{location:jo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:or.Pop}},P):P}function Wx(){let t=Jx(),e=Lx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const Hx=F.createElement(Wx,null);class qx extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(zn.Provider,{value:this.props.routeContext},F.createElement(nw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gx(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(Bf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(zn.Provider,{value:e},r)}function Kx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);f>=0||be(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let p=o[f];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=f),p.route.id){let{loaderData:m,errors:T}=n,R=p.route.loader&&m[p.route.id]===void 0&&(!T||T[p.route.id]===void 0);if(p.route.lazy||R){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,p,m)=>{let T,R=!1,P=null,N=null;n&&(T=l&&p.route.id?l[p.route.id]:void 0,P=p.route.errorElement||Hx,u&&(c<0&&m===0?(eA("route-fallback"),R=!0,N=null):c===m&&(R=!0,N=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),_=()=>{let S;return T?S=P:R?S=N:p.route.Component?S=F.createElement(p.route.Component,null):p.route.element?S=p.route.element:S=f,F.createElement(Gx,{match:p,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:S})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?F.createElement(qx,{location:n.location,revalidation:n.revalidation,component:P,error:T,children:_(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):_()},null)}var sw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sw||{}),ow=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ow||{});function Qx(t){let e=F.useContext(Bf);return e||be(!1),e}function Xx(t){let e=F.useContext(Ux);return e||be(!1),e}function Yx(t){let e=F.useContext(zn);return e||be(!1),e}function aw(t){let e=Yx(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function Jx(){var t;let e=F.useContext(nw),n=Xx(),r=aw();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Zx(){let{router:t}=Qx(sw.UseNavigateStable),e=aw(ow.UseNavigateStable),n=F.useRef(!1);return rw(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,jo({fromRouteId:e},s)))},[t,e])}const iy={};function eA(t,e,n){iy[t]||(iy[t]=!0)}function tA(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Fo(t){let{to:e,replace:n,state:r,relative:i}=t;vs()||be(!1);let{future:s,static:o}=F.useContext(Nr),{matches:l}=F.useContext(zn),{pathname:u}=na(),c=Nu(),f=zf(e,Ff(l,s.v7_relativeSplatPath),u,i==="path"),p=JSON.stringify(f);return F.useEffect(()=>c(JSON.parse(p),{replace:n,state:r,relative:i}),[c,p,i,n,r]),null}function Fr(t){be(!1)}function nA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1,future:l}=t;vs()&&be(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:jo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ys(r));let{pathname:f="/",search:p="",hash:m="",state:T=null,key:R="default"}=r,P=F.useMemo(()=>{let N=jf(f,u);return N==null?null:{location:{pathname:N,search:p,hash:m,state:T,key:R},navigationType:i}},[u,f,p,m,T,R,i]);return P==null?null:F.createElement(Nr.Provider,{value:c},F.createElement(Pu.Provider,{children:n,value:P}))}function rA(t){let{children:e,location:n}=t;return Bx(cd(e),n)}new Promise(()=>{});function cd(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,cd(r.props.children,s));return}r.type!==Fr&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hd.apply(null,arguments)}function iA(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}function sA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function oA(t,e){return t.button===0&&(!e||e==="_self")&&!sA(t)}const aA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lA="6";try{window.__reactRouterVersion=lA}catch{}const uA="startTransition",sy=ZI[uA];function cA(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=hx({window:i,v5Compat:!0}));let o=s.current,[l,u]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},f=F.useCallback(p=>{c&&sy?sy(()=>u(p)):u(p)},[u,c]);return F.useLayoutEffect(()=>o.listen(f),[o,f]),F.useEffect(()=>tA(r),[r]),F.createElement(nA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const hA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,es=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:f,viewTransition:p}=e,m=iA(e,aA),{basename:T}=F.useContext(Nr),R,P=!1;if(typeof c=="string"&&dA.test(c)&&(R=c,hA))try{let S=new URL(window.location.href),D=c.startsWith("//")?new URL(S.protocol+c):new URL(c),L=jf(D.pathname,T);D.origin===S.origin&&L!=null?c=L+D.search+D.hash:P=!0}catch{}let N=jx(c,{relative:i}),w=fA(c,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:p});function _(S){r&&r(S),S.defaultPrevented||w(S)}return F.createElement("a",hd({},m,{href:R||N,onClick:P||s?r:_,ref:n,target:u}))});var oy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(oy||(oy={}));var ay;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ay||(ay={}));function fA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=Nu(),c=na(),f=iw(t,{relative:o});return F.useCallback(p=>{if(oA(p,n)){p.preventDefault();let m=r!==void 0?r:Yl(c)===Yl(f);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,f,r,i,n,t,s,o,l])}const pA={},ly=t=>{let e;const n=new Set,r=(f,p)=>{const m=typeof f=="function"?f(e):f;if(!Object.is(m,e)){const T=e;e=p??(typeof m!="object"||m===null)?m:Object.assign({},e,m),n.forEach(R=>R(e,T))}},i=()=>e,u={setState:r,getState:i,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(pA?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,u);return u},mA=t=>t?ly(t):ly;var lw={exports:{}},uw={},cw={exports:{}},hw={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ts=F;function gA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yA=typeof Object.is=="function"?Object.is:gA,vA=ts.useState,_A=ts.useEffect,wA=ts.useLayoutEffect,EA=ts.useDebugValue;function TA(t,e){var n=e(),r=vA({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return wA(function(){i.value=n,i.getSnapshot=e,Zc(i)&&s({inst:i})},[t,n,e]),_A(function(){return Zc(i)&&s({inst:i}),t(function(){Zc(i)&&s({inst:i})})},[t]),EA(n),n}function Zc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yA(t,n)}catch{return!0}}function IA(t,e){return e()}var SA=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?IA:TA;hw.useSyncExternalStore=ts.useSyncExternalStore!==void 0?ts.useSyncExternalStore:SA;cw.exports=hw;var xA=cw.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=F,AA=xA;function RA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kA=typeof Object.is=="function"?Object.is:RA,CA=AA.useSyncExternalStore,PA=bu.useRef,NA=bu.useEffect,bA=bu.useMemo,DA=bu.useDebugValue;uw.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=PA(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=bA(function(){function u(T){if(!c){if(c=!0,f=T,T=r(T),i!==void 0&&o.hasValue){var R=o.value;if(i(R,T))return p=R}return p=T}if(R=p,kA(f,T))return R;var P=r(T);return i!==void 0&&i(R,P)?(f=T,R):(f=T,p=P)}var c=!1,f,p,m=n===void 0?null:n;return[function(){return u(e())},m===null?void 0:function(){return u(m())}]},[e,n,r,i]);var l=CA(t,s[0],s[1]);return NA(function(){o.hasValue=!0,o.value=l},[l]),DA(l),l};lw.exports=uw;var OA=lw.exports;const VA=jv(OA),dw={},{useDebugValue:LA}=Rr,{useSyncExternalStoreWithSelector:MA}=VA;let uy=!1;const UA=t=>t;function jA(t,e=UA,n){(dw?"production":void 0)!=="production"&&n&&!uy&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),uy=!0);const r=MA(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return LA(r),r}const cy=t=>{(dw?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?mA(t):t,n=(r,i)=>jA(e,r,i);return Object.assign(n,e),n},fw=t=>t?cy(t):cy;var hy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,T=c&63;u||(T=64,o||(m=64)),r.push(n[f],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new zA;const m=s<<2|l>>4;if(r.push(m),c!==64){const T=l<<4&240|c>>2;if(r.push(T),p!==64){const R=c<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const BA=function(t){const e=pw(t);return mw.encodeByteArray(e,!0)},Jl=function(t){return BA(t).replace(/\./g,"")},gw=function(t){try{return mw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=()=>$A().__FIREBASE_DEFAULTS__,HA=()=>{if(typeof process>"u"||typeof hy>"u")return;const t=hy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gw(t[1]);return e&&JSON.parse(e)},Du=()=>{try{return WA()||HA()||qA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yw=t=>{var e,n;return(n=(e=Du())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$f=t=>{const e=yw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vw=()=>{var t;return(t=Du())===null||t===void 0?void 0:t.config},_w=t=>{var e;return(e=Du())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Jl(JSON.stringify(n)),Jl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function QA(){var t;const e=(t=Du())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function XA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function YA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZA(){const t=lt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eR(){return!QA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tR(){try{return typeof indexedDB=="object"}catch{return!1}}function nR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="FirebaseError";class Xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rR,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ra.prototype.create)}}class ra{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iR(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Xt(i,l,r)}}function iR(t,e){return t.replace(sR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sR=/\{\$([^}]+)}/g;function oR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(dy(s)&&dy(o)){if(!Zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function dy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function aR(t,e){const n=new lR(t,e);return n.subscribe.bind(n)}class lR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=eh),i.error===void 0&&(i.error=eh),i.complete===void 0&&(i.complete=eh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new GA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dR(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hR(t){return t===zr?void 0:t}function dR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const pR={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},mR=ne.INFO,gR={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},yR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wf{constructor(e){this.name=e,this._logLevel=mR,this._logHandler=yR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const vR=(t,e)=>e.some(n=>t instanceof n);let fy,py;function _R(){return fy||(fy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wR(){return py||(py=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ew=new WeakMap,dd=new WeakMap,Tw=new WeakMap,th=new WeakMap,Hf=new WeakMap;function ER(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ew.set(n,t)}).catch(()=>{}),Hf.set(e,t),e}function TR(t){if(dd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IR(t){fd=t(fd)}function SR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return Tw.set(r,e.sort?e.sort():[e]),yr(r)}:wR().includes(t)?function(...e){return t.apply(nh(this),e),yr(Ew.get(this))}:function(...e){return yr(t.apply(nh(this),e))}}function xR(t){return typeof t=="function"?SR(t):(t instanceof IDBTransaction&&TR(t),vR(t,_R())?new Proxy(t,fd):t)}function yr(t){if(t instanceof IDBRequest)return ER(t);if(th.has(t))return th.get(t);const e=xR(t);return e!==t&&(th.set(t,e),Hf.set(e,t)),e}const nh=t=>Hf.get(t);function AR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=yr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(yr(o.result),u.oldVersion,u.newVersion,yr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const RR=["get","getKey","getAll","getAllKeys","count"],kR=["put","add","delete","clear"],rh=new Map;function my(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=kR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RR.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return rh.set(e,s),s}IR(t=>({...t,get:(e,n,r)=>my(e,n)||t.get(e,n,r),has:(e,n)=>!!my(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",gy="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Wf("@firebase/app"),NR="@firebase/app-compat",bR="@firebase/analytics-compat",DR="@firebase/analytics",OR="@firebase/app-check-compat",VR="@firebase/app-check",LR="@firebase/auth",MR="@firebase/auth-compat",UR="@firebase/database",jR="@firebase/data-connect",FR="@firebase/database-compat",zR="@firebase/functions",BR="@firebase/functions-compat",$R="@firebase/installations",WR="@firebase/installations-compat",HR="@firebase/messaging",qR="@firebase/messaging-compat",GR="@firebase/performance",KR="@firebase/performance-compat",QR="@firebase/remote-config",XR="@firebase/remote-config-compat",YR="@firebase/storage",JR="@firebase/storage-compat",ZR="@firebase/firestore",ek="@firebase/vertexai-preview",tk="@firebase/firestore-compat",nk="firebase",rk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md="[DEFAULT]",ik={[pd]:"fire-core",[NR]:"fire-core-compat",[DR]:"fire-analytics",[bR]:"fire-analytics-compat",[VR]:"fire-app-check",[OR]:"fire-app-check-compat",[LR]:"fire-auth",[MR]:"fire-auth-compat",[UR]:"fire-rtdb",[jR]:"fire-data-connect",[FR]:"fire-rtdb-compat",[zR]:"fire-fn",[BR]:"fire-fn-compat",[$R]:"fire-iid",[WR]:"fire-iid-compat",[HR]:"fire-fcm",[qR]:"fire-fcm-compat",[GR]:"fire-perf",[KR]:"fire-perf-compat",[QR]:"fire-rc",[XR]:"fire-rc-compat",[YR]:"fire-gcs",[JR]:"fire-gcs-compat",[ZR]:"fire-fst",[tk]:"fire-fst-compat",[ek]:"fire-vertex","fire-js":"fire-js",[nk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Map,sk=new Map,gd=new Map;function yy(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ir(t){const e=t.name;if(gd.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of eu.values())yy(n,t);for(const n of sk.values())yy(n,t);return!0}function sa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ok={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new ra("app","Firebase",ok);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=rk;function Iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:md,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=vw()),!n)throw vr.create("no-options");const s=eu.get(i);if(s){if(Zl(n,s.options)&&Zl(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new fR(i);for(const u of gd.values())o.addComponent(u);const l=new ak(n,r,o);return eu.set(i,l),l}function Ou(t=md){const e=eu.get(t);if(!e&&t===md&&vw())return Iw();if(!e)throw vr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=ik[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(l.join(" "));return}Ir(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="firebase-heartbeat-database",uk=1,zo="firebase-heartbeat-store";let ih=null;function Sw(){return ih||(ih=AR(lk,uk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zo)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function ck(t){try{const n=(await Sw()).transaction(zo),r=await n.objectStore(zo).get(xw(t));return await n.done,r}catch(e){if(e instanceof Xt)Vn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function vy(t,e){try{const r=(await Sw()).transaction(zo,"readwrite");await r.objectStore(zo).put(e,xw(t)),await r.done}catch(n){if(n instanceof Xt)Vn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function xw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=1024,dk=30*24*60*60*1e3;class fk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_y();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=dk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=_y(),{heartbeatsToSend:r,unsentEntries:i}=pk(this._heartbeatsCache.heartbeats),s=Jl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function _y(){return new Date().toISOString().substring(0,10)}function pk(t,e=hk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),wy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tR()?nR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ck(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return vy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wy(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t){Ir(new On("platform-logger",e=>new CR(e),"PRIVATE")),Ir(new On("heartbeat",e=>new fk(e),"PRIVATE")),Lt(pd,gy,t),Lt(pd,gy,"esm2017"),Lt("fire-js","")}gk("");function qf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yk=Aw,Rw=new ra("auth","Firebase",Aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new Wf("@firebase/auth");function vk(t,...e){tu.logLevel<=ne.WARN&&tu.warn(`Auth (${hi}): ${t}`,...e)}function yl(t,...e){tu.logLevel<=ne.ERROR&&tu.error(`Auth (${hi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,...e){throw Kf(t,...e)}function qt(t,...e){return Kf(t,...e)}function Gf(t,e,n){const r=Object.assign(Object.assign({},yk()),{[e]:n});return new ra("auth","Firebase",r).create(e,{appName:t.name})}function Xr(t){return Gf(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _k(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&hn(t,"argument-error"),Gf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Kf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rw.create(t,...e)}function K(t,e,...n){if(!t)throw Kf(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yl(e),new Error(e)}function Ln(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wk(){return Ey()==="http:"||Ey()==="https:"}function Ey(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wk()||YA()||"connection"in navigator)?navigator.onLine:!0}function Tk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ln(n>e,"Short delay should be less than long delay!"),this.isMobile=KA()||JA()}get(){return Ek()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(t,e){Ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=new oa(3e4,6e4);function Xf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _s(t,e,n,r,i={}){return Cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ia(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return XA()||(c.referrerPolicy="no-referrer"),kw.fetch()(Pw(t,t.config.apiHost,n,l),c)})}async function Cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ik),e);try{const i=new Ak(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ya(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ya(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ya(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ya(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Gf(t,f,c);hn(t,f)}}catch(i){if(i instanceof Xt)throw i;hn(t,"network-request-failed",{message:String(i)})}}async function xk(t,e,n,r,i={}){const s=await _s(t,e,n,r,i);return"mfaPendingCredential"in s&&hn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Pw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Qf(t.config,i):`${t.config.apiScheme}://${i}`}class Ak{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),Sk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ya(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=qt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rk(t,e){return _s(t,"POST","/v1/accounts:delete",e)}async function Nw(t,e){return _s(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kk(t,e=!1){const n=ve(t),r=await n.getIdToken(e),i=Yf(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mo(sh(i.auth_time)),issuedAtTime:mo(sh(i.iat)),expirationTime:mo(sh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sh(t){return Number(t)*1e3}function Yf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=gw(n);return i?JSON.parse(i):(yl("Failed to decode base64 JWT payload"),null)}catch(i){return yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ty(t){const e=Yf(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xt&&Ck(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ck({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mo(this.lastLoginAt),this.creationTime=mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Bo(t,Nw(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bw(s.providerUserInfo):[],l=bk(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new vd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Nk(t){const e=ve(t);await nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bw(t){return t.map(e=>{var{providerId:n}=e,r=qf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e){const n=await Cw(t,{},async()=>{const r=ia({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Pw(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",kw.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ok(t,e){return _s(t,"POST","/v2/accounts:revokeToken",Xf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ty(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=Ty(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Dk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=qf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Pk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Bo(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kk(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xn(this.auth.app))return Promise.reject(Xr(this.auth));const e=await this.getIdToken();return await Bo(this,Rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:D,isAnonymous:L,providerData:j,stsTokenManager:I}=n;K(S&&I,e,"internal-error");const v=zi.fromJSON(this.name,I);K(typeof S=="string",e,"internal-error"),qn(p,e.name),qn(m,e.name),K(typeof D=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),qn(T,e.name),qn(R,e.name),qn(P,e.name),qn(N,e.name),qn(w,e.name),qn(_,e.name);const E=new Rn({uid:S,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:L,photoURL:R,phoneNumber:T,tenantId:P,stsTokenManager:v,createdAt:w,lastLoginAt:_});return j&&Array.isArray(j)&&(E.providerData=j.map(x=>Object.assign({},x))),N&&(E._redirectEventId=N),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new zi;i.updateFromServerResponse(n);const s=new Rn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?bw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new zi;l.updateFromIdToken(r);const u=new Rn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy=new Map;function kn(t){Ln(t instanceof Function,"Expected a class definition");let e=Iy.get(t);return e?(Ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Iy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dw.type="NONE";const Sy=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bi(kn(Sy),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(Sy);const o=vl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const f=await c._get(o);if(f){const p=Rn._fromJSON(e,f);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Bi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jw(e))return"Blackberry";if(Fw(e))return"Webos";if(Vw(e))return"Safari";if((e.includes("chrome/")||Lw(e))&&!e.includes("edge/"))return"Chrome";if(Uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ow(t=lt()){return/firefox\//i.test(t)}function Vw(t=lt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lw(t=lt()){return/crios\//i.test(t)}function Mw(t=lt()){return/iemobile/i.test(t)}function Uw(t=lt()){return/android/i.test(t)}function jw(t=lt()){return/blackberry/i.test(t)}function Fw(t=lt()){return/webos/i.test(t)}function Jf(t=lt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Vk(t=lt()){var e;return Jf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lk(){return ZA()&&document.documentMode===10}function zw(t=lt()){return Jf(t)||Uw(t)||Fw(t)||jw(t)||/windows phone/i.test(t)||Mw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e=[]){let n;switch(t){case"Browser":n=xy(lt());break;case"Worker":n=`${xy(lt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,e={}){return _s(t,"GET","/v2/passwordPolicy",Xf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jk=6;class Fk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ay(this),this.idTokenSubscription=new Ay(this),this.beforeStateQueue=new Mk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nw(this,{idToken:e}),r=await Rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Tk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xn(this.app))return Promise.reject(Xr(this));const n=e?ve(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xn(this.app)?Promise.reject(Xr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xn(this.app)?Promise.reject(Xr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Uk(this),n=new Fk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ra("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ok(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Bi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vu(t){return ve(t)}class Ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=aR(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bk(t){Zf=t}function $k(t){return Zf.loadJS(t)}function Wk(){return Zf.gapiScript}function Hk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e){const n=sa(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zl(s,e??{}))return i;hn(i,"already-initialized")}return n.initialize({options:e})}function Gk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Kk(t,e,n){const r=Vu(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=$w(e),{host:o,port:l}=Qk(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Xk()}function $w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qk(t){const e=$w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ry(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ry(o)}}}function Ry(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e){return xk(t,"POST","/v1/accounts:signInWithIdp",Xf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="http://localhost";class ii extends Ww{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ii(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=qf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ii(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$i(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:Yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ia(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends ep{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends aa{constructor(){super("facebook.com")}static credential(e){return ii._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ii._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends aa{constructor(){super("github.com")}static credential(e){return ii._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends aa{constructor(){super("twitter.com")}static credential(e,n){return ii._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rn._fromIdTokenResponse(e,r,i),o=ky(r);return new ns({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ky(r);return new ns({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ky(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends Xt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ru.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ru(e,n,r,i)}}function Hw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ru._fromErrorAndOperation(t,s,e,r):s})}async function Jk(t,e,n=!1){const r=await Bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(t,e,n=!1){const{auth:r}=t;if(xn(r.app))return Promise.reject(Xr(r));const i="reauthenticate";try{const s=await Bo(t,Hw(r,i,e,t),n);K(s.idToken,r,"internal-error");const o=Yf(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(t.uid===l,r,"user-mismatch"),ns._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eC(t,e,n=!1){if(xn(t.app))return Promise.reject(Xr(t));const r="signIn",i=await Hw(t,r,e),s=await ns._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tC(t,e,n,r){return ve(t).onIdTokenChanged(e,n,r)}function nC(t,e,n){return ve(t).beforeAuthStateChanged(e,n)}function rC(t,e,n,r){return ve(t).onAuthStateChanged(e,n,r)}function iC(t){return ve(t).signOut()}const iu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=1e3,oC=10;class Gw extends qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Lk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gw.type="LOCAL";const aC=Gw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw extends qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Kw.type="SESSION";const Qw=Kw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await lC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=tp("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function cC(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function hC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fC(){return Xw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="firebaseLocalStorageDb",pC=1,su="firebaseLocalStorage",Jw="fbase_key";class la{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mu(t,e){return t.transaction([su],e?"readwrite":"readonly").objectStore(su)}function mC(){const t=indexedDB.deleteDatabase(Yw);return new la(t).toPromise()}function _d(){const t=indexedDB.open(Yw,pC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(su,{keyPath:Jw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(su)?e(r):(r.close(),await mC(),e(await _d()))})})}async function Cy(t,e,n){const r=Mu(t,!0).put({[Jw]:e,value:n});return new la(r).toPromise()}async function gC(t,e){const n=Mu(t,!1).get(e),r=await new la(n).toPromise();return r===void 0?null:r.value}function Py(t,e){const n=Mu(t,!0).delete(e);return new la(n).toPromise()}const yC=800,vC=3;class Zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lu._getInstance(fC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hC(),!this.activeServiceWorker)return;this.sender=new uC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await Cy(e,iu,"1"),await Py(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Py(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Mu(i,!1).getAll();return new la(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zw.type="LOCAL";const _C=Zw;new oa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(t,e){return e?kn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends Ww{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function wC(t){return eC(t.auth,new np(t),t.bypassAuthState)}function EC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Zk(n,new np(t),t.bypassAuthState)}async function TC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Jk(n,new np(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wC;case"linkViaPopup":case"linkViaRedirect":return TC;case"reauthViaPopup":case"reauthViaRedirect":return EC;default:hn(this.auth,"internal-error")}}resolve(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=new oa(2e3,1e4);async function SC(t,e,n){if(xn(t.app))return Promise.reject(qt(t,"operation-not-supported-in-this-environment"));const r=Vu(t);_k(t,e,ep);const i=eE(r,n);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}class Hr extends tE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ln(this.filter.length===1,"Popup operations only handle one event");const e=tp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IC.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="pendingRedirect",_l=new Map;class AC extends tE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await RC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RC(t,e){const n=PC(e),r=CC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kC(t,e){_l.set(t._key(),e)}function CC(t){return kn(t._redirectPersistence)}function PC(t){return vl(xC,t.config.apiKey,t.name)}async function NC(t,e,n=!1){if(xn(t.app))return Promise.reject(Xr(t));const r=Vu(t),i=eE(r,e),o=await new AC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=10*60*1e3;class DC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ny(e))}saveEventToCache(e){this.cachedEventUids.add(Ny(e)),this.lastProcessedEventTime=Date.now()}}function Ny(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(t,e={}){return _s(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MC=/^https?/;async function UC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await VC(t);for(const n of e)try{if(jC(n))return}catch{}hn(t,"unauthorized-domain")}function jC(t){const e=yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MC.test(n))return!1;if(LC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=new oa(3e4,6e4);function by(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zC(t){return new Promise((e,n)=>{var r,i,s;function o(){by(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{by(),n(qt(t,"network-request-failed"))},timeout:FC.get()})}if(!((i=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=on().gapi)===null||s===void 0)&&s.load)o();else{const l=Hk("iframefcb");return on()[l]=()=>{gapi.load?o():n(qt(t,"network-request-failed"))},$k(`${Wk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw wl=null,e})}let wl=null;function BC(t){return wl=wl||zC(t),wl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new oa(5e3,15e3),WC="__/auth/iframe",HC="emulator/auth/iframe",qC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function KC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qf(e,HC):`https://${t.config.authDomain}/${WC}`,r={apiKey:e.apiKey,appName:t.name,v:hi},i=GC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ia(r).slice(1)}`}async function QC(t){const e=await BC(t),n=on().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:KC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=qt(t,"network-request-failed"),l=on().setTimeout(()=>{s(o)},$C.get());function u(){on().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YC=500,JC=600,ZC="_blank",eP="http://localhost";class Dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tP(t,e,n,r=YC,i=JC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},XC),{width:r.toString(),height:i.toString(),top:s,left:o}),c=lt().toLowerCase();n&&(l=Lw(c)?ZC:n),Ow(c)&&(e=e||eP,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[T,R])=>`${m}${T}=${R},`,"");if(Vk(c)&&l!=="_self")return nP(e||"",l),new Dy(null);const p=window.open(e||"",l,f);K(p,t,"popup-blocked");try{p.focus()}catch{}return new Dy(p)}function nP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP="__/auth/handler",iP="emulator/auth/handler",sP=encodeURIComponent("fac");async function Oy(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hi,eventId:i};if(e instanceof ep){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",oR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof aa){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),c=u?`#${sP}=${encodeURIComponent(u)}`:"";return`${oP(t)}?${ia(l).slice(1)}${c}`}function oP({config:t}){return t.emulator?Qf(t,iP):`https://${t.authDomain}/${rP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="webStorageSupport";class aP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qw,this._completeRedirectFn=NC,this._overrideRedirectResult=kC}async _openPopup(e,n,r,i){var s;Ln((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Oy(e,n,r,yd(),i);return tP(e,o,tp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Oy(e,n,r,yd(),i);return cC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ln(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QC(e),r=new DC(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oh,{type:oh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oh];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zw()||Vw()||Jf()}}const lP=aP;var Vy="@firebase/auth",Ly="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hP(t){Ir(new On("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bw(t)},c=new zk(r,i,s,u);return Gk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ir(new On("auth-internal",e=>{const n=Vu(e.getProvider("auth").getImmediate());return(r=>new uP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Vy,Ly,cP(t)),Lt(Vy,Ly,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=5*60,fP=_w("authIdTokenMaxAge")||dP;let My=null;const pP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fP)return;const i=n==null?void 0:n.token;My!==i&&(My=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function mP(t=Ou()){const e=sa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qk(t,{popupRedirectResolver:lP,persistence:[_C,aC,Qw]}),r=_w("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pP(s.toString());nC(n,o,()=>o(n.currentUser)),tC(n,l=>o(l))}}const i=yw("auth");return i&&Kk(n,`http://${i}`),n}function gP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Bk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",gP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hP("Browser");var Uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yr,rE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function E(){}E.prototype=v.prototype,I.D=v.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(x,k,C){for(var A=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)A[Be-2]=arguments[Be];return v.prototype[k].apply(x,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,v,E){E||(E=0);var x=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)x[k]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(k=0;16>k;++k)x[k]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=I.g[0],E=I.g[1],k=I.g[2];var C=I.g[3],A=v+(C^E&(k^C))+x[0]+3614090360&4294967295;v=E+(A<<7&4294967295|A>>>25),A=C+(k^v&(E^k))+x[1]+3905402710&4294967295,C=v+(A<<12&4294967295|A>>>20),A=k+(E^C&(v^E))+x[2]+606105819&4294967295,k=C+(A<<17&4294967295|A>>>15),A=E+(v^k&(C^v))+x[3]+3250441966&4294967295,E=k+(A<<22&4294967295|A>>>10),A=v+(C^E&(k^C))+x[4]+4118548399&4294967295,v=E+(A<<7&4294967295|A>>>25),A=C+(k^v&(E^k))+x[5]+1200080426&4294967295,C=v+(A<<12&4294967295|A>>>20),A=k+(E^C&(v^E))+x[6]+2821735955&4294967295,k=C+(A<<17&4294967295|A>>>15),A=E+(v^k&(C^v))+x[7]+4249261313&4294967295,E=k+(A<<22&4294967295|A>>>10),A=v+(C^E&(k^C))+x[8]+1770035416&4294967295,v=E+(A<<7&4294967295|A>>>25),A=C+(k^v&(E^k))+x[9]+2336552879&4294967295,C=v+(A<<12&4294967295|A>>>20),A=k+(E^C&(v^E))+x[10]+4294925233&4294967295,k=C+(A<<17&4294967295|A>>>15),A=E+(v^k&(C^v))+x[11]+2304563134&4294967295,E=k+(A<<22&4294967295|A>>>10),A=v+(C^E&(k^C))+x[12]+1804603682&4294967295,v=E+(A<<7&4294967295|A>>>25),A=C+(k^v&(E^k))+x[13]+4254626195&4294967295,C=v+(A<<12&4294967295|A>>>20),A=k+(E^C&(v^E))+x[14]+2792965006&4294967295,k=C+(A<<17&4294967295|A>>>15),A=E+(v^k&(C^v))+x[15]+1236535329&4294967295,E=k+(A<<22&4294967295|A>>>10),A=v+(k^C&(E^k))+x[1]+4129170786&4294967295,v=E+(A<<5&4294967295|A>>>27),A=C+(E^k&(v^E))+x[6]+3225465664&4294967295,C=v+(A<<9&4294967295|A>>>23),A=k+(v^E&(C^v))+x[11]+643717713&4294967295,k=C+(A<<14&4294967295|A>>>18),A=E+(C^v&(k^C))+x[0]+3921069994&4294967295,E=k+(A<<20&4294967295|A>>>12),A=v+(k^C&(E^k))+x[5]+3593408605&4294967295,v=E+(A<<5&4294967295|A>>>27),A=C+(E^k&(v^E))+x[10]+38016083&4294967295,C=v+(A<<9&4294967295|A>>>23),A=k+(v^E&(C^v))+x[15]+3634488961&4294967295,k=C+(A<<14&4294967295|A>>>18),A=E+(C^v&(k^C))+x[4]+3889429448&4294967295,E=k+(A<<20&4294967295|A>>>12),A=v+(k^C&(E^k))+x[9]+568446438&4294967295,v=E+(A<<5&4294967295|A>>>27),A=C+(E^k&(v^E))+x[14]+3275163606&4294967295,C=v+(A<<9&4294967295|A>>>23),A=k+(v^E&(C^v))+x[3]+4107603335&4294967295,k=C+(A<<14&4294967295|A>>>18),A=E+(C^v&(k^C))+x[8]+1163531501&4294967295,E=k+(A<<20&4294967295|A>>>12),A=v+(k^C&(E^k))+x[13]+2850285829&4294967295,v=E+(A<<5&4294967295|A>>>27),A=C+(E^k&(v^E))+x[2]+4243563512&4294967295,C=v+(A<<9&4294967295|A>>>23),A=k+(v^E&(C^v))+x[7]+1735328473&4294967295,k=C+(A<<14&4294967295|A>>>18),A=E+(C^v&(k^C))+x[12]+2368359562&4294967295,E=k+(A<<20&4294967295|A>>>12),A=v+(E^k^C)+x[5]+4294588738&4294967295,v=E+(A<<4&4294967295|A>>>28),A=C+(v^E^k)+x[8]+2272392833&4294967295,C=v+(A<<11&4294967295|A>>>21),A=k+(C^v^E)+x[11]+1839030562&4294967295,k=C+(A<<16&4294967295|A>>>16),A=E+(k^C^v)+x[14]+4259657740&4294967295,E=k+(A<<23&4294967295|A>>>9),A=v+(E^k^C)+x[1]+2763975236&4294967295,v=E+(A<<4&4294967295|A>>>28),A=C+(v^E^k)+x[4]+1272893353&4294967295,C=v+(A<<11&4294967295|A>>>21),A=k+(C^v^E)+x[7]+4139469664&4294967295,k=C+(A<<16&4294967295|A>>>16),A=E+(k^C^v)+x[10]+3200236656&4294967295,E=k+(A<<23&4294967295|A>>>9),A=v+(E^k^C)+x[13]+681279174&4294967295,v=E+(A<<4&4294967295|A>>>28),A=C+(v^E^k)+x[0]+3936430074&4294967295,C=v+(A<<11&4294967295|A>>>21),A=k+(C^v^E)+x[3]+3572445317&4294967295,k=C+(A<<16&4294967295|A>>>16),A=E+(k^C^v)+x[6]+76029189&4294967295,E=k+(A<<23&4294967295|A>>>9),A=v+(E^k^C)+x[9]+3654602809&4294967295,v=E+(A<<4&4294967295|A>>>28),A=C+(v^E^k)+x[12]+3873151461&4294967295,C=v+(A<<11&4294967295|A>>>21),A=k+(C^v^E)+x[15]+530742520&4294967295,k=C+(A<<16&4294967295|A>>>16),A=E+(k^C^v)+x[2]+3299628645&4294967295,E=k+(A<<23&4294967295|A>>>9),A=v+(k^(E|~C))+x[0]+4096336452&4294967295,v=E+(A<<6&4294967295|A>>>26),A=C+(E^(v|~k))+x[7]+1126891415&4294967295,C=v+(A<<10&4294967295|A>>>22),A=k+(v^(C|~E))+x[14]+2878612391&4294967295,k=C+(A<<15&4294967295|A>>>17),A=E+(C^(k|~v))+x[5]+4237533241&4294967295,E=k+(A<<21&4294967295|A>>>11),A=v+(k^(E|~C))+x[12]+1700485571&4294967295,v=E+(A<<6&4294967295|A>>>26),A=C+(E^(v|~k))+x[3]+2399980690&4294967295,C=v+(A<<10&4294967295|A>>>22),A=k+(v^(C|~E))+x[10]+4293915773&4294967295,k=C+(A<<15&4294967295|A>>>17),A=E+(C^(k|~v))+x[1]+2240044497&4294967295,E=k+(A<<21&4294967295|A>>>11),A=v+(k^(E|~C))+x[8]+1873313359&4294967295,v=E+(A<<6&4294967295|A>>>26),A=C+(E^(v|~k))+x[15]+4264355552&4294967295,C=v+(A<<10&4294967295|A>>>22),A=k+(v^(C|~E))+x[6]+2734768916&4294967295,k=C+(A<<15&4294967295|A>>>17),A=E+(C^(k|~v))+x[13]+1309151649&4294967295,E=k+(A<<21&4294967295|A>>>11),A=v+(k^(E|~C))+x[4]+4149444226&4294967295,v=E+(A<<6&4294967295|A>>>26),A=C+(E^(v|~k))+x[11]+3174756917&4294967295,C=v+(A<<10&4294967295|A>>>22),A=k+(v^(C|~E))+x[2]+718787259&4294967295,k=C+(A<<15&4294967295|A>>>17),A=E+(C^(k|~v))+x[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(k+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+C&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var E=v-this.blockSize,x=this.B,k=this.h,C=0;C<v;){if(k==0)for(;C<=E;)i(this,I,C),C+=this.blockSize;if(typeof I=="string"){for(;C<v;)if(x[k++]=I.charCodeAt(C++),k==this.blockSize){i(this,x),k=0;break}}else for(;C<v;)if(x[k++]=I[C++],k==this.blockSize){i(this,x),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var E=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=E&255,E/=256;for(this.u(I),I=Array(16),v=E=0;4>v;++v)for(var x=0;32>x;x+=8)I[E++]=this.g[v]>>>x&255;return I};function s(I,v){var E=l;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=v(I)}function o(I,v){this.h=v;for(var E=[],x=!0,k=I.length-1;0<=k;k--){var C=I[k]|0;x&&C==v||(E[k]=C,x=!1)}this.g=E}var l={};function u(I){return-128<=I&&128>I?s(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function c(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return N(c(-I));for(var v=[],E=1,x=0;I>=E;x++)v[x]=I/E|0,E*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return N(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(v,8)),x=p,k=0;k<I.length;k+=8){var C=Math.min(8,I.length-k),A=parseInt(I.substring(k,k+C),v);8>C?(C=c(Math.pow(v,C)),x=x.j(C).add(c(A))):(x=x.j(E),x=x.add(c(A)))}return x}var p=u(0),m=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var I=0,v=1,E=0;E<this.g.length;E++){var x=this.i(E);I+=(0<=x?x:4294967296+x)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(R(this))return"0";if(P(this))return"-"+N(this).toString(I);for(var v=c(Math.pow(I,6)),E=this,x="";;){var k=D(E,v).g;E=w(E,k.j(v));var C=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=k,R(E))return C+x;for(;6>C.length;)C="0"+C;x=C+x}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function R(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=w(this,I),P(I)?-1:R(I)?0:1};function N(I){for(var v=I.g.length,E=[],x=0;x<v;x++)E[x]=~I.g[x];return new o(E,~I.h).add(m)}t.abs=function(){return P(this)?N(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],x=0,k=0;k<=v;k++){var C=x+(this.i(k)&65535)+(I.i(k)&65535),A=(C>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);x=A>>>16,C&=65535,A&=65535,E[k]=A<<16|C}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(I,v){return I.add(N(v))}t.j=function(I){if(R(this)||R(I))return p;if(P(this))return P(I)?N(this).j(N(I)):N(N(this).j(I));if(P(I))return N(this.j(N(I)));if(0>this.l(T)&&0>I.l(T))return c(this.m()*I.m());for(var v=this.g.length+I.g.length,E=[],x=0;x<2*v;x++)E[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<I.g.length;k++){var C=this.i(x)>>>16,A=this.i(x)&65535,Be=I.i(k)>>>16,Yt=I.i(k)&65535;E[2*x+2*k]+=A*Yt,_(E,2*x+2*k),E[2*x+2*k+1]+=C*Yt,_(E,2*x+2*k+1),E[2*x+2*k+1]+=A*Be,_(E,2*x+2*k+1),E[2*x+2*k+2]+=C*Be,_(E,2*x+2*k+2)}for(x=0;x<v;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=v;x<2*v;x++)E[x]=0;return new o(E,0)};function _(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function S(I,v){this.g=I,this.h=v}function D(I,v){if(R(v))throw Error("division by zero");if(R(I))return new S(p,p);if(P(I))return v=D(N(I),v),new S(N(v.g),N(v.h));if(P(v))return v=D(I,N(v)),new S(N(v.g),v.h);if(30<I.g.length){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var E=m,x=v;0>=x.l(I);)E=L(E),x=L(x);var k=j(E,1),C=j(x,1);for(x=j(x,2),E=j(E,2);!R(x);){var A=C.add(x);0>=A.l(I)&&(k=k.add(E),C=A),x=j(x,1),E=j(E,1)}return v=w(I,k.j(v)),new S(k,v)}for(k=p;0<=I.l(v);){for(E=Math.max(1,Math.floor(I.m()/v.m())),x=Math.ceil(Math.log(E)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),C=c(E),A=C.j(v);P(A)||0<A.l(I);)E-=x,C=c(E),A=C.j(v);R(C)&&(C=m),k=k.add(C),I=w(I,A)}return new S(k,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],x=0;x<v;x++)E[x]=this.i(x)&I.i(x);return new o(E,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],x=0;x<v;x++)E[x]=this.i(x)|I.i(x);return new o(E,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],x=0;x<v;x++)E[x]=this.i(x)^I.i(x);return new o(E,this.h^I.h)};function L(I){for(var v=I.g.length+1,E=[],x=0;x<v;x++)E[x]=I.i(x)<<1|I.i(x-1)>>>31;return new o(E,I.h)}function j(I,v){var E=v>>5;v%=32;for(var x=I.g.length-E,k=[],C=0;C<x;C++)k[C]=0<v?I.i(C+E)>>>v|I.i(C+E+1)<<32-v:I.i(C+E);return new o(k,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,rE=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=f,Yr=o}).apply(typeof Uy<"u"?Uy:typeof self<"u"?self:typeof window<"u"?window:{});var Ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var iE,to,sE,El,wd,oE,aE,lE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ja=="object"&&Ja];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var b=a[g];if(!(b in d))break e;d=d[b]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,b={next:function(){if(!g&&d<a.length){var O=d++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,g),a.apply(h,b)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function T(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,b,O){for(var z=Array(arguments.length-2),he=2;he<arguments.length;he++)z[he-2]=arguments[he];return h.prototype[b].apply(g,z)}}function P(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const b=a.length||0,O=g.length||0;a.length=b+O;for(let z=0;z<O;z++)a[b+z]=g[z]}else a.push(g)}}class w{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function _(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var L=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function j(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,h){let d,g;for(let b=1;b<arguments.length;b++){g=arguments[b];for(d in g)a[d]=g[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function k(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function C(a){l.setTimeout(()=>{throw a},0)}function A(){var a=G;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Be{constructor(){this.h=this.g=null}add(h,d){const g=Yt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Yt=new w(()=>new Jt,a=>a.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Nt,B=!1,G=new Be,X=()=>{const a=l.Promise.resolve(void 0);Nt=()=>{a.then(ie)}};var ie=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(d){C(d)}var h=Yt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ce(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ce.prototype.h=function(){this.defaultPrevented=!0};var fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function pn(a,h){if(Ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{D(h.nodeName);var b=!0;break e}catch{}b=!1}b||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:mn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pn.aa.h.call(this)}}R(pn,Ce);var mn={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),oI=0;function aI(a,h,d,g,b){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=b,this.key=++oI,this.da=this.fa=!1}function ga(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ya(a){this.src=a,this.g={},this.h=0}ya.prototype.add=function(a,h,d,g,b){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var z=ic(a,h,g,b);return-1<z?(h=a[z],d||(h.fa=!1)):(h=new aI(h,this.src,O,!!g,b),h.fa=d,a.push(h)),h};function rc(a,h){var d=h.type;if(d in a.g){var g=a.g[d],b=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=b)&&Array.prototype.splice.call(g,b,1),O&&(ga(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ic(a,h,d,g){for(var b=0;b<a.length;++b){var O=a[b];if(!O.da&&O.listener==h&&O.capture==!!d&&O.ha==g)return b}return-1}var sc="closure_lm_"+(1e6*Math.random()|0),oc={};function Hp(a,h,d,g,b){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Hp(a,h[O],d,g,b);return null}return d=Kp(d),a&&a[gn]?a.K(h,d,c(g)?!!g.capture:!1,b):lI(a,h,d,!1,g,b)}function lI(a,h,d,g,b,O){if(!h)throw Error("Invalid event type");var z=c(b)?!!b.capture:!!b,he=lc(a);if(he||(a[sc]=he=new ya(a)),d=he.add(h,d,g,z,O),d.proxy)return d;if(g=uI(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)fn||(b=z),b===void 0&&(b=!1),a.addEventListener(h.toString(),g,b);else if(a.attachEvent)a.attachEvent(Gp(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function uI(){function a(d){return h.call(a.src,a.listener,d)}const h=cI;return a}function qp(a,h,d,g,b){if(Array.isArray(h))for(var O=0;O<h.length;O++)qp(a,h[O],d,g,b);else g=c(g)?!!g.capture:!!g,d=Kp(d),a&&a[gn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],d=ic(O,d,g,b),-1<d&&(ga(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=lc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ic(h,d,g,b)),(d=-1<a?h[a]:null)&&ac(d))}function ac(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gn])rc(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(Gp(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=lc(h))?(rc(d,a),d.h==0&&(d.src=null,h[sc]=null)):ga(a)}}}function Gp(a){return a in oc?oc[a]:oc[a]="on"+a}function cI(a,h){if(a.da)a=!0;else{h=new pn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&ac(a),a=d.call(g,h)}return a}function lc(a){return a=a[sc],a instanceof ya?a:null}var uc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Kp(a){return typeof a=="function"?a:(a[uc]||(a[uc]=function(h){return a.handleEvent(h)}),a[uc])}function Ye(){ce.call(this),this.i=new ya(this),this.M=this,this.F=null}R(Ye,ce),Ye.prototype[gn]=!0,Ye.prototype.removeEventListener=function(a,h,d,g){qp(this,a,h,d,g)};function ut(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ce(h,a);else if(h instanceof Ce)h.target=h.target||a;else{var b=h;h=new Ce(g,a),x(h,b)}if(b=!0,d)for(var O=d.length-1;0<=O;O--){var z=h.g=d[O];b=va(z,g,!0,h)&&b}if(z=h.g=a,b=va(z,g,!0,h)&&b,b=va(z,g,!1,h)&&b,d)for(O=0;O<d.length;O++)z=h.g=d[O],b=va(z,g,!1,h)&&b}Ye.prototype.N=function(){if(Ye.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ga(d[g]);delete a.g[h],a.h--}}this.F=null},Ye.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},Ye.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function va(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var b=!0,O=0;O<h.length;++O){var z=h[O];if(z&&!z.da&&z.capture==d){var he=z.listener,$e=z.ha||z.src;z.fa&&rc(a.i,z),b=he.call($e,g)!==!1&&b}}return b&&!g.defaultPrevented}function Qp(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Xp(a){a.g=Qp(()=>{a.g=null,a.i&&(a.i=!1,Xp(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class hI extends ce{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Xp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xs(a){ce.call(this),this.h=a,this.g={}}R(xs,ce);var Yp=[];function Jp(a){j(a.g,function(h,d){this.g.hasOwnProperty(d)&&ac(h)},a),a.g={}}xs.prototype.N=function(){xs.aa.N.call(this),Jp(this)},xs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cc=l.JSON.stringify,dI=l.JSON.parse,fI=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hc(){}hc.prototype.h=null;function Zp(a){return a.h||(a.h=a.i())}function em(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function dc(){Ce.call(this,"d")}R(dc,Ce);function fc(){Ce.call(this,"c")}R(fc,Ce);var Or={},tm=null;function _a(){return tm=tm||new Ye}Or.La="serverreachability";function nm(a){Ce.call(this,Or.La,a)}R(nm,Ce);function Rs(a){const h=_a();ut(h,new nm(h))}Or.STAT_EVENT="statevent";function rm(a,h){Ce.call(this,Or.STAT_EVENT,a),this.stat=h}R(rm,Ce);function ct(a){const h=_a();ut(h,new rm(h,a))}Or.Ma="timingevent";function im(a,h){Ce.call(this,Or.Ma,a),this.size=h}R(im,Ce);function ks(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Cs(){this.g=!0}Cs.prototype.xa=function(){this.g=!1};function pI(a,h,d,g,b,O){a.info(function(){if(a.g)if(O)for(var z="",he=O.split("&"),$e=0;$e<he.length;$e++){var oe=he[$e].split("=");if(1<oe.length){var Je=oe[0];oe=oe[1];var Ze=Je.split("_");z=2<=Ze.length&&Ze[1]=="type"?z+(Je+"="+oe+"&"):z+(Je+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+g+") [attempt "+b+"]: "+h+`
`+d+`
`+z})}function mI(a,h,d,g,b,O,z){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+b+"]: "+h+`
`+d+`
`+O+" "+z})}function mi(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+yI(a,d)+(g?" "+g:"")})}function gI(a,h){a.info(function(){return"TIMEOUT: "+h})}Cs.prototype.info=function(){};function yI(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var b=g[1];if(Array.isArray(b)&&!(1>b.length)){var O=b[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<b.length;z++)b[z]=""}}}}return cc(d)}catch{return h}}var wa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},sm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pc;function Ea(){}R(Ea,hc),Ea.prototype.g=function(){return new XMLHttpRequest},Ea.prototype.i=function(){return{}},pc=new Ea;function Bn(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new xs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new om}function om(){this.i=null,this.g="",this.h=!1}var am={},mc={};function gc(a,h,d){a.L=1,a.v=xa(yn(h)),a.m=d,a.P=!0,lm(a,null)}function lm(a,h){a.F=Date.now(),Ta(a),a.A=yn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Tm(d.i,"t",g),a.C=0,d=a.j.J,a.h=new om,a.g=Fm(a.j,d?h:null,!a.m),0<a.O&&(a.M=new hI(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var b="readystatechange";Array.isArray(b)||(b&&(Yp[0]=b.toString()),b=Yp);for(var O=0;O<b.length;O++){var z=Hp(d,b[O],g||h.handleEvent,!1,h.h||h);if(!z)break;h.g[z.key]=z}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Rs(),pI(a.i,a.u,a.A,a.l,a.R,a.m)}Bn.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},Bn.prototype.Y=function(a){try{if(a==this.g)e:{const Ze=vn(this.g);var h=this.g.Ba();const vi=this.g.Z();if(!(3>Ze)&&(Ze!=3||this.g&&(this.h.h||this.g.oa()||Cm(this.g)))){this.J||Ze!=4||h==7||(h==8||0>=vi?Rs(3):Rs(2)),yc(this);var d=this.g.Z();this.X=d;t:if(um(this)){var g=Cm(this.g);a="";var b=g.length,O=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),Ps(this);var z="";break t}this.h.i=new l.TextDecoder}for(h=0;h<b;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==b-1)});g.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=d==200,mI(this.i,this.u,this.A,this.l,this.R,Ze,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,$e=this.g;if((he=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(he)){var oe=he;break t}}oe=null}if(d=oe)mi(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vc(this,d);else{this.o=!1,this.s=3,ct(12),Vr(this),Ps(this);break e}}if(this.P){d=!0;let jt;for(;!this.J&&this.C<z.length;)if(jt=vI(this,z),jt==mc){Ze==4&&(this.s=4,ct(14),d=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==am){this.s=4,ct(15),mi(this.i,this.l,z,"[Invalid Chunk]"),d=!1;break}else mi(this.i,this.l,jt,null),vc(this,jt);if(um(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ze!=4||z.length!=0||this.h.h||(this.s=1,ct(16),d=!1),this.o=this.o&&d,!d)mi(this.i,this.l,z,"[Invalid Chunked Response]"),Vr(this),Ps(this);else if(0<z.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),Sc(Je),Je.M=!0,ct(11))}}else mi(this.i,this.l,z,null),vc(this,z);Ze==4&&Vr(this),this.o&&!this.J&&(Ze==4?Lm(this.j,this):(this.o=!1,Ta(this)))}else VI(this.g),d==400&&0<z.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),Vr(this),Ps(this)}}}catch{}finally{}};function um(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vI(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?mc:(d=Number(h.substring(d,g)),isNaN(d)?am:(g+=1,g+d>h.length?mc:(h=h.slice(g,g+d),a.C=g+d,h)))}Bn.prototype.cancel=function(){this.J=!0,Vr(this)};function Ta(a){a.S=Date.now()+a.I,cm(a,a.I)}function cm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ks(m(a.ba,a),h)}function yc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Bn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(gI(this.i,this.A),this.L!=2&&(Rs(),ct(17)),Vr(this),this.s=2,Ps(this)):cm(this,this.S-a)};function Ps(a){a.j.G==0||a.J||Lm(a.j,a)}function Vr(a){yc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Jp(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function vc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||_c(d.h,a))){if(!a.K&&_c(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var b=g;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Na(d),Ca(d);else break e;Ic(d),ct(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=ks(m(d.Za,d),6e3));if(1>=fm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Mr(d,11)}else if((a.K||d.g==a)&&Na(d),!_(h))for(b=d.Da.g.parse(h),h=0;h<b.length;h++){let oe=b[h];if(d.T=oe[0],oe=oe[1],d.G==2)if(oe[0]=="c"){d.K=oe[1],d.ia=oe[2];const Je=oe[3];Je!=null&&(d.la=Je,d.j.info("VER="+d.la));const Ze=oe[4];Ze!=null&&(d.Aa=Ze,d.j.info("SVER="+d.Aa));const vi=oe[5];vi!=null&&typeof vi=="number"&&0<vi&&(g=1.5*vi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const jt=a.g;if(jt){const Da=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Da){var O=g.h;O.g||Da.indexOf("spdy")==-1&&Da.indexOf("quic")==-1&&Da.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(wc(O,O.h),O.h=null))}if(g.D){const xc=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;xc&&(g.ya=xc,fe(g.I,g.D,xc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var z=a;if(g.qa=jm(g,g.J?g.ia:null,g.W),z.K){pm(g.h,z);var he=z,$e=g.L;$e&&(he.I=$e),he.B&&(yc(he),Ta(he)),g.g=z}else Om(g);0<d.i.length&&Pa(d)}else oe[0]!="stop"&&oe[0]!="close"||Mr(d,7);else d.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Mr(d,7):Tc(d):oe[0]!="noop"&&d.l&&d.l.ta(oe),d.v=0)}}Rs(4)}catch{}}var _I=class{constructor(a,h){this.g=a,this.map=h}};function hm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function dm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fm(a){return a.h?1:a.g?a.g.size:0}function _c(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wc(a,h){a.g?a.g.add(h):a.h=h}function pm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}hm.prototype.cancel=function(){if(this.i=mm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return P(a.i)}function wI(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function EI(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function gm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=EI(a),g=wI(a),b=g.length,O=0;O<b;O++)h.call(void 0,g[O],d&&d[O],a)}var ym=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function TI(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),b=null;if(0<=g){var O=a[d].substring(0,g);b=a[d].substring(g+1)}else O=a[d];h(O,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,Ia(this,a.j),this.o=a.o,this.g=a.g,Sa(this,a.s),this.l=a.l;var h=a.i,d=new Ds;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),vm(this,d),this.m=a.m}else a&&(h=String(a).match(ym))?(this.h=!1,Ia(this,h[1]||"",!0),this.o=Ns(h[2]||""),this.g=Ns(h[3]||"",!0),Sa(this,h[4]),this.l=Ns(h[5]||"",!0),vm(this,h[6]||"",!0),this.m=Ns(h[7]||"")):(this.h=!1,this.i=new Ds(null,this.h))}Lr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(bs(h,_m,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(bs(h,_m,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(bs(d,d.charAt(0)=="/"?xI:SI,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",bs(d,RI)),a.join("")};function yn(a){return new Lr(a)}function Ia(a,h,d){a.j=d?Ns(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Sa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function vm(a,h,d){h instanceof Ds?(a.i=h,kI(a.i,a.h)):(d||(h=bs(h,AI)),a.i=new Ds(h,a.h))}function fe(a,h,d){a.i.set(h,d)}function xa(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ns(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function bs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,II),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function II(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var _m=/[#\/\?@]/g,SI=/[#\?:]/g,xI=/[#\?]/g,AI=/[#\?@]/g,RI=/#/g;function Ds(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&TI(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ds.prototype,t.add=function(a,h){$n(this),this.i=null,a=gi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function wm(a,h){$n(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Em(a,h){return $n(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(d,g){d.forEach(function(b){a.call(h,b,g,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const b=a[g];for(let O=0;O<b.length;O++)d.push(h[g])}return d},t.V=function(a){$n(this);let h=[];if(typeof a=="string")Em(this,a)&&(h=h.concat(this.g.get(gi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return $n(this),this.i=null,a=gi(this,a),Em(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Tm(a,h,d){wm(a,h),0<d.length&&(a.i=null,a.g.set(gi(a,h),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const O=encodeURIComponent(String(g)),z=this.V(g);for(g=0;g<z.length;g++){var b=O;z[g]!==""&&(b+="="+encodeURIComponent(String(z[g]))),a.push(b)}}return this.i=a.join("&")};function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function kI(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(d,g){var b=g.toLowerCase();g!=b&&(wm(this,g),Tm(this,b,d))},a)),a.j=h}function CI(a,h){const d=new Cs;if(l.Image){const g=new Image;g.onload=T(Wn,d,"TestLoadImage: loaded",!0,h,g),g.onerror=T(Wn,d,"TestLoadImage: error",!1,h,g),g.onabort=T(Wn,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=T(Wn,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function PI(a,h){const d=new Cs,g=new AbortController,b=setTimeout(()=>{g.abort(),Wn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(b),O.ok?Wn(d,"TestPingServer: ok",!0,h):Wn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(b),Wn(d,"TestPingServer: error",!1,h)})}function Wn(a,h,d,g,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),g(d)}catch{}}function NI(){this.g=new fI}function bI(a,h,d){const g=d||"";try{gm(a,function(b,O){let z=b;c(b)&&(z=cc(b)),h.push(g+O+"="+encodeURIComponent(z))})}catch(b){throw h.push(g+"type="+encodeURIComponent("_badmap")),b}}function Aa(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Aa,hc),Aa.prototype.g=function(){return new Ra(this.l,this.j)},Aa.prototype.i=function(a){return function(){return a}}({});function Ra(a,h){Ye.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ra,Ye),t=Ra.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Vs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Im(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Im(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Os(this):Vs(this),this.readyState==3&&Im(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Os(this))},t.Qa=function(a){this.g&&(this.response=a,Os(this))},t.ga=function(){this.g&&Os(this)};function Os(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Vs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Vs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ra.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Sm(a){let h="";return j(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function Ec(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Sm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,h,d))}function Se(a){Ye.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Se,Ye);var DI=/^https?$/i,OI=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pc.g(),this.v=this.o?Zp(this.o):Zp(pc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){xm(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var b in g)d.set(b,g[b]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),b=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(OI,h,void 0))||g||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of d)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{km(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){xm(this,O)}};function xm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Am(a),ka(a)}function Am(a){a.A||(a.A=!0,ut(a,"complete"),ut(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ut(this,"complete"),ut(this,"abort"),ka(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ka(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Rm(this):this.bb())},t.bb=function(){Rm(this)};function Rm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Qp(a.Ea,0,a);else if(ut(a,"readystatechange"),vn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=z===0){var b=String(a.D).match(ym)[1]||null;!b&&l.self&&l.self.location&&(b=l.self.location.protocol.slice(0,-1)),g=!DI.test(b?b.toLowerCase():"")}d=g}if(d)ut(a,"complete"),ut(a,"success");else{a.m=6;try{var O=2<vn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Am(a)}}finally{ka(a)}}}}function ka(a,h){if(a.g){km(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ut(a,"ready");try{d.onreadystatechange=g}catch{}}}function km(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),dI(h)}};function Cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function VI(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var d=k(a[g]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=h[b]||[];h[b]=O,O.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function Pm(a){this.Aa=0,this.i=[],this.j=new Cs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,a),this.cb=Ls("retryDelaySeedMs",1e4,a),this.Wa=Ls("forwardChannelMaxRetries",2,a),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hm(a&&a.concurrentRequestLimit),this.Da=new NI,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Pm.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){ct(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=jm(this,null,this.W),Pa(this)};function Tc(a){if(Nm(a),a.G==3){var h=a.U++,d=yn(a.I);if(fe(d,"SID",a.K),fe(d,"RID",h),fe(d,"TYPE","terminate"),Ms(a,d),h=new Bn(a,a.j,h),h.L=2,h.v=xa(yn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=Fm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ta(h)}Um(a)}function Ca(a){a.g&&(Sc(a),a.g.cancel(),a.g=null)}function Nm(a){Ca(a),a.u&&(l.clearTimeout(a.u),a.u=null),Na(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Pa(a){if(!dm(a.h)&&!a.s){a.s=!0;var h=a.Ga;Nt||X(),B||(Nt(),B=!0),G.add(h,a),a.B=0}}function LI(a,h){return fm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ks(m(a.Ga,a,h),Mm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const b=new Bn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),x(O,this.S)):O=this.S),this.m!==null||this.O||(b.H=O,O=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Dm(this,b,h),d=yn(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),Ms(this,d),O&&(this.O?h="headers="+encodeURIComponent(String(Sm(O)))+"&"+h:this.m&&Ec(d,this.m,O)),wc(this.h,b),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",h),fe(d,"SID","null"),b.T=!0,gc(b,d,null)):gc(b,d,h),this.G=2}}else this.G==3&&(a?bm(this,a):this.i.length==0||dm(this.h)||bm(this))};function bm(a,h){var d;h?d=h.l:d=a.U++;const g=yn(a.I);fe(g,"SID",a.K),fe(g,"RID",d),fe(g,"AID",a.T),Ms(a,g),a.m&&a.o&&Ec(g,a.m,a.o),d=new Bn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Dm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),wc(a.h,d),gc(d,g,h)}function Ms(a,h){a.H&&j(a.H,function(d,g){fe(h,g,d)}),a.l&&gm({},function(d,g){fe(h,g,d)})}function Dm(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var b=a.i;let O=-1;for(;;){const z=["count="+d];O==-1?0<d?(O=b[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let he=!0;for(let $e=0;$e<d;$e++){let oe=b[$e].g;const Je=b[$e].map;if(oe-=O,0>oe)O=Math.max(0,b[$e].g-100),he=!1;else try{bI(Je,z,"req"+oe+"_")}catch{g&&g(Je)}}if(he){g=z.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function Om(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Nt||X(),B||(Nt(),B=!0),G.add(h,a),a.v=0}}function Ic(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ks(m(a.Fa,a),Mm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Vm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ks(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Ca(this),Vm(this))};function Sc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Vm(a){a.g=new Bn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),Ms(a,h),a.m&&a.o&&Ec(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=xa(yn(h)),d.m=null,d.P=!0,lm(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ca(this),Ic(this),ct(19))};function Na(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Lm(a,h){var d=null;if(a.g==h){Na(a),Sc(a),a.g=null;var g=2}else if(_c(a.h,h))d=h.D,pm(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var b=a.B;g=_a(),ut(g,new im(g,d)),Pa(a)}else Om(a);else if(b=h.s,b==3||b==0&&0<h.X||!(g==1&&LI(a,h)||g==2&&Ic(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),b){case 1:Mr(a,5);break;case 4:Mr(a,10);break;case 3:Mr(a,6);break;default:Mr(a,2)}}}function Mm(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Mr(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const b=!g;g=new Lr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ia(g,"https"),xa(g),b?CI(g.toString(),d):PI(g.toString(),d)}else ct(2);a.G=0,a.l&&a.l.sa(h),Um(a),Nm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Um(a){if(a.G=0,a.ka=[],a.l){const h=mm(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function jm(a,h,d){var g=d instanceof Lr?yn(d):new Lr(d);if(g.g!="")h&&(g.g=h+"."+g.g),Sa(g,g.s);else{var b=l.location;g=b.protocol,h=h?h+"."+b.hostname:b.hostname,b=+b.port;var O=new Lr(null);g&&Ia(O,g),h&&(O.g=h),b&&Sa(O,b),d&&(O.l=d),g=O}return d=a.D,h=a.ya,d&&h&&fe(g,d,h),fe(g,"VER",a.la),Ms(a,g),g}function Fm(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new Aa({eb:d})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function zm(){}t=zm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ba(){}ba.prototype.g=function(a,h){return new Tt(a,h)};function Tt(a,h){Ye.call(this),this.g=new Pm(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!_(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yi(this)}R(Tt,Ye),Tt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tt.prototype.close=function(){Tc(this.g)},Tt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=cc(a),a=d);h.i.push(new _I(h.Ya++,a)),h.G==3&&Pa(h)},Tt.prototype.N=function(){this.g.l=null,delete this.j,Tc(this.g),delete this.g,Tt.aa.N.call(this)};function Bm(a){dc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Bm,dc);function $m(){fc.call(this),this.status=1}R($m,fc);function yi(a){this.g=a}R(yi,zm),yi.prototype.ua=function(){ut(this.g,"a")},yi.prototype.ta=function(a){ut(this.g,new Bm(a))},yi.prototype.sa=function(a){ut(this.g,new $m)},yi.prototype.ra=function(){ut(this.g,"b")},ba.prototype.createWebChannel=ba.prototype.g,Tt.prototype.send=Tt.prototype.o,Tt.prototype.open=Tt.prototype.m,Tt.prototype.close=Tt.prototype.close,lE=function(){return new ba},aE=function(){return _a()},oE=Or,wd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wa.NO_ERROR=0,wa.TIMEOUT=8,wa.HTTP_ERROR=6,El=wa,sm.COMPLETE="complete",sE=sm,em.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",Ye.prototype.listen=Ye.prototype.K,to=em,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,iE=Se}).apply(typeof Ja<"u"?Ja:typeof self<"u"?self:typeof window<"u"?window:{});const jy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Wf("@firebase/firestore");function qs(){return si.logLevel}function H(t,...e){if(si.logLevel<=ne.DEBUG){const n=e.map(rp);si.debug(`Firestore (${ws}): ${t}`,...n)}}function Mn(t,...e){if(si.logLevel<=ne.ERROR){const n=e.map(rp);si.error(`Firestore (${ws}): ${t}`,...n)}}function rs(t,...e){if(si.logLevel<=ne.WARN){const n=e.map(rp);si.warn(`Firestore (${ws}): ${t}`,...n)}}function rp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function ue(t,e){t||Q()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class vP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _P{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ue(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _r,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _r)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new uE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new rt(e)}}class wP{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class EP{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new wP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ue(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.R=n.token,new TP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=SP(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ue(0,0))}static max(){return new Y(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $o?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends $o{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const xP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends $o{construct(e,n,r){return new qe(e,n,r)}static isValidIdentifier(e){return xP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(n)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ge.fromString(e))}static fromName(e){return new q(ge.fromString(e).popFirst(5))}static empty(){return new q(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ge(e.slice()))}}function AP(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new Sr(i,q.empty(),e)}function RP(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(Y.min(),q.empty(),-1)}static max(){return new Sr(Y.max(),q.empty(),-1)}}function kP(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==CP)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(i=>i?M.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new M((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(f=>{o[c]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new M((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function NP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ca(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ip.oe=-1;function Uu(t){return t==null}function ou(t){return t===0&&1/t==-1/0}function bP(t){return typeof t=="number"&&Number.isInteger(t)&&!ou(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Za(this.root,e,this.comparator,!1)}getReverseIterator(){return new Za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Za(this.root,e,this.comparator,!0)}}class Za{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zy(this.data.getIterator())}getIteratorFrom(e){return new zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new xt([])}unionWith(e){let n=new Ke(qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new xt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new dE("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const DP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(ue(!!t),typeof t=="string"){let e=0;const n=DP.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function oi(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function op(t){const e=t.mapValue.fields.__previous_value__;return sp(e)?op(e):e}function Wo(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Ho{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el={mapValue:{}};function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sp(t)?4:LP(t)?9007199254740991:VP(t)?10:11:Q()}function dn(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=xr(i.timestampValue),l=xr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return oi(i.bytesValue).isEqual(oi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Pe(i.geoPointValue.latitude)===Pe(s.geoPointValue.latitude)&&Pe(i.geoPointValue.longitude)===Pe(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Pe(i.integerValue)===Pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Pe(i.doubleValue),l=Pe(s.doubleValue);return o===l?ou(o)===ou(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Fy(o)!==Fy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return Q()}}function qo(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Pe(s.integerValue||s.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return By(t.timestampValue,e.timestampValue);case 4:return By(Wo(t),Wo(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(s,o){const l=oi(s),u=oi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const f=ae(l[c],u[c]);if(f!==0)return f}return ae(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ae(Pe(s.latitude),Pe(o.latitude));return l!==0?l:ae(Pe(s.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $y(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,f;const p=s.fields||{},m=o.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,R=(u=m.value)===null||u===void 0?void 0:u.arrayValue,P=ae(((c=T==null?void 0:T.values)===null||c===void 0?void 0:c.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:$y(T,R)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===el.mapValue&&o===el.mapValue)return 0;if(s===el.mapValue)return 1;if(o===el.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},f=Object.keys(c);u.sort(),f.sort();for(let p=0;p<u.length&&p<f.length;++p){const m=ae(u[p],f[p]);if(m!==0)return m;const T=ss(l[u[p]],c[f[p]]);if(T!==0)return T}return ae(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q()}}function By(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=xr(t),r=xr(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function $y(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ss(n[i],r[i]);if(s)return s}return ae(n.length,r.length)}function os(t){return Ed(t)}function Ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return oi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ed(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ed(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function Wy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Td(t){return!!t&&"integerValue"in t}function ap(t){return!!t&&"arrayValue"in t}function Hy(t){return!!t&&"nullValue"in t}function qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tl(t){return!!t&&"mapValue"in t}function VP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function LP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=qe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Tl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yt(go(this.value))}}function fE(t){const e=[];return di(t.fields,(n,r)=>{const i=new qe([n]);if(Tl(r)){const s=fE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new xt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new st(e,0,Y.min(),Y.min(),Y.min(),yt.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,Y.min(),Y.min(),yt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,Y.min(),Y.min(),yt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.position=e,this.inclusive=n}}function Gy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ky(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,n="asc"){this.field=e,this.dir=n}}function MP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{}class Ve extends pE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new jP(e,n,r):n==="array-contains"?new BP(e,r):n==="in"?new $P(e,r):n==="not-in"?new WP(e,r):n==="array-contains-any"?new HP(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FP(e,r):new zP(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends pE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Qt(e,n)}matches(e){return mE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function mE(t){return t.op==="and"}function gE(t){return UP(t)&&mE(t)}function UP(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function Id(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+os(t.value);if(gE(t))return t.filters.map(e=>Id(e)).join(",");{const e=t.filters.map(n=>Id(n)).join(",");return`${t.op}(${e})`}}function yE(t,e){return t instanceof Ve?function(r,i){return i instanceof Ve&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof Qt?function(r,i){return i instanceof Qt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&yE(o,i.filters[l]),!0):!1}(t,e):void Q()}function vE(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(vE).join(" ,")+"}"}(t):"Filter"}class jP extends Ve{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class FP extends Ve{constructor(e,n){super(e,"in",n),this.keys=_E("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class zP extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=_E("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function _E(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class BP extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ap(n)&&qo(n.arrayValue,this.value)}}class $P extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&qo(this.value.arrayValue,n)}}class WP extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!qo(this.value.arrayValue,n)}}class HP extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ap(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Qy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qP(t,e,n,r,i,s,o)}function lp(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Id(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ue=n}return e.ue}function up(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ky(t.startAt,e.startAt)&&Ky(t.endAt,e.endAt)}function Sd(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function GP(t,e,n,r,i,s,o,l){return new Es(t,e,n,r,i,s,o,l)}function ju(t){return new Es(t)}function Xy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wE(t){return t.collectionGroup!==null}function yo(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ke(qe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Go(s,r))}),n.has(qe.keyField().canonicalString())||e.ce.push(new Go(qe.keyField(),r))}return e.ce}function an(t){const e=J(t);return e.le||(e.le=KP(e,yo(t))),e.le}function KP(t,e){if(t.limitType==="F")return Qy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Go(i.field,s)});const n=t.endAt?new au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new au(t.startAt.position,t.startAt.inclusive):null;return Qy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xd(t,e){const n=t.filters.concat([e]);return new Es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ad(t,e,n){return new Es(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Fu(t,e){return up(an(t),an(e))&&t.limitType===e.limitType}function EE(t){return`${lp(an(t))}|lt:${t.limitType}`}function wi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vE(i)).join(", ")}]`),Uu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>os(i)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function zu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Gy(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,l,u){const c=Gy(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),i))}(t,e)}function QP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function TE(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=XP(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XP(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?ss(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new Ie(q.comparator);function Un(){return YP}const IE=new Ie(q.comparator);function no(...t){let e=IE;for(const n of t)e=e.insert(n.key,n);return e}function SE(t){let e=IE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function qr(){return vo()}function xE(){return vo()}function vo(){return new Ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const JP=new Ie(q.comparator),ZP=new Ke(q.comparator);function te(...t){let e=ZP;for(const n of t)e=e.add(n);return e}const eN=new Ke(ae);function tN(){return eN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ou(e)?"-0":e}}function AE(t){return{integerValue:""+t}}function RE(t,e){return bP(e)?AE(e):cp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(){this._=void 0}}function nN(t,e,n){return t instanceof lu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sp(s)&&(s=op(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ko?CE(t,e):t instanceof Qo?PE(t,e):function(i,s){const o=kE(i,s),l=Yy(o)+Yy(i.Pe);return Td(o)&&Td(i.Pe)?AE(l):cp(i.serializer,l)}(t,e)}function rN(t,e,n){return t instanceof Ko?CE(t,e):t instanceof Qo?PE(t,e):n}function kE(t,e){return t instanceof Xo?function(r){return Td(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class lu extends Bu{}class Ko extends Bu{constructor(e){super(),this.elements=e}}function CE(t,e){const n=NE(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Qo extends Bu{constructor(e){super(),this.elements=e}}function PE(t,e){let n=NE(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Xo extends Bu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Yy(t){return Pe(t.integerValue||t.doubleValue)}function NE(t){return ap(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n){this.field=e,this.transform=n}}function sN(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ko&&i instanceof Ko||r instanceof Qo&&i instanceof Qo?is(r.elements,i.elements,dn):r instanceof Xo&&i instanceof Xo?dn(r.Pe,i.Pe):r instanceof lu&&i instanceof lu}(t.transform,e.transform)}class oN{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $u{}function bE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new OE(t.key,ln.none()):new ha(t.key,t.data,ln.none());{const n=t.data,r=yt.empty();let i=new Ke(qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new br(t.key,r,new xt(i.toArray()),ln.none())}}function aN(t,e,n){t instanceof ha?function(i,s,o){const l=i.value.clone(),u=Zy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof br?function(i,s,o){if(!Il(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Zy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(DE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof ha?function(s,o,l,u){if(!Il(s.precondition,o))return l;const c=s.value.clone(),f=ev(s.fieldTransforms,u,o);return c.setAll(f),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(s,o,l,u){if(!Il(s.precondition,o))return l;const c=ev(s.fieldTransforms,u,o),f=o.data;return f.setAll(DE(s)),f.setAll(c),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Il(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function lN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kE(r.transform,i||null);s!=null&&(n===null&&(n=yt.empty()),n.set(r.field,s))}return n||null}function Jy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&is(r,i,(s,o)=>sN(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends $u{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class br extends $u{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function DE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zy(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,rN(o,l,n[i]))}return r}function ev(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nN(s,o,e))}return r}class OE extends $u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uN extends $u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=bE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>Jy(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>Jy(n,r))}}class hp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=function(){return JP}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new hp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,re;function fN(t){switch(t){default:return Q();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function VE(t){if(t===void 0)return Mn("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return Q()}}(re=De||(De={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new Yr([4294967295,4294967295],0);function tv(t){const e=pN().encode(t),n=new rE;return n.update(e),new Uint8Array(n.digest())}function nv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Yr([n,r],0),new Yr([i,s],0)]}class dp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ro(`Invalid padding: ${n}`);if(r<0)throw new ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ro(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Yr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Yr.fromNumber(r)));return i.compare(mN)===1&&(i=new Yr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=tv(e),[r,i]=nv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new dp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=tv(e),[r,i]=nv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wu(Y.min(),i,new Ie(ae),Un(),te())}}class da{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class LE{constructor(e,n){this.targetId=e,this.me=n}}class ME{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class rv{constructor(){this.fe=0,this.ge=sv(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new da(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=sv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Un(),this.qe=iv(),this.Qe=new Ie(ae)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Sd(s))if(r===0){const o=new q(s.path);this.Ue(n,o,st.newNoDocument(o,Y.min()))}else ue(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=oi(r).toUint8Array()}catch(u){if(u instanceof dE)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new dp(o,i,s)}catch(u){return rs(u instanceof ro?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&Sd(l.target)){const u=new q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,st.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Wu(e,n,this.Qe,this.ke,r);return this.ke=Un(),this.qe=iv(),this.Qe=new Ie(ae),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new rv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ke(ae),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new rv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function iv(){return new Ie(q.comparator)}function sv(){return new Ie(q.comparator)}const yN={asc:"ASCENDING",desc:"DESCENDING"},vN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_N={and:"AND",or:"OR"};class wN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||Uu(e)?e:{value:e}}function uu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function UE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function EN(t,e){return uu(t,e.toTimestamp())}function un(t){return ue(!!t),Y.fromTimestamp(function(n){const r=xr(n);return new Ue(r.seconds,r.nanos)}(t))}function fp(t,e){return kd(t,e).canonicalString()}function kd(t,e){const n=function(i){return new ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function jE(t){const e=ge.fromString(t);return ue(WE(e)),e}function Cd(t,e){return fp(t.databaseId,e.path)}function ah(t,e){const n=jE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(zE(n))}function FE(t,e){return fp(t.databaseId,e)}function TN(t){const e=jE(t);return e.length===4?ge.emptyPath():zE(e)}function Pd(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zE(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ov(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function IN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,f){return c.useProto3Json?(ue(f===void 0||typeof f=="string"),Xe.fromBase64String(f||"")):(ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Xe.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const f=c.code===void 0?V.UNKNOWN:VE(c.code);return new $(f,c.message||"")}(o);n=new ME(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ah(t,r.document.name),s=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):Y.min(),l=new yt({mapValue:{fields:r.document.fields}}),u=st.newFoundDocument(i,s,o,l),c=r.targetIds||[],f=r.removedTargetIds||[];n=new Sl(c,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ah(t,r.document),s=r.readTime?un(r.readTime):Y.min(),o=st.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Sl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ah(t,r.document),s=r.removedTargetIds||[];n=new Sl([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new dN(i,s),l=r.targetId;n=new LE(l,o)}}return n}function SN(t,e){let n;if(e instanceof ha)n={update:ov(t,e.key,e.value)};else if(e instanceof OE)n={delete:Cd(t,e.key)};else if(e instanceof br)n={update:ov(t,e.key,e.data),updateMask:DN(e.fieldMask)};else{if(!(e instanceof uN))return Q();n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof lu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ko)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:EN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function xN(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?un(i.updateTime):un(s);return o.isEqual(Y.min())&&(o=un(s)),new oN(o,i.transformResults||[])}(n,e))):[]}function AN(t,e){return{documents:[FE(t,e.path)]}}function RN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=FE(t,i);const s=function(c){if(c.length!==0)return $E(Qt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(f=>function(m){return{field:Ei(m.field),direction:PN(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Rd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function kN(t){let e=TN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=BE(p);return m instanceof Qt&&gE(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(R){return new Go(Ti(R.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Uu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,T=p.values||[];return new au(T,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,T=p.values||[];return new au(T,m)}(n.endAt)),GP(e,i,o,s,l,"F",u,c)}function CN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ti(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ti(n.unaryFilter.field);return Ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ti(n.unaryFilter.field);return Ve.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(Ti(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>BE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function PN(t){return yN[t]}function NN(t){return vN[t]}function bN(t){return _N[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function Ti(t){return qe.fromServerFormat(t.fieldPath)}function $E(t){return t instanceof Ve?function(n){if(n.op==="=="){if(qy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NAN"}};if(Hy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NAN"}};if(Hy(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(n.field),op:NN(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(i=>$E(i));return r.length===1?r[0]:{compositeFilter:{op:bN(n.op),filters:r}}}(t):Q()}function DN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function WE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=Xe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.ct=e}}function VN(t){const e=kN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ad(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.un=new MN}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Sr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class MN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new as(0)}static kn(){return new as(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.changes=new Ts(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_o(r.mutation,i,xt.empty(),Ue.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=qr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=no();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=qr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Un();const o=vo(),l=function(){return vo()}();return n.forEach((u,c)=>{const f=r.get(c.key);i.has(c.key)&&(f===void 0||f.mutation instanceof br)?s=s.insert(c.key,c):f!==void 0?(o.set(c.key,f.mutation.getFieldMask()),_o(f.mutation,c,f.mutation.getFieldMask(),Ue.now())):o.set(c.key,xt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,f)=>o.set(c,f)),n.forEach((c,f)=>{var p;return l.set(c,new jN(f,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vo();let i=new Ie((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let f=r.get(u)||xt.empty();f=l.applyToLocalView(c,f),r.set(u,f);const p=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,f=u.value,p=xE();f.forEach(m=>{if(!s.has(m)){const T=bE(n.get(m),r.get(m));T!==null&&p.set(m,T),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):M.resolve(qr());let l=-1,u=s;return o.next(c=>M.forEach(c,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,te())).next(f=>({batchId:l,changes:SE(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=no();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=no();return this.indexManager.getCollectionParents(e,s).next(l=>M.forEach(l,u=>{const c=function(p,m){return new Es(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const f=c.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))});let l=no();return o.forEach((u,c)=>{const f=s.get(u);f!==void 0&&_o(f.mutation,c,xt.empty(),Ue.now()),zu(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:un(i.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:VN(i.bundledQuery),readTime:un(i.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.overlays=new Ie(q.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=qr();return M.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const i=qr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return M.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,f)=>c-f);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let f=s.get(c.largestBatchId);f===null&&(f=qr(),s=s.insert(c.largestBatchId,f)),f.set(c.getKey(),c)}}const l=qr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,f)=>l.set(c,f)),!(l.size()>=i)););return M.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new hN(n,r));let s=this.Ir.get(n);s===void 0&&(s=te(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(){this.Tr=new Ke(je.Er),this.dr=new Ke(je.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new je(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new je(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new q(new ge([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new q(new ge([])),r=new je(n,e),i=new je(n,e+1);let s=te();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return q.comparator(e.key,n.key)||ae(e.wr,n.wr)}static Ar(e,n){return ae(e.wr,n.wr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ke(je.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new cN(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new je(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(ae);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new je(new q(s),0);let l=new Ke(ae);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new je(n,0),i=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e){this.Mr=e,this.docs=function(){return new Ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Un();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Un();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:f}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||kP(RP(f),r)<=0||(i.has(f.key)||zu(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qN(this)}getSize(e){return M.resolve(this.size)}}class qN extends UN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.persistence=e,this.Nr=new Ts(n=>lp(n),up),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pp,this.targetCount=0,this.kr=as.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),M.waitFor(s).next(()=>i)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n){this.qr={},this.overlays={},this.Qr=new ip(0),this.Kr=!1,this.Kr=!0,this.$r=new $N,this.referenceDelegate=e(this),this.Ur=new GN(this),this.indexManager=new LN,this.remoteDocumentCache=function(i){return new HN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new ON(n),this.Gr=new zN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new BN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new WN(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new QN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class QN extends PP{constructor(e){super(),this.currentSequenceNumber=e}}class mp{constructor(e){this.persistence=e,this.Jr=new pp,this.Yr=null}static Zr(e){return new mp(e)}get Xr(){if(this.Yr)return this.Yr;throw Q()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const i=q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return eR()?8:NP(lt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new XN;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(qs()<=ne.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",wi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(qs()<=ne.DEBUG&&H("QueryEngine","Query:",wi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(qs()<=ne.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",wi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):M.resolve())}Yi(e,n){if(Xy(n))return M.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ad(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,l);return this.ns(n,c,o,u.readTime)?this.Yi(e,Ad(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,i){return Xy(n)||i.isEqual(Y.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?M.resolve(null):(qs()<=ne.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wi(n)),this.rs(e,o,n,AP(i,-1)).next(l=>l))})}ts(e,n){let r=new Ke(TE(e));return n.forEach((i,s)=>{zu(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return qs()<=ne.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",wi(n)),this.Ji.getDocumentsMatchingQuery(e,n,Sr.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new Ie(ae),this._s=new Ts(s=>lp(s),up),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function ZN(t,e,n,r){return new JN(t,e,n,r)}async function HE(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const c of i){o.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}for(const c of s){l.push(c.batchId);for(const f of c.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:l}))})})}function eb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,f){const p=c.batch,m=p.keys();let T=M.resolve();return m.forEach(R=>{T=T.next(()=>f.getEntry(u,R)).next(P=>{const N=c.docVersions.get(R);ue(N!==null),P.version.compareTo(N)<0&&(p.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),f.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function qE(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function tb(t,e){const n=J(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(s,f.addedDocuments,p)));let T=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Xe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(p,T),function(P,N,w){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,T,f)&&l.push(n.Ur.updateTargetData(s,T))});let u=Un(),c=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(nb(s,o,e.documentUpdates).next(f=>{u=f.Ps,c=f.Is})),!r.isEqual(Y.min())){const f=n.Ur.getLastRemoteSnapshotVersion(s).next(p=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.os=i,s))}function nb(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Un();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):H("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function rb(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ib(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,M.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nd(t,e,n){const r=J(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ca(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function av(t,e,n){const r=J(t);let i=Y.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,f){const p=J(u),m=p._s.get(f);return m!==void 0?M.resolve(p.os.get(m)):p.Ur.getTargetData(c,f)}(r,o,an(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:te())).next(l=>(sb(r,QP(e),l),{documents:l,Ts:s})))}function sb(t,e,n){let r=t.us.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class lv{constructor(){this.activeTargetIds=tN()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ob{constructor(){this.so=new lv,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new lv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ab{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl=null;function lh(){return tl===null?tl=function(){return 268435456+Math.round(2147483648*Math.random())}():tl++,"0x"+tl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class cb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=lh(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,u,c,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw rs("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ws}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=lb[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=lh();return new Promise((o,l)=>{const u=new iE;u.setWithCredentials(!0),u.listenOnce(sE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case El.NO_ERROR:const f=u.getResponseJson();H(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case El.TIMEOUT:H(nt,`RPC '${e}' ${s} timed out`),l(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case El.HTTP_ERROR:const p=u.getStatus();if(H(nt,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const R=function(N){const w=N.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(w)>=0?w:V.UNKNOWN}(T.status);l(new $(R,T.message))}else l(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(V.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{H(nt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);H(nt,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=lh(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=lE(),l=aE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(nt,`Creating RPC '${e}' stream ${i}: ${f}`,u);const p=o.createWebChannel(f,u);let m=!1,T=!1;const R=new ub({Io:N=>{T?H(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(H(nt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),H(nt,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},To:()=>p.close()}),P=(N,w,_)=>{N.listen(w,S=>{try{_(S)}catch(D){setTimeout(()=>{throw D},0)}})};return P(p,to.EventType.OPEN,()=>{T||(H(nt,`RPC '${e}' stream ${i} transport opened.`),R.yo())}),P(p,to.EventType.CLOSE,()=>{T||(T=!0,H(nt,`RPC '${e}' stream ${i} transport closed`),R.So())}),P(p,to.EventType.ERROR,N=>{T||(T=!0,rs(nt,`RPC '${e}' stream ${i} transport errored:`,N),R.So(new $(V.UNAVAILABLE,"The operation could not be completed")))}),P(p,to.EventType.MESSAGE,N=>{var w;if(!T){const _=N.data[0];ue(!!_);const S=_,D=S.error||((w=S[0])===null||w===void 0?void 0:w.error);if(D){H(nt,`RPC '${e}' stream ${i} received error:`,D);const L=D.status;let j=function(E){const x=De[E];if(x!==void 0)return VE(x)}(L),I=D.message;j===void 0&&(j=V.INTERNAL,I="Unknown error status: "+L+" with message "+D.message),T=!0,R.So(new $(j,I)),p.close()}else H(nt,`RPC '${e}' stream ${i} received:`,_),R.bo(_)}}),P(l,oE.STAT_EVENT,N=>{N.stat===wd.PROXY?H(nt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===wd.NOPROXY&&H(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.wo()},0),R}}function uh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){return new wN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new GE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hb extends KE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=IN(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?un(o.readTime):Y.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=Sd(u)?{documents:AN(s,u)}:{query:RN(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=UE(s,o.resumeToken);const c=Rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=uu(s,o.snapshotVersion.toTimestamp());const c=Rd(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=CN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.a_(n)}}class db extends KE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ue(!!e.streamToken),this.lastStreamToken=e.streamToken,ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=xN(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Pd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>SN(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,kd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(V.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,kd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class pb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Mn(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{fi(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.L_.add(4),await fa(c),c.q_.set("Unknown"),c.L_.delete(4),await qu(c)}(this))})}),this.q_=new pb(r,i)}}async function qu(t){if(fi(t))for(const e of t.B_)await e(!0)}async function fa(t){for(const e of t.B_)await e(!1)}function QE(t,e){const n=J(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),wp(n)?_p(n):Is(n).r_()&&vp(n,e))}function yp(t,e){const n=J(t),r=Is(n);n.N_.delete(e),r.r_()&&XE(n,e),n.N_.size===0&&(r.r_()?r.o_():fi(n)&&n.q_.set("Unknown"))}function vp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Is(t).A_(e)}function XE(t,e){t.Q_.xe(e),Is(t).R_(e)}function _p(t){t.Q_=new gN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Is(t).start(),t.q_.v_()}function wp(t){return fi(t)&&!Is(t).n_()&&t.N_.size>0}function fi(t){return J(t).L_.size===0}function YE(t){t.Q_=void 0}async function gb(t){t.q_.set("Online")}async function yb(t){t.N_.forEach((e,n)=>{vp(t,e)})}async function vb(t,e){YE(t),wp(t)?(t.q_.M_(e),_p(t)):t.q_.set("Unknown")}async function _b(t,e,n){if(t.q_.set("Online"),e instanceof ME&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await cu(t,r)}else if(e instanceof Sl?t.Q_.Ke(e):e instanceof LE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Y.min()))try{const r=await qE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.N_.get(c);f&&s.N_.set(c,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const f=s.N_.get(u);if(!f)return;s.N_.set(u,f.withResumeToken(Xe.EMPTY_BYTE_STRING,f.snapshotVersion)),XE(s,u);const p=new ar(f.target,u,c,f.sequenceNumber);vp(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await cu(t,r)}}async function cu(t,e,n){if(!ca(e))throw e;t.L_.add(1),await fa(t),t.q_.set("Offline"),n||(n=()=>qE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qu(t)})}function JE(t,e){return e().catch(n=>cu(t,n,e))}async function Gu(t){const e=J(t),n=Ar(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;wb(e);)try{const i=await rb(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,Eb(e,i)}catch(i){await cu(e,i)}ZE(e)&&eT(e)}function wb(t){return fi(t)&&t.O_.length<10}function Eb(t,e){t.O_.push(e);const n=Ar(t);n.r_()&&n.V_&&n.m_(e.mutations)}function ZE(t){return fi(t)&&!Ar(t).n_()&&t.O_.length>0}function eT(t){Ar(t).start()}async function Tb(t){Ar(t).p_()}async function Ib(t){const e=Ar(t);for(const n of t.O_)e.m_(n.mutations)}async function Sb(t,e,n){const r=t.O_.shift(),i=hp.from(r,e,n);await JE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Gu(t)}async function xb(t,e){e&&Ar(t).V_&&await async function(r,i){if(function(o){return fN(o)&&o!==V.ABORTED}(i.code)){const s=r.O_.shift();Ar(r).s_(),await JE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Gu(r)}}(t,e),ZE(t)&&eT(t)}async function cv(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=fi(n);n.L_.add(3),await fa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qu(n)}async function Ab(t,e){const n=J(t);e?(n.L_.delete(2),await qu(n)):e||(n.L_.add(2),await fa(n),n.q_.set("Unknown"))}function Is(t){return t.K_||(t.K_=function(n,r,i){const s=J(n);return s.w_(),new hb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:gb.bind(null,t),Ro:yb.bind(null,t),mo:vb.bind(null,t),d_:_b.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),wp(t)?_p(t):t.q_.set("Unknown")):(await t.K_.stop(),YE(t))})),t.K_}function Ar(t){return t.U_||(t.U_=function(n,r,i){const s=J(n);return s.w_(),new db(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Tb.bind(null,t),mo:xb.bind(null,t),f_:Ib.bind(null,t),g_:Sb.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Gu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ep(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tp(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),ca(t))return new $(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=no(),this.sortedSet=new Ie(this.comparator)}static emptySet(e){return new Wi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.W_=new Ie(q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Q():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ls(e,n,Wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Fu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class kb{constructor(){this.queries=dv(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=dv(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function dv(){return new Ts(t=>EE(t),Fu)}async function tT(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new Rb,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Tp(o,`Initialization of query '${wi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Ip(n)}async function nT(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Cb(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Ip(n)}function Pb(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Ip(t){t.Y_.forEach(e=>{e.next()})}var bd,fv;(fv=bd||(bd={})).ea="default",fv.Cache="cache";class rT{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.key=e}}class sT{constructor(e){this.key=e}}class Nb{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=te(),this.mutatedKeys=te(),this.Aa=TE(e),this.Ra=new Wi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new hv,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),T=zu(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let N=!1;m&&T?m.data.isEqual(T.data)?R!==P&&(r.track({type:3,doc:T}),N=!0):this.ga(m,T)||(r.track({type:2,doc:T}),N=!0,(u&&this.Aa(T,u)>0||c&&this.Aa(T,c)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),N=!0):m&&!T&&(r.track({type:1,doc:m}),N=!0,(u||c)&&(l=!0)),N&&(T?(o=o.add(T),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,p)=>function(T,R){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(T)-P(R)}(f.type,p.type)||this.Aa(f.doc,p.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new ls(this.query,e.Ra,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new hv,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=te(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new sT(r))}),this.da.forEach(r=>{e.has(r)||n.push(new iT(r))}),n}ba(e){this.Ta=e.Ts,this.da=te();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ls.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class bb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Db{constructor(e){this.key=e,this.va=!1}}class Ob{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ts(l=>EE(l),Fu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ie(q.comparator),this.Na=new Map,this.La=new pp,this.Ba={},this.ka=new Map,this.qa=as.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Vb(t,e,n=!0){const r=hT(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await oT(r,e,n,!0),i}async function Lb(t,e){const n=hT(t);await oT(n,e,!0,!1)}async function oT(t,e,n,r){const i=await ib(t.localStore,an(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await Mb(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&QE(t.remoteStore,i),l}async function Mb(t,e,n,r,i){t.Ka=(p,m,T)=>async function(P,N,w,_){let S=N.view.ma(w);S.ns&&(S=await av(P.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,S)));const D=_&&_.targetChanges.get(N.targetId),L=_&&_.targetMismatches.get(N.targetId)!=null,j=N.view.applyChanges(S,P.isPrimaryClient,D,L);return mv(P,N.targetId,j.wa),j.snapshot}(t,p,m,T);const s=await av(t.localStore,e,!0),o=new Nb(e,s.Ts),l=o.ma(s.documents),u=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);mv(t,n,c.wa);const f=new bb(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function Ub(t,e,n){const r=J(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Fu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Nd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yp(r.remoteStore,i.targetId),Dd(r,i.targetId)}).catch(ua)):(Dd(r,i.targetId),await Nd(r.localStore,i.targetId,!0))}async function jb(t,e){const n=J(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yp(n.remoteStore,r.targetId))}async function Fb(t,e,n){const r=Gb(t);try{const i=await function(o,l){const u=J(o),c=Ue.now(),f=l.reduce((T,R)=>T.add(R.key),te());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let R=Un(),P=te();return u.cs.getEntries(T,f).next(N=>{R=N,R.forEach((w,_)=>{_.isValidDocument()||(P=P.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,R)).next(N=>{p=N;const w=[];for(const _ of l){const S=lN(_,p.get(_.key).overlayedDocument);S!=null&&w.push(new br(_.key,S,fE(S.value.mapValue),ln.exists(!0)))}return u.mutationQueue.addMutationBatch(T,c,w,l)}).next(N=>{m=N;const w=N.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(T,N.batchId,w)})}).then(()=>({batchId:m.batchId,changes:SE(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ie(ae)),c=c.insert(l,u),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await pa(r,i.changes),await Gu(r.remoteStore)}catch(i){const s=Tp(i,"Failed to persist write");n.reject(s)}}async function aT(t,e){const n=J(t);try{const r=await tb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?ue(o.va):i.removedDocuments.size>0&&(ue(o.va),o.va=!1))}),await pa(n,r,e)}catch(r){await ua(r)}}function pv(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((f,p)=>{for(const m of p.j_)m.Z_(l)&&(c=!0)}),c&&Ip(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zb(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new Ie(q.comparator);o=o.insert(s,st.newNoDocument(s,Y.min()));const l=te().add(s),u=new Wu(Y.min(),new Map,new Ie(ae),o,l);await aT(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Sp(r)}else await Nd(r.localStore,e,!1).then(()=>Dd(r,e,n)).catch(ua)}async function Bb(t,e){const n=J(t),r=e.batch.batchId;try{const i=await eb(n.localStore,e);uT(n,r,null),lT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,i)}catch(i){await ua(i)}}async function $b(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let f;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ue(p!==null),f=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,f)).next(()=>u.localDocuments.getDocuments(c,f))})}(r.localStore,e);uT(r,e,n),lT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,i)}catch(i){await ua(i)}}function lT(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function uT(t,e,n){const r=J(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function Dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||cT(t,r)})}function cT(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(yp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Sp(t))}function mv(t,e,n){for(const r of n)r instanceof iT?(t.La.addReference(r.key,e),Wb(t,r)):r instanceof sT?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||cT(t,r.key)):Q()}function Wb(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),Sp(t))}function Sp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new q(ge.fromString(e)),r=t.qa.next();t.Na.set(r,new Db(n)),t.Oa=t.Oa.insert(n,r),QE(t.remoteStore,new ar(an(ju(n.path)),r,"TargetPurposeLimboResolution",ip.oe))}}async function pa(t,e,n){const r=J(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(c=>{var f;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=gp.Wi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,c){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(c,m=>M.forEach(m.$i,T=>f.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>M.forEach(m.Ui,T=>f.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ca(p))throw p;H("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const T=f.os.get(m),R=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(R);f.os=f.os.insert(m,P)}}}(r.localStore,s))}async function Hb(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await HE(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new $(V.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.hs)}}function qb(t,e){const n=J(t),r=n.Na.get(e);if(r&&r.va)return te().add(r.key);{let i=te();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function hT(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zb.bind(null,e),e.Ca.d_=Cb.bind(null,e.eventManager),e.Ca.$a=Pb.bind(null,e.eventManager),e}function Gb(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$b.bind(null,e),e}class hu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return ZN(this.persistence,new YN,e.initialUser,this.serializer)}Ga(e){return new KN(mp.Zr,this.serializer)}Wa(e){return new ob}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hu.provider={build:()=>new hu};class Od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>pv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hb.bind(null,this.syncEngine),await Ab(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kb}()}createDatastore(e){const n=Hu(e.databaseInfo.databaseId),r=function(s){return new cb(s)}(e.databaseInfo);return function(s,o,l,u){return new fb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new mb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>pv(this.syncEngine,n,0),function(){return uv.D()?new uv:new ab}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,f){const p=new Ob(i,s,o,l,u,c);return f&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await fa(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Od.provider={build:()=>new Od};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=cE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ch(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await HE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Qb(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cv(e.remoteStore,i)),t._onlineComponents=e}async function Qb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await ch(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await ch(t,new hu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await ch(t,new hu);return t._offlineComponents}async function fT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await gv(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await gv(t,new Od))),t._onlineComponents}function Xb(t){return fT(t).then(e=>e.syncEngine)}async function Vd(t){const e=await fT(t),n=e.eventManager;return n.onListen=Vb.bind(null,e.syncEngine),n.onUnlisten=Ub.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Lb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=jb.bind(null,e.syncEngine),n}function Yb(t,e,n={}){const r=new _r;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const f=new dT({next:m=>{f.Za(),o.enqueueAndForget(()=>nT(s,p));const T=m.docs.has(l);!T&&m.fromCache?c.reject(new $(V.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&u&&u.source==="server"?c.reject(new $(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new rT(ju(l.path),f,{includeMetadataChanges:!0,_a:!0});return tT(s,p)}(await Vd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t,e,n){if(!n)throw new $(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jb(t,e,n,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vv(t){if(!q.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _v(t){if(q.isDocumentKey(t))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ku(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function cn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ku(t);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yP;switch(r.type){case"firstParty":return new EP(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yv.get(n);r&&(H("ComponentProvider","Removing Datastore"),yv.delete(n),r.terminate())}(this),Promise.resolve()}}function Zb(t,e,n,r={}){var i;const s=(t=cn(t,Qu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=rt.MOCK_USER;else{l=ww(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new $(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new rt(c)}t._authCredentials=new vP(new uE(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pi(this.firestore,e,this._query)}}class ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}}class wr extends pi{constructor(e,n,r){super(e,n,ju(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new q(e))}withConverter(e){return new wr(this.firestore,e,this._path)}}function Ev(t,e,...n){if(t=ve(t),mT("collection","path",e),t instanceof Qu){const r=ge.fromString(e,...n);return _v(r),new wr(t,null,r)}{if(!(t instanceof ot||t instanceof wr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return _v(r),new wr(t.firestore,null,r)}}function Gr(t,e,...n){if(t=ve(t),arguments.length===1&&(e=cE.newId()),mT("doc","path",e),t instanceof Qu){const r=ge.fromString(e,...n);return vv(r),new ot(t,null,new q(r))}{if(!(t instanceof ot||t instanceof wr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return vv(r),new ot(t.firestore,t instanceof wr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new GE(this,"async_queue_retry"),this.Vu=()=>{const r=uh();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=uh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=uh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new _r;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ca(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Ep.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Iv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class us extends Qu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Tv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tv(e),this._firestoreClient=void 0,await e}}}function e2(t,e){const n=typeof t=="object"?t:Ou(),r=typeof t=="string"?t:"(default)",i=sa(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=$f("firestore");s&&Zb(i,...s)}return i}function xp(t){if(t._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||t2(t),t._firestoreClient}function t2(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,f){return new OP(l,u,c,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,pT(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Kb(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(Xe.fromBase64String(e))}catch(n){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2=/^__.*__$/;class r2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}class gT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class kp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new kp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return du(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yT(this.Cu)&&n2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class i2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hu(e)}Qu(e,n,r,i=!1){return new kp({Cu:e,methodName:n,qu:r,path:qe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cp(t){const e=t._freezeSettings(),n=Hu(t._databaseId);return new i2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function s2(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);Np("Data must be an object, but it was:",o,r);const l=vT(r,o);let u,c;if(s.merge)u=new xt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=Ld(e,p,n);if(!o.contains(m))throw new $(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);wT(f,m)||f.push(m)}u=new xt(f),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new r2(new yt(l),u,c)}class Ju extends Yu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ju}}class Pp extends Yu{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new Xo(e.serializer,RE(e.serializer,this.$u));return new iN(e.path,n)}isEqual(e){return e instanceof Pp&&this.$u===e.$u}}function o2(t,e,n,r){const i=t.Qu(1,e,n);Np("Data must be an object, but it was:",i,r);const s=[],o=yt.empty();di(r,(u,c)=>{const f=bp(e,u,n);c=ve(c);const p=i.Nu(f);if(c instanceof Ju)s.push(f);else{const m=ma(c,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new xt(s);return new gT(o,l,i.fieldTransforms)}function a2(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[Ld(e,r,n)],u=[i];if(s.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(Ld(e,s[m])),u.push(s[m+1]);const c=[],f=yt.empty();for(let m=l.length-1;m>=0;--m)if(!wT(c,l[m])){const T=l[m];let R=u[m];R=ve(R);const P=o.Nu(T);if(R instanceof Ju)c.push(T);else{const N=ma(R,P);N!=null&&(c.push(T),f.set(T,N))}}const p=new xt(c);return new gT(f,p,o.fieldTransforms)}function l2(t,e,n,r=!1){return ma(n,t.Qu(r?4:3,e))}function ma(t,e){if(_T(t=ve(t)))return Np("Unsupported field value:",e,t),vT(t,e);if(t instanceof Yu)return function(r,i){if(!yT(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ma(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return RE(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ue.fromDate(r);return{timestampValue:uu(i.serializer,s)}}if(r instanceof Ue){const s=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:uu(i.serializer,s)}}if(r instanceof Ap)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:UE(i.serializer,r._byteString)};if(r instanceof ot){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:fp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Rp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return cp(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ku(r)}`)}(t,e)}function vT(t,e){const n={};return hE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=ma(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function _T(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Ap||t instanceof cs||t instanceof ot||t instanceof Yu||t instanceof Rp)}function Np(t,e,n){if(!_T(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ku(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ld(t,e,n){if((e=ve(e))instanceof Xu)return e._internalPath;if(typeof e=="string")return bp(t,e);throw du("Field path arguments must be of type string or ",t,!1,void 0,n)}const u2=new RegExp("[~\\*/\\[\\]]");function bp(t,e,n){if(e.search(u2)>=0)throw du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xu(...e.split("."))._internalPath}catch{throw du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function du(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(V.INVALID_ARGUMENT,l+t+u)}function wT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new c2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Zu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class c2 extends ET{data(){return super.data()}}function Zu(t,e){return typeof e=="string"?bp(t,e):e instanceof Xu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dp{}class TT extends Dp{}function d2(t,e,...n){let r=[];e instanceof Dp&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Op).length,l=s.filter(u=>u instanceof ec).length;if(o>1||o>0&&l>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class ec extends TT{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ec(e,n,r)}_apply(e){const n=this._parse(e);return IT(e._query,n),new pi(e.firestore,e.converter,xd(e._query,n))}_parse(e){const n=Cp(e.firestore);return function(s,o,l,u,c,f,p){let m;if(c.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){xv(p,f);const T=[];for(const R of p)T.push(Sv(u,s,R));m={arrayValue:{values:T}}}else m=Sv(u,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||xv(p,f),m=l2(l,o,p,f==="in"||f==="not-in");return Ve.create(c,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function f2(t,e,n){const r=e,i=Zu("where",t);return ec._create(i,r,n)}class Op extends Dp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Op(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)IT(o,u),o=xd(o,u)}(e._query,n),new pi(e.firestore,e.converter,xd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vp extends TT{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Go(s,o)}(e._query,this._field,this._direction);return new pi(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Es(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function p2(t,e="asc"){const n=e,r=Zu("orderBy",t);return Vp._create(r,n)}function Sv(t,e,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wE(e)&&n.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ge.fromString(n));if(!q.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wy(t,new q(r))}if(n instanceof ot)return Wy(t,n._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ku(n)}.`)}function xv(t,e){if(!Array.isArray(t)||t.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function IT(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class m2{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(oi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Pe(o.doubleValue));return new Rp(s)}convertGeoPoint(e){return new Ap(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=op(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=xr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);ue(WE(r));const i=new Ho(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g2(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ST extends ET{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Zu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xl extends ST{data(e={}){return super.data(e)}}class y2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new io(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new io(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new xl(i._firestore,i._userDataWriter,l.doc.key,l.doc,new io(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,f=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:v2(l.type),doc:u,oldIndex:c,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function v2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t){t=cn(t,ot);const e=cn(t.firestore,us);return Yb(xp(e),t._key).then(n=>RT(e,t,n))}class xT extends m2{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}function Md(t,e,n){t=cn(t,ot);const r=cn(t.firestore,us),i=g2(t.converter,e);return AT(r,[s2(Cp(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ln.none())])}function Av(t,e,n,...r){t=cn(t,ot);const i=cn(t.firestore,us),s=Cp(i);let o;return o=typeof(e=ve(e))=="string"||e instanceof Xu?a2(s,"updateDoc",t._key,e,n,r):o2(s,"updateDoc",t._key,e),AT(i,[o.toMutation(t._key,ln.exists(!0))])}function _2(t,...e){var n,r,i;t=ve(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Iv(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Iv(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let u,c,f;if(t instanceof ot)c=cn(t.firestore,us),f=ju(t._key.path),u={next:p=>{e[o]&&e[o](RT(c,t,p))},error:e[o+1],complete:e[o+2]};else{const p=cn(t,pi);c=cn(p.firestore,us),f=p._query;const m=new xT(c);u={next:T=>{e[o]&&e[o](new y2(c,m,p,T))},error:e[o+1],complete:e[o+2]},h2(t._query)}return function(m,T,R,P){const N=new dT(P),w=new rT(T,N,R);return m.asyncQueue.enqueueAndForget(async()=>tT(await Vd(m),w)),()=>{N.Za(),m.asyncQueue.enqueueAndForget(async()=>nT(await Vd(m),w))}}(xp(c),f,l,u)}function AT(t,e){return function(r,i){const s=new _r;return r.asyncQueue.enqueueAndForget(async()=>Fb(await Xb(r),i,s)),s.promise}(xp(t),e)}function RT(t,e,n){const r=n.docs.get(e._key),i=new xT(t);return new ST(t,i,e._key,r,new io(n.hasPendingWrites,n.fromCache),e.converter)}function w2(t){return new Pp("increment",t)}(function(e,n=!0){(function(i){ws=i})(hi),Ir(new On("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new us(new _P(r.getProvider("auth-internal")),new IP(r.getProvider("app-check-internal")),function(c,f){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(c.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Lt(jy,"4.7.3",e),Lt(jy,"4.7.3","esm2017")})();var E2="firebase",T2="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(E2,T2,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT="firebasestorage.googleapis.com",CT="storageBucket",I2=2*60*1e3,S2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Xt{constructor(e,n,r=0){super(dh(e),`Firebase Storage: ${n} (${dh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ae||(Ae={}));function dh(t){return"storage/"+t}function Lp(){const t="An unknown error occurred, please check the error payload for server response.";return new Re(Ae.UNKNOWN,t)}function x2(t){return new Re(Ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function A2(t){return new Re(Ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function R2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ae.UNAUTHENTICATED,t)}function k2(){return new Re(Ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function C2(t){return new Re(Ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function P2(){return new Re(Ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function N2(){return new Re(Ae.CANCELED,"User canceled the upload/download.")}function b2(t){return new Re(Ae.INVALID_URL,"Invalid URL '"+t+"'.")}function D2(t){return new Re(Ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function O2(){return new Re(Ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+CT+"' property when initializing the app?")}function V2(){return new Re(Ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function L2(){return new Re(Ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function M2(t){return new Re(Ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ud(t){return new Re(Ae.INVALID_ARGUMENT,t)}function PT(){return new Re(Ae.APP_DELETED,"The Firebase app was deleted.")}function U2(t){return new Re(Ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wo(t,e){return new Re(Ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Gs(t){throw new Re(Ae.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=At.makeFromUrl(e,n)}catch{return new At(e,"")}if(r.path==="")return r;throw D2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function c(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},P=n===kT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",w=new RegExp(`^https?://${P}/${i}/${N}`,"i"),S=[{regex:l,indices:u,postModify:s},{regex:T,indices:R,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let D=0;D<S.length;D++){const L=S[D],j=L.regex.exec(e);if(j){const I=j[L.indices.bucket];let v=j[L.indices.path];v||(v=""),r=new At(I,v),L.postModify(r);break}}if(r==null)throw b2(e);return r}}class j2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F2(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let c=!1;function f(...N){c||(c=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(T,u())},N)}function m(){s&&clearTimeout(s)}function T(N,...w){if(c){m();return}if(N){m(),f.call(null,N,...w);return}if(u()||o){m(),f.call(null,N,...w);return}r<64&&(r*=2);let S;l===1?(l=2,S=0):S=(r+Math.random())*1e3,p(S)}let R=!1;function P(N){R||(R=!0,m(),!c&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function z2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B2(t){return t!==void 0}function $2(t){return typeof t=="object"&&!Array.isArray(t)}function Mp(t){return typeof t=="string"||t instanceof String}function Rv(t){return Up()&&t instanceof Blob}function Up(){return typeof Blob<"u"}function kv(t,e,n,r){if(r<e)throw Ud(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ud(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function NT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Jr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Jr||(Jr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(e,n,r,i,s,o,l,u,c,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,R)=>{this.resolve_=T,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new nl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,c=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Jr.NO_ERROR,u=s.getStatus();if(!l||W2(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Jr.ABORT;r(!1,new nl(!1,null,f));return}const c=this.successCodes_.indexOf(u)!==-1;r(!0,new nl(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());B2(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Lp();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?PT():N2();o(u)}else{const u=P2();o(u)}};this.canceled_?n(!1,new nl(!1,null,!0)):this.backoffId_=F2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&z2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class nl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function q2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function G2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function K2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Q2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function X2(t,e,n,r,i,s,o=!0){const l=NT(t.urlParams),u=t.url+l,c=Object.assign({},t.headers);return K2(c,e),q2(c,n),G2(c,s),Q2(c,r),new H2(u,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function J2(...t){const e=Y2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Up())return new Blob(t);throw new Re(Ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Z2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(t){if(typeof atob>"u")throw M2("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fh{constructor(e,n){this.data=e,this.contentType=n||null}}function tD(t,e){switch(t){case nn.RAW:return new fh(bT(e));case nn.BASE64:case nn.BASE64URL:return new fh(DT(t,e));case nn.DATA_URL:return new fh(rD(e),iD(e))}throw Lp()}function bT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nD(t){let e;try{e=decodeURIComponent(t)}catch{throw wo(nn.DATA_URL,"Malformed data URL.")}return bT(e)}function DT(t,e){switch(t){case nn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case nn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=eD(e)}catch(i){throw i.message.includes("polyfill")?i:wo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class OT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wo(nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=sD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rD(t){const e=new OT(t);return e.base64?DT(nn.BASE64,e.rest):nD(e.rest)}function iD(t){return new OT(t).contentType}function sD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){let r=0,i="";Rv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Rv(this.data_)){const r=this.data_,i=Z2(r,e,n);return i===null?null:new nr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if(Up()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(J2.apply(null,n))}else{const n=e.map(o=>Mp(o)?tD(nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new nr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VT(t){let e;try{e=JSON.parse(t)}catch{return null}return $2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function aD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function LT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(t,e){return e}class ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||lD}}let rl=null;function uD(t){return!Mp(t)||t.length<2?t:LT(t)}function MT(){if(rl)return rl;const t=[];t.push(new ht("bucket")),t.push(new ht("generation")),t.push(new ht("metageneration")),t.push(new ht("name","fullPath",!0));function e(s,o){return uD(o)}const n=new ht("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,t.push(i),t.push(new ht("timeCreated")),t.push(new ht("updated")),t.push(new ht("md5Hash",null,!0)),t.push(new ht("cacheControl",null,!0)),t.push(new ht("contentDisposition",null,!0)),t.push(new ht("contentEncoding",null,!0)),t.push(new ht("contentLanguage",null,!0)),t.push(new ht("contentType",null,!0)),t.push(new ht("metadata","customMetadata",!0)),rl=t,rl}function cD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new At(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function hD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return cD(r,t),r}function UT(t,e,n){const r=VT(e);return r===null?null:hD(t,r,n)}function dD(t,e,n,r){const i=VT(e);if(i===null||!Mp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),T=jp(m,n,r),R=NT({alt:"media",token:c});return T+R})[0]}function fD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class jT{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t){if(!t)throw Lp()}function pD(t,e){function n(r,i){const s=UT(t,i,e);return FT(s!==null),s}return n}function mD(t,e){function n(r,i){const s=UT(t,i,e);return FT(s!==null),dD(s,i,t.host,t._protocol)}return n}function zT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=k2():i=R2():n.getStatus()===402?i=A2(t.bucket):n.getStatus()===403?i=C2(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function gD(t){const e=zT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=x2(t.path)),s.serverResponse=i.serverResponse,s}return n}function yD(t,e,n){const r=e.fullServerUrl(),i=jp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new jT(i,s,mD(t,n),o);return l.errorHandler=gD(e),l}function vD(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _D(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=vD(null,e)),r}function wD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let S="";for(let D=0;D<2;D++)S=S+Math.random().toString().slice(2);return S}const u=l();o["Content-Type"]="multipart/related; boundary="+u;const c=_D(e,r,i),f=fD(c,n),p="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+u+"--",T=nr.getBlob(p,r,m);if(T===null)throw V2();const R={name:c.fullPath},P=jp(s,t.host,t._protocol),N="POST",w=t.maxUploadRetryTime,_=new jT(P,N,pD(t,n),w);return _.urlParams=R,_.headers=o,_.body=T.uploadData(),_.errorHandler=zT(e),_}class ED{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TD extends ED{initXhr(){this.xhr_.responseType="text"}}function BT(){return new TD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this._service=e,n instanceof At?this._location=n:this._location=At.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new li(e,n)}get root(){const e=new At(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return LT(this._location.path)}get storage(){return this._service}get parent(){const e=oD(this._location.path);if(e===null)return null;const n=new At(this._location.bucket,e);return new li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw U2(e)}}function ID(t,e,n){t._throwIfRoot("uploadBytes");const r=wD(t.storage,t._location,MT(),new nr(e,!0),n);return t.storage.makeRequestWithTokens(r,BT).then(i=>({metadata:i,ref:t}))}function SD(t){t._throwIfRoot("getDownloadURL");const e=yD(t.storage,t._location,MT());return t.storage.makeRequestWithTokens(e,BT).then(n=>{if(n===null)throw L2();return n})}function xD(t,e){const n=aD(t._location.path,e),r=new At(t._location.bucket,n);return new li(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){return/^[A-Za-z]+:\/\//.test(t)}function RD(t,e){return new li(t,e)}function $T(t,e){if(t instanceof Fp){const n=t;if(n._bucket==null)throw O2();const r=new li(n,n._bucket);return e!=null?$T(r,e):r}else return e!==void 0?xD(t,e):t}function kD(t,e){if(e&&AD(e)){if(t instanceof Fp)return RD(t,e);throw Ud("To use ref(service, url), the first argument must be a Storage instance.")}else return $T(t,e)}function Cv(t,e){const n=e==null?void 0:e[CT];return n==null?null:At.makeFromBucketSpec(n,t)}function CD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ww(i,t.app.options.projectId))}class Fp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=kT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=I2,this._maxUploadRetryTime=S2,this._requests=new Set,i!=null?this._bucket=At.makeFromBucketSpec(i,this._host):this._bucket=Cv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=At.makeFromBucketSpec(this._url,e):this._bucket=Cv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){kv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){kv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new li(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new j2(PT());{const o=X2(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Pv="@firebase/storage",Nv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="storage";function PD(t,e,n){return t=ve(t),ID(t,e,n)}function ND(t){return t=ve(t),SD(t)}function bD(t,e){return t=ve(t),kD(t,e)}function DD(t=Ou(),e){t=ve(t);const r=sa(t,WT).getImmediate({identifier:e}),i=$f("storage");return i&&OD(r,...i),r}function OD(t,e,n,r={}){CD(t,e,n,r)}function VD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Fp(n,r,i,e,hi)}function LD(){Ir(new On(WT,VD,"PUBLIC").setMultipleInstances(!0)),Lt(Pv,Nv,""),Lt(Pv,Nv,"esm2017")}LD();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="type.googleapis.com/google.protobuf.Int64Value",UD="type.googleapis.com/google.protobuf.UInt64Value";function HT(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function jd(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>jd(e));if(typeof t=="function"||typeof t=="object")return HT(t,e=>jd(e));throw new Error("Data cannot be encoded in JSON: "+t)}function fu(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case MD:case UD:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>fu(e)):typeof t=="function"||typeof t=="object"?HT(t,e=>fu(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Hi extends Xt{constructor(e,n,r){super(`${zp}/${e}`,n||""),this.details=r}}function jD(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function FD(t,e){let n=jD(t),r=n,i;try{const s=e&&e.error;if(s){const o=s.status;if(typeof o=="string"){if(!bv[o])return new Hi("internal","internal");n=bv[o],r=o}const l=s.message;typeof l=="string"&&(r=l),i=s.details,i!==void 0&&(i=fu(i))}}catch{}return n==="ok"?null:new Hi(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="us-central1";function BD(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Hi("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class $D{constructor(e,n,r,i,s=Fd,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new zD(n,r,i),this.cancelAllRequests=new Promise(l=>{this.deleteService=()=>Promise.resolve(l())});try{const l=new URL(s);this.customDomain=l.origin+(l.pathname==="/"?"":l.pathname),this.region=Fd}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function WD(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function HD(t,e,n){return r=>GD(t,e,r,{})}async function qD(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function GD(t,e,n,r){const i=t._url(e);return KD(t,i,n,r)}async function KD(t,e,n,r){n=jd(n);const i={data:n},s={},o=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);o.authToken&&(s.Authorization="Bearer "+o.authToken),o.messagingToken&&(s["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=o.appCheckToken);const l=r.timeout||7e4,u=BD(l),c=await Promise.race([qD(e,i,s,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!c)throw new Hi("cancelled","Firebase Functions instance was deleted.");const f=FD(c.status,c.json);if(f)throw f;if(!c.json)throw new Hi("internal","Response is not valid JSON object.");let p=c.json.data;if(typeof p>"u"&&(p=c.json.result),typeof p>"u")throw new Hi("internal","Response is missing data field.");return{data:fu(p)}}const Dv="@firebase/functions",Ov="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD="auth-internal",XD="app-check-internal",YD="messaging-internal";function JD(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),o=r.getProvider(QD),l=r.getProvider(YD),u=r.getProvider(XD);return new $D(s,o,l,u,i,t)};Ir(new On(zp,n,"PUBLIC").setMultipleInstances(!0)),Lt(Dv,Ov,e),Lt(Dv,Ov,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t=Ou(),e=Fd){const r=sa(ve(t),zp).getImmediate({identifier:e}),i=$f("functions");return i&&eO(r,...i),r}function eO(t,e,n){WD(ve(t),e,n)}function tO(t,e,n){return HD(ve(t),e)}JD(fetch.bind(self));const nO={apiKey:"AIzaSyCIcKIuJHP2Z5NKlaIkpPrr6T4QbM96bBw",authDomain:"civicpulse-ai-e8baf.firebaseapp.com",projectId:"civicpulse-ai-e8baf",storageBucket:"civicpulse-ai-e8baf.firebasestorage.app",messagingSenderId:"233650006740",appId:"1:233650006740:web:f3b8b6208f3ef7c3282941"},tc=Iw(nO),ph=mP(tc),rr=e2(tc),rO=DD(tc),iO=ZD(tc,"asia-south1"),sO=new Tn,il={signIn:async(t="resident")=>{const e=await SC(ph,sO),n=Gr(rr,"users",e.user.uid),r=await hh(n);if(r.exists())return r.data();{const i={userId:e.user.uid,email:e.user.email||"",displayName:e.user.displayName||"Unknown User",photoURL:e.user.photoURL||"",role:t,societyId:"default-society-id"};return await Md(n,i),i}},logout:async()=>{await iC(ph)},onAuthStateChange:t=>rC(ph,async e=>{if(e){let n=await hh(Gr(rr,"users",e.uid)),r=3;for(;!n.exists()&&r>0;)await new Promise(i=>setTimeout(i,300)),n=await hh(Gr(rr,"users",e.uid)),r--;n.exists()?t(n.data()):t(null)}else t(null)})},Dr=fw(t=>({user:null,loading:!0,loginAsResident:async()=>{t({loading:!0});try{const e=await il.signIn("resident");t({user:e,loading:!1})}catch{t({loading:!1})}},loginAsAdmin:async()=>{t({loading:!0});try{const e=await il.signIn("admin");t({user:e,loading:!1})}catch{t({loading:!1})}},logout:async()=>{t({loading:!0}),await il.logout(),t({user:null,loading:!1})},initAuthListener:()=>{il.onAuthStateChange(e=>{t({user:e,loading:!1})})}}));/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qT=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var aO={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=F.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>F.createElement("svg",{ref:u,...aO,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:qT("lucide",i),...l},[...o.map(([c,f])=>F.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=(t,e)=>{const n=F.forwardRef(({className:r,...i},s)=>F.createElement(lO,{ref:s,iconNode:e,className:qT(`lucide-${oO(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=ke("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=ke("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=ke("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=ke("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=ke("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=ke("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=ke("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=ke("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=ke("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=ke("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=ke("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=ke("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vO=ke("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=ke("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=ke("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wO=ke("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EO=ke("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TO=ke("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=ke("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ke("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IO=ke("ThumbsUp",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z",key:"emmmcr"}]]);/**
 * @license lucide-react v0.394.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=ke("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);function YT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=YT(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function SO(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=YT(t))&&(r&&(r+=" "),r+=e);return r}const $p="-",xO=t=>{const e=RO(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const l=o.split($p);return l[0]===""&&l.length!==1&&l.shift(),JT(l,e)||AO(o)},getConflictingClassGroupIds:(o,l)=>{const u=n[o]||[];return l&&r[o]?[...u,...r[o]]:u}}},JT=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),i=r?JT(t.slice(1),r):void 0;if(i)return i;if(e.validators.length===0)return;const s=t.join($p);return(o=e.validators.find(({validator:l})=>l(s)))==null?void 0:o.classGroupId},Lv=/^\[(.+)\]$/,AO=t=>{if(Lv.test(t)){const e=Lv.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},RO=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return CO(Object.entries(t.classGroups),n).forEach(([s,o])=>{Bd(o,r,s,e)}),r},Bd=(t,e,n,r)=>{t.forEach(i=>{if(typeof i=="string"){const s=i===""?e:Mv(e,i);s.classGroupId=n;return}if(typeof i=="function"){if(kO(i)){Bd(i(r),e,n,r);return}e.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([s,o])=>{Bd(o,Mv(e,s),n,r)})})},Mv=(t,e)=>{let n=t;return e.split($p).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},kO=t=>t.isThemeGetter,CO=(t,e)=>e?t.map(([n,r])=>{const i=r.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,l])=>[e+o,l])):s);return[n,i]}):t,PO=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const i=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=r.get(s))!==void 0)return i(s,o),o},set(s,o){n.has(s)?n.set(s,o):i(s,o)}}},ZT="!",NO=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,i=e[0],s=e.length,o=l=>{const u=[];let c=0,f=0,p;for(let N=0;N<l.length;N++){let w=l[N];if(c===0){if(w===i&&(r||l.slice(N,N+s)===e)){u.push(l.slice(f,N)),f=N+s;continue}if(w==="/"){p=N;continue}}w==="["?c++:w==="]"&&c--}const m=u.length===0?l:l.substring(f),T=m.startsWith(ZT),R=T?m.substring(1):m,P=p&&p>f?p-f:void 0;return{modifiers:u,hasImportantModifier:T,baseClassName:R,maybePostfixModifierPosition:P}};return n?l=>n({className:l,parseClassName:o}):o},bO=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},DO=t=>({cache:PO(t.cacheSize),parseClassName:NO(t),...xO(t)}),OO=/\s+/,VO=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=e,s=[],o=t.trim().split(OO);let l="";for(let u=o.length-1;u>=0;u-=1){const c=o[u],{modifiers:f,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:T}=n(c);let R=!!T,P=r(R?m.substring(0,T):m);if(!P){if(!R){l=c+(l.length>0?" "+l:l);continue}if(P=r(m),!P){l=c+(l.length>0?" "+l:l);continue}R=!1}const N=bO(f).join(":"),w=p?N+ZT:N,_=w+P;if(s.includes(_))continue;s.push(_);const S=i(P,R);for(let D=0;D<S.length;++D){const L=S[D];s.push(w+L)}l=c+(l.length>0?" "+l:l)}return l};function LO(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=eI(e))&&(r&&(r+=" "),r+=n);return r}const eI=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=eI(t[r]))&&(n&&(n+=" "),n+=e);return n};function MO(t,...e){let n,r,i,s=o;function o(u){const c=e.reduce((f,p)=>p(f),t());return n=DO(c),r=n.cache.get,i=n.cache.set,s=l,l(u)}function l(u){const c=r(u);if(c)return c;const f=VO(u,n);return i(u,f),f}return function(){return s(LO.apply(null,arguments))}}const pe=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},tI=/^\[(?:([a-z-]+):)?(.+)\]$/i,UO=/^\d+\/\d+$/,jO=new Set(["px","full","screen"]),FO=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,zO=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,BO=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,$O=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,WO=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,_n=t=>qi(t)||jO.has(t)||UO.test(t),Gn=t=>Ss(t,"length",JO),qi=t=>!!t&&!Number.isNaN(Number(t)),mh=t=>Ss(t,"number",qi),Ks=t=>!!t&&Number.isInteger(Number(t)),HO=t=>t.endsWith("%")&&qi(t.slice(0,-1)),Z=t=>tI.test(t),Kn=t=>FO.test(t),qO=new Set(["length","size","percentage"]),GO=t=>Ss(t,qO,nI),KO=t=>Ss(t,"position",nI),QO=new Set(["image","url"]),XO=t=>Ss(t,QO,eV),YO=t=>Ss(t,"",ZO),Qs=()=>!0,Ss=(t,e,n)=>{const r=tI.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},JO=t=>zO.test(t)&&!BO.test(t),nI=()=>!1,ZO=t=>$O.test(t),eV=t=>WO.test(t),tV=()=>{const t=pe("colors"),e=pe("spacing"),n=pe("blur"),r=pe("brightness"),i=pe("borderColor"),s=pe("borderRadius"),o=pe("borderSpacing"),l=pe("borderWidth"),u=pe("contrast"),c=pe("grayscale"),f=pe("hueRotate"),p=pe("invert"),m=pe("gap"),T=pe("gradientColorStops"),R=pe("gradientColorStopPositions"),P=pe("inset"),N=pe("margin"),w=pe("opacity"),_=pe("padding"),S=pe("saturate"),D=pe("scale"),L=pe("sepia"),j=pe("skew"),I=pe("space"),v=pe("translate"),E=()=>["auto","contain","none"],x=()=>["auto","hidden","clip","visible","scroll"],k=()=>["auto",Z,e],C=()=>[Z,e],A=()=>["",_n,Gn],Be=()=>["auto",qi,Z],Yt=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],Jt=()=>["solid","dashed","dotted","double","none"],Nt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],G=()=>["","0",Z],X=()=>["auto","avoid","all","avoid-page","page","left","right","column"],ie=()=>[qi,Z];return{cacheSize:500,separator:":",theme:{colors:[Qs],spacing:[_n,Gn],blur:["none","",Kn,Z],brightness:ie(),borderColor:[t],borderRadius:["none","","full",Kn,Z],borderSpacing:C(),borderWidth:A(),contrast:ie(),grayscale:G(),hueRotate:ie(),invert:G(),gap:C(),gradientColorStops:[t],gradientColorStopPositions:[HO,Gn],inset:k(),margin:k(),opacity:ie(),padding:C(),saturate:ie(),scale:ie(),sepia:G(),skew:ie(),space:C(),translate:C()},classGroups:{aspect:[{aspect:["auto","square","video",Z]}],container:["container"],columns:[{columns:[Kn]}],"break-after":[{"break-after":X()}],"break-before":[{"break-before":X()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Yt(),Z]}],overflow:[{overflow:x()}],"overflow-x":[{"overflow-x":x()}],"overflow-y":[{"overflow-y":x()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ks,Z]}],basis:[{basis:k()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Z]}],grow:[{grow:G()}],shrink:[{shrink:G()}],order:[{order:["first","last","none",Ks,Z]}],"grid-cols":[{"grid-cols":[Qs]}],"col-start-end":[{col:["auto",{span:["full",Ks,Z]},Z]}],"col-start":[{"col-start":Be()}],"col-end":[{"col-end":Be()}],"grid-rows":[{"grid-rows":[Qs]}],"row-start-end":[{row:["auto",{span:[Ks,Z]},Z]}],"row-start":[{"row-start":Be()}],"row-end":[{"row-end":Be()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Z]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[N]}],mx:[{mx:[N]}],my:[{my:[N]}],ms:[{ms:[N]}],me:[{me:[N]}],mt:[{mt:[N]}],mr:[{mr:[N]}],mb:[{mb:[N]}],ml:[{ml:[N]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Z,e]}],"min-w":[{"min-w":[Z,e,"min","max","fit"]}],"max-w":[{"max-w":[Z,e,"none","full","min","max","fit","prose",{screen:[Kn]},Kn]}],h:[{h:[Z,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Z,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Z,e,"auto","min","max","fit"]}],"font-size":[{text:["base",Kn,Gn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",mh]}],"font-family":[{font:[Qs]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Z]}],"line-clamp":[{"line-clamp":["none",qi,mh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",_n,Z]}],"list-image":[{"list-image":["none",Z]}],"list-style-type":[{list:["none","disc","decimal",Z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[w]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[w]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Jt(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",_n,Gn]}],"underline-offset":[{"underline-offset":["auto",_n,Z]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:C()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[w]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Yt(),KO]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",GO]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},XO]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[R]}],"gradient-via-pos":[{via:[R]}],"gradient-to-pos":[{to:[R]}],"gradient-from":[{from:[T]}],"gradient-via":[{via:[T]}],"gradient-to":[{to:[T]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[w]}],"border-style":[{border:[...Jt(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[w]}],"divide-style":[{divide:Jt()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...Jt()]}],"outline-offset":[{"outline-offset":[_n,Z]}],"outline-w":[{outline:[_n,Gn]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:A()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[w]}],"ring-offset-w":[{"ring-offset":[_n,Gn]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",Kn,YO]}],"shadow-color":[{shadow:[Qs]}],opacity:[{opacity:[w]}],"mix-blend":[{"mix-blend":[...Nt(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Nt()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",Kn,Z]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[S]}],sepia:[{sepia:[L]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[w]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[L]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Z]}],duration:[{duration:ie()}],ease:[{ease:["linear","in","out","in-out",Z]}],delay:[{delay:ie()}],animate:[{animate:["none","spin","ping","pulse","bounce",Z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[D]}],"scale-x":[{"scale-x":[D]}],"scale-y":[{"scale-y":[D]}],rotate:[{rotate:[Ks,Z]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":C()}],"scroll-mx":[{"scroll-mx":C()}],"scroll-my":[{"scroll-my":C()}],"scroll-ms":[{"scroll-ms":C()}],"scroll-me":[{"scroll-me":C()}],"scroll-mt":[{"scroll-mt":C()}],"scroll-mr":[{"scroll-mr":C()}],"scroll-mb":[{"scroll-mb":C()}],"scroll-ml":[{"scroll-ml":C()}],"scroll-p":[{"scroll-p":C()}],"scroll-px":[{"scroll-px":C()}],"scroll-py":[{"scroll-py":C()}],"scroll-ps":[{"scroll-ps":C()}],"scroll-pe":[{"scroll-pe":C()}],"scroll-pt":[{"scroll-pt":C()}],"scroll-pr":[{"scroll-pr":C()}],"scroll-pb":[{"scroll-pb":C()}],"scroll-pl":[{"scroll-pl":C()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[_n,Gn,mh]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},nV=MO(tV);function jn(...t){return nV(SO(t))}const Gt=Rr.forwardRef(({className:t,variant:e="primary",size:n="md",isLoading:r,children:i,disabled:s,...o},l)=>{const u="inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",c={primary:"bg-primary text-white hover:bg-blue-700",secondary:"bg-accent text-white hover:bg-teal-600",outline:"border border-gray-300 text-text-primary hover:bg-gray-50",ghost:"text-text-primary hover:bg-gray-100",danger:"bg-danger text-white hover:bg-red-600"},f={sm:"h-9 px-3 text-sm",md:"h-11 px-4 text-base",lg:"h-14 px-6 text-lg"};return y.jsxs("button",{ref:l,className:jn(u,c[e],f[n],t),disabled:s||r,...o,children:[r&&y.jsx(KT,{className:"mr-2 h-4 w-4 animate-spin"}),i]})});Gt.displayName="Button";const rV=()=>{const{user:t,logout:e}=Dr(),n=Nu(),r=async()=>{await e(),n("/login")};return y.jsx("nav",{className:"sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md",children:y.jsxs("div",{className:"mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",children:[y.jsxs(es,{to:"/",className:"flex items-center gap-2",children:[y.jsx(GT,{className:"h-6 w-6 text-primary"}),y.jsx("span",{className:"text-xl font-bold tracking-tight text-gray-900",children:"CivicPulse AI"})]}),t&&y.jsxs("div",{className:"flex items-center gap-4",children:[y.jsx("button",{className:"text-gray-500 hover:text-gray-900",children:y.jsx(dO,{className:"h-5 w-5"})}),y.jsx(es,{to:"/settings",className:"text-gray-500 hover:text-gray-900",children:y.jsx(EO,{className:"h-5 w-5"})}),y.jsxs("div",{className:"flex items-center gap-3 border-l border-gray-200 pl-4",children:[y.jsx("img",{src:t.photoURL,alt:t.displayName,className:"h-8 w-8 rounded-full"}),y.jsxs("div",{className:"hidden flex-col md:flex",children:[y.jsx("span",{className:"text-sm font-medium leading-none text-gray-900",children:t.displayName}),y.jsx("span",{className:"text-xs text-gray-500",children:t.role})]}),y.jsx(Gt,{variant:"ghost",size:"sm",onClick:r,className:"ml-2",children:y.jsx(vO,{className:"h-4 w-4"})})]})]})]})})},iV=()=>{const{user:t,loginAsResident:e,loginAsAdmin:n,loading:r}=Dr();if(t)return y.jsx(Fo,{to:t.role==="admin"?"/admin":"/",replace:!0});const i=async()=>{await e()},s=async()=>{await n()};return y.jsx("div",{className:"flex min-h-screen items-center justify-center bg-bg-surface px-4",children:y.jsxs("div",{className:"w-full max-w-md space-y-8 rounded-2xl bg-white p-10 shadow-soft text-center border border-gray-100",children:[y.jsxs("div",{children:[y.jsx(GT,{className:"mx-auto h-12 w-12 text-primary"}),y.jsx("h2",{className:"mt-6 text-3xl font-extrabold tracking-tight text-gray-900",children:"CivicPulse AI"}),y.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"Your AI Community Operations Assistant."})]}),y.jsxs("div",{className:"mt-8 space-y-4",children:[y.jsx(Gt,{onClick:i,isLoading:r,className:"w-full h-12 text-base font-medium",children:"Sign in as Resident"}),y.jsxs("div",{className:"relative my-6",children:[y.jsx("div",{className:"absolute inset-0 flex items-center",children:y.jsx("div",{className:"w-full border-t border-gray-200"})}),y.jsx("div",{className:"relative flex justify-center text-sm",children:y.jsx("span",{className:"bg-white px-2 text-gray-500",children:"Admin Access"})})]}),y.jsxs(Gt,{variant:"outline",onClick:s,isLoading:r,className:"w-full h-12 text-base font-medium flex items-center justify-center gap-2",children:[y.jsx(XT,{className:"w-5 h-5 text-gray-500"}),"Sign in as Admin"]})]}),y.jsx("p",{className:"mt-8 text-xs text-gray-400",children:"By signing in, you agree to our Terms of Service and Privacy Policy."})]})})},Al={subscribeToIssues:(t,e)=>{const n=d2(Ev(rr,"issues"),f2("societyId","==",t),p2("reportedAt","desc"));return _2(n,r=>{const i=r.docs.map(s=>s.data());e(i)},r=>{console.error("Firestore Error:",r),e([])})},createIssue:async t=>{if(!t.societyId)throw new Error("Society ID is required");const e=Gr(Ev(rr,"issues")),n=e.id,r={issueId:n,societyId:t.societyId,reportedBy:t.reportedBy||"unknown",reportedAt:new Date().toISOString(),status:"Reported",imageUrl:t.imageUrl||"",description:t.description||"",locationLabel:t.locationLabel||"Unknown Location",voteCount:0,commentCount:0};return await Md(e,r),n},updateIssueStatus:async(t,e,n)=>{const r=Gr(rr,"issues",t),i={status:e};n&&(i.assignedCommittee=n),await Av(r,i)},voteIssue:async(t,e)=>{const n=Gr(rr,"issues",t),r=Gr(rr,"issues",t,"votes",e);await Md(r,{votedAt:new Date().toISOString()}),await Av(n,{voteCount:w2(1)})}},nc=fw(t=>({issues:[],loading:!1,subscribeToIssues:e=>(t({loading:!0}),Al.subscribeToIssues(e,n=>{t({issues:n,loading:!1})})),updateIssueStatus:async(e,n)=>{await Al.updateIssueStatus(e,n)},voteIssue:async(e,n)=>{await Al.voteIssue(e,n)}})),hs=Rr.forwardRef(({className:t,...e},n)=>y.jsx("div",{ref:n,className:jn("rounded-xl border border-gray-200 bg-bg-card text-text-primary shadow-soft",t),...e}));hs.displayName="Card";const rI=Rr.forwardRef(({className:t,...e},n)=>y.jsx("div",{ref:n,className:jn("flex flex-col space-y-1.5 p-6",t),...e}));rI.displayName="CardHeader";const iI=Rr.forwardRef(({className:t,...e},n)=>y.jsx("h3",{ref:n,className:jn("font-semibold leading-none tracking-tight",t),...e}));iI.displayName="CardTitle";const ds=Rr.forwardRef(({className:t,...e},n)=>y.jsx("div",{ref:n,className:jn("p-6 pt-0",t),...e}));ds.displayName="CardContent";const fs=({className:t,variant:e="default",children:n,...r})=>{const i={default:"bg-gray-100 text-gray-800",success:"bg-green-100 text-green-800",warning:"bg-amber-100 text-amber-800",danger:"bg-red-100 text-red-800",info:"bg-blue-100 text-blue-800"};return y.jsx("span",{className:jn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide",i[e],t),...r,children:n})},sV=t=>{switch(t){case"Critical":return"danger";case"High":return"warning";case"Medium":return"info";default:return"default"}},oV=t=>{switch(t){case"Resolved":return"success";case"In Progress":return"info";case"Reported":return"default";default:return"default"}},aV=({issue:t})=>{var n,r;const e=new Date(t.reportedAt).toLocaleDateString();return y.jsx(es,{to:`/issue/${t.issueId}`,children:y.jsx(hs,{className:"overflow-hidden transition-all hover:shadow-md hover:border-gray-300",children:y.jsxs("div",{className:"flex flex-col sm:flex-row",children:[y.jsx("div",{className:"h-48 w-full sm:h-auto sm:w-48 shrink-0",children:y.jsx("img",{src:t.imageUrl,alt:"Issue",className:"h-full w-full object-cover"})}),y.jsxs(ds,{className:"flex flex-1 flex-col p-5",children:[y.jsxs("div",{className:"flex items-start justify-between mb-2",children:[y.jsxs("div",{className:"flex gap-2",children:[y.jsx(fs,{variant:oV(t.status),children:t.status}),t.aiAnalysis&&y.jsx(fs,{variant:sV(t.aiAnalysis.severity),children:t.aiAnalysis.severity})]}),y.jsxs("span",{className:"flex items-center text-xs text-gray-500",children:[y.jsx(Bp,{className:"mr-1 h-3 w-3"})," ",e]})]}),y.jsx("h3",{className:"text-lg font-semibold text-gray-900 mb-1 line-clamp-1",children:((n=t.aiAnalysis)==null?void 0:n.issueLabel)||"Pending AI Analysis..."}),y.jsx("p",{className:"text-sm text-gray-600 line-clamp-2 mb-4",children:t.description||((r=t.aiAnalysis)==null?void 0:r.issueType)||"No description provided."}),y.jsx("div",{className:"mt-auto flex items-center justify-between text-sm text-gray-500 border-t pt-3",children:y.jsxs("span",{className:"flex items-center",children:[y.jsx(QT,{className:"mr-1 h-4 w-4 text-gray-400"}),t.locationLabel]})})]})]})})})},Wp=({className:t})=>y.jsx(KT,{className:jn("animate-spin text-primary",t)}),lV=()=>{const{issues:t,loading:e,subscribeToIssues:n}=nc(),{user:r}=Dr();return F.useEffect(()=>{if(r!=null&&r.societyId){const i=n(r.societyId);return()=>i()}},[n,r==null?void 0:r.societyId]),y.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8",children:[y.jsx("div",{className:"mb-8 flex items-center justify-between",children:y.jsxs("div",{children:[y.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Community Feed"}),y.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Recent issues reported in your society."})]})}),e?y.jsx("div",{className:"flex h-64 items-center justify-center",children:y.jsx(Wp,{className:"w-8 h-8"})}):t.length===0?y.jsxs("div",{className:"rounded-xl border border-dashed border-gray-300 p-12 text-center",children:[y.jsx("h3",{className:"mt-2 text-sm font-semibold text-gray-900",children:"No issues"}),y.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Your community is looking great!"})]}):y.jsx("div",{className:"space-y-4",children:t.map(i=>y.jsx(aV,{issue:i},i.issueId))}),y.jsx(es,{to:"/report",className:"fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700",children:y.jsx(wO,{className:"h-6 w-6"})})]})},uV={analyzeIssue:async(t,e,n)=>(await tO(iO,"analyzeIssue")({issueId:t,imageBase64:e,description:n})).data.analysis},Uv={uploadImage:async(t,e,n)=>{if(!t.type.startsWith("image/"))throw new Error("Only image files are allowed");if(t.size>10*1024*1024)throw new Error("Image size must be less than 10MB");const r=bD(rO,`issues/${e}/${n}/original.jpg`);return await PD(r,t),await ND(r)},fileToBase64:t=>new Promise((e,n)=>{const r=new FileReader;r.onload=()=>{const i=r.result.split(",")[1];e(i)},r.onerror=i=>n(i),r.readAsDataURL(t)})},sI=({analysis:t,isLoading:e})=>{if(e||!t||t.analysisStatus==="pending"||t.analysisStatus==="processing")return y.jsxs(hs,{className:"bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 right-0 p-4 opacity-10",children:y.jsx(Vv,{className:"w-24 h-24 text-primary"})}),y.jsxs(ds,{className:"p-8 flex flex-col items-center justify-center text-center space-y-4",children:[y.jsx(Wp,{className:"w-8 h-8"}),y.jsxs("div",{children:[y.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Google Gemini is analyzing the issue..."}),y.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Extracting issue type, severity, and action plan."})]})]})]});const n=t.severity==="Critical";return y.jsxs(hs,{className:"bg-gradient-to-br from-indigo-50/50 to-white border-indigo-100 shadow-sm relative overflow-hidden",children:[y.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-primary"}),y.jsxs(rI,{className:"pb-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{className:"flex items-center gap-2 text-primary",children:[y.jsx(Vv,{className:"w-5 h-5"}),y.jsx("span",{className:"font-semibold text-sm tracking-wide uppercase",children:"AI Resolution Engine"})]}),y.jsxs(fs,{variant:n?"danger":t.severity==="High"?"warning":"info",children:[t.severity," Severity"]})]}),y.jsx(iI,{className:"text-2xl mt-4",children:t.issueLabel}),y.jsxs("div",{className:"flex items-center gap-4 text-sm mt-2 text-gray-600",children:[y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(zd,{className:"w-4 h-4"})," ",t.issueType]}),y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(XT,{className:"w-4 h-4"})," ",t.confidence,"% Confidence"]}),y.jsxs("span",{className:"flex items-center gap-1",children:[y.jsx(uO,{className:"w-4 h-4"})," Priority: ",t.priority]})]})]}),y.jsxs(ds,{className:"space-y-6",children:[t.temporaryActions.length>0&&y.jsxs("div",{className:"bg-orange-50 rounded-lg p-4 border border-orange-100",children:[y.jsxs("h4",{className:"font-semibold text-orange-800 text-sm mb-2 flex items-center gap-1",children:[y.jsx(zd,{className:"w-4 h-4"})," Immediate Actions Required"]}),y.jsx("ul",{className:"space-y-2",children:t.temporaryActions.map((r,i)=>y.jsxs("li",{className:"text-sm text-orange-900 flex items-start gap-2",children:[y.jsx("span",{className:"mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400"}),r]},i))})]}),y.jsxs("div",{children:[y.jsx("h4",{className:"font-semibold text-gray-900 text-sm mb-3 uppercase tracking-wide",children:"Recommended Action Plan"}),y.jsx("div",{className:"space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent",children:t.actionPlan.map((r,i)=>y.jsxs("div",{className:"relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active",children:[y.jsx("div",{className:"flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-100 text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10",children:i+1}),y.jsxs("div",{className:"w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-gray-100 bg-white shadow-sm",children:[y.jsxs("div",{className:"flex items-center justify-between mb-1",children:[y.jsx("span",{className:"font-medium text-gray-900 text-sm",children:r.responsibility}),y.jsx("span",{className:"text-xs text-gray-500 font-medium",children:r.timeline})]}),y.jsx("p",{className:"text-sm text-gray-600",children:r.step})]})]},i))})]}),y.jsxs("div",{className:"bg-gray-50 p-4 rounded-xl border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[y.jsxs("div",{children:[y.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Suggested Committee"}),y.jsx("p",{className:"font-semibold text-gray-900",children:t.suggestedCommittee})]}),y.jsxs("div",{className:"text-left sm:text-right",children:[y.jsx("h4",{className:"text-sm font-medium text-gray-500",children:"Next Step for RWA"}),y.jsxs("p",{className:"font-medium text-primary text-sm flex items-center sm:justify-end gap-1",children:[t.nextSteps," ",y.jsx(pO,{className:"w-4 h-4"})]})]})]})]})]})},cV=()=>{const[t,e]=F.useState(1),[n,r]=F.useState(null),[i,s]=F.useState(null),[o,l]=F.useState(!1),[u,c]=F.useState(""),[f,p]=F.useState(null),[m,T]=F.useState(null),R=Nu(),{user:P}=Dr();nc();const N=S=>{var L;const D=(L=S.target.files)==null?void 0:L[0];D&&(r(D),s(URL.createObjectURL(D)),e(2))},w=async()=>{if(!(!n||!P)){l(!0),e(3);try{c("Uploading...");const S=await Uv.uploadImage(n,P.societyId,`temp-${Date.now()}`);c("Analyzing Image...");const D=await Al.createIssue({societyId:P.societyId,reportedBy:P.userId,imageUrl:S,locationLabel:"Auto-detected location"});T(D);const L=["Detecting Issue...","Estimating Severity...","Generating Resolution Plan..."];let j=0;const I=setInterval(()=>{j<L.length?(c(L[j]),j++):clearInterval(I)},2e3),v=await Uv.fileToBase64(n),E=await uV.analyzeIssue(D,v,"");clearInterval(I),c("Done"),p(E)}catch(S){console.error("Error processing AI:",S),c("Failed")}finally{l(!1)}}},_=()=>{R(`/issue/${m}`)};return y.jsxs("div",{className:"mx-auto max-w-2xl px-4 py-8",children:[y.jsxs("div",{className:"mb-6",children:[y.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Report an Issue"}),y.jsx("p",{className:"text-sm text-gray-500",children:"Help keep your community safe and clean."})]}),t===1&&y.jsx(hs,{className:"border-dashed border-2 border-gray-300",children:y.jsxs(ds,{className:"flex flex-col items-center justify-center p-12 text-center",children:[y.jsx("div",{className:"rounded-full bg-blue-50 p-4 mb-4",children:y.jsx(fO,{className:"w-8 h-8 text-primary"})}),y.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-2",children:"Take a photo of the issue"}),y.jsx("p",{className:"text-sm text-gray-500 mb-6 max-w-sm",children:"Our AI will analyze the image to determine the severity and suggest a resolution plan."}),y.jsx("div",{className:"flex gap-4 w-full max-w-xs",children:y.jsxs("label",{className:"flex-1",children:[y.jsxs(Gt,{className:"w-full pointer-events-none",children:[y.jsx(yO,{className:"w-4 h-4 mr-2"})," Upload Photo"]}),y.jsx("input",{type:"file",accept:"image/*",className:"hidden",onChange:N})]})})]})}),t===2&&i&&y.jsxs("div",{className:"space-y-6",children:[y.jsxs("div",{className:"relative rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-black",children:[y.jsx("img",{src:i,alt:"Preview",className:"w-full h-auto max-h-[60vh] object-contain"}),y.jsx("button",{onClick:()=>{e(1),r(null),s(null)},className:"absolute top-4 right-4 bg-white/90 text-gray-900 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm hover:bg-white",children:"Retake"})]}),y.jsxs(Gt,{onClick:w,className:"w-full h-12 text-lg",children:["Analyze Issue with AI ",y.jsx(hO,{className:"w-5 h-5 ml-2"})]})]}),t===3&&y.jsxs("div",{className:"space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500",children:[o?y.jsx(hs,{className:"bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 py-12",children:y.jsxs(ds,{className:"flex flex-col items-center justify-center text-center space-y-4",children:[y.jsx("div",{className:"w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"}),y.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:u}),y.jsx("p",{className:"text-sm text-gray-500",children:"Please wait while Gemini processes the image."})]})}):y.jsx(sI,{analysis:f||void 0,isLoading:o}),!o&&f&&y.jsx(Gt,{onClick:_,className:"w-full h-14 text-lg",children:"Submit to Society"})]})]})},hV=({currentStatus:t})=>{const e=["Reported","Verified","Assigned","In Progress","Resolved"],n=e.indexOf(t),r=n===-1&&t==="Closed"?e.length-1:n;return y.jsx("div",{className:"w-full py-4",children:y.jsxs("div",{className:"flex items-center justify-between relative",children:[y.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full z-0"}),y.jsx("div",{className:"absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500",style:{width:`${Math.max(0,r)/(e.length-1)*100}%`}}),e.map((i,s)=>{const o=s<=r,l=s===r;return y.jsxs("div",{className:"relative z-10 flex flex-col items-center gap-2",children:[y.jsx("div",{className:jn("w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300",o?"bg-primary text-white ring-4 ring-blue-50":"bg-white border-2 border-gray-300 text-gray-400"),children:o?y.jsx(mO,{className:"w-5 h-5"}):y.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-gray-300"})}),y.jsx("span",{className:jn("text-xs font-medium absolute -bottom-6 w-20 text-center",l?"text-primary font-semibold":o?"text-gray-900":"text-gray-400"),children:i})]},i)})]})})},dV=()=>{const{id:t}=zx(),{issues:e,voteIssue:n}=nc(),{user:r}=Dr(),[i,s]=F.useState(e.find(c=>c.issueId===t)),[o,l]=F.useState(!1);F.useEffect(()=>{s(e.find(c=>c.issueId===t))},[t,e]);const u=async()=>{!i||!r||o||(l(!0),await n(i.issueId,r.userId),l(!1))};return i?y.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-8 pb-20",children:[y.jsxs(es,{to:"/",className:"inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-6",children:[y.jsx(cO,{className:"mr-1 w-4 h-4"})," Back to Feed"]}),y.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[y.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[y.jsx("div",{className:"rounded-2xl overflow-hidden border border-gray-200 shadow-sm",children:y.jsx("img",{src:i.imageUrl,alt:"Issue",className:"w-full h-auto object-cover max-h-[500px]"})}),y.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-6",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-bold text-gray-900 mb-2",children:"Issue Tracking"}),y.jsx(hV,{currentStatus:i.status})]}),y.jsxs("div",{className:"border-t border-gray-100 pt-6",children:[y.jsx("h3",{className:"font-semibold text-gray-900 mb-2",children:"Description"}),y.jsx("p",{className:"text-gray-600",children:i.description||"No additional description provided."})]}),y.jsxs("div",{className:"border-t border-gray-100 pt-6 flex items-center gap-4",children:[y.jsxs(Gt,{variant:"outline",onClick:u,isLoading:o,className:"flex items-center gap-2",children:[y.jsx(IO,{className:"w-4 h-4"}),"Upvote (",i.voteCount||0,")"]}),y.jsxs(Gt,{variant:"outline",className:"flex items-center gap-2",children:[y.jsx(_O,{className:"w-4 h-4"}),"Comments (",i.commentCount||0,")"]})]})]}),i.feedbackSummary&&y.jsxs("div",{className:"bg-indigo-50 border border-indigo-100 rounded-2xl p-6",children:[y.jsx("h3",{className:"font-semibold text-indigo-900 mb-2",children:"Community Feedback Summary"}),y.jsx("p",{className:"text-indigo-800 text-sm",children:i.feedbackSummary})]})]}),y.jsxs("div",{className:"space-y-6",children:[y.jsx(sI,{analysis:i.aiAnalysis,isLoading:!i.aiAnalysis}),y.jsxs("div",{className:"bg-gray-50 rounded-xl border border-gray-200 p-5 space-y-4",children:[y.jsx("h3",{className:"font-semibold text-gray-900",children:"Details"}),y.jsxs("div",{className:"flex items-start gap-3 text-sm text-gray-600",children:[y.jsx(QT,{className:"w-5 h-5 text-gray-400 shrink-0"}),y.jsx("span",{children:i.locationLabel||"Location not specified"})]}),y.jsxs("div",{className:"flex items-start gap-3 text-sm text-gray-600",children:[y.jsx(Bp,{className:"w-5 h-5 text-gray-400 shrink-0"}),y.jsxs("span",{children:["Reported on ",new Date(i.reportedAt).toLocaleDateString()]})]}),y.jsx("div",{className:"flex items-start gap-3 text-sm text-gray-600",children:y.jsx(fs,{children:i.status})})]})]})]})]}):y.jsx("div",{className:"flex h-[calc(100vh-64px)] items-center justify-center",children:y.jsx(Wp,{className:"w-8 h-8"})})},fV=()=>{const{issues:t,subscribeToIssues:e,updateIssueStatus:n}=nc(),{user:r}=Dr();F.useEffect(()=>{if(r!=null&&r.societyId){const c=e(r.societyId);return()=>c()}},[e,r==null?void 0:r.societyId]);const i=t.filter(c=>c.status==="Reported"),s=t.filter(c=>{var f;return((f=c.aiAnalysis)==null?void 0:f.severity)==="Critical"&&c.status!=="Resolved"}),o=t.filter(c=>c.status==="Assigned"||c.status==="In Progress"),l=t.filter(c=>c.status==="Resolved"||c.status==="Closed"),u=(c,f)=>{n(c,f)};return y.jsxs("div",{className:"mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8",children:[y.jsxs("div",{className:"mb-8",children:[y.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Society Command Center"}),y.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Manage community operations and track issue resolution."})]}),y.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:[y.jsxs("div",{className:"bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col",children:[y.jsxs("div",{className:"flex items-center gap-2 text-amber-600 mb-2",children:[y.jsx(Bp,{className:"w-5 h-5"}),y.jsx("span",{className:"font-semibold text-sm",children:"Needs Review"})]}),y.jsx("span",{className:"text-3xl font-bold",children:i.length})]}),y.jsxs("div",{className:"bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col",children:[y.jsxs("div",{className:"flex items-center gap-2 text-red-600 mb-2",children:[y.jsx(TO,{className:"w-5 h-5"}),y.jsx("span",{className:"font-semibold text-sm",children:"Critical Issues"})]}),y.jsx("span",{className:"text-3xl font-bold",children:s.length})]}),y.jsxs("div",{className:"bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col",children:[y.jsxs("div",{className:"flex items-center gap-2 text-blue-600 mb-2",children:[y.jsx(zd,{className:"w-5 h-5"}),y.jsx("span",{className:"font-semibold text-sm",children:"Assigned"})]}),y.jsx("span",{className:"text-3xl font-bold",children:o.length})]}),y.jsxs("div",{className:"bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex flex-col",children:[y.jsxs("div",{className:"flex items-center gap-2 text-green-600 mb-2",children:[y.jsx(gO,{className:"w-5 h-5"}),y.jsx("span",{className:"font-semibold text-sm",children:"Resolved"})]}),y.jsx("span",{className:"text-3xl font-bold",children:l.length})]})]}),y.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden",children:[y.jsxs("div",{className:"p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50",children:[y.jsx("h2",{className:"font-semibold text-gray-900",children:"Issue Queue"}),y.jsx("div",{className:"flex gap-2",children:y.jsx("input",{type:"text",placeholder:"Search issues...",className:"px-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:border-primary"})})]}),y.jsx("div",{className:"overflow-x-auto",children:y.jsxs("table",{className:"w-full text-sm text-left",children:[y.jsx("thead",{className:"text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-200",children:y.jsxs("tr",{children:[y.jsx("th",{className:"px-6 py-3",children:"ID / Date"}),y.jsx("th",{className:"px-6 py-3",children:"Issue Details"}),y.jsx("th",{className:"px-6 py-3",children:"Status"}),y.jsx("th",{className:"px-6 py-3",children:"AI Resolution"}),y.jsx("th",{className:"px-6 py-3",children:"Actions"})]})}),y.jsx("tbody",{children:t.map(c=>{var f;return y.jsxs("tr",{className:"bg-white border-b border-gray-100 hover:bg-gray-50",children:[y.jsxs("td",{className:"px-6 py-4 whitespace-nowrap",children:[y.jsxs("div",{className:"font-mono text-xs text-gray-500",children:["#",c.issueId.slice(-6)]}),y.jsx("div",{className:"text-gray-900",children:new Date(c.reportedAt).toLocaleDateString()})]}),y.jsxs("td",{className:"px-6 py-4",children:[y.jsx("div",{className:"font-medium text-gray-900",children:((f=c.aiAnalysis)==null?void 0:f.issueLabel)||"Pending"}),y.jsx("div",{className:"text-gray-500 text-xs mt-1",children:c.locationLabel})]}),y.jsx("td",{className:"px-6 py-4",children:y.jsx(fs,{variant:c.status==="Reported"?"default":c.status==="Resolved"?"success":"info",children:c.status})}),y.jsx("td",{className:"px-6 py-4",children:c.aiAnalysis?y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx(fs,{variant:c.aiAnalysis.severity==="Critical"?"danger":"warning",children:c.aiAnalysis.severity}),y.jsx("span",{className:"text-xs text-gray-500",children:c.aiAnalysis.suggestedCommittee})]}):y.jsx("span",{className:"text-gray-400 text-xs",children:"Analyzing..."})}),y.jsx("td",{className:"px-6 py-4",children:y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx(es,{to:`/issue/${c.issueId}`,children:y.jsx(Gt,{variant:"outline",size:"sm",children:"Review"})}),c.status==="Reported"&&y.jsx(Gt,{size:"sm",onClick:()=>u(c.issueId,"Assigned"),children:"Accept AI Plan"})]})})]},c.issueId)})})]})})]})]})},pV=()=>y.jsxs("div",{className:"mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8",children:[y.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Settings"}),y.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6",children:[y.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Profile Information"}),y.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Manage your account details and preferences."}),y.jsxs("div",{className:"space-y-4",children:[y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Display Name"}),y.jsx("input",{type:"text",className:"w-full max-w-md px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",defaultValue:"Riya Resident"})]}),y.jsxs("div",{children:[y.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),y.jsx("input",{type:"email",disabled:!0,className:"w-full max-w-md px-3 py-2 border border-gray-200 bg-gray-50 rounded-md text-gray-500 cursor-not-allowed",defaultValue:"resident@example.com"})]})]})]}),y.jsxs("div",{className:"bg-white rounded-xl border border-gray-200 shadow-sm p-6",children:[y.jsx("h2",{className:"text-lg font-semibold mb-4",children:"Society Preferences"}),y.jsx("div",{className:"space-y-4",children:y.jsxs("div",{className:"flex items-center justify-between py-3 border-b border-gray-100",children:[y.jsxs("div",{children:[y.jsx("p",{className:"font-medium text-gray-900",children:"Push Notifications"}),y.jsx("p",{className:"text-sm text-gray-500",children:"Receive updates when your issue status changes."})]}),y.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[y.jsx("input",{type:"checkbox",className:"sr-only peer",defaultChecked:!0}),y.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"})]})]})})]})]}),Xs=({children:t,allowedRoles:e})=>{const{user:n,loading:r}=Dr();return r?y.jsx("div",{className:"flex items-center justify-center min-h-screen",children:"Loading..."}):n?e&&!e.includes(n.role)?y.jsx(Fo,{to:"/",replace:!0}):y.jsx(y.Fragment,{children:t}):y.jsx(Fo,{to:"/login",replace:!0})};function mV(){const{user:t,initAuthListener:e}=Dr();return F.useEffect(()=>{e()},[e]),y.jsx(cA,{children:y.jsxs("div",{className:"min-h-screen bg-bg-surface text-text-primary",children:[t&&y.jsx(rV,{}),y.jsx("main",{children:y.jsxs(rA,{children:[y.jsx(Fr,{path:"/login",element:t?y.jsx(Fo,{to:t.role==="admin"?"/admin":"/",replace:!0}):y.jsx(iV,{})}),y.jsx(Fr,{path:"/",element:y.jsx(Xs,{allowedRoles:["resident","admin"],children:(t==null?void 0:t.role)==="admin"?y.jsx(Fo,{to:"/admin",replace:!0}):y.jsx(lV,{})})}),y.jsx(Fr,{path:"/report",element:y.jsx(Xs,{allowedRoles:["resident"],children:y.jsx(cV,{})})}),y.jsx(Fr,{path:"/issue/:id",element:y.jsx(Xs,{children:y.jsx(dV,{})})}),y.jsx(Fr,{path:"/admin",element:y.jsx(Xs,{allowedRoles:["admin"],children:y.jsx(fV,{})})}),y.jsx(Fr,{path:"/settings",element:y.jsx(Xs,{children:y.jsx(pV,{})})})]})})]})})}gh.createRoot(document.getElementById("root")).render(y.jsx(Rr.StrictMode,{children:y.jsx(mV,{})}));
