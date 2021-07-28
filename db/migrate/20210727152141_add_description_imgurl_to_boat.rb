class AddDescriptionImgurlToBoat < ActiveRecord::Migration[6.1]
  def change
    add_column :boats, :description, :string
    add_column :boats, :img_url, :string
  end
end
