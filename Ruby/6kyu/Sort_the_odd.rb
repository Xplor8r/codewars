# You have an array of numbers.
# Your task is to sort ascending odd numbers but even numbers must be on their places.

# Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

# Example

# sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
# sort_array([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

def sort_array(source_array)
    evens = []
    odds = []
    oddIndexes = []
    source_array.each_with_index do |n, i|
        if n.even?
            evens.push([n,i])
        else
            odds.push(n)
            oddIndexes.push(i)
        end
    end
    odds_indexed = odds.sort {|a,b|a<=>b}.each_with_index.map{|n,i|n=[n,oddIndexes[i]]}
    result = evens.concat(odds_indexed).sort{|a,b|a[1]<=>b[1]}.map{|a|a=a[0]}
    result    
end
