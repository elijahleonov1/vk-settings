(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){e.exports=n(361)},361:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",function(){return b}),n.d(r,"getUser",function(){return _});var a={};n.r(a),n.d(a,"default",function(){return y}),n.d(a,"getFriends",function(){return x}),n.d(a,"getFriendsInInstagram",function(){return C});var c={};n.r(c),n.d(c,"default",function(){return T}),n.d(c,"getSearch",function(){return I});var s={};n.r(s),n.d(s,"fetchedUser",function(){return B});var o={};n.r(o),n.d(o,"fetchedFriends",function(){return J}),n.d(o,"updateFriends",function(){return M});var i={};n.r(i),n.d(i,"fetchenSearch",function(){return Q});n(154),n(156);var u=n(0),l=n.n(u),f=n(64),d=n.n(f),p=n(52),h=n(32),m=n(151),v=n(53),g="SET_USER",E={photo_200:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",first_name:"\u0412\u0430\u0441\u044f",last_name:"\u0412\u0430\u0441\u0435\u0447\u043a\u0438\u043d",city:{title:"New York"}};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(v.a)({},e,t.payload);default:return e}}var _=function(e){return e.user},w=n(39),O="FETCHED_FRIENDS",j="UPDATE_FRIENDS",k={users:[]};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object(v.a)({},e,{users:Object(w.a)(t.users)});case j:return Object(v.a)({},e,{users:[].concat(Object(w.a)(e.users),Object(w.a)(t.users))});default:return e}}var x=function(e){return e.friends.users},C=function(e){e.friends.users;return console.log(e.friends.users),e.friends.users.filter(function(e){return e.connections})},S="FETCHED_SEARCH",F={q:[]};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(v.a)({},e,{q:t.search.filter(function(e){return"profile"===e.type})});default:return e}}var I=function(e){return e.search.q},P=Object(p.c)({user:b,friends:y,search:T}),H=n(41),R=n(25),A=n(2),q=(n(358),n(8)),z=n.n(q),U=n(18),D="5.95",N={access_token:"",dateTime:"",scope:""},V=function(){N.access_token="",N.dateTime="",N.scope=""},G=function(){var e=Object(U.a)(z.a.mark(function e(t){var n;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.send("VKWebAppGetAuthToken",{app_id:7080438,scope:t});case 3:return n=e.sent,e.next=6,n.data.access_token;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(U.a)(z.a.mark(function e(t){var n,r,a,c,s,o;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1e6,n=Date.now(),r=N.dateTime||Date.now()-1e6+1,a=n-r,c=N.scope!==t,s=!N.oneFetched,!(!localStorage.access_token&&a>1e6||c)||!s){e.next=14;break}return e.next=10,G(t);case 10:o=e.sent,N.access_token=o,N.dateTime=n,N.scope=t;case 14:return e.next=16,N.access_token;case 16:return e.abrupt("return",e.sent);case 19:throw e.prev=19,e.t0=e.catch(0),V(),Error(e.t0.message);case 23:case"end":return e.stop()}},e,null,[[0,19]])}));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(U.a)(z.a.mark(function e(){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.send("VKWebAppGetUserInfo",{});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(U.a)(z.a.mark(function e(){var t,n,r,a,c,s=arguments;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:100,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,e.next=5,K("friends, groups");case 5:return r=e.sent,"friends.get","nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",a={access_token:r,v:D,fields:"nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",count:t,offset:n},e.next=11,H.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:a});case 11:return c=e.sent,e.next=14,c.data.response.items;case 14:return e.abrupt("return",e.sent);case 17:throw e.prev=17,e.t0=e.catch(2),V(),Error(e.t0.message);case 21:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(U.a)(z.a.mark(function e(t){var n,r,a,c,s,o,i,u,l,f,d,p,h,m;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.q,r=void 0===n?"":n,a=t.offset,c=void 0===a?0:a,s=t.limit,o=void 0===s?10:s,i=t.filters,u=void 0===i?"":i,l=t.fields,void 0===l?"":l,f=t.search_global,d=void 0===f?1:f,e.prev=1,e.next=4,K("friends, groups");case 4:return p=e.sent,"search.getHints",h={access_token:p,v:D,q:r,offset:c,limit:o,filters:u,search_global:d},e.next=9,H.a.send("VKWebAppCallAPIMethod",{method:"search.getHints",params:h});case 9:return m=e.sent,e.next=12,m.data.response.items;case 12:return e.abrupt("return",e.sent);case 15:throw e.prev=15,e.t0=e.catch(1),V(),Error(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}(),B=function(){return function(){var e=Object(U.a)(z.a.mark(function e(t){var n;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W();case 2:n=e.sent,t({type:g,payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},J=function(e){return function(){var t=Object(U.a)(z.a.mark(function t(n){var r;return z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L();case 2:r=t.sent,n({type:O,users:r}),e&&e();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(U.a)(z.a.mark(function t(n){var r;return z.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(100,e);case 2:r=t.sent,n({type:j,users:Object(w.a)(r)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Q=function(e){var t=e.q,n=e.filters,r=e.fields;return function(){var e=Object(U.a)(z.a.mark(function e(a){var c;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y({q:t,filters:n,fields:r});case 2:c=e.sent,a({type:S,search:Object(w.a)(c)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},X=n(65),Z=n.n(X),$=function(e){var t=e.size,n=void 0===t?56:t,r=e.id,a=e.photo_50,c=e.photo_100,s=e.photo_200,o=e.photo_200_orig,i=e.city,u=void 0===i?{title:""}:i,f=e.first_name,d=e.last_name,p=e.bdate;return l.a.createElement(A.Cell,{key:r,before:l.a.createElement(A.Avatar,{size:n,src:o||s||c||a,onClick:function(){return window.location.assign("https://vk.com/id".concat(r))}}),size:"l",description:u.title,bottomContent:p&&"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ".concat(p)},"".concat(f," ").concat(d))},ee=Object(h.b)(function(e){return{fetchedUser:r.getUser(e)}},null)(function(e){var t=e.id,n=e.go,r=e.fetchedUser,a=e.dispatch,c=Object(u.useState)(!1),o=Object(R.a)(c,2),i=o[0],f=o[1];!function(e){Object(u.useEffect)(function(){e((0,s.fetchedUser)())},[])}(a);return l.a.createElement(A.Panel,{id:t},l.a.createElement(A.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(A.PullToRefresh,{onRefresh:function(){f(!0),setTimeout(function(){f(!1)},2e3)},isFetching:i},l.a.createElement(A.Group,{title:""},l.a.createElement($,Object.assign({size:48},r,{go:n}))),l.a.createElement(A.Group,{title:""},l.a.createElement(A.List,null,l.a.createElement(A.Cell,{onClick:n,"data-to":"friends",asideContent:l.a.createElement(Z.a,null)},"\u0414\u0440\u0443\u0437\u044c\u044f"),l.a.createElement(A.Cell,{onClick:n,"data-to":"friendsInInstagram",asideContent:l.a.createElement(Z.a,null)},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u043c\u0435"),l.a.createElement(A.Cell,{onClick:n,"data-to":"search",asideContent:l.a.createElement(Z.a,null)},"\u041f\u043e\u0438\u0441\u043a")))))}),te=function(e){var t=e.handleScroll,n=e.handleRefresh,r=e.isFetching,a=e.list,c=(e.component,e.footerNameCount),s=e.groupTitle,o=e.children;return l.a.createElement(A.PullToRefresh,{onScroll:t,onRefresh:n,isFetching:r},!a.length&&!r&&l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(A.Spinner,{size:"regular",style:{marginTop:20}})),a.length>0&&l.a.createElement(A.Group,{title:s},a.map(function(e,t){return l.a.createElement(A.List,{key:e.id||t},Object(u.cloneElement)(o,e),l.a.createElement("span",null))})),l.a.createElement(A.Footer,null,a.length," ",c))};te.defaultProps={handleScroll:function(){}};var ne=te,re=n(152),ae=n.n(re),ce=n(111),se=n.n(ce),oe=Object(A.platform)(),ie=function(e){var t=e.handelClick,n=e.dataTo,r=e.title;return l.a.createElement(A.PanelHeader,{left:l.a.createElement(A.HeaderButton,{onClick:t,"data-to":n},oe===A.IOS?l.a.createElement(ae.a,null):l.a.createElement(se.a,null))},r)},ue=Object(h.b)(function(e){return{users:a.getFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=e.dispatch,c=100,s=Object(u.useState)(!1),i=Object(R.a)(s,2),f=i[0],d=i[1],p=o.updateFriends,h=o.fetchedFriends;Object(u.useEffect)(function(){window.addEventListener("scroll",v),a(h(m))},[]);var m=function(){return d(!1)},v=function(e){var t=e.target.documentElement.scrollHeight,n=e.target.documentElement.clientHeight;window.pageYOffset+5>=t-n&&(a(p(c)),c+=100)};return l.a.createElement(A.Panel,{id:t},l.a.createElement(ie,{title:"\u0414\u0440\u0443\u0437\u044c\u044f",handelClick:n,dataTo:"home"}),l.a.createElement(ie,{title:"\u0414\u0440\u0443\u0437\u044c\u044f",handelClick:n,dataTo:"home"}),l.a.createElement(ne,{handleScroll:v,handleRefresh:function(){d(!0),a(h(m))},isFetching:f,list:r,footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439"},l.a.createElement($,{size:56,go:n})))}),le=Object(h.b)(function(e){return{users:a.getFriendsInInstagram(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=e.dispatch,c=100,s=Object(u.useState)(!1),i=Object(R.a)(s,2),f=i[0],d=i[1],p=o.updateFriends,h=o.fetchedFriends;Object(u.useEffect)(function(){window.addEventListener("scroll",v),a(h(m))},[]);var m=function(){return d(!1)},v=function(e){var t=e.target.documentElement.scrollHeight,n=e.target.documentElement.clientHeight;window.pageYOffset+5>=t-n&&(a(p(c)),c+=100)};return l.a.createElement(A.Panel,{id:t},l.a.createElement(ie,{title:"\u0414\u0440\u0443\u0437\u044c\u044f",handelClick:n,dataTo:"home"}),l.a.createElement(ne,{handleScroll:v,handleRefresh:function(){d(!0),a(h(m))},isFetching:f,list:r,footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439"},l.a.createElement($,{size:56,go:n})))}),fe=function(e){var t=e.profile,n=t.first_name,r=t.last_name,a=t.id,c=e.description;return l.a.createElement(A.Cell,{key:a,description:c,onClick:function(){return window.location.assign("https://vk.com/id".concat(a))}},"".concat(n," ").concat(r))},de=Object(h.b)(function(e){return{fetchedSearch:c.getSearch(e)}},null)(function(e){var t=e.id,n=e.go,r=e.dispatch,a=e.fetchedSearch,c=Object(u.useState)(!1),s=Object(R.a)(c,2),o=s[0],f=s[1],d=Object(u.useState)(""),p=Object(R.a)(d,2),h=p[0],m=p[1],v=i.fetchenSearch;return l.a.createElement(A.Panel,{id:t},l.a.createElement(ie,{handelClick:n,dataTo:"home",title:"\u041f\u043e\u0438\u0441\u043a"}),l.a.createElement(A.Search,{value:h,onChange:function(e){m(e),r(v({q:e,filters:"friends",fields:"crop_photo"}))}}),l.a.createElement(ne,{handleRefresh:function(){f(!0),setTimeout(function(){r(v({search:h,filters:"friends",fields:"crop_photo"})),f(!1)},2e3)},isFetching:o,list:a,footerNameCount:"\u043d\u0430\u0439\u0434\u0435\u043d\u043e"},l.a.createElement(fe,null)))}),pe=function(e){var t=Object(u.useState)("home"),n=Object(R.a)(t,2),r=n[0],a=n[1],c=function(e){return a(e.currentTarget.dataset.to)};return l.a.createElement(A.View,{activePanel:r},l.a.createElement(ee,{id:"home",go:c}),l.a.createElement(ue,{id:"friends",go:c}),l.a.createElement(le,{id:"friendsInInstagram",go:c}),l.a.createElement(de,{id:"search",go:c}))},he=Object(p.d)(P,Object(p.a)(m.a));H.a.send("VKWebAppInit",{}),d.a.render(l.a.createElement(function(){return l.a.createElement(h.a,{store:he},l.a.createElement(pe,null))},null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.8e75f71c.chunk.js.map