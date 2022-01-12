class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  # GET /users
  def index
    users = User.all

    render json: users, status: :ok
  end

  # GET /users/1
  def show
    user = User.find_by(id: session[:user_id])
    session[:user_id] = user.id
    render json: user, status: :ok
  end

  # POST /users
  def create
    @user = User.create(user_params)

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
    params
      .require(:user)
      .permit(
        :full_name,
        :username,
        :email,
        :phone_number,
        :password,
        :password_confirmation,
        :reviews,
        :results,
      )
  end
end
