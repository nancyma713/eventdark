# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    validates :email, :first_name, :last_name, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :hosted_events,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Event

    has_many :registrations,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Registration

    has_many :bookmarks,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Bookmark

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

end
