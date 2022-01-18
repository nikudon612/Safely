class ReviewsController < ApplicationController
  # before_action :set_review, only: %i[show update destroy]

  # GET /reviews
  def index
    reviews = Review.all
    render json: reviews
  end

  # GET /reviews/1
  # def show
  #   render json: @review
  # end

  # POST /reviews
  def create
    review = Review.create(review_params)

    if review
      render json: review, status: :created
    else
      render json: { error: 'validation error' }, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.

  # Only allow a list of trusted parameters through.
  def review_params
    params.permit(:rating, :comment, :user_id, :testing_site_id)
  end
end
