function sorting(arrNumber) {
//    return arrNumber.sort()
// console.log(arrNumber.length)
   for(var i = 0; i < arrNumber.length; i++){
       for(var j = 0; j < (arrNumber.length - i - 1); j++){
           if(arrNumber[j] > arrNumber[j+1]){
               var temp = arrNumber[j]
               arrNumber[j] = arrNumber[j+1]
               arrNumber[j+1] = temp
           }
       }
   }
   return arrNumber
// console.log(arrNumber)         
}
    
  
  function getTotal(arrNumber) {
    var angka = 0;
    var count = 0;
    console.log(arrNumber.length)
    for(var k = arrNumber.length - 1; k >= 0; k--){
        if(k === arrNumber.length - 1){
            angka = arrNumber[k];
            count++
        } else if(arrNumber[k] === angka){
            count++;
        } else{
            break;
        }
    }
    if(arrNumber.length > 0){
        return "angka yang paling besar adalah"+" "+angka+" "+"dan jumlah kemunculan sebanyak"+" "+count+" "+"kali"
    } else{
        return ""
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
// console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]))
//   console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]))
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''