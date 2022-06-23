class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :restaurant_id, :image
  belongs_to :restaurant
end
