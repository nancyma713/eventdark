import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
        const { events } = this.props;

        return (
            <div>
                <ul className='event-list'>
                    {events.map(event => (
                        <EventIndexItem key={event.id} event={event} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default EventIndex;