Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]

    resource :session, only: [:create, :destroy]

    resources :events do
      resources :bookmarks, only: [:create, :destroy]
      resources :registrations, only: [:create, :destroy]
    end
    
    post "/email", to: "sessions#email"
  end

  root to: 'root#root'
end
