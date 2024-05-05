/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-escape */
export const calculateOperation = (operationString: string): number => {
  // Remove white spaces
  if (operationString.length > 0 && isSymbol(operationString[0])) {
    operationString = `0${operationString}`;
  }
  operationString = operationString.replace(/\s/g, "");

  // Helper function to perform operations inside parentheses
  const evaluateParentheses = (str: string): string => {
    const regex = /\(([^\(\)]+)\)/; // Match innermost parentheses
    let match;
    while ((match = regex.exec(str)) !== null) {
      const evaluated = calculateOperation(match[1]); // Evaluate the inner expression
      str = str.replace(match[0], evaluated.toString()); // Replace the expression in parentheses with its result
    }
    return str;
  };

  // Evaluate parentheses first
  operationString = evaluateParentheses(operationString);

  // Extract numbers and operators using regular expressions
  const multiplyDivideRegex = /(\d*\.?\d+)\s*([*\/])\s*(\d*\.?\d+)/;
  const addSubtractRegex = /(\d*\.?\d+)\s*([+\-])\s*(\d*\.?\d+)/;

  // Perform multiplication and division
  let match;
  while ((match = multiplyDivideRegex.exec(operationString)) !== null) {
    const [_, num1, operator, num2] = match;
    const result =
      operator === "*"
        ? parseFloat(num1) * parseFloat(num2)
        : parseFloat(num1) / parseFloat(num2);
    operationString = operationString.replace(match[0], result.toString());
  }

  // Perform addition and subtraction
  while ((match = addSubtractRegex.exec(operationString)) !== null) {
    const [_, num1, operator, num2] = match;
    const result =
      operator === "+"
        ? parseFloat(num1) + parseFloat(num2)
        : parseFloat(num1) - parseFloat(num2);
    operationString = operationString.replace(match[0], result.toString());
  }

  return parseFloat(operationString);
};

export const validationSymbols = (
  newOperation: string,
  operation: string
): boolean => {
  const isNewSymbol: boolean = isSymbol(newOperation);
  if (isNewSymbol && operation.length === 0) {
    return false;
  }
  if (operation.length === 0) {
    return true;
  }
  const last: string = operation[operation.length - 1];
  const isLastSymbol: boolean = isSymbol(last);

  if (isLastSymbol && isNewSymbol) {
    return false;
  }

  return true;
};

export const isSymbol = (newOperation: string) => {
  return (
    newOperation === "+" ||
    newOperation === "-" ||
    newOperation === "*" ||
    newOperation === "/" ||
    newOperation === "."
  );
};

export const replaceAns = (text: string, number: number): string => {
  return text.replace(/ANS/g, number.toString());
};

export const isDivideByZero = (text: string): boolean => {
  return /\/0{1,}/.test(text);
};
