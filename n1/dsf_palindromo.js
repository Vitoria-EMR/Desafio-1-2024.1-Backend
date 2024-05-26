função palíndromo(str){
  str = str.toLowerCase().replace(/[\W_]/g, '');
  len = str.comprimento - 1;
  for(var i = 0; i < len/2; i++) {
    if(str[i] !== str[len-i]) {
      retorna falso;
    }
  }
  retornar verdadeiro;
}
palíndromo("olho");
