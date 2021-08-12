require 'rails_helper'

RSpec.describe "Signals", type: :request do
  describe "GET /index" do
    it "honors the 'hidden' code"
    it "detects slash codes in the middle of a signal"
    it "has no effect on the 'help' code"
  end
end
