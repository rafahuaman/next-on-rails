require 'factory_bot_rails' if Rails.env.test?

class Test::FactoriesController < ApplicationController
  rescue_from Exception, with: :show_errors

  def create
    result = call_factory_bot

    render json: result.to_json, status: :created
  end

  private

  def call_factory_bot
    if factory_method.ends_with?('_list')
      FactoryBot.public_send(factory_method, factory, list_count, *traits, **attributes)
    else
      FactoryBot.public_send(factory_method, factory, *traits, **attributes)
    end
  end

  def traits
    traits = []
    if params[:traits].present?
      params[:traits].each do |_key, trait|
        traits << sanitize_key(trait)
      end
    end
    traits
  end

  def factory
    sanitize_key(params[:factory])
  end

  def attributes
    params.except(:factory,
                  :traits,
                  :controller,
                  :action,
                  :list_count,
                  :factory_method,
                  :number).permit!.to_h.transform_keys { |key| sanitize_key(key) }
  end

  def factory_method
    sanitize_key(params[:factory_method])
  end

  def list_count
    params[:list_count].to_i
  end

  def show_errors(exception)
    error = {
      error: "#{exception.class}: #{exception}",
      backtrace: exception.backtrace.join("\n")
    }

    render json: error, status: :bad_request
  end

  def sanitize_key(key)
    key.to_sym
  end
end
