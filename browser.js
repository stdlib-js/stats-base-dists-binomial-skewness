// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor,n=function(n){return e(n)===n&&n>=0},t=function(e){return e!=e},o=Math.sqrt,f=Number.POSITIVE_INFINITY;return function(e,r){return t(e)||t(r)||r<0||r>1||!n(e)||e===f?NaN:(1-2*r)/o(e*r*(1-r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).skewness=n();
//# sourceMappingURL=browser.js.map
