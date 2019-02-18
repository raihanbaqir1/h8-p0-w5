function sorting(arrNumber) {
   return arrNumber.sort()
//    for(var i = 0; i < arrNumber.length; i++){
//        for(var j = 0; j < (arrNumber.length - i - 1); j++){
//            if(items[j] > items[j+1]){
//                var temp = items[j]
//                items[j] = items[j+1]
//                items[j+1] = temp
//            }
//        }
//    }
// console.log(arrNumber)         
}
    
  
  function getTotal(arrNumber) {
    var angka = 0;
    var count = 0;
    // console.log(arrNumber.length)
    for(var i = arrNumber.length - 1; i >= 0; i--){
        if(i === arrNumber.length - 1){
            angka = arrNumber[i];
            count++
        } else if(arrNumber[i] === angka){
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