(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){e.exports=n(393)},393:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"vk",function(){return V}),n.d(r,"getUser",function(){return B}),n.d(r,"getFriends",function(){return K}),n.d(r,"deleteFriend",function(){return L});n(169),n(171);var a=n(1),c=n.n(a),o=n(66),i=n.n(o),s=n(163),u=n(59),l=n(38),d=n(82),p="SET_USER_DATA",f="SET_FRIENDS_DATA",h="DELETE_FRIEND",m=n(81),_=n.n(m),v=_()({id:"",photo_200:"",first_name:"",last_name:""});function b(e){return e.user}var E=_()([]);function g(e){return e.friends}var k=Object(l.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return e.merge(Object(d.a)({},t.userData));default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return[].concat(e,t.fiendsData);case h:return e.filter(function(e){return e.id!==t.id});default:return e}}}),w=n(165),O=n(56),y=n(57),x=n(60),j=n(58),T=n(61),C=n(12),D=n.n(C),F=n(31),A=n(166),U=n.n(A),I=n(67),S=n.n(I),P="v=5.80",R=function(e,t){t.access_token="297cbfb44eb10d05d05281a0b8d5b4244d3b7efe4c5fdc626360f9d4dda14a82a428e42ebc658dac5c707";var n="";return Object.keys(t).forEach(function(e){return n+="".concat(e,"=").concat(t[e],"&")}),"".concat("https://api.vk.com/method/").concat(e,"?").concat(n).concat(P)},V=function(){var e=Object(F.a)(D.a.mark(function e(t,n){var r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(R(t,n));case 3:if(!(r=e.sent).data.error){e.next=6;break}throw new Error(r.data.error.error_msg);case 6:return e.next=8,r.data.response;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(F.a)(D.a.mark(function e(){var t,n,r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="users.get",n={fields:"photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me, can_be_invited_group"},e.next=5,S.a.send("VKWebAppCallAPIMethod",{method:t,params:Object(d.a)({},n,{v:P})});case 5:if(r=e.sent){e.next=14;break}return e.next=10,V(t,n);case 10:return r=e.sent,e.next=13,r[0];case 13:return e.abrupt("return",e.sent);case 14:return e.next=16,r;case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(F.a)(D.a.mark(function e(){var t,n,r,a,c,o=arguments;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:100,r=o.length>2&&void 0!==o[2]?o[2]:0,"friends.get",a={user_id:t,count:n,offset:r,fields:"nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities"},e.next=7,V("friends.get",a);case 7:return c=e.sent,e.next=10,c.items;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(F.a)(D.a.mark(function e(t){var n;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"friends.delete",n={user_id:t},e.next=4,V("friends.delete",n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N={vk:r},W=n(7),z=(n(162),function(e){return c.a.createElement(a.Fragment,null,e.status&&e.status?e.status:"",e.status&&c.a.createElement("div",{style:{height:"7px"}}),e.city&&e.city.title?e.city.title:"")}),X=function(e){var t=e.handleBtnOne,n=e.btnOneTitle,r=e.handleBtnTwo,o=e.btnTwoTitle,i=e.fetchedUser;return c.a.createElement(a.Fragment,null,i&&c.a.createElement(W.Cell,{before:i.photo_200||i.photo_200_orig?c.a.createElement(W.Avatar,{src:i.photo_200||i.photo_200_orig}):null,size:"l",description:z(i),onClick:function(e){return window.open("".concat("https://vk.com/id").concat(i.id))},bottomContent:(t||r)&&c.a.createElement("div",{style:{display:"flex"}},t&&c.a.createElement(W.Button,{size:"m",onClick:function(e){return t(i.id)},style:{marginRight:8}},n),r&&c.a.createElement(W.Button,{size:"m",onClick:function(e){return r(i.id)},level:"secondary"},o))},"".concat(i.first_name," ").concat(i.last_name)))},H=function(e){function t(){return Object(O.a)(this,t),Object(x.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.go,r=e.fetchedUser;return c.a.createElement(W.Panel,{id:t},c.a.createElement(W.PanelHeader,null," \u0413\u043b\u0430\u0432\u043d\u0430\u044f "),c.a.createElement(W.List,null,c.a.createElement(X,{fetchedUser:r})),c.a.createElement(W.Group,{title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438"},c.a.createElement(W.List,null,c.a.createElement(W.Cell,{expandable:!0,onClick:n,"data-to":"friends"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439"),c.a.createElement(W.Cell,{expandable:!0,onClick:n,"data-to":"friends"},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435"),c.a.createElement(W.Cell,{expandable:!0,onClick:n,"data-to":"friends"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"))))}}]),t}(a.Component),M=n(167),q=n.n(M),G=n(115),J=n.n(G),Q=function(){return function(){var e=Object(F.a)(D.a.mark(function e(t,n){var r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.vk.getFriends();case 3:r=e.sent,t({type:f,fiendsData:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(F.a)(D.a.mark(function t(n,r){return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.vk.deleteFriend(e);case 3:n({type:h,id:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e,n){return t.apply(this,arguments)}}()},Z=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(x.a)(this,Object(j.a)(t).call(this,e))).osname=Object(W.platform)(),n}return Object(T.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.fetchedFriernds,r=Q;n.length||t(r())}},{key:"delFriend",value:function(e){var t=this.props;(0,t.dispatch)((0,t.deleteFriernd)(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,r=t.go,a=t.fetchedFriernds;return c.a.createElement(W.Panel,{id:n},c.a.createElement(W.PanelHeader,{left:c.a.createElement(W.HeaderButton,{onClick:r,"data-to":"home"},this.osname===W.IOS?c.a.createElement(q.a,null):c.a.createElement(J.a,null))}," \u0414\u0440\u0443\u0437\u044c\u044f "),c.a.createElement(W.List,null,a&&a.map(function(t){return c.a.createElement(X,{handleBtnTwo:function(t){return e.delFriend(t)},btnTwoTitle:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",key:t.id,fetchedUser:t})})))}}]),t}(a.Component),$=Object(u.b)(function(e){return{fetchedFriernds:g(e)}},function(e){return{dispatch:e,deleteFriernd:Y}})(Z),ee=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(x.a)(this,Object(j.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home"},n}return Object(T.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){I.subscribe(function(e){switch(e.detail.type){case"VKWebAppAccessTokenReceived":break;default:console.log(e.detail)}}),I.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends,status,wall,groups"}),(0,this.props.dispatch)(function(){var e=Object(F.a)(D.a.mark(function e(t,n){var r;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.vk.getUser();case 3:r=e.sent,t({type:p,userData:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state.activePanel,t=this.props.fetchedUser;return c.a.createElement(W.View,{activePanel:e},c.a.createElement(H,{id:"home",go:this.go,fetchedUser:t}),c.a.createElement($,{id:"friends",go:this.go}))}}]),t}(a.Component),te=Object(u.b)(function(e){return{fetchedUser:b(e)}},null)(ee);w.a.send("VKWebAppInit",{}).then(function(e){return console.log("VKWebAppInit",e)}).catch(function(e){return console.error("ERR VKWebAppInit",e)});var ne=Object(l.e)(k,Object(l.d)(Object(l.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(c.a.createElement(function(){return c.a.createElement(u.a,{store:ne},c.a.createElement(te,null))},null),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.037c0019.chunk.js.map