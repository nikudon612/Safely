class TestingSitesController < ApplicationController
  before_action :set_testing_site, only: [:show, :update, :destroy]

  # GET /testing_sites
  def index
    @testing_sites = TestingSite.all

    render json: @testing_sites
  end

  # GET /testing_sites/1
  def show
    render json: @testing_site
  end

  # POST /testing_sites
  def create
    @testing_site = TestingSite.new(testing_site_params)

    if @testing_site.save
      render json: @testing_site, status: :created, location: @testing_site
    else
      render json: @testing_site.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /testing_sites/1
  def update
    if @testing_site.update(testing_site_params)
      render json: @testing_site
    else
      render json: @testing_site.errors, status: :unprocessable_entity
    end
  end

  # DELETE /testing_sites/1
  def destroy
    @testing_site.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testing_site
      @testing_site = TestingSite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def testing_site_params
      params.require(:testing_site).permit(:rating, :location, :reviews)
    end
end
