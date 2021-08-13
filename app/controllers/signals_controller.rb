class SignalsController < ApplicationController
  def index
    render json: { signals: Sign.all }
  end
end
