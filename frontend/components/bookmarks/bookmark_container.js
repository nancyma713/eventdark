import { connect } from 'react-redux';
import BookmarkIndex from './bookmark_index';
import { fetchBookmarks, fetchBookmark, createBookmark, deleteBookmark } from '../../actions/bookmark_actions';

const msp = (state) => ({
    currentUser: state.entities.users[state.session.id],
    bookmarks: state.entities.bookmarks,
    events: state.entities.events
});

const mdp = (dispatch) => ({
    fetchBookmarks: () => dispatch(fetchBookmarks()),
    fetchBookmark: bookmarkId => dispatch(fetchBookmark(bookmarkId)),
    createBookmark: bookmark => dispatch(createBookmark(bookmark)),
    deleteBookmark: bookmarkId => dispatch(deleteBookmark(bookmarkId))
})


export default connect(msp, mdp)(BookmarkIndex);