"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5642],{22578:(e,t,n)=>{n.d(t,{$:()=>d});n(26699),n(32023),n(69600),n(68309),n(21249);var r=n(64593),a=n(96206),l=n(69691),i=n(8341),A=n(89952),o=n(67294),c=n(51615),s=n(24183),E=n(85893);function u(e){return e.includes("Spotify")?e:"Spotify – ".concat(e)}var d=function(e){var t,n,d,T,L,D,_,C=e.children,S=e.usePlayingItem,h=u(C);t=C,T=(0,s.Oh)().mainLandmarkRef,L=(0,c.k6)(),D=null===(n=L.location)||void 0===n||null===(d=n.state)||void 0===d?void 0:d.preventMoveFocus,(_=(0,o.useRef)(L.length<2)).current=L.length<2,(0,o.useEffect)((function(){var e=T.current;!D&&!_.current&&e&&t&&(e.setAttribute("aria-label",t),e.focus())}),[t,T,D]);var f=(0,l.IK)().isPlaying,p=(0,i.Y)((function(e){return null==e?void 0:e.item}));return p&&(f||S)&&((0,A.G_)(p)?h=[p.name,p.artists.map((function(e){return e.name})).join(a.ag.getSeparator())].join(" • "):(0,A.iw)(p)?h=[p.name,p.show.name].join(" • "):(0,A.k6)(p)&&(h=u(a.ag.get("ad-formats.advertisement")))),(0,E.jsx)(r.q,{defaultTitle:"Spotify",defer:!1,children:(0,E.jsx)("title",{children:h})})}},70369:(e,t,n)=>{n.d(t,{$:()=>r.$});var r=n(22578)},30731:(e,t,n)=>{n.d(t,{u:()=>_});var r=n(4942),a=n(67294),l=n(94184),i=n.n(l),A=n(32667),o=n(34011),c=n(6330),s=n(40771);const E="FvfvGU3jvHRskUU9v9_8",u="Q9AlbZn2EGzy3MTWXa8X",d="mxmxS0y8LiwSs5nueKPT",T="GXxVAveNFStY3pBI_NO4",L="eHcXC2s97InYP7rMNT0H";var D=n(85893),_=(0,a.memo)((function(e){var t=e.children,n=e.message,a=e.title,l=e.linkTitle,_=e.linkTo,C=e.onClick,S=e.renderInline,h=void 0!==S&&S,f=(0,c.e)(),p=f.isXSOnly,O=f.isSMOnly,v=p||O;return(0,D.jsxs)("section",{className:i()(E,(0,r.Z)({},u,h)),children:[t,(0,D.jsx)(A.D,{as:"h1",variant:v?"cello":"alto",className:T,children:a}),(0,D.jsx)(A.D,{variant:v?"mesto":"ballad",className:L,children:n}),l&&(_||C)&&(0,D.jsx)(o.D,{colorSet:"invertedLight",className:d,href:_,onClick:C,component:s.Z,children:l})]})}))},76119:(e,t,n)=>{n.d(t,{A:()=>O});var r=n(4942),a=n(29439),l=n(94184),i=n.n(l),A=n(34142),o=n(47921),c=n(32667),s=n(21965),E=n(20246),u=(n(21249),n(71379)),d=n(78267),T=n(30005),L=n(36652),D=n(21691),_=n(28248),C=n(85893),S=function(e){var t,n=e.heading,r=e.selected,a=e.onSelect,l=e.options,i=e.sortOrder;i&&(i===_.kn.ASC||i===_.kn.SECONDARY_ASC?t=u.C:i!==_.kn.DESC&&i!==_.kn.SECONDARY_DESC||(t=d.B));return(0,C.jsxs)(T.v,{getInitialFocusElement:function(e){return null==e?void 0:e.querySelector('[aria-checked="true"]')},children:[n?(0,C.jsx)(L.F,{children:n}):null,l.map((function(e){var n=e.key,l=e.value;return(0,C.jsx)(D.s,{role:"menuitemradio","aria-checked":n===r.key,CheckedIcon:t,onClick:function(){return a(n)},children:l},n)}))]})};const h="x-sortBox-sortDropdown",f="tPeL3BRKFCF4z2ibZpU7";var p=function(e){return e.isOpen?(0,C.jsx)(A.U,{iconSize:16,"aria-hidden":"true"}):(0,C.jsx)(o.i,{iconSize:16,"aria-hidden":"true"})},O=function(e){var t=e.heading,n=e.options,l=e.selected,A=e.onSelect,o=e.sortOrder,u=e.variant,d=void 0===u?"mesto":u,T=e.semanticColor,L=e.disabled,D=e.onClick,_=e.useSortIcon,O=(0,a.Z)(n,1)[0];return l||(l=O),(0,C.jsx)(E.y,{menu:(0,C.jsx)(S,{selected:l,options:n,onSelect:A,sortOrder:o,heading:t}),children:function(e,t,n){return(0,C.jsxs)("button",{className:i()(h,(0,r.Z)({},f,_)),onClick:function(e){L||(null==D||D(e),t(e))},ref:n,type:"button",children:[(0,C.jsx)(c.D,{semanticColor:T,variant:d,children:l.value}),_?(0,C.jsx)(s.w,{iconSize:16,"aria-hidden":"true"}):(0,C.jsx)(p,{isOpen:e})]})}})}},1834:(e,t,n)=>{n.d(t,{$:()=>o,Q:()=>A});n(21703),n(96647);var r=n(67294),a=n(22583),l=n(97641),i=n(85893),A=(0,r.createContext)({setSortState:function(){throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:l.oT.ADDED_AT}),o=r.memo((function(e){var t=e.uri,n=e.children,r=e.defaultSortOption;return(0,i.jsx)(a.r,{uri:t,defaultState:r,sortContext:A,children:n})}))},97641:(e,t,n)=>{n.d(t,{Aq:()=>C,Bf:()=>x,EY:()=>v,G5:()=>P,JV:()=>N,MY:()=>L,Ru:()=>D,ZP:()=>m,a6:()=>p,aY:()=>M,e3:()=>f,ei:()=>T,o$:()=>S,oT:()=>c,pT:()=>I,rJ:()=>b,u3:()=>y,w0:()=>g});var r,a,l,i,A,o,c,s=n(4942),E=(n(26699),n(32023),n(96206)),u=n(74483),d=n(9659);!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(c||(c={}));var T={"show-alphabetical":c.SHOW_ALPHABETICAL,"book-alphabetical":c.BOOK_ALPHABETICAL,"episode-alphabetical":c.EPISODE_ALPHABETICAL,"playlist-alphabetical":c.PLAYLIST_ALPHABETICAL,"album-alphabetical":c.ALBUM_ALPHABETICAL,"recently-added":c.ADDED_AT,"creator-name":c.CREATOR_NAME,"creator-name-alphabetical":c.CREATOR_NAME_ALPHABETICAL,"album-creator-name":c.ALBUM_CREATOR_NAME,"recently-played":c.RECENTLY_PLAYED,"playlist-most-relevant":c.MOST_RELEVANT,"playlist-custom-order":c.CUSTOM_ORDER},L=(r={},(0,s.Z)(r,c.RECENTLY_PLAYED,{key:"recently-played",get value(){return E.ag.get("collection.sort.recently-played")}}),(0,s.Z)(r,c.ADDED_AT,{key:"recently-added",get value(){return E.ag.get("collection.sort.recently-added")}}),(0,s.Z)(r,c.SHOW_ALPHABETICAL,{key:"show-alphabetical",get value(){return E.ag.get("collection.sort.alphabetical")}}),(0,s.Z)(r,c.BOOK_ALPHABETICAL,{key:"book-alphabetical",get value(){return E.ag.get("collection.sort.alphabetical")}}),(0,s.Z)(r,c.EPISODE_ALPHABETICAL,{key:"episode-alphabetical",get value(){return E.ag.get("collection.sort.alphabetical")}}),(0,s.Z)(r,c.PLAYLIST_ALPHABETICAL,{key:"playlist-alphabetical",get value(){return E.ag.get("collection.sort.alphabetical")}}),(0,s.Z)(r,c.ALBUM_CREATOR_NAME,{key:"album-creator-name",get value(){return E.ag.get("collection.sort.creator")}}),(0,s.Z)(r,c.CREATOR_NAME,{key:"creator-name",get value(){return E.ag.get("collection.sort.creator")}}),(0,s.Z)(r,c.CREATOR_NAME_ALPHABETICAL,{key:"creator-name-alphabetical",get value(){return E.ag.get("collection.sort.alphabetical")}}),(0,s.Z)(r,c.ALBUM_ALPHABETICAL,{key:"album-alphabetical",get value(){return E.ag.get("collection.sort.alphabetical")}}),(0,s.Z)(r,c.MOST_RELEVANT,{key:"playlist-most-relevant",get value(){return E.ag.get("collection.sort.most-relevant")}}),(0,s.Z)(r,c.CUSTOM_ORDER,{key:"playlist-custom-order",get value(){return E.ag.get("collection.sort.custom-order")}}),r),D=[c.ADDED_AT,c.ALBUM_ALPHABETICAL,c.CREATOR_NAME],_=(a={},(0,s.Z)(a,c.ADDED_AT,{field:u.lY.ADDED_AT,order:u.As.DESC}),(0,s.Z)(a,c.ALBUM_ALPHABETICAL,{field:u.lY.NAME,order:u.As.ASC}),(0,s.Z)(a,c.CREATOR_NAME,{field:u.lY.ARTIST_NAME,order:u.As.ASC}),a),C=function(e){if(D.includes(e))return _[e]},S=[c.ADDED_AT,c.CREATOR_NAME_ALPHABETICAL],h=(l={},(0,s.Z)(l,c.ADDED_AT,{field:u.hx.ADDED_AT,order:u.As.DESC}),(0,s.Z)(l,c.CREATOR_NAME_ALPHABETICAL,{field:u.hx.NAME,order:u.As.ASC}),l),f=function(e){if(S.includes(e))return h[e]},p=[c.ADDED_AT,c.SHOW_ALPHABETICAL],O=(i={},(0,s.Z)(i,c.ADDED_AT,{field:u.hx.ADDED_AT,order:u.As.DESC}),(0,s.Z)(i,c.SHOW_ALPHABETICAL,{field:u.aW.NAME,order:u.As.ASC}),i),v=function(e){if(p.includes(e))return O[e]},m=[c.ADDED_AT,c.BOOK_ALPHABETICAL],R=(A={},(0,s.Z)(A,c.ADDED_AT,u.VN.ADDED_AT),(0,s.Z)(A,c.BOOK_ALPHABETICAL,u.VN.NAME),A),P=function(e){if(m.includes(e))return R[e]},g=[c.MOST_RELEVANT,c.RECENTLY_PLAYED,c.ADDED_AT,c.PLAYLIST_ALPHABETICAL,c.CUSTOM_ORDER],B=(o={},(0,s.Z)(o,c.ADDED_AT,{field:d.bD.ADDED_AT,order:d.As.DESC}),(0,s.Z)(o,c.RECENTLY_PLAYED,{field:d.bD.RECENTLY_PLAYED,order:d.As.ASC}),(0,s.Z)(o,c.PLAYLIST_ALPHABETICAL,{field:d.bD.NAME,order:d.As.ASC}),(0,s.Z)(o,c.MOST_RELEVANT,{field:d.bD.RELEVANCE,order:d.As.DESC}),(0,s.Z)(o,c.CUSTOM_ORDER,void 0),o),I=function(e){if(g.includes(e))return B[e]},M=c.ADDED_AT,y=c.ADDED_AT,b=c.ADDED_AT,x=c.MOST_RELEVANT,N=c.ADDED_AT},64971:(e,t,n)=>{n.d(t,{h:()=>T});var r=n(67294),a=n(98816),l=n(98562),i=n(45342),A=n(15852),o=(n(21249),n(76119)),c=n(1834),s=n(97641),E=n(85893),u=r.memo((function(e){var t=e.sortOptions,n=e.onSort,a=(0,r.useContext)(c.Q),l=a.sortState,i=a.setSortState,A=(0,r.useCallback)((function(e){var t=s.ei[e];null==n||n(t),i(t)}),[n,i]),u=t.map((function(e){return s.MY[e]})),d=s.MY[l];return(0,E.jsx)(o.A,{options:u,onSelect:A,selected:d})}));const d="collection-searchBar-searchBar";var T=r.memo((function(e){var t=e.filterPlaceholder,n=e.sortOptions,o=(0,A.fU)(a.createDesktopSearchBarEventFactory,{}),c=o.spec,s=o.logger,T=(0,r.useContext)(i.H),L=(0,r.useCallback)((function(){s.logInteraction(c.filterFieldFactory().keyStrokeFilter())}),[s,c]),D=(0,r.useCallback)((function(){s.logInteraction(c.filterFieldFactory().hitClearFilter())}),[s,c]),_=(0,r.useCallback)((function(){s.logInteraction(c.sortButtonFactory().hitSort())}),[s,c]);return(0,E.jsxs)("div",{className:d,children:[null!=T&&T.getCapabilities().canFilter?(0,E.jsx)(r.Suspense,{fallback:null,children:(0,E.jsx)(l.K,{placeholder:t,onFilter:L,onClear:D})}):null,null!=T&&T.getCapabilities().canSort?(0,E.jsx)(u,{sortOptions:n,onSort:_}):null]})}))},47032:(e,t,n)=>{n.d(t,{$:()=>r.$,Q:()=>r.Q});var r=n(1834)},38911:(e,t,n)=>{n.d(t,{Aq:()=>r.Aq,Bf:()=>r.Bf,EY:()=>r.EY,G5:()=>r.G5,JV:()=>r.JV,Ru:()=>r.Ru,ZP:()=>r.ZP,a6:()=>r.a6,aY:()=>r.aY,e3:()=>r.e3,o$:()=>r.o$,oT:()=>r.oT,pT:()=>r.pT,rJ:()=>r.rJ,u3:()=>r.u3,w0:()=>r.w0});var r=n(97641)},6330:(e,t,n)=>{n.d(t,{e:()=>d});var r=n(62142);const a="(min-width: 0px)",l="(min-width: 0px) and (max-width: 767px)",i="(min-width: 768px)",A="(min-width: 768px) and (max-width: 1023px)",o="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",s="(min-width: 1280px)",E="(min-width: 1280px) and (max-width: 1919px)",u="(min-width: 1920px)";var d=function(){return{isXS:(0,r.a)(a),isXSOnly:(0,r.a)(l),isSM:(0,r.a)(i),isSMOnly:(0,r.a)(A),isMD:(0,r.a)(o),isMDOnly:(0,r.a)(c),isLG:(0,r.a)(s),isLGOnly:(0,r.a)(E),isXL:(0,r.a)(u)}}}}]);
//# sourceMappingURL=5642.js.map