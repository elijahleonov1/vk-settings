(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(352)},352:function(e,t,n){"use strict";n.r(t);n(148),n(150);var a=n(0),s=n.n(a),o=n(107),i=n.n(o),r=n(57),c=n(22),l=n(23),u=n(25),d=n(24),p=n(26),h=n(108),f=n.n(h),m=n(2),_=(n(351),n(74)),v=(n(109),function(e){return r.a.send("VKWebAppCallAPIMethod",{method:"users.get",params:Object(_.a)({},e,{v:"5.95"})})}),g=function(e){return r.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:Object(_.a)({},e,{v:"5.95"})})},k=function(e){return r.a.send("VKWebAppCallAPIMethod",{method:"friends.getLists",params:Object(_.a)({},e,{v:"5.95"})})},E=function(e){var t=e.id,n=e.go,a=e.fetchedUser;e.access_token;return s.a.createElement(m.Panel,{id:t},console.log(a),s.a.createElement(m.PanelHeader,null,"VK Tools"),a&&s.a.createElement(m.Group,{title:"\u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"},s.a.createElement(m.ListItem,{onClick:function(){return window.open("https://vk.com/id".concat(a.id))},before:a.photo_200?s.a.createElement(m.Avatar,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),s.a.createElement(m.Group,{title:"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438"},s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:n,"data-to":"friendsForInstagram"},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435")),s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:n,"data-to":"friendsIsDeleted"},"\u0423\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435/\u0417\u0430\u0431\u0430\u043d\u0435\u043d\u044b\u0435")),s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:n,"data-to":"friendsBookmarks"},"\u0423 \u043a\u043e\u0433\u043e \u0432\u044b \u0432 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0430\u0445")),s.a.createElement(m.Div,null,s.a.createElement(m.Button,{size:"xl",level:"2",onClick:n,"data-to":"friendsLastActivity"},"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0434\u0440\u0443\u0437\u0435\u0439"))))},I=n(35),b=n.n(I),y=n(28),w=n.n(y),O=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getFriends()}},{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){g({count:100,offset:t,access_token:e.props.access_token}).then(function(n){n.data.response.items.length?(t+=100,e.getUsersInfo(n.data.response.items).then(function(t){t.data.response.forEach(function(t){t.instagram&&e.setState(function(e){return e.usersInfo.push(t)})}),e.setState({isSpinner:!1}),e.forceUpdate()}).catch(function(e){return console.log("ERR GET Users",e)})):clearInterval(e.friendsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"getUsersInfo",value:function(e){var t=e.slice(0,100).join(",");return v({user_ids:t,fields:"photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me",access_token:this.props.access_token})}},{key:"goInstagram",value:function(e,t){return e.stopPropagation(),window.open("https://www.instagram.com/".concat(t))}},{key:"prev",value:function(e){clearInterval(this.friendsInterval),this.props.go(e)}},{key:"render",value:function(){var e=this;return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?s.a.createElement(b.a,null):s.a.createElement(w.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.isSpinner&&s.a.createElement(m.Cell,{size:"l"},s.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo&&this.state.usersInfo.map(function(t,n){return s.a.createElement("div",{key:n},s.a.createElement(m.Cell,{size:"l",description:t.status||"",before:s.a.createElement(m.Avatar,{src:t.photo_200||t.photo_200_orig}),onClick:function(){return window.open("https://vk.com/id".concat(t.id))},bottomContent:s.a.createElement("div",{style:{zIndex:999}},s.a.createElement(m.Button,{onClick:function(n){return e.goInstagram(n,t.instagram)}},"Instagram"))},"".concat(t.first_name," ").concat(t.last_name)))})))}}]),t}(s.a.Component),C=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getFriends()}},{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){g({count:5e3,offset:t,fields:"bdate, city, country, photo_200_orig, contacts, online, last_seen",access_token:e.props.access_token}).then(function(n){n.data.response.items.length?(t+=5e3,n.data.response.items.forEach(function(t){"deactivated"!==t.deactivated&&"banned"!==t.deactivated||e.setState(function(e){return e.usersInfo.push(t)})}),e.setState({isSpinner:!1}),e.forceUpdate()):clearInterval(e.friendsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"prev",value:function(e){clearInterval(this.friendsInterval),this.props.go(e)}},{key:"render",value:function(){return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?s.a.createElement(b.a,null):s.a.createElement(w.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.isSpinner&&s.a.createElement(m.Cell,{size:"l"},s.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo&&this.state.usersInfo.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(m.Cell,{size:"l",description:e.status||"",before:s.a.createElement(m.Avatar,{src:e.photo_200||e.photo_200_orig}),bottomContent:"deactivated"===e.deactivated?"\u0423\u0434\u0430\u043b\u0435\u043d":"banned"===e.deactivated?"\u0417\u0430\u0431\u0430\u043d\u0435\u043d":"",onClick:function(){return window.open("https://vk.com/id".concat(e.id))}},"".concat(e.first_name," ").concat(e.last_name)))})))}}]),t}(s.a.Component),j=n(146),S=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0,friendsIds:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getFriendsIds()}},{key:"getFriendsIds",value:function(){var e=this,t=0;this.friendsIdsInterval=setInterval(function(){g({count:5e3,offset:t,access_token:e.props.access_token}).then(function(n){n.data.response.items.length?(t+=5e3,e.setState(function(e){var t;return(t=e.friendsIds).push.apply(t,Object(j.a)(n.data.response.items))})):(clearInterval(e.friendsIdsInterval),e.getFriendsList())}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"getFriends",value:function(){var e=this,t=0;this.friendsListsInterval=setInterval(function(){g({count:5e3,offset:t,access_token:e.props.access_token}).then(function(n){n.data.response.items.length?(t+=5e3,n.data.response.items.forEach(function(e){})):clearInterval(e.friendsListsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"getFriendsList",value:function(){var e=this;this.friendsListsInterval=setInterval(function(){k({user_id:e.state.friendsIds[0],return_system:0,access_token:e.props.access_token}).then(function(t){t.data.response.items.length?(5e3,t.data.response.items.forEach(function(e){})):clearInterval(e.friendsListsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"prev",value:function(e){clearInterval(this.friendsIdsInterval),clearInterval(this.friendsListsInterval),this.props.go(e)}},{key:"render",value:function(){return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?s.a.createElement(b.a,null):s.a.createElement(w.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.isSpinner&&s.a.createElement(m.Cell,{size:"l"},s.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo&&this.state.usersInfo.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(m.Cell,{size:"l",description:e.status||"",before:s.a.createElement(m.Avatar,{src:e.photo_200||e.photo_200_orig}),bottomContent:"deactivated"===e.deactivated?"\u0423\u0434\u0430\u043b\u0435\u043d":"banned"===e.deactivated?"\u0417\u0430\u0431\u0430\u043d\u0435\u043d":"",onClick:function(){return window.open("https://vk.com/id".concat(e.id))}},"".concat(e.first_name," ").concat(e.last_name)))})))}}]),t}(s.a.Component),z=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getFriends()}},{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){g({count:100,offset:t,access_token:e.props.access_token}).then(function(n){n.data.response.items.length?(t+=100,e.getUsersInfo(n.data.response.items).then(function(t){t.data.response.forEach(function(t){t.is_favorite&&e.setState(function(e){return e.usersInfo.push(t)})}),e.setState({isSpinner:!1}),e.forceUpdate()}).catch(function(e){return console.log("ERR GET Users",e)})):clearInterval(e.friendsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"getUsersInfo",value:function(e){var t=e.slice(0,100).join(",");return v({user_ids:t,fields:"photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me",access_token:this.props.access_token})}},{key:"goInstagram",value:function(e,t){return e.stopPropagation(),window.open("https://www.instagram.com/".concat(t))}},{key:"prev",value:function(e){clearInterval(this.friendsInterval),this.props.go(e)}},{key:"render",value:function(){return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?s.a.createElement(b.a,null):s.a.createElement(w.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.isSpinner&&s.a.createElement(m.Cell,{size:"l"},s.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo&&this.state.usersInfo.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(m.Cell,{size:"l",description:e.status||"",before:s.a.createElement(m.Avatar,{src:e.photo_200||e.photo_200_orig}),onClick:function(){return window.open("https://vk.com/id".concat(e.id))}},"".concat(e.first_name," ").concat(e.last_name)))})))}}]),t}(s.a.Component),R=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getFriends()}},{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){g({count:100,fields:"nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities",offset:t,access_token:e.props.access_token}).then(function(n){if(n.data.response.items.length){t+=100;n.data.response.items}else clearInterval(e.friendsInterval)}).catch(function(e){return console.log("ERR GET Friends",e)})},2e3)}},{key:"goInstagram",value:function(e,t){return e.stopPropagation(),window.open("https://www.instagram.com/".concat(t))}},{key:"prev",value:function(e){clearInterval(this.friendsInterval),this.props.go(e)}},{key:"render",value:function(){return s.a.createElement(m.Panel,{id:this.props.id},s.a.createElement(m.PanelHeader,{left:s.a.createElement(m.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===m.IOS?s.a.createElement(b.a,null):s.a.createElement(w.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(m.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.isSpinner&&s.a.createElement(m.Cell,{size:"l"},s.a.createElement(m.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo&&this.state.usersInfo.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(m.Cell,{size:"l",description:e.status||"",before:s.a.createElement(m.Avatar,{src:e.photo_200||e.photo_200_orig}),onClick:function(){return window.open("https://vk.com/id".concat(e.id))}},"".concat(e.first_name," ").concat(e.last_name)))})))}}]),t}(s.a.Component),F=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,access_token:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAccessTokenReceived":e.setState({access_token:t.detail.data.access_token}),console.log("access_token",t.detail.data.access_token),e.getUser();break;default:console.log(t.detail)}}),f.a.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends,status,wall,groups"})}},{key:"getUser",value:function(){var e=this;v({fields:"photo_200,city,title",access_token:this.state.access_token}).then(function(t){return e.setState({fetchedUser:t.data.response[0]})}).catch(function(e){return console.log("ERR GET User",e)})}},{key:"render",value:function(){return s.a.createElement(m.View,{activePanel:this.state.activePanel},s.a.createElement(E,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,access_token:this.state.access_token}),s.a.createElement(O,{id:"friendsForInstagram",go:this.go,access_token:this.state.access_token}),s.a.createElement(C,{id:"friendsIsDeleted",go:this.go,access_token:this.state.access_token}),s.a.createElement(S,{id:"friendsIsList",go:this.go,access_token:this.state.access_token}),s.a.createElement(z,{id:"friendsBookmarks",go:this.go,access_token:this.state.access_token}),s.a.createElement(R,{id:"friendsLastActivity",go:this.go,access_token:this.state.access_token}))}}]),t}(s.a.Component);r.a.send("VKWebAppInit",{}).then(function(e){return console.log("VKWebAppInit",e)}).catch(function(e){return console.error("ERR VKWebAppInit",e)}),i.a.render(s.a.createElement(F,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.32cab6dc.chunk.js.map