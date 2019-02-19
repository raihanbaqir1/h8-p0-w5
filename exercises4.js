function totalDigitRekursif(angka) {
    var angka2 = angka.toString()
    // console.log(angka2)
    if(angka2.length === 1){
        return Number(angka2[0])
    } else{
        var angka3 = Number(angka2[0])
        return angka3 + totalDigitRekursif(Number(angka2.substr(1)))  
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5