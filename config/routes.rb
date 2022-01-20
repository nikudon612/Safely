Rails.application.routes.draw do
  resources :reviews, only: %i[index create]
  resources :testing_sites, only: %i[index show]
  resources :users, only: %i[index show create]

  #user route
  get '/me', to: 'users#show'
  post '/signup', to: 'users#create'

  #session routes for login / logout
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  #reviews routes
  get '/reviews', to: 'reviews#index'
  post '/reviews', to: 'reviews#create'

  #testing site routes
  get '/sites', to: 'testing_sites#index'
  get '/sites/:id', to: 'testing_sites#show'

  # delete '/reviews', to: 'reviews#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
