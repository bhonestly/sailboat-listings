class BoatsController < ApplicationController
  before_action :set_boat, only: %i[show update destroy]

  # GET /boats
  def index
    @boats = Boat.all
    render json: @boats, include: :make
  end

  # GET /boats/1
  def show
    render json: @boat, include: :make
  end

  # POST /boats
  def create
    @boat = Boat.new(boat_params)

    if @boat.save
      render json: @boat, include: :make, status: :created
      # , location: @boat
    else
      render json: @boat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /boats/1
  def update
    if @boat.update(boat_params)
      render json: @boat, include: :make
    else
      render json: @boat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /boats/1
  def destroy
    @boat.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_boat
    @boat = Boat.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def boat_params
    params.require(:boat).permit(:make_id, :model, :designer, :loa, :build_year, :price, :user_id, :description, :img_url)
  end
end
