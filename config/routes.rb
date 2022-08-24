Rails.application.routes.draw do
  
  # HTTP method 'URL', to: 'controller#method'
  # when someone goes to '/articles', run the index method in the Articles controller

  get '/articles', to: 'articles#index'
  get '/article/:id', to: 'articles#show'
  # get '/show_article', to: 'articles#show'




end
