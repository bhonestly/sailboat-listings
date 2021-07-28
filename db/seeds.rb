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
  price: '9,400'
)

@make = Make.create(
  name: 'Ranger'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/6useSPB.jpg',
  description: 'got rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '22',
  designer: 'Ranger',
  loa: '21.5',
  build_year: '1978',
  price: '9,500'
)

@make = Make.create(
  name: 'Balance'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/7lbIEEG.jpg',
  description: 'get this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '526',
  designer: 'Balance',
  loa: '52.5',
  build_year: '2022',
  price: '1,600,000'
)

@make = Make.create(
  name: 'Laser'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/z5s9hjl.jpg',
  description: 'got rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: 'Laser',
  designer: 'Bruce Kirby',
  loa: '11.5',
  build_year: '1992',
  price: '2,500'
)

@make = Make.create(
  name: 'Westsail'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/j4r6cy8.jpg',
  description: 'got rid of this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '32',
  designer: 'William Atkin',
  loa: '32',
  build_year: '1980',
  price: '30,000'
)

@make = Make.create(
  name: 'Outremer'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/16SfSit.jpg',
  description: 'not this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '5X',
  designer: 'Barreau/ Neuman',
  loa: '58',
  build_year: '2022',
  price: '1,800,000'
)

@make = Make.create(
  name: 'HobieCat'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/pXLifyP.jpg',
  description: 'get this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: 'Hobie 17',
  designer: 'John Wake',
  loa: '17',
  build_year: '2005',
  price: '6,000'
)

@make = Make.create(
  name: 'Rice Brothers'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/8WVNatM.jpg',
  description: 'sailed this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: 'Gaff-rigged Schooner',
  designer: 'Rice Brothers',
  loa: '133',
  build_year: '1913',
  price: '2,995,000'
)

@make = Make.create(
  name: 'Richard Miles'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/5Ll7y20.jpg',
  description: 'sailed this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: 'Brig',
  designer: 'Ray Wallace',
  loa: '112',
  build_year: '1989',
  price: '4,000,000'
)

@make = Make.create(
  name: 'Mach 2 Boats'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/Cz2N8sx.png',
  description: 'get this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: 'Moth',
  designer: 'Bruce Farr',
  loa: '11',
  build_year: '2022',
  price: '10,000'
)

@make = Make.create(
  name: 'Vanguard'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/HdlHjSW.jpg',
  description: 'not this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: 'Vanguard 15',
  designer: 'Bob Ames',
  loa: '15.25',
  build_year: '2007',
  price: '7,500'
)

@make = Make.create(
  name: 'Olson'
)

@boat = Boat.create(
  img_url: 'https://i.imgur.com/hV3aL9z.jpg',
  description: 'get this boat',
  make_id: @make.id,
  user_id: @user.id,
  model: '30',
  designer: 'George Olson',
  loa: '30',
  build_year: '1984',
  price: '10,000'
)

puts "#{User.count} user(s) created"
puts "#{Boat.count} boat(s) created"
puts "#{Make.count} make(s) created"