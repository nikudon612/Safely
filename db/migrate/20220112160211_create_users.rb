class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :username
      t.string :email
      t.string :phone_number
      t.string :password_digest
      t.string :reviews
      t.string :results

      t.timestamps
    end
  end
end
