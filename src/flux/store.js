import {EventEmitter} from 'events';
import Constants      from './constants';
import Dispatcher     from './dispatcher';
import 'babel-core/polyfill';

let theAppState = {
};

export class Store extends EventEmitter {
    getState() {
        return theAppState;
    }

    emitChange() {
        this.emit('CHANGE');
    }

    addChangeListener(cb) {
        this.on('CHANGE', cb);
    }

    removeChangeListener(cb) {
        this.removeListener('CHANGE', cb);
    }
}

let _Store = new Store ();

export default _Store;

Dispatcher.register((payload) => {
    let action = payload.action;
    let data = action.data;
    switch (action.type) {
        case Constants.FETCH:
            theAppState.meetups = data;
            break;
        case Constants.LOGIN:
            theAppState.token = data;
            break;
    }
    _Store.emitChange();
});
