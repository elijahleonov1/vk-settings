(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){e.exports=n(349)},349:function(e,t,n){"use strict";n.r(t);n(145),n(147);var o=n(1),a=n.n(o),s=n(104),r=n.n(s),c=n(66),i=n(67),l=n(68),u=n(70),_=n(69),h=n(71),m=n(9),p=(n(348),n(142)),f=n.n(p),d=function(e,t){return f()(function(e,t){var n="";return Object.keys(t).forEach(function(e){return n+="".concat(e,"=").concat(t[e],"&")}),"https://api.vk.com/method/".concat(e,"?").concat(n,"v=5.80")}(e,t)).then(function(e){return e.json()}).catch(function(e){return console.error(e)})},v=function(e){return d("users.get",e)},g=function(e){return d("friends.get",e)},b=function(e){var t=e.id,n=e.go,o=e.fetchedUser;return a.a.createElement(m.Panel,{id:t},console.log(o),a.a.createElement(m.PanelHeader,null,"Example"),o&&a.a.createElement(m.Group,{title:"\u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"},a.a.createElement(m.ListItem,{before:o.photo_200?a.a.createElement(m.Avatar,{src:o.photo_200}):null,description:o.city&&o.city.title?o.city.title:""},"".concat(o.first_name," ").concat(o.last_name))),a.a.createElement(m.Group,{title:"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"},a.a.createElement(m.Div,null,a.a.createElement(m.Button,{size:"xl",level:"2",onClick:n,"data-to":"friends"},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435"))))},k=n(143),E=n.n(k),I=n(105),y=n.n(I),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(_.a)(t).call(this,e))).state={usersInfo:[],countFriendsInstagram:0},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){g({count:100,offset:t,access_token:e.props.access_token}).then(function(n){t+=100,e.getUsersInfo(n.response.items).then(function(t){t.error?console.error("\u041e\u0448\u0438\u0431\u043a\u0430",t.error):t.response.length?(e.setState(function(e){t.response.forEach(function(t){t.instagram&&e.usersInfo.push(t)})}),e.forceUpdate()):(clearInterval(e.friendsInterval),e.setState(function(e){return e.usersInfo.push({})}))}).catch(function(e){return console.error(e)})}).catch(function(e){return console.error(e)})},2e3)}},{key:"getUsersInfo",value:function(e){var t=e.slice(0,100).join(",");return v({user_ids:t,fields:"photo_id,verified,sex,bdate,city,country,home_town,has_photo,photo_50,photo_100,photo_200_orig,photo_200,photo_400_orig,photo_max,photo_max_orig,online,domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me",access_token:this.props.access_token})}},{key:"goInstagram",value:function(e){return window.open("https://www.instagram.com/".concat(e))}},{key:"prev",value:function(e){clearInterval(this.subscribersInterval),clearInterval(this.friendsInterval),this.props.go(e)}},{key:"componentDidMount",value:function(){this.getFriends()}},{key:"render",value:function(){var e=this;return a.a.createElement(m.Panel,{id:this.props.id},a.a.createElement(m.PanelHeader,{left:a.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?a.a.createElement(E.a,null):a.a.createElement(y.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),a.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},!this.state.usersInfo.length&&a.a.createElement(m.Cell,{size:"l"},a.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo.map(function(t,n){return a.a.createElement("div",{key:n},t.instagram&&a.a.createElement(m.Cell,{size:"l",description:t.status||"",before:a.a.createElement(m.Avatar,{src:t.photo_200_orig}),bottomContent:a.a.createElement(m.Button,{onClick:e.goInstagram.bind(e,t.instagram)},"Instagram")},"".concat(t.first_name," ").concat(t.last_name)))})))}}]),t}(a.a.Component),j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(_.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,access_token:null},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;c.a.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends,photos,video,pages,status,notes,wall,docs,groups,stats,market"}).then(function(t){e.setState({access_token:t.data.access_token}),console.info("access_token",t),e.getUser()}).catch(function(e){return console.error("ERR VKWebAppGetUserInfo",e)})}},{key:"getUser",value:function(){var e=this;v({fields:"photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me",access_token:this.state.access_token}).then(function(t){return e.setState({fetchedUser:t.response[0]})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return a.a.createElement(m.View,{activePanel:this.state.activePanel},a.a.createElement(b,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),a.a.createElement(w,{id:"friends",go:this.go,access_token:this.state.access_token}))}}]),t}(a.a.Component);c.a.send("VKWebAppInit",{}).then(function(e){return console.log("VKWebAppInit",e)}).catch(function(e){return console.error("ERR VKWebAppInit",e)}),r.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.2d783dca.chunk.js.map