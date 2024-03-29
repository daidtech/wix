class ProductsController < ApplicationController
  def index
    # Logic to retrieve all products
  end

  def show
    # Logic to retrieve a specific product by ID
  end

  def create
    @product = Product.create(product_params)
    render :show
  end

  def update
    # Logic to update an existing product by ID
  end

  def destroy
    # Logic to delete a product by ID
  end

  private

  def product_params
    params.require(:product).permit(:name, :show_in_online_store,:show_in_point_to_sales ,:product_name ,:ribbon ,:descrition ,:price ,:cog , categories: [])
  end
end