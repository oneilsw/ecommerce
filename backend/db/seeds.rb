gaida = User.create(username: "gaida", password: "gaida")
oneil = User.create(username: "oneil", password: "oneil")

men = Category.create(name: "Men")
women = Category.create(name: "Women")

Shoe.create(name: "Kaite", brand: "Jimmy Choo",cost: 1095, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw56893d78/images/original/KAITE120ADO_000074_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Baily 100", brand: "Jimmy Choo" ,cost: 2995, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwb10e3c50/images/original/BAILY100DYZ_110323_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Biker II", brand: "Jimmy Choo",cost: 995, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwc71c48f3/images/original/BIKERIISQM_010003_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Hawaii", brand: "Jimmy Choo",cost: 450, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwf4df012f/images/original/HAWAIIFIER_OO1321_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Love 85", brand: "Jimmy Choo", cost: 2850, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw12c71627/images/original/LOVE85SJX_111783_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
Shoe.create(name: "Mavin 85", brand: "Jimmy Choo" ,cost: 1195, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw6a887fcc/images/original/MAVIN85GGZ_0C7981_SIDE.jpg?sw=520&sh=520&sm=fit", category: women)
# Shoe.create(name: , brand: ,cost: , image: , category: )

Shoe.create(name: "Thame", brand: "Jimmy Choo", cost: 795, image:"https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw34991d08/images/original/THAMEVMD_000074_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Voyager II/M", brand: "Jimmy Choo", cost: 1595, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw78e72fd2/images/original/VOYAGERIIMIII_000074_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Grove", brand: "Jimmy Choo", cost: 595, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dwb2bb1046/images/original/GROVEAFI_010003_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Sawyer", brand: "Jimmy Choo", cost: 950, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw98e94bfb/images/original/SAWYERSVV_026933_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
Shoe.create(name: "Odin", brand: "Jimmy Choo", cost: 1095, image: "https://us.jimmychoo.com/dw/image/v2/BDNT_PRD/on/demandware.static/-/Sites-jch-master-product-catalog/default/dw024996d3/images/original/ODINSIV_0C8042_SIDE.jpg?sw=520&sh=520&sm=fit", category: men)
# Shoe.create(name:, brand: "Jimmy Choo", cost:, image:, category: )
# Shoe.create(name:, brand: "Jimmy Choo", cost:, image:, category: )



# ActiveRecord::Base.connection.tables.each do |t| 
# ActiveRecord::Base.connection.reset_pk_sequence!(t)
# end

# require 'dotenv'
# require 'rest-client'


# response = RestClient::Request.execute(
#     method: :get,
#     url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
#     headers: {"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
#     "x-rapidapi-key": ENV["NYT_API_KEY"]}
# )

# item_data = JSON.parse(response)["results"]
   
# item_data.map do |dataInfo|
#     Shoe.create(
#         name: dataInfo["name"],
#         cost: dataInfo["price"]["value"],
#         image: dataInfo["images"][0]["url"],
#         brand: dataInfo["collection"],
#         category: men
#     )
# end

# response2 = RestClient::Request.execute(
#     method: :get,
#     url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
#     headers: {"x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
#     "x-rapidapi-key": ENV["NYT_API_KEY"]}
# )

# item_data2 = JSON.parse(response2)["results"]
   
# item_data2.map do |dataInfo|
#     Shoe.create(
#         name: dataInfo["name"],
#         cost: dataInfo["price"]["value"],
#         image: dataInfo["images"][0]["url"],
#         brand: dataInfo["collection"],
#         category: women 
#     )
# end

# Order.create(user: oneil, paid: true)
# Order.create(user: gaida, paid: false)
# Order.create(user: gaida, paid: true)

# Joiner.create(order_id: 1, shoe_id: 1)
# Joiner.create(order_id: 2, shoe_id: 2)
# Joiner.create(order_id: 2, shoe_id: 3)
# Joiner.create(order_id: 3, shoe_id: 4)
# Joiner.create(order_id: 3, shoe_id: 5)
# Joiner.create(order_id: 3, shoe_id: 6)


# byebug 

puts "Destroying all Users"
sleep(0.5)
puts "Destroying all 'Shoes'"
sleep(0.5)
puts "Destroying all Orders"
sleep(0.5)
puts "Destroying all Joiners"
sleep(0.5)
puts "Destroying all Categories"
sleep(0.5)
puts "Done!"
sleep(0.5)
puts "Seeded"
