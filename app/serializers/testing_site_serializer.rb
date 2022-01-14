class TestingSiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :location, :reviews
end
