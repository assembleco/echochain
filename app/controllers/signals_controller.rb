class SignalsController < ApplicationController
  def index
    if(params[:hidden] == "yes")
      render json: { signals: Sign.all }
    else
      render json: { signals: Sign.published }
    end
  end

  def create
    response = Sign.create(
      params.
      require(:signal).
      permit(:name, :body, :relay_id)
    )

    if response
      render json: response.as_json
    else
      render json: { name: nil, body: nil }
    end
  end

  def update
    success = Sign.
      find(params[:id]).
      update(name: params[:name], body: params[:body])

    if success
      render json: { name: params[:name], body: params[:body] }
    else
      render json: { name: nil, body: nil }
    end
  end
end
