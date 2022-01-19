class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :testing_site_id

  # has_many :users
  # has_many :testing_sites
end
