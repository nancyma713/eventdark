# == Schema Information
#
# Table name: registrations
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Registration < ApplicationRecord
    validates :user_id, :event_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :event,
        primary_key: :id,
        foreign_key: :event_id,
        class_name: :Event
end
