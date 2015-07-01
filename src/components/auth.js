import React from 'react';
import Action from '../flux/actions'

export default class Auth extends React.Component {
  constructor(props) {
      super(props);
  }
    getQueryVariable(variable) {
        var query = window.location.hash.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] == variable) {return pair[1];}
        }
        return (false);
    }

    // authorizeWithMeetup() {
    //     let token = this.getQueryVariable('access_token');
    //     let key = ''
    //     if (/localhost/.test(window.location)) {
    //         key = 'cjvko42h31onkda74rp5mjn12f'
    //     } else {
    //         key = 'drqkn2encvo3m830liuf06utv'
    //     }
    //     if (!token) {
    //         window.location = `https://secure.meetup.com/oauth2/authorize?client_id=${key}&response_type=token&redirect_uri=${window.location}`;
    //     }
    //     Action.savetoken(token);
    // }

    componentDidMount() {
        //this.authorizeWithMeetup();
    }

render() {
    return (
      <div>
        <h1>Hang on! Trying to authorize with meetup!</h1>
      </div>
    );
}
}
