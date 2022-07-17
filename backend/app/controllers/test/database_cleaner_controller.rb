require 'database_cleaner/active_record'

class Test::DatabaseCleanerController < ApplicationController
  def clean
    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean
    render plain: 'OK'
  end
end
