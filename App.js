import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import {Users} from './api';

import Home from './panels/Home';
import VueFriends from './panels/VueFriends';

class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            activePanel: 'home',
            fetchedUser: null,
            access_token: null
        };
    }

    componentDidMount () {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppAccessTokenReceived':
                    this.setState({ access_token : e.detail.data.access_token });
                    console.log('access_token', e.detail.data.access_token);
                    this.getUser();
                    break;
                default:
                    console.log(e.detail);
            }
        });
        connect.send("VKWebAppGetAuthToken", {"app_id": 6940370, "scope": "friends,status,wall,groups"});
    }

    getUser() {
        Users.getUsers({
            fields: 'photo_200,city,title',
            access_token: this.state.access_token
        })
            .then(res => this.setState({ fetchedUser : res.data.response[0]}))
            .catch(e => console.log('ERR GET User', e));
    }

    go = (e) => {
        this.setState({activePanel: e.currentTarget.dataset.to})
    };

    render () {
        return (
            <View activePanel={this.state.activePanel}>
                <Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} access_token={this.state.access_token}/>
                <VueFriends
                    id="friends"
                    go={this.go}
                    access_token={this.state.access_token}
                />
            </View>
        );
    }
}

export default App;
