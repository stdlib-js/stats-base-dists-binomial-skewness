// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var t=function(t){return r(t)===t&&t>=0};var a=function(r){return r!=r},n=Math.sqrt,u=Number.POSITIVE_INFINITY,e=t,o=a,f=n,I=u;var N=function(r,t){return o(r)||o(t)||t<0||t>1||!e(r)||r===I?NaN:(1-2*t)/f(r*t*(1-t))};export{N as default};
//# sourceMappingURL=mod.js.map
