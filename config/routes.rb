Rails.application.routes.draw do
  resources :user_meals
  resources :users
  resources :meals, only: %i[index show]
  resources :restaurants

  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/last_meals", to: "user_meals#last_meals"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path",
      to: "fallback#index",
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
