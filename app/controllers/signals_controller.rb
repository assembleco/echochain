class SignalsController < ApplicationController
  def index
    if(params[:hidden] == "yes")
      render json: { signals: Sign.all }
    else
      render json: { signals: Sign.published }
    end
  end

  def update
    success = Sign.find(params[:id]).update(body: params[:body])

    if success
      render json: { body: params['body'] }
    else
      render json: { body: nil }
    end
  end
end
