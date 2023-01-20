class User < ApplicationRecord
    has_secure_password
    # validates :name, presence: true, length: {minimum: 2, maximum: 50}
    # validates :pname, presence: true, length: {minimum: 2, maximum: 50}
    # validates :pname, presence: true, length: {minimum: 2, maximum: 50}
    # validates :pname, presence: true, length: {minimum: 2, maximum: 50}
    # validates :pname, presence: true, length: {minimum: 2, maximum: 50}
    # validates :pname, presence: true, length: {minimum: 2, maximum: 50}
    validates :name, :password, :address, :phone_number, :role_id, :email, presence: true
end