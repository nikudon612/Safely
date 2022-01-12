class SessionsController < ApplicationController
  # before_action :authorize

  def create
    user = User.find_by(username: params[:username])

    # byebug
    session[:user_id] = user.id
    render json: user
  end

  def destroy
    session.delete :user_id
    head :no_content
  end

  # private

  # def authorize
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  # end
end
