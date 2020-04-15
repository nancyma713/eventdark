import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import BookmarkIndexItem from './bookmark_index_item'

class BookmarkIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBookmarks();
    }

    render() {
        let eventBookmarks = Object.values(this.props.events).filter(event => {
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