class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :username, :email, :phone_number, :password_digest, :reviews, :results
end
