# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  category    :string           not null
#  title       :string           not null
#  description :text             not null
#  start_date  :datetime         not null
#  end_date    :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
    validates :owner_id, :category, :title, :description, :start_date, :end_date, presence: true

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    has_many :registrations,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Registration

    has_many :bookmarks,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Bookmark
end
