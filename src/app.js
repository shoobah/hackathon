import React     from  'react';
// import MeetupApp from  './components/meetupapp';
import tapPlugin from 'react-tap-event-plugin';
// import Auth from './components/auth';
// import Top from './components/top';
import {Router, Route} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

tapPlugin();

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

        // <Route path='/?access_token=:access_token&token_type=:token_type&expires_in=:expires_in' component={MeetupApp} />
React.render((
    <Router history={history}>
        <Route path='/' component={App} />
    </Router>
), document.body);
