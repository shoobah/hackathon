import React from 'react';
import Store from '../flux/store'
import Action from '../flux/actions'
import Top from './top'
import mui from 'material-ui';

let ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.LIGHT);

export default class MeetupApp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
      // this.state = Store.getState();
  }
  getChildContext() {
      return {
          muiTheme: ThemeManager.getCurrentTheme()
      };
  }

    // _onChange() {
    //     this.setState(Store.getState());
    // }

    // componentWillMount() {
    //     console.info('componentWillMount');
    //     Action.reactmeetups();
    // }

    // componentDidMount() {
    //     Store.addChangeListener(this._onChange.bind(this));
    //     // window.setInterval(function() {
    //     //     Action.reactmeetups();
    //     // }, 10000);
    // }

    // componentWillUnmount() {
    //     Store.removeChangeListener(this._onChange.bind(this));
    // }

    render() {
        return (
          <div>
            <Top />
          </div>
        );
    }
};

MeetupApp.childContextTypes = {
    muiTheme: React.PropTypes.object
};
