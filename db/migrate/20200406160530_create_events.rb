class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.integer :owner_id, null: false
      t.string :category, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false

      t.timestamps
    end

    add_index :events, :owner_id
  end
end
