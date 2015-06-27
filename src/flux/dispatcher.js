var Dispatcher = require('flux').Dispatcher;

class MyDispatcher extends Dispatcher{
    handleAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}

let _Dispatcher = new MyDispatcher();

export default _Dispatcher;
