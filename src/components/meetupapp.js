import React from 'react';
import Store from '../flux/store';
import Action from '../flux/actions';
import Theme from '../style/htheme';
import Mui from 'material-ui';
import Top from './top';
import ListMeetups from './listmeetups';
import Radium from 'radium';

const ThemeManager = new Mui.Styles.ThemeManager();
ThemeManager.setTheme(Theme);

// @Radium
export default class MeetupApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = Store.getState();
    }
    getChildContext() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
    }

    onChange() {
        this.setState(Store.getState());
    }

    getQueryVariable(variable) {
        var query = window.location.hash.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] === variable) {
                return pair[1];
            }
        }
        return (false);
    }

    authorizeWithMeetup() {
        const token = this.getQueryVariable('access_token');
        let key = '';
        if (/localhost/.test(window.location)) {
            key = 'cjvko42h31onkda74rp5mjn12f';
        } else {
            key = 'drqkn2encvo3m830liuf06utv';
        }
        if (!token) {
            window.location = `https://secure.meetup.com/oauth2/authorize?client_id=${key}&response_type=token&redirect_uri=${window.location}`;
        }
        Action.savetoken(token);
    }


    componentDidMount() {
        this.authorizeWithMeetup();

        Store.addChangeListener(this.onChange.bind(this));
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.onChange.bind(this));
    }

    render() {
        return (
          <div>
            <Top appstate={this.state}/>
            <ListMeetups appstate={this.state} />
          </div>
        );
    }
}

MeetupApp.childContextTypes = {
    muiTheme: React.PropTypes.object
};
