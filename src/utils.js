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

export const problemBeta = (operation, fact, number2) => {
  switch (operation) {
    case 'Subtraction':
      return `${number2} - ${fact}`
    case 'Division':
      return `${number2} ÷ ${fact}`
    case 'Addition':
      return `${fact} + ${number2}`
    case 'Multiplication':
      return `${fact} × ${number2}`
    default:
      return `${fact} + ${number2}`
  }
}

export const solveBeta = (operation, fact, number2) => {
  switch (operation) {
    case 'Addition':
      return fact + number2
    case 'Multiplication':
      return fact * number2
    case 'Subtraction':
      return number2 - fact
    case 'Division':
      return number2 / fact
    default: return '?'
  }
}