class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :testing_sites_id
end
