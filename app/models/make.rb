class Make < ApplicationRecord
  has_many :boats, dependent: :destroy
end
