json.partial! "/api/users/user", user: @user
# json.registrations []

# json.registrations do
#     @user.registrations.each do |registration|
#         json.set! registration.event_id do
#             json.extract! registration, :id, :user_id, :event_id
#         end
#     end
# end

# json.registrations do
#     json.array! @user.registrations.each do |registration|
#         json.extract! registration, :id, :event_id, :user_id
#     end
# end