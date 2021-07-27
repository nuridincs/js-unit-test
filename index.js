const getTotalPrice = (price, disc) => {
  if (typeof(price) != 'number' || typeof(disc) != 'number') {
    return 'Error, invalid argument';
  }

  const DEFAULT_TAX = 10;
  const totalDiscount = price * disc / 100;
  const totalTax = price * DEFAULT_TAX / 100;
  const totalPrice = price - totalDiscount - totalTax;

  return `Rp. ${totalPrice.toLocaleString('id', 'ID')}`;
}

module.exports = getTotalPrice;