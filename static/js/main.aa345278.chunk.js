(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,n){e.exports=n(361)},361:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",function(){return g}),n.d(r,"getUser",function(){return O});var a={};n.r(a),n.d(a,"default",function(){return x}),n.d(a,"getFriends",function(){return S});var c={};n.r(c),n.d(c,"fetchedUser",function(){return C});var o={};n.r(o),n.d(o,"fetchedFriends",function(){return N}),n.d(o,"updateFriends",function(){return R});var s=n(12),u=n.n(s),i=n(30),l=(n(155),n(157),n(1)),d=n.n(l),f=n(62),p=n.n(f),m=n(37),h=n(55),_=n(150),v=n(64),E="SET_USER",b={photo_200:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",first_name:"\u0412\u0430\u0441\u044f",last_name:"\u0412\u0430\u0441\u0435\u0447\u043a\u0438\u043d",city:{title:"New York"}};function g(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case E:return Object(v.a)({},e,t.payload);default:return e}}var O=function(e){return e.user},w=n(57),j="FETCHED_FRIENDS",k="UPDATE_FRIENDS",y={users:[]};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case j:return Object(v.a)({},e,{users:Object(w.a)(t.users)});case k:return Object(v.a)({},e,{users:[].concat(Object(w.a)(e.users),Object(w.a)(t.users))});default:return e}}var S=function(e){return e.friends.users},U=Object(m.c)({user:g,friends:x}),I=n(56),F=n(63),T=n(9),A=(n(360),localStorage.getItem("access_token")),D=function(){var e=Object(i.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.send("VKWebAppGetUserInfo",{});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(u.a.mark(function e(){var t,n,r,a,c=arguments;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:100,n=c.length>1&&void 0!==c[1]?c[1]:0,e.prev=2,"friends.get","nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",r={access_token:A,v:"5.95",fields:"nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",count:t,offset:n},e.next=8,I.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:r});case 8:return a=e.sent,e.next=11,a.data.response.items;case 11:return e.abrupt("return",e.sent);case 14:throw e.prev=14,e.t0=e.catch(2),Error(e.t0);case 17:case"end":return e.stop()}},e,null,[[2,14]])}));return function(){return e.apply(this,arguments)}}(),C=function(){return function(){var e=Object(i.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:n=e.sent,t({type:E,payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(i.a)(u.a.mark(function t(n){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:r=t.sent,n({type:j,users:r}),e&&e();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(i.a)(u.a.mark(function t(n){var r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(100,e);case 2:r=t.sent,n({type:k,users:Object(w.a)(r)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},V=function(e){var t=e.size,n=void 0===t?40:t,r=e.fetchedUser,a=r.id,c=r.photo_50,o=r.photo_100,s=r.photo_200,u=r.photo_200_orig,i=r.city,l=void 0===i?{title:""}:i,f=r.first_name,p=r.last_name,m=r.bdate,h=u||s||o||c;return d.a.createElement(T.Cell,{key:a,before:d.a.createElement(T.Avatar,{size:n,src:h}),size:"l",description:l.title,bottomContent:m&&"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ".concat(m)},"".concat(f," ").concat(p))},z=Object(h.b)(function(e){return{fetchedUser:(0,r.getUser)(e)}},null)(function(e){var t=e.id,n=e.go,r=e.fetchedUser;return function(e){Object(l.useEffect)(function(){e((0,c.fetchedUser)())},[])}(e.dispatch),d.a.createElement(T.Panel,{id:t},d.a.createElement(T.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),d.a.createElement(T.Group,{title:""},d.a.createElement(V,{size:48,fetchedUser:r,go:n})),d.a.createElement(T.Group,{title:"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u044b"},d.a.createElement(T.List,null,d.a.createElement(T.Cell,{expandable:!0,onClick:n,"data-to":"friends"},"\u0414\u0440\u0443\u0437\u044c\u044f"))))}),H=n(151),G=n.n(H),L=n(110),K=n.n(L),W=Object(h.b)(function(e){return{users:(0,a.getFriends)(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=e.dispatch,c=Object(l.useState)(!1),s=Object(F.a)(c,2),u=s[0],i=s[1],f=Object(l.useState)(100),p=Object(F.a)(f,2),m=p[0],h=p[1],_=Object(T.platform)(),v=o.updateFriends,E=o.fetchedFriends;Object(l.useEffect)(function(){window.addEventListener("scroll",g),a(E(b))},[]);var b=function(){return i(!1)},g=function(e){var t=0,n=document.documentElement.scrollHeight,r=document.documentElement.clientHeight;window.scrollY>=n-r&&(h(t+=m),a(v(m)))};return d.a.createElement(T.Panel,{id:t},d.a.createElement(T.PanelHeader,{left:d.a.createElement(T.HeaderButton,{onClick:n,"data-to":"home"},_===T.IOS?d.a.createElement(G.a,null):d.a.createElement(K.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),d.a.createElement(T.PullToRefresh,{onScroll:g,onRefresh:function(){i(!0),a(E(b))},isFetching:u},!!r.length&&d.a.createElement(T.Group,{title:""},r.map(function(e){return d.a.createElement(T.List,{key:e.id},d.a.createElement(V,{fetchedUser:e,go:n}),d.a.createElement("span",null))})),d.a.createElement(T.Footer,null,r.length," \u0434\u0440\u0443\u0437\u0435\u0439")))}),X=function(e){var t=Object(l.useState)("home"),n=Object(F.a)(t,2),r=n[0],a=n[1],c=function(e){return a(e.currentTarget.dataset.to)};return d.a.createElement(T.View,{activePanel:r},d.a.createElement(z,{id:"home",go:c}),d.a.createElement(W,{id:"friends",go:c}))},B=Object(m.e)(U,Object(m.d)(Object(m.a)(_.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));I.a.send("VKWebAppInit",{}),function(){var e=Object(i.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("access_token")){e.next=8;break}return e.next=3,I.a.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends"});case 3:return t=e.sent,e.next=6,t.data.access_token;case 6:n=e.sent,localStorage.setItem("access_token",n);case 8:console.log("access_token",localStorage.getItem("access_token"));case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()(),p.a.render(d.a.createElement(function(){return d.a.createElement(h.a,{store:B},d.a.createElement(X,null))},null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.aa345278.chunk.js.map