class TestingSitesController < ApplicationController
  # before_action :set_testing_site, only: [:show, :update, :destroy]

  # GET /testing_sites
  def index
    sites = TestingSite.all
    render json: sites, status: :ok
  end

  # GET /testing_sites/1
  def show
    site = TestingSite.find_by(id: params[:id])
    render json: site, status: :ok
  end

  # Creating a testing site will be a stretch goal
  # or something I want to implement down the line

  # def create
  # end

  private

  # UPDATING A SITE WILL BE A STRETCH GOAL

  # Use callbacks to share common setup or constraints between actions.
  # def set_testing_site
  #   @testing_site = TestingSite.find(params[:id])
  # end

  # Only allow a list of trusted parameters through.
  def testing_site_params
    params.require(:testing_site).permit(:rating, :location, :reviews)
  end
end
