(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(350)},350:function(e,t,n){"use strict";n.r(t);var a=n(54),c=n(1),o=n.n(c),r=n(105),s=n.n(r),i=(n(331),n(332),n(144)),u=n(67),l=n(68),f=n(71),h=n(69),d=n(72),p=n(9),m=(n(349),n(70)),b=n.n(m),k=function(e,t){return b()(function(e,t){var n="";return Object.keys(t).forEach(function(e){return n+="".concat(e,"=").concat(t[e],"&")}),"https://api.vk.com/method/".concat(e,"?").concat(n,"v=5.80")}(e,t)).then(function(e){return e.json()}).catch(function(e){return console.error(e)})},v=function(e){return k("friends.getRequests",e)},E=function(e){var t=e.id,n=e.go,a=e.fetchedUser;e.access_token;return o.a.createElement(p.Panel,{id:t},o.a.createElement(p.PanelHeader,null,"\u0412\u041a \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),a&&o.a.createElement(p.Group,{title:"User Data Fetched with VK Connect"},o.a.createElement(p.ListItem,{before:a.photo_200?o.a.createElement(p.Avatar,{src:a.photo_200}):null,description:a.city&&a.city.title?a.city.title:""},"".concat(a.first_name," ").concat(a.last_name))),o.a.createElement(p.Group,{title:"Navigation Example"},o.a.createElement(p.Div,null,o.a.createElement(p.Button,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438 \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430\u043c\u0438"))))},g=n(143),_=n.n(g),I=n(106),j=n.n(I),O=function(e){function t(e){return Object(u.a)(this,t),Object(f.a)(this,Object(h.a)(t).call(this,e))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(p.Panel,{id:this.props.id},o.a.createElement(p.PanelHeader,{left:o.a.createElement(p.HeaderButton,{onClick:this.props.go,"data-to":"home"},this.osname===p.IOS?o.a.createElement(_.a,null):o.a.createElement(j.a,null))},"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),o.a.createElement(p.Group,{title:"Standart size"},this.props.userInfo.map(function(e){return o.a.createElement(p.Cell,{size:"l",description:"VKontakte",before:o.a.createElement(p.Avatar,{src:e.photo_200_orig}),bottomContent:o.a.createElement(p.Button,null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),key:e.id},"\u0410\u0440\u0442\u0443\u0440 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u044c\u0446\u044f\u043d")})))}}]),t}(o.a.Component),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(f.a)(this,Object(h.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,access_token:"7668754bb5a37d4345bb0874fc39a92dedeb183778bc9542f035ebeaa96f0bb939f1c5bfdc7a018b8f515",friendsIds:null,userInfo:[]},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;a.a.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends,status,wall,groups"}).then(function(t){e.setState({access_token:t.detail.data.access_token}),e.getRequests()}).catch(function(e){return console.error(e)}),a.a.send("VKWebAppGetUserInfo",{}).then(function(t){e.setState({fetchedUser:t.detail.data})}).catch(function(e){return console.error(e)})}},{key:"getRequests",value:function(){var e=this;return v({count:1e3,out:1,access_token:this.state.access_token}).then(function(t){console.log(t),e.setState({friendsIds:t.response.items}),e.getUserInfo()}).catch(function(e){return console.error(e)})}},{key:"getUserInfo",value:function(){var e=this,t=this.state.friendsIds.slice(0,100).join(","),n="https://api.vk.com/method/users.get?v=5.52&access_token=".concat(this.state.access_token,"&user_ids=").concat(t,"&fields=photo_200_orig,status");return b()(n).then(function(e){return e.json()}).then(function(t){e.setState(function(e){var n;(n=e.userInfo).push.apply(n,Object(i.a)(t.response))}),console.log(e.state.userInfo)}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return o.a.createElement(p.View,{activePanel:this.state.activePanel},o.a.createElement(E,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,access_token:this.state.access_token}),o.a.createElement(O,{id:"persik",go:this.go,access_token:this.state.access_token,userInfo:this.state.userInfo}))}}]),t}(o.a.Component);a.a.send("VKWebAppInit",{}).then(function(e){return console.log("VKWebAppInit success:",e)}).catch(function(e){return console.error("VKWebAppInit error:",e)}),s.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.1dcb4dc4.chunk.js.map