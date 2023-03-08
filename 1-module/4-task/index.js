function checkSpam(str) {
  let spam = /(1XbeT now|free xxxxx)/i;
  return spam.test(str);
 }
 