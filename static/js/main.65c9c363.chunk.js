(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){e.exports=n(352)},352:function(e,t,n){"use strict";n.r(t);n(148),n(150);var a=n(1),s=n.n(a),o=n(104),c=n.n(o),r=n(34),i=n(67),l=n(68),u=n(70),d=n(69),p=n(71),h=n(106),m=n.n(h),f=n(9),v=(n(351),n(107)),g=(n(144),function(e){return r.a.send("VKWebAppCallAPIMethod",{method:"users.get",params:Object(v.a)({},e,{v:"5.95"})})}),_=function(e){var t=e.id,n=e.go,a=e.fetchedUser,o=e.access_token;return s.a.createElement(f.Panel,{id:t},console.log(a),s.a.createElement(f.PanelHeader,null,"VK Tools"),a&&s.a.createElement(f.Group,{title:"\u0412\u0430\u0448 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"},s.a.createElement(f.ListItem,{before:a.photo_200?s.a.createElement(f.Avatar,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),s.a.createElement(f.Group,{title:"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f"},s.a.createElement(f.Div,null,s.a.createElement(f.Button,{size:"xl",level:"2",onClick:n,"data-to":"friends"},"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ",o))))},b=n(146),k=n(145),E=n.n(k),I=n(105),y=n.n(I),w=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={usersInfo:[],isSpinner:!0,countFriendsInstagram:0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getFriends",value:function(){var e=this,t=0;this.friendsInterval=setInterval(function(){r.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:{count:100,offset:t,fields:"nickname, domain, sex, bdate, city, country, timezone, photo_50, photo_100, photo_200_orig, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities ",access_token:e.props.access_token,v:"5.95"}}).then(function(n){console.log(n),e.setState(function(e){var t;return(t=e.usersInfo).push.apply(t,Object(b.a)(n.data.response.items))}),t+=100}).catch(function(e){return console.log("ERR getFriends",e)})},2e3)}},{key:"goInstagram",value:function(e){return window.open("https://www.instagram.com/".concat(e))}},{key:"prev",value:function(e){clearInterval(this.subscribersInterval),clearInterval(this.friendsInterval),this.props.go(e)}},{key:"componentDidMount",value:function(){this.getFriends()}},{key:"render",value:function(){var e=this;return s.a.createElement(f.Panel,{id:this.props.id},s.a.createElement(f.PanelHeader,{left:s.a.createElement(f.HeaderButton,{onClick:this.prev.bind(this),"data-to":"home"},this.osname===f.IOS?s.a.createElement(E.a,null):s.a.createElement(y.a,null))},"\u0414\u0440\u0443\u0437\u044c\u044f"),s.a.createElement(f.Group,{title:"\u0414\u0440\u0443\u0437\u044c\u044f \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435 ".concat(this.state.usersInfo.length)},this.state.error,this.state.isSpinner&&s.a.createElement(f.Cell,{size:"l"},s.a.createElement(f.Spinner,{size:"large",style:{margin:"150px 0"}})),this.state.usersInfo.map(function(t,n){return s.a.createElement("div",{key:n},s.a.createElement(f.Cell,{size:"l",description:t.status||"",before:s.a.createElement(f.Avatar,{src:t.photo_200}),bottomContent:s.a.createElement(f.Button,{onClick:e.goInstagram.bind(e,t.instagram)},"Instagram")},"".concat(t.first_name," ").concat(t.last_name),t))})))}}]),t}(s.a.Component),A=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,access_token:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppAccessTokenReceived":e.setState({access_token:t.detail.data.access_token}),console.log("access_token",t.detail.data.access_token),e.getUser();break;default:console.log(t.detail)}}),m.a.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends,status,wall,groups"})}},{key:"getUser",value:function(){var e=this;g({fields:"photo_200",access_token:this.state.access_token}).then(function(t){console.log(t),e.setState({fetchedUser:t.data})})}},{key:"render",value:function(){return s.a.createElement(f.View,{activePanel:this.state.activePanel},s.a.createElement(_,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,access_token:this.state.access_token}),s.a.createElement(w,{id:"friends",go:this.go,access_token:this.state.access_token}))}}]),t}(s.a.Component);r.a.send("VKWebAppInit",{}).then(function(e){return console.log("VKWebAppInit",e)}).catch(function(e){return console.error("ERR VKWebAppInit",e)}),c.a.render(s.a.createElement(A,null),document.getElementById("root"))}},[[147,1,2]]]);
//# sourceMappingURL=main.65c9c363.chunk.js.map