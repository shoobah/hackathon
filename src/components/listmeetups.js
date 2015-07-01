import React from 'react';
import Action from '../flux/actions'
import Mui from 'material-ui';
import WaitingGif from '../images/Mickey_Waiting_by_mariomaster88.gif'
import EventIcon from '../images/event_icon.gif'

let List = Mui.List;
let ListItem = Mui.ListItem;
let ActionInfo = Mui.ActionInfo;

export default class ListMeetups extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      let appstate = this.props.appstate;
      let meetups = appstate.meetups;
      if (!meetups) {
          return (
              <div>
                <img src={WaitingGif} />
              </div>
            )
      }
      console.log('ListMeetups - meetups', meetups);
      let items = [];
      for (var item of meetups.results) {
          items.push(
                  <ListItem leftIcon={<img src={EventIcon} />} key={item.id}>
                    {item.name} - {item.venue.address_1}, {item.venue.city}
                  </ListItem>
              );
      };
      return (
        <div>
          <List style={{listStyle: 'none'}}>
            {items}
          </List>
        </div>
      );
  }
}
