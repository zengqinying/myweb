(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function Bm(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var vc={exports:{}},Ua={},xc={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function J0(){if(Pp)return gt;Pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,C={};function _(U,J,Ie){this.props=U,this.context=J,this.refs=C,this.updater=Ie||M}_.prototype.isReactComponent={},_.prototype.setState=function(U,J){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,J,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=_.prototype;function b(U,J,Ie){this.props=U,this.context=J,this.refs=C,this.updater=Ie||M}var D=b.prototype=new v;D.constructor=b,A(D,_.prototype),D.isPureReactComponent=!0;var P=Array.isArray,V=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(U,J,Ie){var Ve,Le={},se=null,ge=null;if(J!=null)for(Ve in J.ref!==void 0&&(ge=J.ref),J.key!==void 0&&(se=""+J.key),J)V.call(J,Ve)&&!O.hasOwnProperty(Ve)&&(Le[Ve]=J[Ve]);var ce=arguments.length-2;if(ce===1)Le.children=Ie;else if(1<ce){for(var Ne=Array(ce),Ze=0;Ze<ce;Ze++)Ne[Ze]=arguments[Ze+2];Le.children=Ne}if(U&&U.defaultProps)for(Ve in ce=U.defaultProps,ce)Le[Ve]===void 0&&(Le[Ve]=ce[Ve]);return{$$typeof:s,type:U,key:se,ref:ge,props:Le,_owner:L.current}}function I(U,J){return{$$typeof:s,type:U.type,key:J,ref:U.ref,props:U.props,_owner:U._owner}}function $(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function F(U){var J={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return J[Ie]})}var Y=/\/+/g;function oe(U,J){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):J.toString(36)}function de(U,J,Ie,Ve,Le){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(se){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case s:case e:ge=!0}}if(ge)return ge=U,Le=Le(ge),U=Ve===""?"."+oe(ge,0):Ve,P(Le)?(Ie="",U!=null&&(Ie=U.replace(Y,"$&/")+"/"),de(Le,J,Ie,"",function(Ze){return Ze})):Le!=null&&($(Le)&&(Le=I(Le,Ie+(!Le.key||ge&&ge.key===Le.key?"":(""+Le.key).replace(Y,"$&/")+"/")+U)),J.push(Le)),1;if(ge=0,Ve=Ve===""?".":Ve+":",P(U))for(var ce=0;ce<U.length;ce++){se=U[ce];var Ne=Ve+oe(se,ce);ge+=de(se,J,Ie,Ne,Le)}else if(Ne=g(U),typeof Ne=="function")for(U=Ne.call(U),ce=0;!(se=U.next()).done;)se=se.value,Ne=Ve+oe(se,ce++),ge+=de(se,J,Ie,Ne,Le);else if(se==="object")throw J=String(U),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ge}function W(U,J,Ie){if(U==null)return U;var Ve=[],Le=0;return de(U,Ve,"","",function(se){return J.call(Ie,se,Le++)}),Ve}function q(U){if(U._status===-1){var J=U._result;J=J(),J.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=J)}if(U._status===1)return U._result.default;throw U._result}var j={current:null},K={transition:null},le={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:K,ReactCurrentOwner:L};function ue(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:W,forEach:function(U,J,Ie){W(U,function(){J.apply(this,arguments)},Ie)},count:function(U){var J=0;return W(U,function(){J++}),J},toArray:function(U){return W(U,function(J){return J})||[]},only:function(U){if(!$(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=_,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=b,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,gt.act=ue,gt.cloneElement=function(U,J,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Ve=A({},U.props),Le=U.key,se=U.ref,ge=U._owner;if(J!=null){if(J.ref!==void 0&&(se=J.ref,ge=L.current),J.key!==void 0&&(Le=""+J.key),U.type&&U.type.defaultProps)var ce=U.type.defaultProps;for(Ne in J)V.call(J,Ne)&&!O.hasOwnProperty(Ne)&&(Ve[Ne]=J[Ne]===void 0&&ce!==void 0?ce[Ne]:J[Ne])}var Ne=arguments.length-2;if(Ne===1)Ve.children=Ie;else if(1<Ne){ce=Array(Ne);for(var Ze=0;Ze<Ne;Ze++)ce[Ze]=arguments[Ze+2];Ve.children=ce}return{$$typeof:s,type:U.type,key:Le,ref:se,props:Ve,_owner:ge}},gt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:u,_context:U},U.Consumer=U},gt.createElement=T,gt.createFactory=function(U){var J=T.bind(null,U);return J.type=U,J},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:h,render:U}},gt.isValidElement=$,gt.lazy=function(U){return{$$typeof:x,_payload:{_status:-1,_result:U},_init:q}},gt.memo=function(U,J){return{$$typeof:m,type:U,compare:J===void 0?null:J}},gt.startTransition=function(U){var J=K.transition;K.transition={};try{U()}finally{K.transition=J}},gt.unstable_act=ue,gt.useCallback=function(U,J){return j.current.useCallback(U,J)},gt.useContext=function(U){return j.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return j.current.useDeferredValue(U)},gt.useEffect=function(U,J){return j.current.useEffect(U,J)},gt.useId=function(){return j.current.useId()},gt.useImperativeHandle=function(U,J,Ie){return j.current.useImperativeHandle(U,J,Ie)},gt.useInsertionEffect=function(U,J){return j.current.useInsertionEffect(U,J)},gt.useLayoutEffect=function(U,J){return j.current.useLayoutEffect(U,J)},gt.useMemo=function(U,J){return j.current.useMemo(U,J)},gt.useReducer=function(U,J,Ie){return j.current.useReducer(U,J,Ie)},gt.useRef=function(U){return j.current.useRef(U)},gt.useState=function(U){return j.current.useState(U)},gt.useSyncExternalStore=function(U,J,Ie){return j.current.useSyncExternalStore(U,J,Ie)},gt.useTransition=function(){return j.current.useTransition()},gt.version="18.3.1",gt}var Lp;function $f(){return Lp||(Lp=1,xc.exports=J0()),xc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function e_(){if(Np)return Ua;Np=1;var s=$f(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(h,p,m){var x,S={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!u.hasOwnProperty(x)&&(S[x]=p[x]);if(h&&h.defaultProps)for(x in p=h.defaultProps,p)S[x]===void 0&&(S[x]=p[x]);return{$$typeof:e,type:h,key:g,ref:M,props:S,_owner:o.current}}return Ua.Fragment=n,Ua.jsx=c,Ua.jsxs=c,Ua}var Dp;function t_(){return Dp||(Dp=1,vc.exports=e_()),vc.exports}var k=t_(),Xt=$f();const n_=Bm(Xt);var el={},Sc={exports:{}},Fn={},yc={exports:{}},Mc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function i_(){return Ip||(Ip=1,(function(s){function e(K,le){var ue=K.length;K.push(le);e:for(;0<ue;){var U=ue-1>>>1,J=K[U];if(0<o(J,le))K[U]=le,K[ue]=J,ue=U;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var le=K[0],ue=K.pop();if(ue!==le){K[0]=ue;e:for(var U=0,J=K.length,Ie=J>>>1;U<Ie;){var Ve=2*(U+1)-1,Le=K[Ve],se=Ve+1,ge=K[se];if(0>o(Le,ue))se<J&&0>o(ge,Le)?(K[U]=ge,K[se]=ue,U=se):(K[U]=Le,K[Ve]=ue,U=Ve);else if(se<J&&0>o(ge,ue))K[U]=ge,K[se]=ue,U=se;else break e}}return le}function o(K,le){var ue=K.sortIndex-le.sortIndex;return ue!==0?ue:K.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,h=c.now();s.unstable_now=function(){return c.now()-h}}var p=[],m=[],x=1,S=null,g=3,M=!1,A=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(K){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=K)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function P(K){if(C=!1,D(K),!A)if(n(p)!==null)A=!0,q(V);else{var le=n(m);le!==null&&j(P,le.startTime-K)}}function V(K,le){A=!1,C&&(C=!1,v(T),T=-1),M=!0;var ue=g;try{for(D(le),S=n(p);S!==null&&(!(S.expirationTime>le)||K&&!F());){var U=S.callback;if(typeof U=="function"){S.callback=null,g=S.priorityLevel;var J=U(S.expirationTime<=le);le=s.unstable_now(),typeof J=="function"?S.callback=J:S===n(p)&&r(p),D(le)}else r(p);S=n(p)}if(S!==null)var Ie=!0;else{var Ve=n(m);Ve!==null&&j(P,Ve.startTime-le),Ie=!1}return Ie}finally{S=null,g=ue,M=!1}}var L=!1,O=null,T=-1,I=5,$=-1;function F(){return!(s.unstable_now()-$<I)}function Y(){if(O!==null){var K=s.unstable_now();$=K;var le=!0;try{le=O(!0,K)}finally{le?oe():(L=!1,O=null)}}else L=!1}var oe;if(typeof b=="function")oe=function(){b(Y)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,W=de.port2;de.port1.onmessage=Y,oe=function(){W.postMessage(null)}}else oe=function(){_(Y,0)};function q(K){O=K,L||(L=!0,oe())}function j(K,le){T=_(function(){K(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){A||M||(A=!0,q(V))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(K){switch(g){case 1:case 2:case 3:var le=3;break;default:le=g}var ue=g;g=le;try{return K()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,le){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ue=g;g=K;try{return le()}finally{g=ue}},s.unstable_scheduleCallback=function(K,le,ue){var U=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?U+ue:U):ue=U,K){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ue+J,K={id:x++,callback:le,priorityLevel:K,startTime:ue,expirationTime:J,sortIndex:-1},ue>U?(K.sortIndex=ue,e(m,K),n(p)===null&&K===n(m)&&(C?(v(T),T=-1):C=!0,j(P,ue-U))):(K.sortIndex=J,e(p,K),A||M||(A=!0,q(V))),K},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(K){var le=g;return function(){var ue=g;g=le;try{return K.apply(this,arguments)}finally{g=ue}}}})(Mc)),Mc}var Up;function r_(){return Up||(Up=1,yc.exports=i_()),yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function s_(){if(Fp)return Fn;Fp=1;var s=$f(),e=r_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(t){return p.call(S,t)?!0:p.call(x,t)?!1:m.test(t)?S[t]=!0:(x[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,f,d,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=d,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);_[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,a,l){var f=_.hasOwnProperty(i)?_[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),F=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),oe=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),K=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,U;function J(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ie=!1;function Ve(t,i){if(!t||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var l=ae}Reflect.construct(t,[],i)}else{try{i.call()}catch(ae){l=ae}t.call(i.prototype)}else{try{throw Error()}catch(ae){l=ae}t()}}catch(ae){if(ae&&l&&typeof ae.stack=="string"){for(var f=ae.stack.split(`
`),d=l.stack.split(`
`),E=f.length-1,N=d.length-1;1<=E&&0<=N&&f[E]!==d[N];)N--;for(;1<=E&&0<=N;E--,N--)if(f[E]!==d[N]){if(E!==1||N!==1)do if(E--,N--,0>N||f[E]!==d[N]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=N);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?J(t):""}function Le(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=Ve(t.type,!1),t;case 11:return t=Ve(t.type.render,!1),t;case 1:return t=Ve(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case L:return"Portal";case I:return"Profiler";case T:return"StrictMode";case oe:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F:return(t.displayName||"Context")+".Consumer";case $:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case W:return i=t.displayName||null,i!==null?i:se(t.type)||"Memo";case q:i=t._payload,t=t._init;try{return se(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Ne(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,d=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,d.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Qe(t){t._valueTracker||(t._valueTracker=Ze(t))}function It(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ne(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mt(t,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Nt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=ce(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function jt(t,i){ct(t,i);var a=ce(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?dn(t,i.type,a):i.hasOwnProperty("defaultValue")&&dn(t,i.type,ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ut(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function dn(t,i,a){(i!=="number"||ut(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var H=Array.isArray;function Ft(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ce(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function ft(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ct(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(H(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ce(a)}}function De(t,i){var a=ce(i.value),l=ce(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function kt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function R(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?R(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Z,pe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Z.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function _e(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Pe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function fe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function me(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=fe(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Fe=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(t,i){if(i){if(Fe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function we(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ee=null;function tt(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rt=null,ht=null,z=null;function Ae(t){if(t=Sa(t)){if(typeof rt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=mo(i),rt(t.stateNode,t.type,i))}}function he(t){ht?z?z.push(t):z=[t]:ht=t}function Oe(){if(ht){var t=ht,i=z;if(z=ht=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function Ce(t,i){return t(i)}function ve(){}var Xe=!1;function st(t,i,a){if(Xe)return t(i,a);Xe=!0;try{return Ce(t,i,a)}finally{Xe=!1,(ht!==null||z!==null)&&(ve(),Oe())}}function Dt(t,i){var a=t.stateNode;if(a===null)return null;var l=mo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Et=!1;if(h)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Et=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Et=!1}function jn(t,i,a,l,f,d,E,N,B){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(Se){this.onError(Se)}}var Ii=!1,as=null,Nr=!1,os=null,Ui={onError:function(t){Ii=!0,as=t}};function Js(t,i,a,l,f,d,E,N,B){Ii=!1,as=null,jn.apply(Ui,arguments)}function Za(t,i,a,l,f,d,E,N,B){if(Js.apply(this,arguments),Ii){if(Ii){var ae=as;Ii=!1,as=null}else throw Error(n(198));Nr||(Nr=!0,os=ae)}}function _i(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Dr(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ea(t){if(_i(t)!==t)throw Error(n(188))}function ls(t){var i=t.alternate;if(!i){if(i=_i(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var d=f.alternate;if(d===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===a)return ea(f),t;if(d===l)return ea(f),i;d=d.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=d;else{for(var E=!1,N=f.child;N;){if(N===a){E=!0,a=f,l=d;break}if(N===l){E=!0,l=f,a=d;break}N=N.sibling}if(!E){for(N=d.child;N;){if(N===a){E=!0,a=d,l=f;break}if(N===l){E=!0,l=d,a=f;break}N=N.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ta(t){return t=ls(t),t!==null?na(t):null}function na(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=na(t);if(i!==null)return i;t=t.sibling}return null}var Qa=e.unstable_scheduleCallback,Ja=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,Hl=e.unstable_requestPaint,Yt=e.unstable_now,Gl=e.unstable_getCurrentPriorityLevel,ia=e.unstable_ImmediatePriority,w=e.unstable_UserBlockingPriority,X=e.unstable_NormalPriority,re=e.unstable_LowPriority,te=e.unstable_IdlePriority,ee=null,be=null;function He(t){if(be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(ee,t,void 0,(t.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:at,je=Math.log,Ke=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(je(t)/Ke|0)|0}var ot=64,qe=4194304;function xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ot(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,d=t.pingedLanes,E=a&268435455;if(E!==0){var N=E&~f;N!==0?l=xt(N):(d&=E,d!==0&&(l=xt(d)))}else E=a&~f,E!==0?l=xt(E):d!==0&&(l=xt(d));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,d=i&-i,f>=d||f===16&&(d&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Re(i),f=1<<a,l|=t[a],i&=~f;return l}function Gt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,d=t.pendingLanes;0<d;){var E=31-Re(d),N=1<<E,B=f[E];B===-1?((N&a)===0||(N&l)!==0)&&(f[E]=Gt(N,i)):B<=i&&(t.expiredLanes|=N),d&=~N}}function Jt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ke(){var t=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),t}function hn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function pt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Re(i),t[i]=a}function bn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Re(a),d=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~d}}function Pn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Re(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var mt=0;function Fi(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var At,zt,ni,Pt,ii,vi=!1,Ir=[],rr=null,sr=null,ar=null,ra=new Map,sa=new Map,or=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,i){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(t,i,a,l,f,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[f]},i!==null&&(i=Sa(i),i!==null&&zt(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Mg(t,i,a,l,f){switch(i){case"focusin":return rr=aa(rr,t,i,a,l,f),!0;case"dragenter":return sr=aa(sr,t,i,a,l,f),!0;case"mouseover":return ar=aa(ar,t,i,a,l,f),!0;case"pointerover":var d=f.pointerId;return ra.set(d,aa(ra.get(d)||null,t,i,a,l,f)),!0;case"gotpointercapture":return d=f.pointerId,sa.set(d,aa(sa.get(d)||null,t,i,a,l,f)),!0}return!1}function pd(t){var i=Ur(t.target);if(i!==null){var a=_i(i);if(a!==null){if(i=a.tag,i===13){if(i=Dr(a),i!==null){t.blockedOn=i,ii(t.priority,function(){ni(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function eo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Xl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Ee=l,a.target.dispatchEvent(l),Ee=null}else return i=Sa(a),i!==null&&zt(i),t.blockedOn=a,!1;i.shift()}return!0}function md(t,i,a){eo(t)&&a.delete(i)}function Eg(){vi=!1,rr!==null&&eo(rr)&&(rr=null),sr!==null&&eo(sr)&&(sr=null),ar!==null&&eo(ar)&&(ar=null),ra.forEach(md),sa.forEach(md)}function oa(t,i){t.blockedOn===i&&(t.blockedOn=null,vi||(vi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eg)))}function la(t){function i(f){return oa(f,t)}if(0<Ir.length){oa(Ir[0],t);for(var a=1;a<Ir.length;a++){var l=Ir[a];l.blockedOn===t&&(l.blockedOn=null)}}for(rr!==null&&oa(rr,t),sr!==null&&oa(sr,t),ar!==null&&oa(ar,t),ra.forEach(i),sa.forEach(i),a=0;a<or.length;a++)l=or[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)pd(a),a.blockedOn===null&&or.shift()}var us=P.ReactCurrentBatchConfig,to=!0;function Tg(t,i,a,l){var f=mt,d=us.transition;us.transition=null;try{mt=1,Wl(t,i,a,l)}finally{mt=f,us.transition=d}}function Ag(t,i,a,l){var f=mt,d=us.transition;us.transition=null;try{mt=4,Wl(t,i,a,l)}finally{mt=f,us.transition=d}}function Wl(t,i,a,l){if(to){var f=Xl(t,i,a,l);if(f===null)lu(t,i,l,no,a),hd(t,l);else if(Mg(f,t,i,a,l))l.stopPropagation();else if(hd(t,l),i&4&&-1<yg.indexOf(t)){for(;f!==null;){var d=Sa(f);if(d!==null&&At(d),d=Xl(t,i,a,l),d===null&&lu(t,i,l,no,a),d===f)break;f=d}f!==null&&l.stopPropagation()}else lu(t,i,l,null,a)}}var no=null;function Xl(t,i,a,l){if(no=null,t=tt(l),t=Ur(t),t!==null)if(i=_i(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Dr(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return no=t,null}function gd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gl()){case ia:return 1;case w:return 4;case X:case re:return 16;case te:return 536870912;default:return 16}default:return 16}}var lr=null,jl=null,io=null;function _d(){if(io)return io;var t,i=jl,a=i.length,l,f="value"in lr?lr.value:lr.textContent,d=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[d-l];l++);return io=f.slice(t,1<l?1-l:void 0)}function ro(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function so(){return!0}function vd(){return!1}function kn(t){function i(a,l,f,d,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=d,this.target=E,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(d):d[N]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?so:vd,this.isPropagationStopped=vd,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=kn(cs),ua=ue({},cs,{view:0,detail:0}),wg=kn(ua),ql,$l,ca,ao=ue({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(ql=t.screenX-ca.screenX,$l=t.screenY-ca.screenY):$l=ql=0,ca=t),ql)},movementY:function(t){return"movementY"in t?t.movementY:$l}}),xd=kn(ao),Rg=ue({},ao,{dataTransfer:0}),Cg=kn(Rg),bg=ue({},ua,{relatedTarget:0}),Kl=kn(bg),Pg=ue({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=kn(Pg),Ng=ue({},cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Dg=kn(Ng),Ig=ue({},cs,{data:0}),Sd=kn(Ig),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Og[t])?!!i[t]:!1}function Zl(){return Bg}var kg=ue({},ua,{key:function(t){if(t.key){var i=Ug[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ro(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(t){return t.type==="keypress"?ro(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ro(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zg=kn(kg),Vg=ue({},ao,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=kn(Vg),Hg=ue({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Gg=kn(Hg),Wg=ue({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=kn(Wg),jg=ue({},ao,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yg=kn(jg),qg=[9,13,27,32],Ql=h&&"CompositionEvent"in window,fa=null;h&&"documentMode"in document&&(fa=document.documentMode);var $g=h&&"TextEvent"in window&&!fa,Md=h&&(!Ql||fa&&8<fa&&11>=fa),Ed=" ",Td=!1;function Ad(t,i){switch(t){case"keyup":return qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fs=!1;function Kg(t,i){switch(t){case"compositionend":return wd(i);case"keypress":return i.which!==32?null:(Td=!0,Ed);case"textInput":return t=i.data,t===Ed&&Td?null:t;default:return null}}function Zg(t,i){if(fs)return t==="compositionend"||!Ql&&Ad(t,i)?(t=_d(),io=jl=lr=null,fs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Md&&i.locale!=="ko"?null:i.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qg[t.type]:i==="textarea"}function Cd(t,i,a,l){he(l),i=fo(i,"onChange"),0<i.length&&(a=new Yl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var da=null,ha=null;function Jg(t){jd(t,0)}function oo(t){var i=gs(t);if(It(i))return t}function e0(t,i){if(t==="change")return i}var bd=!1;if(h){var Jl;if(h){var eu="oninput"in document;if(!eu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),eu=typeof Pd.oninput=="function"}Jl=eu}else Jl=!1;bd=Jl&&(!document.documentMode||9<document.documentMode)}function Ld(){da&&(da.detachEvent("onpropertychange",Nd),ha=da=null)}function Nd(t){if(t.propertyName==="value"&&oo(ha)){var i=[];Cd(i,ha,t,tt(t)),st(Jg,i)}}function t0(t,i,a){t==="focusin"?(Ld(),da=i,ha=a,da.attachEvent("onpropertychange",Nd)):t==="focusout"&&Ld()}function n0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return oo(ha)}function i0(t,i){if(t==="click")return oo(i)}function r0(t,i){if(t==="input"||t==="change")return oo(i)}function s0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ri=typeof Object.is=="function"?Object.is:s0;function pa(t,i){if(ri(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!ri(t[f],i[f]))return!1}return!0}function Dd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,i){var a=Dd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Dd(a)}}function Ud(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ud(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fd(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ut(t.document)}return i}function tu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function a0(t){var i=Fd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ud(a.ownerDocument.documentElement,a)){if(l!==null&&tu(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,d=Math.min(l.start,f);l=l.end===void 0?d:Math.min(l.end,f),!t.extend&&d>l&&(f=l,l=d,d=f),f=Id(a,d);var E=Id(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),d>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o0=h&&"documentMode"in document&&11>=document.documentMode,ds=null,nu=null,ma=null,iu=!1;function Od(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;iu||ds==null||ds!==ut(l)||(l=ds,"selectionStart"in l&&tu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ma&&pa(ma,l)||(ma=l,l=fo(nu,"onSelect"),0<l.length&&(i=new Yl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=ds)))}function lo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var hs={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},ru={},Bd={};h&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function uo(t){if(ru[t])return ru[t];if(!hs[t])return t;var i=hs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bd)return ru[t]=i[a];return t}var kd=uo("animationend"),zd=uo("animationiteration"),Vd=uo("animationstart"),Hd=uo("transitionend"),Gd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,i){Gd.set(t,i),u(i,[t])}for(var su=0;su<Wd.length;su++){var au=Wd[su],l0=au.toLowerCase(),u0=au[0].toUpperCase()+au.slice(1);ur(l0,"on"+u0)}ur(kd,"onAnimationEnd"),ur(zd,"onAnimationIteration"),ur(Vd,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(Hd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Xd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Za(l,i,void 0,t),t.currentTarget=null}function jd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var d=void 0;if(i)for(var E=l.length-1;0<=E;E--){var N=l[E],B=N.instance,ae=N.currentTarget;if(N=N.listener,B!==d&&f.isPropagationStopped())break e;Xd(f,N,ae),d=B}else for(E=0;E<l.length;E++){if(N=l[E],B=N.instance,ae=N.currentTarget,N=N.listener,B!==d&&f.isPropagationStopped())break e;Xd(f,N,ae),d=B}}}if(Nr)throw t=os,Nr=!1,os=null,t}function Vt(t,i){var a=i[pu];a===void 0&&(a=i[pu]=new Set);var l=t+"__bubble";a.has(l)||(Yd(i,t,2,!1),a.add(l))}function ou(t,i,a){var l=0;i&&(l|=4),Yd(a,t,l,i)}var co="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[co]){t[co]=!0,r.forEach(function(a){a!=="selectionchange"&&(c0.has(a)||ou(a,!1,t),ou(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[co]||(i[co]=!0,ou("selectionchange",!1,i))}}function Yd(t,i,a,l){switch(gd(i)){case 1:var f=Tg;break;case 4:f=Ag;break;default:f=Wl}a=f.bind(null,i,a,t),f=void 0,!Et||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function lu(t,i,a,l,f){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var N=l.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;N!==null;){if(E=Ur(N),E===null)return;if(B=E.tag,B===5||B===6){l=d=E;continue e}N=N.parentNode}}l=l.return}st(function(){var ae=d,Se=tt(a),ye=[];e:{var xe=Gd.get(t);if(xe!==void 0){var ze=Yl,We=t;switch(t){case"keypress":if(ro(a)===0)break e;case"keydown":case"keyup":ze=zg;break;case"focusin":We="focus",ze=Kl;break;case"focusout":We="blur",ze=Kl;break;case"beforeblur":case"afterblur":ze=Kl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ze=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ze=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ze=Gg;break;case kd:case zd:case Vd:ze=Lg;break;case Hd:ze=Xg;break;case"scroll":ze=wg;break;case"wheel":ze=Yg;break;case"copy":case"cut":case"paste":ze=Dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ze=yd}var Ye=(i&4)!==0,Zt=!Ye&&t==="scroll",Q=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var G=ae,ne;G!==null;){ne=G;var Te=ne.stateNode;if(ne.tag===5&&Te!==null&&(ne=Te,Q!==null&&(Te=Dt(G,Q),Te!=null&&Ye.push(va(G,Te,ne)))),Zt)break;G=G.return}0<Ye.length&&(xe=new ze(xe,We,null,a,Se),ye.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",ze=t==="mouseout"||t==="pointerout",xe&&a!==Ee&&(We=a.relatedTarget||a.fromElement)&&(Ur(We)||We[Oi]))break e;if((ze||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,ze?(We=a.relatedTarget||a.toElement,ze=ae,We=We?Ur(We):null,We!==null&&(Zt=_i(We),We!==Zt||We.tag!==5&&We.tag!==6)&&(We=null)):(ze=null,We=ae),ze!==We)){if(Ye=xd,Te="onMouseLeave",Q="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=yd,Te="onPointerLeave",Q="onPointerEnter",G="pointer"),Zt=ze==null?xe:gs(ze),ne=We==null?xe:gs(We),xe=new Ye(Te,G+"leave",ze,a,Se),xe.target=Zt,xe.relatedTarget=ne,Te=null,Ur(Se)===ae&&(Ye=new Ye(Q,G+"enter",We,a,Se),Ye.target=ne,Ye.relatedTarget=Zt,Te=Ye),Zt=Te,ze&&We)t:{for(Ye=ze,Q=We,G=0,ne=Ye;ne;ne=ps(ne))G++;for(ne=0,Te=Q;Te;Te=ps(Te))ne++;for(;0<G-ne;)Ye=ps(Ye),G--;for(;0<ne-G;)Q=ps(Q),ne--;for(;G--;){if(Ye===Q||Q!==null&&Ye===Q.alternate)break t;Ye=ps(Ye),Q=ps(Q)}Ye=null}else Ye=null;ze!==null&&qd(ye,xe,ze,Ye,!1),We!==null&&Zt!==null&&qd(ye,Zt,We,Ye,!0)}}e:{if(xe=ae?gs(ae):window,ze=xe.nodeName&&xe.nodeName.toLowerCase(),ze==="select"||ze==="input"&&xe.type==="file")var $e=e0;else if(Rd(xe))if(bd)$e=r0;else{$e=n0;var Je=t0}else(ze=xe.nodeName)&&ze.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&($e=i0);if($e&&($e=$e(t,ae))){Cd(ye,$e,a,Se);break e}Je&&Je(t,xe,ae),t==="focusout"&&(Je=xe._wrapperState)&&Je.controlled&&xe.type==="number"&&dn(xe,"number",xe.value)}switch(Je=ae?gs(ae):window,t){case"focusin":(Rd(Je)||Je.contentEditable==="true")&&(ds=Je,nu=ae,ma=null);break;case"focusout":ma=nu=ds=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,Od(ye,a,Se);break;case"selectionchange":if(o0)break;case"keydown":case"keyup":Od(ye,a,Se)}var et;if(Ql)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else fs?Ad(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Md&&a.locale!=="ko"&&(fs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&fs&&(et=_d()):(lr=Se,jl="value"in lr?lr.value:lr.textContent,fs=!0)),Je=fo(ae,nt),0<Je.length&&(nt=new Sd(nt,t,null,a,Se),ye.push({event:nt,listeners:Je}),et?nt.data=et:(et=wd(a),et!==null&&(nt.data=et)))),(et=$g?Kg(t,a):Zg(t,a))&&(ae=fo(ae,"onBeforeInput"),0<ae.length&&(Se=new Sd("onBeforeInput","beforeinput",null,a,Se),ye.push({event:Se,listeners:ae}),Se.data=et))}jd(ye,i)})}function va(t,i,a){return{instance:t,listener:i,currentTarget:a}}function fo(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,d=f.stateNode;f.tag===5&&d!==null&&(f=d,d=Dt(t,a),d!=null&&l.unshift(va(t,d,f)),d=Dt(t,i),d!=null&&l.push(va(t,d,f))),t=t.return}return l}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qd(t,i,a,l,f){for(var d=i._reactName,E=[];a!==null&&a!==l;){var N=a,B=N.alternate,ae=N.stateNode;if(B!==null&&B===l)break;N.tag===5&&ae!==null&&(N=ae,f?(B=Dt(a,d),B!=null&&E.unshift(va(a,B,N))):f||(B=Dt(a,d),B!=null&&E.push(va(a,B,N)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var f0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function $d(t){return(typeof t=="string"?t:""+t).replace(f0,`
`).replace(d0,"")}function ho(t,i,a){if(i=$d(i),$d(t)!==i&&a)throw Error(n(425))}function po(){}var uu=null,cu=null;function fu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(t){return Kd.resolve(null).then(t).catch(m0)}:du;function m0(t){setTimeout(function(){throw t})}function hu(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),la(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);la(i)}function cr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),xi="__reactFiber$"+ms,xa="__reactProps$"+ms,Oi="__reactContainer$"+ms,pu="__reactEvents$"+ms,g0="__reactListeners$"+ms,_0="__reactHandles$"+ms;function Ur(t){var i=t[xi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Oi]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Zd(t);t!==null;){if(a=t[xi])return a;t=Zd(t)}return i}t=a,a=t.parentNode}return null}function Sa(t){return t=t[xi]||t[Oi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function mo(t){return t[xa]||null}var mu=[],_s=-1;function fr(t){return{current:t}}function Ht(t){0>_s||(t.current=mu[_s],mu[_s]=null,_s--)}function Bt(t,i){_s++,mu[_s]=t.current,t.current=i}var dr={},_n=fr(dr),Ln=fr(!1),Fr=dr;function vs(t,i){var a=t.type.contextTypes;if(!a)return dr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},d;for(d in a)f[d]=i[d];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(t){return t=t.childContextTypes,t!=null}function go(){Ht(Ln),Ht(_n)}function Qd(t,i,a){if(_n.current!==dr)throw Error(n(168));Bt(_n,i),Bt(Ln,a)}function Jd(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ge(t)||"Unknown",f));return ue({},a,l)}function _o(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Fr=_n.current,Bt(_n,t),Bt(Ln,Ln.current),!0}function eh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Jd(t,i,Fr),l.__reactInternalMemoizedMergedChildContext=t,Ht(Ln),Ht(_n),Bt(_n,t)):Ht(Ln),Bt(Ln,a)}var Bi=null,vo=!1,gu=!1;function th(t){Bi===null?Bi=[t]:Bi.push(t)}function v0(t){vo=!0,th(t)}function hr(){if(!gu&&Bi!==null){gu=!0;var t=0,i=mt;try{var a=Bi;for(mt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Bi=null,vo=!1}catch(f){throw Bi!==null&&(Bi=Bi.slice(t+1)),Qa(ia,hr),f}finally{mt=i,gu=!1}}return null}var xs=[],Ss=0,xo=null,So=0,Yn=[],qn=0,Or=null,ki=1,zi="";function Br(t,i){xs[Ss++]=So,xs[Ss++]=xo,xo=t,So=i}function nh(t,i,a){Yn[qn++]=ki,Yn[qn++]=zi,Yn[qn++]=Or,Or=t;var l=ki;t=zi;var f=32-Re(l)-1;l&=~(1<<f),a+=1;var d=32-Re(i)+f;if(30<d){var E=f-f%5;d=(l&(1<<E)-1).toString(32),l>>=E,f-=E,ki=1<<32-Re(i)+f|a<<f|l,zi=d+t}else ki=1<<d|a<<f|l,zi=t}function _u(t){t.return!==null&&(Br(t,1),nh(t,1,0))}function vu(t){for(;t===xo;)xo=xs[--Ss],xs[Ss]=null,So=xs[--Ss],xs[Ss]=null;for(;t===Or;)Or=Yn[--qn],Yn[qn]=null,zi=Yn[--qn],Yn[qn]=null,ki=Yn[--qn],Yn[qn]=null}var zn=null,Vn=null,Wt=!1,si=null;function ih(t,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function rh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Vn=cr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:ki,overflow:zi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,zn=t,Vn=null,!0):!1;default:return!1}}function xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Su(t){if(Wt){var i=Vn;if(i){var a=i;if(!rh(t,i)){if(xu(t))throw Error(n(418));i=cr(a.nextSibling);var l=zn;i&&rh(t,i)?ih(l,a):(t.flags=t.flags&-4097|2,Wt=!1,zn=t)}}else{if(xu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Wt=!1,zn=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function yo(t){if(t!==zn)return!1;if(!Wt)return sh(t),Wt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!fu(t.type,t.memoizedProps)),i&&(i=Vn)){if(xu(t))throw ah(),Error(n(418));for(;i;)ih(t,i),i=cr(i.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Vn=cr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Vn=null}}else Vn=zn?cr(t.stateNode.nextSibling):null;return!0}function ah(){for(var t=Vn;t;)t=cr(t.nextSibling)}function ys(){Vn=zn=null,Wt=!1}function yu(t){si===null?si=[t]:si.push(t)}var x0=P.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,d=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===d?i.ref:(i=function(E){var N=f.refs;E===null?delete N[d]:N[d]=E},i._stringRef=d,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Mo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function oh(t){var i=t._init;return i(t._payload)}function lh(t){function i(Q,G){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[G],Q.flags|=16):ne.push(G)}}function a(Q,G){if(!t)return null;for(;G!==null;)i(Q,G),G=G.sibling;return null}function l(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function f(Q,G){return Q=yr(Q,G),Q.index=0,Q.sibling=null,Q}function d(Q,G,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<G?(Q.flags|=2,G):ne):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function E(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function N(Q,G,ne,Te){return G===null||G.tag!==6?(G=dc(ne,Q.mode,Te),G.return=Q,G):(G=f(G,ne),G.return=Q,G)}function B(Q,G,ne,Te){var $e=ne.type;return $e===O?Se(Q,G,ne.props.children,Te,ne.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===q&&oh($e)===G.type)?(Te=f(G,ne.props),Te.ref=ya(Q,G,ne),Te.return=Q,Te):(Te=jo(ne.type,ne.key,ne.props,null,Q.mode,Te),Te.ref=ya(Q,G,ne),Te.return=Q,Te)}function ae(Q,G,ne,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=hc(ne,Q.mode,Te),G.return=Q,G):(G=f(G,ne.children||[]),G.return=Q,G)}function Se(Q,G,ne,Te,$e){return G===null||G.tag!==7?(G=jr(ne,Q.mode,Te,$e),G.return=Q,G):(G=f(G,ne),G.return=Q,G)}function ye(Q,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=dc(""+G,Q.mode,ne),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case V:return ne=jo(G.type,G.key,G.props,null,Q.mode,ne),ne.ref=ya(Q,null,G),ne.return=Q,ne;case L:return G=hc(G,Q.mode,ne),G.return=Q,G;case q:var Te=G._init;return ye(Q,Te(G._payload),ne)}if(H(G)||le(G))return G=jr(G,Q.mode,ne,null),G.return=Q,G;Mo(Q,G)}return null}function xe(Q,G,ne,Te){var $e=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return $e!==null?null:N(Q,G,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case V:return ne.key===$e?B(Q,G,ne,Te):null;case L:return ne.key===$e?ae(Q,G,ne,Te):null;case q:return $e=ne._init,xe(Q,G,$e(ne._payload),Te)}if(H(ne)||le(ne))return $e!==null?null:Se(Q,G,ne,Te,null);Mo(Q,ne)}return null}function ze(Q,G,ne,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Q=Q.get(ne)||null,N(G,Q,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case V:return Q=Q.get(Te.key===null?ne:Te.key)||null,B(G,Q,Te,$e);case L:return Q=Q.get(Te.key===null?ne:Te.key)||null,ae(G,Q,Te,$e);case q:var Je=Te._init;return ze(Q,G,ne,Je(Te._payload),$e)}if(H(Te)||le(Te))return Q=Q.get(ne)||null,Se(G,Q,Te,$e,null);Mo(G,Te)}return null}function We(Q,G,ne,Te){for(var $e=null,Je=null,et=G,nt=G=0,cn=null;et!==null&&nt<ne.length;nt++){et.index>nt?(cn=et,et=null):cn=et.sibling;var Tt=xe(Q,et,ne[nt],Te);if(Tt===null){et===null&&(et=cn);break}t&&et&&Tt.alternate===null&&i(Q,et),G=d(Tt,G,nt),Je===null?$e=Tt:Je.sibling=Tt,Je=Tt,et=cn}if(nt===ne.length)return a(Q,et),Wt&&Br(Q,nt),$e;if(et===null){for(;nt<ne.length;nt++)et=ye(Q,ne[nt],Te),et!==null&&(G=d(et,G,nt),Je===null?$e=et:Je.sibling=et,Je=et);return Wt&&Br(Q,nt),$e}for(et=l(Q,et);nt<ne.length;nt++)cn=ze(et,Q,nt,ne[nt],Te),cn!==null&&(t&&cn.alternate!==null&&et.delete(cn.key===null?nt:cn.key),G=d(cn,G,nt),Je===null?$e=cn:Je.sibling=cn,Je=cn);return t&&et.forEach(function(Mr){return i(Q,Mr)}),Wt&&Br(Q,nt),$e}function Ye(Q,G,ne,Te){var $e=le(ne);if(typeof $e!="function")throw Error(n(150));if(ne=$e.call(ne),ne==null)throw Error(n(151));for(var Je=$e=null,et=G,nt=G=0,cn=null,Tt=ne.next();et!==null&&!Tt.done;nt++,Tt=ne.next()){et.index>nt?(cn=et,et=null):cn=et.sibling;var Mr=xe(Q,et,Tt.value,Te);if(Mr===null){et===null&&(et=cn);break}t&&et&&Mr.alternate===null&&i(Q,et),G=d(Mr,G,nt),Je===null?$e=Mr:Je.sibling=Mr,Je=Mr,et=cn}if(Tt.done)return a(Q,et),Wt&&Br(Q,nt),$e;if(et===null){for(;!Tt.done;nt++,Tt=ne.next())Tt=ye(Q,Tt.value,Te),Tt!==null&&(G=d(Tt,G,nt),Je===null?$e=Tt:Je.sibling=Tt,Je=Tt);return Wt&&Br(Q,nt),$e}for(et=l(Q,et);!Tt.done;nt++,Tt=ne.next())Tt=ze(et,Q,nt,Tt.value,Te),Tt!==null&&(t&&Tt.alternate!==null&&et.delete(Tt.key===null?nt:Tt.key),G=d(Tt,G,nt),Je===null?$e=Tt:Je.sibling=Tt,Je=Tt);return t&&et.forEach(function(Q0){return i(Q,Q0)}),Wt&&Br(Q,nt),$e}function Zt(Q,G,ne,Te){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case V:e:{for(var $e=ne.key,Je=G;Je!==null;){if(Je.key===$e){if($e=ne.type,$e===O){if(Je.tag===7){a(Q,Je.sibling),G=f(Je,ne.props.children),G.return=Q,Q=G;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===q&&oh($e)===Je.type){a(Q,Je.sibling),G=f(Je,ne.props),G.ref=ya(Q,Je,ne),G.return=Q,Q=G;break e}a(Q,Je);break}else i(Q,Je);Je=Je.sibling}ne.type===O?(G=jr(ne.props.children,Q.mode,Te,ne.key),G.return=Q,Q=G):(Te=jo(ne.type,ne.key,ne.props,null,Q.mode,Te),Te.ref=ya(Q,G,ne),Te.return=Q,Q=Te)}return E(Q);case L:e:{for(Je=ne.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){a(Q,G.sibling),G=f(G,ne.children||[]),G.return=Q,Q=G;break e}else{a(Q,G);break}else i(Q,G);G=G.sibling}G=hc(ne,Q.mode,Te),G.return=Q,Q=G}return E(Q);case q:return Je=ne._init,Zt(Q,G,Je(ne._payload),Te)}if(H(ne))return We(Q,G,ne,Te);if(le(ne))return Ye(Q,G,ne,Te);Mo(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(a(Q,G.sibling),G=f(G,ne),G.return=Q,Q=G):(a(Q,G),G=dc(ne,Q.mode,Te),G.return=Q,Q=G),E(Q)):a(Q,G)}return Zt}var Ms=lh(!0),uh=lh(!1),Eo=fr(null),To=null,Es=null,Mu=null;function Eu(){Mu=Es=To=null}function Tu(t){var i=Eo.current;Ht(Eo),t._currentValue=i}function Au(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Ts(t,i){To=t,Mu=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function $n(t){var i=t._currentValue;if(Mu!==t)if(t={context:t,memoizedValue:i,next:null},Es===null){if(To===null)throw Error(n(308));Es=t,To.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return i}var kr=null;function wu(t){kr===null?kr=[t]:kr.push(t)}function ch(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,wu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Vi(t,l)}function Vi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var pr=!1;function Ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(St&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Vi(t,a)}return f=l.interleaved,f===null?(i.next=i,wu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Vi(t,a)}function Ao(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Pn(t,a)}}function dh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};d===null?f=d=E:d=d.next=E,a=a.next}while(a!==null);d===null?f=d=i:d=d.next=i}else f=d=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function wo(t,i,a,l){var f=t.updateQueue;pr=!1;var d=f.firstBaseUpdate,E=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var B=N,ae=B.next;B.next=null,E===null?d=ae:E.next=ae,E=B;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,N=Se.lastBaseUpdate,N!==E&&(N===null?Se.firstBaseUpdate=ae:N.next=ae,Se.lastBaseUpdate=B))}if(d!==null){var ye=f.baseState;E=0,Se=ae=B=null,N=d;do{var xe=N.lane,ze=N.eventTime;if((l&xe)===xe){Se!==null&&(Se=Se.next={eventTime:ze,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var We=t,Ye=N;switch(xe=i,ze=a,Ye.tag){case 1:if(We=Ye.payload,typeof We=="function"){ye=We.call(ze,ye,xe);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ye.payload,xe=typeof We=="function"?We.call(ze,ye,xe):We,xe==null)break e;ye=ue({},ye,xe);break e;case 2:pr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,xe=f.effects,xe===null?f.effects=[N]:xe.push(N))}else ze={eventTime:ze,lane:xe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Se===null?(ae=Se=ze,B=ye):Se=Se.next=ze,E|=xe;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;xe=N,N=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=ae,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else d===null&&(f.shared.lanes=0);Hr|=E,t.lanes=E,t.memoizedState=ye}}function hh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Ma={},Si=fr(Ma),Ea=fr(Ma),Ta=fr(Ma);function zr(t){if(t===Ma)throw Error(n(174));return t}function Cu(t,i){switch(Bt(Ta,i),Bt(Ea,t),Bt(Si,Ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}Ht(Si),Bt(Si,i)}function As(){Ht(Si),Ht(Ea),Ht(Ta)}function ph(t){zr(Ta.current);var i=zr(Si.current),a=y(i,t.type);i!==a&&(Bt(Ea,t),Bt(Si,a))}function bu(t){Ea.current===t&&(Ht(Si),Ht(Ea))}var qt=fr(0);function Ro(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Pu=[];function Lu(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var Co=P.ReactCurrentDispatcher,Nu=P.ReactCurrentBatchConfig,Vr=0,$t=null,nn=null,ln=null,bo=!1,Aa=!1,wa=0,S0=0;function vn(){throw Error(n(321))}function Du(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ri(t[a],i[a]))return!1;return!0}function Iu(t,i,a,l,f,d){if(Vr=d,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Co.current=t===null||t.memoizedState===null?T0:A0,t=a(l,f),Aa){d=0;do{if(Aa=!1,wa=0,25<=d)throw Error(n(301));d+=1,ln=nn=null,i.updateQueue=null,Co.current=w0,t=a(l,f)}while(Aa)}if(Co.current=No,i=nn!==null&&nn.next!==null,Vr=0,ln=nn=$t=null,bo=!1,i)throw Error(n(300));return t}function Uu(){var t=wa!==0;return wa=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?$t.memoizedState=ln=t:ln=ln.next=t,ln}function Kn(){if(nn===null){var t=$t.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var i=ln===null?$t.memoizedState:ln.next;if(i!==null)ln=i,nn=t;else{if(t===null)throw Error(n(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},ln===null?$t.memoizedState=ln=t:ln=ln.next=t}return ln}function Ra(t,i){return typeof i=="function"?i(t):i}function Fu(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=nn,f=l.baseQueue,d=a.pending;if(d!==null){if(f!==null){var E=f.next;f.next=d.next,d.next=E}l.baseQueue=f=d,a.pending=null}if(f!==null){d=f.next,l=l.baseState;var N=E=null,B=null,ae=d;do{var Se=ae.lane;if((Vr&Se)===Se)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),l=ae.hasEagerState?ae.eagerState:t(l,ae.action);else{var ye={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(N=B=ye,E=l):B=B.next=ye,$t.lanes|=Se,Hr|=Se}ae=ae.next}while(ae!==null&&ae!==d);B===null?E=l:B.next=N,ri(l,i.memoizedState)||(Dn=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=B,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do d=f.lane,$t.lanes|=d,Hr|=d,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ou(t){var i=Kn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,d=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do d=t(d,E.action),E=E.next;while(E!==f);ri(d,i.memoizedState)||(Dn=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function mh(){}function gh(t,i){var a=$t,l=Kn(),f=i(),d=!ri(l.memoizedState,f);if(d&&(l.memoizedState=f,Dn=!0),l=l.queue,Bu(xh.bind(null,a,l,t),[t]),l.getSnapshot!==i||d||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,Ca(9,vh.bind(null,a,l,f,i),void 0,null),un===null)throw Error(n(349));(Vr&30)!==0||_h(a,i,f)}return f}function _h(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function vh(t,i,a,l){i.value=a,i.getSnapshot=l,Sh(i)&&yh(t)}function xh(t,i,a){return a(function(){Sh(i)&&yh(t)})}function Sh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ri(t,a)}catch{return!0}}function yh(t){var i=Vi(t,1);i!==null&&ui(i,t,1,-1)}function Mh(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i.queue=t,t=t.dispatch=E0.bind(null,$t,t),[i.memoizedState,t]}function Ca(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Eh(){return Kn().memoizedState}function Po(t,i,a,l){var f=yi();$t.flags|=t,f.memoizedState=Ca(1|i,a,void 0,l===void 0?null:l)}function Lo(t,i,a,l){var f=Kn();l=l===void 0?null:l;var d=void 0;if(nn!==null){var E=nn.memoizedState;if(d=E.destroy,l!==null&&Du(l,E.deps)){f.memoizedState=Ca(i,a,d,l);return}}$t.flags|=t,f.memoizedState=Ca(1|i,a,d,l)}function Th(t,i){return Po(8390656,8,t,i)}function Bu(t,i){return Lo(2048,8,t,i)}function Ah(t,i){return Lo(4,2,t,i)}function wh(t,i){return Lo(4,4,t,i)}function Rh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ch(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4,4,Rh.bind(null,i,t),a)}function ku(){}function bh(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Ph(t,i){var a=Kn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Du(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Lh(t,i,a){return(Vr&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=a):(ri(a,i)||(a=ke(),$t.lanes|=a,Hr|=a,t.baseState=!0),i)}function y0(t,i){var a=mt;mt=a!==0&&4>a?a:4,t(!0);var l=Nu.transition;Nu.transition={};try{t(!1),i()}finally{mt=a,Nu.transition=l}}function Nh(){return Kn().memoizedState}function M0(t,i,a){var l=xr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Dh(t))Ih(i,a);else if(a=ch(t,i,a,l),a!==null){var f=wn();ui(a,t,l,f),Uh(a,i,l)}}function E0(t,i,a){var l=xr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dh(t))Ih(i,f);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var E=i.lastRenderedState,N=d(E,a);if(f.hasEagerState=!0,f.eagerState=N,ri(N,E)){var B=i.interleaved;B===null?(f.next=f,wu(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=ch(t,i,f,l),a!==null&&(f=wn(),ui(a,t,l,f),Uh(a,i,l))}}function Dh(t){var i=t.alternate;return t===$t||i!==null&&i===$t}function Ih(t,i){Aa=bo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Uh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Pn(t,a)}}var No={readContext:$n,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},T0={readContext:$n,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:Th,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Po(4194308,4,Rh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Po(4194308,4,t,i)},useInsertionEffect:function(t,i){return Po(4,2,t,i)},useMemo:function(t,i){var a=yi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=yi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=M0.bind(null,$t,t),[l.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:Mh,useDebugValue:ku,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Mh(!1),i=t[0];return t=y0.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=$t,f=yi();if(Wt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),un===null)throw Error(n(349));(Vr&30)!==0||_h(l,i,a)}f.memoizedState=a;var d={value:a,getSnapshot:i};return f.queue=d,Th(xh.bind(null,l,d,t),[t]),l.flags|=2048,Ca(9,vh.bind(null,l,d,a,i),void 0,null),a},useId:function(){var t=yi(),i=un.identifierPrefix;if(Wt){var a=zi,l=ki;a=(l&~(1<<32-Re(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=S0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},A0={readContext:$n,useCallback:bh,useContext:$n,useEffect:Bu,useImperativeHandle:Ch,useInsertionEffect:Ah,useLayoutEffect:wh,useMemo:Ph,useReducer:Fu,useRef:Eh,useState:function(){return Fu(Ra)},useDebugValue:ku,useDeferredValue:function(t){var i=Kn();return Lh(i,nn.memoizedState,t)},useTransition:function(){var t=Fu(Ra)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Nh,unstable_isNewReconciler:!1},w0={readContext:$n,useCallback:bh,useContext:$n,useEffect:Bu,useImperativeHandle:Ch,useInsertionEffect:Ah,useLayoutEffect:wh,useMemo:Ph,useReducer:Ou,useRef:Eh,useState:function(){return Ou(Ra)},useDebugValue:ku,useDeferredValue:function(t){var i=Kn();return nn===null?i.memoizedState=t:Lh(i,nn.memoizedState,t)},useTransition:function(){var t=Ou(Ra)[0],i=Kn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Nh,unstable_isNewReconciler:!1};function ai(t,i){if(t&&t.defaultProps){i=ue({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function zu(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:ue({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Do={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=wn(),f=xr(t),d=Hi(l,f);d.payload=i,a!=null&&(d.callback=a),i=mr(t,d,f),i!==null&&(ui(i,t,f,l),Ao(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=wn(),f=xr(t),d=Hi(l,f);d.tag=1,d.payload=i,a!=null&&(d.callback=a),i=mr(t,d,f),i!==null&&(ui(i,t,f,l),Ao(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=wn(),l=xr(t),f=Hi(a,l);f.tag=2,i!=null&&(f.callback=i),i=mr(t,f,l),i!==null&&(ui(i,t,l,a),Ao(i,t,l))}};function Fh(t,i,a,l,f,d,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,d,E):i.prototype&&i.prototype.isPureReactComponent?!pa(a,l)||!pa(f,d):!0}function Oh(t,i,a){var l=!1,f=dr,d=i.contextType;return typeof d=="object"&&d!==null?d=$n(d):(f=Nn(i)?Fr:_n.current,l=i.contextTypes,d=(l=l!=null)?vs(t,f):dr),i=new i(a,d),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Do,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=d),i}function Bh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Do.enqueueReplaceState(i,i.state,null)}function Vu(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Ru(t);var d=i.contextType;typeof d=="object"&&d!==null?f.context=$n(d):(d=Nn(i)?Fr:_n.current,f.context=vs(t,d)),f.state=t.memoizedState,d=i.getDerivedStateFromProps,typeof d=="function"&&(zu(t,i,d,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Do.enqueueReplaceState(f,f.state,null),wo(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,i){try{var a="",l=i;do a+=Le(l),l=l.return;while(l);var f=a}catch(d){f=`
Error generating stack: `+d.message+`
`+d.stack}return{value:t,source:i,stack:f,digest:null}}function Hu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Gu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function kh(t,i,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){zo||(zo=!0,rc=l),Gu(t,i)},a}function zh(t,i,a){a=Hi(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Gu(t,i)}}var d=t.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(a.callback=function(){Gu(t,i),typeof l!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Vh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new R0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=V0.bind(null,t,i,a),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Hi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var C0=P.ReactCurrentOwner,Dn=!1;function An(t,i,a,l){i.child=t===null?uh(i,null,a,l):Ms(i,t.child,a,l)}function Wh(t,i,a,l,f){a=a.render;var d=i.ref;return Ts(i,f),l=Iu(t,i,a,l,d,f),a=Uu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Gi(t,i,f)):(Wt&&a&&_u(i),i.flags|=1,An(t,i,l,f),i.child)}function Xh(t,i,a,l,f){if(t===null){var d=a.type;return typeof d=="function"&&!fc(d)&&d.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=d,jh(t,i,d,l,f)):(t=jo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,(t.lanes&f)===0){var E=d.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(E,l)&&t.ref===i.ref)return Gi(t,i,f)}return i.flags|=1,t=yr(d,l),t.ref=i.ref,t.return=i,i.child=t}function jh(t,i,a,l,f){if(t!==null){var d=t.memoizedProps;if(pa(d,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=d,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Gi(t,i,f)}return Wu(t,i,a,l,f)}function Yh(t,i,a){var l=i.pendingProps,f=l.children,d=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Cs,Hn),Hn|=a;else{if((a&1073741824)===0)return t=d!==null?d.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Bt(Cs,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=d!==null?d.baseLanes:a,Bt(Cs,Hn),Hn|=l}else d!==null?(l=d.baseLanes|a,i.memoizedState=null):l=a,Bt(Cs,Hn),Hn|=l;return An(t,i,f,a),i.child}function qh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Wu(t,i,a,l,f){var d=Nn(a)?Fr:_n.current;return d=vs(i,d),Ts(i,f),a=Iu(t,i,a,l,d,f),l=Uu(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Gi(t,i,f)):(Wt&&l&&_u(i),i.flags|=1,An(t,i,a,f),i.child)}function $h(t,i,a,l,f){if(Nn(a)){var d=!0;_o(i)}else d=!1;if(Ts(i,f),i.stateNode===null)Uo(t,i),Oh(i,a,l),Vu(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,N=i.memoizedProps;E.props=N;var B=E.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=$n(ae):(ae=Nn(a)?Fr:_n.current,ae=vs(i,ae));var Se=a.getDerivedStateFromProps,ye=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==l||B!==ae)&&Bh(i,E,l,ae),pr=!1;var xe=i.memoizedState;E.state=xe,wo(i,l,E,f),B=i.memoizedState,N!==l||xe!==B||Ln.current||pr?(typeof Se=="function"&&(zu(i,a,Se,l),B=i.memoizedState),(N=pr||Fh(i,a,N,l,xe,B,ae))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),E.props=l,E.state=B,E.context=ae,l=N):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,fh(t,i),N=i.memoizedProps,ae=i.type===i.elementType?N:ai(i.type,N),E.props=ae,ye=i.pendingProps,xe=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=$n(B):(B=Nn(a)?Fr:_n.current,B=vs(i,B));var ze=a.getDerivedStateFromProps;(Se=typeof ze=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(N!==ye||xe!==B)&&Bh(i,E,l,B),pr=!1,xe=i.memoizedState,E.state=xe,wo(i,l,E,f);var We=i.memoizedState;N!==ye||xe!==We||Ln.current||pr?(typeof ze=="function"&&(zu(i,a,ze,l),We=i.memoizedState),(ae=pr||Fh(i,a,ae,l,xe,We,B)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,We,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,We,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=We),E.props=l,E.state=We,E.context=B,l=ae):(typeof E.componentDidUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),l=!1)}return Xu(t,i,a,l,d,f)}function Xu(t,i,a,l,f,d){qh(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&eh(i,a,!1),Gi(t,i,d);l=i.stateNode,C0.current=i;var N=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=Ms(i,t.child,null,d),i.child=Ms(i,null,N,d)):An(t,i,N,d),i.memoizedState=l.state,f&&eh(i,a,!0),i.child}function Kh(t){var i=t.stateNode;i.pendingContext?Qd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qd(t,i.context,!1),Cu(t,i.containerInfo)}function Zh(t,i,a,l,f){return ys(),yu(f),i.flags|=256,An(t,i,a,l),i.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Yu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qh(t,i,a){var l=i.pendingProps,f=qt.current,d=!1,E=(i.flags&128)!==0,N;if((N=E)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(d=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Bt(qt,f&1),t===null)return Su(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,d?(l=i.mode,d=i.child,E={mode:"hidden",children:E},(l&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=E):d=Yo(E,l,0,null),t=jr(t,l,a,null),d.return=i,t.return=i,d.sibling=t,i.child=d,i.child.memoizedState=Yu(a),i.memoizedState=ju,t):qu(i,E));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return b0(t,i,E,l,N,f,a);if(d){d=l.fallback,E=i.mode,f=t.child,N=f.sibling;var B={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=yr(f,B),l.subtreeFlags=f.subtreeFlags&14680064),N!==null?d=yr(N,d):(d=jr(d,E,a,null),d.flags|=2),d.return=i,l.return=i,l.sibling=d,i.child=l,l=d,d=i.child,E=t.child.memoizedState,E=E===null?Yu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},d.memoizedState=E,d.childLanes=t.childLanes&~a,i.memoizedState=ju,l}return d=t.child,t=d.sibling,l=yr(d,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function qu(t,i){return i=Yo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Io(t,i,a,l){return l!==null&&yu(l),Ms(i,t.child,null,a),t=qu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function b0(t,i,a,l,f,d,E){if(a)return i.flags&256?(i.flags&=-257,l=Hu(Error(n(422))),Io(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(d=l.fallback,f=i.mode,l=Yo({mode:"visible",children:l.children},f,0,null),d=jr(d,f,E,null),d.flags|=2,l.return=i,d.return=i,l.sibling=d,i.child=l,(i.mode&1)!==0&&Ms(i,t.child,null,E),i.child.memoizedState=Yu(E),i.memoizedState=ju,d);if((i.mode&1)===0)return Io(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var N=l.dgst;return l=N,d=Error(n(419)),l=Hu(d,l,void 0),Io(t,i,E,l)}if(N=(E&t.childLanes)!==0,Dn||N){if(l=un,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==d.retryLane&&(d.retryLane=f,Vi(t,f),ui(l,t,f,-1))}return cc(),l=Hu(Error(n(421))),Io(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=H0.bind(null,t),f._reactRetry=i,null):(t=d.treeContext,Vn=cr(f.nextSibling),zn=i,Wt=!0,si=null,t!==null&&(Yn[qn++]=ki,Yn[qn++]=zi,Yn[qn++]=Or,ki=t.id,zi=t.overflow,Or=i),i=qu(i,l.children),i.flags|=4096,i)}function Jh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Au(t.return,i,a)}function $u(t,i,a,l,f){var d=t.memoizedState;d===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=f)}function ep(t,i,a){var l=i.pendingProps,f=l.revealOrder,d=l.tail;if(An(t,i,l.children,a),l=qt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,a,i);else if(t.tag===19)Jh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Bt(qt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Ro(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),$u(i,!1,f,a,d);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Ro(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}$u(i,!0,a,null,d);break;case"together":$u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Uo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Gi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Hr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=yr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=yr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function P0(t,i,a){switch(i.tag){case 3:Kh(i),ys();break;case 5:ph(i);break;case 1:Nn(i.type)&&_o(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Bt(Eo,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Bt(qt,qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Qh(t,i,a):(Bt(qt,qt.current&1),t=Gi(t,i,a),t!==null?t.sibling:null);Bt(qt,qt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ep(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(qt,qt.current),l)break;return null;case 22:case 23:return i.lanes=0,Yh(t,i,a)}return Gi(t,i,a)}var tp,Ku,np,ip;tp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ku=function(){},np=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,zr(Si.current);var d=null;switch(a){case"input":f=Mt(t,f),l=Mt(t,l),d=[];break;case"select":f=ue({},f,{value:void 0}),l=ue({},l,{value:void 0}),d=[];break;case"textarea":f=ft(t,f),l=ft(t,l),d=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=po)}Be(a,l);var E;a=null;for(ae in f)if(!l.hasOwnProperty(ae)&&f.hasOwnProperty(ae)&&f[ae]!=null)if(ae==="style"){var N=f[ae];for(E in N)N.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?d||(d=[]):(d=d||[]).push(ae,null));for(ae in l){var B=l[ae];if(N=f!=null?f[ae]:void 0,l.hasOwnProperty(ae)&&B!==N&&(B!=null||N!=null))if(ae==="style")if(N){for(E in N)!N.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&N[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(d||(d=[]),d.push(ae,a)),a=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,N=N?N.__html:void 0,B!=null&&N!==B&&(d=d||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(d=d||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&Vt("scroll",t),d||N===B||(d=[])):(d=d||[]).push(ae,B))}a&&(d=d||[]).push("style",a);var ae=d;(i.updateQueue=ae)&&(i.flags|=4)}},ip=function(t,i,a,l){a!==l&&(i.flags|=4)};function ba(t,i){if(!Wt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function xn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function L0(t,i,a){var l=i.pendingProps;switch(vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(i),null;case 1:return Nn(i.type)&&go(),xn(i),null;case 3:return l=i.stateNode,As(),Ht(Ln),Ht(_n),Lu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(yo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(oc(si),si=null))),Ku(t,i),xn(i),null;case 5:bu(i);var f=zr(Ta.current);if(a=i.type,t!==null&&i.stateNode!=null)np(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return xn(i),null}if(t=zr(Si.current),yo(i)){l=i.stateNode,a=i.type;var d=i.memoizedProps;switch(l[xi]=i,l[xa]=d,t=(i.mode&1)!==0,a){case"dialog":Vt("cancel",l),Vt("close",l);break;case"iframe":case"object":case"embed":Vt("load",l);break;case"video":case"audio":for(f=0;f<ga.length;f++)Vt(ga[f],l);break;case"source":Vt("error",l);break;case"img":case"image":case"link":Vt("error",l),Vt("load",l);break;case"details":Vt("toggle",l);break;case"input":Nt(l,d),Vt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!d.multiple},Vt("invalid",l);break;case"textarea":Ct(l,d),Vt("invalid",l)}Be(a,d),f=null;for(var E in d)if(d.hasOwnProperty(E)){var N=d[E];E==="children"?typeof N=="string"?l.textContent!==N&&(d.suppressHydrationWarning!==!0&&ho(l.textContent,N,t),f=["children",N]):typeof N=="number"&&l.textContent!==""+N&&(d.suppressHydrationWarning!==!0&&ho(l.textContent,N,t),f=["children",""+N]):o.hasOwnProperty(E)&&N!=null&&E==="onScroll"&&Vt("scroll",l)}switch(a){case"input":Qe(l),Ut(l,d,!0);break;case"textarea":Qe(l),kt(l);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(l.onclick=po)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[xi]=i,t[xa]=l,tp(t,i,!1,!1),i.stateNode=t;e:{switch(E=we(a,l),a){case"dialog":Vt("cancel",t),Vt("close",t),f=l;break;case"iframe":case"object":case"embed":Vt("load",t),f=l;break;case"video":case"audio":for(f=0;f<ga.length;f++)Vt(ga[f],t);f=l;break;case"source":Vt("error",t),f=l;break;case"img":case"image":case"link":Vt("error",t),Vt("load",t),f=l;break;case"details":Vt("toggle",t),f=l;break;case"input":Nt(t,l),f=Mt(t,l),Vt("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=ue({},l,{value:void 0}),Vt("invalid",t);break;case"textarea":Ct(t,l),f=ft(t,l),Vt("invalid",t);break;default:f=l}Be(a,f),N=f;for(d in N)if(N.hasOwnProperty(d)){var B=N[d];d==="style"?me(t,B):d==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&pe(t,B)):d==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&_e(t,B):typeof B=="number"&&_e(t,""+B):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(o.hasOwnProperty(d)?B!=null&&d==="onScroll"&&Vt("scroll",t):B!=null&&D(t,d,B,E))}switch(a){case"input":Qe(t),Ut(t,l,!1);break;case"textarea":Qe(t),kt(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ce(l.value));break;case"select":t.multiple=!!l.multiple,d=l.value,d!=null?Ft(t,!!l.multiple,d,!1):l.defaultValue!=null&&Ft(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=po)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xn(i),null;case 6:if(t&&i.stateNode!=null)ip(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=zr(Ta.current),zr(Si.current),yo(i)){if(l=i.stateNode,a=i.memoizedProps,l[xi]=i,(d=l.nodeValue!==a)&&(t=zn,t!==null))switch(t.tag){case 3:ho(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ho(l.nodeValue,a,(t.mode&1)!==0)}d&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[xi]=i,i.stateNode=l}return xn(i),null;case 13:if(Ht(qt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ah(),ys(),i.flags|=98560,d=!1;else if(d=yo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!d)throw Error(n(318));if(d=i.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(n(317));d[xi]=i}else ys(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xn(i),d=!1}else si!==null&&(oc(si),si=null),d=!0;if(!d)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(qt.current&1)!==0?rn===0&&(rn=3):cc())),i.updateQueue!==null&&(i.flags|=4),xn(i),null);case 4:return As(),Ku(t,i),t===null&&_a(i.stateNode.containerInfo),xn(i),null;case 10:return Tu(i.type._context),xn(i),null;case 17:return Nn(i.type)&&go(),xn(i),null;case 19:if(Ht(qt),d=i.memoizedState,d===null)return xn(i),null;if(l=(i.flags&128)!==0,E=d.rendering,E===null)if(l)ba(d,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Ro(t),E!==null){for(i.flags|=128,ba(d,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)d=a,t=l,d.flags&=14680066,E=d.alternate,E===null?(d.childLanes=0,d.lanes=t,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=E.childLanes,d.lanes=E.lanes,d.child=E.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=E.memoizedProps,d.memoizedState=E.memoizedState,d.updateQueue=E.updateQueue,d.type=E.type,t=E.dependencies,d.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Bt(qt,qt.current&1|2),i.child}t=t.sibling}d.tail!==null&&Yt()>bs&&(i.flags|=128,l=!0,ba(d,!1),i.lanes=4194304)}else{if(!l)if(t=Ro(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ba(d,!0),d.tail===null&&d.tailMode==="hidden"&&!E.alternate&&!Wt)return xn(i),null}else 2*Yt()-d.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,l=!0,ba(d,!1),i.lanes=4194304);d.isBackwards?(E.sibling=i.child,i.child=E):(a=d.last,a!==null?a.sibling=E:i.child=E,d.last=E)}return d.tail!==null?(i=d.tail,d.rendering=i,d.tail=i.sibling,d.renderingStartTime=Yt(),i.sibling=null,a=qt.current,Bt(qt,l?a&1|2:a&1),i):(xn(i),null);case 22:case 23:return uc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(xn(i),i.subtreeFlags&6&&(i.flags|=8192)):xn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function N0(t,i){switch(vu(i),i.tag){case 1:return Nn(i.type)&&go(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return As(),Ht(Ln),Ht(_n),Lu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return bu(i),null;case 13:if(Ht(qt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ys()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht(qt),null;case 4:return As(),null;case 10:return Tu(i.type._context),null;case 22:case 23:return uc(),null;case 24:return null;default:return null}}var Fo=!1,Sn=!1,D0=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function Rs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Kt(t,i,l)}else a.current=null}function Zu(t,i,a){try{a()}catch(l){Kt(t,i,l)}}var rp=!1;function I0(t,i){if(uu=to,t=Fd(),tu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var E=0,N=-1,B=-1,ae=0,Se=0,ye=t,xe=null;t:for(;;){for(var ze;ye!==a||f!==0&&ye.nodeType!==3||(N=E+f),ye!==d||l!==0&&ye.nodeType!==3||(B=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(ze=ye.firstChild)!==null;)xe=ye,ye=ze;for(;;){if(ye===t)break t;if(xe===a&&++ae===f&&(N=E),xe===d&&++Se===l&&(B=E),(ze=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=ze}a=N===-1||B===-1?null:{start:N,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(cu={focusedElem:t,selectionRange:a},to=!1,Ge=i;Ge!==null;)if(i=Ge,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ge=t;else for(;Ge!==null;){i=Ge;try{var We=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ye=We.memoizedProps,Zt=We.memoizedState,Q=i.stateNode,G=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ai(i.type,Ye),Zt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Kt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ge=t;break}Ge=i.return}return We=rp,rp=!1,We}function Pa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var d=f.destroy;f.destroy=void 0,d!==void 0&&Zu(i,a,d)}f=f.next}while(f!==l)}}function Oo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Qu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[xi],delete i[xa],delete i[pu],delete i[g0],delete i[_0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ap(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=po));else if(l!==4&&(t=t.child,t!==null))for(Ju(t,i,a),t=t.sibling;t!==null;)Ju(t,i,a),t=t.sibling}function ec(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(ec(t,i,a),t=t.sibling;t!==null;)ec(t,i,a),t=t.sibling}var pn=null,oi=!1;function gr(t,i,a){for(a=a.child;a!==null;)lp(t,i,a),a=a.sibling}function lp(t,i,a){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(ee,a)}catch{}switch(a.tag){case 5:Sn||Rs(a,i);case 6:var l=pn,f=oi;pn=null,gr(t,i,a),pn=l,oi=f,pn!==null&&(oi?(t=pn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(oi?(t=pn,a=a.stateNode,t.nodeType===8?hu(t.parentNode,a):t.nodeType===1&&hu(t,a),la(t)):hu(pn,a.stateNode));break;case 4:l=pn,f=oi,pn=a.stateNode.containerInfo,oi=!0,gr(t,i,a),pn=l,oi=f;break;case 0:case 11:case 14:case 15:if(!Sn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var d=f,E=d.destroy;d=d.tag,E!==void 0&&((d&2)!==0||(d&4)!==0)&&Zu(a,i,E),f=f.next}while(f!==l)}gr(t,i,a);break;case 1:if(!Sn&&(Rs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(N){Kt(a,i,N)}gr(t,i,a);break;case 21:gr(t,i,a);break;case 22:a.mode&1?(Sn=(l=Sn)||a.memoizedState!==null,gr(t,i,a),Sn=l):gr(t,i,a);break;default:gr(t,i,a)}}function up(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new D0),i.forEach(function(l){var f=G0.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function li(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var d=t,E=i,N=E;e:for(;N!==null;){switch(N.tag){case 5:pn=N.stateNode,oi=!1;break e;case 3:pn=N.stateNode.containerInfo,oi=!0;break e;case 4:pn=N.stateNode.containerInfo,oi=!0;break e}N=N.return}if(pn===null)throw Error(n(160));lp(d,E,f),pn=null,oi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ae){Kt(f,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,t),i=i.sibling}function cp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(li(i,t),Mi(t),l&4){try{Pa(3,t,t.return),Oo(3,t)}catch(Ye){Kt(t,t.return,Ye)}try{Pa(5,t,t.return)}catch(Ye){Kt(t,t.return,Ye)}}break;case 1:li(i,t),Mi(t),l&512&&a!==null&&Rs(a,a.return);break;case 5:if(li(i,t),Mi(t),l&512&&a!==null&&Rs(a,a.return),t.flags&32){var f=t.stateNode;try{_e(f,"")}catch(Ye){Kt(t,t.return,Ye)}}if(l&4&&(f=t.stateNode,f!=null)){var d=t.memoizedProps,E=a!==null?a.memoizedProps:d,N=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{N==="input"&&d.type==="radio"&&d.name!=null&&ct(f,d),we(N,E);var ae=we(N,d);for(E=0;E<B.length;E+=2){var Se=B[E],ye=B[E+1];Se==="style"?me(f,ye):Se==="dangerouslySetInnerHTML"?pe(f,ye):Se==="children"?_e(f,ye):D(f,Se,ye,ae)}switch(N){case"input":jt(f,d);break;case"textarea":De(f,d);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!d.multiple;var ze=d.value;ze!=null?Ft(f,!!d.multiple,ze,!1):xe!==!!d.multiple&&(d.defaultValue!=null?Ft(f,!!d.multiple,d.defaultValue,!0):Ft(f,!!d.multiple,d.multiple?[]:"",!1))}f[xa]=d}catch(Ye){Kt(t,t.return,Ye)}}break;case 6:if(li(i,t),Mi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,d=t.memoizedProps;try{f.nodeValue=d}catch(Ye){Kt(t,t.return,Ye)}}break;case 3:if(li(i,t),Mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(Ye){Kt(t,t.return,Ye)}break;case 4:li(i,t),Mi(t);break;case 13:li(i,t),Mi(t),f=t.child,f.flags&8192&&(d=f.memoizedState!==null,f.stateNode.isHidden=d,!d||f.alternate!==null&&f.alternate.memoizedState!==null||(ic=Yt())),l&4&&up(t);break;case 22:if(Se=a!==null&&a.memoizedState!==null,t.mode&1?(Sn=(ae=Sn)||Se,li(i,t),Sn=ae):li(i,t),Mi(t),l&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!Se&&(t.mode&1)!==0)for(Ge=t,Se=t.child;Se!==null;){for(ye=Ge=Se;Ge!==null;){switch(xe=Ge,ze=xe.child,xe.tag){case 0:case 11:case 14:case 15:Pa(4,xe,xe.return);break;case 1:Rs(xe,xe.return);var We=xe.stateNode;if(typeof We.componentWillUnmount=="function"){l=xe,a=xe.return;try{i=l,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(Ye){Kt(l,a,Ye)}}break;case 5:Rs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){hp(ye);continue}}ze!==null?(ze.return=xe,Ge=ze):hp(ye)}Se=Se.sibling}e:for(Se=null,ye=t;;){if(ye.tag===5){if(Se===null){Se=ye;try{f=ye.stateNode,ae?(d=f.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(N=ye.stateNode,B=ye.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,N.style.display=fe("display",E))}catch(Ye){Kt(t,t.return,Ye)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=ae?"":ye.memoizedProps}catch(Ye){Kt(t,t.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:li(i,t),Mi(t),l&4&&up(t);break;case 21:break;default:li(i,t),Mi(t)}}function Mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(ap(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(_e(f,""),l.flags&=-33);var d=op(t);ec(t,d,f);break;case 3:case 4:var E=l.stateNode.containerInfo,N=op(t);Ju(t,N,E);break;default:throw Error(n(161))}}catch(B){Kt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function U0(t,i,a){Ge=t,fp(t)}function fp(t,i,a){for(var l=(t.mode&1)!==0;Ge!==null;){var f=Ge,d=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Fo;if(!E){var N=f.alternate,B=N!==null&&N.memoizedState!==null||Sn;N=Fo;var ae=Sn;if(Fo=E,(Sn=B)&&!ae)for(Ge=f;Ge!==null;)E=Ge,B=E.child,E.tag===22&&E.memoizedState!==null?pp(f):B!==null?(B.return=E,Ge=B):pp(f);for(;d!==null;)Ge=d,fp(d),d=d.sibling;Ge=f,Fo=N,Sn=ae}dp(t)}else(f.subtreeFlags&8772)!==0&&d!==null?(d.return=f,Ge=d):dp(t)}}function dp(t){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Sn||Oo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!Sn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ai(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var d=i.updateQueue;d!==null&&hh(i,d,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}hh(i,E,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&la(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Sn||i.flags&512&&Qu(i)}catch(xe){Kt(i,i.return,xe)}}if(i===t){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function hp(t){for(;Ge!==null;){var i=Ge;if(i===t){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function pp(t){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Oo(4,i)}catch(B){Kt(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){Kt(i,f,B)}}var d=i.return;try{Qu(i)}catch(B){Kt(i,d,B)}break;case 5:var E=i.return;try{Qu(i)}catch(B){Kt(i,E,B)}}}catch(B){Kt(i,i.return,B)}if(i===t){Ge=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Ge=N;break}Ge=i.return}}var F0=Math.ceil,Bo=P.ReactCurrentDispatcher,tc=P.ReactCurrentOwner,Zn=P.ReactCurrentBatchConfig,St=0,un=null,en=null,mn=0,Hn=0,Cs=fr(0),rn=0,La=null,Hr=0,ko=0,nc=0,Na=null,In=null,ic=0,bs=1/0,Wi=null,zo=!1,rc=null,_r=null,Vo=!1,vr=null,Ho=0,Da=0,sc=null,Go=-1,Wo=0;function wn(){return(St&6)!==0?Yt():Go!==-1?Go:Go=Yt()}function xr(t){return(t.mode&1)===0?1:(St&2)!==0&&mn!==0?mn&-mn:x0.transition!==null?(Wo===0&&(Wo=ke()),Wo):(t=mt,t!==0||(t=window.event,t=t===void 0?16:gd(t.type)),t)}function ui(t,i,a,l){if(50<Da)throw Da=0,sc=null,Error(n(185));pt(t,a,l),((St&2)===0||t!==un)&&(t===un&&((St&2)===0&&(ko|=a),rn===4&&Sr(t,mn)),Un(t,l),a===1&&St===0&&(i.mode&1)===0&&(bs=Yt()+500,vo&&hr()))}function Un(t,i){var a=t.callbackNode;bt(t,i);var l=Ot(t,t===un?mn:0);if(l===0)a!==null&&Ja(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&Ja(a),i===1)t.tag===0?v0(gp.bind(null,t)):th(gp.bind(null,t)),p0(function(){(St&6)===0&&hr()}),a=null;else{switch(Fi(l)){case 1:a=ia;break;case 4:a=w;break;case 16:a=X;break;case 536870912:a=te;break;default:a=X}a=Tp(a,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function mp(t,i){if(Go=-1,Wo=0,(St&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ps()&&t.callbackNode!==a)return null;var l=Ot(t,t===un?mn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Xo(t,l);else{i=l;var f=St;St|=2;var d=vp();(un!==t||mn!==i)&&(Wi=null,bs=Yt()+500,Wr(t,i));do try{k0();break}catch(N){_p(t,N)}while(!0);Eu(),Bo.current=d,St=f,en!==null?i=0:(un=null,mn=0,i=rn)}if(i!==0){if(i===2&&(f=Jt(t),f!==0&&(l=f,i=ac(t,f))),i===1)throw a=La,Wr(t,0),Sr(t,l),Un(t,Yt()),a;if(i===6)Sr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!O0(f)&&(i=Xo(t,l),i===2&&(d=Jt(t),d!==0&&(l=d,i=ac(t,d))),i===1))throw a=La,Wr(t,0),Sr(t,l),Un(t,Yt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Xr(t,In,Wi);break;case 3:if(Sr(t,l),(l&130023424)===l&&(i=ic+500-Yt(),10<i)){if(Ot(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=du(Xr.bind(null,t,In,Wi),i);break}Xr(t,In,Wi);break;case 4:if(Sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-Re(l);d=1<<E,E=i[E],E>f&&(f=E),l&=~d}if(l=f,l=Yt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*F0(l/1960))-l,10<l){t.timeoutHandle=du(Xr.bind(null,t,In,Wi),l);break}Xr(t,In,Wi);break;case 5:Xr(t,In,Wi);break;default:throw Error(n(329))}}}return Un(t,Yt()),t.callbackNode===a?mp.bind(null,t):null}function ac(t,i){var a=Na;return t.current.memoizedState.isDehydrated&&(Wr(t,i).flags|=256),t=Xo(t,i),t!==2&&(i=In,In=a,i!==null&&oc(i)),t}function oc(t){In===null?In=t:In.push.apply(In,t)}function O0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],d=f.getSnapshot;f=f.value;try{if(!ri(d(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Sr(t,i){for(i&=~nc,i&=~ko,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Re(i),l=1<<a;t[a]=-1,i&=~l}}function gp(t){if((St&6)!==0)throw Error(n(327));Ps();var i=Ot(t,0);if((i&1)===0)return Un(t,Yt()),null;var a=Xo(t,i);if(t.tag!==0&&a===2){var l=Jt(t);l!==0&&(i=l,a=ac(t,l))}if(a===1)throw a=La,Wr(t,0),Sr(t,i),Un(t,Yt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Xr(t,In,Wi),Un(t,Yt()),null}function lc(t,i){var a=St;St|=1;try{return t(i)}finally{St=a,St===0&&(bs=Yt()+500,vo&&hr())}}function Gr(t){vr!==null&&vr.tag===0&&(St&6)===0&&Ps();var i=St;St|=1;var a=Zn.transition,l=mt;try{if(Zn.transition=null,mt=1,t)return t()}finally{mt=l,Zn.transition=a,St=i,(St&6)===0&&hr()}}function uc(){Hn=Cs.current,Ht(Cs)}function Wr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,h0(a)),en!==null)for(a=en.return;a!==null;){var l=a;switch(vu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&go();break;case 3:As(),Ht(Ln),Ht(_n),Lu();break;case 5:bu(l);break;case 4:As();break;case 13:Ht(qt);break;case 19:Ht(qt);break;case 10:Tu(l.type._context);break;case 22:case 23:uc()}a=a.return}if(un=t,en=t=yr(t.current,null),mn=Hn=i,rn=0,La=null,nc=ko=Hr=0,In=Na=null,kr!==null){for(i=0;i<kr.length;i++)if(a=kr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,d=a.pending;if(d!==null){var E=d.next;d.next=f,l.next=E}a.pending=l}kr=null}return t}function _p(t,i){do{var a=en;try{if(Eu(),Co.current=No,bo){for(var l=$t.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}bo=!1}if(Vr=0,ln=nn=$t=null,Aa=!1,wa=0,tc.current=null,a===null||a.return===null){rn=1,La=i,en=null;break}e:{var d=t,E=a.return,N=a,B=i;if(i=mn,N.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,Se=N,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var ze=Hh(E);if(ze!==null){ze.flags&=-257,Gh(ze,E,N,d,i),ze.mode&1&&Vh(d,ae,i),i=ze,B=ae;var We=i.updateQueue;if(We===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else We.add(B);break e}else{if((i&1)===0){Vh(d,ae,i),cc();break e}B=Error(n(426))}}else if(Wt&&N.mode&1){var Zt=Hh(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),Gh(Zt,E,N,d,i),yu(ws(B,N));break e}}d=B=ws(B,N),rn!==4&&(rn=2),Na===null?Na=[d]:Na.push(d),d=E;do{switch(d.tag){case 3:d.flags|=65536,i&=-i,d.lanes|=i;var Q=kh(d,B,i);dh(d,Q);break e;case 1:N=B;var G=d.type,ne=d.stateNode;if((d.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(_r===null||!_r.has(ne)))){d.flags|=65536,i&=-i,d.lanes|=i;var Te=zh(d,N,i);dh(d,Te);break e}}d=d.return}while(d!==null)}Sp(a)}catch($e){i=$e,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function vp(){var t=Bo.current;return Bo.current=No,t===null?No:t}function cc(){(rn===0||rn===3||rn===2)&&(rn=4),un===null||(Hr&268435455)===0&&(ko&268435455)===0||Sr(un,mn)}function Xo(t,i){var a=St;St|=2;var l=vp();(un!==t||mn!==i)&&(Wi=null,Wr(t,i));do try{B0();break}catch(f){_p(t,f)}while(!0);if(Eu(),St=a,Bo.current=l,en!==null)throw Error(n(261));return un=null,mn=0,rn}function B0(){for(;en!==null;)xp(en)}function k0(){for(;en!==null&&!Vl();)xp(en)}function xp(t){var i=Ep(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?Sp(t):en=i,tc.current=null}function Sp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=L0(a,i,Hn),a!==null){en=a;return}}else{if(a=N0(a,i),a!==null){a.flags&=32767,en=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rn=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=t}while(i!==null);rn===0&&(rn=5)}function Xr(t,i,a){var l=mt,f=Zn.transition;try{Zn.transition=null,mt=1,z0(t,i,a,l)}finally{Zn.transition=f,mt=l}return null}function z0(t,i,a,l){do Ps();while(vr!==null);if((St&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var d=a.lanes|a.childLanes;if(bn(t,d),t===un&&(en=un=null,mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Vo||(Vo=!0,Tp(X,function(){return Ps(),null})),d=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||d){d=Zn.transition,Zn.transition=null;var E=mt;mt=1;var N=St;St|=4,tc.current=null,I0(t,a),cp(a,t),a0(cu),to=!!uu,cu=uu=null,t.current=a,U0(a),Hl(),St=N,mt=E,Zn.transition=d}else t.current=a;if(Vo&&(Vo=!1,vr=t,Ho=f),d=t.pendingLanes,d===0&&(_r=null),He(a.stateNode),Un(t,Yt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(zo)throw zo=!1,t=rc,rc=null,t;return(Ho&1)!==0&&t.tag!==0&&Ps(),d=t.pendingLanes,(d&1)!==0?t===sc?Da++:(Da=0,sc=t):Da=0,hr(),null}function Ps(){if(vr!==null){var t=Fi(Ho),i=Zn.transition,a=mt;try{if(Zn.transition=null,mt=16>t?16:t,vr===null)var l=!1;else{if(t=vr,vr=null,Ho=0,(St&6)!==0)throw Error(n(331));var f=St;for(St|=4,Ge=t.current;Ge!==null;){var d=Ge,E=d.child;if((Ge.flags&16)!==0){var N=d.deletions;if(N!==null){for(var B=0;B<N.length;B++){var ae=N[B];for(Ge=ae;Ge!==null;){var Se=Ge;switch(Se.tag){case 0:case 11:case 15:Pa(8,Se,d)}var ye=Se.child;if(ye!==null)ye.return=Se,Ge=ye;else for(;Ge!==null;){Se=Ge;var xe=Se.sibling,ze=Se.return;if(sp(Se),Se===ae){Ge=null;break}if(xe!==null){xe.return=ze,Ge=xe;break}Ge=ze}}}var We=d.alternate;if(We!==null){var Ye=We.child;if(Ye!==null){We.child=null;do{var Zt=Ye.sibling;Ye.sibling=null,Ye=Zt}while(Ye!==null)}}Ge=d}}if((d.subtreeFlags&2064)!==0&&E!==null)E.return=d,Ge=E;else e:for(;Ge!==null;){if(d=Ge,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Pa(9,d,d.return)}var Q=d.sibling;if(Q!==null){Q.return=d.return,Ge=Q;break e}Ge=d.return}}var G=t.current;for(Ge=G;Ge!==null;){E=Ge;var ne=E.child;if((E.subtreeFlags&2064)!==0&&ne!==null)ne.return=E,Ge=ne;else e:for(E=G;Ge!==null;){if(N=Ge,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:Oo(9,N)}}catch($e){Kt(N,N.return,$e)}if(N===E){Ge=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Ge=Te;break e}Ge=N.return}}if(St=f,hr(),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(ee,t)}catch{}l=!0}return l}finally{mt=a,Zn.transition=i}}return!1}function yp(t,i,a){i=ws(a,i),i=kh(t,i,1),t=mr(t,i,1),i=wn(),t!==null&&(pt(t,1,i),Un(t,i))}function Kt(t,i,a){if(t.tag===3)yp(t,t,a);else for(;i!==null;){if(i.tag===3){yp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(_r===null||!_r.has(l))){t=ws(a,t),t=zh(i,t,1),i=mr(i,t,1),t=wn(),i!==null&&(pt(i,1,t),Un(i,t));break}}i=i.return}}function V0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&a,un===t&&(mn&a)===a&&(rn===4||rn===3&&(mn&130023424)===mn&&500>Yt()-ic?Wr(t,0):nc|=a),Un(t,i)}function Mp(t,i){i===0&&((t.mode&1)===0?i=1:(i=qe,qe<<=1,(qe&130023424)===0&&(qe=4194304)));var a=wn();t=Vi(t,i),t!==null&&(pt(t,i,a),Un(t,a))}function H0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Mp(t,a)}function G0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Mp(t,a)}var Ep;Ep=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Ln.current)Dn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Dn=!1,P0(t,i,a);Dn=(t.flags&131072)!==0}else Dn=!1,Wt&&(i.flags&1048576)!==0&&nh(i,So,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Uo(t,i),t=i.pendingProps;var f=vs(i,_n.current);Ts(i,a),f=Iu(null,i,l,t,f,a);var d=Uu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(l)?(d=!0,_o(i)):d=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ru(i),f.updater=Do,i.stateNode=f,f._reactInternals=i,Vu(i,l,t,a),i=Xu(null,i,l,!0,d,a)):(i.tag=0,Wt&&d&&_u(i),An(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Uo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=X0(l),t=ai(l,t),f){case 0:i=Wu(null,i,l,t,a);break e;case 1:i=$h(null,i,l,t,a);break e;case 11:i=Wh(null,i,l,t,a);break e;case 14:i=Xh(null,i,l,ai(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),Wu(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),$h(t,i,l,f,a);case 3:e:{if(Kh(i),t===null)throw Error(n(387));l=i.pendingProps,d=i.memoizedState,f=d.element,fh(t,i),wo(i,l,null,a);var E=i.memoizedState;if(l=E.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){f=ws(Error(n(423)),i),i=Zh(t,i,l,a,f);break e}else if(l!==f){f=ws(Error(n(424)),i),i=Zh(t,i,l,a,f);break e}else for(Vn=cr(i.stateNode.containerInfo.firstChild),zn=i,Wt=!0,si=null,a=uh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ys(),l===f){i=Gi(t,i,a);break e}An(t,i,l,a)}i=i.child}return i;case 5:return ph(i),t===null&&Su(i),l=i.type,f=i.pendingProps,d=t!==null?t.memoizedProps:null,E=f.children,fu(l,f)?E=null:d!==null&&fu(l,d)&&(i.flags|=32),qh(t,i),An(t,i,E,a),i.child;case 6:return t===null&&Su(i),null;case 13:return Qh(t,i,a);case 4:return Cu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ms(i,null,l,a):An(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),Wh(t,i,l,f,a);case 7:return An(t,i,i.pendingProps,a),i.child;case 8:return An(t,i,i.pendingProps.children,a),i.child;case 12:return An(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,d=i.memoizedProps,E=f.value,Bt(Eo,l._currentValue),l._currentValue=E,d!==null)if(ri(d.value,E)){if(d.children===f.children&&!Ln.current){i=Gi(t,i,a);break e}}else for(d=i.child,d!==null&&(d.return=i);d!==null;){var N=d.dependencies;if(N!==null){E=d.child;for(var B=N.firstContext;B!==null;){if(B.context===l){if(d.tag===1){B=Hi(-1,a&-a),B.tag=2;var ae=d.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),ae.pending=B}}d.lanes|=a,B=d.alternate,B!==null&&(B.lanes|=a),Au(d.return,a,i),N.lanes|=a;break}B=B.next}}else if(d.tag===10)E=d.type===i.type?null:d.child;else if(d.tag===18){if(E=d.return,E===null)throw Error(n(341));E.lanes|=a,N=E.alternate,N!==null&&(N.lanes|=a),Au(E,a,i),E=d.sibling}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===i){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}An(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Ts(i,a),f=$n(f),l=l(f),i.flags|=1,An(t,i,l,a),i.child;case 14:return l=i.type,f=ai(l,i.pendingProps),f=ai(l.type,f),Xh(t,i,l,f,a);case 15:return jh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ai(l,f),Uo(t,i),i.tag=1,Nn(l)?(t=!0,_o(i)):t=!1,Ts(i,a),Oh(i,l,f),Vu(i,l,f,a),Xu(null,i,l,!0,t,a);case 19:return ep(t,i,a);case 22:return Yh(t,i,a)}throw Error(n(156,i.tag))};function Tp(t,i){return Qa(t,i)}function W0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,a,l){return new W0(t,i,a,l)}function fc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X0(t){if(typeof t=="function")return fc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===W)return 14}return 2}function yr(t,i){var a=t.alternate;return a===null?(a=Qn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function jo(t,i,a,l,f,d){var E=2;if(l=t,typeof t=="function")fc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return jr(a.children,f,d,i);case T:E=8,f|=8;break;case I:return t=Qn(12,a,i,f|2),t.elementType=I,t.lanes=d,t;case oe:return t=Qn(13,a,i,f),t.elementType=oe,t.lanes=d,t;case de:return t=Qn(19,a,i,f),t.elementType=de,t.lanes=d,t;case j:return Yo(a,f,d,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $:E=10;break e;case F:E=9;break e;case Y:E=11;break e;case W:E=14;break e;case q:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Qn(E,a,i,f),i.elementType=t,i.type=l,i.lanes=d,i}function jr(t,i,a,l){return t=Qn(7,t,l,i),t.lanes=a,t}function Yo(t,i,a,l){return t=Qn(22,t,l,i),t.elementType=j,t.lanes=a,t.stateNode={isHidden:!1},t}function dc(t,i,a){return t=Qn(6,t,null,i),t.lanes=a,t}function hc(t,i,a){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function j0(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function pc(t,i,a,l,f,d,E,N,B){return t=new j0(t,i,a,N,B),i===1?(i=1,d===!0&&(i|=8)):i=0,d=Qn(3,null,null,i),t.current=d,d.stateNode=t,d.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ru(d),t}function Y0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Ap(t){if(!t)return dr;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Nn(a))return Jd(t,a,i)}return i}function wp(t,i,a,l,f,d,E,N,B){return t=pc(a,l,!0,t,f,d,E,N,B),t.context=Ap(null),a=t.current,l=wn(),f=xr(a),d=Hi(l,f),d.callback=i??null,mr(a,d,f),t.current.lanes=f,pt(t,f,l),Un(t,l),t}function qo(t,i,a,l){var f=i.current,d=wn(),E=xr(f);return a=Ap(a),i.context===null?i.context=a:i.pendingContext=a,i=Hi(d,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=mr(f,i,E),t!==null&&(ui(t,f,E,d),Ao(t,f,E)),E}function $o(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function mc(t,i){Rp(t,i),(t=t.alternate)&&Rp(t,i)}function q0(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function gc(t){this._internalRoot=t}Ko.prototype.render=gc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));qo(t,i,null,null)},Ko.prototype.unmount=gc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Gr(function(){qo(null,t,null,null)}),i[Oi]=null}};function Ko(t){this._internalRoot=t}Ko.prototype.unstable_scheduleHydration=function(t){if(t){var i=Pt();t={blockedOn:null,target:t,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,t),a===0&&pd(t)}};function _c(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function $0(t,i,a,l,f){if(f){if(typeof l=="function"){var d=l;l=function(){var ae=$o(E);d.call(ae)}}var E=wp(i,l,t,0,null,!1,!1,"",bp);return t._reactRootContainer=E,t[Oi]=E.current,_a(t.nodeType===8?t.parentNode:t),Gr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var N=l;l=function(){var ae=$o(B);N.call(ae)}}var B=pc(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=B,t[Oi]=B.current,_a(t.nodeType===8?t.parentNode:t),Gr(function(){qo(i,B,a,l)}),B}function Qo(t,i,a,l,f){var d=a._reactRootContainer;if(d){var E=d;if(typeof f=="function"){var N=f;f=function(){var B=$o(E);N.call(B)}}qo(i,E,t,f)}else E=$0(a,i,t,f,l);return $o(E)}At=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=xt(i.pendingLanes);a!==0&&(Pn(i,a|1),Un(i,Yt()),(St&6)===0&&(bs=Yt()+500,hr()))}break;case 13:Gr(function(){var l=Vi(t,1);if(l!==null){var f=wn();ui(l,t,1,f)}}),mc(t,1)}},zt=function(t){if(t.tag===13){var i=Vi(t,134217728);if(i!==null){var a=wn();ui(i,t,134217728,a)}mc(t,134217728)}},ni=function(t){if(t.tag===13){var i=xr(t),a=Vi(t,i);if(a!==null){var l=wn();ui(a,t,i,l)}mc(t,i)}},Pt=function(){return mt},ii=function(t,i){var a=mt;try{return mt=t,i()}finally{mt=a}},rt=function(t,i,a){switch(i){case"input":if(jt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=mo(l);if(!f)throw Error(n(90));It(l),jt(l,f)}}}break;case"textarea":De(t,a);break;case"select":i=a.value,i!=null&&Ft(t,!!a.multiple,i,!1)}},Ce=lc,ve=Gr;var K0={usingClientEntryPoint:!1,Events:[Sa,gs,mo,he,Oe,lc]},Ia={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z0={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ta(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||q0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{ee=Jo.inject(Z0),be=Jo}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0,Fn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_c(i))throw Error(n(200));return Y0(t,i,null,a)},Fn.createRoot=function(t,i){if(!_c(t))throw Error(n(299));var a=!1,l="",f=Cp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=pc(t,1,!1,null,null,a,!1,l,f),t[Oi]=i.current,_a(t.nodeType===8?t.parentNode:t),new gc(i)},Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ta(i),t=t===null?null:t.stateNode,t},Fn.flushSync=function(t){return Gr(t)},Fn.hydrate=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!0,a)},Fn.hydrateRoot=function(t,i,a){if(!_c(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,d="",E=Cp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(d=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=wp(i,null,t,1,a??null,f,!1,d,E),t[Oi]=i.current,_a(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Ko(i)},Fn.render=function(t,i,a){if(!Zo(i))throw Error(n(200));return Qo(null,t,i,!1,a)},Fn.unmountComponentAtNode=function(t){if(!Zo(t))throw Error(n(40));return t._reactRootContainer?(Gr(function(){Qo(null,null,t,!1,function(){t._reactRootContainer=null,t[Oi]=null})}),!0):!1},Fn.unstable_batchedUpdates=lc,Fn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Zo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Qo(t,i,a,!1,l)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Op;function a_(){if(Op)return Sc.exports;Op=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Sc.exports=s_(),Sc.exports}var Bp;function o_(){if(Bp)return el;Bp=1;var s=a_();return el.createRoot=s.createRoot,el.hydrateRoot=s.hydrateRoot,el}var l_=o_();const u_=Bm(l_),kp=[{label:"首页",href:"#hero"},{label:"关于",href:"#about"},{label:"项目",href:"#projects"},{label:"优势",href:"#strengths"}];function c_(){const[s,e]=Xt.useState(!1),[n,r]=Xt.useState("#hero");return Xt.useEffect(()=>{const o=()=>{e(window.scrollY>60);const u=kp.map(c=>c.href.slice(1));for(let c=u.length-1;c>=0;c--){const h=document.getElementById(u[c]);if(h&&window.scrollY>=h.offsetTop-200){r("#"+u[c]);break}}};return window.addEventListener("scroll",o,{passive:!0}),()=>window.removeEventListener("scroll",o)},[]),k.jsx("nav",{className:`navbar ${s?"scrolled":""}`,children:k.jsxs("div",{className:"navbar-inner container",children:[k.jsxs("a",{href:"#hero",className:"navbar-logo",children:[k.jsx("span",{className:"logo-mark",children:"✦"}),k.jsx("span",{className:"logo-text",children:"Zeng Qinying"})]}),k.jsx("div",{className:"navbar-links",children:kp.map(o=>k.jsx("a",{href:o.href,className:`nav-link ${n===o.href?"active":""}`,children:o.label},o.href))}),k.jsx("a",{href:"#contact",className:"nav-cta",children:"联系我"})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kf="184",f_=0,zp=1,d_=2,Tl=1,h_=2,Ga=3,Lr=0,Bn=1,Ki=2,Qi=0,Xs=1,Vp=2,Hp=3,Gp=4,p_=5,Qr=100,m_=101,g_=102,__=103,v_=104,x_=200,S_=201,y_=202,M_=203,rf=204,sf=205,E_=206,T_=207,A_=208,w_=209,R_=210,C_=211,b_=212,P_=213,L_=214,af=0,of=1,lf=2,Ys=3,uf=4,cf=5,ff=6,df=7,km=0,N_=1,D_=2,bi=0,zm=1,Vm=2,Hm=3,Gm=4,Wm=5,Xm=6,jm=7,Ym=300,ns=301,qs=302,Ec=303,Tc=304,Ol=306,hf=1e3,Zi=1001,pf=1002,gn=1003,I_=1004,tl=1005,En=1006,Ac=1007,es=1008,ti=1009,qm=1010,$m=1011,Xa=1012,Zf=1013,Ni=1014,Ri=1015,tr=1016,Qf=1017,Jf=1018,ja=1020,Km=35902,Zm=35899,Qm=1021,Jm=1022,mi=1023,nr=1026,ts=1027,eg=1028,ed=1029,is=1030,td=1031,nd=1033,Al=33776,wl=33777,Rl=33778,Cl=33779,mf=35840,gf=35841,_f=35842,vf=35843,xf=36196,Sf=37492,yf=37496,Mf=37488,Ef=37489,Pl=37490,Tf=37491,Af=37808,wf=37809,Rf=37810,Cf=37811,bf=37812,Pf=37813,Lf=37814,Nf=37815,Df=37816,If=37817,Uf=37818,Ff=37819,Of=37820,Bf=37821,kf=36492,zf=36494,Vf=36495,Hf=36283,Gf=36284,Ll=36285,Wf=36286,U_=3200,Wp=0,F_=1,br="",ei="srgb",Nl="srgb-linear",Dl="linear",Lt="srgb",Ls=7680,Xp=519,O_=512,B_=513,k_=514,id=515,z_=516,V_=517,rd=518,H_=519,jp=35044,Yp="300 es",Ci=2e3,Il=2001;function G_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ul(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function W_(){const s=Ul("canvas");return s.style.display="block",s}const qp={};function $p(...s){const e="THREE."+s.shift();console.log(e,...s)}function tg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function it(...s){s=tg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function yt(...s){s=tg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Xf(...s){const e=s.join(" ");e in qp||(qp[e]=!0,it(...s))}function X_(s,e,n){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const j_={[af]:of,[lf]:ff,[uf]:df,[Ys]:cf,[of]:af,[ff]:lf,[df]:uf,[cf]:Ys};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=Math.PI/180,jf=180/Math.PI;function Ya(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function vt(s,e,n){return Math.max(e,Math.min(n,s))}function Y_(s,e){return(s%e+e)%e}function Rc(s,e,n){return(1-n)*s+n*e}function Fa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ld=class ld{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ld.prototype.isVector2=!0;let Rt=ld;class Zs{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,h){let p=r[o+0],m=r[o+1],x=r[o+2],S=r[o+3],g=u[c+0],M=u[c+1],A=u[c+2],C=u[c+3];if(S!==C||p!==g||m!==M||x!==A){let _=p*g+m*M+x*A+S*C;_<0&&(g=-g,M=-M,A=-A,C=-C,_=-_);let v=1-h;if(_<.9995){const b=Math.acos(_),D=Math.sin(b);v=Math.sin(v*b)/D,h=Math.sin(h*b)/D,p=p*v+g*h,m=m*v+M*h,x=x*v+A*h,S=S*v+C*h}else{p=p*v+g*h,m=m*v+M*h,x=x*v+A*h,S=S*v+C*h;const b=1/Math.sqrt(p*p+m*m+x*x+S*S);p*=b,m*=b,x*=b,S*=b}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,u,c){const h=r[o],p=r[o+1],m=r[o+2],x=r[o+3],S=u[c],g=u[c+1],M=u[c+2],A=u[c+3];return e[n]=h*A+x*S+p*M-m*g,e[n+1]=p*A+x*g+m*S-h*M,e[n+2]=m*A+x*M+h*g-p*S,e[n+3]=x*A-h*S-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,h=Math.cos,p=Math.sin,m=h(r/2),x=h(o/2),S=h(u/2),g=p(r/2),M=p(o/2),A=p(u/2);switch(c){case"XYZ":this._x=g*x*S+m*M*A,this._y=m*M*S-g*x*A,this._z=m*x*A+g*M*S,this._w=m*x*S-g*M*A;break;case"YXZ":this._x=g*x*S+m*M*A,this._y=m*M*S-g*x*A,this._z=m*x*A-g*M*S,this._w=m*x*S+g*M*A;break;case"ZXY":this._x=g*x*S-m*M*A,this._y=m*M*S+g*x*A,this._z=m*x*A+g*M*S,this._w=m*x*S-g*M*A;break;case"ZYX":this._x=g*x*S-m*M*A,this._y=m*M*S+g*x*A,this._z=m*x*A-g*M*S,this._w=m*x*S+g*M*A;break;case"YZX":this._x=g*x*S+m*M*A,this._y=m*M*S+g*x*A,this._z=m*x*A-g*M*S,this._w=m*x*S-g*M*A;break;case"XZY":this._x=g*x*S-m*M*A,this._y=m*M*S-g*x*A,this._z=m*x*A+g*M*S,this._w=m*x*S+g*M*A;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],h=n[5],p=n[9],m=n[2],x=n[6],S=n[10],g=r+h+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-p)*M,this._y=(u-m)*M,this._z=(c-o)*M}else if(r>h&&r>S){const M=2*Math.sqrt(1+r-h-S);this._w=(x-p)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+m)/M}else if(h>S){const M=2*Math.sqrt(1+h-r-S);this._w=(u-m)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+S-r-h);this._w=(c-o)/M,this._x=(u+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,h=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+c*h+o*m-u*p,this._y=o*x+c*p+u*h-r*m,this._z=u*x+c*m+r*p-o*h,this._w=c*x-r*h-o*p-u*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,h=this.dot(e);h<0&&(r=-r,o=-o,u=-u,c=-c,h=-h);let p=1-n;if(h<.9995){const m=Math.acos(h),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ud=class ud{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,h=e.z,p=e.w,m=2*(c*o-h*r),x=2*(h*n-u*o),S=2*(u*r-c*n);return this.x=n+p*m+c*S-h*x,this.y=r+p*x+h*m-u*S,this.z=o+p*S+u*x-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,h=n.y,p=n.z;return this.x=o*p-u*h,this.y=u*c-r*p,this.z=r*h-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ud.prototype.isVector3=!0;let ie=ud;const Cc=new ie,Kp=new Zs,cd=class cd{constructor(e,n,r,o,u,c,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,p,m)}set(e,n,r,o,u,c,h,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=h,x[3]=n,x[4]=u,x[5]=p,x[6]=r,x[7]=c,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[3],p=r[6],m=r[1],x=r[4],S=r[7],g=r[2],M=r[5],A=r[8],C=o[0],_=o[3],v=o[6],b=o[1],D=o[4],P=o[7],V=o[2],L=o[5],O=o[8];return u[0]=c*C+h*b+p*V,u[3]=c*_+h*D+p*L,u[6]=c*v+h*P+p*O,u[1]=m*C+x*b+S*V,u[4]=m*_+x*D+S*L,u[7]=m*v+x*P+S*O,u[2]=g*C+M*b+A*V,u[5]=g*_+M*D+A*L,u[8]=g*v+M*P+A*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],x=e[8];return n*c*x-n*h*m-r*u*x+r*h*p+o*u*m-o*c*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],x=e[8],S=x*c-h*m,g=h*p-x*u,M=m*u-c*p,A=n*S+r*g+o*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=S*C,e[1]=(o*m-x*r)*C,e[2]=(h*r-o*c)*C,e[3]=g*C,e[4]=(x*n-o*p)*C,e[5]=(o*u-h*n)*C,e[6]=M*C,e[7]=(r*p-m*n)*C,e[8]=(c*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,h){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*h)+c+e,-o*m,o*p,-o*(-m*c+p*h)+h+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cd.prototype.isMatrix3=!0;let lt=cd;const bc=new lt,Zp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q_(){const s={enabled:!0,workingColorSpace:Nl,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Lt&&(o.r=Ji(o.r),o.g=Ji(o.g),o.b=Ji(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(o.r=js(o.r),o.g=js(o.g),o.b=js(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?Dl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Xf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Xf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Nl]:{primaries:e,whitePoint:r,transfer:Dl,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Zp,fromXYZ:Qp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const _t=q_();function Ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class $_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ns===void 0&&(Ns=Ul("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ns}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ul("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Ji(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ji(n[r]/255)*255):n[r]=Ji(n[r]);return{data:n,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K_=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,h=o.length;c<h;c++)o[c].isDataTexture?u.push(Pc(o[c].image)):u.push(Pc(o[c]))}else u=Pc(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function Pc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let Z_=0;const Lc=new ie;class Cn extends ss{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=Zi,o=Zi,u=En,c=es,h=mi,p=ti,m=Cn.DEFAULT_ANISOTROPY,x=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=Ya(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){it(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){it(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=Ym;Cn.DEFAULT_ANISOTROPY=1;const fd=class fd{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const p=e.elements,m=p[0],x=p[4],S=p[8],g=p[1],M=p[5],A=p[9],C=p[2],_=p[6],v=p[10];if(Math.abs(x-g)<.01&&Math.abs(S-C)<.01&&Math.abs(A-_)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+C)<.1&&Math.abs(A+_)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,P=(M+1)/2,V=(v+1)/2,L=(x+g)/4,O=(S+C)/4,T=(A+_)/4;return D>P&&D>V?D<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(D),o=L/r,u=O/r):P>V?P<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(P),r=L/o,u=T/o):V<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(V),r=O/u,o=T/u),this.set(r,o,u,n),this}let b=Math.sqrt((_-A)*(_-A)+(S-C)*(S-C)+(g-x)*(g-x));return Math.abs(b)<.001&&(b=1),this.x=(_-A)/b,this.y=(S-C)/b,this.z=(g-x)/b,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=vt(this.x,e.x,n.x),this.y=vt(this.y,e.y,n.y),this.z=vt(this.z,e.z,n.z),this.w=vt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=vt(this.x,e,n),this.y=vt(this.y,e,n),this.z=vt(this.z,e,n),this.w=vt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(vt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fd.prototype.isVector4=!0;let Qt=fd;class Q_ extends ss{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},u=new Cn(o),c=r.count;for(let h=0;h<c;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new sd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Q_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class ng extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class J_ extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fl=class Fl{constructor(e,n,r,o,u,c,h,p,m,x,S,g,M,A,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,h,p,m,x,S,g,M,A,C,_)}set(e,n,r,o,u,c,h,p,m,x,S,g,M,A,C,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=u,v[5]=c,v[9]=h,v[13]=p,v[2]=m,v[6]=x,v[10]=S,v[14]=g,v[3]=M,v[7]=A,v[11]=C,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ds.setFromMatrixColumn(e,0).length(),u=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),h=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const g=c*x,M=c*S,A=h*x,C=h*S;n[0]=p*x,n[4]=-p*S,n[8]=m,n[1]=M+A*m,n[5]=g-C*m,n[9]=-h*p,n[2]=C-g*m,n[6]=A+M*m,n[10]=c*p}else if(e.order==="YXZ"){const g=p*x,M=p*S,A=m*x,C=m*S;n[0]=g+C*h,n[4]=A*h-M,n[8]=c*m,n[1]=c*S,n[5]=c*x,n[9]=-h,n[2]=M*h-A,n[6]=C+g*h,n[10]=c*p}else if(e.order==="ZXY"){const g=p*x,M=p*S,A=m*x,C=m*S;n[0]=g-C*h,n[4]=-c*S,n[8]=A+M*h,n[1]=M+A*h,n[5]=c*x,n[9]=C-g*h,n[2]=-c*m,n[6]=h,n[10]=c*p}else if(e.order==="ZYX"){const g=c*x,M=c*S,A=h*x,C=h*S;n[0]=p*x,n[4]=A*m-M,n[8]=g*m+C,n[1]=p*S,n[5]=C*m+g,n[9]=M*m-A,n[2]=-m,n[6]=h*p,n[10]=c*p}else if(e.order==="YZX"){const g=c*p,M=c*m,A=h*p,C=h*m;n[0]=p*x,n[4]=C-g*S,n[8]=A*S+M,n[1]=S,n[5]=c*x,n[9]=-h*x,n[2]=-m*x,n[6]=M*S+A,n[10]=g-C*S}else if(e.order==="XZY"){const g=c*p,M=c*m,A=h*p,C=h*m;n[0]=p*x,n[4]=-S,n[8]=m*x,n[1]=g*S+C,n[5]=c*x,n[9]=M*S-A,n[2]=A*S-M,n[6]=h*x,n[10]=C*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,n,r){const o=this.elements;return Gn.subVectors(e,n),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Er.crossVectors(r,Gn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Er.crossVectors(r,Gn)),Er.normalize(),nl.crossVectors(Gn,Er),o[0]=Er.x,o[4]=nl.x,o[8]=Gn.x,o[1]=Er.y,o[5]=nl.y,o[9]=Gn.y,o[2]=Er.z,o[6]=nl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],h=r[4],p=r[8],m=r[12],x=r[1],S=r[5],g=r[9],M=r[13],A=r[2],C=r[6],_=r[10],v=r[14],b=r[3],D=r[7],P=r[11],V=r[15],L=o[0],O=o[4],T=o[8],I=o[12],$=o[1],F=o[5],Y=o[9],oe=o[13],de=o[2],W=o[6],q=o[10],j=o[14],K=o[3],le=o[7],ue=o[11],U=o[15];return u[0]=c*L+h*$+p*de+m*K,u[4]=c*O+h*F+p*W+m*le,u[8]=c*T+h*Y+p*q+m*ue,u[12]=c*I+h*oe+p*j+m*U,u[1]=x*L+S*$+g*de+M*K,u[5]=x*O+S*F+g*W+M*le,u[9]=x*T+S*Y+g*q+M*ue,u[13]=x*I+S*oe+g*j+M*U,u[2]=A*L+C*$+_*de+v*K,u[6]=A*O+C*F+_*W+v*le,u[10]=A*T+C*Y+_*q+v*ue,u[14]=A*I+C*oe+_*j+v*U,u[3]=b*L+D*$+P*de+V*K,u[7]=b*O+D*F+P*W+V*le,u[11]=b*T+D*Y+P*q+V*ue,u[15]=b*I+D*oe+P*j+V*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],h=e[5],p=e[9],m=e[13],x=e[2],S=e[6],g=e[10],M=e[14],A=e[3],C=e[7],_=e[11],v=e[15],b=p*M-m*g,D=h*M-m*S,P=h*g-p*S,V=c*M-m*x,L=c*g-p*x,O=c*S-h*x;return n*(C*b-_*D+v*P)-r*(A*b-_*V+v*L)+o*(A*D-C*V+v*O)-u*(A*P-C*L+_*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],h=e[5],p=e[6],m=e[7],x=e[8],S=e[9],g=e[10],M=e[11],A=e[12],C=e[13],_=e[14],v=e[15],b=n*h-r*c,D=n*p-o*c,P=n*m-u*c,V=r*p-o*h,L=r*m-u*h,O=o*m-u*p,T=x*C-S*A,I=x*_-g*A,$=x*v-M*A,F=S*_-g*C,Y=S*v-M*C,oe=g*v-M*_,de=b*oe-D*Y+P*F+V*$-L*I+O*T;if(de===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/de;return e[0]=(h*oe-p*Y+m*F)*W,e[1]=(o*Y-r*oe-u*F)*W,e[2]=(C*O-_*L+v*V)*W,e[3]=(g*L-S*O-M*V)*W,e[4]=(p*$-c*oe-m*I)*W,e[5]=(n*oe-o*$+u*I)*W,e[6]=(_*P-A*O-v*D)*W,e[7]=(x*O-g*P+M*D)*W,e[8]=(c*Y-h*$+m*T)*W,e[9]=(r*$-n*Y-u*T)*W,e[10]=(A*L-C*P+v*b)*W,e[11]=(S*P-x*L-M*b)*W,e[12]=(h*I-c*F-p*T)*W,e[13]=(n*F-r*I+o*T)*W,e[14]=(C*D-A*V-_*b)*W,e[15]=(x*V-S*D+g*b)*W,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,h=e.y,p=e.z,m=u*c,x=u*h;return this.set(m*c+r,m*h-o*p,m*p+o*h,0,m*h+o*p,x*h+r,x*p-o*c,0,m*p-o*h,x*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,h=n._z,p=n._w,m=u+u,x=c+c,S=h+h,g=u*m,M=u*x,A=u*S,C=c*x,_=c*S,v=h*S,b=p*m,D=p*x,P=p*S,V=r.x,L=r.y,O=r.z;return o[0]=(1-(C+v))*V,o[1]=(M+P)*V,o[2]=(A-D)*V,o[3]=0,o[4]=(M-P)*L,o[5]=(1-(g+v))*L,o[6]=(_+b)*L,o[7]=0,o[8]=(A+D)*O,o[9]=(_-b)*O,o[10]=(1-(g+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinant();if(u===0)return r.set(1,1,1),n.identity(),this;let c=Ds.set(o[0],o[1],o[2]).length();const h=Ds.set(o[4],o[5],o[6]).length(),p=Ds.set(o[8],o[9],o[10]).length();u<0&&(c=-c),ci.copy(this);const m=1/c,x=1/h,S=1/p;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=x,ci.elements[5]*=x,ci.elements[6]*=x,ci.elements[8]*=S,ci.elements[9]*=S,ci.elements[10]*=S,n.setFromRotationMatrix(ci),r.x=c,r.y=h,r.z=p,this}makePerspective(e,n,r,o,u,c,h=Ci,p=!1){const m=this.elements,x=2*u/(n-e),S=2*u/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let A,C;if(p)A=u/(c-u),C=c*u/(c-u);else if(h===Ci)A=-(c+u)/(c-u),C=-2*c*u/(c-u);else if(h===Il)A=-c/(c-u),C=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=S,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,u,c,h=Ci,p=!1){const m=this.elements,x=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let A,C;if(p)A=1/(c-u),C=c/(c-u);else if(h===Ci)A=-2/(c-u),C=-(c+u)/(c-u);else if(h===Il)A=-1/(c-u),C=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=x,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=S,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=A,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Fl.prototype.isMatrix4=!0;let sn=Fl;const Ds=new ie,ci=new sn,ev=new ie(0,0,0),tv=new ie(1,1,1),Er=new ie,nl=new ie,Gn=new ie,Jp=new sn,em=new Zs;class rs{constructor(e=0,n=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],h=o[8],p=o[1],m=o[5],x=o[9],S=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,M),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Jp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return em.setFromEuler(this),this.setFromQuaternion(em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class ig{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nv=0;const tm=new ie,Is=new Zs,Xi=new sn,il=new ie,Oa=new ie,iv=new ie,rv=new Zs,nm=new ie(1,0,0),im=new ie(0,1,0),rm=new ie(0,0,1),sm={type:"added"},sv={type:"removed"},Us={type:"childadded",child:null},Nc={type:"childremoved",child:null};class Xn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xn.DEFAULT_UP.clone();const e=new ie,n=new rs,r=new Zs,o=new ie(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new lt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ig,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(nm,e)}rotateY(e){return this.rotateOnAxis(im,e)}rotateZ(e){return this.rotateOnAxis(rm,e)}translateOnAxis(e,n){return tm.copy(e).applyQuaternion(this.quaternion),this.position.add(tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(nm,e)}translateY(e){return this.translateOnAxis(im,e)}translateZ(e){return this.translateOnAxis(rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?il.copy(e):il.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Oa,il,this.up):Xi.lookAt(il,Oa,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Is.setFromRotationMatrix(Xi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sm),Us.child=e,this.dispatchEvent(Us),Us.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sv),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sm),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,rv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(u(e.materials,this.material[p]));o.material=h}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];o.animations.push(u(e.animations,p))}}if(n){const h=c(e.geometries),p=c(e.materials),m=c(e.textures),x=c(e.images),S=c(e.shapes),g=c(e.skeletons),M=c(e.animations),A=c(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),A.length>0&&(r.nodes=A)}return r.object=o,r;function c(h){const p=[];for(const m in h){const x=h[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Xn.DEFAULT_UP=new ie(0,1,0);Xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class rl extends Xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const av={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const C of e.hand.values()){const _=n.getJointPose(C,r),v=this._getHandJoint(m,C);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const x=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],g=x.position.distanceTo(S.position),M=.02,A=.005;m.inputState.pinching&&g>M+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(av)))}return h!==null&&(h.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new rl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const rg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},sl={h:0,s:0,l:0};function Ic(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class wt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=_t.workingColorSpace){return this.r=e,this.g=n,this.b=r,_t.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=_t.workingColorSpace){if(e=Y_(e,1),n=vt(n,0,1),r=vt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Ic(c,u,e+1/3),this.g=Ic(c,u,e),this.b=Ic(c,u,e-1/3)}return _t.colorSpaceToWorking(this,o),this}setStyle(e,n=ei){function r(u){u!==void 0&&parseFloat(u)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],h=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:it("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ei){const r=rg[e.toLowerCase()];return r!==void 0?this.setHex(r,n):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return _t.workingToColorSpace(Mn.copy(this),e),Math.round(vt(Mn.r*255,0,255))*65536+Math.round(vt(Mn.g*255,0,255))*256+Math.round(vt(Mn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,o=Mn.g,u=Mn.b,c=Math.max(r,o,u),h=Math.min(r,o,u);let p,m;const x=(h+c)/2;if(h===c)p=0,m=0;else{const S=c-h;switch(m=x<=.5?S/(c+h):S/(2-c-h),c){case r:p=(o-u)/S+(o<u?6:0);break;case o:p=(u-r)/S+2;break;case u:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=_t.workingColorSpace){return _t.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ei){_t.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,o=Mn.b;return e!==ei?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+n,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Tr),e.getHSL(sl);const r=Rc(Tr.h,sl.h,n),o=Rc(Tr.s,sl.s,n),u=Rc(Tr.l,sl.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new wt;wt.NAMES=rg;class ov extends Xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const fi=new ie,ji=new ie,Uc=new ie,Yi=new ie,Fs=new ie,Os=new ie,am=new ie,Fc=new ie,Oc=new ie,Bc=new ie,kc=new Qt,zc=new Qt,Vc=new Qt;class pi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),fi.subVectors(e,n),o.cross(fi);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){fi.subVectors(o,n),ji.subVectors(r,n),Uc.subVectors(e,n);const c=fi.dot(fi),h=fi.dot(ji),p=fi.dot(Uc),m=ji.dot(ji),x=ji.dot(Uc),S=c*m-h*h;if(S===0)return u.set(0,0,0),null;const g=1/S,M=(m*p-h*x)*g,A=(c*x-h*p)*g;return u.set(1-M-A,A,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,n,r,o,u,c,h,p){return this.getBarycoord(e,n,r,o,Yi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Yi.x),p.addScaledVector(c,Yi.y),p.addScaledVector(h,Yi.z),p)}static getInterpolatedAttribute(e,n,r,o,u,c){return kc.setScalar(0),zc.setScalar(0),Vc.setScalar(0),kc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,r),Vc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(kc,u.x),c.addScaledVector(zc,u.y),c.addScaledVector(Vc,u.z),c}static isFrontFacing(e,n,r,o){return fi.subVectors(r,n),ji.subVectors(e,n),fi.cross(ji).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),fi.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,h;Fs.subVectors(o,r),Os.subVectors(u,r),Fc.subVectors(e,r);const p=Fs.dot(Fc),m=Os.dot(Fc);if(p<=0&&m<=0)return n.copy(r);Oc.subVectors(e,o);const x=Fs.dot(Oc),S=Os.dot(Oc);if(x>=0&&S<=x)return n.copy(o);const g=p*S-x*m;if(g<=0&&p>=0&&x<=0)return c=p/(p-x),n.copy(r).addScaledVector(Fs,c);Bc.subVectors(e,u);const M=Fs.dot(Bc),A=Os.dot(Bc);if(A>=0&&M<=A)return n.copy(u);const C=M*m-p*A;if(C<=0&&m>=0&&A<=0)return h=m/(m-A),n.copy(r).addScaledVector(Os,h);const _=x*A-M*S;if(_<=0&&S-x>=0&&M-A>=0)return am.subVectors(u,o),h=(S-x)/(S-x+(M-A)),n.copy(o).addScaledVector(am,h);const v=1/(_+C+g);return c=C*v,h=g*v,n.copy(r).addScaledVector(Fs,c).addScaledVector(Os,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qa{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,h=u.count;c<h;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(u,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),al.copy(r.boundingBox)),al.applyMatrix4(e.matrixWorld),this.union(al)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),ol.subVectors(this.max,Ba),Bs.subVectors(e.a,Ba),ks.subVectors(e.b,Ba),zs.subVectors(e.c,Ba),Ar.subVectors(ks,Bs),wr.subVectors(zs,ks),Yr.subVectors(Bs,zs);let n=[0,-Ar.z,Ar.y,0,-wr.z,wr.y,0,-Yr.z,Yr.y,Ar.z,0,-Ar.x,wr.z,0,-wr.x,Yr.z,0,-Yr.x,-Ar.y,Ar.x,0,-wr.y,wr.x,0,-Yr.y,Yr.x,0];return!Hc(n,Bs,ks,zs,ol)||(n=[1,0,0,0,1,0,0,0,1],!Hc(n,Bs,ks,zs,ol))?!1:(ll.crossVectors(Ar,wr),n=[ll.x,ll.y,ll.z],Hc(n,Bs,ks,zs,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const qi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],di=new ie,al=new qa,Bs=new ie,ks=new ie,zs=new ie,Ar=new ie,wr=new ie,Yr=new ie,Ba=new ie,ol=new ie,ll=new ie,qr=new ie;function Hc(s,e,n,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){qr.fromArray(s,u);const h=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),p=e.dot(qr),m=n.dot(qr),x=r.dot(qr);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>h)return!1}return!0}const tn=new ie,ul=new Rt;let lv=0;class Li extends ss{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=jp,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)ul.fromBufferAttribute(this,n),ul.applyMatrix3(e),this.setXY(n,ul.x,ul.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=On(n,this.array),r=On(r,this.array),o=On(o,this.array),u=On(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class sg extends Li{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class ag extends Li{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class er extends Li{constructor(e,n,r){super(new Float32Array(e),n,r)}}const uv=new qa,ka=new ie,Gc=new ie;class ad{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):uv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Gc)),this.expandByPoint(ka.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cv=0;const Jn=new sn,Wc=new Xn,Vs=new ie,Wn=new qa,za=new qa,fn=new ie;class ir extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G_(e)?ag:sg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,n,r){return Jn.makeTranslation(e,n,r),this.applyMatrix4(Jn),this}scale(e,n,r){return Jn.makeScale(e,n,r),this.applyMatrix4(Jn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new er(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];Wn.setFromBufferAttribute(u),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const h=n[u];za.setFromBufferAttribute(h),this.morphTargetsRelative?(fn.addVectors(Wn.min,za.min),Wn.expandByPoint(fn),fn.addVectors(Wn.max,za.max),Wn.expandByPoint(fn)):(Wn.expandByPoint(za.min),Wn.expandByPoint(za.max))}Wn.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)fn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(fn));if(n)for(let u=0,c=n.length;u<c;u++){const h=n[u],p=this.morphTargetsRelative;for(let m=0,x=h.count;m<x;m++)fn.fromBufferAttribute(h,m),p&&(Vs.fromBufferAttribute(e,m),fn.add(Vs)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),h=[],p=[];for(let T=0;T<r.count;T++)h[T]=new ie,p[T]=new ie;const m=new ie,x=new ie,S=new ie,g=new Rt,M=new Rt,A=new Rt,C=new ie,_=new ie;function v(T,I,$){m.fromBufferAttribute(r,T),x.fromBufferAttribute(r,I),S.fromBufferAttribute(r,$),g.fromBufferAttribute(u,T),M.fromBufferAttribute(u,I),A.fromBufferAttribute(u,$),x.sub(m),S.sub(m),M.sub(g),A.sub(g);const F=1/(M.x*A.y-A.x*M.y);isFinite(F)&&(C.copy(x).multiplyScalar(A.y).addScaledVector(S,-M.y).multiplyScalar(F),_.copy(S).multiplyScalar(M.x).addScaledVector(x,-A.x).multiplyScalar(F),h[T].add(C),h[I].add(C),h[$].add(C),p[T].add(_),p[I].add(_),p[$].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,I=b.length;T<I;++T){const $=b[T],F=$.start,Y=$.count;for(let oe=F,de=F+Y;oe<de;oe+=3)v(e.getX(oe+0),e.getX(oe+1),e.getX(oe+2))}const D=new ie,P=new ie,V=new ie,L=new ie;function O(T){V.fromBufferAttribute(o,T),L.copy(V);const I=h[T];D.copy(I),D.sub(V.multiplyScalar(V.dot(I))).normalize(),P.crossVectors(L,I);const F=P.dot(p[T])<0?-1:1;c.setXYZW(T,D.x,D.y,D.z,F)}for(let T=0,I=b.length;T<I;++T){const $=b[T],F=$.start,Y=$.count;for(let oe=F,de=F+Y;oe<de;oe+=3)O(e.getX(oe+0)),O(e.getX(oe+1)),O(e.getX(oe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ie,u=new ie,c=new ie,h=new ie,p=new ie,m=new ie,x=new ie,S=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const A=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(n,A),u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,_),x.subVectors(c,u),S.subVectors(o,u),x.cross(S),h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,_),h.add(x),p.add(x),m.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),x.subVectors(c,u),S.subVectors(o,u),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)fn.fromBufferAttribute(e,n),fn.normalize(),e.setXYZ(n,fn.x,fn.y,fn.z)}toNonIndexed(){function e(h,p){const m=h.array,x=h.itemSize,S=h.normalized,g=new m.constructor(p.length*x);let M=0,A=0;for(let C=0,_=p.length;C<_;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*x;for(let v=0;v<x;v++)g[A++]=m[M++]}return new Li(g,x,S)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ir,r=this.index.array,o=this.attributes;for(const h in o){const p=o[h],m=e(p,r);n.setAttribute(h,m)}const u=this.morphAttributes;for(const h in u){const p=[],m=u[h];for(let x=0,S=m.length;x<S;x++){const g=m[x],M=e(g,r);p.push(M)}n.morphAttributes[h]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,p=c.length;h<p;h++){const m=c[h];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let S=0,g=m.length;S<g;S++){const M=m[S];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const u=e.morphAttributes;for(const m in u){const x=[],S=u[m];for(let g=0,M=S.length;g<M;g++)x.push(S[g].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,x=c.length;m<x;m++){const S=c[m];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fv=0;class Bl extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=Xs,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){it(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){it(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==Lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rf&&(r.blendSrc=this.blendSrc),this.blendDst!==sf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const h in u){const p=u[h];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new ie,Xc=new ie,cl=new ie,Rr=new ie,jc=new ie,fl=new ie,Yc=new ie;class dv{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,n),$i.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Xc.copy(e).add(n).multiplyScalar(.5),cl.copy(n).sub(e).normalize(),Rr.copy(this.origin).sub(Xc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(cl),h=Rr.dot(this.direction),p=-Rr.dot(cl),m=Rr.lengthSq(),x=Math.abs(1-c*c);let S,g,M,A;if(x>0)if(S=c*p-h,g=c*h-p,A=u*x,S>=0)if(g>=-A)if(g<=A){const C=1/x;S*=C,g*=C,M=S*(S+c*g+2*h)+g*(c*S+g+2*p)+m}else g=u,S=Math.max(0,-(c*g+h)),M=-S*S+g*(g+2*p)+m;else g=-u,S=Math.max(0,-(c*g+h)),M=-S*S+g*(g+2*p)+m;else g<=-A?(S=Math.max(0,-(-c*u+h)),g=S>0?-u:Math.min(Math.max(-u,-p),u),M=-S*S+g*(g+2*p)+m):g<=A?(S=0,g=Math.min(Math.max(-u,-p),u),M=g*(g+2*p)+m):(S=Math.max(0,-(c*u+h)),g=S>0?u:Math.min(Math.max(-u,-p),u),M=-S*S+g*(g+2*p)+m);else g=c>0?-u:u,S=Math.max(0,-(c*g+h)),M=-S*S+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Xc).addScaledVector(cl,g),M}intersectSphere(e,n){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),h=r-c,p=r+c;return p<0?null:h<0?this.at(p,n):this.at(h,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,h,p;const m=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),x>=0?(u=(e.min.y-g.y)*x,c=(e.max.y-g.y)*x):(u=(e.max.y-g.y)*x,c=(e.min.y-g.y)*x),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),S>=0?(h=(e.min.z-g.z)*S,p=(e.max.z-g.z)*S):(h=(e.max.z-g.z)*S,p=(e.min.z-g.z)*S),r>p||h>o)||((h>r||r!==r)&&(r=h),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,n,r,o,u){jc.subVectors(n,e),fl.subVectors(r,e),Yc.crossVectors(jc,fl);let c=this.direction.dot(Yc),h;if(c>0){if(o)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Rr.subVectors(this.origin,e);const p=h*this.direction.dot(fl.crossVectors(Rr,fl));if(p<0)return null;const m=h*this.direction.dot(jc.cross(Rr));if(m<0||p+m>c)return null;const x=-h*Rr.dot(Yc);return x<0?null:this.at(x/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class og extends Bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=km,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const om=new sn,$r=new dv,dl=new ad,lm=new ie,hl=new ie,pl=new ie,ml=new ie,qc=new ie,gl=new ie,um=new ie,_l=new ie;class Di extends Xn{constructor(e=new ir,n=new og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const h=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(u&&h){gl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const x=h[p],S=u[p];x!==0&&(qc.fromBufferAttribute(S,e),c?gl.addScaledVector(qc,x):gl.addScaledVector(qc.sub(n),x))}n.add(gl)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),dl.copy(r.boundingSphere),dl.applyMatrix4(u),$r.copy(e.ray).recast(e.near),!(dl.containsPoint($r.origin)===!1&&($r.intersectSphere(dl,lm)===null||$r.origin.distanceToSquared(lm)>(e.far-e.near)**2))&&(om.copy(u).invert(),$r.copy(e.ray).applyMatrix4(om),!(r.boundingBox!==null&&$r.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,$r)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,h=u.index,p=u.attributes.position,m=u.attributes.uv,x=u.attributes.uv1,S=u.attributes.normal,g=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(c))for(let A=0,C=g.length;A<C;A++){const _=g[A],v=c[_.materialIndex],b=Math.max(_.start,M.start),D=Math.min(h.count,Math.min(_.start+_.count,M.start+M.count));for(let P=b,V=D;P<V;P+=3){const L=h.getX(P),O=h.getX(P+1),T=h.getX(P+2);o=vl(this,v,e,r,m,x,S,L,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let _=A,v=C;_<v;_+=3){const b=h.getX(_),D=h.getX(_+1),P=h.getX(_+2);o=vl(this,c,e,r,m,x,S,b,D,P),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let A=0,C=g.length;A<C;A++){const _=g[A],v=c[_.materialIndex],b=Math.max(_.start,M.start),D=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let P=b,V=D;P<V;P+=3){const L=P,O=P+1,T=P+2;o=vl(this,v,e,r,m,x,S,L,O,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const A=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let _=A,v=C;_<v;_+=3){const b=_,D=_+1,P=_+2;o=vl(this,c,e,r,m,x,S,b,D,P),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function hv(s,e,n,r,o,u,c,h){let p;if(e.side===Bn?p=r.intersectTriangle(c,u,o,!0,h):p=r.intersectTriangle(o,u,c,e.side===Lr,h),p===null)return null;_l.copy(h),_l.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(_l);return m<n.near||m>n.far?null:{distance:m,point:_l.clone(),object:s}}function vl(s,e,n,r,o,u,c,h,p,m){s.getVertexPosition(h,hl),s.getVertexPosition(p,pl),s.getVertexPosition(m,ml);const x=hv(s,e,n,r,hl,pl,ml,um);if(x){const S=new ie;pi.getBarycoord(um,hl,pl,ml,S),o&&(x.uv=pi.getInterpolatedAttribute(o,h,p,m,S,new Rt)),u&&(x.uv1=pi.getInterpolatedAttribute(u,h,p,m,S,new Rt)),c&&(x.normal=pi.getInterpolatedAttribute(c,h,p,m,S,new ie),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:h,b:p,c:m,normal:new ie,materialIndex:0};pi.getNormal(hl,pl,ml,g.normal),x.face=g,x.barycoord=S}return x}class pv extends Cn{constructor(e=null,n=1,r=1,o,u,c,h,p,m=gn,x=gn,S,g){super(null,c,h,p,m,x,o,u,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new ie,mv=new ie,gv=new lt;class Zr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=$c.subVectors(r,n).cross(mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta($c),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||gv.getNormalMatrix(e),o=this.coplanarPoint($c).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new ad,_v=new Rt(.5,.5),xl=new ie;class lg{constructor(e=new Zr,n=new Zr,r=new Zr,o=new Zr,u=new Zr,c=new Zr){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const h=this.planes;return h[0].copy(e),h[1].copy(n),h[2].copy(r),h[3].copy(o),h[4].copy(u),h[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ci,r=!1){const o=this.planes,u=e.elements,c=u[0],h=u[1],p=u[2],m=u[3],x=u[4],S=u[5],g=u[6],M=u[7],A=u[8],C=u[9],_=u[10],v=u[11],b=u[12],D=u[13],P=u[14],V=u[15];if(o[0].setComponents(m-c,M-x,v-A,V-b).normalize(),o[1].setComponents(m+c,M+x,v+A,V+b).normalize(),o[2].setComponents(m+h,M+S,v+C,V+D).normalize(),o[3].setComponents(m-h,M-S,v-C,V-D).normalize(),r)o[4].setComponents(p,g,_,P).normalize(),o[5].setComponents(m-p,M-g,v-_,V-P).normalize();else if(o[4].setComponents(m-p,M-g,v-_,V-P).normalize(),n===Ci)o[5].setComponents(m+p,M+g,v+_,V+P).normalize();else if(n===Il)o[5].setComponents(p,g,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=_v.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(xl.x=o.normal.x>0?e.max.x:e.min.x,xl.y=o.normal.y>0?e.max.y:e.min.y,xl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ug extends Cn{constructor(e=[],n=ns,r,o,u,c,h,p,m,x){super(e,n,r,o,u,c,h,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $s extends Cn{constructor(e,n,r=Ni,o,u,c,h=gn,p=gn,m,x=nr,S=1){if(x!==nr&&x!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,u,c,h,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vv extends $s{constructor(e,n=Ni,r=ns,o,u,c=gn,h=gn,p,m=nr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,n,r,o,u,c,h,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cg extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $a extends ir{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const h=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],x=[],S=[];let g=0,M=0;A("z","y","x",-1,-1,r,n,e,c,u,0),A("z","y","x",1,-1,r,n,-e,c,u,1),A("x","z","y",1,1,e,r,n,o,c,2),A("x","z","y",1,-1,e,r,-n,o,c,3),A("x","y","z",1,-1,e,n,r,o,u,4),A("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new er(m,3)),this.setAttribute("normal",new er(x,3)),this.setAttribute("uv",new er(S,2));function A(C,_,v,b,D,P,V,L,O,T,I){const $=P/O,F=V/T,Y=P/2,oe=V/2,de=L/2,W=O+1,q=T+1;let j=0,K=0;const le=new ie;for(let ue=0;ue<q;ue++){const U=ue*F-oe;for(let J=0;J<W;J++){const Ie=J*$-Y;le[C]=Ie*b,le[_]=U*D,le[v]=de,m.push(le.x,le.y,le.z),le[C]=0,le[_]=0,le[v]=L>0?1:-1,x.push(le.x,le.y,le.z),S.push(J/O),S.push(1-ue/T),j+=1}}for(let ue=0;ue<T;ue++)for(let U=0;U<O;U++){const J=g+U+W*ue,Ie=g+U+W*(ue+1),Ve=g+(U+1)+W*(ue+1),Le=g+(U+1)+W*ue;p.push(J,Ie,Le),p.push(Ie,Ve,Le),K+=6}h.addGroup(M,K,I),M+=K,g+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ka extends ir{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,h=Math.floor(r),p=Math.floor(o),m=h+1,x=p+1,S=e/h,g=n/p,M=[],A=[],C=[],_=[];for(let v=0;v<x;v++){const b=v*g-c;for(let D=0;D<m;D++){const P=D*S-u;A.push(P,-b,0),C.push(0,0,1),_.push(D/h),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<h;b++){const D=b+m*v,P=b+m*(v+1),V=b+1+m*(v+1),L=b+1+m*v;M.push(D,P,L),M.push(P,V,L)}this.setIndex(M),this.setAttribute("position",new er(A,3)),this.setAttribute("normal",new er(C,3)),this.setAttribute("uv",new er(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(cm(o))o.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(cm(o[0])){const u=[];for(let c=0,h=o.length;c<h;c++)u[c]=o[c].clone();e[n][r]=u}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const o in r)e[o]=r[o]}return e}function cm(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function xv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function fg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Sv={clone:Ks,merge:Rn};var yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends Bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=xv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ev extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tv extends Bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=U_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Av extends Bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sl=new ie,yl=new Zs,Ei=new ie;class dg extends Xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sl,yl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,yl,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Sl,yl,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sl,yl,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new ie,fm=new Rt,dm=new Rt;class hi extends dg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jf*2*Math.atan(Math.tan(wc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,fm,dm),n.subVectors(dm,fm)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(wc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/m,o*=c.width/p,r*=c.height/m}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class od extends dg{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,h=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,h-=x*this.view.offsetY,p=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,c,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Hs=-90,Gs=1;class wv extends Xn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(Hs,Gs,e,n);o.layers=this.layers,this.add(o);const u=new hi(Hs,Gs,e,n);u.layers=this.layers,this.add(u);const c=new hi(Hs,Gs,e,n);c.layers=this.layers,this.add(c);const h=new hi(Hs,Gs,e,n);h.layers=this.layers,this.add(h);const p=new hi(Hs,Gs,e,n);p.layers=this.layers,this.add(p);const m=new hi(Hs,Gs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,h,p]=n;for(const m of n)this.remove(m);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,h,p,m,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),e.setRenderTarget(S,g,M),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Rv extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dd=class dd{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const u=this.elements;return u[0]=e,u[2]=n,u[1]=r,u[3]=o,this}};dd.prototype.isMatrix2=!0;let hm=dd;function pm(s,e,n,r){const o=Cv(r);switch(n){case Qm:return s*e;case eg:return s*e/o.components*o.byteLength;case ed:return s*e/o.components*o.byteLength;case is:return s*e*2/o.components*o.byteLength;case td:return s*e*2/o.components*o.byteLength;case Jm:return s*e*3/o.components*o.byteLength;case mi:return s*e*4/o.components*o.byteLength;case nd:return s*e*4/o.components*o.byteLength;case Al:case wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case gf:case vf:return Math.max(s,16)*Math.max(e,8)/4;case mf:case _f:return Math.max(s,8)*Math.max(e,8)/2;case xf:case Sf:case Mf:case Ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yf:case Pl:case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Of:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case kf:case zf:case Vf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Hf:case Gf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ll:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cv(s){switch(s){case ti:case qm:return{byteLength:1,components:1};case Xa:case $m:case tr:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case Ni:case Zf:case Ri:return{byteLength:4,components:1};case Km:case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kf}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hg(){let s=null,e=!1,n=null,r=null;function o(u,c){n(u,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function bv(s){const e=new WeakMap;function n(h,p){const m=h.array,x=h.usage,S=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,x),h.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,p,m){const x=p.array,S=p.updateRanges;if(s.bindBuffer(m,h),S.length===0)s.bufferSubData(m,0,x);else{S.sort((M,A)=>M.start-A.start);let g=0;for(let M=1;M<S.length;M++){const A=S[g],C=S[M];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++g,S[g]=C)}S.length=g+1;for(let M=0,A=S.length;M<A;M++){const C=S[M];s.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function c(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,n(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:o,remove:u,update:c}}var Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ex=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_x=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Mx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_S=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,SS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ES=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,TS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,AS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,OS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$S=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ty=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ly=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Pv,alphahash_pars_fragment:Lv,alphamap_fragment:Nv,alphamap_pars_fragment:Dv,alphatest_fragment:Iv,alphatest_pars_fragment:Uv,aomap_fragment:Fv,aomap_pars_fragment:Ov,batching_pars_vertex:Bv,batching_vertex:kv,begin_vertex:zv,beginnormal_vertex:Vv,bsdfs:Hv,iridescence_fragment:Gv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:Xv,clipping_planes_pars_fragment:jv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:qv,color_fragment:$v,color_pars_fragment:Kv,color_pars_vertex:Zv,color_vertex:Qv,common:Jv,cube_uv_reflection_fragment:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:rx,emissivemap_pars_fragment:sx,colorspace_fragment:ax,colorspace_pars_fragment:ox,envmap_fragment:lx,envmap_common_pars_fragment:ux,envmap_pars_fragment:cx,envmap_pars_vertex:fx,envmap_physical_pars_fragment:Mx,envmap_vertex:dx,fog_vertex:hx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:_x,lightmap_pars_fragment:vx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:Sx,lights_pars_begin:yx,lights_toon_fragment:Ex,lights_toon_pars_fragment:Tx,lights_phong_fragment:Ax,lights_phong_pars_fragment:wx,lights_physical_fragment:Rx,lights_physical_pars_fragment:Cx,lights_fragment_begin:bx,lights_fragment_maps:Px,lights_fragment_end:Lx,lightprobes_pars_fragment:Nx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Ix,logdepthbuf_pars_vertex:Ux,logdepthbuf_vertex:Fx,map_fragment:Ox,map_pars_fragment:Bx,map_particle_fragment:kx,map_particle_pars_fragment:zx,metalnessmap_fragment:Vx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Gx,morphcolor_vertex:Wx,morphnormal_vertex:Xx,morphtarget_pars_vertex:jx,morphtarget_vertex:Yx,normal_fragment_begin:qx,normal_fragment_maps:$x,normal_pars_fragment:Kx,normal_pars_vertex:Zx,normal_vertex:Qx,normalmap_pars_fragment:Jx,clearcoat_normal_fragment_begin:eS,clearcoat_normal_fragment_maps:tS,clearcoat_pars_fragment:nS,iridescence_pars_fragment:iS,opaque_fragment:rS,packing:sS,premultiplied_alpha_fragment:aS,project_vertex:oS,dithering_fragment:lS,dithering_pars_fragment:uS,roughnessmap_fragment:cS,roughnessmap_pars_fragment:fS,shadowmap_pars_fragment:dS,shadowmap_pars_vertex:hS,shadowmap_vertex:pS,shadowmask_pars_fragment:mS,skinbase_vertex:gS,skinning_pars_vertex:_S,skinning_vertex:vS,skinnormal_vertex:xS,specularmap_fragment:SS,specularmap_pars_fragment:yS,tonemapping_fragment:MS,tonemapping_pars_fragment:ES,transmission_fragment:TS,transmission_pars_fragment:AS,uv_pars_fragment:wS,uv_pars_vertex:RS,uv_vertex:CS,worldpos_vertex:bS,background_vert:PS,background_frag:LS,backgroundCube_vert:NS,backgroundCube_frag:DS,cube_vert:IS,cube_frag:US,depth_vert:FS,depth_frag:OS,distance_vert:BS,distance_frag:kS,equirect_vert:zS,equirect_frag:VS,linedashed_vert:HS,linedashed_frag:GS,meshbasic_vert:WS,meshbasic_frag:XS,meshlambert_vert:jS,meshlambert_frag:YS,meshmatcap_vert:qS,meshmatcap_frag:$S,meshnormal_vert:KS,meshnormal_frag:ZS,meshphong_vert:QS,meshphong_frag:JS,meshphysical_vert:ey,meshphysical_frag:ty,meshtoon_vert:ny,meshtoon_frag:iy,points_vert:ry,points_frag:sy,shadow_vert:ay,shadow_frag:oy,sprite_vert:ly,sprite_frag:uy},Ue={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},wi={basic:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Rn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Rn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new wt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Rn([Ue.points,Ue.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Rn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Rn([Ue.common,Ue.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Rn([Ue.sprite,Ue.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Rn([Ue.common,Ue.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Rn([Ue.lights,Ue.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};wi.physical={uniforms:Rn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Ml={r:0,b:0,g:0},cy=new sn,pg=new lt;pg.set(-1,0,0,0,1,0,0,0,1);function fy(s,e,n,r,o,u){const c=new wt(0);let h=o===!0?0:1,p,m,x=null,S=0,g=null;function M(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){const P=b.backgroundBlurriness>0;D=e.get(D,P)}return D}function A(b){let D=!1;const P=M(b);P===null?_(c,h):P&&P.isColor&&(_(P,1),D=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?n.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(s.autoClear||D)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(b,D){const P=M(D);P&&(P.isCubeTexture||P.mapping===Ol)?(m===void 0&&(m=new Di(new $a(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:Ks(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=P,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cy.makeRotationFromEuler(D.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(pg),m.material.toneMapped=_t.getTransfer(P.colorSpace)!==Lt,(x!==P||S!==P.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,x=P,S=P.version,g=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Di(new Ka(2,2),new gi({name:"BackgroundMaterial",uniforms:Ks(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=_t.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||S!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=P,S=P.version,g=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function _(b,D){b.getRGB(Ml,fg(s)),n.buffers.color.setClear(Ml.r,Ml.g,Ml.b,D,u)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,D=1){c.set(b),h=D,_(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(b){h=b,_(c,h)},render:A,addToRenderList:C,dispose:v}}function dy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function h(F,Y,oe,de,W){let q=!1;const j=S(F,de,oe,Y);u!==j&&(u=j,m(u.object)),q=M(F,de,oe,W),q&&A(F,de,oe,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(q||c)&&(c=!1,P(F,Y,oe,de),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function p(){return s.createVertexArray()}function m(F){return s.bindVertexArray(F)}function x(F){return s.deleteVertexArray(F)}function S(F,Y,oe,de){const W=de.wireframe===!0;let q=r[Y.id];q===void 0&&(q={},r[Y.id]=q);const j=F.isInstancedMesh===!0?F.id:0;let K=q[j];K===void 0&&(K={},q[j]=K);let le=K[oe.id];le===void 0&&(le={},K[oe.id]=le);let ue=le[W];return ue===void 0&&(ue=g(p()),le[W]=ue),ue}function g(F){const Y=[],oe=[],de=[];for(let W=0;W<n;W++)Y[W]=0,oe[W]=0,de[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:oe,attributeDivisors:de,object:F,attributes:{},index:null}}function M(F,Y,oe,de){const W=u.attributes,q=Y.attributes;let j=0;const K=oe.getAttributes();for(const le in K)if(K[le].location>=0){const U=W[le];let J=q[le];if(J===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;j++}return u.attributesNum!==j||u.index!==de}function A(F,Y,oe,de){const W={},q=Y.attributes;let j=0;const K=oe.getAttributes();for(const le in K)if(K[le].location>=0){let U=q[le];U===void 0&&(le==="instanceMatrix"&&F.instanceMatrix&&(U=F.instanceMatrix),le==="instanceColor"&&F.instanceColor&&(U=F.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),W[le]=J,j++}u.attributes=W,u.attributesNum=j,u.index=de}function C(){const F=u.newAttributes;for(let Y=0,oe=F.length;Y<oe;Y++)F[Y]=0}function _(F){v(F,0)}function v(F,Y){const oe=u.newAttributes,de=u.enabledAttributes,W=u.attributeDivisors;oe[F]=1,de[F]===0&&(s.enableVertexAttribArray(F),de[F]=1),W[F]!==Y&&(s.vertexAttribDivisor(F,Y),W[F]=Y)}function b(){const F=u.newAttributes,Y=u.enabledAttributes;for(let oe=0,de=Y.length;oe<de;oe++)Y[oe]!==F[oe]&&(s.disableVertexAttribArray(oe),Y[oe]=0)}function D(F,Y,oe,de,W,q,j){j===!0?s.vertexAttribIPointer(F,Y,oe,W,q):s.vertexAttribPointer(F,Y,oe,de,W,q)}function P(F,Y,oe,de){C();const W=de.attributes,q=oe.getAttributes(),j=Y.defaultAttributeValues;for(const K in q){const le=q[K];if(le.location>=0){let ue=W[K];if(ue===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor)),ue!==void 0){const U=ue.normalized,J=ue.itemSize,Ie=e.get(ue);if(Ie===void 0)continue;const Ve=Ie.buffer,Le=Ie.type,se=Ie.bytesPerElement,ge=Le===s.INT||Le===s.UNSIGNED_INT||ue.gpuType===Zf;if(ue.isInterleavedBufferAttribute){const ce=ue.data,Ne=ce.stride,Ze=ue.offset;if(ce.isInstancedInterleavedBuffer){for(let Qe=0;Qe<le.locationSize;Qe++)v(le.location+Qe,ce.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Qe=0;Qe<le.locationSize;Qe++)_(le.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Qe=0;Qe<le.locationSize;Qe++)D(le.location+Qe,J/le.locationSize,Le,U,Ne*se,(Ze+J/le.locationSize*Qe)*se,ge)}else{if(ue.isInstancedBufferAttribute){for(let ce=0;ce<le.locationSize;ce++)v(le.location+ce,ue.meshPerAttribute);F.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ce=0;ce<le.locationSize;ce++)_(le.location+ce);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let ce=0;ce<le.locationSize;ce++)D(le.location+ce,J/le.locationSize,Le,U,J*se,J/le.locationSize*ce*se,ge)}}else if(j!==void 0){const U=j[K];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(le.location,U);break;case 3:s.vertexAttrib3fv(le.location,U);break;case 4:s.vertexAttrib4fv(le.location,U);break;default:s.vertexAttrib1fv(le.location,U)}}}}b()}function V(){I();for(const F in r){const Y=r[F];for(const oe in Y){const de=Y[oe];for(const W in de){const q=de[W];for(const j in q)x(q[j].object),delete q[j];delete de[W]}}delete r[F]}}function L(F){if(r[F.id]===void 0)return;const Y=r[F.id];for(const oe in Y){const de=Y[oe];for(const W in de){const q=de[W];for(const j in q)x(q[j].object),delete q[j];delete de[W]}}delete r[F.id]}function O(F){for(const Y in r){const oe=r[Y];for(const de in oe){const W=oe[de];if(W[F.id]===void 0)continue;const q=W[F.id];for(const j in q)x(q[j].object),delete q[j];delete W[F.id]}}}function T(F){for(const Y in r){const oe=r[Y],de=F.isInstancedMesh===!0?F.id:0,W=oe[de];if(W!==void 0){for(const q in W){const j=W[q];for(const K in j)x(j[K].object),delete j[K];delete W[q]}delete oe[de],Object.keys(oe).length===0&&delete r[Y]}}}function I(){$(),c=!0,u!==o&&(u=o,m(u.object))}function $(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:I,resetDefaultState:$,dispose:V,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:_,disableUnusedAttributes:b}}function hy(s,e,n){let r;function o(p){r=p}function u(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function c(p,m,x){x!==0&&(s.drawArraysInstanced(r,p,m,x),n.update(m,r,x))}function h(p,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,x);let g=0;for(let M=0;M<x;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=h}function py(s,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==mi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const T=O===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ti&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ri&&!T)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(it("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:P,maxSamples:V,samples:L}}function my(s){const e=this;let n=null,r=0,o=!1,u=!1;const c=new Zr,h=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,g){n=x(S,g,0)},this.setState=function(S,g,M){const A=S.clippingPlanes,C=S.clipIntersection,_=S.clipShadows,v=s.get(S);if(!o||A===null||A.length===0||u&&!_)u?x(null):m();else{const b=u?0:r,D=b*4;let P=v.clippingState||null;p.value=P,P=x(A,g,D,M);for(let V=0;V!==D;++V)P[V]=n[V];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,M,A){const C=S!==null?S.length:0;let _=null;if(C!==0){if(_=p.value,A!==!0||_===null){const v=M+C*4,b=g.matrixWorldInverse;h.getNormalMatrix(b),(_===null||_.length<v)&&(_=new Float32Array(v));for(let D=0,P=M;D!==C;++D,P+=4)c.copy(S[D]).applyMatrix4(b,h),c.normal.toArray(_,P),_[P+3]=c.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Pr=4,mm=[.125,.215,.35,.446,.526,.582],Jr=20,gy=256,Va=new od,gm=new wt;let Kc=null,Zc=0,Qc=0,Jc=!1;const _y=new ie;class _m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:h=_y}=u;Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,h),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:En,minFilter:En,generateMipmaps:!1,type:tr,format:mi,colorSpace:Nl,depthBuffer:!1},o=vm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vm(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vy(u)),this._blurMaterial=Sy(u,e,n),this._ggxMaterial=xy(u,e,n)}return o}_compileMaterial(e){const n=new Di(new ir,e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,r,o,u){const p=new hi(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(gm),S.toneMapping=bi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new $a,new og({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let v=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,v=!0):(_.color.copy(gm),v=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+x[D],u.y,u.z)):P===1?(p.up.set(0,0,m[D]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+x[D],u.z)):(p.up.set(0,m[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+x[D]));const V=this._cubeSize;Ws(o,P*V,D>2?V:0,V,V),S.setRenderTarget(o),v&&S.render(C,p),S.render(e,p)}S.toneMapping=M,S.autoClear=g,e.background=b}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xm());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const h=u.uniforms;h.envMap.value=e;const p=this._cubeSize;Ws(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Va)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[r];h.material=c;const p=c.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),S=Math.sqrt(m*m-x*x),g=0+m*1.25,M=S*g,{_lodMax:A}=this,C=this._sizeLods[r],_=3*C*(r>A-Pr?r-A+Pr:0),v=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=A-n,Ws(u,_,v,3*C,2*C),o.setRenderTarget(u),o.render(h,Va),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=A-r,Ws(e,_,v,3*C,2*C),o.setRenderTarget(e),o.render(h,Va)}_blur(e,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,c,h){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[o];S.material=m;const g=m.uniforms,M=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Jr-1),C=u/A,_=isFinite(u)?1+Math.floor(x*C):Jr;_>Jr&&it(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Jr}`);const v=[];let b=0;for(let O=0;O<Jr;++O){const T=O/C,I=Math.exp(-T*T/2);v.push(I),O===0?b+=I:O<_&&(b+=2*I)}for(let O=0;O<v.length;O++)v[O]=v[O]/b;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=c==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:D}=this;g.dTheta.value=A,g.mipInt.value=D-r;const P=this._sizeLods[o],V=3*P*(o>D-Pr?o-D+Pr:0),L=4*(this._cubeSize-P);Ws(n,V,L,3*P,2*P),p.setRenderTarget(n),p.render(S,Va)}}function vy(s){const e=[],n=[],r=[];let o=s;const u=s-Pr+1+mm.length;for(let c=0;c<u;c++){const h=Math.pow(2,o);e.push(h);let p=1/h;c>s-Pr?p=mm[c-s+Pr-1]:c===0&&(p=0),n.push(p);const m=1/(h-2),x=-m,S=1+m,g=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,A=6,C=3,_=2,v=1,b=new Float32Array(C*A*M),D=new Float32Array(_*A*M),P=new Float32Array(v*A*M);for(let L=0;L<M;L++){const O=L%3*2/3-1,T=L>2?0:-1,I=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];b.set(I,C*A*L),D.set(g,_*A*L);const $=[L,L,L,L,L,L];P.set($,v*A*L)}const V=new ir;V.setAttribute("position",new Li(b,C)),V.setAttribute("uv",new Li(D,_)),V.setAttribute("faceIndex",new Li(P,v)),r.push(new Di(V,null)),o>Pr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function vm(s,e,n){const r=new Pi(s,e,n);return r.texture.mapping=Ol,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ws(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function xy(s,e,n){return new gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Sy(s,e,n){const r=new Float32Array(Jr),o=new ie(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function xm(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Sm(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function kl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mg extends Pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ug(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new $a(5,5,5),u=new gi({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bn,blending:Qi});u.uniforms.tEquirect.value=n;const c=new Di(o,u),h=n.minFilter;return n.minFilter===es&&(n.minFilter=En),new wv(1,10,this).update(e,c),n.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}function yy(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ec||M===Tc)if(e.has(g)){const A=e.get(g).texture;return h(A,g.mapping)}else{const A=g.image;if(A&&A.height>0){const C=new mg(A.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),h(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const M=g.mapping,A=M===Ec||M===Tc,C=M===ns||M===qs;if(A||C){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new _m(s)),_=A?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const b=g.image;return A&&b&&b.height>0||C&&b&&p(b)?(r===null&&(r=new _m(s)),_=A?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",x),_.texture):null}}}return g}function h(g,M){return M===Ec?g.mapping=ns:M===Tc&&(g.mapping=qs),g}function p(g){let M=0;const A=6;for(let C=0;C<A;C++)g[C]!==void 0&&M++;return M===A}function m(g){const M=g.target;M.removeEventListener("dispose",m);const A=e.get(M);A!==void 0&&(e.delete(M),A.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const A=n.get(M);A!==void 0&&(n.delete(M),A.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function My(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Xf("WebGLRenderer: "+r+" extension not supported."),o}}}function Ey(s,e,n,r){const o={},u=new WeakMap;function c(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const A in g.attributes)e.remove(g.attributes[A]);g.removeEventListener("dispose",c),delete o[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function h(S,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,n.memory.geometries++),g}function p(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(S){const g=[],M=S.index,A=S.attributes.position;let C=0;if(A===void 0)return;if(M!==null){const b=M.array;C=M.version;for(let D=0,P=b.length;D<P;D+=3){const V=b[D+0],L=b[D+1],O=b[D+2];g.push(V,L,L,O,O,V)}}else{const b=A.array;C=A.version;for(let D=0,P=b.length/3-1;D<P;D+=3){const V=D+0,L=D+1,O=D+2;g.push(V,L,L,O,O,V)}}const _=new(A.count>=65535?ag:sg)(g,1);_.version=C;const v=u.get(S);v&&e.remove(v),u.set(S,_)}function x(S){const g=u.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&m(S)}else m(S);return u.get(S)}return{get:h,update:p,getWireframeAttribute:x}}function Ty(s,e,n){let r;function o(S){r=S}let u,c;function h(S){u=S.type,c=S.bytesPerElement}function p(S,g){s.drawElements(r,g,u,S*c),n.update(g,r,1)}function m(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,S*c,M),n.update(g,r,M))}function x(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,S,0,M);let C=0;for(let _=0;_<M;_++)C+=g[_];n.update(C,r,1)}this.setMode=o,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=x}function Ay(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,h){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=h*(u/3);break;case s.LINES:n.lines+=h*(u/2);break;case s.LINE_STRIP:n.lines+=h*(u-1);break;case s.LINE_LOOP:n.lines+=h*u;break;case s.POINTS:n.points+=h*u;break;default:yt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function wy(s,e,n){const r=new WeakMap,o=new Qt;function u(c,h,p){const m=c.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(h);if(g===void 0||g.count!==S){let $=function(){T.dispose(),r.delete(h),h.removeEventListener("dispose",$)};var M=$;g!==void 0&&g.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,_=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let P=0;A===!0&&(P=1),C===!0&&(P=2),_===!0&&(P=3);let V=h.attributes.position.count*P,L=1;V>e.maxTextureSize&&(L=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const O=new Float32Array(V*L*4*S),T=new ng(O,V,L,S);T.type=Ri,T.needsUpdate=!0;const I=P*4;for(let F=0;F<S;F++){const Y=v[F],oe=b[F],de=D[F],W=V*L*4*F;for(let q=0;q<Y.count;q++){const j=q*I;A===!0&&(o.fromBufferAttribute(Y,q),O[W+j+0]=o.x,O[W+j+1]=o.y,O[W+j+2]=o.z,O[W+j+3]=0),C===!0&&(o.fromBufferAttribute(oe,q),O[W+j+4]=o.x,O[W+j+5]=o.y,O[W+j+6]=o.z,O[W+j+7]=0),_===!0&&(o.fromBufferAttribute(de,q),O[W+j+8]=o.x,O[W+j+9]=o.y,O[W+j+10]=o.z,O[W+j+11]=de.itemSize===4?o.w:1)}}g={count:S,texture:T,size:new Rt(V,L)},r.set(h,g),h.addEventListener("dispose",$)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let A=0;for(let _=0;_<m.length;_++)A+=m[_];const C=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function Ry(s,e,n,r,o){let u=new WeakMap;function c(m){const x=o.render.frame,S=m.geometry,g=e.get(m,S);if(u.get(g)!==x&&(e.update(g),u.set(g,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==x&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),u.set(m,x))),m.isSkinnedMesh){const M=m.skeleton;u.get(M)!==x&&(M.update(),u.set(M,x))}return g}function h(){u=new WeakMap}function p(m){const x=m.target;x.removeEventListener("dispose",p),r.releaseStatesOfObject(x),n.remove(x.instanceMatrix),x.instanceColor!==null&&n.remove(x.instanceColor)}return{update:c,dispose:h}}const Cy={[zm]:"LINEAR_TONE_MAPPING",[Vm]:"REINHARD_TONE_MAPPING",[Hm]:"CINEON_TONE_MAPPING",[Gm]:"ACES_FILMIC_TONE_MAPPING",[Xm]:"AGX_TONE_MAPPING",[jm]:"NEUTRAL_TONE_MAPPING",[Wm]:"CUSTOM_TONE_MAPPING"};function by(s,e,n,r,o){const u=new Pi(e,n,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new $s(e,n):void 0}),c=new Pi(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),h=new ir;h.setAttribute("position",new er([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new er([0,2,0,0,2,0],2));const p=new Ev({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Di(h,p),x=new od(-1,1,1,-1,0,1);let S=null,g=null,M=!1,A,C=null,_=[],v=!1;this.setSize=function(b,D){u.setSize(b,D),c.setSize(b,D);for(let P=0;P<_.length;P++){const V=_[P];V.setSize&&V.setSize(b,D)}},this.setEffects=function(b){_=b,v=_.length>0&&_[0].isRenderPass===!0;const D=u.width,P=u.height;for(let V=0;V<_.length;V++){const L=_[V];L.setSize&&L.setSize(D,P)}},this.begin=function(b,D){if(M||b.toneMapping===bi&&_.length===0)return!1;if(C=D,D!==null){const P=D.width,V=D.height;(u.width!==P||u.height!==V)&&this.setSize(P,V)}return v===!1&&b.setRenderTarget(u),A=b.toneMapping,b.toneMapping=bi,!0},this.hasRenderPass=function(){return v},this.end=function(b,D){b.toneMapping=A,M=!0;let P=u,V=c;for(let L=0;L<_.length;L++){const O=_[L];if(O.enabled!==!1&&(O.render(b,V,P,D),O.needsSwap!==!1)){const T=P;P=V,V=T}}if(S!==b.outputColorSpace||g!==b.toneMapping){S=b.outputColorSpace,g=b.toneMapping,p.defines={},_t.getTransfer(S)===Lt&&(p.defines.SRGB_TRANSFER="");const L=Cy[g];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(C),b.render(m,x),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),c.dispose(),h.dispose(),p.dispose()}}const gg=new Cn,Yf=new $s(1,1),_g=new ng,vg=new J_,xg=new ug,ym=[],Mm=[],Em=new Float32Array(16),Tm=new Float32Array(9),Am=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let u=ym[o];if(u===void 0&&(u=new Float32Array(o),ym[o]=u),e!==0){r.toArray(u,0);for(let c=1,h=0;c!==e;++c)h+=n,s[c].toArray(u,h)}return u}function an(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function on(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function zl(s,e){let n=Mm[e];n===void 0&&(n=new Int32Array(e),Mm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Py(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Ly(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2fv(this.addr,e),on(n,e)}}function Ny(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(an(n,e))return;s.uniform3fv(this.addr,e),on(n,e)}}function Dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4fv(this.addr,e),on(n,e)}}function Iy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Am.set(r),s.uniformMatrix2fv(this.addr,!1,Am),on(n,r)}}function Uy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Tm.set(r),s.uniformMatrix3fv(this.addr,!1,Tm),on(n,r)}}function Fy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Em.set(r),s.uniformMatrix4fv(this.addr,!1,Em),on(n,r)}}function Oy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function By(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2iv(this.addr,e),on(n,e)}}function ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3iv(this.addr,e),on(n,e)}}function zy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4iv(this.addr,e),on(n,e)}}function Vy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2uiv(this.addr,e),on(n,e)}}function Gy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3uiv(this.addr,e),on(n,e)}}function Wy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4uiv(this.addr,e),on(n,e)}}function Xy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?(Yf.compareFunction=n.isReversedDepthBuffer()?rd:id,u=Yf):u=gg,n.setTexture2D(e||u,o)}function jy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||vg,o)}function Yy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||xg,o)}function qy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||_g,o)}function $y(s){switch(s){case 5126:return Py;case 35664:return Ly;case 35665:return Ny;case 35666:return Dy;case 35674:return Iy;case 35675:return Uy;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return ky;case 35669:case 35673:return zy;case 5125:return Vy;case 36294:return Hy;case 36295:return Gy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return jy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return qy}}function Ky(s,e){s.uniform1fv(this.addr,e)}function Zy(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function Qy(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function Jy(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function eM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function tM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function nM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function iM(s,e){s.uniform1iv(this.addr,e)}function rM(s,e){s.uniform2iv(this.addr,e)}function sM(s,e){s.uniform3iv(this.addr,e)}function aM(s,e){s.uniform4iv(this.addr,e)}function oM(s,e){s.uniform1uiv(this.addr,e)}function lM(s,e){s.uniform2uiv(this.addr,e)}function uM(s,e){s.uniform3uiv(this.addr,e)}function cM(s,e){s.uniform4uiv(this.addr,e)}function fM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=Yf:c=gg;for(let h=0;h!==o;++h)n.setTexture2D(e[h]||c,u[h])}function dM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||vg,u[c])}function hM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||xg,u[c])}function pM(s,e,n){const r=this.cache,o=e.length,u=zl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||_g,u[c])}function mM(s){switch(s){case 5126:return Ky;case 35664:return Zy;case 35665:return Qy;case 35666:return Jy;case 35674:return eM;case 35675:return tM;case 35676:return nM;case 5124:case 35670:return iM;case 35667:case 35671:return rM;case 35668:case 35672:return sM;case 35669:case 35673:return aM;case 5125:return oM;case 36294:return lM;case 36295:return uM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return dM;case 35680:case 36300:case 36308:case 36293:return hM;case 36289:case 36303:case 36311:case 36292:return pM}}class gM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=$y(n.type)}}class _M{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mM(n.type)}}class vM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const h=o[u];h.setValue(e,n[h.id],r)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function wm(s,e){s.seq.push(e),s.map[e.id]=e}function xM(s,e,n){const r=s.name,o=r.length;for(ef.lastIndex=0;;){const u=ef.exec(r),c=ef.lastIndex;let h=u[1];const p=u[2]==="]",m=u[3];if(p&&(h=h|0),m===void 0||m==="["&&c+2===o){wm(n,m===void 0?new gM(h,s,e):new _M(h,s,e));break}else{let S=n.map[h];S===void 0&&(S=new vM(h),wm(n,S)),n=S}}}class bl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const h=e.getActiveUniform(n,c),p=e.getUniformLocation(n,h.name);xM(h,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const h=n[u],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Rm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const SM=37297;let yM=0;function MM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const h=c+1;r.push(`${h===e?">":" "} ${h}: ${n[c]}`)}return r.join(`
`)}const Cm=new lt;function EM(s){_t._getMatrix(Cm,_t.workingColorSpace,s);const e=`mat3( ${Cm.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(s)){case Dl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function bm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+MM(s.getShaderSource(e),h)}else return u}function TM(s,e){const n=EM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const AM={[zm]:"Linear",[Vm]:"Reinhard",[Hm]:"Cineon",[Gm]:"ACESFilmic",[Xm]:"AgX",[jm]:"Neutral",[Wm]:"Custom"};function wM(s,e){const n=AM[e];return n===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new ie;function RM(){_t.getLuminanceCoefficients(El);const s=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function bM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function PM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let h=1;u.type===s.FLOAT_MAT2&&(h=2),u.type===s.FLOAT_MAT3&&(h=3),u.type===s.FLOAT_MAT4&&(h=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:h}}return n}function Wa(s){return s!==""}function Pm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LM=/^[ \t]*#include +<([\w\d./]+)>/gm;function qf(s){return s.replace(LM,DM)}const NM=new Map;function DM(s,e){let n=dt[e];if(n===void 0){const r=NM.get(e);if(r!==void 0)n=dt[r],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qf(n)}const IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nm(s){return s.replace(IM,UM)}function UM(s,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Dm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FM={[Tl]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function OM(s){return FM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BM={[ns]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Ol]:"ENVMAP_TYPE_CUBE_UV"};function kM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":BM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const zM={[qs]:"ENVMAP_MODE_REFRACTION"};function VM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HM={[km]:"ENVMAP_BLENDING_MULTIPLY",[N_]:"ENVMAP_BLENDING_MIX",[D_]:"ENVMAP_BLENDING_ADD"};function GM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":HM[s.combine]||"ENVMAP_BLENDING_NONE"}function WM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function XM(s,e,n,r){const o=s.getContext(),u=n.defines;let c=n.vertexShader,h=n.fragmentShader;const p=OM(n),m=kM(n),x=VM(n),S=GM(n),g=WM(n),M=CM(n),A=bM(u),C=o.createProgram();let _,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Wa).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Wa).join(`
`),v.length>0&&(v+=`
`)):(_=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),v=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==bi?"#define TONE_MAPPING":"",n.toneMapping!==bi?dt.tonemapping_pars_fragment:"",n.toneMapping!==bi?wM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,TM("linearToOutputTexel",n.outputColorSpace),RM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),c=qf(c),c=Pm(c,n),c=Lm(c,n),h=qf(h),h=Pm(h,n),h=Lm(h,n),c=Nm(c),h=Nm(h),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=b+_+c,P=b+v+h,V=Rm(o,o.VERTEX_SHADER,D),L=Rm(o,o.FRAGMENT_SHADER,P);o.attachShader(C,V),o.attachShader(C,L),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(F){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(C)||"",oe=o.getShaderInfoLog(V)||"",de=o.getShaderInfoLog(L)||"",W=Y.trim(),q=oe.trim(),j=de.trim();let K=!0,le=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,V,L);else{const ue=bm(o,V,"vertex"),U=bm(o,L,"fragment");yt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+W+`
`+ue+`
`+U)}else W!==""?it("WebGLProgram: Program Info Log:",W):(q===""||j==="")&&(le=!1);le&&(F.diagnostics={runnable:K,programLog:W,vertexShader:{log:q,prefix:_},fragmentShader:{log:j,prefix:v}})}o.deleteShader(V),o.deleteShader(L),T=new bl(o,C),I=PM(o,C)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let I;this.getAttributes=function(){return I===void 0&&O(this),I};let $=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=o.getProgramParameter(C,SM)),$},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=L,this}let jM=0;class YM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new qM(e),n.set(e,r)),r}}class qM{constructor(e){this.id=jM++,this.code=e,this.usedTimes=0}}function $M(s){return s===is||s===Pl||s===Ll}function KM(s,e,n,r,o,u){const c=new ig,h=new YM,p=new Set,m=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(T){return p.add(T),T===0?"uv":`uv${T}`}function C(T,I,$,F,Y,oe){const de=F.fog,W=Y.geometry,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,j=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,K=e.get(T.envMap||q,j),le=K&&K.mapping===Ol?K.image.height:null,ue=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&it("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=U!==void 0?U.length:0;let Ie=0;W.morphAttributes.position!==void 0&&(Ie=1),W.morphAttributes.normal!==void 0&&(Ie=2),W.morphAttributes.color!==void 0&&(Ie=3);let Ve,Le,se,ge;if(ue){const st=wi[ue];Ve=st.vertexShader,Le=st.fragmentShader}else Ve=T.vertexShader,Le=T.fragmentShader,h.update(T),se=h.getVertexShaderID(T),ge=h.getFragmentShaderID(T);const ce=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Ze=Y.isInstancedMesh===!0,Qe=Y.isBatchedMesh===!0,It=!!T.map,ut=!!T.matcap,Mt=!!K,Nt=!!T.aoMap,ct=!!T.lightMap,jt=!!T.bumpMap,Ut=!!T.normalMap,dn=!!T.displacementMap,H=!!T.emissiveMap,Ft=!!T.metalnessMap,ft=!!T.roughnessMap,Ct=T.anisotropy>0,De=T.clearcoat>0,kt=T.dispersion>0,R=T.iridescence>0,y=T.sheen>0,Z=T.transmission>0,pe=Ct&&!!T.anisotropyMap,_e=De&&!!T.clearcoatMap,Me=De&&!!T.clearcoatNormalMap,Pe=De&&!!T.clearcoatRoughnessMap,fe=R&&!!T.iridescenceMap,me=R&&!!T.iridescenceThicknessMap,Fe=y&&!!T.sheenColorMap,Be=y&&!!T.sheenRoughnessMap,we=!!T.specularMap,Ee=!!T.specularColorMap,tt=!!T.specularIntensityMap,rt=Z&&!!T.transmissionMap,ht=Z&&!!T.thicknessMap,z=!!T.gradientMap,Ae=!!T.alphaMap,he=T.alphaTest>0,Oe=!!T.alphaHash,Ce=!!T.extensions;let ve=bi;T.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Xe={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Ve,fragmentShader:Le,defines:T.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qe,batchingColor:Qe&&Y._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Y.instanceColor!==null,instancingMorph:Ze&&Y.morphTexture!==null,outputColorSpace:ce===null?s.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:It,matcap:ut,envMap:Mt,envMapMode:Mt&&K.mapping,envMapCubeUVHeight:le,aoMap:Nt,lightMap:ct,bumpMap:jt,normalMap:Ut,displacementMap:dn,emissiveMap:H,normalMapObjectSpace:Ut&&T.normalMapType===F_,normalMapTangentSpace:Ut&&T.normalMapType===Wp,packedNormalMap:Ut&&T.normalMapType===Wp&&$M(T.normalMap.format),metalnessMap:Ft,roughnessMap:ft,anisotropy:Ct,anisotropyMap:pe,clearcoat:De,clearcoatMap:_e,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:kt,iridescence:R,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:y,sheenColorMap:Fe,sheenRoughnessMap:Be,specularMap:we,specularColorMap:Ee,specularIntensityMap:tt,transmission:Z,transmissionMap:rt,thicknessMap:ht,gradientMap:z,opaque:T.transparent===!1&&T.blending===Xs&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:he,alphaHash:Oe,combine:T.combine,mapUv:It&&A(T.map.channel),aoMapUv:Nt&&A(T.aoMap.channel),lightMapUv:ct&&A(T.lightMap.channel),bumpMapUv:jt&&A(T.bumpMap.channel),normalMapUv:Ut&&A(T.normalMap.channel),displacementMapUv:dn&&A(T.displacementMap.channel),emissiveMapUv:H&&A(T.emissiveMap.channel),metalnessMapUv:Ft&&A(T.metalnessMap.channel),roughnessMapUv:ft&&A(T.roughnessMap.channel),anisotropyMapUv:pe&&A(T.anisotropyMap.channel),clearcoatMapUv:_e&&A(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&A(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&A(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&A(T.iridescenceMap.channel),iridescenceThicknessMapUv:me&&A(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&A(T.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(T.sheenRoughnessMap.channel),specularMapUv:we&&A(T.specularMap.channel),specularColorMapUv:Ee&&A(T.specularColorMap.channel),specularIntensityMapUv:tt&&A(T.specularIntensityMap.channel),transmissionMapUv:rt&&A(T.transmissionMap.channel),thicknessMapUv:ht&&A(T.thicknessMap.channel),alphaMapUv:Ae&&A(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ut||Ct),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(It||Ae),fog:!!de,useFog:T.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ne,skinning:Y.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ie,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:oe.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:It&&T.map.isVideoTexture===!0&&_t.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:H&&T.emissiveMap.isVideoTexture===!0&&_t.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ki,flipSided:T.side===Bn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ce&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&T.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=p.has(1),Xe.vertexUv2s=p.has(2),Xe.vertexUv3s=p.has(3),p.clear(),Xe}function _(T){const I=[];if(T.shaderID?I.push(T.shaderID):(I.push(T.customVertexShaderID),I.push(T.customFragmentShaderID)),T.defines!==void 0)for(const $ in T.defines)I.push($),I.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(v(I,T),b(I,T),I.push(s.outputColorSpace)),I.push(T.customProgramCacheKey),I.join()}function v(T,I){T.push(I.precision),T.push(I.outputColorSpace),T.push(I.envMapMode),T.push(I.envMapCubeUVHeight),T.push(I.mapUv),T.push(I.alphaMapUv),T.push(I.lightMapUv),T.push(I.aoMapUv),T.push(I.bumpMapUv),T.push(I.normalMapUv),T.push(I.displacementMapUv),T.push(I.emissiveMapUv),T.push(I.metalnessMapUv),T.push(I.roughnessMapUv),T.push(I.anisotropyMapUv),T.push(I.clearcoatMapUv),T.push(I.clearcoatNormalMapUv),T.push(I.clearcoatRoughnessMapUv),T.push(I.iridescenceMapUv),T.push(I.iridescenceThicknessMapUv),T.push(I.sheenColorMapUv),T.push(I.sheenRoughnessMapUv),T.push(I.specularMapUv),T.push(I.specularColorMapUv),T.push(I.specularIntensityMapUv),T.push(I.transmissionMapUv),T.push(I.thicknessMapUv),T.push(I.combine),T.push(I.fogExp2),T.push(I.sizeAttenuation),T.push(I.morphTargetsCount),T.push(I.morphAttributeCount),T.push(I.numDirLights),T.push(I.numPointLights),T.push(I.numSpotLights),T.push(I.numSpotLightMaps),T.push(I.numHemiLights),T.push(I.numRectAreaLights),T.push(I.numDirLightShadows),T.push(I.numPointLightShadows),T.push(I.numSpotLightShadows),T.push(I.numSpotLightShadowsWithMaps),T.push(I.numLightProbes),T.push(I.shadowMapType),T.push(I.toneMapping),T.push(I.numClippingPlanes),T.push(I.numClipIntersection),T.push(I.depthPacking)}function b(T,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function D(T){const I=M[T.type];let $;if(I){const F=wi[I];$=Sv.clone(F.uniforms)}else $=T.uniforms;return $}function P(T,I){let $=x.get(I);return $!==void 0?++$.usedTimes:($=new XM(s,I,T,o),m.push($),x.set(I,$)),$}function V(T){if(--T.usedTimes===0){const I=m.indexOf(T);m[I]=m[m.length-1],m.pop(),x.delete(T.cacheKey),T.destroy()}}function L(T){h.remove(T)}function O(){h.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:D,acquireProgram:P,releaseProgram:V,releaseShaderCache:L,programs:m,dispose:O}}function ZM(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let h=s.get(c);return h===void 0&&(h={},s.set(c,h)),h}function r(c){s.delete(c)}function o(c,h,p){s.get(c)[h]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function QM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Im(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Um(){const s=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,A,C,_,v){let b=s[e];return b===void 0?(b={id:g.id,object:g,geometry:M,material:A,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:v},s[e]=b):(b.id=g.id,b.object=g,b.geometry=M,b.material=A,b.materialVariant=c(g),b.groupOrder=C,b.renderOrder=g.renderOrder,b.z=_,b.group=v),e++,b}function p(g,M,A,C,_,v){const b=h(g,M,A,C,_,v);A.transmission>0?r.push(b):A.transparent===!0?o.push(b):n.push(b)}function m(g,M,A,C,_,v){const b=h(g,M,A,C,_,v);A.transmission>0?r.unshift(b):A.transparent===!0?o.unshift(b):n.unshift(b)}function x(g,M){n.length>1&&n.sort(g||QM),r.length>1&&r.sort(M||Im),o.length>1&&o.sort(M||Im)}function S(){for(let g=e,M=s.length;g<M;g++){const A=s[g];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:p,unshift:m,finish:S,sort:x}}function JM(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Um,s.set(r,[c])):o>=u.length?(c=new Um,u.push(c)):c=u[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function eE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new wt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function tE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let nE=0;function iE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function rE(s){const e=new eE,n=tE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,u=new sn,c=new sn;function h(m){let x=0,S=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let M=0,A=0,C=0,_=0,v=0,b=0,D=0,P=0,V=0,L=0,O=0;m.sort(iE);for(let I=0,$=m.length;I<$;I++){const F=m[I],Y=F.color,oe=F.intensity,de=F.distance;let W=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===is?W=F.shadow.map.texture:W=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)x+=Y.r*oe,S+=Y.g*oe,g+=Y.b*oe;else if(F.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(F.sh.coefficients[q],oe);O++}else if(F.isDirectionalLight){const q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,K=n.get(F);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,r.directionalShadow[M]=K,r.directionalShadowMap[M]=W,r.directionalShadowMatrix[M]=F.shadow.matrix,b++}r.directional[M]=q,M++}else if(F.isSpotLight){const q=e.get(F);q.position.setFromMatrixPosition(F.matrixWorld),q.color.copy(Y).multiplyScalar(oe),q.distance=de,q.coneCos=Math.cos(F.angle),q.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),q.decay=F.decay,r.spot[C]=q;const j=F.shadow;if(F.map&&(r.spotLightMap[V]=F.map,V++,j.updateMatrices(F),F.castShadow&&L++),r.spotLightMatrix[C]=j.matrix,F.castShadow){const K=n.get(F);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,r.spotShadow[C]=K,r.spotShadowMap[C]=W,P++}C++}else if(F.isRectAreaLight){const q=e.get(F);q.color.copy(Y).multiplyScalar(oe),q.halfWidth.set(F.width*.5,0,0),q.halfHeight.set(0,F.height*.5,0),r.rectArea[_]=q,_++}else if(F.isPointLight){const q=e.get(F);if(q.color.copy(F.color).multiplyScalar(F.intensity),q.distance=F.distance,q.decay=F.decay,F.castShadow){const j=F.shadow,K=n.get(F);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,r.pointShadow[A]=K,r.pointShadowMap[A]=W,r.pointShadowMatrix[A]=F.shadow.matrix,D++}r.point[A]=q,A++}else if(F.isHemisphereLight){const q=e.get(F);q.skyColor.copy(F.color).multiplyScalar(oe),q.groundColor.copy(F.groundColor).multiplyScalar(oe),r.hemi[v]=q,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==A||T.spotLength!==C||T.rectAreaLength!==_||T.hemiLength!==v||T.numDirectionalShadows!==b||T.numPointShadows!==D||T.numSpotShadows!==P||T.numSpotMaps!==V||T.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=_,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=P+V-L,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,T.directionalLength=M,T.pointLength=A,T.spotLength=C,T.rectAreaLength=_,T.hemiLength=v,T.numDirectionalShadows=b,T.numPointShadows=D,T.numSpotShadows=P,T.numSpotMaps=V,T.numLightProbes=O,r.version=nE++)}function p(m,x){let S=0,g=0,M=0,A=0,C=0;const _=x.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const D=m[v];if(D.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),S++}else if(D.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(_),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(_),M++}else if(D.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(_),c.identity(),u.copy(D.matrixWorld),u.premultiply(_),c.extractRotation(u),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),A++}else if(D.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(_),g++}else if(D.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(_),C++}}}return{setup:h,setupView:p,state:r}}function Fm(s){const e=new rE(s),n=[],r=[],o=[];function u(g){S.camera=g,n.length=0,r.length=0,o.length=0}function c(g){n.push(g)}function h(g){r.push(g)}function p(g){o.push(g)}function m(){e.setup(n)}function x(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:S,setupLights:m,setupLightsView:x,pushLight:c,pushShadow:h,pushLightProbeGrid:p}}function sE(s){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let h;return c===void 0?(h=new Fm(s),e.set(o,[h])):u>=c.length?(h=new Fm(s),c.push(h)):h=c[u],h}function r(){e=new WeakMap}return{get:n,dispose:r}}const aE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,lE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],uE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Om=new sn,Ha=new ie,tf=new ie;function cE(s,e,n){let r=new lg;const o=new Rt,u=new Rt,c=new Qt,h=new Tv,p=new Av,m={},x=n.maxTextureSize,S={[Lr]:Bn,[Bn]:Lr,[Ki]:Ki},g=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:aE,fragmentShader:oE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const A=new ir;A.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Di(A,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tl;let v=this.type;this.render=function(L,O,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;this.type===h_&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tl);const I=s.getRenderTarget(),$=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(Qi),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const oe=v!==this.type;oe&&O.traverse(function(de){de.material&&(Array.isArray(de.material)?de.material.forEach(W=>W.needsUpdate=!0):de.material.needsUpdate=!0)});for(let de=0,W=L.length;de<W;de++){const q=L[de],j=q.shadow;if(j===void 0){it("WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const K=j.getFrameExtents();o.multiply(K),u.copy(j.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(u.x=Math.floor(x/K.x),o.x=u.x*K.x,j.mapSize.x=u.x),o.y>x&&(u.y=Math.floor(x/K.y),o.y=u.y*K.y,j.mapSize.y=u.y));const le=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=le,j.map===null||oe===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ga){if(q.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Pi(o.x,o.y,{format:is,type:tr,minFilter:En,magFilter:En,generateMipmaps:!1}),j.map.texture.name=q.name+".shadowMap",j.map.depthTexture=new $s(o.x,o.y,Ri),j.map.depthTexture.name=q.name+".shadowMapDepth",j.map.depthTexture.format=nr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=gn,j.map.depthTexture.magFilter=gn}else q.isPointLight?(j.map=new mg(o.x),j.map.depthTexture=new vv(o.x,Ni)):(j.map=new Pi(o.x,o.y),j.map.depthTexture=new $s(o.x,o.y,Ni)),j.map.depthTexture.name=q.name+".shadowMap",j.map.depthTexture.format=nr,this.type===Tl?(j.map.depthTexture.compareFunction=le?rd:id,j.map.depthTexture.minFilter=En,j.map.depthTexture.magFilter=En):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=gn,j.map.depthTexture.magFilter=gn);j.camera.updateProjectionMatrix()}const ue=j.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ue;U++){if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,U),s.clear();else{U===0&&(s.setRenderTarget(j.map),s.clear());const J=j.getViewport(U);c.set(u.x*J.x,u.y*J.y,u.x*J.z,u.y*J.w),Y.viewport(c)}if(q.isPointLight){const J=j.camera,Ie=j.matrix,Ve=q.distance||J.far;Ve!==J.far&&(J.far=Ve,J.updateProjectionMatrix()),Ha.setFromMatrixPosition(q.matrixWorld),J.position.copy(Ha),tf.copy(J.position),tf.add(lE[U]),J.up.copy(uE[U]),J.lookAt(tf),J.updateMatrixWorld(),Ie.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Om.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Om,J.coordinateSystem,J.reversedDepth)}else j.updateMatrices(q);r=j.getFrustum(),P(O,T,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===Ga&&b(j,T),j.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(I,$,F)};function b(L,O){const T=e.update(C);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Pi(o.x,o.y,{format:is,type:tr})),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,T,g,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,T,M,C,null)}function D(L,O,T,I){let $=null;const F=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)$=F;else if($=T.isPointLight===!0?p:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=$.uuid,oe=O.uuid;let de=m[Y];de===void 0&&(de={},m[Y]=de);let W=de[oe];W===void 0&&(W=$.clone(),de[oe]=W,O.addEventListener("dispose",V)),$=W}if($.visible=O.visible,$.wireframe=O.wireframe,I===Ga?$.side=O.shadowSide!==null?O.shadowSide:O.side:$.side=O.shadowSide!==null?O.shadowSide:S[O.side],$.alphaMap=O.alphaMap,$.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,$.map=O.map,$.clipShadows=O.clipShadows,$.clippingPlanes=O.clippingPlanes,$.clipIntersection=O.clipIntersection,$.displacementMap=O.displacementMap,$.displacementScale=O.displacementScale,$.displacementBias=O.displacementBias,$.wireframeLinewidth=O.wireframeLinewidth,$.linewidth=O.linewidth,T.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const Y=s.properties.get($);Y.light=T}return $}function P(L,O,T,I,$){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&$===Ga)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const oe=e.update(L),de=L.material;if(Array.isArray(de)){const W=oe.groups;for(let q=0,j=W.length;q<j;q++){const K=W[q],le=de[K.materialIndex];if(le&&le.visible){const ue=D(L,le,I,$);L.onBeforeShadow(s,L,O,T,oe,ue,K),s.renderBufferDirect(T,null,oe,ue,L,K),L.onAfterShadow(s,L,O,T,oe,ue,K)}}}else if(de.visible){const W=D(L,de,I,$);L.onBeforeShadow(s,L,O,T,oe,W,null),s.renderBufferDirect(T,null,oe,W,L,null),L.onAfterShadow(s,L,O,T,oe,W,null)}}const Y=L.children;for(let oe=0,de=Y.length;oe<de;oe++)P(Y[oe],O,T,I,$)}function V(L){L.target.removeEventListener("dispose",V);for(const T in m){const I=m[T],$=L.target.uuid;$ in I&&(I[$].dispose(),delete I[$])}}}function fE(s,e){function n(){let z=!1;const Ae=new Qt;let he=null;const Oe=new Qt(0,0,0,0);return{setMask:function(Ce){he!==Ce&&!z&&(s.colorMask(Ce,Ce,Ce,Ce),he=Ce)},setLocked:function(Ce){z=Ce},setClear:function(Ce,ve,Xe,st,Dt){Dt===!0&&(Ce*=st,ve*=st,Xe*=st),Ae.set(Ce,ve,Xe,st),Oe.equals(Ae)===!1&&(s.clearColor(Ce,ve,Xe,st),Oe.copy(Ae))},reset:function(){z=!1,he=null,Oe.set(-1,0,0,0)}}}function r(){let z=!1,Ae=!1,he=null,Oe=null,Ce=null;return{setReversed:function(ve){if(Ae!==ve){const Xe=e.get("EXT_clip_control");ve?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const st=Ce;Ce=null,this.setClear(st)}},getReversed:function(){return Ae},setTest:function(ve){ve?ce(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(ve){he!==ve&&!z&&(s.depthMask(ve),he=ve)},setFunc:function(ve){if(Ae&&(ve=j_[ve]),Oe!==ve){switch(ve){case af:s.depthFunc(s.NEVER);break;case of:s.depthFunc(s.ALWAYS);break;case lf:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case uf:s.depthFunc(s.EQUAL);break;case cf:s.depthFunc(s.GEQUAL);break;case ff:s.depthFunc(s.GREATER);break;case df:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=ve}},setLocked:function(ve){z=ve},setClear:function(ve){Ce!==ve&&(Ce=ve,Ae&&(ve=1-ve),s.clearDepth(ve))},reset:function(){z=!1,he=null,Oe=null,Ce=null,Ae=!1}}}function o(){let z=!1,Ae=null,he=null,Oe=null,Ce=null,ve=null,Xe=null,st=null,Dt=null;return{setTest:function(Et){z||(Et?ce(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Et){Ae!==Et&&!z&&(s.stencilMask(Et),Ae=Et)},setFunc:function(Et,Tn,jn){(he!==Et||Oe!==Tn||Ce!==jn)&&(s.stencilFunc(Et,Tn,jn),he=Et,Oe=Tn,Ce=jn)},setOp:function(Et,Tn,jn){(ve!==Et||Xe!==Tn||st!==jn)&&(s.stencilOp(Et,Tn,jn),ve=Et,Xe=Tn,st=jn)},setLocked:function(Et){z=Et},setClear:function(Et){Dt!==Et&&(s.clearStencil(Et),Dt=Et)},reset:function(){z=!1,Ae=null,he=null,Oe=null,Ce=null,ve=null,Xe=null,st=null,Dt=null}}}const u=new n,c=new r,h=new o,p=new WeakMap,m=new WeakMap;let x={},S={},g={},M=new WeakMap,A=[],C=null,_=!1,v=null,b=null,D=null,P=null,V=null,L=null,O=null,T=new wt(0,0,0),I=0,$=!1,F=null,Y=null,oe=null,de=null,W=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const le=s.getParameter(s.VERSION);le.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(le)[1]),j=K>=1):le.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),j=K>=2);let ue=null,U={};const J=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),Ve=new Qt().fromArray(J),Le=new Qt().fromArray(Ie);function se(z,Ae,he,Oe){const Ce=new Uint8Array(4),ve=s.createTexture();s.bindTexture(z,ve),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<he;Xe++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Ce):s.texImage2D(Ae+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ce);return ve}const ge={};ge[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),h.setClear(0),ce(s.DEPTH_TEST),c.setFunc(Ys),jt(!1),Ut(zp),ce(s.CULL_FACE),Nt(Qi);function ce(z){x[z]!==!0&&(s.enable(z),x[z]=!0)}function Ne(z){x[z]!==!1&&(s.disable(z),x[z]=!1)}function Ze(z,Ae){return g[z]!==Ae?(s.bindFramebuffer(z,Ae),g[z]=Ae,z===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),z===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Qe(z,Ae){let he=A,Oe=!1;if(z){he=M.get(Ae),he===void 0&&(he=[],M.set(Ae,he));const Ce=z.textures;if(he.length!==Ce.length||he[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Xe=Ce.length;ve<Xe;ve++)he[ve]=s.COLOR_ATTACHMENT0+ve;he.length=Ce.length,Oe=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(he)}function It(z){return C!==z?(s.useProgram(z),C=z,!0):!1}const ut={[Qr]:s.FUNC_ADD,[m_]:s.FUNC_SUBTRACT,[g_]:s.FUNC_REVERSE_SUBTRACT};ut[__]=s.MIN,ut[v_]=s.MAX;const Mt={[x_]:s.ZERO,[S_]:s.ONE,[y_]:s.SRC_COLOR,[rf]:s.SRC_ALPHA,[R_]:s.SRC_ALPHA_SATURATE,[A_]:s.DST_COLOR,[E_]:s.DST_ALPHA,[M_]:s.ONE_MINUS_SRC_COLOR,[sf]:s.ONE_MINUS_SRC_ALPHA,[w_]:s.ONE_MINUS_DST_COLOR,[T_]:s.ONE_MINUS_DST_ALPHA,[C_]:s.CONSTANT_COLOR,[b_]:s.ONE_MINUS_CONSTANT_COLOR,[P_]:s.CONSTANT_ALPHA,[L_]:s.ONE_MINUS_CONSTANT_ALPHA};function Nt(z,Ae,he,Oe,Ce,ve,Xe,st,Dt,Et){if(z===Qi){_===!0&&(Ne(s.BLEND),_=!1);return}if(_===!1&&(ce(s.BLEND),_=!0),z!==p_){if(z!==v||Et!==$){if((b!==Qr||V!==Qr)&&(s.blendEquation(s.FUNC_ADD),b=Qr,V=Qr),Et)switch(z){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vp:s.blendFunc(s.ONE,s.ONE);break;case Hp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Gp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:yt("WebGLState: Invalid blending: ",z);break}else switch(z){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Hp:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gp:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",z);break}D=null,P=null,L=null,O=null,T.set(0,0,0),I=0,v=z,$=Et}return}Ce=Ce||Ae,ve=ve||he,Xe=Xe||Oe,(Ae!==b||Ce!==V)&&(s.blendEquationSeparate(ut[Ae],ut[Ce]),b=Ae,V=Ce),(he!==D||Oe!==P||ve!==L||Xe!==O)&&(s.blendFuncSeparate(Mt[he],Mt[Oe],Mt[ve],Mt[Xe]),D=he,P=Oe,L=ve,O=Xe),(st.equals(T)===!1||Dt!==I)&&(s.blendColor(st.r,st.g,st.b,Dt),T.copy(st),I=Dt),v=z,$=!1}function ct(z,Ae){z.side===Ki?Ne(s.CULL_FACE):ce(s.CULL_FACE);let he=z.side===Bn;Ae&&(he=!he),jt(he),z.blending===Xs&&z.transparent===!1?Nt(Qi):Nt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),u.setMask(z.colorWrite);const Oe=z.stencilWrite;h.setTest(Oe),Oe&&(h.setMask(z.stencilWriteMask),h.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),h.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),H(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(z){F!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),F=z)}function Ut(z){z!==f_?(ce(s.CULL_FACE),z!==Y&&(z===zp?s.cullFace(s.BACK):z===d_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),Y=z}function dn(z){z!==oe&&(j&&s.lineWidth(z),oe=z)}function H(z,Ae,he){z?(ce(s.POLYGON_OFFSET_FILL),(de!==Ae||W!==he)&&(de=Ae,W=he,c.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,he))):Ne(s.POLYGON_OFFSET_FILL)}function Ft(z){z?ce(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function ft(z){z===void 0&&(z=s.TEXTURE0+q-1),ue!==z&&(s.activeTexture(z),ue=z)}function Ct(z,Ae,he){he===void 0&&(ue===null?he=s.TEXTURE0+q-1:he=ue);let Oe=U[he];Oe===void 0&&(Oe={type:void 0,texture:void 0},U[he]=Oe),(Oe.type!==z||Oe.texture!==Ae)&&(ue!==he&&(s.activeTexture(he),ue=he),s.bindTexture(z,Ae||ge[z]),Oe.type=z,Oe.texture=Ae)}function De(){const z=U[ue];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function kt(){try{s.compressedTexImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function R(){try{s.compressedTexImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function y(){try{s.texSubImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function Z(){try{s.texSubImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function _e(){try{s.compressedTexSubImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function Me(){try{s.texStorage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function Pe(){try{s.texStorage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function fe(){try{s.texImage2D(...arguments)}catch(z){yt("WebGLState:",z)}}function me(){try{s.texImage3D(...arguments)}catch(z){yt("WebGLState:",z)}}function Fe(z){return S[z]!==void 0?S[z]:s.getParameter(z)}function Be(z,Ae){S[z]!==Ae&&(s.pixelStorei(z,Ae),S[z]=Ae)}function we(z){Ve.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Ve.copy(z))}function Ee(z){Le.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Le.copy(z))}function tt(z,Ae){let he=m.get(Ae);he===void 0&&(he=new WeakMap,m.set(Ae,he));let Oe=he.get(z);Oe===void 0&&(Oe=s.getUniformBlockIndex(Ae,z.name),he.set(z,Oe))}function rt(z,Ae){const Oe=m.get(Ae).get(z);p.get(Ae)!==Oe&&(s.uniformBlockBinding(Ae,Oe,z.__bindingPointIndex),p.set(Ae,Oe))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},ue=null,U={},g={},M=new WeakMap,A=[],C=null,_=!1,v=null,b=null,D=null,P=null,V=null,L=null,O=null,T=new wt(0,0,0),I=0,$=!1,F=null,Y=null,oe=null,de=null,W=null,Ve.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),h.reset()}return{buffers:{color:u,depth:c,stencil:h},enable:ce,disable:Ne,bindFramebuffer:Ze,drawBuffers:Qe,useProgram:It,setBlending:Nt,setMaterial:ct,setFlipSided:jt,setCullFace:Ut,setLineWidth:dn,setPolygonOffset:H,setScissorTest:Ft,activeTexture:ft,bindTexture:Ct,unbindTexture:De,compressedTexImage2D:kt,compressedTexImage3D:R,texImage2D:fe,texImage3D:me,pixelStorei:Be,getParameter:Fe,updateUBOMapping:tt,uniformBlockBinding:rt,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:y,texSubImage3D:Z,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:we,viewport:Ee,reset:ht}}function dE(s,e,n,r,o,u,c){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,x=new WeakMap,S=new Set;let g;const M=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(R,y){return A?new OffscreenCanvas(R,y):Ul("canvas")}function _(R,y,Z){let pe=1;const _e=kt(R);if((_e.width>Z||_e.height>Z)&&(pe=Z/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Me=Math.floor(pe*_e.width),Pe=Math.floor(pe*_e.height);g===void 0&&(g=C(Me,Pe));const fe=y?C(Me,Pe):g;return fe.width=Me,fe.height=Pe,fe.getContext("2d").drawImage(R,0,0,Me,Pe),it("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+Me+"x"+Pe+")."),fe}else return"data"in R&&it("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),R;return R}function v(R){return R.generateMipmaps}function b(R){s.generateMipmap(R)}function D(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(R,y,Z,pe,_e,Me=!1){if(R!==null){if(s[R]!==void 0)return s[R];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Pe;pe&&(Pe=e.get("EXT_texture_norm16"),Pe||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=y;if(y===s.RED&&(Z===s.FLOAT&&(fe=s.R32F),Z===s.HALF_FLOAT&&(fe=s.R16F),Z===s.UNSIGNED_BYTE&&(fe=s.R8),Z===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),Z===s.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),y===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.R8UI),Z===s.UNSIGNED_SHORT&&(fe=s.R16UI),Z===s.UNSIGNED_INT&&(fe=s.R32UI),Z===s.BYTE&&(fe=s.R8I),Z===s.SHORT&&(fe=s.R16I),Z===s.INT&&(fe=s.R32I)),y===s.RG&&(Z===s.FLOAT&&(fe=s.RG32F),Z===s.HALF_FLOAT&&(fe=s.RG16F),Z===s.UNSIGNED_BYTE&&(fe=s.RG8),Z===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),Z===s.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RG8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RG16UI),Z===s.UNSIGNED_INT&&(fe=s.RG32UI),Z===s.BYTE&&(fe=s.RG8I),Z===s.SHORT&&(fe=s.RG16I),Z===s.INT&&(fe=s.RG32I)),y===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),Z===s.UNSIGNED_INT&&(fe=s.RGB32UI),Z===s.BYTE&&(fe=s.RGB8I),Z===s.SHORT&&(fe=s.RGB16I),Z===s.INT&&(fe=s.RGB32I)),y===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),Z===s.UNSIGNED_INT&&(fe=s.RGBA32UI),Z===s.BYTE&&(fe=s.RGBA8I),Z===s.SHORT&&(fe=s.RGBA16I),Z===s.INT&&(fe=s.RGBA32I)),y===s.RGB&&(Z===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),Z===s.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),y===s.RGBA){const me=Me?Dl:_t.getTransfer(_e);Z===s.FLOAT&&(fe=s.RGBA32F),Z===s.HALF_FLOAT&&(fe=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(fe=me===Lt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),Z===s.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function V(R,y){let Z;return R?y===null||y===Ni||y===ja?Z=s.DEPTH24_STENCIL8:y===Ri?Z=s.DEPTH32F_STENCIL8:y===Xa&&(Z=s.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===ja?Z=s.DEPTH_COMPONENT24:y===Ri?Z=s.DEPTH_COMPONENT32F:y===Xa&&(Z=s.DEPTH_COMPONENT16),Z}function L(R,y){return v(R)===!0||R.isFramebufferTexture&&R.minFilter!==gn&&R.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function O(R){const y=R.target;y.removeEventListener("dispose",O),I(y),y.isVideoTexture&&x.delete(y),y.isHTMLTexture&&S.delete(y)}function T(R){const y=R.target;y.removeEventListener("dispose",T),F(y)}function I(R){const y=r.get(R);if(y.__webglInit===void 0)return;const Z=R.source,pe=M.get(Z);if(pe){const _e=pe[y.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&$(R),Object.keys(pe).length===0&&M.delete(Z)}r.remove(R)}function $(R){const y=r.get(R);s.deleteTexture(y.__webglTexture);const Z=R.source,pe=M.get(Z);delete pe[y.__cacheKey],c.memory.textures--}function F(R){const y=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(y.__webglFramebuffer[pe]))for(let _e=0;_e<y.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(y.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(y.__webglFramebuffer[pe]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[pe])}else{if(Array.isArray(y.__webglFramebuffer))for(let pe=0;pe<y.__webglFramebuffer.length;pe++)s.deleteFramebuffer(y.__webglFramebuffer[pe]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pe=0;pe<y.__webglColorRenderbuffer.length;pe++)y.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[pe]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=R.textures;for(let pe=0,_e=Z.length;pe<_e;pe++){const Me=r.get(Z[pe]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(Z[pe])}r.remove(R)}let Y=0;function oe(){Y=0}function de(){return Y}function W(R){Y=R}function q(){const R=Y;return R>=o.maxTextures&&it("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),Y+=1,R}function j(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function K(R,y){const Z=r.get(R);if(R.isVideoTexture&&Ct(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Z.__version!==R.version){const pe=R.image;if(pe===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(Z,R,y);return}}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+y)}function le(R,y){const Z=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Ne(Z,R,y);return}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+y)}function ue(R,y){const Z=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Ne(Z,R,y);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+y)}function U(R,y){const Z=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Z.__version!==R.version){Ze(Z,R,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+y)}const J={[hf]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[pf]:s.MIRRORED_REPEAT},Ie={[gn]:s.NEAREST,[I_]:s.NEAREST_MIPMAP_NEAREST,[tl]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Ac]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},Ve={[O_]:s.NEVER,[H_]:s.ALWAYS,[B_]:s.LESS,[id]:s.LEQUAL,[k_]:s.EQUAL,[rd]:s.GEQUAL,[z_]:s.GREATER,[V_]:s.NOTEQUAL};function Le(R,y){if(y.type===Ri&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===Ac||y.magFilter===tl||y.magFilter===es||y.minFilter===En||y.minFilter===Ac||y.minFilter===tl||y.minFilter===es)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,J[y.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Ie[y.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Ie[y.minFilter]),y.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==tl&&y.minFilter!==es||y.type===Ri&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function se(R,y){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",O));const pe=y.source;let _e=M.get(pe);_e===void 0&&(_e={},M.set(pe,_e));const Me=j(y);if(Me!==R.__cacheKey){_e[Me]===void 0&&(_e[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,Z=!0),_e[Me].usedTimes++;const Pe=_e[R.__cacheKey];Pe!==void 0&&(_e[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&$(y)),R.__cacheKey=Me,R.__webglTexture=_e[Me].texture}return Z}function ge(R,y,Z){return Math.floor(Math.floor(R/Z)/y)}function ce(R,y,Z,pe){const Me=R.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,Z,pe,y.data);else{Me.sort((Be,we)=>Be.start-we.start);let Pe=0;for(let Be=1;Be<Me.length;Be++){const we=Me[Pe],Ee=Me[Be],tt=we.start+we.count,rt=ge(Ee.start,y.width,4),ht=ge(we.start,y.width,4);Ee.start<=tt+1&&rt===ht&&ge(Ee.start+Ee.count-1,y.width,4)===rt?we.count=Math.max(we.count,Ee.start+Ee.count-we.start):(++Pe,Me[Pe]=Ee)}Me.length=Pe+1;const fe=n.getParameter(s.UNPACK_ROW_LENGTH),me=n.getParameter(s.UNPACK_SKIP_PIXELS),Fe=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Be=0,we=Me.length;Be<we;Be++){const Ee=Me[Be],tt=Math.floor(Ee.start/4),rt=Math.ceil(Ee.count/4),ht=tt%y.width,z=Math.floor(tt/y.width),Ae=rt,he=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),n.pixelStorei(s.UNPACK_SKIP_ROWS,z),n.texSubImage2D(s.TEXTURE_2D,0,ht,z,Ae,he,Z,pe,y.data)}R.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,fe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,me),n.pixelStorei(s.UNPACK_SKIP_ROWS,Fe)}}function Ne(R,y,Z){let pe=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=se(R,y),Me=y.source;n.bindTexture(pe,R.__webglTexture,s.TEXTURE0+Z);const Pe=r.get(Me);if(Me.version!==Pe.__version||_e===!0){if(n.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const he=_t.getPrimaries(_t.workingColorSpace),Oe=y.colorSpace===br?null:_t.getPrimaries(y.colorSpace),Ce=y.colorSpace===br||he===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce)}n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let me=_(y.image,!1,o.maxTextureSize);me=De(y,me);const Fe=u.convert(y.format,y.colorSpace),Be=u.convert(y.type);let we=P(y.internalFormat,Fe,Be,y.normalized,y.colorSpace,y.isVideoTexture);Le(pe,y);let Ee;const tt=y.mipmaps,rt=y.isVideoTexture!==!0,ht=Pe.__version===void 0||_e===!0,z=Me.dataReady,Ae=L(y,me);if(y.isDepthTexture)we=V(y.format===ts,y.type),ht&&(rt?n.texStorage2D(s.TEXTURE_2D,1,we,me.width,me.height):n.texImage2D(s.TEXTURE_2D,0,we,me.width,me.height,0,Fe,Be,null));else if(y.isDataTexture)if(tt.length>0){rt&&ht&&n.texStorage2D(s.TEXTURE_2D,Ae,we,tt[0].width,tt[0].height);for(let he=0,Oe=tt.length;he<Oe;he++)Ee=tt[he],rt?z&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Fe,Be,Ee.data):n.texImage2D(s.TEXTURE_2D,he,we,Ee.width,Ee.height,0,Fe,Be,Ee.data);y.generateMipmaps=!1}else rt?(ht&&n.texStorage2D(s.TEXTURE_2D,Ae,we,me.width,me.height),z&&ce(y,me,Fe,Be)):n.texImage2D(s.TEXTURE_2D,0,we,me.width,me.height,0,Fe,Be,me.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&ht&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,we,tt[0].width,tt[0].height,me.depth);for(let he=0,Oe=tt.length;he<Oe;he++)if(Ee=tt[he],y.format!==mi)if(Fe!==null)if(rt){if(z)if(y.layerUpdates.size>0){const Ce=pm(Ee.width,Ee.height,y.format,y.type);for(const ve of y.layerUpdates){const Xe=Ee.data.subarray(ve*Ce/Ee.data.BYTES_PER_ELEMENT,(ve+1)*Ce/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,ve,Ee.width,Ee.height,1,Fe,Xe)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,me.depth,Fe,Ee.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,we,Ee.width,Ee.height,me.depth,0,Ee.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?z&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ee.width,Ee.height,me.depth,Fe,Be,Ee.data):n.texImage3D(s.TEXTURE_2D_ARRAY,he,we,Ee.width,Ee.height,me.depth,0,Fe,Be,Ee.data)}else{rt&&ht&&n.texStorage2D(s.TEXTURE_2D,Ae,we,tt[0].width,tt[0].height);for(let he=0,Oe=tt.length;he<Oe;he++)Ee=tt[he],y.format!==mi?Fe!==null?rt?z&&n.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Fe,Ee.data):n.compressedTexImage2D(s.TEXTURE_2D,he,we,Ee.width,Ee.height,0,Ee.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?z&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Ee.width,Ee.height,Fe,Be,Ee.data):n.texImage2D(s.TEXTURE_2D,he,we,Ee.width,Ee.height,0,Fe,Be,Ee.data)}else if(y.isDataArrayTexture)if(rt){if(ht&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,we,me.width,me.height,me.depth),z)if(y.layerUpdates.size>0){const he=pm(me.width,me.height,y.format,y.type);for(const Oe of y.layerUpdates){const Ce=me.data.subarray(Oe*he/me.data.BYTES_PER_ELEMENT,(Oe+1)*he/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Oe,me.width,me.height,1,Fe,Be,Ce)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Fe,Be,me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,we,me.width,me.height,me.depth,0,Fe,Be,me.data);else if(y.isData3DTexture)rt?(ht&&n.texStorage3D(s.TEXTURE_3D,Ae,we,me.width,me.height,me.depth),z&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Fe,Be,me.data)):n.texImage3D(s.TEXTURE_3D,0,we,me.width,me.height,me.depth,0,Fe,Be,me.data);else if(y.isFramebufferTexture){if(ht)if(rt)n.texStorage2D(s.TEXTURE_2D,Ae,we,me.width,me.height);else{let he=me.width,Oe=me.height;for(let Ce=0;Ce<Ae;Ce++)n.texImage2D(s.TEXTURE_2D,Ce,we,he,Oe,0,Fe,Be,null),he>>=1,Oe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),me.parentNode!==he){he.appendChild(me),S.add(y),he.onpaint=st=>{const Dt=st.changedElements;for(const Et of S)Dt.includes(Et.image)&&(Et.needsUpdate=!0)},he.requestPaint();return}const Oe=0,Ce=s.RGBA,ve=s.RGBA,Xe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Oe,Ce,ve,Xe,me),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(tt.length>0){if(rt&&ht){const he=kt(tt[0]);n.texStorage2D(s.TEXTURE_2D,Ae,we,he.width,he.height)}for(let he=0,Oe=tt.length;he<Oe;he++)Ee=tt[he],rt?z&&n.texSubImage2D(s.TEXTURE_2D,he,0,0,Fe,Be,Ee):n.texImage2D(s.TEXTURE_2D,he,we,Fe,Be,Ee);y.generateMipmaps=!1}else if(rt){if(ht){const he=kt(me);n.texStorage2D(s.TEXTURE_2D,Ae,we,he.width,he.height)}z&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Be,me)}else n.texImage2D(s.TEXTURE_2D,0,we,Fe,Be,me);v(y)&&b(pe),Pe.__version=Me.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ze(R,y,Z){if(y.image.length!==6)return;const pe=se(R,y),_e=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Z);const Me=r.get(_e);if(_e.version!==Me.__version||pe===!0){n.activeTexture(s.TEXTURE0+Z);const Pe=_t.getPrimaries(_t.workingColorSpace),fe=y.colorSpace===br?null:_t.getPrimaries(y.colorSpace),me=y.colorSpace===br||Pe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,Be=y.image[0]&&y.image[0].isDataTexture,we=[];for(let ve=0;ve<6;ve++)!Fe&&!Be?we[ve]=_(y.image[ve],!0,o.maxCubemapSize):we[ve]=Be?y.image[ve].image:y.image[ve],we[ve]=De(y,we[ve]);const Ee=we[0],tt=u.convert(y.format,y.colorSpace),rt=u.convert(y.type),ht=P(y.internalFormat,tt,rt,y.normalized,y.colorSpace),z=y.isVideoTexture!==!0,Ae=Me.__version===void 0||pe===!0,he=_e.dataReady;let Oe=L(y,Ee);Le(s.TEXTURE_CUBE_MAP,y);let Ce;if(Fe){z&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,ht,Ee.width,Ee.height);for(let ve=0;ve<6;ve++){Ce=we[ve].mipmaps;for(let Xe=0;Xe<Ce.length;Xe++){const st=Ce[Xe];y.format!==mi?tt!==null?z?he&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,st.width,st.height,tt,st.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,ht,st.width,st.height,0,st.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,0,0,st.width,st.height,tt,rt,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe,ht,st.width,st.height,0,tt,rt,st.data)}}}else{if(Ce=y.mipmaps,z&&Ae){Ce.length>0&&Oe++;const ve=kt(we[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Oe,ht,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Be){z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,we[ve].width,we[ve].height,tt,rt,we[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ht,we[ve].width,we[ve].height,0,tt,rt,we[ve].data);for(let Xe=0;Xe<Ce.length;Xe++){const Dt=Ce[Xe].image[ve].image;z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,Dt.width,Dt.height,tt,rt,Dt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,ht,Dt.width,Dt.height,0,tt,rt,Dt.data)}}else{z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,tt,rt,we[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ht,tt,rt,we[ve]);for(let Xe=0;Xe<Ce.length;Xe++){const st=Ce[Xe];z?he&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,0,0,tt,rt,st.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Xe+1,ht,tt,rt,st.image[ve])}}}v(y)&&b(s.TEXTURE_CUBE_MAP),Me.__version=_e.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Qe(R,y,Z,pe,_e,Me){const Pe=u.convert(Z.format,Z.colorSpace),fe=u.convert(Z.type),me=P(Z.internalFormat,Pe,fe,Z.normalized,Z.colorSpace),Fe=r.get(y),Be=r.get(Z);if(Be.__renderTarget=y,!Fe.__hasExternalTextures){const we=Math.max(1,y.width>>Me),Ee=Math.max(1,y.height>>Me);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,Me,me,we,Ee,y.depth,0,Pe,fe,null):n.texImage2D(_e,Me,me,we,Ee,0,Pe,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,R),ft(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,Be.__webglTexture,0,Ft(y)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,Be.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function It(R,y,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),y.depthBuffer){const pe=y.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,Me=V(y.stencilBuffer,_e),Pe=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ft(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(y),Me,y.width,y.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(y),Me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Me,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,R)}else{const pe=y.textures;for(let _e=0;_e<pe.length;_e++){const Me=pe[_e],Pe=u.convert(Me.format,Me.colorSpace),fe=u.convert(Me.type),me=P(Me.internalFormat,Pe,fe,Me.normalized,Me.colorSpace);ft(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(y),me,y.width,y.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(y),me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,me,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(R,y,Z){const pe=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=r.get(y.depthTexture);if(_e.__renderTarget=y,(!_e.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),pe){if(_e.__webglInit===void 0&&(_e.__webglInit=!0,y.depthTexture.addEventListener("dispose",O)),_e.__webglTexture===void 0){_e.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),Le(s.TEXTURE_CUBE_MAP,y.depthTexture);const Fe=u.convert(y.depthTexture.format),Be=u.convert(y.depthTexture.type);let we;y.depthTexture.format===nr?we=s.DEPTH_COMPONENT24:y.depthTexture.format===ts&&(we=s.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,we,y.width,y.height,0,Fe,Be,null)}}else K(y.depthTexture,0);const Me=_e.__webglTexture,Pe=Ft(y),fe=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,me=y.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===nr)ft(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,Me,0);else if(y.depthTexture.format===ts)ft(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,fe,Me,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,me,fe,Me,0);else throw new Error("Unknown depthTexture format")}function Mt(R){const y=r.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const pe=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),pe){const _e=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),y.__depthDisposeCallback=_e}y.__boundDepthTexture=pe}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(Z)for(let pe=0;pe<6;pe++)ut(y.__webglFramebuffer[pe],R,pe);else{const pe=R.texture.mipmaps;pe&&pe.length>0?ut(y.__webglFramebuffer[0],R,0):ut(y.__webglFramebuffer,R,0)}else if(Z){y.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[pe]),y.__webglDepthbuffer[pe]===void 0)y.__webglDepthbuffer[pe]=s.createRenderbuffer(),It(y.__webglDepthbuffer[pe],R,!1);else{const _e=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Me)}}else{const pe=R.texture.mipmaps;if(pe&&pe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),It(y.__webglDepthbuffer,R,!1);else{const _e=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(R,y,Z){const pe=r.get(R);y!==void 0&&Qe(pe.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Mt(R)}function ct(R){const y=R.texture,Z=r.get(R),pe=r.get(y);R.addEventListener("dispose",T);const _e=R.textures,Me=R.isWebGLCubeRenderTarget===!0,Pe=_e.length>1;if(Pe||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=y.version,c.memory.textures++),Me){Z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer[fe]=[];for(let me=0;me<y.mipmaps.length;me++)Z.__webglFramebuffer[fe][me]=s.createFramebuffer()}else Z.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){Z.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)Z.__webglFramebuffer[fe]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let fe=0,me=_e.length;fe<me;fe++){const Fe=r.get(_e[fe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),c.memory.textures++)}if(R.samples>0&&ft(R)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let fe=0;fe<_e.length;fe++){const me=_e[fe];Z.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[fe]);const Fe=u.convert(me.format,me.colorSpace),Be=u.convert(me.type),we=P(me.internalFormat,Fe,Be,me.normalized,me.colorSpace,R.isXRRenderTarget===!0),Ee=Ft(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,we,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,Z.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),It(Z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),Le(s.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Qe(Z.__webglFramebuffer[fe][me],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else Qe(Z.__webglFramebuffer[fe],R,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(y)&&b(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let fe=0,me=_e.length;fe<me;fe++){const Fe=_e[fe],Be=r.get(Fe);let we=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(we,Be.__webglTexture),Le(we,Fe),Qe(Z.__webglFramebuffer,R,Fe,s.COLOR_ATTACHMENT0+fe,we,0),v(Fe)&&b(we)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(fe,pe.__webglTexture),Le(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let me=0;me<y.mipmaps.length;me++)Qe(Z.__webglFramebuffer[me],R,y,s.COLOR_ATTACHMENT0,fe,me);else Qe(Z.__webglFramebuffer,R,y,s.COLOR_ATTACHMENT0,fe,0);v(y)&&b(fe),n.unbindTexture()}R.depthBuffer&&Mt(R)}function jt(R){const y=R.textures;for(let Z=0,pe=y.length;Z<pe;Z++){const _e=y[Z];if(v(_e)){const Me=D(R),Pe=r.get(_e).__webglTexture;n.bindTexture(Me,Pe),b(Me),n.unbindTexture()}}}const Ut=[],dn=[];function H(R){if(R.samples>0){if(ft(R)===!1){const y=R.textures,Z=R.width,pe=R.height;let _e=s.COLOR_BUFFER_BIT;const Me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(R),fe=y.length>1;if(fe)for(let Fe=0;Fe<y.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const me=R.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Fe=0;Fe<y.length;Fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const Be=r.get(y[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,_e,s.NEAREST),p===!0&&(Ut.length=0,dn.length=0,Ut.push(s.COLOR_ATTACHMENT0+Fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ut.push(Me),dn.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,dn)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Fe=0;Fe<y.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Fe]);const Be=r.get(y[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,Be,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const y=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ft(R){return Math.min(o.maxSamples,R.samples)}function ft(R){const y=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ct(R){const y=c.render.frame;x.get(R)!==y&&(x.set(R,y),R.update())}function De(R,y){const Z=R.colorSpace,pe=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==Nl&&Z!==br&&(_t.getTransfer(Z)===Lt?(pe!==mi||_e!==ti)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",Z)),y}function kt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=oe,this.getTextureUnits=de,this.setTextureUnits=W,this.setTexture2D=K,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=U,this.rebindTextures=Nt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Qe,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function hE(s,e){function n(r,o=br){let u;const c=_t.getTransfer(o);if(r===ti)return s.UNSIGNED_BYTE;if(r===Qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Km)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===qm)return s.BYTE;if(r===$m)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===Zf)return s.INT;if(r===Ni)return s.UNSIGNED_INT;if(r===Ri)return s.FLOAT;if(r===tr)return s.HALF_FLOAT;if(r===Qm)return s.ALPHA;if(r===Jm)return s.RGB;if(r===mi)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===eg)return s.RED;if(r===ed)return s.RED_INTEGER;if(r===is)return s.RG;if(r===td)return s.RG_INTEGER;if(r===nd)return s.RGBA_INTEGER;if(r===Al||r===wl||r===Rl||r===Cl)if(c===Lt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Al)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Al)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===mf||r===gf||r===_f||r===vf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===mf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===gf)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Pl||r===Tf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===xf||r===Sf)return c===Lt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===yf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Mf)return u.COMPRESSED_R11_EAC;if(r===Ef)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Pl)return u.COMPRESSED_RG11_EAC;if(r===Tf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Af||r===wf||r===Rf||r===Cf||r===bf||r===Pf||r===Lf||r===Nf||r===Df||r===If||r===Uf||r===Ff||r===Of||r===Bf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Af)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Df)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===If)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Uf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ff)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Of)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bf)return c===Lt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===kf||r===zf||r===Vf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===kf)return c===Lt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hf||r===Gf||r===Ll||r===Wf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Hf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Gf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ll)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ja?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const pE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new cg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new gi({vertexShader:pE,fragmentShader:mE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Ka(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _E extends ss{constructor(e,n){super();const r=this;let o=null,u=1,c=null,h="local-floor",p=1,m=null,x=null,S=null,g=null,M=null,A=null;const C=typeof XRWebGLBinding<"u",_=new gE,v={},b=n.getContextAttributes();let D=null,P=null;const V=[],L=[],O=new Rt;let T=null;const I=new hi;I.viewport=new Qt;const $=new hi;$.viewport=new Qt;const F=[I,$],Y=new Rv;let oe=null,de=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=V[se];return ge===void 0&&(ge=new Dc,V[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=V[se];return ge===void 0&&(ge=new Dc,V[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=V[se];return ge===void 0&&(ge=new Dc,V[se]=ge),ge.getHandSpace()};function W(se){const ge=L.indexOf(se.inputSource);if(ge===-1)return;const ce=V[ge];ce!==void 0&&(ce.update(se.inputSource,se.frame,m||c),ce.dispatchEvent({type:se.type,data:se.inputSource}))}function q(){o.removeEventListener("select",W),o.removeEventListener("selectstart",W),o.removeEventListener("selectend",W),o.removeEventListener("squeeze",W),o.removeEventListener("squeezestart",W),o.removeEventListener("squeezeend",W),o.removeEventListener("end",q),o.removeEventListener("inputsourceschange",j);for(let se=0;se<V.length;se++){const ge=L[se];ge!==null&&(L[se]=null,V[se].disconnect(ge))}oe=null,de=null,_.reset();for(const se in v)delete v[se];e.setRenderTarget(D),M=null,g=null,S=null,o=null,P=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){u=se,r.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){h=se,r.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(se){m=se},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return A},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",W),o.addEventListener("selectstart",W),o.addEventListener("selectend",W),o.addEventListener("squeeze",W),o.addEventListener("squeezestart",W),o.addEventListener("squeezeend",W),o.addEventListener("end",q),o.addEventListener("inputsourceschange",j),b.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ne=null,Ze=null;b.depth&&(Ze=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=b.stencil?ts:nr,Ne=b.stencil?ja:Ni);const Qe={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:u};S=this.getBinding(),g=S.createProjectionLayer(Qe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Pi(g.textureWidth,g.textureHeight,{format:mi,type:ti,depthTexture:new $s(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,n,ce),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Pi(M.framebufferWidth,M.framebufferHeight,{format:mi,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(h),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(se){for(let ge=0;ge<se.removed.length;ge++){const ce=se.removed[ge],Ne=L.indexOf(ce);Ne>=0&&(L[Ne]=null,V[Ne].disconnect(ce))}for(let ge=0;ge<se.added.length;ge++){const ce=se.added[ge];let Ne=L.indexOf(ce);if(Ne===-1){for(let Qe=0;Qe<V.length;Qe++)if(Qe>=L.length){L.push(ce),Ne=Qe;break}else if(L[Qe]===null){L[Qe]=ce,Ne=Qe;break}if(Ne===-1)break}const Ze=V[Ne];Ze&&Ze.connect(ce)}}const K=new ie,le=new ie;function ue(se,ge,ce){K.setFromMatrixPosition(ge.matrixWorld),le.setFromMatrixPosition(ce.matrixWorld);const Ne=K.distanceTo(le),Ze=ge.projectionMatrix.elements,Qe=ce.projectionMatrix.elements,It=Ze[14]/(Ze[10]-1),ut=Ze[14]/(Ze[10]+1),Mt=(Ze[9]+1)/Ze[5],Nt=(Ze[9]-1)/Ze[5],ct=(Ze[8]-1)/Ze[0],jt=(Qe[8]+1)/Qe[0],Ut=It*ct,dn=It*jt,H=Ne/(-ct+jt),Ft=H*-ct;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ft),se.translateZ(H),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Ze[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const ft=It+H,Ct=ut+H,De=Ut-Ft,kt=dn+(Ne-Ft),R=Mt*ut/Ct*ft,y=Nt*ut/Ct*ft;se.projectionMatrix.makePerspective(De,kt,R,y,ft,Ct),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ge=se.near,ce=se.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(ce=_.depthFar)),Y.near=$.near=I.near=ge,Y.far=$.far=I.far=ce,(oe!==Y.near||de!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),oe=Y.near,de=Y.far),Y.layers.mask=se.layers.mask|6,I.layers.mask=Y.layers.mask&-5,$.layers.mask=Y.layers.mask&-3;const Ne=se.parent,Ze=Y.cameras;U(Y,Ne);for(let Qe=0;Qe<Ze.length;Qe++)U(Ze[Qe],Ne);Ze.length===2?ue(Y,I,$):Y.projectionMatrix.copy(I.projectionMatrix),J(se,Y,Ne)};function J(se,ge,ce){ce===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(ce.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=jf*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(se){p=se,g!==null&&(g.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Y)},this.getCameraTexture=function(se){return v[se]};let Ie=null;function Ve(se,ge){if(x=ge.getViewerPose(m||c),A=ge,x!==null){const ce=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ne=!1;ce.length!==Y.cameras.length&&(Y.cameras.length=0,Ne=!0);for(let ut=0;ut<ce.length;ut++){const Mt=ce[ut];let Nt=null;if(M!==null)Nt=M.getViewport(Mt);else{const jt=S.getViewSubImage(g,Mt);Nt=jt.viewport,ut===0&&(e.setRenderTargetTextures(P,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(P))}let ct=F[ut];ct===void 0&&(ct=new hi,ct.layers.enable(ut),ct.viewport=new Qt,F[ut]=ct),ct.matrix.fromArray(Mt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ut===0&&(Y.matrix.copy(ct.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ne===!0&&Y.cameras.push(ct)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const ut=S.getDepthInformation(ce[0]);ut&&ut.isValid&&ut.texture&&_.init(ut,o.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let ut=0;ut<ce.length;ut++){const Mt=ce[ut].camera;if(Mt){let Nt=v[Mt];Nt||(Nt=new cg,v[Mt]=Nt);const ct=S.getCameraImage(Mt);Nt.sourceTexture=ct}}}}for(let ce=0;ce<V.length;ce++){const Ne=L[ce],Ze=V[ce];Ne!==null&&Ze!==void 0&&Ze.update(Ne,ge,m||c)}Ie&&Ie(se,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),A=null}const Le=new hg;Le.setAnimationLoop(Ve),this.setAnimationLoop=function(se){Ie=se},this.dispose=function(){}}}const vE=new sn,Sg=new lt;Sg.set(-1,0,0,0,1,0,0,0,1);function xE(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,fg(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,b,D,P){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?u(_,v):v.isMeshLambertMaterial?(u(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(u(_,v),S(_,v)):v.isMeshPhongMaterial?(u(_,v),x(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(u(_,v),g(_,v),v.isMeshPhysicalMaterial&&M(_,v,P)):v.isMeshMatcapMaterial?(u(_,v),A(_,v)):v.isMeshDepthMaterial?u(_,v):v.isMeshDistanceMaterial?(u(_,v),C(_,v)):v.isMeshNormalMaterial?u(_,v):v.isLineBasicMaterial?(c(_,v),v.isLineDashedMaterial&&h(_,v)):v.isPointsMaterial?p(_,v,b,D):v.isSpriteMaterial?m(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Bn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Bn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const b=e.get(v),D=b.envMap,P=b.envMapRotation;D&&(_.envMap.value=D,_.envMapRotation.value.setFromMatrix4(vE.makeRotationFromEuler(P)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Sg),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function c(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function h(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,b,D){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*b,_.scale.value=D*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function m(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,b){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Bn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function A(_,v){v.matcap&&(_.matcap.value=v.matcap)}function C(_,v){const b=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function SE(s,e,n,r){let o={},u={},c=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,D){const P=D.program;r.uniformBlockBinding(b,P)}function m(b,D){let P=o[b.id];P===void 0&&(A(b),P=x(b),o[b.id]=P,b.addEventListener("dispose",_));const V=D.program;r.updateUBOMapping(b,V);const L=e.render.frame;u[b.id]!==L&&(g(b),u[b.id]=L)}function x(b){const D=S();b.__bindingPointIndex=D;const P=s.createBuffer(),V=b.__size,L=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,V,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function S(){for(let b=0;b<h;b++)if(c.indexOf(b)===-1)return c.push(b),b;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const D=o[b.id],P=b.uniforms,V=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,O=P.length;L<O;L++){const T=Array.isArray(P[L])?P[L]:[P[L]];for(let I=0,$=T.length;I<$;I++){const F=T[I];if(M(F,L,I,V)===!0){const Y=F.__offset,oe=Array.isArray(F.value)?F.value:[F.value];let de=0;for(let W=0;W<oe.length;W++){const q=oe[W],j=C(q);typeof q=="number"||typeof q=="boolean"?(F.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,Y+de,F.__data)):q.isMatrix3?(F.__data[0]=q.elements[0],F.__data[1]=q.elements[1],F.__data[2]=q.elements[2],F.__data[3]=0,F.__data[4]=q.elements[3],F.__data[5]=q.elements[4],F.__data[6]=q.elements[5],F.__data[7]=0,F.__data[8]=q.elements[6],F.__data[9]=q.elements[7],F.__data[10]=q.elements[8],F.__data[11]=0):ArrayBuffer.isView(q)?F.__data.set(new q.constructor(q.buffer,q.byteOffset,F.__data.length)):(q.toArray(F.__data,de),de+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(b,D,P,V){const L=b.value,O=D+"_"+P;if(V[O]===void 0)return typeof L=="number"||typeof L=="boolean"?V[O]=L:ArrayBuffer.isView(L)?V[O]=L.slice():V[O]=L.clone(),!0;{const T=V[O];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return V[O]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(T.equals(L)===!1)return T.copy(L),!0}}return!1}function A(b){const D=b.uniforms;let P=0;const V=16;for(let O=0,T=D.length;O<T;O++){const I=Array.isArray(D[O])?D[O]:[D[O]];for(let $=0,F=I.length;$<F;$++){const Y=I[$],oe=Array.isArray(Y.value)?Y.value:[Y.value];for(let de=0,W=oe.length;de<W;de++){const q=oe[de],j=C(q),K=P%V,le=K%j.boundary,ue=K+le;P+=le,ue!==0&&V-ue<j.storage&&(P+=V-ue),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=j.storage}}}const L=P%V;return L>0&&(P+=V-L),b.__size=P,b.__cache={},this}function C(b){const D={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(D.boundary=4,D.storage=4):b.isVector2?(D.boundary=8,D.storage=8):b.isVector3||b.isColor?(D.boundary=16,D.storage=12):b.isVector4?(D.boundary=16,D.storage=16):b.isMatrix3?(D.boundary=48,D.storage=48):b.isMatrix4?(D.boundary=64,D.storage=64):b.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(D.boundary=16,D.storage=b.byteLength):it("WebGLRenderer: Unsupported uniform value type.",b),D}function _(b){const D=b.target;D.removeEventListener("dispose",_);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete u[D.id]}function v(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},u={}}return{bind:p,update:m,dispose:v}}const yE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function ME(){return Ti===null&&(Ti=new pv(yE,16,16,is,tr),Ti.name="DFG_LUT",Ti.minFilter=En,Ti.magFilter=En,Ti.wrapS=Zi,Ti.wrapT=Zi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class EE{constructor(e={}){const{canvas:n=W_(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ti}=e;this.isWebGLRenderer=!0;let A;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");A=r.getContextAttributes().alpha}else A=c;const C=M,_=new Set([nd,td,ed]),v=new Set([ti,Ni,Xa,ja,Qf,Jf]),b=new Uint32Array(4),D=new Int32Array(4),P=new ie;let V=null,L=null;const O=[],T=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const $=this;let F=!1,Y=null;this._outputColorSpace=ei;let oe=0,de=0,W=null,q=-1,j=null;const K=new Qt,le=new Qt;let ue=null;const U=new wt(0);let J=0,Ie=n.width,Ve=n.height,Le=1,se=null,ge=null;const ce=new Qt(0,0,Ie,Ve),Ne=new Qt(0,0,Ie,Ve);let Ze=!1;const Qe=new lg;let It=!1,ut=!1;const Mt=new sn,Nt=new ie,ct=new Qt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function dn(){return W===null?Le:1}let H=r;function Ft(w,X){return n.getContext(w,X)}try{const w={alpha:!0,depth:o,stencil:u,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kf}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Xe,!1),n.addEventListener("webglcontextcreationerror",st,!1),H===null){const X="webgl2";if(H=Ft(X,w),H===null)throw Ft(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw yt("WebGLRenderer: "+w.message),w}let ft,Ct,De,kt,R,y,Z,pe,_e,Me,Pe,fe,me,Fe,Be,we,Ee,tt,rt,ht,z,Ae,he;function Oe(){ft=new My(H),ft.init(),z=new hE(H,ft),Ct=new py(H,ft,e,z),De=new fE(H,ft),Ct.reversedDepthBuffer&&g&&De.buffers.depth.setReversed(!0),kt=new Ay(H),R=new ZM,y=new dE(H,ft,De,R,Ct,z,kt),Z=new yy($),pe=new bv(H),Ae=new dy(H,pe),_e=new Ey(H,pe,kt,Ae),Me=new Ry(H,_e,pe,Ae,kt),tt=new wy(H,Ct,y),Be=new my(R),Pe=new KM($,Z,ft,Ct,Ae,Be),fe=new xE($,R),me=new JM,Fe=new sE(ft),Ee=new fy($,Z,De,Me,A,p),we=new cE($,Me,Ct),he=new SE(H,kt,Ct,De),rt=new hy(H,ft,kt),ht=new Ty(H,ft,kt),kt.programs=Pe.programs,$.capabilities=Ct,$.extensions=ft,$.properties=R,$.renderLists=me,$.shadowMap=we,$.state=De,$.info=kt}Oe(),C!==ti&&(I=new by(C,n.width,n.height,o,u));const Ce=new _E($,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(w){w!==void 0&&(Le=w,this.setSize(Ie,Ve,!1))},this.getSize=function(w){return w.set(Ie,Ve)},this.setSize=function(w,X,re=!0){if(Ce.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=w,Ve=X,n.width=Math.floor(w*Le),n.height=Math.floor(X*Le),re===!0&&(n.style.width=w+"px",n.style.height=X+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,w,X)},this.getDrawingBufferSize=function(w){return w.set(Ie*Le,Ve*Le).floor()},this.setDrawingBufferSize=function(w,X,re){Ie=w,Ve=X,Le=re,n.width=Math.floor(w*re),n.height=Math.floor(X*re),this.setViewport(0,0,w,X)},this.setEffects=function(w){if(C===ti){yt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let X=0;X<w.length;X++)if(w[X].isOutputPass===!0){it("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(K)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,X,re,te){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,X,re,te),De.viewport(K.copy(ce).multiplyScalar(Le).round())},this.getScissor=function(w){return w.copy(Ne)},this.setScissor=function(w,X,re,te){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,X,re,te),De.scissor(le.copy(Ne).multiplyScalar(Le).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(w){De.setScissorTest(Ze=w)},this.setOpaqueSort=function(w){se=w},this.setTransparentSort=function(w){ge=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,X=!0,re=!0){let te=0;if(w){let ee=!1;if(W!==null){const be=W.texture.format;ee=_.has(be)}if(ee){const be=W.texture.type,He=v.has(be),Re=Ee.getClearColor(),je=Ee.getClearAlpha(),Ke=Re.r,at=Re.g,ot=Re.b;He?(b[0]=Ke,b[1]=at,b[2]=ot,b[3]=je,H.clearBufferuiv(H.COLOR,0,b)):(D[0]=Ke,D[1]=at,D[2]=ot,D[3]=je,H.clearBufferiv(H.COLOR,0,D))}else te|=H.COLOR_BUFFER_BIT}X&&(te|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),Y=w},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Xe,!1),n.removeEventListener("webglcontextcreationerror",st,!1),Ee.dispose(),me.dispose(),Fe.dispose(),R.dispose(),Z.dispose(),Me.dispose(),Ae.dispose(),he.dispose(),Pe.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Nr),Ce.removeEventListener("sessionend",os),Ui.stop()};function ve(w){w.preventDefault(),$p("WebGLRenderer: Context Lost."),F=!0}function Xe(){$p("WebGLRenderer: Context Restored."),F=!1;const w=kt.autoReset,X=we.enabled,re=we.autoUpdate,te=we.needsUpdate,ee=we.type;Oe(),kt.autoReset=w,we.enabled=X,we.autoUpdate=re,we.needsUpdate=te,we.type=ee}function st(w){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Dt(w){const X=w.target;X.removeEventListener("dispose",Dt),Et(X)}function Et(w){Tn(w),R.remove(w)}function Tn(w){const X=R.get(w).programs;X!==void 0&&(X.forEach(function(re){Pe.releaseProgram(re)}),w.isShaderMaterial&&Pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,X,re,te,ee,be){X===null&&(X=jt);const He=ee.isMesh&&ee.matrixWorld.determinant()<0,Re=Ja(w,X,re,te,ee);De.setMaterial(te,He);let je=re.index,Ke=1;if(te.wireframe===!0){if(je=_e.getWireframeAttribute(re),je===void 0)return;Ke=2}const at=re.drawRange,ot=re.attributes.position;let qe=at.start*Ke,xt=(at.start+at.count)*Ke;be!==null&&(qe=Math.max(qe,be.start*Ke),xt=Math.min(xt,(be.start+be.count)*Ke)),je!==null?(qe=Math.max(qe,0),xt=Math.min(xt,je.count)):ot!=null&&(qe=Math.max(qe,0),xt=Math.min(xt,ot.count));const Ot=xt-qe;if(Ot<0||Ot===1/0)return;Ae.setup(ee,te,Re,re,je);let Gt,bt=rt;if(je!==null&&(Gt=pe.get(je),bt=ht,bt.setIndex(Gt)),ee.isMesh)te.wireframe===!0?(De.setLineWidth(te.wireframeLinewidth*dn()),bt.setMode(H.LINES)):bt.setMode(H.TRIANGLES);else if(ee.isLine){let Jt=te.linewidth;Jt===void 0&&(Jt=1),De.setLineWidth(Jt*dn()),ee.isLineSegments?bt.setMode(H.LINES):ee.isLineLoop?bt.setMode(H.LINE_LOOP):bt.setMode(H.LINE_STRIP)}else ee.isPoints?bt.setMode(H.POINTS):ee.isSprite&&bt.setMode(H.TRIANGLES);if(ee.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Jt=ee._multiDrawStarts,ke=ee._multiDrawCounts,hn=ee._multiDrawCount,pt=je?pe.get(je).bytesPerElement:1,bn=R.get(te).currentProgram.getUniforms();for(let Pn=0;Pn<hn;Pn++)bn.setValue(H,"_gl_DrawID",Pn),bt.render(Jt[Pn]/pt,ke[Pn])}else if(ee.isInstancedMesh)bt.renderInstances(qe,Ot,ee.count);else if(re.isInstancedBufferGeometry){const Jt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,ke=Math.min(re.instanceCount,Jt);bt.renderInstances(qe,Ot,ke)}else bt.render(qe,Ot)};function jn(w,X,re){w.transparent===!0&&w.side===Ki&&w.forceSinglePass===!1?(w.side=Bn,w.needsUpdate=!0,ls(w,X,re),w.side=Lr,w.needsUpdate=!0,ls(w,X,re),w.side=Ki):ls(w,X,re)}this.compile=function(w,X,re=null){re===null&&(re=w),L=Fe.get(re),L.init(X),T.push(L),re.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),w!==re&&w.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),L.setupLights();const te=new Set;return w.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const be=ee.material;if(be)if(Array.isArray(be))for(let He=0;He<be.length;He++){const Re=be[He];jn(Re,re,ee),te.add(Re)}else jn(be,re,ee),te.add(be)}),L=T.pop(),te},this.compileAsync=function(w,X,re=null){const te=this.compile(w,X,re);return new Promise(ee=>{function be(){if(te.forEach(function(He){R.get(He).currentProgram.isReady()&&te.delete(He)}),te.size===0){ee(w);return}setTimeout(be,10)}ft.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Ii=null;function as(w){Ii&&Ii(w)}function Nr(){Ui.stop()}function os(){Ui.start()}const Ui=new hg;Ui.setAnimationLoop(as),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){Ii=w,Ce.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},Ce.addEventListener("sessionstart",Nr),Ce.addEventListener("sessionend",os),this.render=function(w,X){if(X!==void 0&&X.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;Y!==null&&Y.renderStart(w,X);const re=Ce.enabled===!0&&Ce.isPresenting===!0,te=I!==null&&(W===null||re)&&I.begin($,W);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),w.isScene===!0&&w.onBeforeRender($,w,X,W),L=Fe.get(w,T.length),L.init(X),L.state.textureUnits=y.getTextureUnits(),T.push(L),Mt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Qe.setFromProjectionMatrix(Mt,Ci,X.reversedDepth),ut=this.localClippingEnabled,It=Be.init(this.clippingPlanes,ut),V=me.get(w,O.length),V.init(),O.push(V),Ce.enabled===!0&&Ce.isPresenting===!0){const He=$.xr.getDepthSensingMesh();He!==null&&Js(He,X,-1/0,$.sortObjects)}Js(w,X,0,$.sortObjects),V.finish(),$.sortObjects===!0&&V.sort(se,ge),Ut=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,Ut&&Ee.addToRenderList(V,w),this.info.render.frame++,It===!0&&Be.beginShadows();const ee=L.state.shadowsArray;if(we.render(ee,w,X),It===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&I.hasRenderPass())===!1){const He=V.opaque,Re=V.transmissive;if(L.setupLights(),X.isArrayCamera){const je=X.cameras;if(Re.length>0)for(let Ke=0,at=je.length;Ke<at;Ke++){const ot=je[Ke];_i(He,Re,w,ot)}Ut&&Ee.render(w);for(let Ke=0,at=je.length;Ke<at;Ke++){const ot=je[Ke];Za(V,w,ot,ot.viewport)}}else Re.length>0&&_i(He,Re,w,X),Ut&&Ee.render(w),Za(V,w,X)}W!==null&&de===0&&(y.updateMultisampleRenderTarget(W),y.updateRenderTargetMipmap(W)),te&&I.end($),w.isScene===!0&&w.onAfterRender($,w,X),Ae.resetDefaultState(),q=-1,j=null,T.pop(),T.length>0?(L=T[T.length-1],y.setTextureUnits(L.state.textureUnits),It===!0&&Be.setGlobalState($.clippingPlanes,L.state.camera)):L=null,O.pop(),O.length>0?V=O[O.length-1]:V=null,Y!==null&&Y.renderEnd()};function Js(w,X,re,te){if(w.visible===!1)return;if(w.layers.test(X.layers)){if(w.isGroup)re=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(X);else if(w.isLightProbeGrid)L.pushLightProbeGrid(w);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qe.intersectsSprite(w)){te&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);const He=Me.update(w),Re=w.material;Re.visible&&V.push(w,He,Re,re,ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qe.intersectsObject(w))){const He=Me.update(w),Re=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ct.copy(w.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ct.copy(He.boundingSphere.center)),ct.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(Re)){const je=He.groups;for(let Ke=0,at=je.length;Ke<at;Ke++){const ot=je[Ke],qe=Re[ot.materialIndex];qe&&qe.visible&&V.push(w,He,qe,re,ct.z,ot)}}else Re.visible&&V.push(w,He,Re,re,ct.z,null)}}const be=w.children;for(let He=0,Re=be.length;He<Re;He++)Js(be[He],X,re,te)}function Za(w,X,re,te){const{opaque:ee,transmissive:be,transparent:He}=w;L.setupLightsView(re),It===!0&&Be.setGlobalState($.clippingPlanes,re),te&&De.viewport(K.copy(te)),ee.length>0&&Dr(ee,X,re),be.length>0&&Dr(be,X,re),He.length>0&&Dr(He,X,re),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function _i(w,X,re,te){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const qe=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new Pi(1,1,{generateMipmaps:!0,type:qe?tr:ti,minFilter:es,samples:Math.max(4,Ct.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const be=L.state.transmissionRenderTarget[te.id],He=te.viewport||K;be.setSize(He.z*$.transmissionResolutionScale,He.w*$.transmissionResolutionScale);const Re=$.getRenderTarget(),je=$.getActiveCubeFace(),Ke=$.getActiveMipmapLevel();$.setRenderTarget(be),$.getClearColor(U),J=$.getClearAlpha(),J<1&&$.setClearColor(16777215,.5),$.clear(),Ut&&Ee.render(re);const at=$.toneMapping;$.toneMapping=bi;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),It===!0&&Be.setGlobalState($.clippingPlanes,te),Dr(w,re,te),y.updateMultisampleRenderTarget(be),y.updateRenderTargetMipmap(be),ft.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let xt=0,Ot=X.length;xt<Ot;xt++){const Gt=X[xt],{object:bt,geometry:Jt,material:ke,group:hn}=Gt;if(ke.side===Ki&&bt.layers.test(te.layers)){const pt=ke.side;ke.side=Bn,ke.needsUpdate=!0,ea(bt,re,te,Jt,ke,hn),ke.side=pt,ke.needsUpdate=!0,qe=!0}}qe===!0&&(y.updateMultisampleRenderTarget(be),y.updateRenderTargetMipmap(be))}$.setRenderTarget(Re,je,Ke),$.setClearColor(U,J),ot!==void 0&&(te.viewport=ot),$.toneMapping=at}function Dr(w,X,re){const te=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,be=w.length;ee<be;ee++){const He=w[ee],{object:Re,geometry:je,group:Ke}=He;let at=He.material;at.allowOverride===!0&&te!==null&&(at=te),Re.layers.test(re.layers)&&ea(Re,X,re,je,at,Ke)}}function ea(w,X,re,te,ee,be){w.onBeforeRender($,X,re,te,ee,be),w.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender($,X,re,te,w,be),ee.transparent===!0&&ee.side===Ki&&ee.forceSinglePass===!1?(ee.side=Bn,ee.needsUpdate=!0,$.renderBufferDirect(re,X,te,ee,w,be),ee.side=Lr,ee.needsUpdate=!0,$.renderBufferDirect(re,X,te,ee,w,be),ee.side=Ki):$.renderBufferDirect(re,X,te,ee,w,be),w.onAfterRender($,X,re,te,ee,be)}function ls(w,X,re){X.isScene!==!0&&(X=jt);const te=R.get(w),ee=L.state.lights,be=L.state.shadowsArray,He=ee.state.version,Re=Pe.getParameters(w,ee.state,be,X,re,L.state.lightProbeGridArray),je=Pe.getProgramCacheKey(Re);let Ke=te.programs;te.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const at=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;te.envMap=Z.get(w.envMap||te.environment,at),te.envMapRotation=te.environment!==null&&w.envMap===null?X.environmentRotation:w.envMapRotation,Ke===void 0&&(w.addEventListener("dispose",Dt),Ke=new Map,te.programs=Ke);let ot=Ke.get(je);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===He)return na(w,Re),ot}else Re.uniforms=Pe.getUniforms(w),Y!==null&&w.isNodeMaterial&&Y.build(w,re,Re),w.onBeforeCompile(Re,$),ot=Pe.acquireProgram(Re,je),Ke.set(je,ot),te.uniforms=Re.uniforms;const qe=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=Be.uniform),na(w,Re),te.needsLights=Hl(w),te.lightsStateVersion=He,te.needsLights&&(qe.ambientLightColor.value=ee.state.ambient,qe.lightProbe.value=ee.state.probe,qe.directionalLights.value=ee.state.directional,qe.directionalLightShadows.value=ee.state.directionalShadow,qe.spotLights.value=ee.state.spot,qe.spotLightShadows.value=ee.state.spotShadow,qe.rectAreaLights.value=ee.state.rectArea,qe.ltc_1.value=ee.state.rectAreaLTC1,qe.ltc_2.value=ee.state.rectAreaLTC2,qe.pointLights.value=ee.state.point,qe.pointLightShadows.value=ee.state.pointShadow,qe.hemisphereLights.value=ee.state.hemi,qe.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,qe.spotLightMatrix.value=ee.state.spotLightMatrix,qe.spotLightMap.value=ee.state.spotLightMap,qe.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=ot,te.uniformsList=null,ot}function ta(w){if(w.uniformsList===null){const X=w.currentProgram.getUniforms();w.uniformsList=bl.seqWithValue(X.seq,w.uniforms)}return w.uniformsList}function na(w,X){const re=R.get(w);re.outputColorSpace=X.outputColorSpace,re.batching=X.batching,re.batchingColor=X.batchingColor,re.instancing=X.instancing,re.instancingColor=X.instancingColor,re.instancingMorph=X.instancingMorph,re.skinning=X.skinning,re.morphTargets=X.morphTargets,re.morphNormals=X.morphNormals,re.morphColors=X.morphColors,re.morphTargetsCount=X.morphTargetsCount,re.numClippingPlanes=X.numClippingPlanes,re.numIntersection=X.numClipIntersection,re.vertexAlphas=X.vertexAlphas,re.vertexTangents=X.vertexTangents,re.toneMapping=X.toneMapping}function Qa(w,X){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;P.setFromMatrixPosition(X.matrixWorld);for(let re=0,te=w.length;re<te;re++){const ee=w[re];if(ee.texture!==null&&ee.boundingBox.containsPoint(P))return ee}return null}function Ja(w,X,re,te,ee){X.isScene!==!0&&(X=jt),y.resetTextureUnits();const be=X.fog,He=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Re=W===null?$.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:_t.workingColorSpace,je=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ke=Z.get(te.envMap||He,je),at=te.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ot=!!re.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),qe=!!re.morphAttributes.position,xt=!!re.morphAttributes.normal,Ot=!!re.morphAttributes.color;let Gt=bi;te.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Gt=$.toneMapping);const bt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,Jt=bt!==void 0?bt.length:0,ke=R.get(te),hn=L.state.lights;if(It===!0&&(ut===!0||w!==j)){const Pt=w===j&&te.id===q;Be.setState(te,w,Pt)}let pt=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==hn.state.version||ke.outputColorSpace!==Re||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==Ke||te.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Be.numPlanes||ke.numIntersection!==Be.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==ot||ke.morphTargets!==qe||ke.morphNormals!==xt||ke.morphColors!==Ot||ke.toneMapping!==Gt||ke.morphTargetsCount!==Jt||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,ke.__version=te.version);let bn=ke.currentProgram;pt===!0&&(bn=ls(te,X,ee),Y&&te.isNodeMaterial&&Y.onUpdateProgram(te,bn,ke));let Pn=!1,mt=!1,Fi=!1;const At=bn.getUniforms(),zt=ke.uniforms;if(De.useProgram(bn.program)&&(Pn=!0,mt=!0,Fi=!0),te.id!==q&&(q=te.id,mt=!0),ke.needsLights){const Pt=Qa(L.state.lightProbeGridArray,ee);ke.lightProbeGrid!==Pt&&(ke.lightProbeGrid=Pt,mt=!0)}if(Pn||j!==w){De.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),At.setValue(H,"projectionMatrix",w.projectionMatrix),At.setValue(H,"viewMatrix",w.matrixWorldInverse);const ii=At.map.cameraPosition;ii!==void 0&&ii.setValue(H,Nt.setFromMatrixPosition(w.matrixWorld)),Ct.logarithmicDepthBuffer&&At.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,mt=!0,Fi=!0)}if(ke.needsLights&&(hn.state.directionalShadowMap.length>0&&At.setValue(H,"directionalShadowMap",hn.state.directionalShadowMap,y),hn.state.spotShadowMap.length>0&&At.setValue(H,"spotShadowMap",hn.state.spotShadowMap,y),hn.state.pointShadowMap.length>0&&At.setValue(H,"pointShadowMap",hn.state.pointShadowMap,y)),ee.isSkinnedMesh){At.setOptional(H,ee,"bindMatrix"),At.setOptional(H,ee,"bindMatrixInverse");const Pt=ee.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),At.setValue(H,"boneTexture",Pt.boneTexture,y))}ee.isBatchedMesh&&(At.setOptional(H,ee,"batchingTexture"),At.setValue(H,"batchingTexture",ee._matricesTexture,y),At.setOptional(H,ee,"batchingIdTexture"),At.setValue(H,"batchingIdTexture",ee._indirectTexture,y),At.setOptional(H,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(H,"batchingColorTexture",ee._colorsTexture,y));const ni=re.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&tt.update(ee,re,bn),(mt||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,At.setValue(H,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(zt.envMapIntensity.value=X.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=ME()),mt){if(At.setValue(H,"toneMappingExposure",$.toneMappingExposure),ke.needsLights&&Vl(zt,Fi),be&&te.fog===!0&&fe.refreshFogUniforms(zt,be),fe.refreshMaterialUniforms(zt,te,Le,Ve,L.state.transmissionRenderTarget[w.id]),ke.needsLights&&ke.lightProbeGrid){const Pt=ke.lightProbeGrid;zt.probesSH.value=Pt.texture,zt.probesMin.value.copy(Pt.boundingBox.min),zt.probesMax.value.copy(Pt.boundingBox.max),zt.probesResolution.value.copy(Pt.resolution)}bl.upload(H,ta(ke),zt,y)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(bl.upload(H,ta(ke),zt,y),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(H,"center",ee.center),At.setValue(H,"modelViewMatrix",ee.modelViewMatrix),At.setValue(H,"normalMatrix",ee.normalMatrix),At.setValue(H,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const Pt=te.uniformsGroups;for(let ii=0,vi=Pt.length;ii<vi;ii++){const Ir=Pt[ii];he.update(Ir,bn),he.bind(Ir,bn)}}return bn}function Vl(w,X){w.ambientLightColor.needsUpdate=X,w.lightProbe.needsUpdate=X,w.directionalLights.needsUpdate=X,w.directionalLightShadows.needsUpdate=X,w.pointLights.needsUpdate=X,w.pointLightShadows.needsUpdate=X,w.spotLights.needsUpdate=X,w.spotLightShadows.needsUpdate=X,w.rectAreaLights.needsUpdate=X,w.hemisphereLights.needsUpdate=X}function Hl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(w,X,re){const te=R.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),R.get(w.texture).__webglTexture=X,R.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:re,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,X){const re=R.get(w);re.__webglFramebuffer=X,re.__useDefaultFramebuffer=X===void 0};const Yt=H.createFramebuffer();this.setRenderTarget=function(w,X=0,re=0){W=w,oe=X,de=re;let te=null,ee=!1,be=!1;if(w){const Re=R.get(w);if(Re.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(H.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(w.viewport),le.copy(w.scissor),ue=w.scissorTest,De.viewport(K),De.scissor(le),De.setScissorTest(ue),q=-1;return}else if(Re.__webglFramebuffer===void 0)y.setupRenderTarget(w);else if(Re.__hasExternalTextures)y.rebindTextures(w,R.get(w.texture).__webglTexture,R.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const at=w.depthTexture;if(Re.__boundDepthTexture!==at){if(at!==null&&R.has(at)&&(w.width!==at.image.width||w.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(w)}}const je=w.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(be=!0);const Ke=R.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?te=Ke[X][re]:te=Ke[X],ee=!0):w.samples>0&&y.useMultisampledRTT(w)===!1?te=R.get(w).__webglMultisampledFramebuffer:Array.isArray(Ke)?te=Ke[re]:te=Ke,K.copy(w.viewport),le.copy(w.scissor),ue=w.scissorTest}else K.copy(ce).multiplyScalar(Le).floor(),le.copy(Ne).multiplyScalar(Le).floor(),ue=Ze;if(re!==0&&(te=Yt),De.bindFramebuffer(H.FRAMEBUFFER,te)&&De.drawBuffers(w,te),De.viewport(K),De.scissor(le),De.setScissorTest(ue),ee){const Re=R.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,re)}else if(be){const Re=X;for(let je=0;je<w.textures.length;je++){const Ke=R.get(w.textures[je]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+je,Ke.__webglTexture,re,Re)}}else if(w!==null&&re!==0){const Re=R.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Re.__webglTexture,re)}q=-1},this.readRenderTargetPixels=function(w,X,re,te,ee,be,He,Re=0){if(!(w&&w.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je){De.bindFramebuffer(H.FRAMEBUFFER,je);try{const Ke=w.textures[Re],at=Ke.format,ot=Ke.type;if(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re),!Ct.textureFormatReadable(at)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(ot)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=w.width-te&&re>=0&&re<=w.height-ee&&H.readPixels(X,re,te,ee,z.convert(at),z.convert(ot),be)}finally{const Ke=W!==null?R.get(W).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(w,X,re,te,ee,be,He,Re=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=R.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&He!==void 0&&(je=je[He]),je)if(X>=0&&X<=w.width-te&&re>=0&&re<=w.height-ee){De.bindFramebuffer(H.FRAMEBUFFER,je);const Ke=w.textures[Re],at=Ke.format,ot=Ke.type;if(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Re),!Ct.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.bufferData(H.PIXEL_PACK_BUFFER,be.byteLength,H.STREAM_READ),H.readPixels(X,re,te,ee,z.convert(at),z.convert(ot),0);const xt=W!==null?R.get(W).__webglFramebuffer:null;De.bindFramebuffer(H.FRAMEBUFFER,xt);const Ot=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await X_(H,Ot,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,be),H.deleteBuffer(qe),H.deleteSync(Ot),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,X=null,re=0){const te=Math.pow(2,-re),ee=Math.floor(w.image.width*te),be=Math.floor(w.image.height*te),He=X!==null?X.x:0,Re=X!==null?X.y:0;y.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,re,0,0,He,Re,ee,be),De.unbindTexture()};const Gl=H.createFramebuffer(),ia=H.createFramebuffer();this.copyTextureToTexture=function(w,X,re=null,te=null,ee=0,be=0){let He,Re,je,Ke,at,ot,qe,xt,Ot;const Gt=w.isCompressedTexture?w.mipmaps[be]:w.image;if(re!==null)He=re.max.x-re.min.x,Re=re.max.y-re.min.y,je=re.isBox3?re.max.z-re.min.z:1,Ke=re.min.x,at=re.min.y,ot=re.isBox3?re.min.z:0;else{const zt=Math.pow(2,-ee);He=Math.floor(Gt.width*zt),Re=Math.floor(Gt.height*zt),w.isDataArrayTexture?je=Gt.depth:w.isData3DTexture?je=Math.floor(Gt.depth*zt):je=1,Ke=0,at=0,ot=0}te!==null?(qe=te.x,xt=te.y,Ot=te.z):(qe=0,xt=0,Ot=0);const bt=z.convert(X.format),Jt=z.convert(X.type);let ke;X.isData3DTexture?(y.setTexture3D(X,0),ke=H.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(y.setTexture2DArray(X,0),ke=H.TEXTURE_2D_ARRAY):(y.setTexture2D(X,0),ke=H.TEXTURE_2D),De.activeTexture(H.TEXTURE0),De.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,X.flipY),De.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),De.pixelStorei(H.UNPACK_ALIGNMENT,X.unpackAlignment);const hn=De.getParameter(H.UNPACK_ROW_LENGTH),pt=De.getParameter(H.UNPACK_IMAGE_HEIGHT),bn=De.getParameter(H.UNPACK_SKIP_PIXELS),Pn=De.getParameter(H.UNPACK_SKIP_ROWS),mt=De.getParameter(H.UNPACK_SKIP_IMAGES);De.pixelStorei(H.UNPACK_ROW_LENGTH,Gt.width),De.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Gt.height),De.pixelStorei(H.UNPACK_SKIP_PIXELS,Ke),De.pixelStorei(H.UNPACK_SKIP_ROWS,at),De.pixelStorei(H.UNPACK_SKIP_IMAGES,ot);const Fi=w.isDataArrayTexture||w.isData3DTexture,At=X.isDataArrayTexture||X.isData3DTexture;if(w.isDepthTexture){const zt=R.get(w),ni=R.get(X),Pt=R.get(zt.__renderTarget),ii=R.get(ni.__renderTarget);De.bindFramebuffer(H.READ_FRAMEBUFFER,Pt.__webglFramebuffer),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let vi=0;vi<je;vi++)Fi&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(w).__webglTexture,ee,ot+vi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,R.get(X).__webglTexture,be,Ot+vi)),H.blitFramebuffer(Ke,at,He,Re,qe,xt,He,Re,H.DEPTH_BUFFER_BIT,H.NEAREST);De.bindFramebuffer(H.READ_FRAMEBUFFER,null),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ee!==0||w.isRenderTargetTexture||R.has(w)){const zt=R.get(w),ni=R.get(X);De.bindFramebuffer(H.READ_FRAMEBUFFER,Gl),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,ia);for(let Pt=0;Pt<je;Pt++)Fi?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,zt.__webglTexture,ee,ot+Pt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,zt.__webglTexture,ee),At?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ni.__webglTexture,be,Ot+Pt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ni.__webglTexture,be),ee!==0?H.blitFramebuffer(Ke,at,He,Re,qe,xt,He,Re,H.COLOR_BUFFER_BIT,H.NEAREST):At?H.copyTexSubImage3D(ke,be,qe,xt,Ot+Pt,Ke,at,He,Re):H.copyTexSubImage2D(ke,be,qe,xt,Ke,at,He,Re);De.bindFramebuffer(H.READ_FRAMEBUFFER,null),De.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else At?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(ke,be,qe,xt,Ot,He,Re,je,bt,Jt,Gt.data):X.isCompressedArrayTexture?H.compressedTexSubImage3D(ke,be,qe,xt,Ot,He,Re,je,bt,Gt.data):H.texSubImage3D(ke,be,qe,xt,Ot,He,Re,je,bt,Jt,Gt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,be,qe,xt,He,Re,bt,Jt,Gt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,be,qe,xt,Gt.width,Gt.height,bt,Gt.data):H.texSubImage2D(H.TEXTURE_2D,be,qe,xt,He,Re,bt,Jt,Gt);De.pixelStorei(H.UNPACK_ROW_LENGTH,hn),De.pixelStorei(H.UNPACK_IMAGE_HEIGHT,pt),De.pixelStorei(H.UNPACK_SKIP_PIXELS,bn),De.pixelStorei(H.UNPACK_SKIP_ROWS,Pn),De.pixelStorei(H.UNPACK_SKIP_IMAGES,mt),be===0&&X.generateMipmaps&&H.generateMipmap(ke),De.unbindTexture()},this.initRenderTarget=function(w){R.get(w).__webglFramebuffer===void 0&&y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){oe=0,de=0,W=null,De.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}const TE=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,AE=`
precision highp float;

uniform float uTime, uAttenuation, uLineThickness;
uniform float uBaseRadius, uRadiusStep, uScaleRate;
uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
uniform float uFadeIn, uFadeOut;
uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
uniform vec2 uResolution, uMouse;
uniform vec3 uColor, uColorTwo;
uniform int uRingCount;

const float HP = 1.5707963;
const float CYCLE = 3.45;

float fade(float t) {
  return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
}

float ring(vec2 p, float ri, float cut, float t0, float px) {
  float t = mod(uTime + t0, CYCLE);
  float r = ri + t / CYCLE * uScaleRate;
  float d = abs(length(p) - r);
  float a = atan(abs(p.y), abs(p.x)) / HP;
  float th = max(1.0 - a, 0.5) * px * uLineThickness;
  float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
  d += pow(cut * a, 3.0) * r;
  return h * exp(-uAttenuation * d) * fade(t);
}

void main() {
  float px = 1.0 / min(uResolution.x, uResolution.y);
  vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
  float cr = cos(uRotation), sr = sin(uRotation);
  p = mat2(cr, -sr, sr, cr) * p;
  p -= uMouse * uMouseInfluence;
  float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
  p /= sc;
  vec3 c = vec3(0.0);
  float rcf = max(float(uRingCount) - 1.0, 1.0);
  for (int i = 0; i < 10; i++) {
    if (i >= uRingCount) break;
    float fi = float(i);
    vec2 pr = p - fi * uParallax * uMouse;
    vec3 rc = mix(uColor, uColorTwo, fi / rcf);
    c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
  }
  c *= 1.0 + uBurst * 2.0;
  float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
  c += (n - 0.5) * uNoiseAmount;
  gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
}
`;function wE({color:s="#fc42ff",colorTwo:e="#42fcff",speed:n=1,ringCount:r=6,attenuation:o=10,lineThickness:u=2,baseRadius:c=.35,radiusStep:h=.1,scaleRate:p=.1,opacity:m=1,blur:x=0,noiseAmount:S=.1,rotation:g=0,ringGap:M=1.5,fadeIn:A=.7,fadeOut:C=.5,followMouse:_=!1,mouseInfluence:v=.2,hoverScale:b=1.2,parallax:D=.05,clickBurst:P=!1}){const V=Xt.useRef(null),L=Xt.useRef(null),O=Xt.useRef([0,0]),T=Xt.useRef([0,0]),I=Xt.useRef(0),$=Xt.useRef(!1),F=Xt.useRef(0);return L.current={color:s,colorTwo:e,speed:n,ringCount:r,attenuation:o,lineThickness:u,baseRadius:c,radiusStep:h,scaleRate:p,opacity:m,noiseAmount:S,rotation:g,ringGap:M,fadeIn:A,fadeOut:C,followMouse:_,mouseInfluence:v,hoverScale:b,parallax:D,clickBurst:P},Xt.useEffect(()=>{const Y=V.current;if(!Y)return;let oe;try{oe=new EE({alpha:!0})}catch{return}if(!oe.capabilities.isWebGL2){oe.dispose();return}oe.setClearColor(0,0),Y.appendChild(oe.domElement);const de=new ov,W=new od(-.5,.5,.5,-.5,.1,10);W.position.z=1;const q={uTime:{value:0},uAttenuation:{value:0},uResolution:{value:new Rt},uColor:{value:new wt},uColorTwo:{value:new wt},uLineThickness:{value:0},uBaseRadius:{value:0},uRadiusStep:{value:0},uScaleRate:{value:0},uRingCount:{value:0},uOpacity:{value:1},uNoiseAmount:{value:0},uRotation:{value:0},uRingGap:{value:1.6},uFadeIn:{value:.5},uFadeOut:{value:.75},uMouse:{value:new Rt},uMouseInfluence:{value:0},uHoverAmount:{value:0},uHoverScale:{value:1},uParallax:{value:0},uBurst:{value:0}},j=new gi({vertexShader:TE,fragmentShader:AE,uniforms:q,transparent:!0}),K=new Di(new Ka(1,1),j);de.add(K);const le=()=>{const ge=Y.clientWidth,ce=Y.clientHeight,Ne=Math.min(window.devicePixelRatio,2);oe.setSize(ge,ce),oe.setPixelRatio(Ne),q.uResolution.value.set(ge*Ne,ce*Ne)};le(),window.addEventListener("resize",le);const ue=new ResizeObserver(le);ue.observe(Y);const U=ge=>{const ce=Y.getBoundingClientRect();O.current[0]=(ge.clientX-ce.left)/ce.width-.5,O.current[1]=-((ge.clientY-ce.top)/ce.height-.5)},J=()=>{$.current=!0},Ie=()=>{$.current=!1,O.current[0]=0,O.current[1]=0},Ve=()=>{F.current=1};Y.addEventListener("mousemove",U),Y.addEventListener("mouseenter",J),Y.addEventListener("mouseleave",Ie),Y.addEventListener("click",Ve);let Le;const se=ge=>{Le=requestAnimationFrame(se);const ce=L.current;T.current[0]+=(O.current[0]-T.current[0])*.08,T.current[1]+=(O.current[1]-T.current[1])*.08,I.current+=(($.current?1:0)-I.current)*.08,F.current*=.95,F.current<.001&&(F.current=0),q.uTime.value=ge*.001*ce.speed,q.uAttenuation.value=ce.attenuation,q.uColor.value.set(ce.color),q.uColorTwo.value.set(ce.colorTwo),q.uLineThickness.value=ce.lineThickness,q.uBaseRadius.value=ce.baseRadius,q.uRadiusStep.value=ce.radiusStep,q.uScaleRate.value=ce.scaleRate,q.uRingCount.value=ce.ringCount,q.uOpacity.value=ce.opacity,q.uNoiseAmount.value=ce.noiseAmount,q.uRotation.value=ce.rotation*Math.PI/180,q.uRingGap.value=ce.ringGap,q.uFadeIn.value=ce.fadeIn,q.uFadeOut.value=ce.fadeOut,q.uMouse.value.set(T.current[0],T.current[1]),q.uMouseInfluence.value=ce.followMouse?ce.mouseInfluence:0,q.uHoverAmount.value=I.current,q.uHoverScale.value=ce.hoverScale,q.uParallax.value=ce.parallax,q.uBurst.value=ce.clickBurst?F.current:0,oe.render(de,W)};return Le=requestAnimationFrame(se),()=>{cancelAnimationFrame(Le),window.removeEventListener("resize",le),ue.disconnect(),Y.removeEventListener("mousemove",U),Y.removeEventListener("mouseenter",J),Y.removeEventListener("mouseleave",Ie),Y.removeEventListener("click",Ve),Y.removeChild(oe.domElement),oe.dispose(),j.dispose()}},[]),k.jsx("div",{ref:V,className:"magic-rings-container",style:x>0?{filter:`blur(${x}px)`}:void 0})}function RE(){const s=()=>{var e;(e=document.getElementById("about"))==null||e.scrollIntoView({behavior:"smooth"})};return k.jsxs("section",{id:"hero",className:"hero",children:[k.jsx("div",{className:"hero-rings-bg",children:k.jsx(wE,{color:"#50dbd6",colorTwo:"#42fcff",ringCount:8,speed:.7,attenuation:10,lineThickness:2,baseRadius:.25,radiusStep:.095,scaleRate:.08,opacity:1,blur:0,noiseAmount:.06,rotation:0,ringGap:1.5,fadeIn:.7,fadeOut:.5,followMouse:!0,mouseInfluence:.25,hoverScale:1.2,parallax:.05,clickBurst:!1})}),k.jsx("div",{className:"hero-overlay"}),k.jsxs("div",{className:"hero-content container",children:[k.jsx("div",{className:"hero-badge",children:"Visual & AI Designer"}),k.jsxs("h1",{className:"hero-title",children:["曾钦滢",k.jsx("span",{className:"hero-title-en",children:"Zeng Qinying"})]}),k.jsxs("p",{className:"hero-subtitle",children:["视觉设计师 / AI设计师 / 品牌设计师",k.jsx("br",{}),"用技术与美学的交汇，创造有温度的数字化体验"]}),k.jsxs("div",{className:"hero-actions",children:[k.jsx("a",{href:"#projects",className:"hero-btn-primary",children:"查看作品"}),k.jsx("a",{href:"#contact",className:"hero-btn-secondary",children:"联系我"})]})]}),k.jsxs("div",{className:"hero-scroll",onClick:s,children:[k.jsx("span",{className:"scroll-text",children:"向下滚动"}),k.jsx("span",{className:"scroll-line"})]})]})}const CE=[{value:"50+",label:"视觉作品"},{value:"3",label:"核心项目"},{value:"国奖",label:"创新大赛银奖"},{value:"3",label:"编程语言"}];function bE(){return k.jsx("section",{id:"about",className:"about",children:k.jsx("div",{className:"container",children:k.jsxs("div",{className:"about-content",children:[k.jsxs("div",{className:"profile-card",children:[k.jsx("div",{className:"profile-avatar",children:k.jsx("div",{className:"profile-avatar-inner",children:k.jsx("span",{className:"profile-initials",children:"ZQY"})})}),k.jsxs("div",{className:"profile-info",children:[k.jsx("h3",{className:"profile-name",children:"曾钦滢"}),k.jsxs("div",{className:"profile-contact",children:[k.jsxs("div",{className:"profile-item",children:[k.jsx("span",{className:"profile-label",children:"电话"}),k.jsx("span",{className:"profile-value",children:"18224969612"})]}),k.jsxs("div",{className:"profile-item",children:[k.jsx("span",{className:"profile-label",children:"邮箱"}),k.jsx("span",{className:"profile-value",children:"2544290857@qq.com"})]}),k.jsxs("div",{className:"profile-item",children:[k.jsx("span",{className:"profile-label",children:"学校"}),k.jsx("span",{className:"profile-value",children:"天津外国语大学"})]}),k.jsxs("div",{className:"profile-item",children:[k.jsx("span",{className:"profile-label",children:"专业"}),k.jsx("span",{className:"profile-value",children:"数字媒体技术"})]})]})]})]}),k.jsx("span",{className:"section-label",children:"About"}),k.jsx("h2",{className:"section-title",children:"关于我"}),k.jsx("p",{className:"about-bio",children:"我是曾钦滢，一名数字媒体技术专业的复合型人才，融合三维交互开发、 视觉设计、编程开发、项目统筹多重能力。熟练 Unity 虚拟仿真开发与 平面视觉设计，掌握多门编程语言，拥有红色数字展馆、智能机器人 两大核心科创项目经历。"}),k.jsx("p",{className:"about-bio-secondary",children:"独立完成策划、开发、赛事申报全流程，获国家级竞赛银奖。学生工作 积累新媒体运营、团队管理、活动统筹实战经验，擅长数据复盘与多方 协同推进任务落地。"}),k.jsx("div",{className:"about-stats",children:CE.map((s,e)=>k.jsxs("div",{className:"stat-card",children:[k.jsx("span",{className:"stat-value",children:s.value}),k.jsx("span",{className:"stat-label",children:s.label})]},e))})]})})})}const nf=[{src:"/videos/emotion-robot-1.mp4",label:"样机演示 01"},{src:"/videos/emotion-robot-2.mp4",label:"样机演示 02"},{src:"/videos/emotion-robot-3.mp4",label:"样机演示 03"},{src:"/videos/emotion-robot-4.mp4",label:"样机演示 04"},{src:"/videos/emotion-robot-5.mp4",label:"样机演示 05"}];function PE({compact:s=!1}){const e=nf.length,[n,r]=Xt.useState(0),[o,u]=Xt.useState(!1),c=Xt.useRef(null),h=Xt.useRef(null),p=Xt.useRef(null),m=Xt.useCallback(A=>(A%e+e)%e,[e]),x=Xt.useCallback(()=>{r(A=>m(A+1))},[m]),S=Xt.useCallback(()=>{r(A=>m(A-1))},[m]),g=Xt.useCallback(A=>{A!==n&&r(A)},[n]),M=Xt.useCallback(()=>{clearTimeout(h.current),h.current=setTimeout(()=>x(),800)},[x]);return Xt.useEffect(()=>{const A=p.current;if(!A||o)return;const C=new IntersectionObserver(([_])=>{_.isIntersecting&&(u(!0),C.disconnect())},{threshold:.3});return C.observe(A),()=>C.disconnect()},[o]),Xt.useEffect(()=>{const A=c.current;if(!A||(A.load(),A.playbackRate=.7,n===0&&!o))return;const C=A.play();C&&C.catch(()=>{})},[n,o]),e===0?null:k.jsxs("div",{className:"video-gallery",ref:p,children:[!s&&k.jsxs("div",{className:"gallery-header",children:[k.jsxs("div",{className:"gallery-header-left",children:[k.jsxs("svg",{className:"gallery-header-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("polygon",{points:"23 7 16 12 23 17 23 7"}),k.jsx("rect",{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"})]}),k.jsx("h4",{children:"项目策划"})]}),k.jsxs("span",{className:"gallery-header-counter",children:[n+1," / ",e]})]}),k.jsxs("div",{className:"gallery-stage-wrap",children:[k.jsx("div",{className:"gallery-stage",children:k.jsx("div",{className:"gallery-page fade-in",children:k.jsx("video",{ref:c,src:nf[n].src,muted:!0,playsInline:!0,preload:"auto",onEnded:M},n)})}),k.jsxs("div",{className:"gallery-nav",children:[k.jsx("button",{className:"gallery-nav-btn",onClick:S,title:"上一页",children:k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:k.jsx("polyline",{points:"15 18 9 12 15 6"})})}),k.jsx("div",{className:"gallery-dots",children:nf.map((A,C)=>k.jsx("button",{className:"gallery-dot"+(C===n?" active":""),onClick:()=>g(C),title:"第 "+(C+1)+" 页"},C))}),k.jsx("button",{className:"gallery-nav-btn",onClick:x,title:"下一页",children:k.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:k.jsx("polyline",{points:"9 18 15 12 9 6"})})})]})]})]})}const Ai=[{title:"情感交互型宠物机器人",category:"AI硬件 / 创新大赛",description:"从产品定义到样机落地，全流程主导情感交互型宠物机器人研发。视频展示涵盖AI情感识别系统搭建、硬件交互原型设计、商业模式与市场分析方案，完整呈现科创赛事银奖项目的研发全貌。",color:"#0088ff",tags:["AI情感识别","硬件交互","商业计划","银奖"]},{title:"智能宠物机器人设计实践",category:"AI机器人 / 省级重点项目",description:"以省级重点项目标准统筹AI情感交互机器人全周期开发：从用户需求调研入手，深入独居青年与空巢老人群体，明确情感陪伴的核心痛点；主导硬件结构设计与迭代，协同完成情绪识别算法训练与陪伴交互场景开发，输出完整样机方案与全栈技术文档。",color:"#7c5cfc",tags:["产品研发","团队管理","用户调研","样机测试"]}];function LE(){return k.jsx("section",{id:"projects",className:"projects",children:k.jsxs("div",{className:"container",children:[k.jsxs("div",{className:"projects-header",children:[k.jsx("span",{className:"section-label",children:"Projects"}),k.jsx("h2",{className:"section-title",children:"精选项目"}),k.jsx("p",{className:"section-subtitle",children:"从虚拟展馆到智能机器人，每个项目都是技术与设计的深度融合"})]}),k.jsxs("div",{className:"projects-subsection",children:[k.jsxs("div",{className:"subsection-label",children:[k.jsx("span",{className:"subsection-line"}),k.jsx("span",{children:"影视作品"}),k.jsx("span",{className:"subsection-line"})]}),k.jsxs("div",{className:"project-video-block",children:[k.jsx("div",{className:"video-container",children:k.jsx("video",{className:"video-player",src:"/videos/northbureau.mp4",poster:"/images/northbureau-poster.jpg",controls:!0,preload:"metadata",playsInline:!0,children:"您的浏览器不支持视频播放"})}),k.jsxs("div",{className:"video-info",children:[k.jsx("span",{className:"project-category",children:"AI 党史纪录片"}),k.jsx("h3",{className:"video-title",children:"中共中央北方局革命史"}),k.jsx("p",{className:"video-desc",children:"6分钟AI党史纪实短片《中共中央北方局革命史》｜史料整理&视频文案主创。 依托天津北方局纪念馆原始史料，独立完成短片叙事创作，系统梳理1924-1945年 中共中央北方局建立、重建、撤销全过程，还原一二·九运动、华北党组织重建、 敌后抗日根据地建设等关键史实，聚焦刘少奇主持北方局时期的革命工作， 整合历史照片、旧址文物、辖区地图素材完成6分钟红色党史短片制作。"}),k.jsxs("div",{className:"project-tags",children:[k.jsx("span",{className:"project-tag",children:"AI视频制作"}),k.jsx("span",{className:"project-tag",children:"史料整理"}),k.jsx("span",{className:"project-tag",children:"文案创作"}),k.jsx("span",{className:"project-tag",children:"党史教育"})]})]})]})]}),k.jsxs("div",{className:"projects-subsection",children:[k.jsxs("div",{className:"subsection-label",children:[k.jsx("span",{className:"subsection-line"}),k.jsx("span",{children:"项目策划"}),k.jsx("span",{className:"subsection-line"})]}),k.jsx("div",{className:"projects-grid",children:k.jsxs("div",{className:"project-card with-video",children:[k.jsx("div",{className:"project-visual",style:{background:"transparent"},children:k.jsx(PE,{compact:!0})}),k.jsxs("div",{className:"project-info",children:[k.jsx("span",{className:"project-category",children:Ai[0].category}),k.jsx("h3",{className:"project-title",children:Ai[0].title}),k.jsx("p",{className:"project-desc",children:Ai[0].description}),k.jsx("div",{className:"project-tags",children:Ai[0].tags.map((s,e)=>k.jsx("span",{className:"project-tag",children:s},e))})]})]})})]}),k.jsxs("div",{className:"projects-subsection",children:[k.jsxs("div",{className:"subsection-label",children:[k.jsx("span",{className:"subsection-line"}),k.jsx("span",{children:"产品设计"}),k.jsx("span",{className:"subsection-line"})]}),k.jsx("div",{className:"projects-grid",children:k.jsxs("div",{className:"project-card",children:[k.jsx("div",{className:"project-visual",style:{background:`linear-gradient(135deg, ${Ai[1].color}22, ${Ai[1].color}08)`},children:k.jsx("div",{className:"video-container",style:{width:"100%",height:"100%",borderRadius:0},children:k.jsx("video",{className:"video-player",src:"/videos/innovation-project.mp4",controls:!0,preload:"metadata",playsInline:!0,muted:!0,children:"您的浏览器不支持视频播放"})})}),k.jsxs("div",{className:"project-info",children:[k.jsx("span",{className:"project-category",children:Ai[1].category}),k.jsx("h3",{className:"project-title",children:Ai[1].title}),k.jsx("p",{className:"project-desc",children:Ai[1].description}),k.jsx("div",{className:"project-tags",children:Ai[1].tags.map((s,e)=>k.jsx("span",{className:"project-tag",children:s},e))})]})]})})]}),k.jsxs("div",{className:"projects-subsection",children:[k.jsxs("div",{className:"subsection-label",children:[k.jsx("span",{className:"subsection-line"}),k.jsx("span",{children:"交互设计"}),k.jsx("span",{className:"subsection-line"})]}),k.jsxs("div",{className:"project-video-block",children:[k.jsx("div",{className:"video-container",children:k.jsx("video",{className:"video-player",src:"/videos/exhibition-hall.mp4",controls:!0,preload:"metadata",playsInline:!0,children:"您的浏览器不支持视频播放"})}),k.jsxs("div",{className:"video-info",children:[k.jsx("span",{className:"project-category",children:"Unity 3D 展馆演示"}),k.jsx("h3",{className:"video-title",children:"中共北方局数字复原虚拟展馆"}),k.jsx("p",{className:"video-desc",children:"基于天津北方局纪念馆原始史料，独立完成从遗址考据、建筑复原到Unity 3D交互开发的完整闭环。 系统梳理1924—1945年中共中央北方局发展历程，复原历史建筑群与空间布局； 构建第一人称自由漫游、展品弹窗知识解说、历史影像资料嵌入播放等交互系统， 为用户带来走进历史的红色教育沉浸式数字体验。"}),k.jsxs("div",{className:"project-tags",children:[k.jsx("span",{className:"project-tag",children:"Unity 3D"}),k.jsx("span",{className:"project-tag",children:"虚拟展馆"}),k.jsx("span",{className:"project-tag",children:"第一人称漫游"}),k.jsx("span",{className:"project-tag",children:"交互开发"})]})]})]})]})]})})}const NE=[{icon:k.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M12 2L2 7l10 5 10-5-10-5z"}),k.jsx("path",{d:"M2 17l10 5 10-5"}),k.jsx("path",{d:"M2 12l10 5 10-5"})]}),title:"三维交互开发",desc:"熟练 Unity 场景搭建、模型导入、光照烘焙、交互逻辑开发，独立完成虚拟展馆全流程搭建。"},{icon:k.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("circle",{cx:"12",cy:"12",r:"3"}),k.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),title:"视觉设计",desc:"精通 Photoshop 平面视觉设计，熟练掌握视频剪辑、网页设计全流程制作，兼具审美鉴赏与设计执行能力。"},{icon:k.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("polyline",{points:"16 18 22 12 16 6"}),k.jsx("polyline",{points:"8 6 2 12 8 18"})]}),title:"编程开发",desc:"熟练掌握 Python、Java、C++ 三门编程语言，精通数据结构与面向对象编程，具备规范代码编写与项目开发能力。"},{icon:k.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),k.jsx("circle",{cx:"9",cy:"7",r:"4"}),k.jsx("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),k.jsx("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})]}),title:"项目管理",desc:"项目统筹与团队管理能力突出，曾主导国家级竞赛项目并获银奖，具备多职能团队协同推进的全链条经验。"},{icon:k.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M12 20h9"}),k.jsx("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})]}),title:"AI 工具运用",desc:"熟练运用各类 AIGC 工具辅助创意设计与内容生产，在项目中整合 AI 技术实现情感识别等智能化功能。"},{icon:k.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),k.jsx("polyline",{points:"22,6 12,13 2,6"})]}),title:"新媒体运营",desc:"全年产出 50+ 份运营视觉素材，推文平均互动率提升 6%，擅长数据复盘与内容策略优化。"}];function DE(){return k.jsx("section",{id:"strengths",className:"strengths",children:k.jsxs("div",{className:"container",children:[k.jsxs("div",{className:"strengths-header",children:[k.jsx("span",{className:"section-label",children:"Strengths"}),k.jsx("h2",{className:"section-title",children:"个人优势"}),k.jsx("p",{className:"section-subtitle",children:"数字媒体技术复合型人才，融合设计与技术的多重能力"})]}),k.jsx("div",{className:"strengths-grid",children:NE.map((s,e)=>k.jsxs("div",{className:"strength-card",children:[k.jsx("div",{className:"strength-icon",children:s.icon}),k.jsx("h3",{className:"strength-title",children:s.title}),k.jsx("p",{className:"strength-desc",children:s.desc})]},e))})]})})}function IE(){return k.jsxs("section",{id:"contact",className:"contact",children:[k.jsx("div",{className:"contact-canvas-bg"}),k.jsxs("div",{className:"contact-content container",children:[k.jsxs("div",{className:"contact-inner",children:[k.jsx("span",{className:"section-label",children:"Contact"}),k.jsxs("h2",{className:"contact-headline",children:["让我们",k.jsx("br",{}),"一起创造"]}),k.jsxs("p",{className:"contact-desc",children:["如果您有项目合作、设计需求，或者只是想打个招呼，",k.jsx("br",{}),"欢迎随时联系我。"]}),k.jsxs("div",{className:"contact-links",children:[k.jsxs("a",{href:"mailto:2544290857@qq.com",className:"contact-link",children:[k.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[k.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),k.jsx("polyline",{points:"22,6 12,13 2,6"})]}),"2544290857@qq.com"]}),k.jsxs("a",{href:"tel:18224969612",className:"contact-link",children:[k.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:k.jsx("path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"})}),"18224969612"]})]})]}),k.jsx("div",{className:"contact-footer",children:k.jsx("span",{className:"copyright",children:"© 2026 曾钦滢. All rights reserved."})})]})]})}function UE(){return k.jsxs("div",{className:"app",children:[k.jsx(c_,{}),k.jsxs("main",{children:[k.jsx(RE,{}),k.jsx(bE,{}),k.jsx(LE,{}),k.jsx(DE,{}),k.jsx(IE,{})]})]})}u_.createRoot(document.getElementById("root")).render(k.jsx(n_.StrictMode,{children:k.jsx(UE,{})}));
