class TestingSiteSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :rating,
             :location,
             :contact,
             :hours,
             :test_type,
             :reviews

  # has_many :reviews
  # has_many :users, through: :reviews
end
