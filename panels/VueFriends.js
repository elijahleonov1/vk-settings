import {
    Panel,
    Button,
    Group,
    Div,
    Avatar,
    PanelHeader,
    HeaderButton,
    Cell,
    IOS,
    Spinner,
    Progress
} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import React from 'react';

import PropTypes from 'prop-types';

import {Friends, Users} from '../api';

class VueFriends extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            usersInfo: [],
            isSpinner: true
        };
    }

    componentDidMount () {
        this.getFriends();
    }

    getFriends () {
        let countFriendsInterval = 100;
        let offsetFriendsInterval = 0;

        this.friendsInterval = setInterval(() => {

            Friends.getFriends({
                count: 100,
                offset: offsetFriendsInterval,
                // fields: 'nickname, domain, sex, bdate, city, country, timezone, photo_200, has_mobile, contacts, education, online, relation, last_seen, status, can_write_private_message, can_see_all_posts, can_post, universities ',
                access_token: this.props.access_token,
            })
                .then(res => {

                    if(!res.data.response.items.length) {
                        clearInterval(this.friendsInterval);
                    } else {
                        offsetFriendsInterval += countFriendsInterval;

                        // this.setState(state => state.usersInfo.push(...res.data.response.items));
                        // this.forceUpdate();

                        this.getUsersInfo(res.data.response.items)
                            .then(res => {
                                console.log(res);
                            })
                            .catch(e => console.log('ERR GET Users', e));
                    }
                    this.setState({isSpinner: false});

                })
                .catch(e => console.log('ERR GET Friends', e));

        }, 2000);
    }

    getUsersInfo (ids) {
        const strFriendsIds = ids.slice(0, 100).join(',');
        return Users.getUsers({
            user_ids: strFriendsIds,
            fields: 'photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me',
            access_token: this.props.access_token
        });
    }

    prev (e) {
        clearInterval(this.friendsInterval);
        this.props.go(e);
    }

    render () {
        return (
            <Panel id={this.props.id}>
                <PanelHeader
                    left={<HeaderButton onClick={this.prev.bind(this)} data-to="home">
                        {this.osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    Друзья
                </PanelHeader>
                <Group title={`Друзья ${this.state.usersInfo.length}`}>
                    {
                        this.state.isSpinner &&
                        <Cell size="l">
                            <Spinner size="large" style={{margin: '150px 0'}}/>
                        </Cell>
                    }
                    {
                        this.state.usersInfo &&
                        this.state.usersInfo.map((friend, index) => {
                            return (
                                <div key={index}>
                                    {
                                        friend.instagram &&
                                        <Cell
                                            size="l"
                                            description={friend.status || ''}
                                            before={<Avatar src={friend.photo_200}/>}
                                            bottomContent={<Button>friend.instagram</Button>}
                                        >
                                            {`${friend.first_name} ${friend.last_name}`}
                                        </Cell>
                                    }
                                </div>
                            );
                        })
                    }
                </Group>
            </Panel>
        );
    }
}

VueFriends.propTypes = {
    go: PropTypes.func.isRequired,
    access_token: PropTypes.string.isRequired
};

export default VueFriends;
