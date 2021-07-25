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

@user=User.create(
  username: 'ernest',
  email: 'ernestbizzell@gmail.com',
  password_digest: '123456'
)

@make=Make.create(
  name: 'Lancer'
)

@boat=Boat.create(
  make_id: @make.id,
  user_id: @user.id,
  model: '30-5',
  designer: 'C&C',
  loa: '29.5',
  build_year: '1985',
  price: '9500'
)

puts "#{User.count} user(s) created"
puts "#{Boat.count} boat(s) created"
puts "#{Make.count} make(s) created"