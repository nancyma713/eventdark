import React from 'react';
import { Redirect } from 'react-router-dom';

class EventShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId);
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteEvent(e.currentTarget.value)
            .then(() => this.props.history.push('/'));
    }

    deleteButton() {
        let userId = this.props.currentUser.id;
        let ownerId = this.props.event.owner_id;
        if (userId === ownerId) {
            return (
                <button value={this.props.event.id} onClick={this.handleDelete}>DELETE</button>
            )
        }
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.history.push(`/events/${e.currentTarget.value}/edit`);
        // <Redirect to={`/events/${e.currentTarget.value}/edit`} />
    }
        
    editButton() {
        let userId = this.props.currentUser.id;
        let ownerId = this.props.event.owner_id;
        if (userId === ownerId) {
            return (
                <button value={this.props.event.id} onClick={this.handleEdit}>EDIT</button>
            )
        }
    }
                
    // handleRegister(e) {
    //     e.preventDefault();
    // }


    render() {
        const { event } = this.props;

        return (
            <div>
                <h1>{event.title}</h1>
                <div>Date and Time: 
                    <br />
                    <time>Event Start: {event.start_date}</time>
                    <br />
                    <time>Event End: {event.end_date}</time>
                </div>
                <p>{event.description}</p>

                <div className="buttons">
                    {this.deleteButton()}
                    {this.editButton()}
                </div>
                <div>
                    <button>REGISTER</button>
                </div>
            </div>
        )
    }
}

export default EventShow;