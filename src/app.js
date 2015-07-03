import React from 'react';
import tapPlugin from 'react-tap-event-plugin';
import MeetupApp from './components/meetupapp';

tapPlugin();

class App extends React.Component {
    render() {
        return (
            <div style={{fontFamily: 'Roboto, sans-serif'}}>
                <MeetupApp />
            </div>
        );
    }
}

React.render((new App()).render(), document.getElementsByTagName('body')[0]);
