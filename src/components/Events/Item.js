import React from 'react';
import Avatar from 'material-ui/Avatar';

const styles = {
    icon: {
        marginRight: 30
    },
    avatar: {
        marginTop:3
    }
};

class Item extends React.Component {

    render() {
        return (
            <div className='list-item'>
                <div className="employee">
                        <Avatar
                        src={this.props.employee.avatar}
                        style={styles.avatar}
                    />
                    <span className='name'>
                        {this.props.employee.name}
                    </span>
                </div>
                <ul>
                    <li className='list-item-proyect'>
                        <div className='item'>
                            <i className="material-icons proyect">work</i>
                            <span>
                                {this.props.project}
                            </span>
                        </div>
                    </li>
                    <li className='list-item-date'>
                        <div className='item'>
                            <i className="material-icons proyect">event</i>
                            <span>
                                {this.props.dateRange}
                            </span>
                        </div>
                    </li>

                    <li className='list-item-place'>
                        <div className='item'>
                            <i className="material-icons proyect">room</i>
                                <span>
                                  {this.props.location}
                                </span>
                        </div>
                    </li>
                    <li className='list-item-date'>
                        <div className='item'>
                            <i className="material-icons proyect">schedule</i>
                            <span>
                                {this.props.remaining}
                            </span>
                        </div>
                    </li>
                    <li className='list-item-state'>
                        <div className='item'>
                            <i className="material-icons proyect">keyboard_arrow_down</i>
                        </div>
                    </li>
                    <ul className='actions'>
                        <li className='download'>
                            <i className="material-icons proyect">file_download</i>
                        </li>
                        <li className='edit'>
                            <i className="material-icons proyect">mode_edit</i>
                        </li>
                        <li className='delete'>
                            <i className="material-icons proyect">delete</i>
                        </li>
                    </ul>
                </ul>

            </div>
        )
    }
}

Item.propTypes = {
  employee: React.PropTypes.shape({
      avatar: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
  }),
  project:   React.PropTypes.string.isRequired,
  dateRange: React.PropTypes.string.isRequired,
  location:  React.PropTypes.string.isRequired,
  remaining: React.PropTypes.string.isRequired
}

export default Item;

