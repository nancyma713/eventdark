import React from 'react';

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.event;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchEvent(this.props.match.params.eventId)
    }

    componentWillUnmount() {
        this.props.clearEventErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEvent(this.state)
            .then(event => this.props.history.push(`/events/${event.event.id}`));
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    checkError(msg) {
        let allErrors = Object.values(this.props.errors);
        if (allErrors.includes(msg)) {
            if (msg === "End date End time must be after start time") {
                return (
                    <div className="form-errors" id="form-errors">
                        End time must be after start time
                    </div>
                );
            } else {
                return (
                    <div className="form-errors" id="form-errors">
                        {msg}
                    </div>
                );
            }
        }
    }

    render() {
        let currentDate = new Date().toISOString();
        currentDate = currentDate.slice(0, 16);
        let startDate = this.state.start_date;
        startDate = startDate.slice(0, this.state.start_date.length - 2);
        let endDate = this.state.end_date;
        endDate = endDate.slice(0, this.state.end_date.length - 2);

        return (
            <div className="event-form-container">
                <h2>Edit Your Event</h2>
                <form className="event-form" onSubmit={this.handleSubmit}>
                    <div className="event-form-content">
                        <label id="event-title">Event Title
                            <input type="text"
                                placeholder="Give it a short distinct name"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label>
                        <span className="form-field-error">{this.checkError("Title can't be blank")}</span>
                        <label id="event-start">Starts
                            <input type="datetime-local"
                                min={currentDate}
                                value={startDate}
                                onChange={this.update('start_date')} />
                        </label>
                        <span className="form-field-error">{this.checkError("Start date can't be blank")}</span>
                        <label id="event-end">Ends
                            <input type="datetime-local"
                                min={currentDate}
                                value={endDate}
                                onChange={this.update('end_date')} />
                        </label>
                        <span className="form-field-error">{this.checkError("End date can't be blank")}</span>
                        <span className="form-field-error">{this.checkError("End date End time must be after start time")}</span>
                        <label id="event-desc">Event Description
                            <textarea value={this.state.description}
                                onChange={this.update('description')}
                            />
                        </label>
                        <span className="form-field-error">{this.checkError("Description can't be blank")}</span>
                        <label id="event-category">Category
                            <select selected value={this.state.category} onChange={this.update('category')}>
                                <option disabled>Select Category</option>
                                <option value="Activities">Activities</option>
                                <option value="Community and Culture">Community and Culture</option>
                                <option value="Entertainment">Entertainment</option>
                                <option value="Family and Education">Family and Education</option>
                                <option value="Food and Drink">Food and Drink</option>
                                <option value="Free">Free</option>
                                <option value="Music">Music</option>
                                <option value="Nightlife">Nightlife</option>
                                <option value="Other">Other</option>
                                <option value="Science and Technology">Science and Technology</option>
                                <option value="Sports and Fitness">Sports and Fitness</option>
                                <option value="Travel and Outdoor">Travel and Outdoor</option>
                            </select>
                        </label>
                        <span className="form-field-error">{this.checkError("Category can't be blank")}</span>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default EditEventForm;