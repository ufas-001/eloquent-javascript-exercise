/* Exercise 1
Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/ 

const traingleLoop = () => {
    let triangle = ""
    for(let i = 0; i < 7; i++ ){
        console.log(triangle += '#')
    }
    
}

//traingleLoop()


/* Exercise 2
 Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
*/

const fizzBuzz = () => {
    for (let number = 1; number <= 100; number++){
        switch (true) {
            case ((number % 3 === 0) && (number % 5 === 0)):
                console.log("FizzBuzz", number);
                break;
            case (number % 3 === 0):
                console.log("Fizz", number)
                break;
            case (number % 5 === 0):
                console.log("Buzz", number)
                break;
            default:
            console.log(number)
        }
    }
}
// fizzBuzz()



/* Exercise 3
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
*/

let board = ""
const chessBoard = () => {
  for (let col = 0; col < 8; col++) {
    for (let row = 0; row < 8; row++){
        if ((board.length) % 2 === 0){
            board += " "
        } else {
            board += "#"
        }
    }
    board += "\n"  
  }
  console.log(board)
}

// chessBoard()

/* Excercise 4
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/

const min = (arg1,arg2) => {
    let minValue = Math.min(arg1,arg2)
    return minValue
}
// console.log(min(34, 24))

/* Exercise
We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
*/

const isEven = (param) => {
    if (param < 0){
        param = -param
    }

    if (param === 0){
        return true
    } else if (param === 1){
        return false
    } else {
       return isEven(param - 2)
    }
}

// console.log(isEven(-1))

/*
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for example,
"b"). The first character has position 0, which causes the last one to be found at
position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
*/

const countBs = (word) => {
    let counts = 0
    for(let i = 0; i < word.length; i++) {
        if (word[i] === "B") {
            counts += 1
        }
    }

    return `We have ${counts} counts of B's`
}

// console.log(countBs("new BBall"))

const countChar = (word, letterCheck) => {
    let counts = 0
    for(let i = 0; i < word.length; i++) {
        if (word[i] === letterCheck) {
            counts += 1
        }
    }

    return `We have ${counts} counts of ${letterCheck}'s`
}

// console.log(countChar("new BBall", "a"))

/* Exercise 
Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55.
*/
const numberRange = (start, end) => {
    let arrRange = []
    for (let value = start; value <= end; value++) {
        arrRange.push(value)
    }
   return arrRange
}

let getArr = numberRange(1,10)
// console.log(getArr)

const sumRange = (start,end) => {
    let sumResult = 0
    for (let value = start; value <= end; value++){
        sumResult += value
    }
    return sumResult
}

let sumValue = sumRange(1,10)
//console.log(sumValue) //returns 55

/* Exercise 
    Arrays have a reverse method that changes the array by inverting the order in
    which its elements appear. For this exercise, write two functions, reverseArray
    and reverseArrayInPlace. The first, reverseArray, takes an array as argument
    and produces a new array that has the same elements in the inverse order. The
    second, reverseArrayInPlace, does what the reverse method does: it modifies
    the array given as argument by reversing its elements. Neither may use the
    standard reverse method.
*/


const reverseArray = (arr) => {
    let reversedArr = []
    for (let i = 0; i < arr.length; i++){
        reversedArr.unshift(arr[i])
    }
    return reversedArr  
}

let getReversedArr = reverseArray([1,2,3,4,5,8, 0])
//console.log(getReversedArr)

const reverseArrayInPlace = (arr) => {
    return arr.reverse()
}

let getReversedInPlaceArr = reverseArrayInPlace(["a","b","c","d"])
//console.log(getReversedInPlaceArr)

/* Exercise
Write a function arrayToList that builds up a list structure like the one
shown when given [1, 2, 3] as argument. Also write a listToArray function
that produces an array from a list. Then add a helper function prepend, which
takes an element and a list and creates a new list that adds the element to the
front of the input list, and nth, which takes a list and a number and returns
the element at the given position in the list (with zero referring to the first
element) or undefined when there is no such element.
*/

const arrayToList = (arr) => {
    let list = null
    for (i = arr.length -1; i >= 0; i--){
        list = {
            value: arr[i],
            rest: list
        }
    }
    return list
}
let getArrayList = arrayToList([1,2,3,4,5])
console.log(getArrayList)
