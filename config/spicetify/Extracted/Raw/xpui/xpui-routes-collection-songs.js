"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[7553],{40771:(e,t,r)=>{r.d(t,{Z:()=>u});r(47941),r(82526),r(57327),r(41539),r(38880),r(89554),r(54747),r(49337),r(33321),r(69070);var n=r(4942),a=r(45987),i=r(67892),o=r(85893),l=["href","children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.href,r=e.children,n=(0,a.Z)(e,l);return(0,o.jsx)(i.Z,c(c({to:t},n),{},{children:r}))}},30731:(e,t,r)=>{r.d(t,{u:()=>y});var n=r(4942),a=r(67294),i=r(94184),o=r.n(i),l=r(32667),s=r(34011),c=r(6330),u=r(40771);const d="FvfvGU3jvHRskUU9v9_8",f="Q9AlbZn2EGzy3MTWXa8X",m="mxmxS0y8LiwSs5nueKPT",p="GXxVAveNFStY3pBI_NO4",g="eHcXC2s97InYP7rMNT0H";var h=r(85893),y=(0,a.memo)((function(e){var t=e.children,r=e.message,a=e.title,i=e.linkTitle,y=e.linkTo,b=e.onClick,v=e.renderInline,x=void 0!==v&&v,k=(0,c.e)(),j=k.isXSOnly,D=k.isSMOnly,w=j||D;return(0,h.jsxs)("section",{className:o()(d,(0,n.Z)({},f,x)),children:[t,(0,h.jsx)(l.D,{as:"h1",variant:w?"cello":"alto",className:p,children:a}),(0,h.jsx)(l.D,{variant:w?"mesto":"ballad",className:g,children:r}),i&&(y||b)&&(0,h.jsx)(s.D,{colorSet:"invertedLight",className:m,href:y,onClick:b,component:u.Z,children:i})]})}))},8294:(e,t,r)=>{r.d(t,{p:()=>D});var n=r(15861),a=r(93433),i=r(29439),o=r(87757),l=r.n(o),s=(r(66992),r(41539),r(70189),r(78783),r(33948),r(57327),r(21249),r(68309),r(67294)),c=r(96206),u=r(1838),d=r(61728),f=r(22423),m=r(28248),p=r(78462),g=r(42922),h=r(45342),y=r(15852),b=r(49961),v=r(39412),x=r(85893),k=new Set(p.P0),j=new Set([]),D=s.memo((function(e){var t=e.nrTracks,r=e.collectionUri,o=e.columns,D=e.initialItems,w=e.uri,O=e.sortable,S=void 0===O||O,P=e.scrollToUri,C=e.usePlayContextItem,E=e.outerDomRef,T=e.spec,F=(0,s.useContext)(h.H),I=(0,s.useRef)(null),L=(0,s.useState)(t),R=(0,i.Z)(L,2),A=R[0],U=R[1],_=(0,s.useContext)(f.fo).filter,M=(0,s.useRef)((function(){})),N=(0,s.useState)([]),Z=(0,i.Z)(N,2),B=Z[0],Q=Z[1],G=(0,s.useContext)(p.Gb),X=G.sortState,z=G.setSortState,H=(0,y.$P)(),K=(0,s.useCallback)((function(e,t){e===m.QD.ADDED_AT?z({column:m.QD.ADDED_AT,order:X.order===m.kn.ASC?m.kn.DESC:m.kn.ASC}):z((0,u.VK)(e,X)),T&&H.logInteraction(T.columnHeaderFactory({identifier:e,position:t||0}).hitSort())}),[H,z,X,T]);(0,s.useEffect)((function(){I.current&&I.current.update()}),[X,_]),(0,s.useEffect)((function(){I.current&&""===_&&I.current.scrollToFirstSelected()}),[_,A]),(0,s.useEffect)((function(){U(t)}),[t]),(0,s.useEffect)((function(){I.current&&P&&I.current.scrollToItem({uri:P})}),[P]);var V=(0,s.useCallback)((function(e){var t=e.map((function(e){return e.uri}));M.current(),null==F||F.remove.apply(F,(0,a.Z)(t))}),[F]),W=(0,s.useCallback)((function(e,t){M.current=t,e.length>1?Q(e):V(e)}),[V]),Y=(0,s.useCallback)(function(){var e=(0,n.Z)(l().mark((function e(t,r){var n,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null==F?void 0:F.getTracks({offset:t,limit:r,uri:w,sort:(0,v.w)(X),filter:_});case 2:return n=e.sent,a=null==n?void 0:n.totalLength,i=(null==n?void 0:n.items)||[],"number"==typeof a&&a!==A&&U(a),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),[_,F,A,X,w]),$=(0,s.useCallback)((function(e,t){var n,a=(0,b.X)(null===(n=e.album)||void 0===n?void 0:n.images,{desiredSize:40,desiredLabel:"small"});return(0,x.jsx)(m.dx,{index:t,contextUri:r,uri:e.uri,isPlayable:e.isPlayable,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,albumOrShow:e.album,isExplicit:e.isExplicit,isCollaborative:!1,isMixedMedia:!1,isPaywalled:!1,isUserSubscribed:!1,isLocal:e.isLocal,addedBy:[],dateAdded:e.addedAt,hasDecoratedAddedBy:!1,release_date:"",isMOGEFRestricted:e.is19PlusOnly,type:e.type,imgUrl:(null==a?void 0:a.url)||"",onMove:function(){},onInsert:function(){},usePlayContextItem:C,allowedDropTypes:[],isDisliked:!1,playlistName:c.ag.get("sidebar.liked_songs")},t+e.uri)}),[r,C]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g.ZP,{value:"liked-songs-tracklist",children:(0,x.jsx)(m.Pv,{ariaLabel:c.ag.get("sidebar.liked_songs"),hasHeaderRow:!0,columns:o,sortableColumns:null!=F&&F.getCapabilities().canSort&&S?k:j,sortState:X,onSort:K,renderRow:$,resolveUri:function(e){return e.uri},resolveUid:function(e){return e.uri},onRemove:W,nrTracks:A,fetchTracks:Y,limit:50,canFetchAllTracks:null==F?void 0:F.getCapabilities().canFetchAllTracks,outerRef:I,outerDomRef:E,tracks:D},r)}),(0,x.jsx)(d.h,{title:c.ag.get("remove_from_your_liked_songs"),isOpen:B.length>0,tracks:B,onClose:function(e){e.stopPropagation(),Q([])},onRemove:V})]})}))},69003:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ee});var n=r(4942),a=(r(66992),r(41539),r(88674),r(78783),r(33948),r(68309),r(57327),r(41637),r(74916),r(64765),r(47941),r(82526),r(38880),r(89554),r(54747),r(49337),r(33321),r(69070),r(67294)),i=r(86706),o=r(51615),l=r(69518),s=r.n(l),c=r(98983),u=r(93994),d=r(96206),f=r(60210),m=r(43683),p=r(70369),g=r(30731),h=r(6158),y=r(55120),b=r(77834),v=r(22423),x=r(28248),k=r(78462),j=r(61412),D=r(69846),w=r(23232),O=r(61901),S=r(88247),P=r(45342),C=r(26482),E=r(84242),T=r(15852),F=r(53538),I=r(29255),L=r(12498),R=r(88767),A=r(62830),U=r(6489),_=r(76391),M=r(8688),N=r(98620);var Z=r(39412),B=r(98816),Q=r(98562),G=r(35213),X=r(85893),z=a.memo((function(e){var t=e.tracklistDomRef,r=(0,T.fU)(B.createDesktopSearchBarEventFactory,{}),n=r.spec,i=r.logger,o=(0,a.useCallback)((function(){i.logInteraction(n.filterFieldFactory().keyStrokeFilter())}),[i,n]),l=(0,a.useCallback)((function(){i.logInteraction(n.filterFieldFactory().hitClearFilter())}),[i,n]),s=(0,a.useCallback)((function(){i.logInteraction(n.sortButtonFactory().hitSort())}),[i,n]);return(0,X.jsxs)("div",{className:b.Z.searchBoxContainer,children:[(0,X.jsx)(a.Suspense,{fallback:null,children:(0,X.jsx)(Q.K,{placeholder:d.ag.get("playlist.search_in_playlist"),clearOnEscapeInElementRef:t,onFilter:o,onClear:l})}),(0,X.jsx)(G.l,{columns:k.P0,onSort:s})]})})),H=r(8294);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=a.lazy((function(){return Promise.all([r.e(1814),r.e(2716),r.e(682)]).then(r.bind(r,82716))})),Y=[x.QD.INDEX,x.QD.TITLE,x.QD.ALBUM,x.QD.ADDED_AT,x.QD.DURATION],$="your_library",q=function(e){var t=e.data,r=e.canFilter,n=e.canSort,i=t.metadata,l=i.uri,s=i.name,D=i.totalLength,P=(0,a.useRef)(null),I=D>0,R=D>0,A=(0,O.Y5)("#5038a0"),U=(0,a.useContext)(v.fo).filter,_=(0,a.useContext)(k.Gb),M=_.sortState,N=_.setSortState,B=(0,T.fU)(u.createDesktopLikedSongsEventFactory,{data:{uri:l}}),Q=B.spec,G=B.logger,K=a.useMemo((function(){return Q.headerFactory()}),[Q]),V=a.useMemo((function(){return Q.tracklistFactory()}),[Q]);(0,a.useEffect)((function(){null===M.column&&N({column:x.QD.ADDED_AT,order:x.kn.DESC})}),[M,N]);var W=(0,o.k6)(),q="POP"!==W.action?new URLSearchParams(W.location.search).get("uri"):null,J=(0,E.n)((0,S.I)(l,(0,Z.w)(M),U),{featureIdentifier:$,referrerIdentifier:"your_library"}),ee=J.isPlaying,te=J.togglePlay,re=J.usePlayContextItem,ne=J.isActive,ae=function(){var e=(0,F.aK)({isPlaying:ee,isActive:ne,spec:Q.actionBarFactory().playButtonFactory(),logger:G,uri:l});te({loggingParams:e})},ie=(0,a.useCallback)((function(e,t){var r=Q.actionBarFactory().downloadButtonFactory();t===C.mc.ADD?G.logInteraction(r.hitDownload({itemToDownload:l})):t===C.mc.REMOVE?G.logInteraction(r.hitRemoveDownload({itemToRemoveFromDownloads:l})):t===C.mc.NO_PERMISSION&&G.logInteraction(r.hitUiReveal())}),[G,Q,l]);return(0,X.jsxs)("section",{role:"presentation",className:b.Z.playlist,"data-testid":"playlist-page",children:[(0,X.jsx)(p.$,{children:d.ag.get("playlist.page-title",s)}),(0,X.jsx)(w.s,{metadata:t.metadata,isPlaying:ee,togglePlay:ae,backgroundColor:A,specLikedSongs:K}),(0,X.jsx)(f.o,{backgroundColor:A,children:(0,X.jsxs)(f.F,{children:[R?(0,X.jsx)(y.$,{onClick:ae,isPlaying:ee,size:"lg",uri:l,ariaPauseLabel:d.ag.get("playlist.a11y.pause",s),ariaPlayLabel:d.ag.get("playlist.a11y.play",s)}):null,t.metadata.totalLength>0&&(0,X.jsx)(L.v,{uri:l,renderEnabled:function(){return(0,X.jsx)(j.v,{uri:l})}}),(0,X.jsx)(m.o,{uri:l,canDownload:I,isFollowing:!0,onFollow:function(){},size:m.q.md,onClick:ie}),r&&n&&(0,X.jsx)(T.Nh,{spec:Q.actionBarFactory(),children:(0,X.jsx)(z,{tracklistDomRef:P})})]})}),(0,X.jsx)("div",{className:"contentSpacing",children:D>0?(0,X.jsx)(a.Suspense,{fallback:(0,X.jsx)(h.h,{hasError:!1,errorMessage:d.ag.get("error.request-collection-tracks-failure")}),children:(0,X.jsx)(T.Nh,{spec:V,children:(0,X.jsx)(H.p,{nrTracks:D,columns:Y,collectionUri:l,scrollToUri:q,usePlayContextItem:re,outerDomRef:P,spec:V,initialItems:t.contents.items})})}):(0,X.jsx)(g.u,{message:d.ag.get("collection.empty-page.songs-subtitle"),title:d.ag.get("collection.empty-page.songs-title"),linkTo:"/search",linkTitle:d.ag.get("collection.empty-page.songs-cta"),renderInline:!0,children:(0,X.jsx)(c.F,{"aria-hidden":"true"})})})]})},J=a.memo((function(e){var t=e.user,r=e.uri,n=(0,a.useContext)(v.fo).filter,o=(0,a.useContext)(k.Gb).sortState,l=function(e,t,r){var n=(0,a.useContext)(P.H),i=(0,R.useQueryClient)(),o=(0,A.jP)((function(){return["useLikedSongs",e,r]}),[e,r]),l=(0,R.useQuery)(o(),(function(){return n.getTracks(r)}),{cacheTime:18e5,keepPreviousData:!0,refetchOnWindowFocus:!1}).data,s=(0,a.useCallback)((function(){i.invalidateQueries(o())}),[i,o]);(0,_.b)(U.EW.UPDATE,s);var c=(0,N.I2)(t.id);return c&&l?{metadata:{uri:e,name:c.name,images:c.images,totalLength:null==l?void 0:l.totalLength,unfilteredTotalLength:l.unfilteredTotalLength,owner:(0,M.V3)(t)},contents:l}:null}(r,t,{offset:0,limit:25,sort:(0,Z.w)(o),filter:n}),s=(0,a.useContext)(P.H).getCapabilities(),c=(0,i.v9)(I.n5),u=(0,D.U)("spotify:user:".concat(c,":collection")).isEnhanced;if(l){var f=(0,X.jsx)(q,{data:l,canFilter:s.canFilter&&l.metadata.unfilteredTotalLength>0,canSort:s.canSort&&l.metadata.unfilteredTotalLength>0});return(0,X.jsx)(L.v,{uri:l.metadata.uri,renderEnabled:function(){return u?(0,X.jsx)(a.Suspense,{fallback:null,children:(0,X.jsx)(k.kz,{uri:l.metadata.uri,children:(0,X.jsx)(W,{metadata:V(V({},l.metadata),{},{collaborators:{count:1,items:[{isOwner:!0,user:l.metadata.owner,tracksAdded:l.metadata.totalLength}]}}),capabilities:s,featureIdentifier:$})})}):f},renderDisabled:function(){return f}})}return(0,X.jsx)(h.h,{hasError:!1,errorMessage:d.ag.get("error.not_found.title.playlist"),loadOffline:s.canModifyOffline})}));const ee=function(){var e=(0,i.v9)(I.Gg).user;if(null===e)return null;var t=s().collectionURI(e.id).toURI();return(0,X.jsx)(k.kz,{uri:t,children:(0,X.jsx)(v.hz,{uri:t,children:(0,X.jsx)(J,{uri:t,user:e})})})}},23232:(e,t,r)=>{r.d(t,{s:()=>n.s});var n=r(40786)},6330:(e,t,r)=>{r.d(t,{e:()=>m});var n=r(62142);const a="(min-width: 0px)",i="(min-width: 0px) and (max-width: 767px)",o="(min-width: 768px)",l="(min-width: 768px) and (max-width: 1023px)",s="(min-width: 1024px)",c="(min-width: 1024px) and (max-width: 1279px)",u="(min-width: 1280px)",d="(min-width: 1280px) and (max-width: 1919px)",f="(min-width: 1920px)";var m=function(){return{isXS:(0,n.a)(a),isXSOnly:(0,n.a)(i),isSM:(0,n.a)(o),isSMOnly:(0,n.a)(l),isMD:(0,n.a)(s),isMDOnly:(0,n.a)(c),isLG:(0,n.a)(u),isLGOnly:(0,n.a)(d),isXL:(0,n.a)(f)}}}}]);
//# sourceMappingURL=xpui-routes-collection-songs.js.map