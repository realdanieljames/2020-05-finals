
/************************
 * MAKE RUN ON FUNCTION *
 ************************/
//  replaces periods with commas
//  does not replace last period

const makeRunOn = function (sentence) {
  // start a new string to build
  let runOnSentence = ''
  // get each character
  for (let character of sentence) {
    // if character equals '.'. 
    // replace each '.' with ','
    if (character === '.') {
      character = ','
    }
    //   add characters to runOnSentence string
    runOnSentence = runOnSentence + character

  }
  // console.log(runOnSentence)
  // make a new string that ends in a period
  let endingInPeriod = ''
  for (let i = 0; i < runOnSentence.length; i++) {
  let lastComma = runOnSentence[runOnSentence.length-1];
    lastComma = '.'

    
    endingInPeriod = endingInPeriod + runOnSentence[i]
  }

  // console.log(endingInPeriod)
}

  // endingInPeriod + runOnSentence



//-------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------//
/************************
 * TOTAL SCORE FUNCTION *
 ************************/
// sums the score from every level Object in the given list
// if a multipler is passed as second parameter, multiply the total by it (the given 2nd parameter)
// if a third parameter 'bonus', is added, that is added as well, but not multiplied

const totalScore = function (level, multiplier =1, bonus) {
  // sum the score of each object
  let sum = 0;
  // loop level parameter for level object
  for (const score of level) {
    let numbers = Object.values(score)
    // convert recieved array to Numbers, in order to do calculations
    let digits = parseInt(numbers)
    //add all given numbers to my total sum  
    sum = sum + digits;
    
    
  }
  //multiplier 
  let product = sum * multiplier
  if (multiplier > 1 ){
    return product
  }
  
  // bonus add to sum
  if(bonus !== undefined){
    return sum + bonus
  }

  // console.log('level' +': ' + level )
  // console.log('multiplier' +': ' + multiplier )
  // console.log('bonus' +': ' + bonus )
  return sum 
}


//-------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------//
/***********************
 * NIGHT OWLS FUNCTION *
 ***********************/
// filter the list
// return only objects whose property asleep: false , and localTime: 100 and 400 inclusive.
// do not modify orignal array


const nightOwls = function (arrayOfObjects) {
  // new array to copy the original
  const nightTimers = []
  // loop through array for each object
  for (const people of arrayOfObjects) {

    // choose from localTime and asleep properties
    if (people.localTime >= 100 && people.localTime <= 400 && people.asleep === false) {
      nightTimers.push(people)
    }
  }
  return nightTimers

}

//-------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------//

/**********************
 * GO TO BED FUNCTION *
 **********************/
// returns a new list
// list contains localTime: 100 to 400 but with asleep: true
// keeps the original list in tact

const getToBed = function (arrayOfObjects) {
  // a copy list to maintain original
  let goToBedders = []

  // loop through array to get objects
  for (let object of arrayOfObjects) {
    // return list of persons who match localTime: 100 to 400
    if (object.localTime >= 100 && object.localTime <= 400) {
      // object.asleep = true
      // console.log(object)
      goToBedders.push(arrayOfObjects)
    }
  }
  // console.log(goToBedders)
  // return goToBedders

}


//-------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------//
/*************************
 * FIND INDICES FUNCTION *
 *************************/
// takes a list and a function
// returns a new list holding the indices of the list at which the fuunction returns true

const findIndices = function (array, callBackFunction) {
  // create array to push answers and recieve indices
  const resultAfterFunctionCall = []
  // loop through the array
  for (let i = 0; i < array.length; i++) {
    // console.log(i)
    let functionCall = callBackFunction(array[i])
    // push into array to then work indices
    resultAfterFunctionCall.push(functionCall)


    // console.log(functionCall)
  }
  // console.log(resultAfterFunctionCall)
}


//-------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------//

/********************
 * FAQTORY FUNCTION *
 ********************/
// returns an object of an array
// addQuestion method for adding questions to the list. questions are objects
// answerQuestion method for answering incomplete questions

const Faqtory = function () {
  return {
    questions: [],

    addQuestion: function (question) {
      this.questions.push({ question })
      // console.log(this.questions)
      return this.questions

    }

  }
}













if (typeof makeRunOn === 'undefined') {
  makeRunOn = undefined;
}

if (typeof nightOwls === 'undefined') {
  nightOwls = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof getToBed === 'undefined') {
  getToBed = undefined;
}

if (typeof findIndices === 'undefined') {
  findIndices = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}

module.exports = {
  makeRunOn,
  nightOwls,
  totalScore,
  getToBed,
  findIndices,
  Faqtory,
}
