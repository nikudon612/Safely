Rails.application.routes.draw do
  
  resources :reviews only: %i[index create destroy]
  resources :testing_sites only: %i[index show]
  resources :users only: %i[index show create]


  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
