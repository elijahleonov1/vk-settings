(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){e.exports=n(361)},361:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",function(){return b}),n.d(r,"getUser",function(){return _});var a={};n.r(a),n.d(a,"default",function(){return x}),n.d(a,"getFriends",function(){return k});var c={};n.r(c),n.d(c,"default",function(){return F}),n.d(c,"getSearch",function(){return P});var s={};n.r(s),n.d(s,"fetchedUser",function(){return W});var o={};n.r(o),n.d(o,"fetchedFriends",function(){return L}),n.d(o,"updateFriends",function(){return B});var i={};n.r(i),n.d(i,"fetchenSearch",function(){return N});n(154),n(156);var u=n(0),l=n.n(u),f=n(64),d=n.n(f),p=n(51),h=n(39),m=n(152),v=n(52),g="SET_USER",E={photo_200:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",first_name:"\u0412\u0430\u0441\u044f",last_name:"\u0412\u0430\u0441\u0435\u0447\u043a\u0438\u043d",city:{title:"New York"}};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(v.a)({},e,t.payload);default:return e}}var _=function(e){return e.user},w=n(31),O="FETCHED_FRIENDS",j="UPDATE_FRIENDS",y={users:[]};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object(v.a)({},e,{users:Object(w.a)(t.users)});case j:return Object(v.a)({},e,{users:[].concat(Object(w.a)(e.users),Object(w.a)(t.users))});default:return e}}var k=function(e){return e.friends.users},S="FETCHED_SEARCH",C={q:[]};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(v.a)({},e,{q:Object(w.a)(t.search)});default:return e}}var P=function(e){return e.search.q},T=Object(p.c)({user:b,friends:x,search:F}),H=n(53),U=n(35),A=n(2),I=(n(358),n(10)),R=n.n(I),q=n(23),z="5.95",D=function(){var e=Object(q.a)(R.a.mark(function e(t){var n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.send("VKWebAppGetAuthToken",{app_id:7080438,scope:t});case 3:return n=e.sent,e.next=6,n.data.access_token;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(q.a)(R.a.mark(function e(){var t;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.send("VKWebAppGetUserInfo",{});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(q.a)(R.a.mark(function e(){var t,n,r,a,c,s=arguments;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:100,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,e.next=5,D("friends");case 5:return r=e.sent,"friends.get","nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",a={access_token:r,v:z,fields:"nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",count:t,offset:n},e.next=11,H.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:a});case 11:return c=e.sent,e.next=14,c.data.response.items;case 14:return e.abrupt("return",e.sent);case 17:throw e.prev=17,e.t0=e.catch(2),Error(e.t0.message);case 20:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(q.a)(R.a.mark(function e(t){var n,r,a,c,s,o,i,u,l,f,d,p,h,m;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.q,r=void 0===n?"":n,a=t.offset,c=void 0===a?0:a,s=t.limit,o=void 0===s?10:s,i=t.filters,u=void 0===i?"":i,l=t.fields,void 0===l?"":l,f=t.search_global,d=void 0===f?1:f,e.prev=1,e.next=4,D("friends, groups");case 4:return p=e.sent,"search.getHints",h={access_token:p,v:z,q:r,offset:c,limit:o,filters:u,search_global:d},e.next=9,H.a.send("VKWebAppCallAPIMethod",{method:"search.getHints",params:h});case 9:return m=e.sent,e.next=12,m.data.response.items;case 12:return e.abrupt("return",e.sent);case 15:throw e.prev=15,e.t0=e.catch(1),Error(e.t0.message);case 18:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}(),W=function(){return function(){var e=Object(q.a)(R.a.mark(function e(t){var n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:n=e.sent,t({type:g,payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(q.a)(R.a.mark(function t(n){var r;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:r=t.sent,n({type:O,users:r}),e&&e();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(q.a)(R.a.mark(function t(n){var r;return R.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(100,e);case 2:r=t.sent,n({type:j,users:Object(w.a)(r)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},N=function(e){var t=e.q,n=e.filters,r=e.fields;return function(){var e=Object(q.a)(R.a.mark(function e(a){var c;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K({q:t,filters:n,fields:r});case 2:c=e.sent,a({type:S,search:Object(w.a)(c)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},J=n(79),M=n.n(J),Y=function(e){var t=e.size,n=void 0===t?40:t,r=e.fetchedUser,a=r.id,c=r.photo_50,s=r.photo_100,o=r.photo_200,i=r.photo_200_orig,u=r.city,f=void 0===u?{title:""}:u,d=r.first_name,p=r.last_name,h=r.bdate,m=i||o||s||c;return l.a.createElement(A.Cell,{key:a,before:l.a.createElement(A.Avatar,{size:n,src:m,onClick:function(){return window.open("https://vk.com/id".concat(a))}}),size:"l",description:f.title,bottomContent:h&&"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ".concat(h)},"".concat(d," ").concat(p))},Q=Object(h.b)(function(e){return{fetchedUser:(0,r.getUser)(e)}},null)(function(e){var t=e.id,n=e.go,r=e.fetchedUser,a=e.dispatch,c=Object(u.useState)(!1),o=Object(U.a)(c,2),i=o[0],f=o[1];!function(e){Object(u.useEffect)(function(){e((0,s.fetchedUser)())},[])}(a);return l.a.createElement(A.Panel,{id:t},l.a.createElement(A.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(A.PullToRefresh,{onRefresh:function(){f(!0),setTimeout(function(){f(!1)},2e3)},isFetching:i},l.a.createElement(A.Group,{title:""},l.a.createElement(Y,{size:48,fetchedUser:r,go:n})),l.a.createElement(A.Group,{title:""},l.a.createElement(A.List,null,l.a.createElement(A.Cell,{onClick:n,"data-to":"friends",asideContent:l.a.createElement(M.a,null)},"\u0414\u0440\u0443\u0437\u044c\u044f"),l.a.createElement(A.Cell,{onClick:n,"data-to":"search",asideContent:l.a.createElement(M.a,null)},"\u041f\u043e\u0438\u0441\u043a")))))}),X=n(80),Z=n.n(X),$=n(65),ee=n.n($),te=Object(h.b)(function(e){return{users:(0,a.getFriends)(e)}},null)(function(e){var t=100,n=e.id,r=e.go,a=e.users,c=e.dispatch,s=Object(u.useState)(!1),i=Object(U.a)(s,2),f=i[0],d=i[1],p=Object(A.platform)(),h=o.updateFriends,m=o.fetchedFriends;Object(u.useEffect)(function(){window.addEventListener("scroll",g),c(m(v))},[]);var v=function(){return d(!1)},g=function(e){var n=e.target.documentElement.scrollHeight,r=e.target.documentElement.clientHeight;window.pageYOffset+5>=n-r&&(c(h(t)),t+=100)};return l.a.createElement(A.Panel,{id:n},l.a.createElement(A.PanelHeader,{left:l.a.createElement(A.HeaderButton,{onClick:r,"data-to":"home"},p===A.IOS?l.a.createElement(Z.a,null):l.a.createElement(ee.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),l.a.createElement(A.PullToRefresh,{onScroll:g,onRefresh:function(){d(!0),c(m(v))},isFetching:f},!a.length&&!f&&l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(A.Spinner,{size:"regular",style:{marginTop:20}})),!!a.length&&l.a.createElement(A.Group,{title:""},a.map(function(e){return l.a.createElement(A.List,{key:e.id},l.a.createElement(Y,{size:58,fetchedUser:e,go:r}),l.a.createElement("span",null))})),l.a.createElement(A.Footer,null,a.length," \u0434\u0440\u0443\u0437\u0435\u0439")))}),ne=Object(h.b)(function(e){return{fetchedSearch:(0,c.getSearch)(e)}},null)(function(e){var t=e.id,n=e.go,r=e.dispatch,a=e.fetchedSearch,c=Object(A.platform)(),s=Object(u.useState)(!1),o=Object(U.a)(s,2),f=o[0],d=o[1],p=Object(u.useState)(""),h=Object(U.a)(p,2),m=h[0],v=h[1],g=i.fetchenSearch;return l.a.createElement(A.Panel,{id:t},l.a.createElement(A.PanelHeader,{left:l.a.createElement(A.HeaderButton,{onClick:n,"data-to":"home"},c===A.IOS?l.a.createElement(Z.a,null):l.a.createElement(ee.a,null))},"\u041f\u043e\u0438\u0441\u043a"),l.a.createElement(A.Search,{value:m,onChange:function(e){v(e),r(g({q:e,filters:"friends",fields:"crop_photo"}))}}),l.a.createElement(A.PullToRefresh,{onRefresh:function(){d(!0),setTimeout(function(){r(g({search:m,filters:"friends",fields:"crop_photo"})),d(!1)},2e3)},isFetching:f},!a.length&&!f&&l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(A.Spinner,{size:"regular",style:{marginTop:20}})),a.length>0&&l.a.createElement(A.List,null,a.map(function(e){return l.a.createElement(l.a.Fragment,null,e.profile.id&&l.a.createElement(A.Cell,{key:e.profile.id,description:e.description,onClick:function(){return window.open("https://vk.com/id".concat(e.profile.id))}},"".concat(e.profile.first_name," ").concat(e.profile.last_name)))})),l.a.createElement(A.Footer,null,a.length>0?"\u043d\u0430\u0439\u0434\u0435\u043d\u043e ".concat(a.length):"\u043f\u0443\u0441\u0442\u043e")))}),re=function(e){var t=Object(u.useState)("home"),n=Object(U.a)(t,2),r=n[0],a=n[1],c=function(e){return a(e.currentTarget.dataset.to)};return l.a.createElement(A.View,{activePanel:r},l.a.createElement(Q,{id:"home",go:c}),l.a.createElement(te,{id:"friends",go:c}),l.a.createElement(ne,{id:"search",go:c}))},ae=Object(p.d)(T,Object(p.a)(m.a));H.a.send("VKWebAppInit",{}),d.a.render(l.a.createElement(function(){return l.a.createElement(h.a,{store:ae},l.a.createElement(re,null))},null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.891293d3.chunk.js.map