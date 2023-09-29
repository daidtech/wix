class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.boolean :show_in_online_store
      t.boolean :show_in_point_to_sales
      t.string :name
      t.string :ribbon
      t.text :descrition
      t.float :price
      t.float :cog

      t.timestamps
    end
  end
end
