import React from 'react';
import mui from 'material-ui';
import MQ from 'react-responsive';

let AppBar = mui.AppBar;

export default class Top extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
        <div>
            <MQ minDeviceWidth={1224}>
                <AppBar title="COMPUTER" iconClassNameRight="muidocs-icon-navigation-expand-more" />
            </MQ>
            <MQ maxDeviceWidth={1224}>
                <AppBar title="PHONE" iconClassNameRight="muidocs-icon-navigation-expand-more" />
            </MQ>
        </div>
    );
}
}
