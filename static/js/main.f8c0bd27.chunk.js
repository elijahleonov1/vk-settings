(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(352)},352:function(e,t,n){"use strict";n.r(t);n(148),n(150);var a=n(1),s=n.n(a),o=n(106),r=n.n(o),c=n(60),i=n(50),l=n(51),u=n(53),h=n(52),p=n(54),d=n(107),f=n.n(d),m=n(2),_=(n(351),n(109)),v=n(108),g=n.n(v),E=function(e){return c.a.send("VKWebAppCallAPIMethod",{method:"users.get",params:Object(_.a)({},e,{v:"5.95"})})},k=function(e){return c.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:Object(_.a)({},e,{v:"5.95"})})},b={getDateRegistration:function(e){var t="https://vk.com/foaf.php?id=".concat(e);return g()(t).then(function(e){return e.json()}).catch(function(e){return console.error(e)})}},I=function(e){var t=e.id,n=e.go,a=e.fetchedUser;e.access_token;return s.a.createElement(m.Panel,{id:t},console.log(a),s.a.createElement(m.PanelHeader,null,"VK Tools"),a&&s.a.createElement(m.Group,{title:"\u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"},s.a.createElement(m.ListItem,{before:a.photo_200?s.a.createElement(m.Avatar,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),s.a.createElement(m.Group,{title:"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"},s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:n,"data-to":"friendsForInstagram"},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435")),s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:n,"data-to":"friends"},"\u0414\u0440\u0443\u0437\u044c\u044f"))))},y=n(73),j=n.n(y),O=n(59),w=n.n(O),C=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getFriends()}},{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){k({count:100,offset:t,access_token:e.props.access_token}).then(function(n){n.data.response.items.length?(t+=100,e.getUsersInfo(n.data.response.items).then(function(t){t.data.response.forEach(function(t){t.instagram&&e.setState(function(e){return e.usersInfo.push(t)})}),e.setState({isSpinner:!1}),e.forceUpdate()}).catch(function(e){return console.log("ERR GET Users",e)})):clearInterval(e.friendsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"getUsersInfo",value:function(e){var t=e.slice(0,100).join(",");return E({user_ids:t,fields:"photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me",access_token:this.props.access_token})}},{key:"goInstagram",value:function(e){return window.open("https://www.instagram.com/".concat(e))}},{key:"prev",value:function(e){clearInterval(this.friendsInterval),this.props.go(e)}},{key:"render",value:function(){var e=this;return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?s.a.createElement(j.a,null):s.a.createElement(w.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.isSpinner&&s.a.createElement(m.Cell,{size:"l"},s.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo&&this.state.usersInfo.map(function(t,n){return s.a.createElement("div",{key:n},s.a.createElement(m.Cell,{size:"l",description:t.status||"",before:s.a.createElement(m.Avatar,{src:t.photo_200}),bottomContent:s.a.createElement(m.Button,{onClick:e.goInstagram.bind(e,t.instagram)},"Instagram")},"".concat(t.first_name," ").concat(t.last_name)))})))}}]),t}(s.a.Component),S=n(146),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getFriends()}},{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){k({count:100,offset:t,access_token:e.props.access_token}).then(function(n){n.data.response.items.length?(t+=100,n.data.response.items.forEach(function(e){b(e).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})}),e.setState(function(e){var t;return(t=e.usersInfo).push.apply(t,Object(S.a)(n.data.response))})):clearInterval(e.friendsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"prev",value:function(e){clearInterval(this.friendsInterval),this.props.go(e)}},{key:"render",value:function(){return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?s.a.createElement(j.a,null):s.a.createElement(w.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.isSpinner&&s.a.createElement(m.Cell,{size:"l"},s.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo&&this.state.usersInfo.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(m.Cell,{size:"l",description:e.status||"",before:s.a.createElement(m.Avatar,{src:e.photo_200}),bottomContent:s.a.createElement(m.Button,null,"Instagram")},"".concat(e.first_name," ").concat(e.last_name)))})))}}]),t}(s.a.Component),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,access_token:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAccessTokenReceived":e.setState({access_token:t.detail.data.access_token}),console.log("access_token",t.detail.data.access_token),e.getUser();break;default:console.log(t.detail)}}),f.a.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends,status,wall,groups"})}},{key:"getUser",value:function(){var e=this;E({fields:"photo_200,city,title",access_token:this.state.access_token}).then(function(t){return e.setState({fetchedUser:t.data.response[0]})}).catch(function(e){return console.log("ERR GET User",e)})}},{key:"render",value:function(){return s.a.createElement(m.View,{activePanel:this.state.activePanel},s.a.createElement(I,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,access_token:this.state.access_token}),s.a.createElement(C,{id:"friendsForInstagram",go:this.go,access_token:this.state.access_token}),s.a.createElement(A,{id:"friends",go:this.go,access_token:this.state.access_token}))}}]),t}(s.a.Component);c.a.send("VKWebAppInit",{}).then(function(e){return console.log("VKWebAppInit",e)}).catch(function(e){return console.error("ERR VKWebAppInit",e)}),r.a.render(s.a.createElement(P,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.f8c0bd27.chunk.js.map