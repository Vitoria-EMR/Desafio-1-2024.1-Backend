function rot13(str){
  let alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for(let i = 0; i < str.length; i++){
    let car = str[i]; 
    let letra = (alfa.indexOf(car) !== -1);
    if (letra){
      let ind = alfa.indexOf(car);
      let indF = (ind + 13) % 26;
      result += alfa[indF];
    } else{
      result += car;
    }
    
  }
  return result;
}
