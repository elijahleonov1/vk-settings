(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{312:function(e,t,n){e.exports=n(620)},491:function(e,t,n){},492:function(e,t,n){},493:function(e,t,n){},619:function(e){e.exports={}},620:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"default",function(){return b}),n.d(r,"getUser",function(){return _});var a={};n.r(a),n.d(a,"default",function(){return F}),n.d(a,"getFriends",function(){return S}),n.d(a,"getFriendsInInstagram",function(){return C}),n.d(a,"getBannedFriends",function(){return k}),n.d(a,"getSortLongTime",function(){return x}),n.d(a,"getSortFriendsFromCity",function(){return T});var c={};n.r(c),n.d(c,"default",function(){return N}),n.d(c,"getStories",function(){return B}),n.d(c,"getProfiles",function(){return R});var i={};n.r(i),n.d(i,"fetchedUser",function(){return $});var o={};n.r(o),n.d(o,"fetchedAllFriends",function(){return ee}),n.d(o,"fetchedFriends",function(){return te}),n.d(o,"updateFriends",function(){return ne});var s={};n.r(s),n.d(s,"fetcheStories",function(){return re});n(313),n(315);var l=n(1),u=n.n(l),d=n(68),f=n.n(d),m=n(69),h=n(20),p=n(269),v=n(46),g="SET_USER",E={photo_200:"https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg",first_name:"\u0412\u0430\u0441\u044f",last_name:"\u0412\u0430\u0441\u0435\u0447\u043a\u0438\u043d",city:{title:"New York"}};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case g:return Object(v.a)({},e,t.payload);default:return e}}var _=function(e){return e.user},O=n(21),y="FETCHED_FRIENDS",j="UPDATE_FRIENDS",w={users:[]};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object(v.a)({},e,{offsetFriends:t.offsetFriends,users:Object(O.a)(t.users)});case j:return Object(v.a)({},e,{offsetFriends:t.offsetFriends,users:[].concat(Object(O.a)(e.users),Object(O.a)(t.users))});default:return e}}var S=function(e){return e.friends.users},C=function(e){return e.friends.users.filter(function(e){return e.instagram})},k=function(e){return e.friends.users.filter(function(e){return"deleted"===e.deactivated||"banned"===e.deactivated})},x=function(e){return e.friends.users.sort(function(e,t){return e.last_seen&&t.last_seen&&e.last_seen.time&&t.last_seen.time&&e.last_seen.time-t.last_seen.time})},T=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.values(e).map(function(e){e.value<10?(t.others||(t.others={value:0,items:[],name:""}),t.others.items.push(e),t.others.value+=1,t.others.name="others - ".concat(t.others.value)):(t[e.id]||(t[e.id]={value:0,items:[],name:""}),t[e.id].items.push(e),t[e.id].value+=e.value,t[e.id].name="".concat(e.name," - ").concat(t[e.id].value))}),Object.values(t).sort(function(e,t){return t.value-e.value})}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t={};return e.map(function(e){e.city&&(t[e.city.id]?(t[e.city.id].value+=1,t[e.city.id].name=e.city.title):t[e.city.id]={id:e.city.id,name:"".concat(e.city.title),value:1})}),t}(e.friends.users))},P="FETCHED_SEARCH",A={q:[]};var L="FETCHED_STORIES",I={items:[],profiles:[]};function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case L:return Object(v.a)({},e,{items:Object(O.a)(t.items),profiles:Object(O.a)(t.profiles)});default:return e}}var B=function(e){return e.stories.items},R=function(e){return e.stories.profiles},z=Object(m.c)({user:b,friends:F,search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case P:return Object(v.a)({},e,{q:t.search.filter(function(e){return"profile"===e.type})});default:return e}},stories:N}),D=n(54),U=n(53),H=n(5),G=(n(488),n(12)),M=n.n(G),W=n(18),K="5.95",V={access_token:"",dateTime:"",scope:""},q=function(){V.access_token="",V.dateTime="",V.scope=""},J=function(){var e=Object(W.a)(M.a.mark(function e(t){var n,r;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.send("VKWebAppGetAuthToken",{app_id:7080438,scope:t});case 3:return n=e.sent,e.next=6,n.data.access_token;case 6:return r=e.sent,console.log("access_token",r),e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(0),Error(e.t0.message);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(W.a)(M.a.mark(function e(t){var n,r,a,c,i,o;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,1e6,n=Date.now(),r=V.dateTime||Date.now()-1e6+1,a=n-r,c=V.scope!==t,i=!V.oneFetched,!(!localStorage.access_token&&a>1e6)&&!c||!i){e.next=15;break}return e.next=11,J(t);case 11:o=e.sent,V.access_token=o,V.dateTime=n,V.scope+=" "+t;case 15:return e.next=17,V.access_token;case 17:return e.abrupt("return",e.sent);case 20:throw e.prev=20,e.t0=e.catch(0),q(),Error(e.t0.message);case 24:case"end":return e.stop()}},e,null,[[0,20]])}));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(W.a)(M.a.mark(function e(){var t;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.send("VKWebAppGetUserInfo",{});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),Error(e.t0.message);case 12:case"end":return e.stop()}},e,null,[[0,9]])}));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(W.a)(M.a.mark(function e(){var t,n,r,a,c,i=arguments;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:100,n=i.length>1&&void 0!==i[1]?i[1]:0,e.prev=2,e.next=5,Y("friends, groups");case 5:return r=e.sent,"friends.get","connections,deactivated,nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",a={access_token:r,v:K,fields:"connections,deactivated,nickname,domain,sex,bdate,city,country,timezone,photo_50,photo_100,photo_200_orig,has_mobile,contacts,education,online,relation,last_seen,status,can_write_private_message,can_see_all_posts,can_post,universities",count:t,offset:n},e.next=11,D.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:a});case 11:return c=e.sent,e.next=14,c.data.response.items;case 14:return e.abrupt("return",e.sent);case 17:throw e.prev=17,e.t0=e.catch(2),q(),Error(e.t0.message);case 21:case"end":return e.stop()}},e,null,[[2,17]])}));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(W.a)(M.a.mark(function e(t){var n,r,a,c,i;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.extended,r=void 0===n?0:n,e.prev=1,e.next=4,Y("stories");case 4:return a=e.sent,"stories.get",c={access_token:a,v:K,extended:r},e.next=9,D.a.send("VKWebAppCallAPIMethod",{method:"stories.get",params:c});case 9:return i=e.sent,e.next=12,i.data.response;case 12:return e.abrupt("return",e.sent);case 15:throw e.prev=15,e.t0=e.catch(1),q(),Error(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t){return e.apply(this,arguments)}}(),$=function(){return function(){var e=Object(W.a)(M.a.mark(function e(t){var n;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:n=e.sent,t({type:g,payload:n});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},ee=function(e,t){var n=0,r=function(){var a=Object(W.a)(M.a.mark(function a(c){var i,o;return M.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,X(100,n);case 2:i=a.sent,!(o=!i.length)&&n<=5e3&&(console.log("fetchedAllUsers",n),n+=100,c({type:j,users:Object(O.a)(i),offsetFriends:n}),r(c)),o&&t&&t(),e&&e();case 7:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}();return r},te=function(e){return function(){var t=Object(W.a)(M.a.mark(function t(n){var r;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(100,0);case 2:r=t.sent,n({type:y,users:Object(O.a)(r)}),e&&e();case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(){var t=Object(W.a)(M.a.mark(function t(n){var r;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("UPDATE_FRIENDS",e),t.next=3,X(100,e);case 3:r=t.sent,n({type:j,users:Object(O.a)(r)});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},re=function(e){return function(){var t=Object(W.a)(M.a.mark(function t(n){var r;return M.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z({extended:e});case 2:r=t.sent,n({type:L,items:Object(O.a)(r.items),profiles:Object(O.a)(r.profiles)});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},ae=n(55),ce=n.n(ae),ie=n(119),oe=function(e){var t=e.last_seen,n=e.longTime,r=e.description,a=e.city,c=e.country;return n&&t&&t.time?"\u0431\u044b\u043b \u0432 \u0441\u0435\u0442\u0438 ".concat(function(e){var t=new Date(1e3*e),n=t.toLocaleDateString(),r=t.toLocaleTimeString().slice(0,5);return"".concat(r," ").concat(n)}(t.time)):r||"".concat(a.title," ").concat(c.title)},se=function(e){var t=e.size,n=e.id,r=e.photo_50,a=e.photo_100,c=e.photo_200,i=e.photo_200_orig,o=e.city,s=e.country,l=e.first_name,d=e.last_name,f=(e.bdate,e.description),m=e.instagram,h=e.connections,p=Object(ie.a)(e,["size","id","photo_50","photo_100","photo_200","photo_200_orig","city","country","first_name","last_name","bdate","description","instagram","connections"]),v=function(e){var t=e.id,n=e.type,r=e.instagram;switch(n){case"vk":return"https://vk.com/id".concat(t);case"instagram":return"https://www.instagram.com/".concat(r);default:return"https://vk.com/id".concat(t)}}({id:n,type:h,instagram:m}),g=oe({last_seen:p.last_seen,longTime:p.longTime,description:f,city:o,country:s});return u.a.createElement(H.Cell,{key:n,before:u.a.createElement(H.Avatar,{size:t,src:i||c||a||r}),size:"l",description:g,onClick:function(){return function(e){window.location.href=e}(v)}},"".concat(l," ").concat(d))};se.defaultProps={size:48,city:{title:""},country:{title:""},connections:"vk"};var le=se,ue=Object(h.b)(function(e){return{fetchedUser:r.getUser(e)}},null)(function(e){var t=e.id,n=e.go,r=e.fetchedUser,a=e.dispatch,c=Object(l.useState)(!1),o=Object(U.a)(c,2),s=o[0],d=o[1];!function(e){Object(l.useEffect)(function(){e((0,i.fetchedUser)())},[])}(a);return u.a.createElement(H.Panel,{id:t},u.a.createElement(H.PanelHeader,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),u.a.createElement(H.PullToRefresh,{onRefresh:function(){d(!0),setTimeout(function(){d(!1)},2e3)},isFetching:s},u.a.createElement(H.Group,{title:""},u.a.createElement(le,Object.assign({size:36},r,{go:n}))),u.a.createElement(H.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f"},u.a.createElement(H.List,null,u.a.createElement(H.Cell,{onClick:n,"data-to":"friends",asideContent:u.a.createElement(ce.a,null)},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0434\u0440\u0443\u0437\u044c\u044f\u043c"),u.a.createElement(H.Cell,{onClick:n,"data-to":"friendsInInstagram",asideContent:u.a.createElement(ce.a,null)},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u043c\u0435"),u.a.createElement(H.Cell,{onClick:n,"data-to":"deletedAndBanned",asideContent:u.a.createElement(ce.a,null)},"\u0443\u0434\u0430\u043b\u0451\u043d\u043d\u044b\u0435 / \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0435"),u.a.createElement(H.Cell,{onClick:n,"data-to":"sortlongtime",asideContent:u.a.createElement(ce.a,null)},"\u043a\u0442\u043e \u0434\u0430\u0432\u043d\u043e \u0437\u0430\u0445\u043e\u0434\u0438\u043b?"))),u.a.createElement(H.Group,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"},u.a.createElement(H.List,null,u.a.createElement(H.Cell,{onClick:n,"data-to":"city",asideContent:u.a.createElement(ce.a,null)},"\u0413\u043e\u0440\u043e\u0434\u0430"))),u.a.createElement(H.Group,{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u0438"},u.a.createElement(H.List,null,u.a.createElement(H.Cell,{onClick:n,"data-to":"stories",asideContent:u.a.createElement(ce.a,null)},"\u0418\u0441\u0442\u043e\u0440\u0438\u0438")))))}),de=function(e){var t=e.handleScroll,n=e.handleRefresh,r=e.isFetching,a=e.list,c=(e.component,e.footerNameCount),i=e.groupTitle,o=e.children;return u.a.createElement(H.PullToRefresh,{onScroll:t,onRefresh:n,isFetching:r},!a.length&&!r&&u.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},u.a.createElement(H.Spinner,{size:"regular",style:{marginTop:20}})),a.length>0&&u.a.createElement(H.Group,{title:i},a.map(function(e,t){return u.a.createElement(H.List,{key:e.id||t},Object(l.cloneElement)(o,e),u.a.createElement("span",null))})),u.a.createElement(H.Footer,null,a.length," ",c))};de.defaultProps={handleScroll:function(){}};var fe=de,me=n(270),he=n.n(me),pe=n(80),ve=n.n(pe),ge=Object(H.platform)(),Ee=function(e){var t=e.handelClick,n=e.dataTo,r=e.title;return u.a.createElement(H.PanelHeader,{left:u.a.createElement(H.HeaderButton,{onClick:t,"data-to":n},ge===H.IOS?u.a.createElement(he.a,null):u.a.createElement(ve.a,null))},r)},be=function(e){var t=e.go,n=e.usersList,r=e.handleScrollBottom,a=e.handleFetched,c=e.searchFilter,i=e.isSearch,o=e.headerPanelTitle,s=e.footerNameCount,d=Object(ie.a)(e,["go","usersList","handleScrollBottom","handleFetched","searchFilter","isSearch","headerPanelTitle","footerNameCount"]),f=Object(l.useState)(!1),m=Object(U.a)(f,2),h=m[0],p=m[1],v=Object(l.useState)(""),g=Object(U.a)(v,2),E=g[0],b=g[1],_=Object(l.useState)(""),O=Object(U.a)(_,2),y=O[0],j=O[1];Object(l.useEffect)(function(){window.addEventListener("scroll",F),a(w)},[]);var w=function(){return p(!1)},F=function(e){var t=e.target.documentElement.scrollHeight,n=e.target.documentElement.clientHeight;window.pageYOffset+5>=t-n&&r()};return u.a.createElement(u.a.Fragment,null,u.a.createElement(Ee,{title:o,handelClick:t,dataTo:"home"}),n.length>0&&i&&u.a.createElement(H.Search,{value:E,onChange:function(e){var t=c(e);b(e),j(t)},onClose:function(){b(""),j("")}}),u.a.createElement(fe,{handleScroll:F,handleRefresh:function(){p(!0),a(w)},isFetching:h,list:y.length?y:n,footerNameCount:s},u.a.createElement(le,Object.assign({size:36,go:t},d))))};be.defaultProps={isSearch:!1,searchFilter:function(){},headerPanelTitle:"",footerNameCount:""};var _e=be,Oe=Object(h.b)(function(e){return{users:a.getFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.offsetFriends,e.dispatch),c=o.fetchedAllFriends;return u.a.createElement(H.Panel,{id:t},u.a.createElement(_e,{go:n,usersList:r.slice(0,300),handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439"}))}),ye=Object(h.b)(function(e){return{users:a.getFriendsInInstagram(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.getOffsetInstagramFriends,e.dispatch),c=o.fetchedAllFriends;return u.a.createElement(H.Panel,{id:t},u.a.createElement(_e,{go:n,usersList:r,handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439",connections:"instagram"}))}),je=Object(h.b)(function(e){return{users:a.getBannedFriends(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.getOffsetBannedFriends,e.dispatch),c=o.fetchedAllFriends;return u.a.createElement(H.Panel,{id:t},u.a.createElement(_e,{go:n,usersList:r,handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435/\u0417\u0430\u0431\u0430\u043d\u0435\u043d\u043d\u044b\u0435",footerNameCount:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0445 \u0438 \u0437\u0430\u0431\u0435\u043d\u043d\u044b\u0445"}))}),we=Object(h.b)(function(e){return{users:a.getSortLongTime(e)}},null)(function(e){var t=e.id,n=e.go,r=e.users,a=(e.offsetFriends,e.dispatch),c=o.fetchedAllFriends;return u.a.createElement(H.Panel,{id:t},u.a.createElement(_e,{go:n,usersList:r.slice(0,300),handleScrollBottom:function(){},handleFetched:function(e){r.length||a(c(e))},searchFilter:function(e){return r.filter(function(t){var n=t.first_name,r=t.last_name,a=t.status,c=t.domain;return"".concat(n," ").concat(r," ").concat(c," ").concat(a).toLowerCase().indexOf(e.toLowerCase())>-1})},isSearch:!0,headerPanelTitle:"\u0414\u0440\u0443\u0437\u044c\u044f",footerNameCount:"\u0434\u0440\u0443\u0437\u0435\u0439",longTime:!0}))}),Fe=(n(491),function(e){var t=e.id,n=e.size,r=void 0===n?64:n,a=e.name,c=e.url,i=void 0===c?"":c,o=["Story__user-avatar"];return u.a.createElement("div",{key:t,className:"Story__user",onClick:function(){o.push("Story__is-viewed")}},u.a.createElement(H.Avatar,{className:o.join(" "),size:r,src:i},u.a.createElement(ve.a,null)),u.a.createElement("div",{className:"Stories__full-name"},a))}),Se=(n(492),Object(h.b)(function(e){return{profiles:c.getProfiles(e)}},null)(function(e){var t=e.id,n=e.go,r=e.dispatch,a=e.profiles,c=s.fetcheStories;return Object(l.useEffect)(function(){r(c({extended:1}))},[]),u.a.createElement(H.Panel,{id:t},u.a.createElement(Ee,{handelClick:n,dataTo:"home",title:"\u0418\u0441\u0442\u043e\u0440\u0438\u0438"}),u.a.createElement("div",{className:"Stories__wrapper"},a.length>0&&a.map(function(e){var t=e.id,n=e.first_name,r=e.last_name;return u.a.createElement(Fe,{id:t,name:"".concat(n," ").concat(r)})})))})),Ce=n(271),ke=n(272),xe=n(285),Te=n(273),Pe=n(286),Ae=n(274),Le=(n(493),Object(H.getClassName)("ScreenSpinner")),Ie=function(e){var t=Object(Ae.a)({},e);return u.a.createElement(H.PopoutWrapper,{className:Object(H.classNames)(Le,"ScreenSpinner__disabled")},u.a.createElement("div",{className:"ScreenSpinner__container"},u.a.createElement(H.Spinner,Object.assign({size:"large"},t))))},Ne=n(95),Be=(n(619),["#0088FE","#00C49F","#FFBB28","#FF8042","#FF80333","#FA8542"]),Re={top:0,left:"3px",lineHeight:"24px"},ze=function(e){var t=e.cx,n=e.cy,r=e.midAngle,a=e.innerRadius,c=e.outerRadius,i=(e.percent,e.index,Math.PI/180),o=a+.5*(c-a),s=t+o*Math.cos(-r*i),l=n+o*Math.sin(-r*i);return u.a.createElement("text",{x:s,y:l,fill:"white",textAnchor:s>t?"start":"end",dominantBaseline:"central"})},De=function(e){function t(e){var n;return Object(Ce.a)(this,t),(n=Object(xe.a)(this,Object(Te.a)(t).call(this,e))).state={screenSpinner:!0},n}return Object(Pe.a)(t,e),Object(ke.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch,n=e.users,r=o.fetchedAllFriends;n.length?this.ending():t(r(null,this.ending.bind(this)))}},{key:"ending",value:function(){this.setState({screenSpinner:!1})}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.go,r=e.users,a=this.state.screenSpinner;return u.a.createElement(H.Panel,{id:t},u.a.createElement(Ee,{title:"\u0413\u043e\u0440\u043e\u0434\u0430",handelClick:n,dataTo:"home"}),a?u.a.createElement(Ie,null):u.a.createElement(H.Group,null,u.a.createElement(Ne.d,{width:320,height:500,onMouseEnter:this.onPieEnter},u.a.createElement(Ne.c,{dataKey:"value",data:r,cx:"70%",cy:"30%",labelLine:!1,label:ze,outerRadius:80,fill:"#8884d8"},r&&r.map(function(e,t){return u.a.createElement(Ne.a,{key:t,fill:Be[t%Be.length]})})),u.a.createElement(Ne.b,{iconSize:10,iconType:"circle",width:320,height:5,layout:"vertical",verticalAlign:"middle",wrapperStyle:Re}))))}}]),t}(l.Component),Ue=Object(h.b)(function(e){return{users:a.getSortFriendsFromCity(e)}},null)(De),He=function(e){var t=Object(l.useState)("home"),n=Object(U.a)(t,2),r=n[0],a=n[1],c=function(e){var t=e.currentTarget.dataset.to;return a(t)};return u.a.createElement(H.View,{activePanel:r},u.a.createElement(ue,{id:"home",go:c}),u.a.createElement(Oe,{id:"friends",go:c}),u.a.createElement(ye,{id:"friendsInInstagram",go:c}),u.a.createElement(je,{id:"deletedAndBanned",go:c}),u.a.createElement(we,{id:"sortlongtime",go:c}),u.a.createElement(Ue,{id:"city",go:c}),u.a.createElement(Se,{id:"stories",go:c}))},Ge=Object(m.d)(z,Object(m.a)(p.a));D.a.send("VKWebAppInit",{}),f.a.render(u.a.createElement(function(){return u.a.createElement(h.a,{store:Ge},u.a.createElement(He,null))},null),document.getElementById("root"))}},[[312,1,2]]]);
//# sourceMappingURL=main.ab974376.chunk.js.map