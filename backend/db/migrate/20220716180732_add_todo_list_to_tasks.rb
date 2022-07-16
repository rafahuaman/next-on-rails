class AddTodoListToTasks < ActiveRecord::Migration[7.0]
  def change
    add_reference :tasks, :todo_list, null: false, foreign_key: true
  end
end
