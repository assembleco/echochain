require 'rails_helper'

RSpec.describe "Signals", type: :request do
  describe "GET /index" do
    pending "honors the 'hidden' code" do
      get "/signals", params: { hidden: "no" }
    end

    it "detects slash codes in the middle of a signal"
    it "has no effect on the 'help' code"
  end
end
