"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[162],{1616:function(n,t,e){e.d(t,{i:function(){return o}});var r,a=e(4268),c=e(168),u=e(6031).ZP.p(r||(r=(0,c.Z)(["\n  text-align: center;\n"]))),i=e(184),o=function(n){var t=n.message;return(0,i.jsx)(a.W,{children:(0,i.jsx)(u,{children:t})})}},8162:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var r,a,c,u=e(885),i=e(2791),o=e(6871),s=e(1207),f=e(1616),p=e(168),l=e(6031),d=l.ZP.ul(r||(r=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),v=l.ZP.li(a||(a=(0,p.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),h=l.ZP.p(c||(c=(0,p.Z)(["\n  color: #c1c1c1;\n"]))),g=e(184),x=function(){var n=function(){var n=(0,o.UO)().id,t=(0,i.useState)(),e=(0,u.Z)(t,2),r=e[0],a=e[1],c=(0,i.useState)(null),f=(0,u.Z)(c,2),p=f[0],l=f[1];return(0,i.useEffect)((function(){(0,s.tx)(n).then((function(n){0!==n.length?a(n):l("Currently doesn`t got one")})).catch((function(n){l(n.message)}))}),[n]),[r,p]}(),t=(0,u.Z)(n,2),e=t[0],r=t[1];return(0,g.jsxs)("section",{children:[r&&(0,g.jsx)(f.i,{message:r}),(0,g.jsx)(d,{children:null===e||void 0===e?void 0:e.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,g.jsxs)(v,{children:[(0,g.jsxs)("h3",{children:["Author: ",(0,g.jsx)("span",{children:e})]}),(0,g.jsx)(h,{children:r})]},t)}))})]})}},1207:function(n,t,e){e.d(t,{Df:function(){return f},TP:function(){return l},tx:function(){return v},v_:function(){return p},zv:function(){return d}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),i=e.n(u),o="635cd74b779a27e5473616d123657a32",s="https://api.themoviedb.org/3",f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("\n    ".concat(s,"/trending/movie/week?api_key=").concat(o,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("\n    ".concat(s,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("\n    ".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("\n    ".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("\n    ".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=162.0af5fefd.chunk.js.map