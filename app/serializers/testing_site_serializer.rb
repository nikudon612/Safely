class TestingSiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :location, :contact, :hours, :reviews

  # has_many :reviews
  # has_many :users, through: :reviews
end
