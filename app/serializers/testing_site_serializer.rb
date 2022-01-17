class TestingSiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :location, :contact, :hours, :reviews
end
