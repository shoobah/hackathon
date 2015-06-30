import React from 'react';
import Mui from 'material-ui';
import Action from '../flux/actions'
import Moment from 'moment';

Moment.locale('sv');

export default class Top extends React.Component {
  constructor(props) {
      super(props);
      this.AppBar = Mui.AppBar;
      this.LeftNav = Mui.LeftNav;
      this.MenuItem = Mui.MenuItem;
  }

  handleLeftTap(e) {
      //Action.reactmeetups(this.props.appstate.token, this.props.appstate.position);
      this.refs.theLeftMenu.toggle();
  }

  render() {
    let myStyle = {
        width:'100%',
        height: '64px'
    }
    let menuItems = [
        {route: 'get-started', text: 'Get Started'},
        {route: 'customization', text: 'Customization'},
        {route: 'components', text: 'Components'},
        {type: this.MenuItem.Types.SUBHEADER, text: 'Resources'},
        {
            type    : this.MenuItem.Types.LINK,
            payload : 'https://github.com/shoobah/hackathon',
            text    : 'Project'
        },
        {
            type: this.MenuItem.Types.LINK,
            text: 'Sunet',
            payload: 'http://www.sunet.se'
        },
    ];
    let meetups = this.props.appstate.meetups;
    let heading = 'Meetup finder';
    if (meetups) {
        if (meetups.meta) {
            heading += ' ' + Moment(meetups.meta.updated).format('LLLL')
        } else {
            heading += ' waiting for data'
        }
    }
    return (
        <div>
            <this.AppBar title={heading} style={myStyle} onLeftIconButtonTouchTap={this.handleLeftTap.bind(this)} iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <this.LeftNav docked={false} menuItems={menuItems} ref="theLeftMenu"/>
        </div>
    );
}
}
