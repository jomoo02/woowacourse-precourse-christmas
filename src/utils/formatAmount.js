function formatAmount(amount) {
  return `${amount.toLocaleString('en-US')}원`;
}

function formatAmountMinus(amount) {
  return `-${formatAmount(amount)}`;
}

export { formatAmount, formatAmountMinus };
