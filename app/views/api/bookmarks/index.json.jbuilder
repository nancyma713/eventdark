# json.bookmarks do
#     @bookmarks.each do |bookmark|
#         json.set! bookmark.id do
#             json.extract! bookmark, :id, :user_id, :event_id
#         end
#     end
# end

# json.events do
#     current_user.bookmarks.each do |event|
#         json.set! event.id do
#             json.partial! "/api/events/event", event: event
#         end
#     end
# end

json.bookmarks do
    current_user.bookmarks.each do |bookmark|
        json.set! bookmark.event_id do
            json.extract! bookmark, :id, :user_id, :event_id
        end
    end
end