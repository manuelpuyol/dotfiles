"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5070],{36371:(e,n,t)=>{t.r(n),t.d(n,{SKELETON_CARDS_COUNT:()=>H,default:()=>D});var a=t(94184),i=t.n(a),r=t(96206),o=t(70369),s=t(6158),c=t(81993),l=t(38470),d=t(86868),u=(t(21249),t(18686)),m=t(30343),h=t(85893),g=function(e){var n,t,a=e.section;return(0,h.jsx)(u.q,{pageId:a.uri,title:null!==(n=null===(t=a.data.title)||void 0===t?void 0:t.text)&&void 0!==n?n:"",showAll:!0,index:0,id:a.uri,children:a.sectionItems.items.map(m.x)})},f=function(e){var n,t=e.section;switch(null===(n=t.data)||void 0===n?void 0:n.__typename){case"HomeGenericSectionData":return(0,h.jsx)(g,{section:(0,d.f)(t,t.data)});case"HomeShortsSectionData":case"HomeRecentlyPlayedSectionData":case"HomeFeedBaselineSectionData":case"HomeNativeAdsSectionData":case"HomeOnboardingSectionData":case null:case void 0:case"HomeFeatureActivationSectionData":return null;default:return(0,l._)(t.data),null}},v=t(93433),x=(t(66992),t(41539),t(33948),t(67294)),j=t(69756),p=t(60653),S=(0,x.memo)((function(e){var n=e.cardCount;return(0,h.jsx)(p.X,{isLoading:!0,showAll:!0,children:(0,v.Z)(new Array(n).keys()).map((function(e,n){return(0,h.jsx)(j.A,{isLoading:!0},n)}))})})),_=t(29393),y=t(76728),H=10,w=function(e){var n=e.uri,t=(0,c.xf)({uri:n,timeZone:(0,_.L7)()},{cacheTime:_.us,staleTime:_.fS}),a=t.data,o=t.error;if(t.loading)return(0,h.jsx)("section",{"data-testid":"home-page",children:(0,h.jsx)("div",{className:y.Z.home,children:(0,h.jsx)("div",{className:i()(y.Z.content,"contentSpacing"),children:(0,h.jsx)(S,{cardCount:H})})})});if(null!==o)return(0,h.jsx)(s.h,{hasError:!0,errorMessage:r.ag.get("error.generic")});var l=null==a?void 0:a.homeSections;if("HomeSectionCollection"!==(null==l?void 0:l.__typename)||0===l.sections.length)return(0,h.jsx)(s.h,{hasError:!0,errorMessage:r.ag.get("error.generic")});var d=l.sections[0];return"HomeSection"!==d.__typename?(0,h.jsx)(s.h,{hasError:!0,errorMessage:r.ag.get("error.generic")}):(0,h.jsx)("section",{"data-testid":"home-section-page",children:(0,h.jsx)("div",{className:y.Z.home,children:(0,h.jsx)("div",{className:i()(y.Z.content,"contentSpacing"),children:(0,h.jsx)(f,{section:d})})})})};const D=function(e){var n=e.uri;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(o.$,{children:r.ag.get("page.generic-title")}),(0,h.jsx)(w,{uri:n})]})}}}]);
//# sourceMappingURL=home-v2-section.js.map