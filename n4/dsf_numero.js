function telephoneCheck(str) {
   let rex1 = /^1?\s?(\d{3}|\(\d{3}\))[\s|-]?\d{3}[\s|-]?\d{4}$/;
  return rex1.test(str);

}
