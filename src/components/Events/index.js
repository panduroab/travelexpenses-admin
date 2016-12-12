import React from 'react';
import List from './List';

const styles = {
    List: {
        margin: '59px 60px',
    }
}

class Events extends React.Component {

    render() {
        return (
            <div >
                <div style={styles.List}>
                    <List events={this.props.events} name={'Pending'}/>
                </div>
            </div>
        );
    }
}

Events.propTypes = {
  events: React.PropTypes.array.isRequired
}

export default Events;
