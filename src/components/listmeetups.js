import React from 'react';

export default class ListMeetups extends React.Component {
  constructor(props) {
      super(props);
  }

render() {
    let meetups = this.props.appstate.meetups;
    if (!meetups) {
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
