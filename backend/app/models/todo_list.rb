class TodoList < ApplicationRecord
  has_many :tasks, dependent: :destroy
end
