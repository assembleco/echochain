class CreatePeople < ActiveRecord::Migration[6.1]
  def change
    create_table :people do |t|
      t.string :handle
      t.string :email
      t.string :name
      t.string :locale

      t.timestamps
    end
  end
end
