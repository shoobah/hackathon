import React from 'react';
import Mui   from 'material-ui';

let LeftNav = Mui.LeftNav;

export default class LeftNavigation extends React.Component {
  constructor(props) {
      super(props);
  }

render() {
    let menuItems = [
        {route: 'get-started', text: 'Get Started'},
        {route: 'customization', text: 'Customization'},
        {route: 'components', text: 'Components'},
        {type: MenuItem.Types.SUBHEADER, text: 'Resources'},
        {
            type    : MenuItem.Types.LINK,
            payload : 'https://github.com/callemall/material-ui',
            text    : 'GitHub'
        },
        {
            text     : 'Disabled',
            disabled : true
        },
        {
            type     : MenuItem.Types.LINK,
            payload  : 'https://www.google.com',
            text     : 'Disabled Link',
            disabled : true
        },
    ];
    return (
      <LeftNav docked={false} menuItems={menuItems} />
    );
}
}
