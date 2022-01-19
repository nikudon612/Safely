class UsersController < ApplicationController
  # GET /users
  def index
    users = User.all
    render json: users, status: :ok
  end

  # GET /users/1rails
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :ok
    else
      render json: { error: 'Not authorized' }, status: :unauthorized

      # session[:user_id] = user.id
      # render json: user, status: :ok
    end
  end

  # POST /users
  def create
    user = User.create(user_params)
    # byebug
    if user
      render json: user, status: :created
    else
      render json: { error: 'validation error' }, status: :unprocessable_entity
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  # def set_user
  #   @user = User.find(params[:id])
  # end

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(
      :full_name,
      :username,
      :email,
      :phone_number,
      :password,
      :password_confirmation,
    )
  end
end
