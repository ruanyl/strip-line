function solution(input, markers) {
  return input.split('\n')
  .map(function(line) {
    return markers.reduce(function(preLine, marker) {
      var subIndex = preLine.indexOf(marker) > 0 ? preLine.indexOf(marker) : preLine.length;
      return preLine.substring(0, subIndex).replace(/\s*$/, '');
    }, line);
  }).join('\n');
}

module.exports = solution;
