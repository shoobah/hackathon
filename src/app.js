import React     from  'react';
import MeetupApp from  './components/meetupapp';
import tapPlugin from 'react-tap-event-plugin';
import Router from 'react-router';
import Auth from './components/auth';
import Top from './components/top';

tapPlugin();

let Route = Router.Route;
let RouteHandler = Router.RouteHandler;
let DefaultRoute = Router.DefaultRoute;

let Routes = (
    <Route handler={App}>
        <DefaultRoute handler={Auth} />
        <Route path='/?access_token=:access_token&token_type=:token_type&expires_in=:expires_in' handler={MeetupApp} />
        <Route path='/' handler={Auth} />
    </Route>
    )

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
    }

    _onChange() {
        this.setState(Store.getState());
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange.bind(this));
    }

    render() {
        console.log('...state', ...state);
        return (
            <div>
                <Top appstate={this.state}/>
                <RouteHandler {...state} appstate={this.state}/>
            </div>
        );
    }
}

Router.run(Routes, Router.HashLocation, (Root) => {
    React.render(<Root />, document.getElementsByTagName('body')[0]);
})
