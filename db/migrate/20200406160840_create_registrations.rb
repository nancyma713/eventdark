class CreateRegistrations < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end
  end
end
