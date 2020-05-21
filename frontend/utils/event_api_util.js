export const fetchEvents = () => (
    $.ajax({
        method: 'GET',
        url: 'api/events'
    })
);

export const fetchEvent = (eventId) => (
    $.ajax({
        method: 'GET',
        url: `api/events/${eventId}`
    })
);

export const createEvent = (event) => (
    $.ajax({
        method: 'POST',
        url: 'api/events',
        data: { event }
    })
);

export const updateEvent = (event) => (
    $.ajax({
        method: 'PATCH',
        url: `api/events/${event.id}`,
        data: { event }
    })
);

export const deleteEvent = (eventId) => (
    $.ajax({
        method: 'DELETE',
        url: `api/events/${eventId}`
    })
);

export const searchEvents = (searchTerm) => (
    $.ajax({
        method: 'GET',
        url: `api/search_events`,
        data: { searchTerm }
    })
);