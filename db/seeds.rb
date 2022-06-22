# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating Restaurants..."

resto1 =
  Restaurant.create(
    name: "Water Grill",
    address: "1691 Market St, Denver, CO 80202",
    phone_number: "(303) 727-5711"
  )
resto2 =
  Restaurant.create(
    name: "Chicken Rebel",
    address: "3618 Tejon St, Denver, CO 80211",
    phone_number: "(720) 710-6620"
  )
resto3 =
  Restaurant.create(
    name: "Daughter Thai Kitchen and Bar",
    address: "1700 Platte St Suite 140, Denver, CO 80202",
    phone_number: "(720) 667-4652"
  )
resto4 =
  Restaurant.create(
    name: "Sushi Den",
    address: "1487 S Pearl St, Denver, CO 80210",
    phone_number: "(303) 777-0826"
  )
resto5 =
  Restaurant.create(
    name: "Machete Tequila and Tacos",
    address: "2817 E 3rd Ave, Denver, CO 80206",
    phone_number: "(303) 333-1567"
  )
resto6 =
  Restaurant.create(
    name: "Ocean Prime",
    address: "1465 Larimer St, Denver, CO 80202",
    phone_number: "(303) 825-3663"
  )
resto7 =
  Restaurant.create(
    name: "Kaos Pizza",
    address: "1439 S Pearl St, Denver, CO 80210",
    phone_number: "(303) 727-5711"
  )
resto8 =
  Restaurant.create(
    name: "Tokio",
    address: "2907 Huron St #103, Denver, CO 80202",
    phone_number: "(720) 639-2911"
  )
resto9 =
  Restaurant.create(
    name: "Root Down",
    address: "1600 W 33rd Ave, Denver, CO 80211",
    phone_number: "(303) 993-4200"
  )

puts "Creating Meals..."

meal1 =
  Meal.create(
    name: "Iced Shellfish Platter",
    image:
      "https://media1.westword.com/den/imager/u/blog/13405699/20220203_193214.jpg?cb=1644524189",
    price: 56.00,
    restaurant_id: resto1.id
  )

meal2 =
  Meal.create(
    name: "The Rancher",
    image:
      "https://d30ec9yrj6srx8.cloudfront.net/f3aa3eed391a01276962815b05594825_file.jpeg",
    price: 17.00,
    restaurant_id: resto2.id
  )

meal3 =
  Meal.create(
    name: "Bangkok Ribs",
    image:
      "https://imagedelivery.net/9lr8zq_Jvl7h6OFWqEi9IA/49e013ca-9b39-4a5b-e132-33fd9eac6100/public",
    price: 32.00,
    restaurant_id: resto3.id
  )

meal4 =
  Meal.create(
    name: "Red Dragon Roll",
    image: "https://pbs.twimg.com/media/C9vRXXsUIAAIA2C.jpg:large",
    price: 21.00,
    restaurant_id: resto4.id
  )

meal5 =
  Meal.create(
    name: "The Trio",
    image:
      "https://img2.10bestmedia.com/Images/Photos/284844/p-Machete-Plate-Drink_55_660x440.jpg",
    price: 16.00,
    restaurant_id: resto5.id
  )

meal6 =
  Meal.create(
    name: "Surf and Turf",
    image:
      "https://cdn.vox-cdn.com/thumbor/PKmrJC3s8AwjXkQGO0iuiI6-uag=/0x0:1913x1303/920x613/filters:focal(804x499:1110x805):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63199235/oceanprime.0.png",
    price: 47.50,
    restaurant_id: resto6.id
  )

meal7 =
  Meal.create(
    name: "Wild Mushroom Pizza",
    image:
      "https://s3-media0.fl.yelpcdn.com/bphoto/rdh633cO07n-Y9aGQgMwaA/o.jpg",
    price: 26.00,
    restaurant_id: resto7.id
  )

meal8 =
  Meal.create(
    name: "Tonkutsu Ramen",
    image:
      "http://www.bittermansguide.com/uploads/1/1/2/3/112331721/img-6661-orig_orig.jpg",
    price: 19.00,
    restaurant_id: resto8.id
  )
meal9 =
  Meal.create(
    name: "Tofu Scramble",
    image:
      "https://images.happycow.net/venues/200x200/52/01/hcmp52012_1167013.jpeg",
    price: 20.00,
    restaurant_id: resto9.id
  )
meal10 =
  Meal.create(
    name: "Lobster Roll",
    image:
      "https://assets.website-files.com/5bd78ffdfc757ce771e4bf46/5dad3a7706d077927ce795e0_LOBSTER_ROLL_01s.jpg",
    price: 25.00,
    restaurant_id: resto1.id
  )
meal11 =
  Meal.create(
    name: "Avocado Toast",
    image:
      "https://images.happycow.net/venues/1024/24/95/hcmp24954_463724.jpeg",
    price: 19.00,
    restaurant_id: resto9.id
  )
meal12 =
  Meal.create(
    name: "Pineapple Fried Rice",
    image:
      "https://hot-thai-kitchen.com/wp-content/uploads/2014/02/Pineapple-fried-rice-sq-2.jpg",
    price: 23.50,
    restaurant_id: resto3.id
  )

# puts "Creating Users..."

# elise =
#   User.create(name: "Elise", username: "elisesadsad", password: "elise123")
# dylan = User.create(name: "Dylan", username: "dylanraye", password: "dylan123")
# johnny =
#   User.create(name: "Johnny", username: "johnnybravo", password: "johnny123")

puts "Adding UserMeals..."

UserMeal.create(user_id: elise.id, meal_id: meal8.id)
UserMeal.create(user_id: elise.id, meal_id: meal7.id)
UserMeal.create(user_id: elise.id, meal_id: meal1.id)
UserMeal.create(user_id: elise.id, meal_id: meal9.id)
UserMeal.create(user_id: dylan.id, meal_id: meal2.id)
UserMeal.create(user_id: dylan.id, meal_id: meal3.id)
UserMeal.create(user_id: dylan.id, meal_id: meal8.id)
UserMeal.create(user_id: dylan.id, meal_id: meal5.id)

puts "Seeding Done!"
