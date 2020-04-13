json.partial! "/api/events/event", event: @event

json.registrations do
    @event.registrations.each do |registration|
        json.set! registration.user_id do
            json.extract! registration, :id, :user_id, :event_id
        end
    end
end