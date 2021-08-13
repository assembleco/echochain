class SignalsController < ApplicationController
  def index
    render json: { signals: Sign.published }
  end
end
