class CreateSigns < ActiveRecord::Migration[6.1]
  def change
    create_table :signs do |t|
      t.belongs_to :relay, null: false, foreign_key: true
      t.text :body
      t.datetime :recalled

      t.timestamps
    end
  end
end
