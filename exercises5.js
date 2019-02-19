function kaliTerusRekursif(angka) {
    var angka2 = angka.toString()
    // console.log(angka2)
    var result = 1;
        for(var i = 0; i < angka2.length; i++){
            result *= Number(angka2[i])
        }
        // console.log(result)
        resultString = result.toString()
        if(resultString.length === 1){
            return Number(resultString)
        } else{
            return kaliTerusRekursif(result)
        }
        
    
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6