class MakesController < ApplicationController
  # GET /makes
  def index
    @makes = Make.all

    render json: @makes
  end
end
