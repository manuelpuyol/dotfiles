"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8396],{88396:(e,r,n)=>{n.r(r),n.d(r,{EPISODE_SPONSORS_SHELF_TESTID:()=>w,EpisodeSponsorsWrapper:()=>k,SEE_ALL_EPISODE_SPONSORS_TESTID:()=>P,default:()=>T});var t=n(4942),o=(n(66992),n(41539),n(88674),n(78783),n(33948),n(47941),n(82526),n(57327),n(38880),n(89554),n(54747),n(49337),n(33321),n(69070),n(67294)),s=n(15861),i=n(87757),a=n.n(i),c=(n(21249),n(92222),n(1486)),p=n(8271);n(47042);var u=n(85893);function f(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}var d=(0,o.lazy)((function(){return Promise.all([n.e(1814),n.e(9033)]).then(n.bind(n,99033))}));function l(e){var r=e.fetchedEpisodeSponsorsData,n=e.fireTrackingEvent,i=e.numberOfSponsorsToDisplay,l=e.firedViewedEvents,v=e.version,b=e.reason,O=e.uri,y=function(e){var r=e.fetchedEpisodeSponsorsData,n=e.numberOfSponsorsToDisplay;return(0,o.useMemo)((function(){return{displayedEpisodeSponsorsData:r.slice(0,n)}}),[r,n])}({fetchedEpisodeSponsorsData:r,numberOfSponsorsToDisplay:i}),S=y.displayedEpisodeSponsorsData,E=(0,p.s4)(),m=(0,o.useMemo)((function(){return S.map((function(e,r){return(0,u.jsx)(d,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?f(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}({fireTrackingEvent:n,firedViewedEvents:l,version:v,onClick:function(){var e=(0,s.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.send((0,c.$)({uri:O,reason:b,lineitem_id:S.map((function(e){return e.metadata.lineitemId})),ui_navigate:S.map((function(e,n){var t=e.clickthrough;return r===n?t:""})),navigate_to_external_uri:S.map((function(e,n){return r===n}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},e),"".concat(e.metadata.lineitem_id,"-").concat(r))}))}),[S,n,l,v,b,O,E]);return{displayedEpisodeSponsorsData:S,displayedSponsors:m}}var v=n(69518),b=n.n(v);var O=n(51615);var y=n(18693);n(70189);function S(e){var r,n=e.firedViewedEvents,t=(0,o.useRef)();return{firedViewedEvents:t.current=null!==(r=null!=n?n:t.current)&&void 0!==r?r:new Set}}function E(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?E(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function h(e){var r=e.uri,n=e.getEpisodeSponsors,t=e.fireTrackingEvent,s=e.numberOfSponsorsToDisplay,i=e.version,a=e.reason,c=(0,O.TH)().state,p=function(e){var r=e.uri,n=e.episodeBase62Id;return{episodeBase62Id:(0,o.useMemo)((function(){var e;return n||(null===(e=b().from(r))||void 0===e?void 0:e.getBase62Id())}),[r,n])}}(m(m({},c),{},{uri:r})),u=p.episodeBase62Id,f=(0,y.m)(m(m({},c),{},{episodeBase62Id:u,getEpisodeSponsors:n,version:i})).fetchedEpisodeSponsorsData,d=S(m({},c)).firedViewedEvents;return m(m({uri:r,episodeBase62Id:u,fetchedEpisodeSponsorsData:f},l({fetchedEpisodeSponsorsData:f,fireTrackingEvent:t,numberOfSponsorsToDisplay:s,firedViewedEvents:d,version:i,reason:a,uri:r})),{},{firedViewedEvents:d,reason:a})}function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function D(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){(0,t.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var j=(0,o.lazy)((function(){return n.e(4791).then(n.bind(n,54791))})),w="episode-sponsors-shelf",P="see-all-episode-sponsors";function k(e){var r,n={numberOfSponsorsToDisplay:void 0===(r=e.numberOfSponsorsToDisplay)?3:r}.numberOfSponsorsToDisplay,t=h(D(D({},e),{},{numberOfSponsorsToDisplay:n}));return t.episodeBase62Id&&t.displayedSponsors.length?(0,u.jsx)(o.Suspense,{fallback:!0,children:(0,u.jsx)(j,D(D({},e),{},{numberOfSponsorsToDisplay:n,state:t}))}):null}const T=k},18693:(e,r,n)=>{n.d(r,{F:()=>u,m:()=>f});var t=n(15861),o=n(29439),s=n(87757),i=n.n(s),a=(n(21703),n(96647),n(66992),n(41539),n(88674),n(78783),n(33948),n(67294)),c=n(24697),p=n(31604),u=420;function f(e){var r=e.episodeBase62Id,s=e.getEpisodeSponsors,f=e.fetchedEpisodeSponsorsData,d=void 0===f?[]:f,l=e.version,v=(0,a.useState)(d),b=(0,o.Z)(v,2),O=b[0],y=b[1],S=(0,a.useCallback)((0,t.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r){e.next=3;break}throw new Error("episodeBase62Id is required to fetch episode sponsors");case 3:if(null==s){e.next=7;break}e.t0=s,e.next=10;break;case 7:return e.next=9,Promise.resolve().then(n.bind(n,11401));case 9:e.t0=e.sent.getEpisodeSponsors;case 10:return t=e.t0,e.t1=y,e.next=14,t(r,{version:l});case 14:e.t2=e.sent,(0,e.t1)(e.t2),e.next=21;break;case 18:e.prev=18,e.t3=e.catch(0),y([]);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),[r,s,l]),E=(0,c.y1)(S,u);return(0,a.useEffect)((function(){d.length||E()}),[E,d.length]),(0,p.H)(E),{fetchedEpisodeSponsorsData:O}}},31604:(e,r,n)=>{n.d(r,{H:()=>p});n(32564);var t=n(67294),o=n(87577),s=n(49207),i=n(40080),a=n(8341),c=n(89952);function p(e){var r=(0,o.W6)(s.oF),n=(0,a.Y)((function(e){var r,n,t=null!==(r=null==e?void 0:e.item)&&void 0!==r?r:void 0;return(0,c.k6)(t)&&t.isPodcastAd&&null!==(n=t.id)&&void 0!==n?n:void 0})),p=(0,i.D)(n);(0,t.useEffect)((function(){n!==p&&Boolean(n)&&setTimeout(e,r)}),[e,n,p,r])}}}]);
//# sourceMappingURL=8396.js.map