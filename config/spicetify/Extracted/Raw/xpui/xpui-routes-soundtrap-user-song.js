"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1248],{22578:(e,r,i)=>{i.d(r,{$:()=>g});i(26699),i(32023),i(69600),i(68309),i(21249);var n=i(64593),a=i(96206),t=i(69691),l=i(8341),s=i(89952),o=i(67294),u=i(51615),c=i(24183),d=i(85893);function m(e){return e.includes("Spotify")?e:"Spotify – ".concat(e)}var g=function(e){var r,i,g,f,h,p,v,x=e.children,j=e.usePlayingItem,y=m(x);r=x,f=(0,c.Oh)().mainLandmarkRef,h=(0,u.k6)(),p=null===(i=h.location)||void 0===i||null===(g=i.state)||void 0===g?void 0:g.preventMoveFocus,(v=(0,o.useRef)(h.length<2)).current=h.length<2,(0,o.useEffect)((function(){var e=f.current;!p&&!v.current&&e&&r&&(e.setAttribute("aria-label",r),e.focus())}),[r,f,p]);var b=(0,t.IK)().isPlaying,k=(0,l.Y)((function(e){return null==e?void 0:e.item}));return k&&(b||j)&&((0,s.G_)(k)?y=[k.name,k.artists.map((function(e){return e.name})).join(a.ag.getSeparator())].join(" • "):(0,s.iw)(k)?y=[k.name,k.show.name].join(" • "):(0,s.k6)(k)&&(y=m(a.ag.get("ad-formats.advertisement")))),(0,d.jsx)(n.q,{defaultTitle:"Spotify",defer:!1,children:(0,d.jsx)("title",{children:y})})}},70369:(e,r,i)=>{i.d(r,{$:()=>n.$});var n=i(22578)},85693:(e,r,i)=>{i.d(r,{t:()=>s});var n=i(36590),a=i(8498),t=i(75032),l=i(85893),s=function(e){var r=e.project,i=e.index,s=e.onClick;return(0,l.jsx)(n.C,{index:i,onClick:function(){return s(r.key)},headerText:r.title,featureIdentifier:"make_music",uri:r.originalTrackUri,delegateNavigation:!0,renderCardImage:function(){return(0,l.jsx)(a.x,{images:[{url:r.imageUri}]})},renderSubHeaderContent:function(){return(0,l.jsx)(t.NB,{source:r.templateDescription})}})}},47547:(e,r,i)=>{i.r(r),i.d(r,{UserSong:()=>X,default:()=>J,parseReleaseDate:()=>K});var n=i(29439),a=(i(91058),i(66992),i(41539),i(78783),i(33948),i(41637),i(74916),i(64765),i(21249),i(47042),i(57327),i(68309),i(15306),i(67294)),t=i(86706),l=i(51615),s=i(69518),o=i.n(s),u=i(32667),c=i(97348),d=i(73305),m=i(96206),g=i(60210),f=i(48690),h=i(51871),p=i(70369),v=i(60289),x=i(59482),j=i(72907),y=i(6158),b=i(55120),k=i(18686),I=i(87834),P=i(87972),S=i(92823),C=i(61901),U=i(29255),R=i(32626),w=i(40254),T=i(23716),D=i(84242),E=i(69691),N=i(8341),L=i(52404),A=i(89948),_=i(15852),O=i(42781),B=i(43315),F=i(81612),H=i(85693),$=i(1253),Y=i(28248),z=i(42922),Q=i(85893),q=[Y.QD.INDEX,Y.QD.TITLE,Y.QD.DURATION],G=a.memo((function(e){var r=e.ariaLabel,i=e.tracks,t=e.creator,l=e.highlightUri,s=e.scrollToIndex,o=e.usePlayContextItem,u=e.hasHeaderRow,c=void 0===u||u,d=(0,a.useRef)(null),m=(0,a.useRef)(!1),g=(0,a.useState)(null),f=(0,n.Z)(g,1)[0];(0,a.useEffect)((function(){d.current&&(f?d.current.scrollToIndex(f):s&&d.current.scrollToIndex(s))}),[f,s]);var h=(0,a.useCallback)((function(e,r){var i,n,a=!m.current&&!!l&&l===e.uri;return a&&(m.current=!0),(0,Q.jsx)(Y.Ym,{index:r,trackNumber:r+1,contextUri:t.uri,uri:e.uri,duration_ms:e.duration.milliseconds,name:e.name,isPlayable:e.playability.playable,artists:[{uri:t.uri,profile:{name:null!==(i=null!==(n=t.displayName)&&void 0!==n?n:t.name)&&void 0!==i?i:""}}],playcount:0,shouldRenderPlayCount:!1,shouldHighLight:a,usePlayContextItem:o},r+e.uri)}),[t,l,o]),p=(0,a.useCallback)((function(e){return"track"in e?e.track.uri:""}),[]);return(0,Q.jsx)(z.ZP,{value:"album-tracklist",children:(0,Q.jsx)(Y.Pv,{ariaLabel:r,tracks:i,hasHeaderRow:c,rowPlaceholder:Y.uD,columns:q,renderRow:h,resolveUri:p,nrTracks:i.length,outerRef:d},t.uri)})}));const M="a4JGtYPrNWmb5GUgrYMX",W="Y3jBRL4mS97_u1yK6lml",Z="uV9hvAknI8LQmO3fPuqx";var X=function(e){var r,i,s,o,d,y,I,P,w=e.episode,L=e.creator,A=w.uri,O=w.coverArt,Y=(0,l.k6)(),z=(0,_.fU)(c.createDesktopEpisodeEventFactory,{data:{uri:A}}),q=z.spec,X=z.logger,J=(0,T.g)(),V=(0,S.o)(),ee=parseInt(new URLSearchParams((0,l.TH)().search).get("index")||"0",10),re=(0,D.n)({uri:A},{featureIdentifier:"episode"}),ie=re.usePlayContextItem,ne=re.triggerPlay,ae=re.togglePlay,te=re.isActive,le=(0,E.$o)(A),se=le.isPlaying,oe=le.isActive,ue=O[0].url,ce=(0,C.Zj)(ue||null),de=(0,N.Y)((function(e){var r;return null!==(r=null==e?void 0:e.isPaused)&&void 0!==r?r:void 0})),me=oe||te,ge=(0,a.useCallback)((function(e,r,i){var n="play";if(!se||0!==e&&r||(n="pause"),V({intent:n,targetUri:A,type:"click",itemIdSuffix:e>0?"podcast-description-timestamp":"button"}),te&&!r)ae({loggingParams:null==i?void 0:i()});else if(oe&&!r)de?(null==i||i("resume"),J.resume()):(null==i||i("pause"),J.pause());else{var a=null==i?void 0:i("play");ne({seekTo:e,loggingParams:a})}}),[se,V,A,oe,te,de,J,ae,ne]),fe=(0,a.useCallback)((function(){ge(0,!1,(function(e){var r,i=q.actionBarFactory().playButtonFactory();return r="pause"===e||se?i.hitPause({itemToBePaused:A}):"resume"===e||me?i.hitResume({itemToBeResumed:A}):i.hitPlay({itemToBePlayed:A}),X.logInteraction(r)}))}),[ge,me,se,X,q,A]);(0,a.useEffect)((function(){if(w){var e=new URLSearchParams(location.search);if(e.has("t")){var r=e.get("t")||"0",i=1e3*parseInt(r,10);i<=w.duration.milliseconds&&ge(i,!0)}}}),[w]);var he=w.playability.playable,pe=(w.coverArt||[]).map((function(e){return{url:e.url,width:e.width||void 0,height:e.height||void 0}})),ve=(0,a.useCallback)((function(){return new URLSearchParams(Y.location.search.slice(1)).get("highlight")||""}),[Y.location.search])(),xe=(0,t.v9)(U.Gg),je=null!==(r=null===(i=xe.overrides)||void 0===i?void 0:i.locale)&&void 0!==r?r:xe.locale,ye=(0,F.w)(!1,L.id).projects,be=(0,a.useState)([]),ke=(0,n.Z)(be,2),Ie=ke[0],Pe=ke[1];return(0,a.useEffect)((function(){var e=ye.filter((function(e){return e.publishedTrackUri!==w.uri}));Pe(e)}),[ye,w.uri]),(0,Q.jsxs)("section",{"data-testid":"user-song",className:M,children:[(0,Q.jsx)(p.$,{children:m.ag.get("podcasts.episode.seo.title",{name:w.name,show:null!==(s=null===(o=w.podcast)||void 0===o?void 0:o.name)&&void 0!==s?s:""})}),(0,Q.jsxs)(v.gF,{backgroundColor:ce,children:[(0,Q.jsxs)(x.W,{children:[(0,Q.jsx)(b.$,{size:"md",onClick:function(){return ae()},disabled:!he,isPlaying:se,uri:A}),(0,Q.jsx)(j.i,{text:w.name})]}),(0,Q.jsx)(R._P,{menu:(0,Q.jsx)($.kn,{uri:A,sharingInfo:w.sharingInfo}),children:(0,Q.jsx)(v.Oz,{dragUri:A,images:pe,name:w.name,placeholderType:"album"})}),(0,Q.jsxs)(v.sP,{children:[(0,Q.jsx)(v.dy,{small:!0,uppercase:!0,children:"Song"}),(0,Q.jsx)(R._P,{menu:(0,Q.jsx)($.kn,{uri:A,sharingInfo:w.sharingInfo}),children:(0,Q.jsx)(v.xd,{dragUri:w.uri,dragLabel:w.name,children:w.name})}),(0,Q.jsx)(v.QS,{creators:[L],releaseDate:K(null===(d=w.releaseDate)||void 0===d?void 0:d.isoString),durationMilliseconds:w.duration.milliseconds})]})]}),(0,Q.jsx)(g.o,{backgroundColor:ce,children:(0,Q.jsxs)(g.F,{children:[(0,Q.jsx)(b.$,{onClick:fe,disabled:!he,isPlaying:se,size:"lg",uri:A}),(0,Q.jsx)(h.w,{uri:w.uri,size:f.q.md}),(0,Q.jsx)(R.yj,{menu:(0,Q.jsx)($.kn,{uri:w.uri,sharingInfo:w.sharingInfo}),children:(0,Q.jsx)(f.z,{label:m.ag.get("more.label.context",w.name)})})]})}),(0,Q.jsxs)("div",{className:"contentSpacing",children:[(0,Q.jsx)(G,{ariaLabel:w.name,tracks:[w],creator:L,highlightUri:ve,scrollToIndex:ee,usePlayContextItem:ie}),(0,Q.jsx)("div",{className:Z,children:(0,Q.jsx)("div",{children:(null===(y=w.releaseDate)||void 0===y?void 0:y.isoString)&&(0,Q.jsx)(u.D,{as:"p",variant:"mesto",children:(0,B.BI)((0,B.RX)(w.releaseDate.isoString),je,{year:"numeric",month:"long",day:"numeric"})})})})]}),Ie.length>0&&(0,Q.jsx)("div",{className:"contentSpacing",children:(0,Q.jsx)(k.q,{index:0,id:"more-user-songs",className:W,title:m.ag.get("album-page.more-by-artist",null!==(I=null!==(P=L.displayName)&&void 0!==P?P:L.name)&&void 0!==I?I:"User"),total:Ie.length,seeAllUri:L.uri,seeAllLabel:"Show profile",alwaysShowSeeAll:!0,children:Ie.map((function(e,r){return(0,Q.jsx)(H.t,{index:r,project:e,onClick:function(){}},e.key)}))})})]})};const J=a.memo((function(){var e,r=(0,l.UO)().episodeId,i=o().episodeURI(r).toURI(),n=(0,L.I)(i,!1),t="";(null==n?void 0:n.type)===O.p.EPISODE&&(t=(null===(e=n.podcast)||void 0===e?void 0:e.uri)||"");var s=(0,A.l)(t||"",!1),u=s.data,c=s.error,g="",f="",h="";(null==u?void 0:u.type)===O.p.SHOW&&(g=u.publisherName,f=o().profileURI(g).toURI(),h=u.name);var p=(0,P.J)(w.n5.getProfile,[{uri:f,playlists:10,artists:10,episodes:10}]).data,v={uri:f,name:h,displayName:h,id:g,images:p?[{url:p.image_url}]:[]};return!n||n.type!==O.p.EPISODE||c?(0,Q.jsx)(y.h,{hasError:!1,errorMessage:m.ag.get("error.not_found.title.podcast")}):(0,Q.jsx)(a.Suspense,{fallback:null,children:(0,Q.jsx)(I.C,{pageId:d.Wg.PODCAST_EPISODE,uri:i,children:(0,Q.jsx)(X,{episode:n,creator:v})})})}));function K(e){return(null==e?void 0:e.replace(/T.*/,""))||""}},87834:(e,r,i)=>{i.d(r,{C:()=>l});var n=i(67294),a=i(94960),t=i(85893),l=function(e){var r=e.pageId,i=e.uri,l=e.children,s=(0,a.b)(),o=(0,a.H)();return(0,n.useEffect)((function(){null==s||s.reportPageView({pageId:r,navigationalRoot:null!=o?o:void 0,entityUri:i})}),[r,o,s,i]),(0,t.jsx)(t.Fragment,{children:l})}}}]);
//# sourceMappingURL=xpui-routes-soundtrap-user-song.js.map