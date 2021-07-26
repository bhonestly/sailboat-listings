class RemoveMakeFromBoat < ActiveRecord::Migration[6.1]
  def change
    remove_column :boats, :make, :string
  end
end
