"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[3727],{22578:(e,i,n)=>{n.d(i,{$:()=>x});n(26699),n(32023),n(69600),n(68309),n(21249);var t=n(64593),r=n(96206),a=n(69691),l=n(8341),s=n(89952),u=n(67294),o=n(51615),c=n(24183),d=n(85893);function m(e){return e.includes("Spotify")?e:"Spotify – ".concat(e)}var x=function(e){var i,n,x,v,g,h,f,p=e.children,j=e.usePlayingItem,y=m(p);i=p,v=(0,c.Oh)().mainLandmarkRef,g=(0,o.k6)(),h=null===(n=g.location)||void 0===n||null===(x=n.state)||void 0===x?void 0:x.preventMoveFocus,(f=(0,u.useRef)(g.length<2)).current=g.length<2,(0,u.useEffect)((function(){var e=v.current;!h&&!f.current&&e&&i&&(e.setAttribute("aria-label",i),e.focus())}),[i,v,h]);var b=(0,a.IK)().isPlaying,k=(0,l.Y)((function(e){return null==e?void 0:e.item}));return k&&(b||j)&&((0,s.G_)(k)?y=[k.name,k.artists.map((function(e){return e.name})).join(r.ag.getSeparator())].join(" • "):(0,s.iw)(k)?y=[k.name,k.show.name].join(" • "):(0,s.k6)(k)&&(y=m(r.ag.get("ad-formats.advertisement")))),(0,d.jsx)(t.q,{defaultTitle:"Spotify",defer:!1,children:(0,d.jsx)("title",{children:y})})}},70369:(e,i,n)=>{n.d(i,{$:()=>t.$});var t=n(22578)},69376:(e,i,n)=>{n.d(i,{n:()=>T});var t=n(4942),r=n(29439),a=(n(69826),n(41539),n(91038),n(78783),n(21249),n(85827),n(47042),n(89554),n(54747),n(57327),n(26699),n(32023),n(67294)),l=n(94184),s=n.n(l),u=n(51615),o=n(32667),c=n(34142),d=n(47921),m=n(96206),x=n(24697),v=n(32648),g=n(85951);var h=n(32626),f=n(43031),p=n(30005),j=n(21691);const y="main-topBar-contentArea",b="muYk5XIwKmqR9iNibk_f",k="queue-tabBar-headerItem",C="queue-tabBar-moreButton",N="queue-tabBar-moreButtonActive",P="yxf_6IsQEmHjijEBUMTP",E="queue-tabBar-active",I="queue-tabBar-headerItemLink",w="queue-tabBar-header",U="queue-tabBar-chevron";var A=n(85893),R=function(e){var i=e.items,n=e.activeItemId;return(0,A.jsx)(p.v,{children:i.map((function(e){return e.disabled?(0,A.jsx)(j.s,{disabled:!0,role:"menuitemradio",className:P,onClick:e.handleClick,children:e.title},e.uri):(0,A.jsx)(j.s,{role:"menuitemradio",to:e.to,exact:!0,"aria-checked":e.itemId===n,className:P,activeClassName:E,onClick:e.handleClick,children:e.title},e.uri)}))})},T=(0,a.memo)((function(e){var i,n=e.isCentered,l=e.links,p=e.landmarkLabel,j=e.className,P=(0,a.useRef)(null),T=(0,a.useState)([]),D=(0,r.Z)(T,2),O=D[0],S=D[1],q=(0,a.useState)(0),L=(0,r.Z)(q,2),_=L[0],M=L[1],Q=(0,a.useState)([]),F=(0,r.Z)(Q,2),B=F[0],G=F[1],Z=null!==(i=function(){var e=(0,a.useState)(window.innerWidth),i=(0,r.Z)(e,2),n=i[0],t=i[1],l=(0,a.useContext)(v.VX).scrollNodeChildRef,s=(0,x.y1)((function(e){null!=e&&e.width&&t(e.width)}),250);return(0,g.y)({refOrElement:l,observeOnly:"width",onResize:s}),n}())&&void 0!==i?i:1/0,W=(0,u.TH)().pathname,K=l.find((function(e){return e.to===W}));return(0,a.useEffect)((function(){P.current&&M(P.current.clientWidth)}),[Z]),(0,a.useEffect)((function(){if(P.current){var e=Array.from(P.current.children).map((function(e){return e.clientWidth}));S(e)}}),[l]),(0,a.useEffect)((function(){if(P.current)if(O.slice(0,-1).reduce((function(e,i){return e+i}),0)<=_)G([]);else{var e=O.reduce((function(e,i){return e>i?e:i}),0),i=[],n=e;O.forEach((function(e,t){_>=n+e?n+=e:i.push(t)})),G(i)}}),[_,O]),(0,A.jsx)("nav",{className:s()(j,y),"aria-label":p,children:(0,A.jsxs)("ul",{className:n?b:w,ref:P,children:[l.filter((function(e,i){return!B.includes(i)})).map((function(e){var i;return(null!==(i=null==e?void 0:e.render)&&void 0!==i?i:function(e){return e})((0,A.jsx)("li",{className:k,children:e.disabled?(0,A.jsx)("div",{className:I,children:(0,A.jsx)(o.D,{variant:"mestoBold",children:e.title})}):(0,A.jsx)(f.O,{exact:!0,className:I,activeClassName:E,to:e.to,onClick:e.handleClick,children:(0,A.jsx)(o.D,{variant:"mestoBold",children:e.title})})},e.to))})),B.length||0===O.length?(0,A.jsx)("li",{className:k,children:(0,A.jsx)(h.xV,{renderInline:!0,menu:(0,A.jsx)(R,{items:l.filter((function(e,i){return B.includes(i)})),activeItemId:null==K?void 0:K.itemId}),children:function(e,i,n){return(0,A.jsxs)("button",{className:s()(C,(0,t.Z)({},N,K)),type:"button",onClick:i,ref:n,children:[(0,A.jsx)(o.D,{variant:"mestoBold",children:K?K.title:m.ag.get("more")}),e?(0,A.jsx)(c.U,{iconSize:16,className:U,"aria-hidden":"true"}):(0,A.jsx)(d.i,{iconSize:16,className:U,"aria-hidden":"true"})]})}})}):null]})})}))},32594:(e,i,n)=>{n.r(i),n.d(i,{default:()=>Qe});var t=n(67294),r=n(73305),a=n(74414),l=n(26700),s=n(96335),u=n(68960),o=n(32667),c=n(96206),d=n(22141);const m="gTvMl6pwfRD9PobMSB5x",x="hNAQG0TAe2WFYyf_iZEB",v="Zhzrb2k9nQRActS2lp4U";var g=n(85893),h=function(){return(0,g.jsxs)("div",{className:m,children:[(0,g.jsx)(d.Y,{iconSize:64,"aria-hidden":"true"}),(0,g.jsx)(o.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:x,children:c.ag.get("history.empty-title")}),(0,g.jsx)("p",{children:c.ag.get("history.empty-description")})]})},f=(n(68309),n(28248)),p=n(47991),j=n(42922),y=n(89952),b=n(42781),k=n(38470),C=n(49961),N=(n(69600),n(21249),n(69518)),P=n.n(N),E=n(25988),I=n(26921),w=n(88214),U=n(21509),A=n(94107),R=n(82760),T=n(18261),D=n(85576),O=n(87257),S=n(57978),q=n(19986),L=n(84242),_=n(84788),M=n(22345),Q=n(43028),F=t.memo((function(e){var i,n,t,r,a=e.uri,l=e.name,s=e.duration_ms,u=e.index,o=e.imgUrl,d=e.artists,m=e.album,x=e.isExplicit,v=e.isMOGEFRestricted,h=e.type,f=(0,L.n)({uri:a},{featureIdentifier:"history"}),p=f.isActive,y=f.isPlaying,k=f.triggerPlay,C=f.togglePlay,N=h===b.p.TRACK,F=h===b.p.EPISODE,B=h===b.p.CHAPTER,G=(0,q._)(a),Z=(0,Q.k)(a),W=(0,_.r)({downloadAvailability:G,isExplicit:x,isMOGEFRestricted:v}),K=W.badges,z=W.hasBadges,H=(null==d?void 0:d.map((function(e){return e.name})).join(c.ag.getSeparator()))||"";return F?r=(0,g.jsx)(E.k,{uri:a,contextUri:a,showUri:m.uri}):B?r=(0,g.jsx)(M.r,{uri:a,contextUri:a,showUri:m.uri}):N&&P().isLocalTrack(a)?r=(0,g.jsx)(I.N,{uri:a,contextUri:a}):N&&(r=(0,g.jsx)(w.$,{uri:a,contextUri:a,albumUri:m.uri,artists:d})),(0,g.jsx)(j.ZP,{value:"row",index:u,children:(0,g.jsx)(T._,{menu:r,children:(0,g.jsxs)(R.c,{uri:a,contextUri:a,index:u,ariaRowIndex:u,onTriggerPlay:function(){k()},isActive:p,isPlayable:Z,ageRestricted:v,dragMetadata:{name:l,createdBy:H},children:[(0,g.jsxs)(U.vZ,{ariaColIndex:0,children:[(0,g.jsx)(U.VG,{uri:a,src:o,isPlaying:y,isActive:p,isLocked:!1,onClick:function(){C()},isEpisode:P().isEpisode(a),playAriaLabel:c.ag.get("tracklist.a11y.play",l,H)}),(0,g.jsxs)(U.vm,{children:[(0,g.jsx)(U.Wh,{titleText:l,children:l}),z&&(0,g.jsxs)(U.g3,{children:[K.download&&(0,g.jsx)(D.G,{size:16}),K.explicit&&(0,g.jsx)(O.N,{}),K.nineteen&&(0,g.jsx)(S.X,{className:A.Z.nineteen,size:16})]}),(0,g.jsx)(U.K9,{children:P().isTrack(a)?(0,g.jsx)(U.T6,{artists:d}):null!==(i=null===(n=d[0])||void 0===n?void 0:n.name)&&void 0!==i?i:""})]})]}),(0,g.jsx)(U.UA,{ariaColIndex:2,children:(0,g.jsx)(U.BM,{nonInteractive:P().isLocalTrack(a),uri:m.uri,name:m.name,creatorUri:null==d||null===(t=d[0])||void 0===t?void 0:t.uri,children:m.name})}),(0,g.jsxs)(U.mU,{ariaColIndex:1,children:[!P().isLocalTrack(a)&&(0,g.jsx)(U.qS,{uri:a,type:h}),(0,g.jsx)(U.A$,{duration:s}),(0,g.jsx)(U.Zv,{menu:r,label:c.ag.get("more.label.track",l,H)})]})]})})})}),(function(e,i){return e.uri===i.uri})),B=t.memo((function(e){var i=e.items,n=(0,t.useCallback)((function(e,i){var n,t,r,a,l,s=(0,C.X)(null!==(n=e.images)&&void 0!==n?n:[],{desiredSize:40});return(0,y.G_)(e)?e.isLocal?(0,g.jsx)(F,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:(null==s?void 0:s.url)||"",album:e.album,artists:e.artists,isExplicit:null!==(a=e.isExplicit)&&void 0!==a&&a,isMOGEFRestricted:null!==(l=e.is19PlusOnly)&&void 0!==l&&l,type:b.p.TRACK},i+e.uri):(0,g.jsx)(F,{index:i,uri:(0,p.$)(e),name:e.name,duration_ms:e.duration.milliseconds,imgUrl:(null==s?void 0:s.url)||"",album:e.album,artists:e.artists,isExplicit:null!==(t=e.isExplicit)&&void 0!==t&&t,isMOGEFRestricted:null!==(r=e.is19PlusOnly)&&void 0!==r&&r,type:b.p.TRACK},i+e.uri):(0,y.iw)(e)?(0,g.jsx)(F,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:(null==s?void 0:s.url)||"",album:e.show,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:b.p.EPISODE},i+e.uri):(0,y.G7)(e)?(0,g.jsx)(F,{index:i,uri:e.uri,name:e.name,duration_ms:e.duration.milliseconds,imgUrl:(null==s?void 0:s.url)||"",album:e.book,artists:[],isExplicit:!1,isMOGEFRestricted:!1,type:b.p.CHAPTER},i+e.uri):((0,y.k6)(e)||(0,y.RB)(e)||(0,k._)(e),(0,g.jsx)(f.hU,{height:"".concat(f.dN,"px")}))}),[]),r=(0,t.useMemo)((function(){return[f.QD.TITLE,f.QD.ALBUM_OR_PODCAST,f.QD.DURATION]}),[]),a=(0,t.useCallback)((function(e){return e.uri}),[]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(j.ZP,{value:"play-history-tracklist",children:(0,g.jsx)(f.Pv,{ariaLabel:"play-history",hasHeaderRow:!0,columns:r,renderRow:n,resolveUri:a,tracks:i,nrTracks:i.length,rowPlaceholder:f.hU,limit:50})})})}));const G="dt3fysZYdQ6hhWfpmjAu",Z="n6LsTkKvpO88xeRyRTdw";var W=function(){var e=(0,s.U5)();return e&&e.items.length>0?(0,g.jsxs)("div",{className:G,children:[(0,g.jsx)(o.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:Z,children:c.ag.get("view.recently-played")}),(0,g.jsx)(B,{items:e.items})]}):(0,g.jsx)(h,{})},K=n(15861),z=n(29439),H=n(87757),$=n.n(H),X=(n(82526),n(41817),n(57327),n(41539),n(94184)),Y=n.n(X),V=n(56081),J=n(70369),ee=n(67892),ie=n(23716),ne=n(34891),te=n(86081);var re=n(14472),ae=n(15852),le=n(74257),se=function(e){var i=e.onClick;return(0,g.jsx)(le.P,{onClick:i,buttonSize:"sm",children:c.ag.get("queue.clear-queue")})},ue=n(73012),oe=n(86025),ce=n(34011),de=(n(31143),n(84465));const me="i9rTNwKyT_NMDghd8q65",xe="DXBMXJD8Zoj4V8MxIVTB",ve="UEtqSfWDubkNdPIaEkfA",ge="I_Rc74Je7W4sk6KAVR05";var he,fe=t.memo((function(e){var i=e.onClose,n=e.onConfirm,r=e.isOpen,a=e.itemCount,l=(0,t.useCallback)((function(e){n(),i(e)}),[n,i]),s=c.ag.get("queue.confirm-title",a);return(0,g.jsx)(de.Z,{shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,onRequestClose:i,contentLabel:s,isOpen:r,children:(0,g.jsxs)("div",{className:me,children:[(0,g.jsx)(o.D,{as:"h2",variant:"cello",className:xe,children:s}),(0,g.jsx)(o.D,{as:"p",variant:"mesto",className:ve,paddingBottom:ue.g4V,children:c.ag.get("queue.confirm-message")}),(0,g.jsxs)("div",{className:Y()("encore-light-theme",ge),children:[(0,g.jsx)(oe.o,{onClick:i,children:c.ag.get("queue.cancel-button")}),(0,g.jsx)(ce.D,{onClick:l,children:c.ag.get("queue.confirm-button")})]})]})})})),pe=n(73727),je=n(15935),ye=function(){return(0,g.jsxs)("div",{className:m,children:[(0,g.jsx)(je.S,{iconSize:64,"aria-hidden":"true"}),(0,g.jsx)(o.D,{as:"h1",variant:"alto",semanticColor:"textBase",className:x,children:c.ag.get("queue.empty-title")}),(0,g.jsx)("p",{children:c.ag.get("queue.empty-description")}),(0,g.jsx)(pe.OL,{to:"/search",className:v,children:(0,g.jsx)(ce.D,{colorSet:"invertedLight",children:c.ag.get("queue.fine-something")})})]})};!function(e){e[e.NowPlaying=0]="NowPlaying",e[e.NextInQueue=1]="NextInQueue",e[e.NextUp=2]="NextUp"}(he||(he={}));n(92222);var be,ke=n(92823),Ce=n(74548),Ne=n(1848),Pe=n(57784),Ee=n(69691);!function(e){e.TRACK="track",e.EPISODE="episode",e.CHAPTER="chapter",e.LOCAL="local",e.AD="ad"}(be||(be={}));var Ie=t.memo((function(e){var i,n,r=e.uri,a=e.uid,l=e.contextUri,s=e.name,u=e.duration_ms,o=e.artists,d=e.index,m=e.rowNumberOffset,x=e.imgUrl,v=e.isExplicit,h=e.isPlayable,f=e.isMOGEFRestricted,p=e.album,y=e.type,b=e.section,k=e.usePlayContextItem,C=e.isAutoPlay,N=void 0!==C&&C,L=e.isEnhanced,F=e.queueSpec,B=(0,ae.$P)(),G=(0,ie.g)(),Z=k({uid:a,uri:r,index:d}),W=Z.triggerPlay,K=Z.togglePlay,z=(0,ae.fU)(Ne.createDesktopTrackListRowEventFactory,{data:{position:d,reason:"",uri:r}}).spec,H=(0,Ee.$o)(r),$=H.isActive,X=H.isPlaying,Y=(0,t.useCallback)((function(e,i){a?W({loggingParams:i},(function(){return G.skipToNext({uri:r,uid:a})})):W({loggingParams:i})}),[G,W,r,a]),V=(0,t.useCallback)((function(e){a?K({loggingParams:e},(function(){return $?X?G.pause():G.resume():G.skipToNext({uri:r,uid:a})})):K({loggingParams:e})}),[G,K,r,a,$,X]),J=y===be.TRACK,ee=y===be.EPISODE,ne=y===be.CHAPTER,te=ee&&"video"===(null==p?void 0:p.mediaType),re=y===be.LOCAL,le=y===be.AD,se=(null==o?void 0:o.map((function(e){return e.name})).join(c.ag.getSeparator()))||"",ue=(0,q._)(r),oe=(0,Q.k)(r,h,P().isLocalTrack(r)),ce=(0,_.r)({downloadAvailability:ue,isExplicit:v,isMOGEFRestricted:f,isEnhanced:L}),de=ce.badges,me=ce.hasBadges;n=ee?(0,g.jsx)(E.k,{uri:r,uid:N?void 0:a,showUri:p.uri,contextUri:l}):ne?(0,g.jsx)(M.r,{uri:r,uid:N?void 0:a,showUri:p.uri,contextUri:l}):re?(0,g.jsx)(I.N,{uri:r,uid:N?void 0:a,contextUri:l}):le?null:(0,g.jsx)(w.$,{uri:r,uid:N?void 0:a,albumUri:p.uri,artists:o,contextUri:l});var xe=(0,t.useCallback)((function(e,i){var n,t=e.meta,l=e.uris.map((function(e){return{uri:e,uid:null}}));n=i===R.W.Before?{before:{uri:r,uid:null!=a?a:null}}:{after:{uri:r,uid:null!=a?a:null}},t.section===he.NowPlaying?G.addToQueue(l):t.origin===he.NowPlaying?G.insertIntoQueue(l,n):G.reorderQueue(l,n)}),[G,a,r]),ve=(0,t.useCallback)((function(e,i){var n,t=e.uids.map((function(e){return{uri:"",uid:e}}));n=i===R.W.Before?{before:{uri:r,uid:null!=a?a:null}}:{after:{uri:r,uid:null!=a?a:null}},G.reorderQueue(t,n)}),[G,a,r]),ge=N?[]:[Pe.aN[P().Type.TRACK],Pe.aN[P().Type.EPISODE]];return(0,g.jsx)(j.ZP,{value:"row",index:d,children:(0,g.jsx)(T._,{menu:n,children:(0,g.jsxs)(R.c,{uri:r,contextUri:l,index:d,onTriggerPlay:Y,isActive:b===he.NowPlaying&&$,ariaRowIndex:d,isPlayable:oe,ageRestricted:f,spec:z,dragMetadata:{name:s,createdBy:se,sectionId:b},onInsert:function(e,i,n,t,a){xe({uris:e,dropIndex:i,meta:a},n),F&&B.logInteraction(F.dragAddItemToQueue({itemToAddToQueue:r}))},onMove:function(e,i,n,t){ve({uids:e,dropIndex:i,meta:t},n),F&&B.logInteraction(F.dragSort())},allowedDropTypes:ge,children:[(0,g.jsx)(U.Dd,{ariaColIndex:0,children:(0,g.jsx)(U.Du,{uri:r,playAriaLabel:c.ag.get("tracklist.a11y.play",s,se),isPlaying:b===he.NowPlaying&&X,isActive:b===he.NowPlaying&&$,spec:z,onClick:function(e,i){V(i)},children:(0,g.jsx)(U.km,{children:d+m+1})})}),(0,g.jsxs)(U.vZ,{ariaColIndex:1,children:[(0,g.jsx)(U.lD,{src:x,isVideo:te,isEpisode:ee||ne}),(0,g.jsxs)(U.vm,{children:[(0,g.jsx)(U.Wh,{titleText:s,children:s}),me&&(0,g.jsxs)(U.g3,{children:[de.enhanced&&(0,g.jsx)(Ce._,{iconSize:16,className:A.Z.enhanced,title:c.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":c.ag.get("web-player.enhance.button_text_enhanced")}),de.download&&(0,g.jsx)(D.G,{size:16}),de.explicit&&(0,g.jsx)(O.N,{}),de.nineteen&&(0,g.jsx)(S.X,{className:A.Z.nineteen,size:16})]}),(0,g.jsxs)(U.K9,{children:[J&&(0,g.jsx)(U.T6,{artists:o,spec:z}),(ee||re)&&!te&&se]})]})]}),(0,g.jsx)(U.UA,{ariaColIndex:2,children:(0,g.jsx)(U.BM,{nonInteractive:re,uri:p.uri,name:p.name,creatorUri:null==o||null===(i=o[0])||void 0===i?void 0:i.uri,spec:z,children:p.name})}),(0,g.jsxs)(U.mU,{ariaColIndex:3,children:[!re&&!ne&&(0,g.jsx)(U.qS,{uri:r,type:y}),(0,g.jsx)(U.A$,{duration:u}),(0,g.jsx)(U.Zv,{menu:n,label:c.ag.get("more.label.track",s,se),spec:z})]})]})})})}),(function(e,i){return e.uri===i.uri&&e.index===i.index&&e.name===i.name})),we=t.memo((function(e){var i=e.tracks,n=e.ariaLabel,r=e.contextUri,a=e.rowNumberOffset,l=void 0===a?0:a,s=e.section,u=e.usePlayContextItem,o=(0,ke.o)(),d=(0,ie.g)(),m=(0,t.useCallback)((function(e,i){o({intent:"remove-from-queue",type:"click"}),d.removeFromQueue(e.map((function(e){return{uid:e.id,uri:e.uri}}))).then(i)}),[d,o]),x=(0,t.useCallback)((function(e,i){if((0,y.iw)(e)){var n,t,a=(0,C.X)(null===(n=e.show)||void 0===n?void 0:n.images,{desiredSize:40});return(0,g.jsx)(Ie,{index:i,rowNumberOffset:l,imgUrl:(null==a?void 0:a.url)||"",uri:(0,p.$)(e),uid:null!==(t=e.uid)&&void 0!==t?t:e.uri,contextUri:r,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.show.name,uri:e.show.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:be.EPISODE,section:s,usePlayContextItem:u,isAutoPlay:"autoplay"===e.provider},"".concat(i).concat(l).concat(e.uid))}if((0,y.G7)(e)){var o,d=(0,C.X)(e.images||void 0,{desiredSize:40});return(0,g.jsx)(Ie,{index:i,rowNumberOffset:l,imgUrl:(null==d?void 0:d.url)||"",uri:(0,p.$)(e),uid:null!==(o=e.uid)&&void 0!==o?o:e.uri,contextUri:r,duration_ms:e.duration.milliseconds,name:e.name,artists:[],album:{name:e.book.name,uri:e.book.uri},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:be.CHAPTER,section:s,usePlayContextItem:u,isAutoPlay:"autoplay"===e.provider},"".concat(i).concat(l).concat(e.uid))}if((0,y.k6)(e)){var m,x,v,h=(0,C.X)(e.images||void 0,{desiredSize:40});return(0,g.jsx)(Ie,{index:i,rowNumberOffset:l,imgUrl:(null==h?void 0:h.url)||"",uri:e.uri,uid:null!==(m=e.uid)&&void 0!==m?m:e.uri,contextUri:r,duration_ms:e.duration.milliseconds,name:null!==(x=null!==(v=e.advertiser)&&void 0!==v?v:e.title)&&void 0!==x?x:c.ag.get("ad-formats.advertisement"),artists:[],album:{name:"",uri:""},isExplicit:!1,isPlayable:!0,isMOGEFRestricted:!1,type:be.AD,section:s,usePlayContextItem:u,isAutoPlay:"autoplay"===e.provider,isEnhanced:!1},"".concat(i).concat(l).concat(e.uid))}if((0,y.G_)(e)||(0,y.RB)(e)){var j,k,N,P,E,I=(0,C.X)(null==e||null===(j=e.album)||void 0===j?void 0:j.images,{desiredSize:40}),w=e.type===b.p.TRACK?e:null;return(0,g.jsx)(Ie,{index:i,rowNumberOffset:l,imgUrl:(null==I?void 0:I.url)||"",uri:(0,p.$)(e),uid:null!==(k=e.uid)&&void 0!==k?k:e.uri,contextUri:r,duration_ms:e.duration.milliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:null!==(N=null==w?void 0:w.isExplicit)&&void 0!==N&&N,isPlayable:!0,isMOGEFRestricted:null!==(P=null==w?void 0:w.is19PlusOnly)&&void 0!==P&&P,type:null!=w&&w.isLocal?be.LOCAL:be.TRACK,section:s,usePlayContextItem:u,isAutoPlay:"autoplay"===e.provider,isEnhanced:"enhanced_recommendation"===(null===(E=e.metadata)||void 0===E?void 0:E.provider)},"".concat(i).concat(l).concat(e.uid))}return(0,g.jsx)(f.Lb,{height:"".concat(f.dN,"px")})}),[l,r,s,u]),v=(0,t.useMemo)((function(){return[f.QD.INDEX,f.QD.TITLE,f.QD.ALBUM,f.QD.DURATION]}),[]),h=(0,t.useCallback)((function(e){return e.uri}),[]),j=(0,t.useCallback)((function(e){var i;return null!==(i=e.uid)&&void 0!==i?i:e.uri}),[]);return(0,g.jsx)(f.Pv,{ariaLabel:n,tracks:i,nrTracks:i.length,onRemove:m,renderRow:x,resolveUri:h,resolveUid:j,columns:v})}));const Ue="rHpv7osDRvs3SUPMpQ_g",Ae="DG9CsoFIptJhAneKoo_F",Re="jf2HafzDEI9jn7Yo05eM",Te="H3Puuvc2nV0GoZRrfpRS",De="HckHyQocDDePWQL2baOY";var Oe=function(){var e=(0,re.$)(),i=e.uri,n=e.description,a=(0,ae.fU)(V.createDesktopNowPlayingQueueEventFactory,{data:{identifier:r.Wg.NOWPLAYING_QUEUE,uri:null!=i?i:""}}),l=a.spec,s=a.logger,u=a.UBIFragment,d=(0,t.useMemo)((function(){return l.nowPlayingSectionFactory()}),[l]),m=(0,t.useMemo)((function(){return l.nextInQueueSectionFactory()}),[l]),x=(0,t.useMemo)((function(){return l.nextFromSectionFactory()}),[l]),v=(0,ie.g)(),h=function(){var e=(0,ie.g)(),i=(0,t.useState)(e.getQueue()),n=(0,z.Z)(i,2),r=n[0],a=n[1];return(0,te.G)(ne.rg.QUEUE_UPDATE,(function(e){return a(e.data)})),r}(),f=h.current,p=h.nextUp,y=h.queued,b=(0,t.useState)(!1),k=(0,z.Z)(b,2),C=k[0],N=k[1],P=(0,t.useCallback)((function(){N(!1)}),[N]),E=(0,t.useCallback)((function(){v.clearQueue(),N(!1)}),[v]),I=(0,t.useCallback)((0,K.Z)($().mark((function e(){var i,n;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=m.clearQueueButtonFactory(),y.length>0&&(i=n.hitRemoveItemsFromQueue({numberOfItemsToRemoveFromQueue:y.length}),s.logInteraction(i)),N(!0);case 3:case"end":return e.stop()}}),e)}))),[s,m,y]),w=(0,L.n)({uri:null!=i?i:""},{featureIdentifier:"queue"}).usePlayContextItem,U="autoplay"===(null==f?void 0:f.provider),A=p.filter((function(e){return U?e:"autoplay"!==e.provider})),R=!(null==y||!y.length),T=!(null==A||!A.length),D=!1===(f||R||T),O=(0,t.useCallback)((0,K.Z)($().mark((function e(){var n;return $().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(T){e.next=2;break}return e.abrupt("return");case 2:n=l.nextFromSectionFactory().queueContextLinkFactory().hitUiNavigate({destination:null!=i?i:""}),s.logInteraction(n);case 4:case"end":return e.stop()}}),e)}))),[T,s,l,i]);return D?(0,g.jsx)(ye,{}):(0,g.jsxs)("div",{className:Ue,children:[(0,g.jsx)(J.$,{children:c.ag.get("queue.page-title")}),(0,g.jsx)(o.D,{as:"h1",variant:"canon",semanticColor:"textBase",className:Ae,children:c.ag.get("playback-control.queue")}),f&&i&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:c.ag.get("queue.now-playing")}),(0,g.jsx)(u,{spec:d,children:(0,g.jsx)(j.ZP,{value:"now-playing",children:(0,g.jsx)(we,{ariaLabel:c.ag.get("queue.now-playing"),tracks:[f],contextUri:i,section:he.NowPlaying,usePlayContextItem:w})})})]}),R&&i&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:Y()(De,Re),children:[(0,g.jsx)(o.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",children:c.ag.get("queue.next-in-queue")}),R&&(0,g.jsx)(se,{onClick:I})]}),(0,g.jsx)(u,{spec:m,children:(0,g.jsx)(j.ZP,{value:"next-in-queue",children:(0,g.jsx)(we,{ariaLabel:c.ag.get("queue.next-in-queue"),tracks:y,rowNumberOffset:1,contextUri:"spotify:app:queue:NextInQueue",section:he.NextInQueue,usePlayContextItem:w})})})]}),T&&i&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:Y()(Re,"standalone-ellipsis-one-line"),children:n&&!U?(0,g.jsxs)(g.Fragment,{children:[c.ag.get("queue.next-from")," ",(0,g.jsx)(ee.r,{className:Te,to:i,onClick:O,children:n})]}):c.ag.get("queue.next-up")}),(0,g.jsx)(u,{spec:x,children:(0,g.jsx)(j.ZP,{value:"next-up",children:(0,g.jsx)(we,{ariaLabel:c.ag.get("queue.next-up"),tracks:A,rowNumberOffset:1+((null==y?void 0:y.length)||0),contextUri:"spotify:app:queue:NextUp",section:he.NextUp,usePlayContextItem:w})})})]}),(0,g.jsx)(fe,{itemCount:(null==y?void 0:y.length)||0,isOpen:C,onClose:P,onConfirm:E})]})},Se=n(69376),qe=n(28638),Le=n(63138);const _e="queue-tabBar-nav";var Me=function(){var e=(0,u.Y)(),i=(0,t.useCallback)((function(e){return(0,g.jsx)(Le.v,{placement:"bottomEnd",arrow:"topStart",title:c.ag.get("pick-and-shuffle.upsell.title.queue"),children:e})}),[]),n=(0,t.useMemo)((function(){return[{title:c.ag.get("playback-control.queue"),itemId:"queue",to:"/queue",uri:"spotify:app:queue",render:i,disabled:e},{title:c.ag.get("view.recently-played"),itemId:"history",to:"/history",uri:"spotify:app:history"}]}),[e,i]);return(0,g.jsx)(qe.w,{children:(0,g.jsx)(Se.n,{className:_e,links:n})})};const Qe=function(){var e=(0,s.nF)(),i=(0,u.Y)();return(0,g.jsxs)("section",{className:"contentSpacing",children:[i&&(0,g.jsx)(a.o,{from:"/queue",to:"/history"}),e&&(0,g.jsx)(l.l,{path:"/history",pageId:r.Wg.NOWPLAYING_HISTORY,children:(0,g.jsx)(W,{})}),(0,g.jsx)(l.l,{path:"/queue",pageId:r.Wg.NOWPLAYING_QUEUE,children:(0,g.jsx)(t.Suspense,{fallback:null,children:(0,g.jsx)(Oe,{})})}),e&&(0,g.jsx)(Me,{})]})}},47991:(e,i,n)=>{n.d(i,{$:()=>t});var t=function(e){var i;return(null==e||null===(i=e.linked_from)||void 0===i?void 0:i.uri)||e.uri}}}]);
//# sourceMappingURL=xpui-routes-queue.js.map