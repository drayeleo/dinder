class UsersController < ApplicationController
  def show
    puts "ran show in users controller"
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end
end
