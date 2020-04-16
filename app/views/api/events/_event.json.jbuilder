json.extract! event, :id, :title, :description, :start_date, :end_date, :category, :owner_id
json.ownerFirstName event.owner.first_name
json.ownerLastName event.owner.last_name