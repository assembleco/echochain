class Sign < ApplicationRecord
  belongs_to :relay

  def self.published
    all.filter {|x| x.body.match(/^\/hide$/).nil? }
  end
end
