class CreateBoats < ActiveRecord::Migration[6.1]
  def change
    create_table :boats do |t|
      t.string :make
      t.string :model
      t.string :designer
      t.string :loa
      t.string :build_year
      t.string :price

      t.timestamps
    end
  end
end
