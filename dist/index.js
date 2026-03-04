"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=u(function(c,s){
var a=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-special-sqrt/dist'),q=require('@stdlib/constants-float64-pinf/dist');function v(e,r){return i(e)||i(r)||r<0||r>1||!a(e)||e===q?NaN:(1-2*r)/n(e*r*(1-r))}s.exports=v
});var N=t();module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
