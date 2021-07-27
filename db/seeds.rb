# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Boat.destroy_all
Make.destroy_all
User.destroy_all

@user = User.create(
  username: 'ernest',
  email: 'ernestbizzell@gmail.com',
  password_digest: '123456'
)

@make = Make.create(
  name: 'Lancer'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/WOuLNA2.jpg',
  description: 'get rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '30-5',
  designer: 'C&C',
  loa: '29.5',
  build_year: '1985',
  price: '9500'
)

@make = Make.create(
  name: 'Ranger'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/WOuLNA2.jpg',
  description: 'get rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '22',
  designer: 'Jensen',
  loa: '21.5',
  build_year: '1978',
  price: '2500'
)

@make = Make.create(
  name: 'Balance'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/WOuLNA2.jpg',
  description: 'get rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '525',
  designer: 'Balance',
  loa: '52.5',
  build_year: '2021',
  price: '1,600,000'
)

@make = Make.create(
  name: 'Laser'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/WOuLNA2.jpg',
  description: 'get rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: 'Laser',
  designer: 'Bruce Kirby',
  loa: '11.5',
  build_year: '2021',
  price: '7,300'
)

@make = Make.create(
  name: 'Westsail'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/WOuLNA2.jpg',
  description: 'get rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '32',
  designer: 'William Atkin',
  loa: '32',
  build_year: '1980',
  price: '30,000'
)

puts "#{User.count} user(s) created"
puts "#{Boat.count} boat(s) created"
puts "#{Make.count} make(s) created"