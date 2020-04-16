import React from 'react';
import BookmarkIndexItem from './bookmark_index_item'

class BookmarkIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchEvents();
        this.props.fetchBookmarks();
    }

    render() {
        const { events } = this.props;

        if (!events) {
            return null;
        }

        let eventBookmarks = Object.values(events).filter(event => {
            let bookmarks = event.bookmarks || {};
            return bookmarks.hasOwnProperty(this.props.currentUser.id)
        })

        let eventBookmarkItems = eventBookmarks.map(event => {
            return (
                <div key={event.id}>
                    <BookmarkIndexItem event={event} userId={this.props.currentUser.id} />
                </div>
            )
        })

        return (
            <div className="bookmarks-index">
                <div>
                    <h1>Bookmarks</h1>
                </div>
                <ul className="bookmarks-list">
                    {eventBookmarkItems}
                </ul>
            </div>
        );
    }
}

export default BookmarkIndex;