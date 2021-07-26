Rails.application.routes.draw do
  resources :boats
  resources :users, only: [:create]
  resources :makes, only: [:index]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
