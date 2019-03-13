export const problem = (category, symbol, factCategory, number2) => {

  switch (category) {
    case 'Subtraction':
    case 'Division':
      return `${number2} ${symbol} ${factCategory}`
    case 'Addition':
    case 'Multiplication':
      return `${factCategory} ${symbol} ${number2}`
    default:
      return `${factCategory} ${symbol} ${number2}`
  }
}

export const solve = (num1, num2, category) => {
  switch (category) {
    case 'Addition':
      return num1 + num2
    case 'Multiplication':
      return num1 * num2
    case 'Subtraction':
      return num2 - num1
    case 'Division':
      if (num2 === 0) return '--'
      else return num2 / num1
    default: return '?'
  }
}