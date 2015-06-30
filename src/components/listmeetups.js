import React from 'react';
import Action from '../flux/actions'

export default class ListMeetups extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      console.log('this.props', this.props);
      let appstate = this.props.appstate;
      let meetups = appstate.meetups;
      let position = appstate.position;
      if (!meetups || !position) {
          return null;
      }
      console.log('ListMeetups - meetups', meetups);
      let items = [];
      for (var item of meetups.results) {
          items.push(
                  <div key={item.id}>
                      {item.name}
                  </div>
              );
      };
      return (
        <div>
          {items}
        </div>
      );
  }
}
