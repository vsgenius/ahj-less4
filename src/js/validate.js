export function isValid(number) {
  var regex = new RegExp('^[0-9]{13}|[0-9]{16}|[0-9]{19}$');
  if (!regex.test(number)) return false;
  return checkCard(number);
}

function checkCard(val) {
  if (String(val).indexOf(4) == 0) return 'visa';
  if (
    String(val).indexOf(51) == 0 ||
    String(val).indexOf(52) == 0 ||
    String(val).indexOf(53) == 0 ||
    String(val).indexOf(54) == 0 ||
    String(val).indexOf(55) == 0 ||
    (222100 <= Number(String(val).substring(0,6)) && Number(String(val).substring(0,6)) <=272099)
  )
    return 'mastercard';
  if (String(val).indexOf(220) == 0) return 'mir';
  return false;
}
