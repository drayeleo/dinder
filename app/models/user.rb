class User < ApplicationRecord
  has_many :user_meals
  has_many :meals, through: :user_meals

  validates :username, uniqueness: true

  has_secure_password
end
