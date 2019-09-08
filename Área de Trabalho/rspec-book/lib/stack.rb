# frozen_string_literal: true

class Stack
  def initialize
    @elements = []
  end

  def push element
    @elements << element
  end

  def top
    @elements[-1]
  end

  def pop
    @elements.pop
  end
end