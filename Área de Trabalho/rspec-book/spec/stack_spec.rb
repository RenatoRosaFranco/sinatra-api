# frozen_string_literal: true

require 'spec_helper'
require './lib/stack'

describe Stack do
  describe '#push' do
    it 'push an element at the top of the stack' do
      stack = Stack.new

      stack.push(1)
      stack.push(2)

      expect(stack.top).to eq(2)
    end
  end

  describe '#pop' do
    it 'pop an element at the top of the stack' do
      stack = Stack.new

      stack.push(1)
      stack.push(2)
      stack.push(3)

      stack.pop
      stack.pop

      expect(stack.top).to eq(1)
    end
  end
end