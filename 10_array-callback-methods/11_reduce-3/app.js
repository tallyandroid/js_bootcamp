const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n']


const results = votes.reduce((tally, val) => {
  if(tally[val]) {
      tally[val]++
  } else {
      tally[val] = 1
  }
  return tally
}, {})