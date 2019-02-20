function changeVocals (str) {
    // console.log(str)
    var vocals = "aiueoAIUEO"
    var replacement = "bjvfpBJVFP"
    var str2 = ""
    // console.log(replacement[0])
    // console.log(str.length)
    // console.log(vocals.length)
    for(var i = 0; i < str.length; i++){
        var flag = true
        for(var j = 0; j < vocals.length; j++){
            if(str[i] === vocals[j]){
                flag = false
                str[i] = replacement[j]
                str2 += replacement[j]
            }
        }
        if(flag === true){
        str2 += str[i] 
        }
    }
    return str2
}

        
  
  function reverseWord (str) {
      var str3 = ""
      for(var k = str.length-1; k >= 0; k--){
          str3 += str[k]
      }
      return str3
    
  }
  
  function setLowerUpperCase (str) {
      var str4 = ""
    for(var l = 0; l < str.length; l++){
        if(str[l] === str[l].toUpperCase()){
            str4 += str[l].toLowerCase()
        } else if(str[l] === str[l].toLowerCase()){
            str4 += str[l].toUpperCase()
        }
    }
    return str4
    
  }
  
  function removeSpaces (str) {
      var str5 = ""
      for(var m = 0; m < str.length; m++){
          if(str[m] !== " "){
              str5 += str[m]
          }
        }
    return str5
    }
      
    
  
  function passwordGenerator (name) {
      if(name.length < 5){
          return 'Minimal karakter yang diinputkan adalah 5 karakter'
      }
      var vocals = changeVocals(name)
      var balik = reverseWord(vocals)
      var besarKecil = setLowerUpperCase(balik)
      var spasi = removeSpaces(besarKecil)
      return spasi
    }
    
    
//   console.log(changeVocals('Alexei'))
//   console.log(reverseWord('Alexei'))
//   console.log(setLowerUpperCase('Alexei'))
// console.log(removeSpaces('Alexei'))
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'