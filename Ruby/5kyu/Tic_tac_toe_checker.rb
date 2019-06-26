# If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

# Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

# [[0, 0, 1],
#  [0, 1, 2],
#  [2, 1, 0]]
# We want our function to return:

# -1 if the board is not yet finished (there are empty spots),
# 1 if "X" won,
# 2 if "O" won,
# 0 if it's a cat's game (i.e. a draw).
# You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

def is_solved(board)
  board = board.join.split('').map {|cell| cell.to_i}
  board = Board.new(board)
  game = Game.new(board)
  if game.won?
    game.winner
  elsif game.draw?
    0
  elsif !game.over?
    -1
  end
end

class Game
  attr_accessor :board, :player_1, :player_2

  def initialize(player_1 = 1, player_2 = 2, board)
    @player_1 = player_1
    @player_2 = player_2
    @board = board
  end
    
  WIN_COMBINATIONS = [[0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
  ]
  
  def current_player
    board.turn_count % 2 == 0 ? player_2 : player_1
  end

  def won?
    WIN_COMBINATIONS.find do |win_combination|
      if board.cells[win_combination[0]] == board.cells[win_combination[1]] &&
        board.cells[win_combination[1]] == board.cells[win_combination[2]] &&
        board.taken?(win_combination[0]+ 1)
        win_combination
      end
    end
  end

  def draw?
    board.full? && !won?
  end
  
  def over?
    draw? || won? || board.full?
  end
  
  def winner
    if token = won?
      winner = board.cells[token.first]
    end
  end
end

class Board
  attr_accessor :cells
  
  def initialize(cells)
    @cells = cells
  end
    
  def full?
    @cells.all? {|c| c == 1 || c == 2}
  end
  
  def turn_count
    turns = 0
    @cells.each do |c|
      if c== 1 || c == 2
        turns += 1
      end
    end
    turns
  end
  
  def taken?(input)
    index = (input.to_i - 1)
    !(@cells[index] == 0)
  end
end
