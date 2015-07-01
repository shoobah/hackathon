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
        this.state = Store.getState();
    }
    getChildContext() {
        return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
    }

    _onChange() {
        this.setState(Store.getState());
    }

    componentDidMount() {
        Store.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        Store.removeChangeListener(this._onChange.bind(this));
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
