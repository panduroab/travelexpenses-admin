import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const styles = {
    Header: {
        backgroundColor: "#03a9f4"
    },
    Title: {
        float: "left"
    },
    Company: {
        fontWeight: "bold"
    }
};

class Header extends React.Component {

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    render() {
        return (
            <AppBar
                style={styles.Header}
                title={
                  <span style={styles.Title}>
                    <span style={styles.Company}>
                      iTx |
                    </span>
                     &nbsp;Travel Expenses
                  </span>
                }>
            </AppBar>
        );
    }
}

export default Header;
