export  function useCurrencify(amount) {
  const symbol = amount >= 0 ? "+" : "-";
  const amountPositive = Math.abs(amount);
  const currency = "$";
  return `${symbol} ${currency} ${amountPositive.toLocaleString("en-EN", {
    minimumFractionDigits: 3,
  })}`;
}
