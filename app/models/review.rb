class Review < ApplicationRecord
  has_many :testing_sites
  has_many :users
end
