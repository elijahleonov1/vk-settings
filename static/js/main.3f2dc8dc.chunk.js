(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){e.exports=n(361)},361:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",function(){return E}),n.d(r,"getUser",function(){return _});var a={};n.r(a),n.d(a,"default",function(){return y}),n.d(a,"getFriends",function(){return x});var c={};n.r(c),n.d(c,"default",function(){return T}),n.d(c,"getSearch",function(){return F});var o={};n.r(o),n.d(o,"fetchedUser",function(){return B});var s={};n.r(s),n.d(s,"fetchedFriends",function(){return J}),n.d(s,"updateFriends",function(){return M});var i={};n.r(i),n.d(i,"fetchenSearch",function(){return Y});n(154),n(156);var u=n(0),l=n.n(u),f=n(64),d=n.n(f),p=n(51),h=n(38),m=n(151),v=n(52),g="SET_USER",b={photo_200:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",first_name:"\u0412\u0430\u0441\u044f",last_name:"\u0412\u0430\u0441\u0435\u0447\u043a\u0438\u043d",city:{title:"New York"}};function E(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(v.a)({},e,t.payload);default:return e}}var _=function(e){return e.user},w=n(39),O="FETCHED_FRIENDS",j="UPDATE_FRIENDS",k={users:[]};function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case O:return Object(v.a)({},e,{users:Object(w.a)(t.users)});case j:return Object(v.a)({},e,{users:[].concat(Object(w.a)(e.users),Object(w.a)(t.users))});default:return e}}var x=function(e){return e.friends.users},C="FETCHED_SEARCH",S={q:[]};function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object(v.a)({},e,{q:t.search.filter(function(e){return"profile"===e.type})});default:return e}}var F=function(e){return e.search.q},P=Object(p.c)({user:E,friends:y,search:T}),A=n(53),R=n(34),H=n(2),q=(n(358),n(10)),I=n.n(q),U=n(20),z="5.95",D={access_token:"",dateTime:"",scope:""},N=function(){D.access_token="",D.dateTime="",D.scope=""},V=function(){var e=Object(U.a)(I.a.mark(function e(t){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.send("VKWebAppGetAuthToken",{app_id:7080438,scope:t});case 3:return n=e.sent,e.next=6,n.data.access_token;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(U.a)(I.a.mark(function e(t){var n,r,a,c,o,s;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1e6,n=Date.now(),r=D.dateTime||Date.now()-1e6+1,a=n-r,c=D.scope!==t,o=!D.oneFetched,console.log("++++++++++"),!(!localStorage.access_token&&a>1e6||c)||!o){e.next=16;break}return console.log("--------------"),e.next=12,V(t);case 12:s=e.sent,D.access_token=s,D.dateTime=n,D.scope=t;case 16:return e.next=18,D.access_token;case 18:return e.abrupt("return",e.sent);case 21:throw e.prev=21,e.t0=e.catch(0),N(),Error(e.t0.message);case 25:case"end":return e.stop()}},e,null,[[0,21]])}));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=Object(U.a)(I.a.mark(function e(){var t;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.send("VKWebAppGetUserInfo",{});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(U.a)(I.a.mark(function e(){var t,n,r,a,c,o=arguments;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:100,n=o.length>1&&void 0!==o[1]?o[1]:0,e.prev=2,e.next=5,G("friends");case 5:return r=e.sent,"friends.get","nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",a={access_token:r,v:z,fields:"nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",count:t,offset:n},e.next=11,A.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:a});case 11:return c=e.sent,e.next=14,c.data.response.items;case 14:return e.abrupt("return",e.sent);case 17:throw e.prev=17,e.t0=e.catch(2),N(),Error(e.t0.message);case 21:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(U.a)(I.a.mark(function e(t){var n,r,a,c,o,s,i,u,l,f,d,p,h,m;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.q,r=void 0===n?"":n,a=t.offset,c=void 0===a?0:a,o=t.limit,s=void 0===o?10:o,i=t.filters,u=void 0===i?"":i,l=t.fields,void 0===l?"":l,f=t.search_global,d=void 0===f?1:f,e.prev=1,e.next=4,G("friends, groups");case 4:return p=e.sent,"search.getHints",h={access_token:p,v:z,q:r,offset:c,limit:s,filters:u,search_global:d},e.next=9,A.a.send("VKWebAppCallAPIMethod",{method:"search.getHints",params:h});case 9:return m=e.sent,e.next=12,m.data.response.items;case 12:return e.abrupt("return",e.sent);case 15:throw e.prev=15,e.t0=e.catch(1),N(),Error(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}(),B=function(){return function(){var e=Object(U.a)(I.a.mark(function e(t){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:n=e.sent,t({type:g,payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},J=function(e){return function(){var t=Object(U.a)(I.a.mark(function t(n){var r;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W();case 2:r=t.sent,n({type:O,users:r}),e&&e();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(U.a)(I.a.mark(function t(n){var r;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W(100,e);case 2:r=t.sent,n({type:j,users:Object(w.a)(r)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},Y=function(e){var t=e.q,n=e.filters,r=e.fields;return function(){var e=Object(U.a)(I.a.mark(function e(a){var c;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({q:t,filters:n,fields:r});case 2:c=e.sent,a({type:C,search:Object(w.a)(c)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},Q=n(78),X=n.n(Q),Z=function(e){var t=e.size,n=void 0===t?56:t,r=e.id,a=e.photo_50,c=e.photo_100,o=e.photo_200,s=e.photo_200_orig,i=e.city,u=void 0===i?{title:""}:i,f=e.first_name,d=e.last_name,p=e.bdate;return l.a.createElement(H.Cell,{key:r,before:l.a.createElement(H.Avatar,{size:n,src:s||o||c||a,onClick:function(){return window.location.assign("https://vk.com/id".concat(r))}}),size:"l",description:u.title,bottomContent:p&&"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ".concat(p)},"".concat(f," ").concat(d))},$=Object(h.b)(function(e){return{fetchedUser:r.getUser(e)}},null)(function(e){var t=e.id,n=e.go,r=e.fetchedUser,a=e.dispatch,c=Object(u.useState)(!1),s=Object(R.a)(c,2),i=s[0],f=s[1];!function(e){Object(u.useEffect)(function(){e((0,o.fetchedUser)())},[])}(a);return l.a.createElement(H.Panel,{id:t},l.a.createElement(H.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(H.PullToRefresh,{onRefresh:function(){f(!0),setTimeout(function(){f(!1)},2e3)},isFetching:i},l.a.createElement(H.Group,{title:""},l.a.createElement(Z,Object.assign({size:48},r,{go:n}))),l.a.createElement(H.Group,{title:""},l.a.createElement(H.List,null,l.a.createElement(H.Cell,{onClick:n,"data-to":"friends",asideContent:l.a.createElement(X.a,null)},"\u0414\u0440\u0443\u0437\u044c\u044f"),l.a.createElement(H.Cell,{onClick:n,"data-to":"search",asideContent:l.a.createElement(X.a,null)},"\u041f\u043e\u0438\u0441\u043a")))))}),ee=function(e){var t=e.handleScroll,n=e.handleRefresh,r=e.isFetching,a=e.list,c=(e.component,e.footerNameCount),o=e.groupTitle,s=e.children;return l.a.createElement(H.PullToRefresh,{onScroll:t,onRefresh:n,isFetching:r},!a.length&&!r&&l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(H.Spinner,{size:"regular",style:{marginTop:20}})),a.length>0&&l.a.createElement(H.Group,{title:o},a.map(function(e,t){return l.a.createElement(H.List,{key:e.id||t},Object(u.cloneElement)(s,e),l.a.createElement("span",null))})),l.a.createElement(H.Footer,null,a.length," ",c))};ee.defaultProps={handleScroll:function(){}};var te=ee,ne=n(152),re=n.n(ne),ae=n(111),ce=n.n(ae),oe=Object(H.platform)(),se=function(e){var t=e.handelClick,n=e.dataTo,r=e.title;return l.a.createElement(H.PanelHeader,{left:l.a.createElement(H.HeaderButton,{onClick:t,"data-to":n},oe===H.IOS?l.a.createElement(re.a,null):l.a.createElement(ce.a,null))},r)},ie=Object(h.b)(function(e){return{users:a.getFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=e.dispatch,c=100,o=Object(u.useState)(!1),i=Object(R.a)(o,2),f=i[0],d=i[1],p=s.updateFriends,h=s.fetchedFriends;Object(u.useEffect)(function(){window.addEventListener("scroll",v),a(h(m))},[]);var m=function(){return d(!1)},v=function(e){var t=e.target.documentElement.scrollHeight,n=e.target.documentElement.clientHeight;window.pageYOffset+5>=t-n&&(a(p(c)),c+=100)};return l.a.createElement(H.Panel,{id:t},l.a.createElement(se,{title:"\u0414\u0440\u0443\u0437\u044c\u044f",handelClick:n,dataTo:"home"}),l.a.createElement(te,{handleScroll:v,handleRefresh:function(){d(!0),a(h(m))},isFetching:f,list:r,footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439"},l.a.createElement(Z,{size:56,go:n})))}),ue=function(e){var t=e.profile,n=t.first_name,r=t.last_name,a=t.id,c=e.description;return l.a.createElement(H.Cell,{key:a,description:c,onClick:function(){return window.location.assign("https://vk.com/id".concat(a))}},"".concat(n," ").concat(r))},le=Object(h.b)(function(e){return{fetchedSearch:c.getSearch(e)}},null)(function(e){var t=e.id,n=e.go,r=e.dispatch,a=e.fetchedSearch,c=Object(u.useState)(!1),o=Object(R.a)(c,2),s=o[0],f=o[1],d=Object(u.useState)(""),p=Object(R.a)(d,2),h=p[0],m=p[1],v=i.fetchenSearch;return l.a.createElement(H.Panel,{id:t},l.a.createElement(se,{handelClick:n,dataTo:"home",title:"\u041f\u043e\u0438\u0441\u043a"}),l.a.createElement(H.Search,{value:h,onChange:function(e){m(e),r(v({q:e,filters:"friends",fields:"crop_photo"}))}}),l.a.createElement(te,{handleRefresh:function(){f(!0),setTimeout(function(){r(v({search:h,filters:"friends",fields:"crop_photo"})),f(!1)},2e3)},isFetching:s,list:a,footerNameCount:"\u043d\u0430\u0439\u0434\u0435\u043d\u043e"},l.a.createElement(ue,null)))}),fe=function(e){var t=Object(u.useState)("home"),n=Object(R.a)(t,2),r=n[0],a=n[1],c=function(e){return a(e.currentTarget.dataset.to)};return l.a.createElement(H.View,{activePanel:r},l.a.createElement($,{id:"home",go:c}),l.a.createElement(ie,{id:"friends",go:c}),l.a.createElement(le,{id:"search",go:c}))},de=Object(p.d)(P,Object(p.a)(m.a));A.a.send("VKWebAppInit",{}),d.a.render(l.a.createElement(function(){return l.a.createElement(h.a,{store:de},l.a.createElement(fe,null))},null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.3f2dc8dc.chunk.js.map