"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7379],{40771:(e,t,r)=>{r.d(t,{Z:()=>u});r(47941),r(82526),r(57327),r(41539),r(38880),r(89554),r(54747),r(49337),r(33321),r(69070);var n=r(4942),i=r(45987),l=r(67892),a=r(85893),s=["href","children"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.href,r=e.children,n=(0,i.Z)(e,s);return(0,a.jsx)(l.Z,c(c({to:t},n),{},{children:r}))}},30731:(e,t,r)=>{r.d(t,{u:()=>p});var n=r(4942),i=r(67294),l=r(94184),a=r.n(l),s=r(32667),o=r(34011),c=r(6330),u=r(40771);const d="FvfvGU3jvHRskUU9v9_8",m="Q9AlbZn2EGzy3MTWXa8X",x="mxmxS0y8LiwSs5nueKPT",g="GXxVAveNFStY3pBI_NO4",f="eHcXC2s97InYP7rMNT0H";var h=r(85893),p=(0,i.memo)((function(e){var t=e.children,r=e.message,i=e.title,l=e.linkTitle,p=e.linkTo,j=e.onClick,S=e.renderInline,b=void 0!==S&&S,v=(0,c.e)(),y=v.isXSOnly,k=v.isSMOnly,O=y||k;return(0,h.jsxs)("section",{className:a()(d,(0,n.Z)({},m,b)),children:[t,(0,h.jsx)(s.D,{as:"h1",variant:O?"cello":"alto",className:g,children:i}),(0,h.jsx)(s.D,{variant:O?"mesto":"ballad",className:f,children:r}),l&&(p||j)&&(0,h.jsx)(o.D,{colorSet:"invertedLight",className:x,href:p,onClick:j,component:u.Z,children:l})]})}))},35213:(e,t,r)=>{r.d(t,{l:()=>b});var n,i,l=r(93433),a=(r(40561),r(57327),r(41539),r(21249),r(67294)),s=r(96206),o=r(76119),c=r(4942),u=(r(26699),r(32023),r(78462)),d=r(73785),m={"custom-order":u.HI,title:{column:d.Q.TITLE,order:d.k.ASC},artist:{column:d.Q.TITLE,order:d.k.SECONDARY_ASC},"added-by":{column:d.Q.ADDED_BY,order:d.k.ASC},"added-at":{column:d.Q.ADDED_AT,order:d.k.ASC},duration:{column:d.Q.DURATION,order:d.k.ASC},album:{column:d.Q.ALBUM,order:d.k.ASC},"album-or-podcast":{column:d.Q.ALBUM_OR_PODCAST,order:d.k.ASC},"album-or-show":{column:d.Q.ALBUM_OR_SHOW,order:d.k.ASC}},x={title:d.Q.TITLE,artist:d.Q.TITLE,"added-by":d.Q.ADDED_BY,"added-at":d.Q.ADDED_AT,duration:d.Q.DURATION,album:d.Q.ALBUM,"album-or-podcast":d.Q.ALBUM_OR_PODCAST,"album-or-show":d.Q.ALBUM_OR_SHOW},g=(n={},(0,c.Z)(n,d.k.NONE,d.k.NONE),(0,c.Z)(n,d.k.ASC,d.k.DESC),(0,c.Z)(n,d.k.DESC,d.k.ASC),(0,c.Z)(n,d.k.SECONDARY_ASC,d.k.SECONDARY_DESC),(0,c.Z)(n,d.k.SECONDARY_DESC,d.k.SECONDARY_ASC),n),f=(i={},(0,c.Z)(i,d.Q.INDEX,{key:"custom-order",get value(){return s.ag.get("sort.custom-order")}}),(0,c.Z)(i,d.Q.TITLE,{key:"title",get value(){return s.ag.get("sort.title")}}),(0,c.Z)(i,d.Q.ARTIST,{key:"artist",get value(){return s.ag.get("sort.artist")}}),(0,c.Z)(i,d.Q.ADDED_BY,{key:"added-by",get value(){return s.ag.get("sort.added-by")}}),(0,c.Z)(i,d.Q.ADDED_AT,{key:"added-at",get value(){return s.ag.get("sort.date-added")}}),(0,c.Z)(i,d.Q.DURATION,{key:"duration",get value(){return s.ag.get("sort.duration")}}),(0,c.Z)(i,d.Q.EVENT_DATE,null),(0,c.Z)(i,d.Q.ALBUM,{key:"album",get value(){return s.ag.get("sort.album")}}),(0,c.Z)(i,d.Q.ALBUM_OR_PODCAST,{key:"album-or-podcast",get value(){return s.ag.get("sort.album-or-podcast")}}),(0,c.Z)(i,d.Q.ALBUM_OR_SHOW,{key:"album-or-show",get value(){return s.ag.get("sort.album-or-show")}}),(0,c.Z)(i,d.Q.PLAYS,null),(0,c.Z)(i,d.Q.RELEASE_DATE,null),(0,c.Z)(i,d.Q.ADD,null),(0,c.Z)(i,d.Q.ACTIONS,null),i),h=r(28248),p=r(1838),j=r(85893);function S(e){return!!e}var b=function(e){var t=e.columns,r=e.disabled,n=e.onSort,i=(0,l.Z)(t);i.splice(2,0,h.QD.ARTIST);var c=(0,a.useContext)(u.Gb),b=c.sortState,v=c.setSortState,y=function(e){return null===e.column?f[h.QD.INDEX]:(0,p.cB)(e.column,e.order)?f[h.QD.ARTIST]:f[e.column]}(b),k=(0,a.useCallback)((function(e){null==n||n(),v(function(e,t,r){return e?t!==x[e]||"artist"===e&&[d.k.ASC,d.k.DESC].includes(r)||"title"===e&&[d.k.SECONDARY_ASC,d.k.SECONDARY_DESC].includes(r)?m[e]:{column:x[e],order:g[r]}:u.HI}(e,b.column,b.order))}),[n,v,b.column,b.order]),O=(0,a.useCallback)((function(){return null!==b.column}),[b.column]),C=i.map((function(e){return f[e]})).filter(S);return(0,j.jsx)(o.A,{options:C,onSelect:k,selected:y,isSelectionChanged:O,sortOrder:b.order,heading:s.ag.get("drop_down.sort_by"),disabled:r})}},76119:(e,t,r)=>{r.d(t,{A:()=>k});var n=r(4942),i=r(29439),l=r(94184),a=r.n(l),s=r(34142),o=r(47921),c=r(32667),u=r(21965),d=r(20246),m=(r(21249),r(71379)),x=r(78267),g=r(30005),f=r(36652),h=r(21691),p=r(28248),j=r(85893),S=function(e){var t,r=e.heading,n=e.selected,i=e.onSelect,l=e.options,a=e.sortOrder;a&&(a===p.kn.ASC||a===p.kn.SECONDARY_ASC?t=m.C:a!==p.kn.DESC&&a!==p.kn.SECONDARY_DESC||(t=x.B));return(0,j.jsxs)(g.v,{getInitialFocusElement:function(e){return null==e?void 0:e.querySelector('[aria-checked="true"]')},children:[r?(0,j.jsx)(f.F,{children:r}):null,l.map((function(e){var r=e.key,l=e.value;return(0,j.jsx)(h.s,{role:"menuitemradio","aria-checked":r===n.key,CheckedIcon:t,onClick:function(){return i(r)},children:l},r)}))]})};const b="x-sortBox-sortDropdown",v="tPeL3BRKFCF4z2ibZpU7";var y=function(e){return e.isOpen?(0,j.jsx)(s.U,{iconSize:16,"aria-hidden":"true"}):(0,j.jsx)(o.i,{iconSize:16,"aria-hidden":"true"})},k=function(e){var t=e.heading,r=e.options,l=e.selected,s=e.onSelect,o=e.sortOrder,m=e.variant,x=void 0===m?"mesto":m,g=e.semanticColor,f=e.disabled,h=e.onClick,p=e.useSortIcon,k=(0,i.Z)(r,1)[0];return l||(l=k),(0,j.jsx)(d.y,{menu:(0,j.jsx)(S,{selected:l,options:r,onSelect:s,sortOrder:o,heading:t}),children:function(e,t,r){return(0,j.jsxs)("button",{className:a()(b,(0,n.Z)({},v,p)),onClick:function(e){f||(null==h||h(e),t(e))},ref:r,type:"button",children:[(0,j.jsx)(c.D,{semanticColor:g,variant:x,children:l.value}),p?(0,j.jsx)(u.w,{iconSize:16,"aria-hidden":"true"}):(0,j.jsx)(y,{isOpen:e})]})}})}},22566:(e,t,r)=>{r.r(t),r.d(t,{default:()=>q});var n=r(4942),i=r(15861),l=r(29439),a=r(87757),s=r.n(a),o=(r(57327),r(41539),r(21249),r(47941),r(82526),r(38880),r(89554),r(54747),r(49337),r(33321),r(69070),r(67294)),c=r(73012),u=r(56037),d=r(96206),m=r(60210),x=r(30731),g=r(60289),f=r(59482),h=r(72907),p=r(98562),j=r(6158),S=r(55120),b=r(1838),v=r(35213),y=r(22423),k=r(28248),O=r(78462),C=r(37081),D=r(72131),A=r(66393),E=r(91389),P=r(84242),T=(r(66992),r(70189),r(78783),r(33948),r(68309),r(69600),r(18261)),w=r(87257),I=r(42922),_=r(84788),Q=r(26921),N=r(67062),Z=r(21509),R=r(28550),U=r(82760),L=r(85893),M=o.memo((function(e){var t=e.uri,r=e.uid,n=e.name,i=e.duration_ms,l=e.artists,a=e.album,s=e.is19PlusOnly,c=e.isExplicit,u=e.isPlayable,m=e.index,x=e.contextUri,g=e.imgUrl,f=e.usePlayContextItem,h=(0,o.useContext)(y.fo).filter,p=f({uid:r,uri:t,index:m}),j=p.isActive,S=p.isPlaying,b=p.triggerPlay,v=p.togglePlay,k=(0,_.r)({isExplicit:c}),O=k.badges,C=k.hasBadges,D=(null==l?void 0:l.map((function(e){return e.name})).join(d.ag.getSeparator()))||"";return(0,L.jsx)(I.ZP,{value:"row",index:m,children:(0,L.jsx)(T._,{menu:(0,L.jsx)(Q.N,{uri:t,uid:r,contextUri:x}),children:(0,L.jsxs)(U.c,{uri:t,contextUri:x,isActive:j,index:m,onTriggerPlay:function(){b()},ariaRowIndex:m+1,isPlayable:u,ageRestricted:s,dragMetadata:{name:n,createdBy:D},children:[(0,L.jsx)(Z.Dd,{ariaColIndex:0,children:(0,L.jsx)(Z.Du,{uri:t,playAriaLabel:d.ag.get("tracklist.a11y.play",n,D),isPlaying:S,isActive:j,onClick:function(){v()},children:(0,L.jsx)(Z.km,{children:m+1})})}),(0,L.jsxs)(Z.vZ,{ariaColIndex:1,children:[(0,L.jsx)(Z.lD,{src:g}),(0,L.jsxs)(Z.vm,{children:[(0,L.jsx)(Z.Wh,{titleText:n,children:(0,L.jsx)(N.o,{searchWords:[h],textToHighlight:n})}),C&&(0,L.jsx)(Z.g3,{children:O.explicit?(0,L.jsx)(w.N,{}):null}),(0,L.jsx)(Z.K9,{children:l&&(0,L.jsx)(R.o,{nonInteractive:!0,artists:l,filter:h})})]})]}),(0,L.jsx)(Z.UA,{ariaColIndex:2,children:(null==a?void 0:a.name)&&(0,L.jsx)(Z.BM,{nonInteractive:!0,uri:null==a?void 0:a.uri,name:null==a?void 0:a.name,children:(0,L.jsx)(N.o,{searchWords:[h],textToHighlight:null==a?void 0:a.name})})}),(0,L.jsxs)(Z.mU,{ariaColIndex:3,children:[(0,L.jsx)(Z.A$,{duration:i}),(0,L.jsx)(Z.Zv,{menu:(0,L.jsx)(Q.N,{uri:t,uid:r,contextUri:x}),label:d.ag.get("more.label.track",n,D)})]})]})})})}),(function(e,t){return e.uri===t.uri&&e.index===t.index})),B=r(49961),Y=new Set(O.MI),X=o.memo((function(e){var t=e.uri,r=e.tracks,n=e.columns,i=e.sortState,l=e.handleSort,a=e.usePlayContextItem,s=e.tracklistDomRef,c=(0,o.useRef)(null),u=(0,o.useCallback)((function(e,r){var n,i=(0,B.X)(null===(n=e.album)||void 0===n?void 0:n.images,{desiredSize:40,desiredLabel:"small"});return(0,L.jsx)(M,{index:r,contextUri:t,uri:e.uri,uid:e.uid,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:e.isExplicit,is19PlusOnly:e.is19PlusOnly,type:e.type,imgUrl:(null==i?void 0:i.url)||"",usePlayContextItem:a},e.uid)}),[t,a]);return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(I.ZP,{value:"playlist-tracklist",children:(0,L.jsx)(k.Pv,{ariaLabel:d.ag.get("local-files"),hasHeaderRow:!0,columns:n,sortableColumns:Y,sortState:i,onSort:l,renderRow:u,resolveUri:function(e){return e.uri},resolveUid:function(e){return e.uid},tracks:r,nrTracks:r.length,limit:100,outerRef:c,outerDomRef:s},t)})})}));const F="uCHqQ74vvHOnctGg0X0B",H="feuNq1FTxMbdeOTuFgpA";function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=[k.QD.INDEX,k.QD.TITLE,k.QD.ALBUM,k.QD.DURATION],K=function(){var e=(0,o.useContext)(y.fo).filter,t=(0,o.useContext)(O.Gb),r=t.sortState,n=t.setSortState,a=(0,o.useContext)(A.t),k=(0,E.I)(),T=(0,o.useState)(),w=(0,l.Z)(T,2),I=w[0],_=w[1],Q=(0,C.Y)(c.Fzl),N=(0,o.useRef)(null),Z=(0,o.useCallback)((function(e){n((0,b.VK)(e,r))}),[r,n]),R=(0,o.useCallback)((0,i.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.getTracks((0,b._j)(r),e);case 2:n=t.sent,_(n);case 4:case"end":return t.stop()}}),t)}))),[a,r,e]);(0,o.useEffect)((function(){R()}),[R]);var U=(0,P.n)({uri:D.b,pages:[{items:(null!=I?I:[]).map((function(e){return G(G({},e),{},{provider:null})}))}]},{featureIdentifier:"local_files"}),M=U.isPlaying,B=U.togglePlay,Y=U.usePlayContextItem;return I?e||I.length&&k?(0,L.jsxs)("div",{role:"presentation",className:F,children:[(0,L.jsxs)(g.gF,{backgroundColor:Q,children:[(0,L.jsxs)(f.W,{children:[(0,L.jsx)(S.$,{size:"md",onClick:function(){return B()},isPlaying:M,uri:D.b}),(0,L.jsx)(h.i,{text:d.ag.get("local-files")})]}),(0,L.jsxs)(g.sP,{children:[(0,L.jsx)(g.xd,{children:d.ag.get("local-files")}),(0,L.jsx)(g.T0,{children:d.ag.get("local-files.description")})]})]}),(0,L.jsx)(m.o,{backgroundColor:Q,children:(0,L.jsxs)(m.F,{children:[(0,L.jsx)(S.$,{size:"lg",onClick:function(){return B()},isPlaying:M,uri:D.b}),(0,L.jsxs)("div",{className:H,children:[(0,L.jsx)(o.Suspense,{fallback:null,children:(0,L.jsx)(p.K,{placeholder:d.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:N})}),(0,L.jsx)(v.l,{columns:O.MI})]})]})}),(0,L.jsx)("div",{className:"contentSpacing",children:(0,L.jsx)(X,{tracks:I,uri:D.b,columns:W,handleSort:Z,sortState:r,usePlayContextItem:Y,tracklistDomRef:N})})]}):(0,L.jsx)(x.u,{linkTo:"/preferences",linkTitle:d.ag.get("local-files.empty-button"),message:d.ag.get("local-files.empty-description"),title:d.ag.get("local-files.empty-header"),children:(0,L.jsx)(u.Y,{iconSize:64,"aria-hidden":"true"})}):(0,L.jsx)(j.h,{hasError:!1,errorMessage:d.ag.get("error.request-artist-failure")})};const q=function(){return(0,L.jsx)(O.kz,{uri:"spotify:internal:local-files",children:(0,L.jsx)(y.hz,{uri:"spotify:internal:local-files",children:(0,L.jsx)(K,{})})})}},6330:(e,t,r)=>{r.d(t,{e:()=>x});var n=r(62142);const i="(min-width: 0px)",l="(min-width: 0px) and (max-width: 767px)",a="(min-width: 768px)",s="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",u="(min-width: 1280px)",d="(min-width: 1280px) and (max-width: 1919px)",m="(min-width: 1920px)";var x=function(){return{isXS:(0,n.a)(i),isXSOnly:(0,n.a)(l),isSM:(0,n.a)(a),isSMOnly:(0,n.a)(s),isMD:(0,n.a)(o),isMDOnly:(0,n.a)(c),isLG:(0,n.a)(u),isLGOnly:(0,n.a)(d),isXL:(0,n.a)(m)}}},91389:(e,t,r)=>{r.d(t,{I:()=>i});var n=r(30302);function i(){return(0,n.S)()[0]}}}]);
//# sourceMappingURL=xpui-routes-collection-local-files.js.map