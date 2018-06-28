let bribeCounts = {}

const swap = (arr, startIndex, stopIndex) => {
  if (startIndex === stopIndex) {
    return arr;
  } else {
    let briber = arr.slice().splice(startIndex + 1, 1);
    
    if (bribeCounts[briber]) {
      bribeCounts[briber]++;
    } else {
      bribeCounts[briber] = 1;
    }

    if (Object.values(bribeCounts).filter(value => value >= 3).length >= 1) {
      return;
    } else {
      let next = arr.splice(startIndex, 1);
      startIndex++;
      arr.splice(startIndex, 0, next[0]);
      swap(arr, startIndex, stopIndex);
    }
  }
}

function minimumBribes(q) {
  let start = q.slice().sort((a,b) => a - b);
  bribeCounts = {};

  for (let i = q.length; i--;) {
    let index = start.indexOf(q[i]);
    if (index === q.indexOf(q[i])) {

    } else {
      swap(start, index, q.indexOf(q[i]));
    }
  }

  if (Object.values(bribeCounts).filter(value => value >= 3).length >= 1) {
    console.log('Too chaotic');
  } else {
    console.log(Object.values(bribeCounts).reduce((a,b) => a + b));
  }
}


minimumBribes([2, 1, 5, 3, 4]);
minimumBribes([2, 5, 1, 3, 4]);
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]);
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);

