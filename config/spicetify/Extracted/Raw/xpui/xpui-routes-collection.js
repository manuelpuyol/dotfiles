"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[6309],{40771:(e,t,r)=>{r.d(t,{Z:()=>u});r(47941),r(82526),r(57327),r(41539),r(38880),r(89554),r(54747),r(49337),r(33321),r(69070);var n=r(4942),i=r(45987),a=r(67892),s=r(85893),o=["href","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.href,r=e.children,n=(0,i.Z)(e,o);return(0,s.jsx)(a.Z,l(l({to:t},n),{},{children:r}))}},69376:(e,t,r)=>{r.d(t,{n:()=>L});var n=r(4942),i=r(29439),a=(r(69826),r(41539),r(91038),r(78783),r(21249),r(85827),r(47042),r(89554),r(54747),r(57327),r(26699),r(32023),r(67294)),s=r(94184),o=r.n(s),c=r(51615),l=r(32667),u=r(34142),d=r(47921),f=r(96206),p=r(24697),m=r(32648),h=r(85951);var g=r(32626),v=r(43031),x=r(30005),b=r(21691);const j="main-topBar-contentArea",y="muYk5XIwKmqR9iNibk_f",O="queue-tabBar-headerItem",w="queue-tabBar-moreButton",k="queue-tabBar-moreButtonActive",C="yxf_6IsQEmHjijEBUMTP",I="queue-tabBar-active",R="queue-tabBar-headerItemLink",P="queue-tabBar-header",S="queue-tabBar-chevron";var Z=r(85893),E=function(e){var t=e.items,r=e.activeItemId;return(0,Z.jsx)(x.v,{children:t.map((function(e){return e.disabled?(0,Z.jsx)(b.s,{disabled:!0,role:"menuitemradio",className:C,onClick:e.handleClick,children:e.title},e.uri):(0,Z.jsx)(b.s,{role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===r,className:C,activeClassName:I,onClick:e.handleClick,children:e.title},e.uri)}))})},L=(0,a.memo)((function(e){var t,r=e.isCentered,s=e.links,x=e.landmarkLabel,b=e.className,C=(0,a.useRef)(null),L=(0,a.useState)([]),N=(0,i.Z)(L,2),D=N[0],A=N[1],T=(0,a.useState)(0),B=(0,i.Z)(T,2),U=B[0],Y=B[1],M=(0,a.useState)([]),H=(0,i.Z)(M,2),_=H[0],F=H[1],W=null!==(t=function(){var e=(0,a.useState)(window.innerWidth),t=(0,i.Z)(e,2),r=t[0],n=t[1],s=(0,a.useContext)(m.VX).scrollNodeChildRef,o=(0,p.y1)((function(e){null!=e&&e.width&&n(e.width)}),250);return(0,h.y)({refOrElement:s,observeOnly:"width",onResize:o}),r}())&&void 0!==t?t:1/0,V=(0,c.TH)().pathname,G=s.find((function(e){return e.to===V}));return(0,a.useEffect)((function(){C.current&&Y(C.current.clientWidth)}),[W]),(0,a.useEffect)((function(){if(C.current){var e=Array.from(C.current.children).map((function(e){return e.clientWidth}));A(e)}}),[s]),(0,a.useEffect)((function(){if(C.current)if(D.slice(0,-1).reduce((function(e,t){return e+t}),0)<=U)F([]);else{var e=D.reduce((function(e,t){return e>t?e:t}),0),t=[],r=e;D.forEach((function(e,n){U>=r+e?r+=e:t.push(n)})),F(t)}}),[U,D]),(0,Z.jsx)("nav",{className:o()(b,j),"aria-label":x,children:(0,Z.jsxs)("ul",{className:r?y:P,ref:C,children:[s.filter((function(e,t){return!_.includes(t)})).map((function(e){var t;return(null!==(t=null==e?void 0:e.render)&&void 0!==t?t:function(e){return e})((0,Z.jsx)("li",{className:O,children:e.disabled?(0,Z.jsx)("div",{className:R,children:(0,Z.jsx)(l.D,{variant:"mestoBold",children:e.title})}):(0,Z.jsx)(v.O,{exact:!0,className:R,activeClassName:I,to:e.to,onClick:e.handleClick,children:(0,Z.jsx)(l.D,{variant:"mestoBold",children:e.title})})},e.to))})),_.length||0===D.length?(0,Z.jsx)("li",{className:O,children:(0,Z.jsx)(g.xV,{renderInline:!0,menu:(0,Z.jsx)(E,{items:s.filter((function(e,t){return _.includes(t)})),activeItemId:null==G?void 0:G.itemId}),children:function(e,t,r){return(0,Z.jsxs)("button",{className:o()(w,(0,n.Z)({},k,G)),type:"button",onClick:t,ref:r,children:[(0,Z.jsx)(l.D,{variant:"mestoBold",children:G?G.title:f.ag.get("more")}),e?(0,Z.jsx)(u.U,{iconSize:16,className:S,"aria-hidden":"true"}):(0,Z.jsx)(d.i,{iconSize:16,className:S,"aria-hidden":"true"})]})}})}):null]})})}))},82397:(e,t,r)=>{r.r(t),r.d(t,{default:()=>kt});var n=r(15861),i=r(87757),a=r.n(i),s=(r(66992),r(41539),r(88674),r(78783),r(33948),r(67294)),o=r(86706),c=r(87577),l=r(73305),u=r(96206),d=r(70369),f=r(26700),p=r(13983),m=r(49207),h=r(98773),g=(r(57327),r(68309),r(32667)),v=r(72803),x=r(3634),b=r(4942),j=(r(21249),r(94184)),y=r.n(j),O=r(29439),w=r(48817),k=(r(89554),r(54747),r(85893)),C=function(e){var t=e.span,r=e.onInView,n=e.marginBottom,i=e.marginTop,a=(0,s.useRef)(null);return(0,s.useEffect)((function(){if(!window.IntersectionObserver)return function(){};var e=new window.IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&r()}))}));return a.current&&e.observe(a.current),function(){e.disconnect()}}),[r]),t<=0?null:(0,k.jsx)("div",{style:{gridColumn:"1/-1",gridRow:"span ".concat(t),marginBottom:n,marginTop:i},ref:a,"data-type":"sentinel"},"topSentinel")},I=function(e){var t=e.renderItems,r=e.nrItems,n=e.estimatedItemMaxHeight,i=e.scrollNodeRef,a=e.nrRowsOverscan,o=void 0===a?5:a,c=e.initalNrRows,l=void 0===c?5:c,u=(0,s.useState)({firstRowToRender:0,nrRows:l+o}),d=(0,O.Z)(u,2),f=d[0],p=d[1],m=(0,s.useRef)(0),h=(0,s.useRef)(null),g=(0,s.useRef)(n),v=(0,s.useCallback)((function(){var e,t=i.current;if(t){var r=null===(e=h.current)||void 0===e?void 0:e.querySelector(':scope > *:not([data-type="sentinel"])');g.current=r?r.getBoundingClientRect().height+w.w:g.current;var n=Math.floor((t.scrollTop-m.current)/g.current),a=Math.max(n-o,0),s=Math.ceil(t.offsetHeight/g.current)+2*o;a===f.firstRowToRender&&s===f.nrRows||p({firstRowToRender:a,nrRows:s})}}),[o,f,i]),x=(0,s.useCallback)((function(e){var n=e.columnCount;if(n<=0)return[null];var i=Math.ceil(r/n),a=f.firstRowToRender*n,s=f.firstRowToRender+f.nrRows-1,c=Math.min(r-1,(s+1)*n-1),l=g.current*(o-2);return[(0,k.jsx)(C,{span:f.firstRowToRender,onInView:v,marginBottom:"-".concat(l,"px")},"topSentinel-".concat(f.firstRowToRender)),t(a,c,n),(0,k.jsx)(C,{span:i-s,onInView:v,marginTop:"-".concat(l,"px")},"bottomSentinel-".concat(i-s))]}),[r,o,v,t,f.firstRowToRender,f.nrRows]);return(0,s.useEffect)((function(){var e=h.current,t=i.current;e&&t&&(m.current=e.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop)}),[i]),(0,k.jsx)(w.T,{useUniformRowHeight:!0,ref:h,render:x})},R=r(32648),P=r(36590),S=r(8498),Z=(0,s.memo)((function(e){var t=e.index;return(0,k.jsx)(P.C,{index:t,headerText:"",uri:"",renderCardImage:function(){return(0,k.jsx)(S.x,{images:[]})},featureIdentifier:"unknown"})}));r(91038),r(47042),r(69826),r(5212),r(47941),r(82526),r(38880),r(49337),r(33321),r(69070);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{items:[],invalid:!0};return{items:Array.from({length:e.totalLength}).map((function(n,i){var a,s=r.invalid||null===(a=r.items[i])||void 0===a?void 0:a.value;return{value:i-t in e.items?e.items[i-t]:s,index:i}})),invalid:!1}},D=function(e){return e.filter((function(e){return null!==e.value}))};const A="lA3jnNwnLc3CoYKT06Vz";function T(e){var t=e.renderCard,r=e.nrCards,i=e.fetchData,o=e.limit,c=void 0===o?50:o,l=e.cardGridApiRef,u=(0,s.useContext)(R.VX).scrollNodeRef,d=function(e){var t=e.initialItems,r=void 0===t?[]:t,i=e.nrItems,o=e.fetch,c=e.limit,l=void 0===c?0:c,u=(0,s.useRef)(!1),d=(0,s.useState)(N({totalLength:i,items:r})),f=(0,O.Z)(d,2),p=f[0],m=f[1],h=(0,s.useCallback)((function(){m((function(e){return L(L({},e),{},{invalid:!0})}))}),[]),g=(0,s.useCallback)(function(){var e=(0,n.Z)(a().mark((function e(t){var n,s,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=c.length>1&&void 0!==c[1]?c[1]:l,!u.current){e.next=3;break}return e.abrupt("return");case 3:if(o){e.next=6;break}return m(N({totalLength:i,items:r})),e.abrupt("return");case 6:return u.current=!0,e.next=9,o(t,n);case 9:s=e.sent,u.current=!1,m((function(e){return N(s,t,e)}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o,r,l,i]);return{getItems:(0,s.useCallback)((function(e,t){var r,n,i=D(p.items).slice(e,t+1),a=null!==(r=null===(n=i.find((function(e){return p.invalid||void 0===e.value})))||void 0===n?void 0:n.index)&&void 0!==r?r:p.invalid?e:void 0;return void 0!==a&&g(a),i.map((function(e){return e.value}))}),[p,g]),invalidateCache:h,hasItems:D(p.items).some((function(e){return!!e.value})),nrValidItems:D(p.items).length}}({nrItems:r,fetch:i,limit:c}),f=d.getItems,p=d.nrValidItems,m=d.invalidateCache,h=d.hasItems;(0,s.useImperativeHandle)(l,(function(){return{update:function(){return m()}}}));return(0,k.jsx)("div",{className:y()((0,b.Z)({},A,!h)),children:(0,k.jsx)(I,{renderItems:function(e,r,n){return f(e,r,c).map((function(r,i){var a=r?t(r,e+i,n):null;return null!=a?a:(0,k.jsx)(Z,{index:i},e+i)}))},scrollNodeRef:u,nrItems:p,estimatedItemMaxHeight:250})})}var B=r(30731),U=r(6158),Y=r(22423),M=r(49343),H=r(42922),_=r(45342),F=r(15852),W=r(64971),V=r(47032),G=r(38911),z=(r(92222),r(6489)),q=r(76391);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e,t,r){var n=J({},r);return n.entities=t?e.items||[]:n.entities.concat(e.items||[]),n.total=e.totalLength,n}var X={offset:0,limit:1},$=function(){var e,t,r,i,o,c,l=(0,s.useContext)(_.H),u=(0,s.useCallback)((function(){return l?null==l?void 0:l.getShows(X):Promise.resolve({totalLength:0})}),[l]);return e=u,t=(0,s.useState)(null),r=(0,O.Z)(t,2),i=r[0],o=r[1],c=(0,s.useCallback)((0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e();case 4:r=t.sent,o((null==r?void 0:r.totalLength)||0);case 6:case"end":return t.stop()}}),t)}))),[e]),(0,s.useEffect)((function(){null===i&&c()}),[i,c]),{total:i}},ee=r(47975),te=s.memo((function(e){var t=e.nrAlbums,r=(0,s.useContext)(_.H),i=(0,s.useContext)(Y.fo).filter,o=(0,s.useContext)(V.Q).sortState,c=(0,s.useRef)(null),d=(0,F.fU)(v.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:albums",identifier:l.Wg.YOURLIBRARY_ALBUMS}}),f=d.spec,p=d.UBIFragment,m=(0,s.useMemo)((function(){return f.headerFactory()}),[f]),h=(0,s.useCallback)(function(){var e=(0,n.Z)(a().mark((function e(t,n){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getAlbums({offset:t,limit:n,filter:i,sort:(0,G.Aq)(o)});case 2:return s=e.sent,e.abrupt("return",{items:s.items,totalLength:s.totalLength});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[r,i,o]),b=(0,s.useCallback)((function(e,t){return(0,k.jsx)(H.ZP,{value:"card",index:t,children:(0,k.jsx)(x.r,{index:t,uri:e.uri,name:e.name,images:e.images,artists:e.artists,sharingInfo:e.sharingInfo})},e.uri)}),[]);return(0,s.useEffect)((function(){c.current&&c.current.update()}),[o,i,t]),(0,k.jsxs)(p,{spec:f,children:[(0,k.jsx)(p,{spec:m,children:(0,k.jsxs)("div",{className:ee.Z.header,children:[(0,k.jsx)(g.D,{as:"h1",variant:"canon",children:u.ag.get("albums")}),(0,k.jsx)(s.Suspense,{fallback:null,children:(0,k.jsx)(W.h,{filterPlaceholder:u.ag.get("collection.filter.albums"),sortOptions:G.Ru})})]})}),(0,k.jsx)(T,{nrCards:t,renderCard:b,fetchData:h,cardGridApiRef:c})]})})),re=s.memo((function(){var e=function(){var e=(0,s.useContext)(_.H),t=(0,s.useState)(null),r=(0,O.Z)(t,2),i=r[0],o=r[1],c=(0,s.useCallback)((0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,null==e?void 0:e.getAlbums(X);case 4:r=t.sent,o((null==r?void 0:r.totalLength)||0);case 6:case"end":return t.stop()}}),t)}))),[e]);return(0,s.useEffect)((function(){null===i&&c()}),[i,c]),(0,q.b)(z.EW.UPDATE,c),{total:i}}(),t=e.total;return null===t?(0,k.jsx)(U.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-albums-failure")}):t?(0,k.jsx)(te,{nrAlbums:t}):(0,k.jsx)(B.u,{linkTo:"/search",linkTitle:u.ag.get("collection.empty-page.albums-cta"),message:u.ag.get("collection.empty-page.albums-subtitle"),title:u.ag.get("collection.empty-page.albums-title"),children:(0,k.jsx)(M.t,{type:"album"})})})),ne=s.memo((function(){return(0,k.jsx)(V.$,{uri:"collection/albums",defaultSortOption:G.aY,children:(0,k.jsx)(Y.hz,{uri:"collection/albums",children:(0,k.jsx)(re,{})})})})),ie=r(89477),ae=s.memo((function(e){var t=e.nrArtists,r=(0,s.useContext)(_.H),i=(0,s.useContext)(Y.fo).filter,o=(0,s.useContext)(V.Q).sortState,c=(0,s.useRef)(null),d=(0,F.fU)(v.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:artists",identifier:l.Wg.YOURLIBRARY_ARTISTS}}),f=d.spec,p=d.UBIFragment,m=(0,s.useMemo)((function(){return f.headerFactory()}),[f]),h=(0,s.useCallback)(function(){var e=(0,n.Z)(a().mark((function e(t,n){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getArtists({offset:t,limit:n,filter:i,sort:(0,G.e3)(o)});case 2:return s=e.sent,e.abrupt("return",{items:s.items,totalLength:s.totalLength});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[r,i,o]),x=(0,s.useCallback)((function(e,t){return(0,k.jsx)(H.ZP,{value:"card",index:t,children:(0,k.jsx)(ie.I,{index:t,name:e.name,uri:e.uri,images:e.images})},e.uri)}),[]);return(0,s.useEffect)((function(){c.current&&c.current.update()}),[o,i,t]),(0,k.jsxs)(p,{spec:f,children:[(0,k.jsx)(p,{spec:m,children:(0,k.jsxs)("div",{className:ee.Z.header,children:[(0,k.jsx)(g.D,{as:"h1",variant:"canon",children:u.ag.get("artists")}),(0,k.jsx)(s.Suspense,{fallback:null,children:(0,k.jsx)(W.h,{filterPlaceholder:u.ag.get("collection.filter.artists"),sortOptions:G.o$})})]})}),(0,k.jsx)(T,{nrCards:t,renderCard:x,fetchData:h,cardGridApiRef:c})]})})),se=s.memo((function(){var e=function(){var e=(0,s.useContext)(_.H),t=(0,s.useState)(null),r=(0,O.Z)(t,2),i=r[0],o=r[1],c=(0,s.useCallback)((0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,null==e?void 0:e.getArtists(X);case 4:r=t.sent,o((null==r?void 0:r.totalLength)||0);case 6:case"end":return t.stop()}}),t)}))),[e]);return(0,s.useEffect)((function(){null===i&&c()}),[i,c]),(0,q.b)(z.EW.UPDATE,c),{total:i}}(),t=e.total;return null===t?(0,k.jsx)(U.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-artists-failure")}):t>0?(0,k.jsx)(ae,{nrArtists:t}):(0,k.jsx)(B.u,{message:u.ag.get("collection.empty-page.artists-subtitle"),title:u.ag.get("collection.empty-page.artists-title"),linkTo:"/search",linkTitle:u.ag.get("collection.empty-page.artists-cta"),children:(0,k.jsx)(M.t,{type:"artist"})})})),oe=s.memo((function(){return(0,k.jsx)(V.$,{uri:"collection/artists",defaultSortOption:G.u3,children:(0,k.jsx)(Y.hz,{uri:"collection/artists",children:(0,k.jsx)(se,{})})})})),ce=r(51216),le=function(e){return""===e.authorName&&""===e.name},ue=s.memo((function(e){var t=e.nrBooks,r=(0,s.useContext)(_.H),i=(0,s.useContext)(Y.fo).filter,o=(0,s.useContext)(V.Q).sortState,c=(0,F.fU)(v.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:audiobooks",identifier:l.Wg.YOURLIBRARY_AUDIOBOOKS}}),d=c.spec,f=c.UBIFragment,p=(0,s.useMemo)((function(){return d.headerFactory()}),[d]),m=(0,s.useRef)(null),h=(0,s.useCallback)(function(){var e=(0,n.Z)(a().mark((function e(t,n){var s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getBooks({offset:t,limit:n,filter:i,sort:(0,G.G5)(o)});case 2:return s=e.sent,e.abrupt("return",{items:s.items.map((function(e){return le(e)?null:e})),totalLength:s.totalLength});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[r,i,o]),x=(0,s.useCallback)((function(e,t){return(0,k.jsx)(H.ZP,{value:"card",index:t,children:(0,k.jsx)(ce.c,{index:t,uri:e.uri,name:e.name,images:e.images,authorName:e.authorName,isLocked:e.isLocked})},e.uri)}),[]);return(0,s.useEffect)((function(){m.current&&m.current.update()}),[o,i,t]),(0,k.jsxs)(f,{spec:d,children:[(0,k.jsx)(f,{spec:p,children:(0,k.jsxs)("div",{className:ee.Z.header,children:[(0,k.jsx)(g.D,{as:"h1",variant:"canon",children:u.ag.get("search.title.audiobooks")}),(0,k.jsx)(W.h,{filterPlaceholder:"Search in Audiobooks",sortOptions:G.ZP})]})}),(0,k.jsx)(T,{nrCards:t,renderCard:x,fetchData:h,cardGridApiRef:m})]})})),de=s.memo((function(){var e=function(){var e=(0,s.useContext)(_.H),t=(0,s.useState)(null),r=(0,O.Z)(t,2),i=r[0],o=r[1],c=(0,s.useCallback)((0,n.Z)(a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,null==e?void 0:e.getBooks(X);case 4:r=t.sent,o((null==r?void 0:r.totalLength)||0);case 6:case"end":return t.stop()}}),t)}))),[e]);return(0,s.useEffect)((function(){null===i&&c()}),[i,c]),(0,q.b)(z.EW.UPDATE,c),{total:i}}(),t=e.total;return null===t?(0,k.jsx)(U.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-albums-failure")}):t>0?(0,k.jsx)(ue,{nrBooks:t}):(0,k.jsx)(B.u,{linkTo:"/search",linkTitle:u.ag.get("collection.empty-page.books-cta"),message:u.ag.get("collection.empty-page.books-subtitle"),title:u.ag.get("collection.empty-page.books-title"),children:(0,k.jsx)(M.t,{type:"book"})})})),fe=s.memo((function(){return(0,k.jsx)(V.$,{uri:"collection/books",defaultSortOption:G.JV,children:(0,k.jsx)(Y.hz,{uri:"collection/books",children:(0,k.jsx)(de,{})})})})),pe=r(93433),me=(r(41817),r(46309)),he=r(74895),ge=r(24697),ve=r(98620),xe=r(13947),be=r(72131),je=r(45788),ye=r(66393),Oe=r(91389),we=r(84242),ke=r(69691),Ce=r(28230);const Ie="tlNAdRNP5lIeiD85nMcL",Re="FmJEtzkC9046pKloStht";var Pe=function(){var e=(0,Ce.g)("images/playlist-folder-filled.svg");return(0,k.jsx)("div",{className:Ie,children:(0,k.jsx)("img",{src:e,alt:u.ag.get("local-files"),className:Re})})};function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ee=function(e){var t,r=e.uri,i=e.name,o=e.images,c=e.index,l=(0,je.u)(),d=(0,s.useRef)(null),f=(0,s.useRef)(!0),p=(0,s.useContext)(ye.t),m=(0,ke.cR)(be.b).isPlaying,h=(0,we.n)({uri:be.b,pages:[{items:(null===(t=d.current)||void 0===t?void 0:t.map((function(e){return Ze(Ze({},e),{},{provider:null})})))||[]}]},{featureIdentifier:"local_files"}).togglePlay;(0,s.useEffect)((function(){return f.current=!0,function(){f.current=!1}}),[]);var g=(0,Oe.I)(),v=(0,ge.y1)(function(){var e=(0,n.Z)(a().mark((function e(t,r){var n,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d.current){e.next=5;break}return e.next=3,p.getTracks();case 3:n=e.sent,d.current=n;case 5:f&&h({loggingParams:r},{uri:be.b,pages:[{items:(null===(i=d.current)||void 0===i?void 0:i.map((function(e){return Ze(Ze({},e),{},{provider:null})})))||[]}]});case 6:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),xe.s_,{leading:!0,trailing:!1});return l.canFetchAllTracks&&g?(0,k.jsx)(P.Z,{index:c,delegatePlayback:!0,delegateLogging:!0,isPlaying:m,onPlay:v,headerText:i,featureIdentifier:"local_files",uri:r,renderCardImage:function(){return(0,k.jsx)(S.x,{images:o,FallbackComponent:Pe})},renderSubHeaderContent:function(){return(0,k.jsx)("span",{children:u.ag.get("local-files.description")})}}):null},Le=function(e){var t=e.index,r=(0,ve.gB)();return(0,k.jsx)(s.Suspense,{fallback:null,children:(0,k.jsx)(Ee,{index:t,name:r.name,uri:r.uri,images:r.images})})},Ne=r(49068),De=r(64269),Ae=r(42624),Te=r(29255),Be=r(72138),Ue=r(42781),Ye=r(38470),Me=r(21610),He=r(39561),_e=r(22247);const Fe="collection-collectionEntityHeroCard-likedSongs",We="collection-collectionEntityHeroCard-container",Ve="kST1INfbHSxzydJffBq_",Ge="collection-collectionEntityHeroCard-headerContainer",ze="collection-collectionEntityHeroCard-tracksContainer",qe="lBs1v3T3HAPrOxfyWemr",Ke="collection-collectionEntityHeroCard-descriptionContainer",Je="d8ifuAZX8mK644AwlRZK";function Qe(e,t){return Array.from(new Array(e).keys()).map((function(e){return(0,k.jsx)(_e.C,{as:"div",className:qe,charCount:t,isLoading:!0},e)}))}var Xe=function(e){var t=e.index,r=e.onClick,n=(0,He.MY)({limit:7}),i=(0,o.v9)(Te.Gg).user,a=(0,ve.I2)(null==i?void 0:i.id);return a?(0,k.jsx)(Me.Z,{index:t,className:y()(Fe,We),onClick:r,headerText:a.name,featureIdentifier:"your_library",uri:a.uri,ariaPlayLabel:u.ag.get("playlist.a11y.play",a.name),ariaPauseLabel:u.ag.get("playlist.a11y.pause",a.name),renderCardImage:function(){return(0,k.jsx)("div",{className:Ge,children:(0,k.jsx)("div",{className:ze,children:n?(e=n,e.items.map((function(e,t){var r=e.uri,n=e.name,i=(0,O.Z)(e.artists,1)[0];return(0,k.jsxs)("span",{children:[(0,k.jsx)("span",{className:Je,children:t?" • ":""}),(0,k.jsx)("span",{dir:"auto",children:i.name}),(0,k.jsx)("span",{dir:"auto",className:Je,children:n})]},r)}))):Qe(3)})});var e},renderSubHeaderContent:function(){return(0,k.jsx)("div",{className:Ke,children:n?"".concat(n.totalLength," ").concat(a.name):Qe(1,a.name.length)})}}):null},$e=function(e,t,r){var n;return(0,k.jsx)(H.ZP,{value:"card",index:t,children:r},null!==(n="".concat(e.uri))&&void 0!==n?n:t)},et=function(e,t,r){var n;switch(e.type){case Ue.p.LIKED_SONGS:return $e(e,t,r>1?(0,k.jsx)(Xe,{index:t},e.uri):(0,k.jsx)(he.p,{index:t},e.uri));case Ue.p.YOUR_EPISODES:return $e(e,t,(0,k.jsx)(De.T,{index:t},e.uri));case Ue.p.LOCAL_FILES:return $e(e,t,(0,k.jsx)(Le,{index:t},e.uri));case Ue.p.PLAYLIST:return $e(e,t,(0,k.jsx)(me.Z,{index:t,name:e.name,uri:e.uri,images:e.images,description:e.description,authorName:null===(n=e.owner)||void 0===n?void 0:n.displayName,isPlayable:e.totalLength>0},e.uri));case"placeholder":return $e(e,t,(0,k.jsx)(me.Z,{index:t,uri:e.uri,name:"",images:[],description:"",authorName:""},e.uri));case"empty":return(0,k.jsx)(s.Fragment,{},t);case"folder":return null;default:return(0,Ye._)(e),null}},tt=s.memo((function(e){var t=e.nrPlaylists,r=e.showYourEpisodesCard,i=e.showLocalFilesCard,c=(0,s.useContext)(Y.fo).filter,d=(0,s.useContext)(V.Q).sortState,f=(0,s.useContext)(Be.BS),p=(0,s.useRef)(null),m=(0,o.v9)(Te.Gg).user,h=(0,F.fU)(v.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:playlists",identifier:l.Wg.YOURLIBRARY_PLAYLISTS}}),x=h.spec,b=h.UBIFragment,j=(0,s.useMemo)((function(){return x.headerFactory()}),[x]),y=(0,s.useMemo)((function(){var e=[];if(c)return e;var t=(0,ve.I2)(null==m?void 0:m.id);t&&(e.push(t),e.push({uri:"",type:"empty"}));var n=r?(0,ve.bl)(null==m?void 0:m.id):null;n&&e.push(n);var a=i?(0,ve.gB)():null;return a&&e.push(a),e}),[c,i,r,m]),O=(0,s.useCallback)((function(){null!=p&&p.current&&p.current.update()}),[p]);(0,Be.iu)(O);var w=(0,s.useCallback)(function(){var e=(0,n.Z)(a().mark((function e(t,r){var n,i,s,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.slice(t),i=t-(y.length-n.length),e.next=4,f.getContents({offset:i,limit:r,filter:c,sort:(0,G.pT)(d),flatten:!0,decorateImagesAndOwner:!0});case 4:return s=e.sent,o=s.items.map((function(e){return"placeholder"===e.type?null:e})),e.abrupt("return",{items:[].concat((0,pe.Z)(n),(0,pe.Z)(o)),totalLength:s.totalItemCount+y.length});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[y,f,c,d]);return(0,s.useEffect)((function(){p.current&&p.current.update()}),[d,c,t]),(0,k.jsxs)(b,{spec:x,children:[(0,k.jsx)(b,{spec:j,children:(0,k.jsxs)("div",{className:ee.Z.header,children:[(0,k.jsx)(g.D,{as:"h1",variant:"canon",children:u.ag.get("playlists")}),(0,k.jsx)(s.Suspense,{fallback:null,children:(0,k.jsx)(W.h,{filterPlaceholder:u.ag.get("collection.filter.playlists"),sortOptions:G.w0})})]})}),(0,k.jsx)(T,{nrCards:t+y.length,renderCard:et,fetchData:w,cardGridApiRef:p})]})})),rt=s.memo((function(){var e=(0,Be.Rt)(),t=(0,Ne.x)(),r=(0,je.u)(),n=(0,Ae.K)().createPlaylist,i=(0,Oe.I)(),a=(0,s.useCallback)((function(){n()}),[n]);return null===e||null===t?(0,k.jsx)(U.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-albums-failure")}):null!=e&&e.playlistCount?(0,k.jsx)(tt,{nrPlaylists:e.playlistCount,showYourEpisodesCard:t.totalLength>0,showLocalFilesCard:r.canFetchAllTracks&&i}):(0,k.jsx)(B.u,{linkTitle:u.ag.get("collection.empty-page.playlists-cta"),onClick:a,title:u.ag.get("collection.empty-page.playlists-title"),message:u.ag.get("collection.empty-page.playlists-subtitle"),children:(0,k.jsx)(M.t,{type:"playlist"})})})),nt=s.memo((function(){return(0,k.jsx)(V.$,{uri:"collection/playlists",defaultSortOption:G.Bf,children:(0,k.jsx)(Y.hz,{uri:"collection/playlists",children:(0,k.jsx)(rt,{})})})})),it=(r(91058),r(95332)),at=r(49552),st=r(21794),ot=r(143),ct=r(19480),lt=function(){var e="ginger-audio-shows-top-20-web",t=(0,at.P)(e).view;if(!t)return null;var r=t.content,n=t.name,i=r.total,a=void 0===i?0:i,s=r.items;return(0,k.jsx)(ct.P,{title:n,total:a,seeAllUri:(0,st.p)(e),children:s.filter((function(e){return"show"===e.type})).map((function(e,t){var r;return(0,k.jsx)(it._,{name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,mediaType:null!==(r={audio:ot.E.AUDIO,video:ot.E.VIDEO,mixed:ot.E.MIXED}[e.media_type])&&void 0!==r?r:ot.E.AUDIO,sharingInfo:null,index:t},e.uri)}))})},ut=r(70937),dt=r(66257);function ft(e,t){return Array.from(new Array(e).keys()).map((function(e){return(0,k.jsx)(_e.C,{as:"div",className:qe,charCount:t,isLoading:!0},e)}))}var pt=function(e){var t=e.index,r=(0,He.j$)({limit:7}),n=(0,o.v9)(Te.Gg).user,i=(0,ve.bl)(null==n?void 0:n.id);return i?(0,k.jsx)(Me.Z,{index:t,className:y()(Fe,Ve),headerText:i.name,featureIdentifier:"your_library",uri:i.uri,ariaPlayLabel:u.ag.get("playlist.a11y.play",i.name),ariaPauseLabel:u.ag.get("playlist.a11y.pause",i.name),renderCardImage:function(){return(0,k.jsx)("div",{className:Ge,children:(0,k.jsx)("div",{className:ze,children:r?(e=r,e.items.map((function(e,t){var r=e.uri,n=e.name,i=e.show;return(0,k.jsxs)("span",{children:[(0,k.jsx)("span",{className:Je,children:t?" • ":""}),(0,k.jsx)("span",{dir:"auto",children:n}),(0,k.jsx)("span",{dir:"auto",className:Je,children:i.name})]},r)}))):ft(3)})});var e},renderSubHeaderContent:function(){return(0,k.jsx)("div",{className:Ke,children:r?u.ag.get("tracklist-header.episodes-counter",r.totalLength):ft(1,i.name.length)})}}):null},mt=s.memo((function(e){var t=e.nrShows,r=(0,s.useContext)(_.H),i=(0,s.useContext)(Y.fo).filter,c=(0,s.useContext)(V.Q).sortState,d=(0,s.useRef)(!1),f=(0,s.useRef)({entities:[],total:t}),p=(0,s.useState)(0),m=(0,O.Z)(p,2),h=m[0],x=m[1],b=(0,o.v9)(Te.Gg).user,j=(0,F.fU)(v.createDesktopLibraryEventFactory,{data:{uri:"spotify:app:collection:podcasts",identifier:l.Wg.YOURLIBRARY_SHOWS}}),y=j.spec,C=j.UBIFragment,I=(0,s.useMemo)((function(){return y.headerFactory()}),[y]),R=(0,s.useCallback)(function(){var e=(0,n.Z)(a().mark((function e(t,n){var s,o,l=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=l.length>2&&void 0!==l[2]&&l[2],d.current){e.next=9;break}return d.current=!s,e.next=5,r.getShows({offset:t,limit:n,filter:i,sort:(0,G.EY)(c)});case 5:o=e.sent,f.current=Q(o,s,f.current),d.current=!1,x((function(e){return e+1}));case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[r,i,c,f]),P=(0,s.useCallback)((function(e){f.current=function(e,t){var r=J({},t),n=t.entities.filter((function(t){return t.uri!==e}));return r.total=(t.total||0)-(t.entities.length-n.length),r.entities=n,r}(e,f.current),x((function(e){return e+1}))}),[]);(0,s.useEffect)((function(){R(0,50,!!h)}),[i,c]);var S=(0,s.useCallback)((function(){f.current.entities.length!==f.current.total&&R(f.current.entities.length,50)}),[R,f]);return(0,k.jsx)(C,{spec:y,children:(0,k.jsxs)(ut.C,{onReachBottom:S,children:[(0,k.jsx)(C,{spec:I,children:(0,k.jsxs)("div",{className:ee.Z.header,children:[(0,k.jsx)(g.D,{as:"h1",variant:"canon",children:u.ag.get("podcasts")}),(0,k.jsx)(s.Suspense,{fallback:null,children:(0,k.jsx)(W.h,{filterPlaceholder:u.ag.get("collection.filter.podcasts"),sortOptions:G.a6})})]})}),(0,k.jsx)(dt.r,{onLibraryItemRemove:P,children:(0,k.jsx)(H.ZP,{value:"EntitiesGrid",children:(0,k.jsx)(w.T,{render:function(){var e=(0,ve.bl)(null==b?void 0:b.id),t=i||!e||0===f.current.entities.length?[]:[(0,k.jsx)(s.Suspense,{fallback:null,children:(0,k.jsx)(pt,{index:0})},"your-episodes-card")],r=t.length>0;return t.concat(f.current.entities.map((function(e,t){var n=r?t+1:t;return(0,k.jsx)(H.ZP,{value:"card",index:n,children:(0,k.jsx)(it._,{index:n,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,sharingInfo:null})},e.uri)})))}})})})]})})})),ht=s.memo((function(){var e=$().total,t=(0,o.v9)(Te.Gg).productState,r=!!t&&parseInt(t.ads,10)>0;return null===e?(0,k.jsx)(U.h,{hasError:!1,errorMessage:u.ag.get("error.request-collection-shows-failure")}):e?(0,k.jsx)(mt,{nrShows:e}):(0,k.jsxs)("div",{className:y()(ee.Z.emptyStateContainer,(0,b.Z)({},ee.Z.adBarEnabled,r)),children:[(0,k.jsx)(B.u,{linkTo:"/genre/podcasts-web",linkTitle:u.ag.get("collection.empty-page.shows-cta"),message:u.ag.get("collection.empty-page.shows-subtitle"),title:u.ag.get("collection.empty-page.shows-title"),renderInline:!0,children:(0,k.jsx)(M.t,{type:"show"})}),(0,k.jsx)(lt,{})]})})),gt=s.memo((function(){return(0,k.jsx)(V.$,{uri:"collection/podcasts",defaultSortOption:G.rJ,children:(0,k.jsx)(Y.hz,{uri:"collection/podcasts",children:(0,k.jsx)(ht,{})})})})),vt=r(48414),xt=r(69376),bt=r(28638);function jt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function yt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?jt(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):jt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ot=function(e){var t=e.isAudiobooksEnabled,r=(0,o.v9)(h.rH),n=(0,F.fU)(vt.createDesktopLibraryTopbarEventFactory,{}),i=n.spec,a=n.logger,c=(0,s.useMemo)((function(){return[{title:u.ag.get("playlists"),itemId:"collection.tab-playlists",to:"/collection/playlists",uri:"spotify:app:collection:playlists"}].concat((0,pe.Z)(r?[{title:u.ag.get("podcasts"),itemId:"collection.tab-podcasts",to:"/collection/podcasts",uri:"spotify:app:collection:podcasts"}]:[]),(0,pe.Z)(t?[{title:u.ag.get("search.title.audiobooks"),itemId:"collection.tab-audiobooks",to:"/collection/audiobooks",uri:"spotify:app:collection:audiobooks"}]:[]),[{title:u.ag.get("artists"),itemId:"collection.tab-artists",to:"/collection/artists",uri:"spotify:app:collection:artists"},{title:u.ag.get("albums"),itemId:"collection.tab-albums",to:"/collection/albums",uri:"spotify:app:collection:albums"}]).map((function(e,t){var r=e.uri;return yt(yt({},e),{},{handleClick:function(){var e=i.linkFactory({position:t,uri:r}).hitUiNavigate({destination:r});a.logInteraction(e)}})}))}),[r,t,a,i]);return(0,k.jsx)(bt.w,{children:(0,k.jsx)(xt.n,{className:ee.Z.tabBar,links:c})})},wt=s.lazy((0,n.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.e(4246).then(r.bind(r,33377));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))));const kt=function(){var e=(0,o.v9)(h.rH),t=(0,c.W6)(m.uB);return(0,p.z)("your_library"),(0,k.jsxs)("section",{className:"contentSpacing",children:[(0,k.jsx)(d.$,{children:u.ag.get("collection.page-title")}),(0,k.jsx)(f.l,{path:"/collection/artists",pageId:l.Wg.YOURLIBRARY_ARTISTS,children:(0,k.jsx)(oe,{})}),(0,k.jsx)(f.l,{path:"/collection/albums",pageId:l.Wg.YOURLIBRARY_ALBUMS,children:(0,k.jsx)(ne,{})}),(0,k.jsx)(f.l,{path:"/collection/playlists",pageId:l.Wg.YOURLIBRARY_PLAYLISTS,children:(0,k.jsx)(nt,{})}),e&&(0,k.jsx)(f.l,{path:"/collection/podcasts",pageId:l.Wg.YOURLIBRARY_SHOWS,children:(0,k.jsx)(gt,{})}),t&&(0,k.jsx)(f.l,{path:"/collection/audiobooks",pageId:l.Wg.YOURLIBRARY_AUDIOBOOKS,children:(0,k.jsx)(fe,{})}),(0,k.jsx)(f.l,{path:"/collection/music-downloads",pageId:l.Wg.YOURLIBRARY_DOWNLOADS,children:(0,k.jsx)(wt,{})}),(0,k.jsx)(Ot,{isAudiobooksEnabled:t})]})}},49552:(e,t,r)=>{r.d(t,{P:()=>x});var n=r(4942),i=r(15861),a=(r(85827),r(41539),r(92222),r(47941),r(82526),r(57327),r(38880),r(89554),r(54747),r(49337),r(33321),r(69070),r(87757)),s=r.n(a),o=r(67294),c=r(88767),l=r(87961),u=r(40254),d=(r(69600),r(86706)),f=r(87577),p=r(94321),m=r(29255),h=r(8247);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=function(e,t){var r,n,a,l,u,g,x,j,O,w=(a=(0,f.W6)(h.Xf),l=(0,d.v9)(p.rZ),u=(0,d.v9)(m.Gg),g=u.locale,x=u.overrides,j=(null==x?void 0:x.country)||l,O=(null==x?void 0:x.locale)||g,(0,o.useMemo)((function(){var e=["album","playlist","artist","show","station","episode","merch"];return a&&e.push("uri_link"),{country:j,locale:O,types:e.join(",")}}),[j,a,O])),k=(0,c.useInfiniteQuery)(["useView",e,w],function(){var t=(0,i.Z)(s().mark((function t(r){var n,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.pageParam,i=void 0===n?void 0:n,t.abrupt("return",void 0===i?b(e,w):y(i));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{cacheTime:null!==(r=null==t?void 0:t.cacheTime)&&void 0!==r?r:18e5,staleTime:null!==(n=null==t?void 0:t.staleTime)&&void 0!==n?n:3e5,getNextPageParam:function(e){var t;return null!==(t=e.content.next)&&void 0!==t?t:void 0},getPreviousPageParam:function(e){var t;return null!==(t=e.content.previous)&&void 0!==t?t:void 0}}),C=k.data,I=k.fetchNextPage;return{view:(0,o.useMemo)((function(){return null==C?void 0:C.pages.reduce((function(e,t){return v(v({},e),{},{content:v(v({},e.content),{},{href:t.content.href,next:t.content.next,offset:t.content.offset,previous:t.content.previous,total:t.content.total,items:e.content.items.concat(t.content.items)})})}))}),[null==C?void 0:C.pages]),getNextPage:I}};function b(e,t){return j.apply(this,arguments)}function j(){return(j=(0,i.Z)(s().mark((function e(t,r){var n,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.kO.getView(l.b.getInstance(),t,r);case 2:return n=e.sent,i=n.body,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return O.apply(this,arguments)}function O(){return(O=(0,i.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.TV.getGeneric(l.b.getInstance(),t);case 2:return r=e.sent,n=r.body,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},70937:(e,t,r)=>{r.d(t,{C:()=>d});var n=r(4942),i=r(67294),a=r(97650),s=r(94184),o=r.n(s);const c="eqw9lvuoZHrkWMTdyTpY",l="lb08f71wES9AQnKx6e0R";var u=r(85893),d=i.memo((function(e){var t,r=e.triggerOnInitialLoad,s=void 0!==r&&r,d=e.onReachBottom,f=e.showScrollbar,p=void 0===f||f,m=e.horizontalScroll,h=void 0!==m&&m,g=e.className,v=(0,a.YD)({initialInView:s}),x=v.ref,b=v.inView;return(0,i.useEffect)((function(){b&&d&&d()}),[b,d]),(0,u.jsxs)("div",{className:o()((t={},(0,n.Z)(t,l,!p),(0,n.Z)(t,c,h),t),g),"data-testid":"infinite-scroll-list",children:[e.children,(0,u.jsx)("div",{ref:x})]})}))},91389:(e,t,r)=>{r.d(t,{I:()=>i});var n=r(30302);function i(){return(0,n.S)()[0]}},47975:(e,t,r)=>{r.d(t,{Z:()=>n});const n={header:"collection-collection-header",tabBar:"collection-collection-tabBar",AddToPlaylistIcon:"collection-collection-AddToPlaylistIcon",emptyStateContainer:"collection-collection-emptyStateContainer",adBarEnabled:"collection-collection-adBarEnabled"}}}]);
//# sourceMappingURL=xpui-routes-collection.js.map