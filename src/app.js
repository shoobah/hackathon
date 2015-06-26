import React    from  'react';

class App extends React.Component {
    render() {
        return (
            <div>
                Hej!
            </div>
        );
    }
}

React.render((new App()).render(), document.getElementsByTagName('body')[0]);
