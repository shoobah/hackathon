import React from 'react';
import Store from '../flux/store'
import Action from '../flux/actions'
import Top from './top'
import ListMeetups from './listmeetups'
import Theme from '../style/htheme';
import Mui from 'material-ui';

let ThemeManager = new Mui.Styles.ThemeManager();
ThemeManager.setTheme(Theme);

export default class MeetupApp extends React.Component {
    constructor(props) {
        super(props);
    }
    getChildContext() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
    }

    componentDidMount() {
    }

    render() {
        console.info('MeetupApp', this)
        return (
          <div>
            <ListMeetups appstate={this.props.appstate} />
          </div>
        );
    }
};

MeetupApp.childContextTypes = {
    muiTheme: React.PropTypes.object
};
