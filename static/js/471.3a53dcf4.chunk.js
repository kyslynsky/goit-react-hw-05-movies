"use strict";(self.webpackChunkmovies=self.webpackChunkmovies||[]).push([[471],{1616:function(n,e,t){t.d(e,{i:function(){return o}});var r,i=t(4268),a=t(168),c=t(6031).ZP.p(r||(r=(0,a.Z)(["\n  text-align: center;\n"]))),s=t(184),o=function(n){var e=n.message;return(0,s.jsx)(i.W,{children:(0,s.jsx)(c,{children:e})})}},3657:function(n,e,t){t.d(e,{i:function(){return r.i}});var r=t(1616)},5471:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,a,c,s,o,u,l,d=t(885),f=t(6871),p=t(2791),h=t(1207),x=t(5562),v=t(5601),g=t(4268),m=t(9775),j=t(168),Z=t(6031),w=t(501),y=Z.ZP.section(r||(r=(0,j.Z)(["\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: minmax(10px, 1fr) 3fr;\n    grid-gap: 25px;\n    margin: 20px 0;\n  }\n"]))),k=Z.ZP.li(i||(i=(0,j.Z)(["\n  display: grid;\n  gap: 16px;\n  grid-auto-flow: column;\n  grid-template-columns: 150px 1fr;\n  margin-top: 10px;\n"]))),b=Z.ZP.p(a||(a=(0,j.Z)(["\n  font-size: 1rem;\n  font-weight: 500;\n  color: #c1c1c1;\n"]))),P=Z.ZP.section(c||(c=(0,j.Z)(["\n  margin-bottom: 20px;\n"]))),_=Z.ZP.ul(s||(s=(0,j.Z)(["\n  margin-top: 20px;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(2, 100px);\n"]))),S=(0,Z.ZP)(w.rU)(o||(o=(0,j.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  color: #2da8d8ff;\n  font-size: 1.2rem;\n  font-weight: 500;\n  transition: all 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #d9514eff;\n  }\n"]))),T=t(184),U=function(n){var e=n.movieInfo,t=e.overview,r=void 0===t?"No description":t,i=e.poster_path,a=e.title,c=void 0===a?"No title here":a,s=e.vote_average,o=void 0===s?"Nobody make a vote":s,u=e.genres,l=void 0===u?"In process...":u,d=e.release_date,h=(void 0===d?"Release date has lost":d).slice(0,4),x=l.map((function(n){return n.name})).join(", "),j=(0,f.TH)();return(0,T.jsxs)(g.W,{children:[(0,T.jsxs)(y,{children:[(0,T.jsx)("div",{children:(0,T.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500".concat(i):m,alt:c})}),(0,T.jsxs)("div",{children:[(0,T.jsxs)("h1",{children:[c,(0,T.jsxs)("span",{children:[" (",h,")"]})]}),(0,T.jsxs)("ul",{children:[(0,T.jsxs)(k,{children:[(0,T.jsx)(b,{children:"Vote Average:"}),(0,T.jsx)("p",{children:o})]}),(0,T.jsxs)(k,{children:[(0,T.jsx)(b,{children:"Genres:"}),(0,T.jsx)("p",{children:x})]}),(0,T.jsxs)(k,{children:[(0,T.jsx)(b,{children:"Overview:"}),(0,T.jsx)("p",{children:r})]})]})]})]}),(0,T.jsxs)(P,{children:[(0,T.jsx)("div",{children:(0,T.jsx)("h2",{children:"Additional information"})}),(0,T.jsxs)(_,{children:[(0,T.jsx)("li",{children:(0,T.jsx)(S,{to:"credits",state:j.state,children:"Cast"})}),(0,T.jsx)("li",{children:(0,T.jsx)(S,{to:"reviews",state:j.state,children:"Reviews"})})]})]}),(0,T.jsx)(p.Suspense,{fallback:(0,T.jsx)(v.Z,{}),children:(0,T.jsx)(f.j3,{})})]})},C=t(71),N=(0,Z.ZP)(w.rU)(u||(u=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: 500;\n  color: #2da8d8ff;\n  transition: all 0.2s ease-in-out;\n\n  &:hover,\n  &:focus {\n    color: #d9514eff;\n  }\n"]))),z=(0,Z.ZP)(C.gmZ)(l||(l=(0,j.Z)(["\n  margin-right: 5px;\n  width: 26px;\n  height: 26px;\n"]))),W=function(n){var e=n.to,t=n.children;return(0,T.jsx)(g.W,{children:(0,T.jsxs)(N,{to:e,children:[(0,T.jsx)(z,{}),t]})})},I=t(3657),A=function(){var n,e,t=function(){var n=(0,f.UO)().id,e=(0,p.useState)(null),t=(0,d.Z)(e,2),r=t[0],i=t[1],a=(0,p.useState)(null),c=(0,d.Z)(a,2),s=c[0],o=c[1];return(0,p.useEffect)((function(){(0,h.TP)(n).then((function(n){if(0===n.length)return x.Notify.warning("We are sorry! There is no additional info",{clickToClose:!0}),void i(null);i(n)})).catch((function(n){x.Notify.failure(n.message,{clickToClose:!0}),o(n.message)}))}),[n]),[r,s]}(),r=(0,d.Z)(t,2),i=r[0],a=r[1],c=null!==(n=null===(e=(0,f.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(W,{to:c,children:"Back to previous"}),i&&(0,T.jsx)(U,{movieInfo:i}),a&&(0,T.jsx)(I.i,{message:a})]})}},1207:function(n,e,t){t.d(e,{Df:function(){return l},TP:function(){return f},tx:function(){return h},v_:function(){return d},zv:function(){return p}});var r=t(5861),i=t(7757),a=t.n(i),c=t(4569),s=t.n(c),o="635cd74b779a27e5473616d123657a32",u="https://api.themoviedb.org/3",l=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("\n    ".concat(u,"/trending/movie/week?api_key=").concat(o,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("\n    ".concat(u,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e,"&page=").concat(t,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("\n    ".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("\n    ".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("\n    ".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9775:function(n,e,t){n.exports=t.p+"static/media/no-poster.88d1578fe828cc07786a.jpg"}}]);
//# sourceMappingURL=471.3a53dcf4.chunk.js.map