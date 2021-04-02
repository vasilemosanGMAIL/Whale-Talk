//Global variables
const input =
  "JavaScript isn't a classed-based langauge – it's is a prototype-based langauge.";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

//whaleTalk  function that converts to langauge
const whaleTalk = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        resultArray.push(arr1[i]);
        if (arr1[i] === "e") {
          resultArray.push(arr1[i]);
        } else if (arr1[i] === "u") {
          resultArray.push(arr1[i]);
        }
      }
    }
  }
  console.log(resultArray.join("").toUpperCase());
};

whaleTalk(input, vowels);
