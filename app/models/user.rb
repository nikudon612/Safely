class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :testing_sites, through: :reviews

  validates :full_name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :phone_number, uniqueness: true
  validates :password, presence: true, length: { in: 5..20 }
end
