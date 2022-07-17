FactoryBot.define do
  factory :task do
    sequence(:title) { |n| "Task # #{n}" }

    todo_list { association :todo_list }
  end
end
