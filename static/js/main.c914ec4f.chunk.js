(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{312:function(e,t,n){e.exports=n(620)},491:function(e,t,n){},492:function(e,t,n){},493:function(e,t,n){},619:function(e){e.exports={}},620:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",function(){return O}),n.d(r,"getUser",function(){return y}),n.d(r,"getUsersProfile",function(){return j});var a={};n.r(a),n.d(a,"default",function(){return x}),n.d(a,"getFriends",function(){return C}),n.d(a,"getFriendsInInstagram",function(){return k}),n.d(a,"getBannedFriends",function(){return P}),n.d(a,"getSortLongTime",function(){return T}),n.d(a,"getSortFriendsFromCity",function(){return A});var c={};n.r(c),n.d(c,"default",function(){return U}),n.d(c,"getStories",function(){return B}),n.d(c,"getProfiles",function(){return z});var s={};n.r(s),n.d(s,"fetchedUser",function(){return te}),n.d(s,"fetchedUsersProfile",function(){return ne});var i={};n.r(i),n.d(i,"fetchedAllFriends",function(){return re}),n.d(i,"fetchedFriends",function(){return ae}),n.d(i,"updateFriends",function(){return ce});var o={};n.r(o),n.d(o,"fetcheStories",function(){return se});n(313),n(315);var u=n(1),l=n.n(u),d=n(68),f=n.n(d),m=n(69),p=n(21),h=n(269),v=n(18),g=n(34),E="SET_USER",b="GET_USERS_PROFILE",_={user:{photo_200:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",first_name:"\u0412\u0430\u0441\u044f",last_name:"\u0412\u0430\u0441\u0435\u0447\u043a\u0438\u043d",city:{title:"New York"}},profile:[]};function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case E:return Object(g.a)({},e,{user:Object(g.a)({},t.payload)});case b:return Object(g.a)({},e,{usersProfile:Object(v.a)(t.payload)});default:return e}}var y=function(e){return e.user.user},j=function(e){return e.user.profile},w="FETCHED_FRIENDS",F="UPDATE_FRIENDS",S={users:[]};function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case w:return Object(g.a)({},e,{offsetFriends:t.offsetFriends,users:Object(v.a)(t.users)});case F:return Object(g.a)({},e,{offsetFriends:t.offsetFriends,users:[].concat(Object(v.a)(e.users),Object(v.a)(t.users))});default:return e}}var C=function(e){return e.friends.users},k=function(e){return e.friends.users.filter(function(e){return e.instagram})},P=function(e){return e.friends.users.filter(function(e){return"deleted"===e.deactivated||"banned"===e.deactivated})},T=function(e){return e.friends.users.sort(function(e,t){return e.last_seen&&t.last_seen&&e.last_seen.time&&t.last_seen.time&&e.last_seen.time-t.last_seen.time})},A=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.values(e).map(function(e){e.value<10?(t.others||(t.others={value:0,items:[],name:""}),t.others.items.push(e),t.others.value+=1,t.others.name="others - ".concat(t.others.value)):(t[e.id]||(t[e.id]={value:0,items:[],name:""}),t[e.id].items.push(e),t[e.id].value+=e.value,t[e.id].name="".concat(e.name," - ").concat(t[e.id].value))}),Object.values(t).sort(function(e,t){return t.value-e.value})}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.map(function(e){e.city&&(t[e.city.id]?(t[e.city.id].value+=1,t[e.city.id].name=e.city.title):t[e.city.id]={id:e.city.id,name:"".concat(e.city.title),value:1})}),t}(e.friends.users))},L="FETCHED_SEARCH",I={q:[]};var N="FETCHED_STORIES",R={items:[],profiles:[]};function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case N:return Object(g.a)({},e,{items:Object(v.a)(t.items),profiles:Object(v.a)(t.profiles)});default:return e}}var B=function(e){return e.stories.items},z=function(e){return e.stories.profiles},D=Object(m.c)({user:O,friends:x,search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case L:return Object(g.a)({},e,{q:t.search.filter(function(e){return"profile"===e.type})});default:return e}},stories:U}),G=n(49),H=n(54),W=n(5),K=(n(488),n(8)),M=n.n(K),V=n(19),q="5.95",J={access_token:"",dateTime:"",scope:""},Y=function(){J.access_token="",J.dateTime="",J.scope=""},Q=function(){var e=Object(V.a)(M.a.mark(function e(t){var n,r;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.a.send("VKWebAppGetAuthToken",{app_id:7080438,scope:t});case 3:return n=e.sent,e.next=6,n.data.access_token;case 6:return r=e.sent,console.log("access_token",r),e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(0),Error(e.t0.message);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(V.a)(M.a.mark(function e(t){var n,r,a,c,s,i;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1e6,n=Date.now(),r=J.dateTime||Date.now()-1e6+1,a=n-r,c=J.scope!==t,s=!J.oneFetched,!(!localStorage.access_token&&a>1e6)&&!c||!s){e.next=15;break}return e.next=11,Q(t);case 11:i=e.sent,J.access_token=i,J.dateTime=n,J.scope+=" "+t;case 15:return e.next=17,J.access_token;case 17:return e.abrupt("return",e.sent);case 20:throw e.prev=20,e.t0=e.catch(0),Y(),Error(e.t0.message);case 24:case"end":return e.stop()}},e,null,[[0,20]])}));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(V.a)(M.a.mark(function e(t){var n,r,a,c,s,i,o,u,l;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.user_ids,r=void 0===n?[]:n,a=t.fields,c=void 0===a?"":a,s=t.name_case,i=void 0===s?"nom":s,e.prev=1,console.log("user_ids",r),r.length){e.next=13;break}return e.next=6,G.a.send("VKWebAppGetUserInfo",{});case 6:return o=e.sent,console.log("response1",o),e.next=10,o.data;case 10:return e.abrupt("return",e.sent);case 13:return e.next=15,X("");case 15:return u=e.sent,{access_token:u,v:q,user_ids:r,fields:c,name_case:i},e.next=19,G.a.send("VKWebAppGetUserInfo",{});case 19:return l=e.sent,console.log("response2",l),e.next=23,l;case 23:return e.abrupt("return",e.sent);case 24:e.next=29;break;case 26:throw e.prev=26,e.t0=e.catch(1),Error(e.t0.message);case 29:case"end":return e.stop()}},e,null,[[1,26]])}));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(V.a)(M.a.mark(function e(){var t,n,r,a,c,s=arguments;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:100,n=s.length>1&&void 0!==s[1]?s[1]:0,e.prev=2,e.next=5,X("friends, groups");case 5:return r=e.sent,"friends.get","connections,deactivated,nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",a={access_token:r,v:q,fields:"connections,deactivated,nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",count:t,offset:n},e.next=11,G.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:a});case 11:return c=e.sent,e.next=14,c.data.response.items;case 14:return e.abrupt("return",e.sent);case 17:throw e.prev=17,e.t0=e.catch(2),Y(),Error(e.t0.message);case 21:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(V.a)(M.a.mark(function e(t){var n,r,a,c,s;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.extended,r=void 0===n?0:n,e.prev=1,e.next=4,X("stories");case 4:return a=e.sent,"stories.get",c={access_token:a,v:q,extended:r},e.next=9,G.a.send("VKWebAppCallAPIMethod",{method:"stories.get",params:c});case 9:return s=e.sent,e.next=12,s.data.response;case 12:return e.abrupt("return",e.sent);case 15:throw e.prev=15,e.t0=e.catch(1),Y(),Error(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}(),te=function(){return function(){var e=Object(V.a)(M.a.mark(function e(t){var n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z({});case 2:n=e.sent,t({type:E,payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},ne=function(e){var t=e.user_ids;return function(){var e=Object(V.a)(M.a.mark(function e(n){var r;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z({user_ids:t});case 2:r=e.sent,n({type:b,payload:r});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},re=function(e,t){var n=0,r=function(){var a=Object(V.a)(M.a.mark(function a(c){var s,i;return M.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,$(100,n);case 2:s=a.sent,!(i=!s.length)&&n<=5e3&&(console.log("fetchedAllUsers",n),n+=100,c({type:F,users:Object(v.a)(s),offsetFriends:n}),r(c)),i&&t&&t(),e&&e();case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return r},ae=function(e){return function(){var t=Object(V.a)(M.a.mark(function t(n){var r;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$(100,0);case 2:r=t.sent,n({type:w,users:Object(v.a)(r)}),e&&e();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(V.a)(M.a.mark(function t(n){var r;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("UPDATE_FRIENDS",e),t.next=3,$(100,e);case 3:r=t.sent,n({type:F,users:Object(v.a)(r)});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},se=function(e){return function(){var t=Object(V.a)(M.a.mark(function t(n){var r;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ee({extended:e});case 2:r=t.sent,n({type:N,items:Object(v.a)(r.items),profiles:Object(v.a)(r.profiles)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},ie=n(55),oe=n.n(ie),ue=n(119),le=function(e){var t=e.last_seen,n=e.longTime,r=e.description,a=e.city,c=e.country;return n&&t&&t.time?"\u0431\u044b\u043b \u0432 \u0441\u0435\u0442\u0438 ".concat(function(e){var t=new Date(1e3*e),n=t.toLocaleDateString(),r=t.toLocaleTimeString().slice(0,5);return"".concat(r," ").concat(n)}(t.time)):r||"".concat(a.title," ").concat(c.title)},de=function(e){var t=e.size,n=e.id,r=e.photo_50,a=e.photo_100,c=e.photo_200,s=e.photo_200_orig,i=e.city,o=e.country,u=e.first_name,d=e.last_name,f=(e.bdate,e.description),m=e.instagram,p=e.connections,h=Object(ue.a)(e,["size","id","photo_50","photo_100","photo_200","photo_200_orig","city","country","first_name","last_name","bdate","description","instagram","connections"]),v=function(e){var t=e.id,n=e.type,r=e.instagram;switch(n){case"vk":return"https://vk.com/id".concat(t);case"instagram":return"https://www.instagram.com/".concat(r);default:return"https://vk.com/id".concat(t)}}({id:n,type:p,instagram:m}),g=le({last_seen:h.last_seen,longTime:h.longTime,description:f,city:i,country:o});return l.a.createElement(W.Cell,{key:n,before:l.a.createElement(W.Avatar,{size:t,src:s||c||a||r}),size:"l",description:g,onClick:function(){return function(e){window.location.href=e}(v)}},"".concat(u," ").concat(d))};de.defaultProps={size:48,city:{title:""},country:{title:""},connections:"vk"};var fe=de,me=Object(p.b)(function(e){return{fetchedUser:r.getUser(e)}},null)(function(e){var t=e.id,n=e.go,r=e.fetchedUser,a=e.dispatch,c=Object(u.useState)(!1),i=Object(H.a)(c,2),o=i[0],d=i[1];!function(e){Object(u.useEffect)(function(){e((0,s.fetchedUser)())},[])}(a);return l.a.createElement(W.Panel,{id:t},l.a.createElement(W.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),l.a.createElement(W.PullToRefresh,{onRefresh:function(){d(!0),setTimeout(function(){d(!1)},2e3)},isFetching:o},l.a.createElement(W.Group,{title:""},l.a.createElement(fe,Object.assign({size:36},r,{go:n}))),l.a.createElement(W.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f"},l.a.createElement(W.List,null,l.a.createElement(W.Cell,{onClick:n,"data-to":"friends",asideContent:l.a.createElement(oe.a,null)},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0434\u0440\u0443\u0437\u044c\u044f\u043c"),l.a.createElement(W.Cell,{onClick:n,"data-to":"friendsInInstagram",asideContent:l.a.createElement(oe.a,null)},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u043c\u0435"),l.a.createElement(W.Cell,{onClick:n,"data-to":"deletedAndBanned",asideContent:l.a.createElement(oe.a,null)},"\u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u0435 / \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435"),l.a.createElement(W.Cell,{onClick:n,"data-to":"sortlongtime",asideContent:l.a.createElement(oe.a,null)},"\u043a\u0442\u043e \u0434\u0430\u0432\u043d\u043e \u0437\u0430\u0445\u043e\u0434\u0438\u043b?"))),l.a.createElement(W.Group,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"},l.a.createElement(W.List,null,l.a.createElement(W.Cell,{onClick:n,"data-to":"city",asideContent:l.a.createElement(oe.a,null)},"\u0413\u043e\u0440\u043e\u0434\u0430"))),l.a.createElement(W.Group,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u0438"},l.a.createElement(W.List,null,l.a.createElement(W.Cell,{onClick:n,"data-to":"stories",asideContent:l.a.createElement(oe.a,null)},"\u0418\u0441\u0442\u043e\u0440\u0438\u0438")))))}),pe=function(e){var t=e.handleScroll,n=e.handleRefresh,r=e.isFetching,a=e.list,c=(e.component,e.footerNameCount),s=e.groupTitle,i=e.children;return l.a.createElement(W.PullToRefresh,{onScroll:t,onRefresh:n,isFetching:r},!a.length&&!r&&l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(W.Spinner,{size:"regular",style:{marginTop:20}})),a.length>0&&l.a.createElement(W.Group,{title:s},a.map(function(e,t){return l.a.createElement(W.List,{key:e.id||t},Object(u.cloneElement)(i,e),l.a.createElement("span",null))})),l.a.createElement(W.Footer,null,a.length," ",c))};pe.defaultProps={handleScroll:function(){}};var he=pe,ve=n(270),ge=n.n(ve),Ee=n(80),be=n.n(Ee),_e=Object(W.platform)(),Oe=function(e){var t=e.handelClick,n=e.dataTo,r=e.title;return l.a.createElement(W.PanelHeader,{left:l.a.createElement(W.HeaderButton,{onClick:t,"data-to":n},_e===W.IOS?l.a.createElement(ge.a,null):l.a.createElement(be.a,null))},r)},ye=function(e){var t=e.go,n=e.usersList,r=e.handleScrollBottom,a=e.handleFetched,c=e.searchFilter,s=e.isSearch,i=e.headerPanelTitle,o=e.footerNameCount,d=Object(ue.a)(e,["go","usersList","handleScrollBottom","handleFetched","searchFilter","isSearch","headerPanelTitle","footerNameCount"]),f=Object(u.useState)(!1),m=Object(H.a)(f,2),p=m[0],h=m[1],v=Object(u.useState)(""),g=Object(H.a)(v,2),E=g[0],b=g[1],_=Object(u.useState)(""),O=Object(H.a)(_,2),y=O[0],j=O[1];Object(u.useEffect)(function(){window.addEventListener("scroll",F),a(w)},[]);var w=function(){return h(!1)},F=function(e){var t=e.target.documentElement.scrollHeight,n=e.target.documentElement.clientHeight;window.pageYOffset+5>=t-n&&r()};return l.a.createElement(l.a.Fragment,null,l.a.createElement(Oe,{title:i,handelClick:t,dataTo:"home"}),n.length>0&&s&&l.a.createElement(W.Search,{value:E,onChange:function(e){var t=c(e);b(e),j(t)},onClose:function(){b(""),j("")}}),l.a.createElement(he,{handleScroll:F,handleRefresh:function(){h(!0),a(w)},isFetching:p,list:y.length?y:n,footerNameCount:o},l.a.createElement(fe,Object.assign({size:36,go:t},d))))};ye.defaultProps={isSearch:!1,searchFilter:function(){},headerPanelTitle:"",footerNameCount:""};var je=ye,we=Object(p.b)(function(e){return{users:a.getFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.offsetFriends,e.dispatch),c=i.fetchedAllFriends;return l.a.createElement(W.Panel,{id:t},l.a.createElement(je,{go:n,usersList:r.slice(0,300),handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439"}))}),Fe=Object(p.b)(function(e){return{users:a.getFriendsInInstagram(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.getOffsetInstagramFriends,e.dispatch),c=i.fetchedAllFriends;return l.a.createElement(W.Panel,{id:t},l.a.createElement(je,{go:n,usersList:r,handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439",connections:"instagram"}))}),Se=Object(p.b)(function(e){return{users:a.getBannedFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.getOffsetBannedFriends,e.dispatch),c=i.fetchedAllFriends;return l.a.createElement(W.Panel,{id:t},l.a.createElement(je,{go:n,usersList:r,handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435/\u0417\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0435",footerNameCount:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u0438 \u0437\u0430\u0431\u0435\u043d\u043d\u044b\u0445"}))}),xe=Object(p.b)(function(e){return{users:a.getSortLongTime(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.offsetFriends,e.dispatch),c=i.fetchedAllFriends;return l.a.createElement(W.Panel,{id:t},l.a.createElement(je,{go:n,usersList:r.slice(0,300),handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439",longTime:!0}))}),Ce=(n(491),function(e){var t=e.id,n=e.size,r=void 0===n?64:n,a=e.name,c=e.url,s=void 0===c?"":c,i=["Story__user-avatar"];return l.a.createElement("div",{key:t,className:"Story__user",onClick:function(){i.push("Story__is-viewed")}},l.a.createElement(W.Avatar,{className:i.join(" "),size:r,src:s},l.a.createElement(be.a,null)),l.a.createElement("div",{className:"Stories__full-name"},a))}),ke=(n(492),Object(p.b)(function(e){return{profiles:c.getProfiles(e),usersProfile:r.getUsersProfile(e)}},null)(function(e){var t=e.id,n=e.go,r=e.dispatch,a=e.profiles,c=o.fetcheStories,i=s.fetchedUsersProfile;if(Object(u.useEffect)(function(){r(c({extended:1}))},[]),a.length>0){var d=a.map(function(e){return e.id});r(i({user_ids:d}))}return l.a.createElement(W.Panel,{id:t},l.a.createElement(Oe,{handelClick:n,dataTo:"home",title:"\u0418\u0441\u0442\u043e\u0440\u0438\u0438"}),l.a.createElement("div",{className:"Stories__wrapper"},a.length>0&&a.map(function(e){var t=e.id,n=e.first_name,r=e.last_name;return l.a.createElement(Ce,{id:t,name:"".concat(n," ").concat(r)})})))})),Pe=n(271),Te=n(272),Ae=n(285),Le=n(273),Ie=n(286),Ne=n(274),Re=(n(493),Object(W.getClassName)("ScreenSpinner")),Ue=function(e){var t=Object(Ne.a)({},e);return l.a.createElement(W.PopoutWrapper,{className:Object(W.classNames)(Re,"ScreenSpinner__disabled")},l.a.createElement("div",{className:"ScreenSpinner__container"},l.a.createElement(W.Spinner,Object.assign({size:"large"},t))))},Be=n(95),ze=(n(619),["#0088FE","#00C49F","#FFBB28","#FF8042","#FF80333","#FA8542"]),De={top:0,left:"3px",lineHeight:"24px"},Ge=function(e){var t=e.cx,n=e.cy,r=e.midAngle,a=e.innerRadius,c=e.outerRadius,s=(e.percent,e.index,Math.PI/180),i=a+.5*(c-a),o=t+i*Math.cos(-r*s),u=n+i*Math.sin(-r*s);return l.a.createElement("text",{x:o,y:u,fill:"white",textAnchor:o>t?"start":"end",dominantBaseline:"central"})},He=function(e){function t(e){var n;return Object(Pe.a)(this,t),(n=Object(Ae.a)(this,Object(Le.a)(t).call(this,e))).state={screenSpinner:!0},n}return Object(Ie.a)(t,e),Object(Te.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch,n=e.users,r=i.fetchedAllFriends;n.length?this.ending():t(r(null,this.ending.bind(this)))}},{key:"ending",value:function(){this.setState({screenSpinner:!1})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.go,r=e.users,a=this.state.screenSpinner;return l.a.createElement(W.Panel,{id:t},l.a.createElement(Oe,{title:"\u0413\u043e\u0440\u043e\u0434\u0430",handelClick:n,dataTo:"home"}),a?l.a.createElement(Ue,null):l.a.createElement(W.Group,null,l.a.createElement(Be.d,{width:320,height:500,onMouseEnter:this.onPieEnter},l.a.createElement(Be.c,{dataKey:"value",data:r,cx:"70%",cy:"30%",labelLine:!1,label:Ge,outerRadius:80,fill:"#8884d8"},r&&r.map(function(e,t){return l.a.createElement(Be.a,{key:t,fill:ze[t%ze.length]})})),l.a.createElement(Be.b,{iconSize:10,iconType:"circle",width:320,height:5,layout:"vertical",verticalAlign:"middle",wrapperStyle:De}))))}}]),t}(u.Component),We=Object(p.b)(function(e){return{users:a.getSortFriendsFromCity(e)}},null)(He),Ke=function(e){var t=Object(u.useState)("home"),n=Object(H.a)(t,2),r=n[0],a=n[1],c=function(e){var t=e.currentTarget.dataset.to;return a(t)};return l.a.createElement(W.View,{activePanel:r},l.a.createElement(me,{id:"home",go:c}),l.a.createElement(we,{id:"friends",go:c}),l.a.createElement(Fe,{id:"friendsInInstagram",go:c}),l.a.createElement(Se,{id:"deletedAndBanned",go:c}),l.a.createElement(xe,{id:"sortlongtime",go:c}),l.a.createElement(We,{id:"city",go:c}),l.a.createElement(ke,{id:"stories",go:c}))},Me=Object(m.d)(D,Object(m.a)(h.a));G.a.send("VKWebAppInit",{}),f.a.render(l.a.createElement(function(){return l.a.createElement(p.a,{store:Me},l.a.createElement(Ke,null))},null),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.c914ec4f.chunk.js.map