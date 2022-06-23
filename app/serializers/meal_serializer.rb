class MealSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :restaurant_id, :image, :restaurant
end
