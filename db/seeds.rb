# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bookmark.delete_all
Registration.delete_all
Event.delete_all
User.delete_all

user1 = User.create!({email: 'dog@dogs.com', password: '123456', first_name: 'Dog', last_name: 'McDogster'})
user2 = User.create!({email: 'cat@cats.com', password: '123456', first_name: 'Cat', last_name: 'McCatster'})
user3 = User.create!({email: 'hamster@hamsters.com', password: '123456', first_name: 'Hammy', last_name: 'McHammer'})
user4 = User.create!({email: 'user@demo.com', password: 'demopw', first_name: 'Demo', last_name: 'User'})