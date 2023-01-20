Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "application#landingpage"
  resources :user
  resources :login
  resources :logout
  resources :bookstock 
  resources :booksearchbyname
  resources :booksearchbyauthor
end
