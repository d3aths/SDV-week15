//code pieces for adding

let a = 5
let b = 7
console.log (a+b)


function add(x,y) {
    return x+y
}
console.log(add(3,3))


let c = 3
function addTwo(x) {
    let ret = x + 2
    return ret
}
let d = addTwo(c)
console.log(d)


let val1 = 2
function multiplyThis(n) {
   let ret = n * val1
   return ret
}
let multiplied = multiplyThis(6)
console.log('example of scope:', multiplied)


let val = 7
function createAdder() {
   function addNumbers(a, b) {
     let ret = a + b
     return ret
   }
   return addNumbers
 }
let adder = createAdder()
let sum = adder(val, 8)
console.log('example of function returning a function: ', sum)

//this seems like an overly complicated way of doing a sum, its nice to know that it can work like this
//but in reality where we are always trying to find the shortest and quickest way to code something, this would be deprecated


function createCounter() {
    let counter = 0
    const myFunction = function() {
         counter = counter + 1
         return counter
       }
       return myFunction
     }
    const increment = createCounter()
    //here the increment variable is defined as the whole function of whats in createcounter
    //so its going to create the counter from 0 and each time the function is called, do +1 as stated in like 51
    const c1 = increment()
    const c2 = increment()
    const c3 = increment()
    //its a nice way of doing a loop without an actual loop i guess. but only for small amounts
    //as you can see you need to call it each time you want it incremented
    console.log('example increment', c1, c2, c3)