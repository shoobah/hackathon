import Moment        from 'moment';
import Dispatcher from './dispatcher';
import Constants  from './constants';
import Api        from './apicalls';

export default {
    // weather: () => {
    //     Api.weather().then((data) => {
    //         Dispatcher.handleAction({
    //             type: Constants.WEATHER,
    //             data: data
    //         })
    //     })
    // },
    reactmeetups: (token) => {
        Api.meetups(token).then((meetups) => {
            console.info('Getting meetups', meetups)
            Dispatcher.handleAction({
                type: Constants.FETCH,
                data: meetups
            });
        })
    },
    savetoken: (token) => {
        Dispatcher.handleAction({
            type: Constants.LOGIN,
            data: token
        });
    }
}
