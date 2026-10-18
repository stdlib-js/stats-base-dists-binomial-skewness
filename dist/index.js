"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var t=a(function(f,s){
var n=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-sqrt/dist'),v=require('@stdlib/constants-float64-pinf/dist');function N(e,r){return i(e)||i(r)||r<0||r>1||!n(e)||e===v?NaN:(1-2*r)/q(e*r*(1-r))}s.exports=N
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
