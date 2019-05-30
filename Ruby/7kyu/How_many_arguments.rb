# Create a method args_count, that returns the count of passed arguments

# args_count(1, 2, 3) -> 3
# args_count(1, 2, 3, a: 10) -> 4

def args_count(*args)
  arr = []
  args.map {|arg| arg.class == Hash ? arr.concat(arg.to_a) : arr.push(arg)}
  arr.length
end
