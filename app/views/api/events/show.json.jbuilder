json.partial! "api/events/event", event: @event

json.extract! @user, :first_name, :last_name, :email