// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

const { fibonacci } = reqire(' ./yourFileName')

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

test('Fibonacci for lenth 6' , () => {
exspect(fibonacci(6)).toEqual([1, 1, 2 ,3, 5, 8]);
}

("Fibonacci for lenth 10" , () => {
    exspect(fibonacci(6)).toEqual([1, 1, 2 ,3, 5, 8, 13, 21, 34, 55]);
    })


// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

test('Fibonacci for lenth 6' , () => {
    exspect(fibonacci(6)).toEqual([1, 1, 2 ,3, 5, 8]);
    }

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

test('Fibonacci for lenth 10' , () => {
    exspect(fibonacci(6)).toEqual([1, 1, 2 ,3, 5, 8, 13, 21, 34, 55]);
    }

// b) Create the function that makes the test pass.

function fibonacci(lenth) {

}

module.exports = { fibonacci }

// Pseudo code:



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31


const { fibonacci, voteTally } = require('./yourFileName')


test('Vote Tally for votes1' , () => {
    expect(voteTally({ upVotes: 13, downVotes: 2 })).toBe(11)
})

test('Vote Tally for votes2' , () => {
    expect(voteTally({ upVotes: 2, downVotes: 33 })).toBe(-31)
})


// b) Create the function that makes the test pass.


function fibonacci(length) {

}


function voteTally(votes) {

}

module.exports = { fibonacci, voteTally }



// Pseudo code:



// In the fibonacci function its statrted with two numbers of the fibonacci sequence which are 1 and 1
// then it use a process to genarate more numbers in the sequence. for each new number it will add two previous ons. We keep doing this until we have the number we want in the sequence. the sequence results is then returned.

// now the votetally will recive information about the number of upvotes and downvotes. the numbers are simply subtraced from the downvotes, the result which repersnets the overall setiment, is then returned.

// in simpler terms the fibonacci function creates a sequence of numbers by adding two previous onsecuritypolicyviolation, and the tally function determins setiment based on the difffrences between upvores and downvotes 