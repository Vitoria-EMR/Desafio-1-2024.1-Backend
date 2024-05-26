função palindrome(str){
  str = str.toLowerCase().replace(/[\W_]/g, '');
  len = str.lentgh - 1;
  for(var i = 0; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      return false;
    }
  }
  return true;
}
