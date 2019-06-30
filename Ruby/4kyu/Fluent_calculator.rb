# The Kata is inspired by Calculating with Functions Kata for JavaScript.

# The goal is to implement simple calculator which uses fluent syntax:

# Calc.new.one.plus.two             # Should return 3
# Calc.new.five.minus.six           # Should return -1
# Calc.new.seven.times.two          # Should return 14
# Calc.new.nine.divided_by.three     # Should return 3
# There are only four operations that are supported (plus, minus, times, divided_by) and 10 digits (zero, one, two, three, four, five, six, seven, eight, nine).

# Each calculation consists of one operation only.



class Calc
  attr_accessor :num
  def initialize() @num=0 end
  def zero() @num=0 end
  def one() @num=1 end
  def two() @num=2 end
  def three() @num=3 end
  def four() @num=4 end
  def five() @num=5 end
  def six() @num=6 end
  def seven() @num=7 end
  def eight() @num=8 end
  def nine() @num=9 end
end

class Integer
  @@op = ''
  def zero() doMath(self,@@op,0) end
  def one() doMath(self,@@op,1) end
  def two() doMath(self,@@op,2) end
  def three() doMath(self,@@op,3) end
  def four() doMath(self,@@op,4) end
  def five() doMath(self,@@op,5) end
  def six() doMath(self,@@op,6) end
  def seven() doMath(self,@@op,7) end
  def eight() doMath(self,@@op,8) end
  def nine() doMath(self,@@op,9) end
  def plus() @@op = '+'; self end
  def minus() @@op = '-'; self end
  def times() @@op = '*'; self end
  def divided_by() @@op = '/'; self end
  def doMath(int1,op,int2)
    op=='+' ? int1+int2 : op=='-' ? int1-int2 : op=='*' ? int1*int2 : int1/int2
  end
end
