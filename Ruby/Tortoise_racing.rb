def race(v1, v2, g)
  result = []
  if v1 >= v2
    result = nil
  else 
    time = (g * 6) / ((v2 - v1) * 0.1) * 60
    result.push(Time.at(time).utc.strftime("%H").to_i)
    result.push(Time.at(time).utc.strftime("%M").to_i)
    result.push(Time.at(time).utc.strftime("%S").to_i)
  end
  result
end
