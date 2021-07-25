class Boat < ApplicationRecord
  belongs_to :makes
  belongs_to :user
end
