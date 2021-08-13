require 'rails_helper'

RSpec.describe "Signals", type: :request do
  describe "GET /index" do
    pending "honors the 'hidden' code" do
      relay = Fabricate(:relay)
      Fabricate(:sign, relay: relay)
      Fabricate(:sign, relay: relay, body: "/hide\n" + Faker::Markdown.sandwich)

      get "/signals", params: { hidden: "no" }
      body = JSON.parse(response.body)

      expect(body['signals'].count).to eq 1
    end

    it "detects slash codes in the middle of a signal"
    it "has no effect on the 'help' code"
  end
end
