class MealSerializer < ActiveModel::Serializer
  attributes :id, :"name,", :price, :restaurant_id
end
