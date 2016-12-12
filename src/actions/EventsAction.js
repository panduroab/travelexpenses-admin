const AppDispatcher    = require('../AppDispatcher'),
      EventsConstants  = require('../constants/EventsConstants');

let EventsAction = {
    loadEvents: function() {
        AppDispatcher.dispatch({
            actionType: EventsConstants.EVENTS_LOAD,
            text: 'the ultimate events'
        });
    }
}

export default EventsAction;