import React     from  'react';
import MeetupApp from  './components/meetupapp';
import tapPlugin from 'react-tap-event-plugin';

tapPlugin();

class App extends React.Component {
    render() {
        return (
            <div>
                <MeetupApp />
            </div>
        );
    }
}

React.render((new App()).render(), document.getElementsByTagName('body')[0]);
