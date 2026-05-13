var regex = /(\d)(?=(\d{3})+(?!\d))/g;

function addCommas(money, reg) {
  return money.replace(reg, function (match) {
    return match + ',';
  });
}