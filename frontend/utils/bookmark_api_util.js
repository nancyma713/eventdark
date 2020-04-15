export const fetchBookmarks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/bookmarks'
    })
);

export const fetchBookmark = (bookmarkId) => (
    $.ajax({
        method: "GET",
        url: `api/bookmarks/${bookmarkId}`
    })
)

export const createBookmark = (bookmark) => (
    $.ajax({
        method: "POST",
        url: `api/bookmarks`,
        data: bookmark
    })
)

export const deleteBookmark = (bookmarkId) => (
    $.ajax({
        method: "DELETE",
        url: `api/bookmarks/${bookmarkId}`
    })
)