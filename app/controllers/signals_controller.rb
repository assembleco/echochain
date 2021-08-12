class SignalsController < ApplicationController
  def index
    raise 'ohno! hidden signals are escaping!'
    render json: { signals: Sign.all }
  end
end
