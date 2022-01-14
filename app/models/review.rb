class Review < ApplicationRecord
  # belongs_to :testing_sites
  # belongs_to :users
  
  has_many :users
  has_many :testing_sites
end
