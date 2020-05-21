import * as EventApiUtil from '../utils/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT = 'RECEIVE_EVENT';
export const REMOVE_EVENT = 'REMOVE_EVENT';
export const RECEIVE_EVENT_ERRORS = 'RECEIVE_EVENT_ERRORS';
export const CLEAR_EVENT_ERRORS = 'CLEAR_EVENT_ERRORS';

const receiveEvents = (events) => ({
    type: RECEIVE_EVENTS,
    events
});

const receiveEvent = (event) => ({
    type: RECEIVE_EVENT,
    event
});

const removeEvent = (eventId) => ({
    type: REMOVE_EVENT,
    eventId
});

const receiveEventErrors = (errors) => ({
    type: RECEIVE_EVENT_ERRORS,
    errors
})

export const clearEventErrors = () => ({
    type: CLEAR_EVENT_ERRORS
});

export const fetchEvents = () => dispatch => (
    EventApiUtil.fetchEvents()
        .then((events) => dispatch(receiveEvents(events)), e => dispatch(receiveEventErrors(e.responseJSON)))
);

export const fetchEvent = (eventId) => dispatch => (
    EventApiUtil.fetchEvent(eventId)
        .then((event) => dispatch(receiveEvent(event)), e => dispatch(receiveEventErrors(e.responseJSON)))
);

export const createEvent = (event) => dispatch => (
    EventApiUtil.createEvent(event)
        .then((event) => dispatch(receiveEvent(event)), e => dispatch(receiveEventErrors(e.responseJSON)))
);

export const updateEvent = (event) => dispatch => (
    EventApiUtil.updateEvent(event)
        .then((event) => dispatch(receiveEvent(event)), e => dispatch(receiveEventErrors(e.responseJSON)))
);

export const deleteEvent = (eventId) => dispatch => (
    EventApiUtil.deleteEvent(eventId)
        .then((eventId) => dispatch(removeEvent(eventId)), e => dispatch(receiveEventErrors(e.responseJSON)))
);

export const fetchSearchEvents = (searchTerm) => dispatch => (
    EventApiUtil.searchEvents(searchTerm)
        .then((events) => dispatch(receiveEvents(events)), e => dispatch(receiveEventErrors(e.responseJSON)))
);