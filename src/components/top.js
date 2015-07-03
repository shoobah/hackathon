import React from 'react';
import Mui from 'material-ui';
import Action from '../flux/actions';
import moment from 'moment';

moment.locale('sv');

export default class Top extends React.Component {
  constructor(props) {
      super(props);
      this.AppBar = Mui.AppBar;
      this.LeftNav = Mui.LeftNav;
      this.MenuItem = Mui.MenuItem;
  }

  handleMenuChange(e, selectedIndex, menuItem) {
      if (menuItem.action) {
          switch (menuItem.action){
              case 'reactmeetups':
                  Action.reactmeetups(this.props.appstate.token, this.props.appstate.position);
                  break;
          }
      }
  }

  handleLeftTap() {
      this.refs.theLeftMenu.toggle();
  }

  render() {
    let myStyle = {
        width  : '100%',
        height : '64px'
    };
    let menuItems = [
        {action: 'reactmeetups', text: 'Load meetups'},
        {route: 'customization', text: 'Customization'},
        {route: 'components', text: 'Components'},
        {type: this.MenuItem.Types.SUBHEADER, text: 'Resources'},
        {
            type    : this.MenuItem.Types.LINK,
            payload : 'https://github.com/shoobah/hackathon',
            text    : 'Project'
        },
        {
            text     : 'Disabled',
            disabled : true
        },
        {
            type     : this.MenuItem.Types.LINK,
            payload  : 'https://www.google.com',
            text     : 'Disabled Link',
            disabled : true
        }
    ];
    let meetups = this.props.appstate.meetups;
    let heading = 'Meetups within 200km of your position';
    if (meetups) {
        if (meetups.meta) {
            heading += ' ' + moment(meetups.meta.updated).format('YYYY-MM-DD');
        } else {
            heading += ' waiting for data';
        }
    }
    return (
        <div>
            <this.AppBar title={heading} style={myStyle} onLeftIconButtonTouchTap={this.handleLeftTap.bind(this)} iconClassNameRight="muidocs-icon-navigation-expand-more" />
            <this.LeftNav docked={false} menuItems={menuItems} ref="theLeftMenu" onChange={this.handleMenuChange.bind(this)}/>
        </div>
    );
}
}
