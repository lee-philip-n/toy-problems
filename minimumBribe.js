// let bribeCounts = {}

// //function that swaps and counts number of times the position swapped
// const swap = (arr, startIndex, stopIndex) => {
//   //stop swapping when briber reaches the input position
//   if (startIndex === stopIndex) {
//     return arr;
//   } else {
//     let briber = arr.slice().splice(startIndex + 1, 1);
    
//     //creates/increments briber's swap count
//     if (bribeCounts[briber]) {
//       bribeCounts[briber]++;
//     } else {
//       bribeCounts[briber] = 1;
//     }

//     //checks if the bribe swap count is > 2
//     if (Object.values(bribeCounts).filter(value => value > 2).length >= 1) {
//       return;
//     //keep swapping the briber until he/she reaches the input position
//     } else {
//       let next = arr.splice(startIndex, 1);
//       startIndex++;
//       arr.splice(startIndex, 0, next[0]);
//       swap(arr, startIndex, stopIndex);
//     }
//   }
// }

// function minimumBribes(q) {

//   //creates original start array;
//   let start = q.slice().sort((a,b) => a - b);
//   bribeCounts = {};

//   //checks the index of the position
//     //call swap function that swaps and counts number of times swapped
//   for (let i = q.length; i--;) {
//     let index = 0;
//     //sort from left if i is less than 50%, else sort from right of array
//     i < q.length/2 ? index = start.indexOf(q[i]) : index = start.lastIndexOf(q[i]);
//     if (index === q.indexOf(q[i])) {
//       //do nothing
//     } else {
//       swap(start, index, q.indexOf(q[i]));
//     }
//   }

//   //checks if any positions swapped more than twice
//   if (Object.values(bribeCounts).filter(value => value >= 3).length >= 1) {
//     console.log('Too chaotic');
//   } else {
//     console.log(Object.values(bribeCounts).reduce((a,b) => a + b));
//   }
// }

const minimumBribes = (q) => {
  let count = 0
  for (let i = 0; i < q.length; i++) {
    let briber = q[i];
    let counter = 0;
    for (let j = i + 1; j < q.length; j++) {
      if (q[j] < briber) {
        count++
        counter++
      } 
      if (counter > 2) {
        return console.log('Too chaotic');
      }
    }
  }
  return console.log(count);
}

minimumBribes([2, 1, 5, 3, 4]); //3
minimumBribes([2, 5, 1, 3, 4]); //Too chaotic
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]); //Too chaotic
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]); //7

