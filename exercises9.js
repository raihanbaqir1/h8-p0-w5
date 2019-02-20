function cariPelaku(str) {
    if(!str.length){
        return 0
    } else{
        var key = "abc"
        var test = str.substring(0,3)
        if(test === key){
            return cariPelaku(str.substr(1))+1
        } else{
            return cariPelaku(str.substr(1))
        }

    }
    // console.log(test)
    // var counter = 0
    // for(var i = 0; i < str.length; i++){
    //     if(str[i]+str[i+1]+str[i+2] === key){
    //         counter++
    //     }
    // }
    // return counter

  }
  
  // TEST CASES
  console.log(cariPelaku('mabcvabc')); // 2
  console.log(cariPelaku('abcdabdc')); // 1
  console.log(cariPelaku('bcabcac')); // 1
  console.log(cariPelaku('abcabcabc')); // 3
  console.log(cariPelaku('babcbacabc')); // 2