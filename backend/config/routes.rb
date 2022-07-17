Rails.application.routes.draw do
  resources :todo_lists
  resources :tasks
  root 'todo_lists#index'

  if Rails.env.test?
    namespace :test do
      post 'database_cleaner/clean' => 'database_cleaner#clean'
    end
  end
end
