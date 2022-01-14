class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :user_id, :testing_site_id
end
