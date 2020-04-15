import * as BookmarkApiUtil from '../utils/bookmark_api_util';

export const RECEIVE_BOOKMARKS = 'RECEIVE_BOOKMARKS';
export const RECEIVE_BOOKMARK = 'RECEIVE_BOOKMARK';
export const REMOVE_BOOKMARK = 'REMOVE_BOOKMARK';
export const RECEIVE_BOOKMARK_ERRORS = 'RECEIVE_BOOKMARK_ERRORS';

const receiveBookmarks = (events) => ({
    type: RECEIVE_BOOKMARKS,
    events
});

const receiveBookmark = (event) => ({
    type: RECEIVE_BOOKMARK,
    event
});

const removeBookmark = ({ bookmarkId, event }) => ({
    type: REMOVE_BOOKMARK,
    bookmarkId,
    event
});

const receiveBookmarkErrors = (errors) => ({
    type: RECEIVE_BOOKMARK_ERRORS,
    errors
});

export const fetchBookmarks = () => dispatch => (
    BookmarkApiUtil.fetchBookmarks()
        .then((bookmarks) => dispatch(receiveBookmarks(bookmarks)), e => dispatch(receiveBookmarkErrors(e.responseJSON)))
);

export const fetchBookmark = (bookmarkId) => dispatch => (
    BookmarkApiUtil.fetchBookmark(bookmarkId)
        .then((bookmark) => dispatch(receiveBookmark(bookmark)), e => dispatch(receiveBookmarkErrors(e.responseJSON)))
);

export const createBookmark = (bookmark) => dispatch => (
    BookmarkApiUtil.createBookmark(bookmark)
        .then((bookmark) => dispatch(receiveBookmark(bookmark)), e => dispatch(receiveBookmarkErrors(e.responseJSON)))
);

export const deleteBookmark = (bookmarkId) => dispatch => (
    BookmarkApiUtil.deleteBookmark(bookmarkId)
        .then((bookmarkId) => dispatch(removeBookmark(bookmarkId)), e => dispatch(receiveBookmarkErrors(e.responseJSON)))
);