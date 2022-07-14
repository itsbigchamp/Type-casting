// function greaterNum(x, y) {
//   if (x < y) {
//     return `The Greater number of ${x} and ${y} is ${y}`;
//   } else {
//     return ` The Greater number of ${x} and ${y} is ${x}`;
//   }
// }
// const x = 30;
// const y = 50;

// console.log(greaterNum(x, y));

function greaterAge(person1, person2) {
  if (person1 < person2) {
    console.log(
      `The Greater number of ${person1} and ${person2} is ${person2}`
    );
  } else {
    console.log(
      ` The Greater number of ${person1} and ${person2} is ${person1}`
    );
  }
}

let peterAge = 31;
let gavinAge = 26;

// greaterAge(peterAge, gavinAge);

const sumOfAges = function (person1, person2) {
  return person1 + person2;
  
};
console.log(sumOfAges(65, 56))


const greaterNum2 = (person1, person2) => {
  if (person1 < person2) {
    console.log(
      `The Greater number of ${person1} and ${person2} is ${person2}`
    );
  } else {
    console.log(
      ` The Greater number of ${person1} and ${person2} is ${person1}`
    );
  }
};

// greaterNum2(24, 12);
