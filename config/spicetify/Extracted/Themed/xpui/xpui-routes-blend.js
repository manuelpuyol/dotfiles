"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8123],{22578:(e,t,n)=>{n.d(t,{$:()=>b});n(26699),n(32023),n(69600),n(68309),n(21249);var i=n(64593),r=n(96206),o=n(69691),l=n(8341),a=n(89952),s=n(67294),c=n(51615),d=n(24183),u=n(85893);function v(e){return e.includes("Spotify")?e:"Spotify – ".concat(e)}var b=function(e){var t,n,b,h,f,m,p,g=e.children,x=e.usePlayingItem,j=v(g);t=g,h=(0,d.Oh)().mainLandmarkRef,f=(0,c.k6)(),m=null===(n=f.location)||void 0===n||null===(b=n.state)||void 0===b?void 0:b.preventMoveFocus,(p=(0,s.useRef)(f.length<2)).current=f.length<2,(0,s.useEffect)((function(){var e=h.current;!m&&!p.current&&e&&t&&(e.setAttribute("aria-label",t),e.focus())}),[t,h,m]);var w=(0,o.IK)().isPlaying,E=(0,l.Y)((function(e){return null==e?void 0:e.item}));return E&&(w||x)&&((0,a.G_)(E)?j=[E.name,E.artists.map((function(e){return e.name})).join(r.ag.getSeparator())].join(" • "):(0,a.iw)(E)?j=[E.name,E.show.name].join(" • "):(0,a.k6)(E)&&(j=v(r.ag.get("ad-formats.advertisement")))),(0,u.jsx)(i.q,{defaultTitle:"Spotify",defer:!1,children:(0,u.jsx)("title",{children:j})})}},70369:(e,t,n)=>{n.d(t,{$:()=>i.$});var i=n(22578)},326:(e,t,n)=>{n.d(t,{l:()=>m});var i,r,o,l=n(4942),a=n(32667),s=n(34011),c=n(18864),d=n(16367),u=n(85166),v=n(85893),b=(i={},(0,l.Z)(i,c.Uo.MEDIUM,"alto"),(0,l.Z)(i,c.Uo.LARGE,"alto"),(0,l.Z)(i,c.Uo.XLARGE,"forte"),i),h=(r={},(0,l.Z)(r,c.Uo.LARGE,"ballad"),(0,l.Z)(r,c.Uo.XLARGE,"cello"),r),f=(o={},(0,l.Z)(o,c.Uo.LARGE,"viola"),(0,l.Z)(o,c.Uo.XLARGE,"viola"),o),m=function(e){var t=e.title,n=e.subtitle,i=e.body,r=e.footnote,o=e.buttonText,l=e.callToActionClicked,m=(0,c.jh)(),p=m&&b[m]||"canon",g=m&&h[m]||"mesto",x=m&&f[m]||"finale";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.D,{as:"h1",variant:p,semanticColor:"textBase",className:u.Z.title,children:t}),(0,v.jsx)(a.D,{as:"h2",variant:g,semanticColor:"textSubdued",className:u.Z.subtitle,children:n}),i,l&&(0,v.jsx)(s.D,{className:u.Z.button,colorSet:"invertedLight",onClick:l,"data-testid":d.xd,children:o}),r&&(0,v.jsx)(a.D,{as:"p",variant:x,semanticColor:"textSubdued",className:u.Z.note,children:r})]})}},27887:(e,t,n)=>{n.d(t,{H:()=>j});var i=n(4942),r=(n(68309),n(35150)),o=n(96206),l=n(91552),a=n(70369),s=n(18864);const c="NTT5CathoDEMjrmgfv9y",d="WmmNhmwHDNvDxInfukYO";var u=n(85893);const v=function(e){return(0,u.jsx)("div",{className:c,children:(0,u.jsx)("div",{className:d,children:(0,u.jsx)("svg",{width:e.iconSize,height:e.iconSize,fill:"currentColor",viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M33 31.998v-23h-2v23H8v2h23v23h2v-23h23v-2z"})})})})};var b,h=n(326),f=n(16367),m=n(85166),p={name:"",username:"",image_url:null,hash:""},g=(b={},(0,i.Z)(b,s.Uo.MEDIUM,164),(0,i.Z)(b,s.Uo.LARGE,164),(0,i.Z)(b,s.Uo.XLARGE,270),b),x=function(e,t){return(0,u.jsx)(l.q,{label:o.ag.get("web-player.blend.invite.button-title"),images:[],width:e,userIconSize:t,customPlaceholder:(0,u.jsx)(v,{iconSize:t}),piled:!0})},j=function(e){var t,n,i,c,d=e.invitation,v=e.callToActionClicked,b=e.breakpointEltRef,j=!(null===(t=d.members)||void 0===t||!t.length),w=j&&(null===(n=d.members)||void 0===n?void 0:n[0])||d.recipient||p,E=j&&d.recipient||null,y=(0,s.jh)(),O=y&&g[y]||128,_=Math.round(.475*O);return(0,u.jsxs)("div",{className:(0,r.cx)(m.Z.container,m.Z.TwoUsers),"data-testid":f.xS,ref:b,children:[(0,u.jsx)(a.$,{children:o.ag.get("blend.invite.page-title")}),(0,u.jsxs)("div",{className:m.Z.facepile,children:[(0,u.jsx)(l.q,{label:w.name,images:[{url:null!==(i=w.image_url)&&void 0!==i?i:"",width:O,height:O}],width:O,userIconSize:_}),E?(0,u.jsx)(l.q,{label:E.name,images:[{url:null!==(c=E.image_url)&&void 0!==c?c:"",width:O,height:O}],width:O,userIconSize:_,piled:!0}):x(O,_)]}),(0,u.jsx)(h.l,{title:d.title,subtitle:d.subtitle,footnote:d.footnote,buttonText:d.button_text,callToActionClicked:v})]})}},16367:(e,t,n)=>{n.d(t,{Eh:()=>l,ab:()=>o,e0:()=>i,xS:()=>r,xd:()=>a});var i="blend-deleted-container",r="blend-two-user-container",o="blend-multi-user-container",l="blend-full-container",a="blend-cta-button"},80647:(e,t,n)=>{n.d(t,{Z:()=>i});const i=function(){var e=window.location.href;return window.location.href="".concat("https://accounts.spotify.com/login","?continue=").concat(encodeURIComponent(e)),null}},22250:(e,t,n)=>{n.d(t,{Ag:()=>a,V3:()=>i,nW:()=>l,oN:()=>o});var i,r=n(16516);!function(e){e.PENDING_INVITATION="PENDING_INVITATION",e.READY_TO_JOIN_EMPTY_BLEND="READY_TO_JOIN_EMPTY_BLEND",e.READY_TO_JOIN_ALREADY_CREATED_BLEND="READY_TO_JOIN_ALREADY_CREATED_BLEND",e.MAX_MEMBERS="MAX_MEMBERS",e.ALREADY_JOINED="ALREADY_JOINED",e.DELETED="DELETED"}(i||(i={}));var o=function(e,t){return e.build().withHost(r.cM).withPath("/v3/view-invitation/".concat(encodeURIComponent(t))).withEndpointIdentifier("v3/view-invitation/{invitationId}").withLocale(e.locale).send()},l=function(e,t){return e.build().withHost(r.cM).withMethod("PUT").withPath("/v2/join/".concat(encodeURIComponent(t))).withEndpointIdentifier("join/{invitationId}").send()},a=function(e){return e.build().withHost(r.cM).withMethod("POST").withPath("/v1/generate").withEndpointIdentifier("v1/generate").send()}},52201:(e,t,n)=>{n.d(t,{j:()=>l});var i=n(4942),r=n(82144),o=n(53052),l=function(){var e;return(0,o.D)((e={},(0,i.Z)(e,r.U.SMALL,536),(0,i.Z)(e,r.U.MEDIUM,792),(0,i.Z)(e,r.U.LARGE,1048),(0,i.Z)(e,r.U.XLARGE,1688),e))}},36266:(e,t,n)=>{n.d(t,{i:()=>b});var i=n(15861),r=n(87757),o=n.n(r),l=(n(21703),n(96647),n(86706)),a=n(96206),s=n(87961),c=n(25853),d=n(51867),u=n(29255),v=n(22250);function b(){var e=(0,l.v9)(u.Gg).user,t=(0,d.k)();return(0,i.Z)(o().mark((function n(){var i,r,l,d,u;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.Ag)(s.b.getInstance());case 3:if(d=n.sent,null===(i=d.body)||void 0===i?void 0:i.invite){n.next=7;break}throw new Error("unable to generate invite link");case 7:u=null!=e&&e.display_name?a.ag.get("blend.invite.body-with-name",e.display_name,null===(r=d.body)||void 0===r?void 0:r.invite):a.ag.get("blend.invite.body-without-name",null===(l=d.body)||void 0===l?void 0:l.invite),(0,c.v)(u),t(a.ag.get("feedback.link-copied")),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),t(a.ag.get("error.generic"));case 15:case"end":return n.stop()}}),n,null,[[0,12]])})))}},81070:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});n(47941),n(82526),n(57327),n(41539),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070);var i=n(4942),r=n(67294),o=n(86706),l=n(96206),a=n(70369),s=n(29255),c=n(18864),d=n(15429),u=n(49961),v=n(22250),b=n(52201),h=n(36266),f=n(27887),m=n(80647),p=n(85893);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j={page_type:v.V3.PENDING_INVITATION,get title(){return l.ag.get("web-player.blend.group-invite.header")},get subtitle(){return l.ag.get("web-player.blend.duo-invite.description")},get button_text(){return l.ag.get("web-player.blend.invite.button-title")},footnote:null,members:[],recipient:null,members_title:null,playlist_uri:null};const w=function(){var e,t=(0,h.i)(),n=(0,b.j)(),i=n.ref,v=n.breakpoint,g=(0,o.v9)(s.Gg).user,w=null!=g&&g.uri?(0,d.C)(null==g?void 0:g.uri):"",E=function(e){return x(x({},j),{},{members:[e],footnote:l.ag.get("web-player.blend.group-invite.warning")})}({name:(null==g?void 0:g.display_name)||"",username:w,image_url:(null===(e=(0,u.X)(null==g?void 0:g.images))||void 0===e?void 0:e.url)||null,hash:""});return g?(0,p.jsxs)(r.Suspense,{fallback:null,children:[(0,p.jsx)(a.$,{children:l.ag.get("web-player.blend.invite.page-title")}),(0,p.jsx)(c.ZU.Provider,{value:v,children:(0,p.jsx)(f.H,{invitation:E,callToActionClicked:t,breakpointEltRef:i})})]}):(0,p.jsx)(m.Z,{})}},80417:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ne});n(47941),n(82526),n(57327),n(41539),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070);var i=n(4942),r=n(67294),o=n(86706),l=n(51615),a=n(29255),s=n(29634),c=(n(74916),n(15306),n(69518)),d=n.n(c),u=n(33661),v=n(87577),b=n(96206),h=n(87972),f=n(49207),m=n(18864),p=n(6158),g=n(22250),x=n(52201),j=n(36266),w=n(15861),E=n(87757),y=n.n(E),O=(n(21703),n(96647),n(87961)),_=n(51867);var A=n(15358),D=n(326),I=n(16367),k=n(85166),N=n(85893),T=function(e){var t=e.invitation,n=e.callToActionClicked,i=e.breakpointEltRef;return(0,N.jsxs)("div",{className:k.Z.container,"data-testid":I.Eh,ref:i,children:[(0,N.jsx)(A.Z,{iconSize:64}),(0,N.jsx)(D.l,{title:t.title,subtitle:t.subtitle,buttonText:t.button_text,footnote:null,callToActionClicked:n})]})},R=n(70369),P=(n(68309),n(21249),n(94184)),U=n.n(P),Z=n(32667),L=n(91552),M=n(18261),S=n(43480),C=n(67892);const Y="HKAYWYmxd5Ie8WSi0a4y",G="i52u_T3b50wraodIaORk",V="xakiNVMlUf6geF67FEgy",B="IRhTesoeIiwswlly0Dvg",z="LNJzE17iskXWmfKAzY4U",X="qzBr7X7cdLUhWdk0r8lL";var q=function(e){var t=e.uri,n=e.imageUrl,i=e.name;return(0,N.jsx)("li",{children:(0,N.jsx)(M._,{menu:(0,N.jsx)(S.I,{uri:t}),children:(0,N.jsx)(C.r,{to:t,children:(0,N.jsxs)("div",{className:B,children:[(0,N.jsx)(L.q,{images:[{url:n,width:null,height:null}],label:i,width:32,userIconSize:24,className:z}),(0,N.jsx)(Z.D,{variant:"violaBold",className:"standalone-ellipsis-one-line",semanticColor:"textBase",children:i})]})})})})},W=function(e){var t=e.members,n=e.headingText,i=e.className;return(0,N.jsxs)("div",{className:U()(Y,i),children:[(0,N.jsx)("div",{children:(0,N.jsx)(Z.D,{as:"h4",variant:"minuetBold",semanticColor:"textSubdued",className:G,children:n})}),(0,N.jsx)("ul",{className:V,children:t&&t.map((function(e){return(0,N.jsx)(q,{imageUrl:e.image_url||"",name:e.name,uri:d().profileURI(e.username).toURI()},e.username)}))}),(0,N.jsx)("div",{className:X})]})},H=function(e){var t=e.invitation,n=e.callToActionClicked,i=e.breakpointEltRef,r=t.members||[],o=(0,N.jsx)("div",{className:k.Z.userListContainer,"data-testid":I.ab,children:(0,N.jsx)(W,{className:k.Z.userList,headingText:t.members_title,members:r})});return(0,N.jsxs)("div",{className:k.Z.container,ref:i,children:[(0,N.jsx)(R.$,{children:b.ag.get("blend.join.title")}),(0,N.jsx)(D.l,{title:t.title,subtitle:t.subtitle,footnote:t.footnote,body:o,buttonText:t.button_text,callToActionClicked:n})]})},J=n(27887);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){var t,n,i=e.invitationId,r=(0,l.k6)(),o=(0,v.W6)(f.c$),a=(0,h.J)(g.oN,[i]),s=a.data,c=a.error,E=a.loading,A=(0,j.i)(),R=function(e){var t=(0,_.k)(),n=(0,l.k6)();return(0,w.Z)(y().mark((function i(){var r,o;return y().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,(0,g.nW)(O.b.getInstance(),e);case 3:if(r=i.sent,o=d().from(null==r?void 0:r.body.playlist_uri).toURLPath(!0)){i.next=7;break}throw new Error("unable to join");case 7:n.replace(o),i.next=13;break;case 10:i.prev=10,i.t0=i.catch(0),t(b.ag.get("error.request-playlist-failure"));case 13:case"end":return i.stop()}}),i,null,[[0,10]])})))}(i),P=(0,x.j)(),U=P.ref,Z=P.breakpoint,L=null===s||!s.body;if(L||E||c)return(0,N.jsx)(p.h,{timeoutInMs:1e3,hasError:!!c||!E&&L,errorMessage:b.ag.get("error.generic")});var M=null===(t=d().from(null==s?void 0:s.body.playlist_uri))||void 0===t?void 0:t.toURLPath(!0),S=(null==s||null===(n=s.body.members)||void 0===n?void 0:n.length)||0,C=o===f.rS.TWO_USER;switch(null==s?void 0:s.body.page_type){case g.V3.DELETED:return(0,N.jsx)(m.ZU.Provider,{value:Z,children:(0,N.jsxs)("div",{className:k.Z.container,ref:U,"data-testid":I.e0,children:[(0,N.jsx)(u.F,{iconSize:64}),(0,N.jsx)(D.l,{title:s.body.title,subtitle:s.body.subtitle,buttonText:s.body.button_text,footnote:s.body.footnote,callToActionClicked:A})]})});case g.V3.ALREADY_JOINED:return M&&r.replace(M),(0,N.jsx)(p.h,{hasError:!1,errorMessage:b.ag.get("error.request-playlist-failure")});case g.V3.READY_TO_JOIN_EMPTY_BLEND:return(0,N.jsx)(m.ZU.Provider,{value:Z,children:(0,N.jsx)(J.H,{invitation:s.body,breakpointEltRef:U,callToActionClicked:R})});case g.V3.READY_TO_JOIN_ALREADY_CREATED_BLEND:return C&&S>=2?(0,N.jsx)(m.ZU.Provider,{value:Z,children:(0,N.jsx)(T,{invitation:F(F({},s.body),{},{title:b.ag.get("blend.link-invialid.header"),subtitle:b.ag.get("blend.link-invalid.subtitle"),button_text:b.ag.get("blend.invite.button-title")}),callToActionClicked:A,breakpointEltRef:U})}):(0,N.jsx)(m.ZU.Provider,{value:Z,children:(0,N.jsx)(H,{invitation:s.body,callToActionClicked:R,breakpointEltRef:U})});case g.V3.MAX_MEMBERS:return(0,N.jsx)(m.ZU.Provider,{value:Z,children:(0,N.jsx)(T,{invitation:s.body,callToActionClicked:A,breakpointEltRef:U})});case g.V3.PENDING_INVITATION:return(0,N.jsx)(m.ZU.Provider,{value:Z,children:(0,N.jsx)(J.H,{invitation:s.body,callToActionClicked:A,breakpointEltRef:U})});default:return(0,N.jsx)(p.h,{timeoutInMs:1e3,hasError:!0,errorMessage:b.ag.get("error.generic")})}},Q=n(80647);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}var te=function(e){var t=e.invitationId;return(0,o.v9)(a.Gg).user?(0,N.jsx)(s.n,{fallback:null,children:(0,N.jsx)($,{invitationId:t})}):(0,N.jsx)(Q.Z,{})};const ne=r.memo((function(){return(0,N.jsx)(te,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},(0,l.UO)()))}))},85166:(e,t,n)=>{n.d(t,{Z:()=>i});const i={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",container:"yMoj4jXSudxZ6BkKxV2E",TwoUsers:"IDgUCqAbkRah6OFywv1q",subtitle:"qmKxO5qV4XmVYfpFpaDA",facepile:"nWMdWl40O8K7HQT8Tagc",title:"csRAeNipsu1camQTMiIU",button:"nxFBywAeAI8Zk2fav3Yj",userList:"lxPLQIPb1VSV3VL18Ke3",userListContainer:"BzMKhmywgyIt6IUjcTGW",note:"DSdKNusLgsMX_iicYCU2"}}}]);
//# sourceMappingURL=xpui-routes-blend.js.map