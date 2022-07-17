FactoryBot.define do
  factory :todo_list do
    sequence(:name) { |n| "Todo list # #{n}" }
  end
end
