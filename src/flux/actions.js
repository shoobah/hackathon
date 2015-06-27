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
    reactmeetups: () => {
        Api.meetups().then((meetups) => {
            console.info('Getting meetups', meetups)
            Dispatcher.handleAction({
                type: Constants.FETCH,
                data: meetups
            });
        })
    }
}
