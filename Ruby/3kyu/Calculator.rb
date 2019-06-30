# Create a simple calculator that given a string of operators (+ - * and /) and numbers separated by spaces returns the value of that expression

# Example:

# Calculator.new.evaluate("2 / 2 + 3 * 4 - 6") # => 7
# Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

class Calculator
  @@result = []
  @@mul = Proc.new {|a,b| a*b}
  @@div = Proc.new {|a,b| a/b}
  @@add = Proc.new {|a,b| a+b}
  @@sub = Proc.new {|a,b| a-b}
  @@ops = {"*"=> @@mul,"/"=> @@div,"+"=> @@add,"-"=> @@sub}
  
  def evaluate(string)
    @@result = string.split' '
    checkOps(["*","/"])
    checkOps(["+","-"])
    @@result.first.to_f
  end
  
  def checkOps(operands)
    i = 1
    while i < @@result.length - 1
      x = @@result[i]
      if operands.include? x
        num1 = @@result[i - 1].to_f
        num2 = @@result[i + 1].to_f
        @@result[i - 1] = @@ops[x][num1, num2].to_s
        @@result.delete_at(i + 1)
        @@result.delete_at(i)
        i=0
      end
      i+=1
    end
  end
end
