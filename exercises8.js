function hapusSimbol(str) {
    // console.log(str.length)
    var simbol = '~!@#$%^&*()+=-_\|?/.><,;:[]{}'
    if(!str.length){
        return ""
    } else{
        var flag = true
        for(var i = 0; i < simbol.length; i++){
            if(str[0] === simbol[i]){
                flag = false
            }
        }
        if(flag === true){
            return str[0] + hapusSimbol(str.substr(1))
        } else{
            return hapusSimbol(str.substr(1))
        }
    }
  }
  
  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100