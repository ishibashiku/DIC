require 'rubycards'
require_relative './quick_sort'
include RubyCards

hand = Hand.new

# Deckインスタンスの生成
deck = Deck.new
puts "======before shuffle======"
puts deck

# デッキのシャッフル
deck = deck.shuffle!
puts "======after shuffle======"
puts deck

# デッキからカードを10枚引く
hand = hand.draw(deck,10)
puts "======after draw======"
puts hand

# handインスタンスを配列にする
target = hand.to_a

target = quick_sort(target)
# 並び替えた配列でHandオブジェクトのインスタンスを作成
hand = Hand.new(target)
puts "======after sort======"
puts hand
