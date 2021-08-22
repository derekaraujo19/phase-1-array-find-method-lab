
// function superbowlWin(arrayObj) {
//   if (arrayObj.result === "W") {
//     return arrayObj.year;
//   } else {
//     return undefined;
//   }
// }

// record.find(superbowlWin);


// let superbowlWin = record.find(function(element) {
//   return record.result === 'W';
// })


// function superbowlWin(array) {
//   return array.result === 'W'
// }

// record.find(superbowlWin);


function superbowlWin(record) {
  let win = record.find(record => record.result === 'W');
  if (win === undefined) {
    return undefined;
  } else {
    return win.year;
  }
}