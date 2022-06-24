class UserMealSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :meal_id
  belongs_to :meal
end
