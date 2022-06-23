class MealsController < ApplicationController
  def index
    render json: Meal.all.shuffle
  end

  def show
    meal = Meal.find(params[:id])
    render json: meal
  end
end
