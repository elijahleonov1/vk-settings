(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"vk",function(){return P}),n.d(r,"getUser",function(){return B}),n.d(r,"getFriends",function(){return I}),n.d(r,"deleteFriend",function(){return L});n(85),n(110);var a=n(0),c=n.n(a),o=n(29),i=n.n(o),s=n(79),u=n(25),l=n(13),d=n(83),p="SET_USER_DATA",f="SET_FRIENDS_DATA",h="DELETE_FRIEND",m=n(35),_=n.n(m),v=_()({id:"",photo_200:"",first_name:"",last_name:""});function b(e){return e.user}var E=_()([]);function g(e){return e.friends}var k=Object(l.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case p:return e.merge(Object(d.a)({},t.userData));default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case f:return[].concat(e,t.fiendsData);case h:return e.filter(function(e){return e.id!==t.id});default:return e}}}),w=n(22),O=n(23),y=n(26),x=n(24),j=n(27),T=n(2),C=n.n(T),D=n(9),F=n(81),U=n.n(F),S=function(e,t){t.access_token="297cbfb44eb10d05d05281a0b8d5b4244d3b7efe4c5fdc626360f9d4dda14a82a428e42ebc658dac5c707";var n="";return Object.keys(t).forEach(function(e){return n+="".concat(e,"=").concat(t[e],"&")}),"".concat("https://api.vk.com/method/").concat(e,"?").concat(n).concat("v=5.80")},P=function(){var e=Object(D.a)(C.a.mark(function e(t,n){var r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.a.get(S(t,n));case 3:if(!(r=e.sent).data.error){e.next=6;break}throw new Error(r.data.error.error_msg);case 6:return e.next=8,r.data.response;case 8:return e.abrupt("return",e.sent);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(e.t0);case 14:case"end":return e.stop()}},e,null,[[0,11]])}));return function(t,n){return e.apply(this,arguments)}}(),B=function(){var e=Object(D.a)(C.a.mark(function e(){var t,n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"users.get",t={fields:"photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me, can_be_invited_group"},e.next=4,P("users.get",t);case 4:return n=e.sent,e.next=7,n[0];case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(D.a)(C.a.mark(function e(){var t,n,r,a,c,o=arguments;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"",n=o.length>1&&void 0!==o[1]?o[1]:100,r=o.length>2&&void 0!==o[2]?o[2]:0,"friends.get",a={user_id:t,count:n,offset:r,fields:"nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities"},e.next=7,P("friends.get",a);case 7:return c=e.sent,e.next=10,c.items;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(D.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"friends.delete",n={user_id:t},e.next=4,P("friends.delete",n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),N={vk:r},R=n(1),z=(n(78),function(e){return c.a.createElement(a.Fragment,null,e.status&&e.status?e.status:"",e.status&&c.a.createElement("div",{style:{height:"7px"}}),e.city&&e.city.title?e.city.title:"")}),A=function(e){var t=e.handleBtnOne,n=e.btnOneTitle,r=e.handleBtnTwo,o=e.btnTwoTitle,i=e.fetchedUser;return c.a.createElement(a.Fragment,null,i&&c.a.createElement(R.Cell,{before:i.photo_200||i.photo_200_orig?c.a.createElement(R.Avatar,{src:i.photo_200||i.photo_200_orig}):null,size:"l",description:z(i),onClick:function(e){return window.open("".concat("https://vk.com/id").concat(i.id))},bottomContent:(t||r)&&c.a.createElement("div",{style:{display:"flex"}},t&&c.a.createElement(R.Button,{size:"m",onClick:function(e){return t(i.id)},style:{marginRight:8}},n),r&&c.a.createElement(R.Button,{size:"m",onClick:function(e){return r(i.id)},level:"secondary"},o))},"".concat(i.first_name," ").concat(i.last_name)))},X=function(e){function t(){return Object(w.a)(this,t),Object(y.a)(this,Object(x.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.go,r=e.fetchedUser;return c.a.createElement(R.Panel,{id:t},c.a.createElement(R.PanelHeader,null," \u0413\u043b\u0430\u0432\u043d\u0430\u044f "),c.a.createElement(R.List,null,c.a.createElement(A,{fetchedUser:r})),c.a.createElement(R.Group,{title:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438"},c.a.createElement(R.List,null,c.a.createElement(R.Cell,{expandable:!0,onClick:n,"data-to":"friends"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439"),c.a.createElement(R.Cell,{expandable:!0,onClick:n,"data-to":"friends"},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435"),c.a.createElement(R.Cell,{expandable:!0,onClick:n,"data-to":"friends"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c"))))}}]),t}(a.Component),H=n(82),V=n.n(H),q=n(45),J=n.n(q),M=function(){return function(){var e=Object(D.a)(C.a.mark(function e(t,n){var r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.vk.getFriends();case 3:r=e.sent,t({type:f,fiendsData:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}()},G=function(e){return function(){var t=Object(D.a)(C.a.mark(function t(n,r){return C.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.vk.deleteFriend(e);case 3:n({type:h,id:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.error(t.t0);case 9:case"end":return t.stop()}},t,null,[[0,6]])}));return function(e,n){return t.apply(this,arguments)}}()},K=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(y.a)(this,Object(x.a)(t).call(this,e))).osname=Object(R.platform)(),n}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.dispatch,n=e.fetchedFriernds,r=M;n.length||t(r())}},{key:"delFriend",value:function(e){var t=this.props;(0,t.dispatch)((0,t.deleteFriernd)(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,r=t.go,a=t.fetchedFriernds;return c.a.createElement(R.Panel,{id:n},c.a.createElement(R.PanelHeader,{left:c.a.createElement(R.HeaderButton,{onClick:r,"data-to":"home"},this.osname===R.IOS?c.a.createElement(V.a,null):c.a.createElement(J.a,null))}," \u0414\u0440\u0443\u0437\u044c\u044f "),c.a.createElement(R.List,null,a&&a.map(function(t){return c.a.createElement(A,{handleBtnTwo:function(t){return e.delFriend(t)},btnTwoTitle:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",key:t.id,fetchedUser:t})})))}}]),t}(a.Component),Q=Object(u.b)(function(e){return{fetchedFriernds:g(e)}},function(e){return{dispatch:e,deleteFriernd:G}})(K),W=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(y.a)(this,Object(x.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home"},n}return Object(j.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)(function(){var e=Object(D.a)(C.a.mark(function e(t,n){var r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.vk.getUser();case 3:r=e.sent,t({type:p,userData:r}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.state.activePanel,t=this.props.fetchedUser;return c.a.createElement(R.View,{activePanel:e},c.a.createElement(X,{id:"home",go:this.go,fetchedUser:t}),c.a.createElement(Q,{id:"friends",go:this.go}))}}]),t}(a.Component),Y=Object(u.b)(function(e){return{fetchedUser:b(e)}},null)(W),Z=Object(l.e)(k,Object(l.d)(Object(l.a)(s.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));i.a.render(c.a.createElement(function(){return c.a.createElement(u.a,{store:Z},c.a.createElement(Y,null))},null),document.getElementById("root"))},84:function(e,t,n){e.exports=n(153)}},[[84,1,2]]]);
//# sourceMappingURL=main.040ff4f8.chunk.js.map