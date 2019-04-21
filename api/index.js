import fetchJsonp from 'fetch-jsonp';
import connect from '@vkontakte/vkui-connect-promise';

const getProfilesUrl = (method, opt) => {
    let urlOpts = '';
    let optKeys = Object.keys(opt);
    optKeys.forEach(item => urlOpts += `${item}=${opt[item]}&`);
    return `https://api.vk.com/method/${method}?${urlOpts}v=5.80`
};

const API = (method, opt) => {
    return fetchJsonp(getProfilesUrl(method, opt))
      .then(res => res.json())
      .catch(error => console.error(error));
};
const Account = {
    getInfo (opts) {
        const method = 'account.getInfo';
        return API(method, opts);
    }
};

const Users = {
    getUsers (opts) {
        const method = 'users.get';
        // return API(method, opts);
        return connect.send('VKWebAppCallAPIMethod', {method, params: {...opts, v: '5.95'}});
    },
    getFollowers (opts) {
        const method = 'users.getFollowers';
        return API(method, opts);
    }
};

const Friends = {
    getFriends (opts) {
        const method = 'friends.get';
        // return API(method, opts);
        return connect.send('VKWebAppCallAPIMethod', {method, params: {...opts, v: '5.95'}});
    },
    getRequests (opts) {
        const method = 'friends.getRequests';
        return API(method, opts);
    },
    deleteFriends (opts) {
        const method = 'friends.delete';
        return API(method, opts);
    }
};

const Likes = {
    getLikePosts (opts) {
        const method = 'fave.getPosts';
        return API(method, opts);
    },
    getLikePhotos (opts) {
        const method = 'fave.getPhotos';
        return API(method, opts);
    },
    deleteLike (opts) {
        const method = 'likes.delete';
        return API(method, opts);
    }
};

export {
    Account,
    Users,
    Friends,
    Likes
};