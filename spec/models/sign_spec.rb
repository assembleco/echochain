require 'rails_helper'

RSpec.describe Sign, type: :model do
  describe ".published" do
    it "detects slash codes at the beginning of a signal" do
      hidden = Fabricate(:sign, body: "/hide\n" + Faker::Markdown.sandwich)

      expect(Sign.published).not_to include(hidden)
    end

    it "detects slash codes in the middle of a signal" do
      hidden = Fabricate(
        :sign,
        body: Faker::Markdown.sandwich + "\n/hide\n" + Faker::Markdown.sandwich,
      )

      expect(Sign.published).not_to include(hidden)
    end
  end
end
