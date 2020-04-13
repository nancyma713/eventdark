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
user5 = User.create!({email: 'karaliu@chefs.com', password: '123456', first_name: 'Kara', last_name: 'Liu'})

event1 = Event.create!({owner_id: user1.id, category: 'Entertainment', title: 'The Magicians', description: 'Nothing around us is as it seems...and neither is the magic you think you know.', start_date: '2021/12/02 21:11:11', end_date: '2021/12/03 01:11:11'})
event2 = Event.create!({owner_id: user2.id, category: 'Music', title: 'Excision feat. The Evolution', description: 'Are you ready to break your necks?', start_date: '2021/03/08 23:00:00', end_date: '2021/03/09 04:00:00'})
event3 = Event.create!({owner_id: user3.id, category: 'Activities', title: 'A Night of Terror: Pandemic', description: 'Escape a dark, eerie mansion as the world is overrun by zombies', start_date: '2021/10/31 21:00:00', end_date: '2021/10/31 23:00:00'})
event4 = Event.create!({owner_id: user3.id, category: 'Food and Drink', title: 'Dinner in the Dark', description: 'You may not be able to see what you are eating, but it will be delicious', start_date: '2021/01/31 19:00:00', end_date: '2021/01/31 21:00:00'})
event5 = Event.create!({owner_id: user2.id, category: 'Other', title: 'Independence Day Fireworks', description: 'Join us for a glamourous viewing of the fireworks in an open air rooftop!', start_date: '2021/07/04 18:00:00', end_date: '2021/07/04 21:00:00'})
event6 = Event.create!({owner_id: user3.id, category: 'Nightlife', title: 'New Year New You', description: 'The BIGGEST party in New York, complete with open bar and music all night!', start_date: '2021/12/31 22:00:00', end_date: '2022/01/01 04:00:00'})
event7 = Event.create!({owner_id: user2.id, category: 'Free', title: 'Zoom Movie Night: Harry Potter Marathon', description: 'Social distancing movie nights streamed every week!', start_date: '2020/04/20 19:00:00', end_date: '2020/04/20 22:00:00'})
event8 = Event.create!({owner_id: user5.id, category: 'Food and Drink', title: 'Candlelit Cooking with Kara', description: 'Learn how to cook a perfect sweet potato with Chef Kara under candlelight', start_date: '2020/06/25 16:00:00', end_date: '2021/06/25 17:00:00'})