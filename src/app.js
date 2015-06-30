import React     from  'react';
import MeetupApp from  './components/meetupapp';
import tapPlugin from 'react-tap-event-plugin';
import Router from 'react-router';

tapPlugin();

let Route = Router.Route;
let RouteHandler = Router.RouteHandler;
let DefaultRoute = Router.DefaultRoute;

let Routes = (
    <Route handler={App}>
        <DefaultRoute handler={MeetupApp} />
        <Route path='/?access_token=:access_token&token_type=:token_type&expires_in=:expires_in' handler={MeetupApp} />
        <Route path='/' handler={MeetupApp} />
    </Route>
    )

class App extends React.Component {
    render() {
        return (
            <div>
                <RouteHandler />
            </div>
        );
    }
}

Router.run(Routes, Router.HashLocation, (Root) => {
    React.render(<Root />, document.getElementsByTagName('body')[0]);
})
