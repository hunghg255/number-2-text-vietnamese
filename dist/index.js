!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.number2TextVietnamese=t():e.number2TextVietnamese=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=["linh","mười","hai mươi","ba mươi","bốn mươi","năm mươi","sáu mươi","bảy mươi","tám mươi","chín mươi"],o=["không","một","hai","ba","bốn","năm","sáu","bảy","tám","chín"],u=["trăm","nghìn","triệu","tỷ"],i=[null,"mốt",null,null,"tư","lăm"];function l(e,t,n,l){var f=[],a=n.length;for(null!=t&&++e;a>e;)f.push(n[--a]);if(null!=t){var s=parseInt(n[e-1]),c=Math.floor(s/100),h=Math.floor(s%100),p=Math.floor(h%10);if(h=Math.floor(h/10),0==t)(0!=c||l.length>0)&&l.push(o[c],u[0]);else if(1==t)(0!==h||l.length>0)&&l.push(r[h]);else{switch(p){case 1:l.push(h<2?o[p]:i[p]);break;case 4:l.push(1==h?o[p]:i[p]);break;case 5:l.push(0==h?o[p]:i[p]);break;default:l.push(o[p])}var m=n.length-e;m>0&&l.push(u[Math.floor((m-1)%3+1)])}}}t.default=function(e,t){for(var n=[],r=function(e){for(var t=e.toString(),n=[],r=[],o=t.length-1;o>=0&&o<t.length;)3===n.length&&(r.unshift(n.join("")),n.length=0),n.unshift(t[o]),0===o&&n.length&&r.unshift(n.join("")),o-=1;return r}(e),u=0;u<r.length;){for(var i=0;i<3;i++)l(u,i,r,n);u<r.length-1&&t&&n.push(t),u++}return n=n.join(" ").trim(),t&&(n=n.replaceAll(" "+t+" ",t+" ")),n=n||o[numberAbs]}}]).default}));