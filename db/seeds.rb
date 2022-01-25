Review.destroy_all
TestingSite.destroy_all
User.destroy_all

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
    # lat: 40.70059352680852,
    # lng: -73.91352288195964,
    address: '380 Grove St, Ridgewood, NY',
    contact: '888-727-4308',
    hours: 'M-F 9am - 5pm',
    test_type: 'PCR & Antigen',
  )
northwell =
  TestingSite.create(
    name: 'Northwell Health',
    rating: 4,
    address: '55-05 Myrtle Ave, Ridgewood, NY',
    contact: '718-502-9063',
    hours: 'M-Sunday 8am - 8pm',
    test_type: 'PCR & Antigen',
  )
dragonfly =
  TestingSite.create(
    name: 'Dragonfly PHD',
    rating: 3,
    address: '315 Wyckoff Ave, Brooklyn, NY',
    contact: 'N/A',
    hours: 'M-F 8am - 6pm',
    test_type: 'PCR & Antigen',
  )
catalpa =
  TestingSite.create(
    name: 'Catalpa Chemists Pharmacy',
    rating: 3,
    address: '57-01 Catalpa Ave, Queens, NY, 11385',
    contact: '718 366 3871',
    hours: 'M-F 8am - 7pm',
    test_type: 'PCR & Antigen',
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
review2 =
  Review.create(
    rating: 4,
    comment:
      'Standard clinic. Clean, fast, and professional. If you can get there before the busy times - you will be in and out quickly.',
    testing_site_id: TestingSite.find_by(name: 'Northwell Health').id,
    user_id: User.find_by(username: 'nickb').id,
  )
review3 =
  Review.create(
    rating: 3,
    comment:
      'Testing truck location! Usually a long line around the corner. No real way to make an appointment but you receive your results very quickly. Sometimes even same day!',
    testing_site_id: TestingSite.find_by(name: 'Dragonfly PHD').id,
    user_id: User.find_by(username: 'nickb').id,
  )
review4 =
  Review.create(
    rating: 3,
    comment: 'This is a old school nyc spot - family owned and kind staff.',
    testing_site_id: TestingSite.find_by(name: 'Catalpa Chemists Pharmacy').id,
    user_id: User.find_by(username: 'nickb').id,
  )
review5 =
  Review.create(
    rating: 2,
    comment: 'Rude staff long line = don\'t waste your time.',
    testing_site_id: TestingSite.find_by(name: 'Catalpa Chemists Pharmacy').id,
    user_id: User.find_by(username: 'nickb').id,
  )
