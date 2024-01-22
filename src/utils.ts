function squareRoot(n: string) {
  return Math.sqrt(parseInt(n)).toString();
}
export function commaSeparateNumber(s: string) {
  return s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export function filterExpressionCharacters(expression: string) {
  expression = expression
    .replace("**", "^")
    .replace("*", "x")
    .replace("/", "÷");
  expression = commaSeparateNumber(expression);
  return expression;
}
