(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){e.exports=n(361)},361:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",function(){return g}),n.d(r,"getUser",function(){return b});var a={};n.r(a),n.d(a,"default",function(){return j}),n.d(a,"getFriends",function(){return k}),n.d(a,"getFriendsInInstagram",function(){return F}),n.d(a,"getBannedFriends",function(){return y});var c={};n.r(c),n.d(c,"fetchedUser",function(){return V});var s={};n.r(s),n.d(s,"fetchedFriends",function(){return K}),n.d(s,"updateFriends",function(){return W});n(154),n(156);var o=n(0),i=n.n(o),u=n(64),l=n.n(u),d=n(51),f=n(32),p=n(151),m=n(52),h="SET_USER",v={photo_200:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",first_name:"\u0412\u0430\u0441\u044f",last_name:"\u0412\u0430\u0441\u0435\u0447\u043a\u0438\u043d",city:{title:"New York"}};function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case h:return Object(m.a)({},e,t.payload);default:return e}}var b=function(e){return e.user},E=n(18),_="FETCHED_FRIENDS",O="UPDATE_FRIENDS",w={users:[],instagramUsers:[],bannedUsers:[]};function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case _:return Object(m.a)({},e,{users:Object(E.a)(t.users),instagramUsers:Object(E.a)(t.users.filter(function(e){return e.instagram})),bannedUsers:Object(E.a)(t.users.filter(function(e){return"deleted"===e.deactivated||"banned"===e.deactivated}))});case O:return Object(m.a)({},e,{users:[].concat(Object(E.a)(e.users),Object(E.a)(t.users)),instagramUsers:[].concat(Object(E.a)(e.instagramUsers),Object(E.a)(t.users.filter(function(e){return e.instagram}))),bannedUsers:[].concat(Object(E.a)(e.instagramUsers),Object(E.a)(t.users.filter(function(e){return"deleted"===e.deactivated||"banned"===e.deactivated})))});default:return e}}var k=function(e){return e.friends.users},F=function(e){return e.friends.instagramUsers},y=function(e){return e.friends.bannedUsers},C="FETCHED_SEARCH",x={q:[]};var S=Object(d.c)({user:g,friends:j,search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case C:return Object(m.a)({},e,{q:t.search.filter(function(e){return"profile"===e.type})});default:return e}}}),T=n(53),P=n(37),U=n(2),I=(n(358),n(10)),L=n.n(I),A=n(21),N="5.95",R={access_token:"",dateTime:"",scope:""},z=function(){R.access_token="",R.dateTime="",R.scope=""},D=function(){var e=Object(A.a)(L.a.mark(function e(t){var n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.send("VKWebAppGetAuthToken",{app_id:7080438,scope:t});case 3:return n=e.sent,e.next=6,n.data.access_token;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(A.a)(L.a.mark(function e(t){var n,r,a,c,s,o;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1e6,n=Date.now(),r=R.dateTime||Date.now()-1e6+1,a=n-r,c=R.scope!==t,s=!R.oneFetched,!(!localStorage.access_token&&a>1e6||c)||!s){e.next=14;break}return e.next=10,D(t);case 10:o=e.sent,R.access_token=o,R.dateTime=n,R.scope=t;case 14:return e.next=16,R.access_token;case 16:return e.abrupt("return",e.sent);case 19:throw e.prev=19,e.t0=e.catch(0),z(),Error(e.t0.message);case 23:case"end":return e.stop()}},e,null,[[0,19]])}));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(A.a)(L.a.mark(function e(){var t;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.send("VKWebAppGetUserInfo",{});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(A.a)(L.a.mark(function e(){var t,n,r,a,c,s=arguments;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:100,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,e.next=5,H("friends, groups");case 5:return r=e.sent,"friends.get","connections,nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",a={access_token:r,v:N,fields:"connections,nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",count:t,offset:n},e.next=11,T.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:a});case 11:return c=e.sent,e.next=14,c.data.response.items;case 14:return e.abrupt("return",e.sent);case 17:throw e.prev=17,e.t0=e.catch(2),z(),Error(e.t0.message);case 21:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),V=function(){return function(){var e=Object(A.a)(L.a.mark(function e(t){var n;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:n=e.sent,t({type:h,payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},K=function(e){return function(){var t=Object(A.a)(L.a.mark(function t(n){var r;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G();case 2:r=t.sent,n({type:_,users:r}),e&&e();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(A.a)(L.a.mark(function t(n){var r;return L.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(100,e);case 2:r=t.sent,n({type:O,users:Object(E.a)(r)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},q=n(65),J=n.n(q),Y=function(e){var t=e.size,n=e.id,r=e.photo_50,a=e.photo_100,c=e.photo_200,s=e.photo_200_orig,o=e.city,u=e.country,l=e.first_name,d=e.last_name,f=(e.bdate,e.description),p=e.instagram,m=function(e){var t=e.id,n=e.type,r=e.instagram;switch(n){case"vk":return"https://vk.com/id".concat(t);case"instagram":return"https://www.instagram.com/".concat(r);default:return"https://vk.com/id".concat(t)}}({id:n,type:e.connections,instagram:p});return i.a.createElement(U.Cell,{key:n,before:i.a.createElement(U.Avatar,{size:t,src:s||c||a||r}),size:"l",description:f||"".concat(o.title," ").concat(u.title),onClick:function(){return function(e){window.location.href=e}(m)}},"".concat(l," ").concat(d))};Y.defaultProps={size:48,city:{title:""},country:{title:""},connections:"vk"};var M=Y,Q=Object(f.b)(function(e){return{fetchedUser:r.getUser(e)}},null)(function(e){var t=e.id,n=e.go,r=e.fetchedUser,a=e.dispatch,s=Object(o.useState)(!1),u=Object(P.a)(s,2),l=u[0],d=u[1];!function(e){Object(o.useEffect)(function(){e((0,c.fetchedUser)())},[])}(a);return i.a.createElement(U.Panel,{id:t},i.a.createElement(U.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),i.a.createElement(U.PullToRefresh,{onRefresh:function(){d(!0),setTimeout(function(){d(!1)},2e3)},isFetching:l},i.a.createElement(U.Group,{title:""},i.a.createElement(M,Object.assign({size:36},r,{go:n}))),i.a.createElement(U.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f"},i.a.createElement(U.List,null,i.a.createElement(U.Cell,{onClick:n,"data-to":"friends",asideContent:i.a.createElement(J.a,null)},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0434\u0440\u0443\u0437\u044c\u044f\u043c"),i.a.createElement(U.Cell,{onClick:n,"data-to":"friendsInInstagram",asideContent:i.a.createElement(J.a,null)},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u043c\u0435"),i.a.createElement(U.Cell,{onClick:n,"data-to":"deletedAndBanned",asideContent:i.a.createElement(J.a,null)},"\u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u0435 / \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435")))))}),X=function(e){var t=e.handleScroll,n=e.handleRefresh,r=e.isFetching,a=e.list,c=(e.component,e.footerNameCount),s=e.groupTitle,u=e.children;return i.a.createElement(U.PullToRefresh,{onScroll:t,onRefresh:n,isFetching:r},!a.length&&!r&&i.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},i.a.createElement(U.Spinner,{size:"regular",style:{marginTop:20}})),a.length>0&&i.a.createElement(U.Group,{title:s},a.map(function(e,t){return i.a.createElement(U.List,{key:e.id||t},Object(o.cloneElement)(u,e),i.a.createElement("span",null))})),i.a.createElement(U.Footer,null,a.length," ",c))};X.defaultProps={handleScroll:function(){}};var Z=X,$=n(152),ee=n.n($),te=n(111),ne=n.n(te),re=Object(U.platform)(),ae=function(e){var t=e.handelClick,n=e.dataTo,r=e.title;return i.a.createElement(U.PanelHeader,{left:i.a.createElement(U.HeaderButton,{onClick:t,"data-to":n},re===U.IOS?i.a.createElement(ee.a,null):i.a.createElement(ne.a,null))},r)},ce=function(e){var t=e.go,n=e.usersList,r=e.handleScroll,a=e.handleFetched,c=e.searchFilter,s=e.isSearch,u=e.headerPanelTitle,l=e.footerNameCount,d=Object(o.useState)(!1),f=Object(P.a)(d,2),p=f[0],m=f[1],h=Object(o.useState)(""),v=Object(P.a)(h,2),g=v[0],b=v[1],E=Object(o.useState)(""),_=Object(P.a)(E,2),O=_[0],w=_[1],j=Object(o.useState)(100),k=Object(P.a)(j,2),F=k[0],y=k[1];Object(o.useEffect)(function(){window.addEventListener("scroll",x),a(C)},[]);var C=function(){return m(!1)},x=function(e){var t=e.target.documentElement.scrollHeight,n=e.target.documentElement.clientHeight;window.pageYOffset+5>=t-n&&(r(F),y(F+100))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(ae,{title:u,handelClick:t,dataTo:"home"}),n.length>0&&s&&i.a.createElement(U.Search,{value:g,onChange:function(e){var t=c(e);b(e),w(t)},onClose:function(){b(""),w("")}}),i.a.createElement(Z,{handleScroll:x,handleRefresh:function(){m(!0),a(C)},isFetching:p,list:O.length?O:n,footerNameCount:l},i.a.createElement(M,{size:36,go:t})))};ce.defaultProps={isSearch:!1,searchFilter:function(){},headerPanelTitle:"",footerNameCount:""};var se=ce,oe=Object(f.b)(function(e){return{users:a.getFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=e.dispatch,c=s.updateFriends,o=s.fetchedFriends;return i.a.createElement(U.Panel,{id:t},i.a.createElement(se,{go:n,usersList:r,handleScroll:function(e){a(c(e))},handleFetched:function(e){a(o(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439"}))}),ie=Object(f.b)(function(e){return{users:a.getFriendsInInstagram(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=e.dispatch,c=s.updateFriends,o=s.fetchedFriends;return i.a.createElement(U.Panel,{id:t},i.a.createElement(se,{go:n,usersList:r,handleScroll:function(e){a(c(e))},handleFetched:function(e){a(o(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439"}))}),ue=Object(f.b)(function(e){return{users:a.getBannedFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=e.dispatch,c=s.updateFriends,o=s.fetchedFriends;return i.a.createElement(U.Panel,{id:t},i.a.createElement(se,{go:n,usersList:r,handleScroll:function(e){a(c(e))},handleFetched:function(e){a(o(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435/\u0417\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0435",footerNameCount:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}))}),le=function(e){var t=Object(o.useState)("home"),n=Object(P.a)(t,2),r=n[0],a=n[1],c=function(e){return a(e.currentTarget.dataset.to)};return i.a.createElement(U.View,{activePanel:r},i.a.createElement(Q,{id:"home",go:c}),i.a.createElement(oe,{id:"friends",go:c}),i.a.createElement(ie,{id:"friendsInInstagram",go:c}),i.a.createElement(ue,{id:"deletedAndBanned",go:c}))},de=Object(d.d)(S,Object(d.a)(p.a));T.a.send("VKWebAppInit",{}),l.a.render(i.a.createElement(function(){return i.a.createElement(f.a,{store:de},i.a.createElement(le,null))},null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.b4ef279b.chunk.js.map