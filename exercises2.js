function changeVocals (str) {
    // console.log(str)
    var vocals = "aiueo"
    var replacement = "bjvfp"
    var str2 = ""
    // console.log(replacement[0])
    // console.log(str.length)
    // console.log(vocals.length)
    for(var i = 0; i < vocals.length; i++){
        for(var j = 0; j < str.length; j++){
            if(vocals[i] === str[j]){
                console.log(vocals[i])
            }
        }

    }
    // return str
}
  
  function reverseWord (str) {
    
  }
  
  function setLowerUpperCase (str) {
    
  }
  
  function removeSpaces (str) {
    
  }
  
  function passwordGenerator (name) {
    
  }
  console.log(changeVocals('Sergei Dragunov'))
//   console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'