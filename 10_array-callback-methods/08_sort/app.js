const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500]

prices.sort()

const ascSort = prices.slice().sort((a, b) => a - b)
const descSort = prices.sort((a, b) => b - a)