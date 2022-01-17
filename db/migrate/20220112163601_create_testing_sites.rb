class CreateTestingSites < ActiveRecord::Migration[6.1]
  def change
    create_table :testing_sites do |t|
      t.string :name
      t.integer :rating
      t.string :location
      t.string :contact
      t.string :hours
      t.string :test_type
      t.integer :reviews

      t.timestamps
    end
  end
end
