class CreateRelays < ActiveRecord::Migration[6.1]
  def change
    create_table :relays do |t|
      t.belongs_to :person, null: false, foreign_key: true
      t.string :name
      t.datetime :disposed

      t.timestamps
    end
  end
end
