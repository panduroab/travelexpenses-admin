import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import {uiList} from 'material-ui/List';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Item from './Item';
import './styles.css';

const styles = {
    CardHeader: {
        fontFamily: 'Avenir-Book',
        color: '#4a4a4a',
        fontSize: 20,
        paddingBottom: 0,
        height: 76,
        paddingTop: 0
    },
    CardText: {
        padding: 0
    }
}

class List extends React.Component {
    static childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        }
    }

    render() {
        let i = 0;
        let events;

        events = this.props.events.map( (event) => {
            return <Item
                  employee={event.employee}
                  project={event.project}
                  dateRange={event.dateRange}
                  location={event.location}
                  remaining={event.remaining}
                  className='item'
                  key={i++}
            ></Item>
        });

        return (
            <Card >
                <span className='card-name'>{this.props.name}</span>
                <CardHeader className='card-header' style={ styles.CardHeader } >
                    <ul className='statuses'>
                        <li className='done'> Done </li>
                        <li className='pending'>Pending</li>
                        <li className='traveling'>Traveling</li>
                    </ul>
                </CardHeader>

                <CardText style={styles.CardText} className='card-text'>
                    <uiList style={styles.List} className='list'>
                      {events}
                    </uiList>
                </CardText>
            </Card>
        );
    }
}

List.propTypes = {
  name:   React.PropTypes.string.isRequired,
  events: React.PropTypes.array.isRequired
}


export default List;
