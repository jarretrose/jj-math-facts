// ***** eventually use only these below ***** 
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
    default: 
      return '?'
  }
}

export const generateKey = (pre) => {
  return `${ pre }_${ new Date().getTime() }`;
}