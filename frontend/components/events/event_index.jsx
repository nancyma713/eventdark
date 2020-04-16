import React from 'react';
import EventIndexItem from './event_index_item';
import { withRouter } from 'react-router-dom';

class EventIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }

        this.selectCategory = this.selectCategory.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    selectCategory(index) {
        this.setState({ index: index });
    }

    render() {
        const { events, createBookmark, deleteBookmark, fetchEvent, currentUser, history } = this.props;

        const CATEGORYLIST = [
            { name: 'ALL' },
            { name: 'Activities' },
            { name: 'Entertainment' },
            { name: 'Food and Drink' },
            { name: 'Free' },
            { name: 'Music' },
            { name: 'Nightlife' },
            { name: 'Other' },
            { name: 'Sports and Fitness' },
            { name: 'Travel and Outdoor' }
        ]

        const selected = this.state.index;
        const categories = CATEGORYLIST.map((cate, index) => {
            const category = cate.name;
            const activeClass = index === selected ? 'active' : '';

            return (
                <li key={index} className={activeClass} onClick={() => this.selectCategory(index)}>{category}</li>
            )
        })

        let filteredEvents;
        switch (this.state.index) {
            case 0:
                filteredEvents = events;
                break;
            case 1:
                filteredEvents = events.filter(e => e.category === 'Activities');
                break;
            case 2:
                filteredEvents = events.filter(e => e.category === 'Entertainment');
                break;
            case 3:
                filteredEvents = events.filter(e => e.category === 'Food and Drink');
                break;
            case 4:
                filteredEvents = events.filter(e => e.category === 'Free');
                break;
            case 5:
                filteredEvents = events.filter(e => e.category === 'Music');
                break;
            case 6:
                filteredEvents = events.filter(e => e.category === 'Nightlife');
                break;
            case 7:
                filteredEvents = events.filter(e => e.category === 'Other');
                break;
            case 8:
                filteredEvents = events.filter(e => e.category === 'Sports and Fitness');
                break;
            case 9:
                filteredEvents = events.filter(e => e.category === 'Travel and Outdoor');
                break;
            default:
                filteredEvents = events;
                break;
        }
        // debugger
        filteredEvents = filteredEvents.map(event => (
            <EventIndexItem currentUser={currentUser} fetchEvent={fetchEvent} createBookmark={createBookmark} deleteBookmark={deleteBookmark} key={event.id} event={event} history={history}/>
        ));

        return (
            <div>
                <ul className="category-list">
                    {categories}
                </ul>
                <ul className='event-list'>
                    {filteredEvents.length > 0 ? (
                        filteredEvents
                    ) : (
                        <p>No events... Maybe you can create one!</p>
                    )}
                </ul>
            </div>
        )
    }
}

export default withRouter(EventIndex);