// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;var t=function(t){return r(t)===t&&t>=0};var n=function(r){return r!=r},a=Math.sqrt,u=Number.POSITIVE_INFINITY;function e(r,e){return n(r)||n(e)||e<0||e>1||!t(r)||r===u?NaN:(1-2*e)/a(r*e*(1-e))}export{e as default};
//# sourceMappingURL=mod.js.map
