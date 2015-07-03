import React from 'react';
import WaitingGif from '../images/Mickey_Waiting_by_mariomaster88.gif';
import EventIcon from '../images/event_icon.gif';

export default class ListMeetups extends React.Component {
  constructor(props) {
      super(props);
  }

  listItemClick(e) {
      console.info('click', e);
  }

  render() {
      let appstate = this.props.appstate;
      let meetups = appstate.meetups;
      if (!meetups) {
          return (
              <div>
                <img src={WaitingGif} />
              </div>
            );
      }
      //- {item.venue || item.venue.address_1 ? item.venue.address_1 : 'n/a'}, {item.city}
      let items = [];
      for (var item of meetups.results) {
          items.push(
              <ListItem
                  leftIcon={<img src={EventIcon}
                  onClick={this.listItemClick.bind(this)}/>}
                  key={item.id}>
                  {item.name}
              </ListItem>
          );
      }
      return (
        <div>
          <List style={{listStyle: 'none'}}>
            {items}
          </List>
        </div>
      );
  }
}
