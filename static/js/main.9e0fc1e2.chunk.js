(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(350)},350:function(e,t,n){"use strict";n.r(t);var o=n(54),a=n(1),c=n.n(a),s=n(105),r=n.n(s),i=(n(331),n(332),n(144)),u=n(67),l=n(68),h=n(71),f=n(69),p=n(72),d=n(9),m=(n(349),n(70)),k=n.n(m),g=function(e,t){return k()(function(e,t){var n="";return Object.keys(t).forEach(function(e){return n+="".concat(e,"=").concat(t[e],"&")}),"https://api.vk.com/method/".concat(e,"?").concat(n,"v=5.80")}(e,t)).then(function(e){return e.json()}).catch(function(e){return console.error(e)})},v=function(e){return g("friends.get",e)},b=function(e){var t=e.id,n=e.go,o=e.fetchedUser;e.access_token;return c.a.createElement(d.Panel,{id:t},c.a.createElement(d.PanelHeader,null,"\u0412\u041a \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),o&&c.a.createElement(d.Group,{title:"User Data Fetched with VK Connect"},c.a.createElement(d.ListItem,{before:o.photo_200?c.a.createElement(d.Avatar,{src:o.photo_200}):null,description:o.city&&o.city.title?o.city.title:""},"".concat(o.first_name," ").concat(o.last_name))),c.a.createElement(d.Group,{title:"Navigation Example"},c.a.createElement(d.Div,null,c.a.createElement(d.Button,{size:"xl",level:"2",onClick:n,"data-to":"persik"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044e \u0434\u0440\u0443\u0437\u044c\u044f\u043c\u0438 \u0438 \u043f\u043e\u0434\u043f\u0438\u0441\u043a\u0430\u043c\u0438"))))},E=n(143),_=n.n(E),I=n(106),j=n.n(I),O=function(e){function t(e){return Object(u.a)(this,t),Object(h.a)(this,Object(f.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(d.Panel,{id:this.props.id},c.a.createElement(d.PanelHeader,{left:c.a.createElement(d.HeaderButton,{onClick:this.props.go,"data-to":"home"},this.osname===d.IOS?c.a.createElement(_.a,null):c.a.createElement(j.a,null))},"\u041f\u0430\u043d\u0435\u043b\u044c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f."),c.a.createElement(d.Group,{title:"Standart size"},this.props.userInfo.map(function(e){return c.a.createElement(d.Cell,{size:"l",description:"VKontakte",before:c.a.createElement(d.Avatar,{src:e.photo_200_orig}),bottomContent:c.a.createElement(d.Button,null,"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),key:e.id},"\u0410\u0440\u0442\u0443\u0440 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u044c\u0446\u044f\u043d")})))}}]),t}(c.a.Component),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).go=function(e){n.setState({activePanel:e.currentTarget.dataset.to})},n.state={activePanel:"home",fetchedUser:null,access_token:null,friendsIds:null,userInfo:[]},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.send("VKWebAppGetAuthToken",{app_id:6940370,scope:"friends,status,wall,groups"}).then(function(t){console.log("VKWebAppGetAuthToken",t),e.setState({access_token:t.data.access_token}),e.getRequests()}).catch(function(e){return console.error(e)}),o.a.send("VKWebAppGetUserInfo",{}).then(function(t){console.log("VKWebAppGetUserInfo",t),e.setState({fetchedUser:t.data})}).catch(function(e){return console.error(e)})}},{key:"getRequests",value:function(){var e=this;return console.log("getRequests",this.state.access_token),v({count:1e3,access_token:this.state.access_token}).then(function(t){console.log("getRequests data",t),e.setState({friendsIds:t.response.items}),e.getUserInfo()}).catch(function(e){return console.error(e)})}},{key:"getUserInfo",value:function(){var e=this,t=this.state.friendsIds.slice(0,100).join(","),n="https://api.vk.com/method/users.get?v=5.52&access_token=".concat(this.state.access_token,"&user_ids=").concat(t,"&fields=photo_200_orig,status");return k()(n).then(function(e){return e.json()}).then(function(t){e.setState(function(e){var n;(n=e.userInfo).push.apply(n,Object(i.a)(t.response))}),console.log(e.state.userInfo)}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){return c.a.createElement(d.View,{activePanel:this.state.activePanel},c.a.createElement(b,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,access_token:this.state.access_token}),c.a.createElement(O,{id:"persik",go:this.go,access_token:this.state.access_token,userInfo:this.state.userInfo}))}}]),t}(c.a.Component);o.a.send("VKWebAppInit",{}).then(function(e){return console.log("VKWebAppInit success:",e)}).catch(function(e){return console.error("VKWebAppInit error:",e)}),r.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[145,1,2]]]);
//# sourceMappingURL=main.9e0fc1e2.chunk.js.map