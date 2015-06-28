import React from 'react';
import mui from 'material-ui';
import Action from '../flux/actions'
import Moment from 'moment';

let AppBar = mui.AppBar;

Moment.locale('sv');

export default class Top extends React.Component {
  constructor(props) {
      super(props);
  }

  handleLeftTap(e) {
      Action.reactmeetups(this.props.appstate.token)
  }

  render() {
    let myStyle = {
        width:'100%',
        height: '64px'
    }
    let meetups = this.props.appstate.meetups;
    let heading = 'Meetup finder';
    if (meetups) {
        heading += ' ' + Moment(meetups.meta.updated).format('LLLL')
    }
    return (
        <div>
            <AppBar title={heading} style={myStyle} onLeftIconButtonTouchTap={this.handleLeftTap.bind(this)} iconClassNameRight="muidocs-icon-navigation-expand-more" />
        </div>
    );
}
}
