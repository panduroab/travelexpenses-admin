import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
    Header: {
        backgroundColor: "#03a9f4"
    },
    Title: {
        float: "left"
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
                title={<span style={styles.Title}> iTexico | Travel Expenses</span>} >
            </AppBar>
        );
    }
}

export default Header;