export const BRLCurrencyFormat = (value: string | number): string => {
  return `R$ ${Math.abs(+value)
    .toFixed(2)
    .replace('.', ',')}`;
};
