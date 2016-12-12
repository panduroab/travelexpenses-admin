const AppDispatcher = require('../AppDispatcher'),
      EventEmitter  = require('events').EventEmitter,
      assign        = require('object-assign');

let _events = [
    {
        employee: {
            avatar: 'http://www.material-ui.com/images/uxceo-128.jpg',
            name  : 'The Big Mamma'
        },
        project: 'El Cit Resorts',
        dateRange: 'Sept 30 - Oct 04',
        location: 'Mazatlan, Sinaloa',
        remaining: '5d'
    },{
        employee: {
            avatar: 'http://www.material-ui.com/images/uxceo-128.jpg',
            name  : 'The Big Mamma'
        },
        project: 'El Cit Resorts',
        dateRange: 'Sept 30 - Oct 04',
        location: 'Mazatlan, Sinaloa',
        remaining: '5d'
    }

];

let EventsStore = assign({}, EventEmitter.prototype, {
    getAll() {
        return _events;
    }
});

AppDispatcher.register((action) => {
    console.log('the action', action );
});

export default EventsStore;

