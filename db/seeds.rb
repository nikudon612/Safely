# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Review.destroy_all
TestingSite.destroy_all

puts 'New Users......👥👥👥'

nick =
  User.create(
    full_name: 'Nick Bechtel',
    username: 'nickb',
    email: 'nick@gmail.com',
    phone_number: '1234567898',
    password: 'gizmo',
    # reviews: Review.find_by(id: 1),
  )

puts 'New Locations......🏝️🏝️🏝️'

rapidnyc =
  TestingSite.create(
    name: 'Rapid NYC',
    rating: 2,
    location: '380 Grove St, Ridgewood, NY',
  
    test_type: 'PCR & Antigen', # test_type: 'Antigen',
  )

puts 'New Reviews.......🗣️🗣️🗣️'

review1 =
  Review.create(
    rating: 2,
    comment:
      'This place always has a long line. No structure to setup appointments.',
    testing_site_id: TestingSite.find_by(name: 'Rapid NYC').id,
    user_id: User.find_by(username: 'nickb').id,
  )
