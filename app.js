// -----------------------------x----------------

// Difference Let Var const


//var function used inside function but also update by child functions

/*

var name = "apple"
if (true) {
    name = "banana"
}
console.log(name);       //result--> banana

*/

// example 2

/*

var name = "User";     //var values reasign||edit
var name = "User2";
console.log(name);  // result-->  User2

*/

//let block scope used inside block

// let name = "User";     //let values only edit
// let name = "User2";

// console.log(name);  // result-->  Identifier 'name' has already been declared



// const name = "User";     //const values not reasign||edit
// name = "s"
// console.log(name);  // result-->  Identifier 'name' has already been declared



// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined

//try above example with let and Var

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// -----------------------------x----------------


//Template Literals

/*

let fname = "abc";
let lname = "edf";

console.log(`My name is ${fname} ${lname}`); //${any javascript function}

*/

////result-> My name is abc edf


// -----------------------------x----------------

// spread operators (...)   works on arry & object

//// old method

/*

var arr1 = ["abid", "sajid"];
var arr2 = ["khan", "malana"];

var merge = arr1.concat(arr2);

console.log(merge);

*/

// new method

/*

var arr1 = ["abid", "sajid"];
console.log(arr1);
var arr2 = arr1; //here copy by refrence means in future if arr1 change arr2 also change.
console.log(arr2);
arr2[2] = "ubaid"
console.log(arr2);
arr1[3] = "Shiekh"
console.log(arr1);
var arr3 = [...arr1];// here copy by value
console.log(arr3);
arr3[4] = 'Abdullah';
console.log(arr3);

*/


//// on object

/*

var arr1 = { name: "abid" };
var arr2 = { ...arr1, school: "saylani" };
console.log(arr2);


*/

// -----------------------------x----------------


////  1. Object Destructure

/*

let obj = {
    names: "abid",
    classes: "fourth",
}

let { names, classes } = obj;   // here it save as a variable
console.log(names);         //---> abid
console.log(classes);       //---> fourth

*/

// -----------------------------x----------------



// ////  1. Array Destructure

/*

let arr = [
    "abid",
    "fourth",
]

let [name1, name2] = arr;   // here it save as a variable
console.log(name1);         //---> abid
console.log(name2);       //---> fourth

*/


// -----------------------------x----------------

//Rest parameters 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters


// example 1

// function myFun(a, b, ...manyMoreArgs) {
//   console.log("a", a);
//   console.log("b", b);
//   console.log("manyMoreArgs", manyMoreArgs);
// }

// myFun("one", "two", "three", "four", "five", "six");

// // Console Output:
// // a, one
// // b, two
// // manyMoreArgs, ["three", "four", "five", "six"]

// example 2


// function multiply(multiplier, ...theArgs) {
//   return theArgs.map((element) => multiplier * element);
// }

// const arr = multiply(2, 15, 25, 42);
// console.log(arr); // [30, 50, 84]



// -----------------------------x----------------

////  ternary Operators   (if else)


//// old

/*

var age = 20;
if (age > 30 || age < 50) {
    console.log("30 se bara hai ")
}
else {
    console.log("30 se chota hai")
}

*/

//// new

/*

var age = 20
var check = age > 30 || age < 50
    ?
    "30 se bara hai "
    :
    age > 100
        ?
        "100 se bara hai"
        :
        "30 se chota hai ";
console.log(check)

*/


//     // one more thing

// var bool= true;
// var display= bool && "SHow me true"  //if "bool" var true then display show
// console.log(display)

//-> result  Show me true

// -----------------------------x----------------



//Again ES6 xD


// -----------------------------x----------------


/*//            1
if(true){
    var name="abid";
}
if(true){
    let name2="abid";
 // let block level element out side the scope not used
 // let k scope {} k under tk hota hai
}
console.log(name)
console.log(name2)
*/


// -----------------------------x----------------




/*                      //2
var lastName="ahmed"
var lastName="basit"
console.log(lastName)

let lastNames="ahmed"
let lastNames="basit" //  let declear only once
console.log(lastNames)

*/

// -----------------------------x----------------



/*      3. const use for only read neither delete nor edit */


/*
const school="SAYLANI"

var obj={
    schoolName:school
}
    console.log(obj);

    */

// -----------------------------x----------------



//   4  Template Literals

// //    // document.write("2"+"x"+"1"+"="+2*2)

/*

let firstName="Ghous";
let lastName="Ahmed";
console.log(firstName+" "+lastName);
console.log(`My Name is ${firstName} ${lastName}`) //   ``  <-named "Baktic"


*/


// -----------------------------x----------------


// 5  Spread Operators

//a
/*
var student1=["ghous","basit"]

var student2=["ahmed","umair"]

var merge=student1.concat(student2)

console.log(merge)

*/

// -----------------------------x----------------




// b
/*
var student1=["ghous","basit"]
var student2=[...student1,"ahmed","umair"]  // triple dot ... know as spread operator

var names={
    name: "abid"}  //object also add
var names2={
    ...names,
    school  :"saylani"}

console.log(student2)
console.log(names2)

*/


// -----------------------------x----------------



/*  6 Object Destructuring */

/*
var student={
    name:"abid",
    school:"saylani",
    roll : "123"
}
console.log(student)
console.log(student.school)

let{name,school,roll}=student;          //it convert into a variable like student.name etc

console.log(name)
console.log(school)
console.log(roll)

*/

// -----------------------------x----------------



//      7 Ternary Operators like if

/*

var age = 20;

if(age>30 || age<50  && age >20){
    console.log("30 sy bara hai ")
}else{
    console.log("30 sy chota hai ")
}

var age = 10;

var check =
        age >30 ?           //1st condtion after '?' if statement       age > 30 && age < 50 ?   multiple conditions
        "30 sy bara hai "
        :
        age>10 ?            // 2nd condition
        "30 sy chota hai "
        :                   // : after colon else statement
        "10 sy chota hai "
console.log(check)

*/
// -----------------------------x----------------



/*

var bool=false;      //DOM me bool rander nhi hota

var name = bool && "Ghous";     // agar bool true hoto ghous dikhao
                            //agar nhi to false dikha do
console.log(name)


*/



// -----------------------------x----------------






////    Fetch

/*

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())              // format changes to json
    .then(json => console.log("result ==>", json))  //agar data receive too result aya
    .catch(error => console.log("error ==>", error))//werna error

*/



// -----------------------------x----------------


//  Promise      &&    Async or Syncronus



//setTimeout(function() {} ,1000);    //Async JavaScript for timedelay

/*


for (var i = 0; i <= 5; i++) {

    setTimeout(function () {
        console.log(i)

    }, 1000);   //   1sec
}

console.log("Number 2")
console.log("Number 3")


for (let i = 0; i <= 5; i++) {

    setTimeout(function () {
        console.log(i)

    }, 1000);   //   1sec
}

console.log("Number 2")
console.log("Number 3")

*/
// https://www.linkedin.com/pulse/how-resolve-settimeout-inside-loop-ibe-stephen/
// -----------------------------x----------------


//      Promise
// working until data receive

/*

var promise = new Promise(function (resolve, reject) {    //call back function
    var zinger = "Available";
    setTimeout(() => {          ////        setTimeout use krne sy humne pending k status bhi dekh liya
        if (zinger === "Available") {       //means k data jb tk receive nhi hoga to promise pending pe rehta hai
            resolve("Hn bhai krwadiya")     // or data ya error receive hoto wo nichy show hojayengy
        } else {
            reject("Nahi Khilaya")
        }
    }, 3000);           ////setTimeout 1 highorder function hai jo apne parameters me 2 argument lyta hai.
    //// 1st me function , 2nd me time, or itne time bad wo run hota hai.

})

////  promise.then  or promise.catch  two methodes
console.log(promise)

promise.then(function (data) {    //promise resolve here/////.then higher order function too apne parameter me function ly rha hai .
    console.log("Resolve==>", data)
})
    .catch(function (error) {         //promise reject here
        console.log("Reject==>", error)
    })


*/



// -----------------------------x----------------

//      Promise     Example 2   // is example me mane shorthand(ES6) use kiya hai. ES5 upper hai



/*

// getData = () => {    //no need


    let checkPromise = new Promise((resolve, reject) => {   // promise k result 1 variable me
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())              // format changes to json
            .then(file => resolve(file))  //agar data receive too "resolve" k parameter me send krengy
            .catch(error => reject(error))//werna error too "reject" k parameter me send krengy

    })

    checkPromise                 // variable k sath .then and .catch use
        .then((file) => {       //promise resolve here/////.then higher order function too apne parameter me function ly rha hai .
            console.log("result agaya xD===>", file)
        })
        .catch((error) => {
            console.log("error agaya :(", error)
        })

}

// getData();   //no need


*/

//Alert
//checkPromise.then or .catch 1 hi body me hongy jis me promise banayagya hai.

// -----------------------------x----------------



////    Async Await

/*


async function getData() {          // ES6 me ye line is trha hogi->>>     const getData = async () => {            //  () <- ye parameter k liye
    let checkPromise = new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())              // format changes to json
            .then(file => resolve(file))  //agar data receive too "resolve" k parameter me send krengy
            .catch(error => reject(error))//werna error too "reject" k parameter me send krengy

    })

    let data = await checkPromise;              //// await -> wait kr rha hai checkPromise k result k.
    console.log("data mil gaya by await ==>", data)

}

getData();

*/

//Alert
//.await 1 hi body me hongy jis function ko Async kiya gaya hai

// -----------------------------x----------------

// Closure
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure 
//check above link

// if (Math.random() > 0.5) {
//   const x = 1;
// } else {
//   const x = 2;
// }
// console.log(x); // ReferenceError: x is not defined

// check above example with let and Var


//------------------------------------x------------------

// Closure scope chain


// global scope
const e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // outer functions scope
            return function (d) {
                // local scope
                return a + b + c + d + e;
            };
        };
    };
}

console.log(sum(1)(2)(3)(4)); // 20



//------------------------------------x------------------


// callBack
// koye easa kam jb wo complete ho to hamen inform krdy

function Greet(dataGet) {
    console.log(`Assalam o Alaikum  ${dataGet} as CallBack`)
}

function A(cb) {
    console.log("1st Welcome")
    let user = "Abid"
    setTimeout(() => {
        cb(user)
    }, 1000)
}

A(Greet);


//------------------------------------x------------------


//  CallBack Hell

function result(numResult) {
    console.log(`Result -> ${numResult}`)
}

function add(passVal, cb) {
    console.log("Welcome")
    setTimeout(() => {
        let num1 = 3 + passVal;

        setTimeout(() => {
            let num2 = 5 + num1

            setTimeout(() => {          //callBack Hell
                let num3 = 5 + num2

                setTimeout(() => {
                    let num4 = 5 + num3

                    cb(num4)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

add(4, result);


//------------------------------------x------------------

/*

function add(passVal) {
    // console.log("Welcome")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num1 = 3 + passVal;
            resolve(num1);
        }, 1000)
    })
}

add(4).then((data) => console.log(data))

*/


// Promise.all me agar 1 bhi reject hua too reject ayega resolve nhi ayega( abhi tk)

const promise1 = Promise.resolve(3);    //yhn reject kr k check kren
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'foo');
});

Promise.all([promise1, promise2, promise3])
    .then((data) => { console.log(data) })
    .catch((error) => { console.log(error) })
// Expected output: Array [3, 42, "foo"]

// .then((file) => {       //promise resolve here/////.then higher order function too apne parameter me function ly rha hai .
// console.log("result agaya xD===>", file)
// })
// .catch((error) => {
// console.log("error agaya :(", error)
// })

function add(passVal) {
    // console.log("Welcome")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num1 = 3 + passVal;
            resolve(num1);
        }, 1000)
    })
}

add(4)
    .then((data) => {
        return add(data);
    })
    .then((data) => {
        return add(data);
    })
    .then((data) => {
        return add(data);
    })
    .then((data) => {
        console.log(data);
    })

//------------------------------------x------------------

// Async

function add(passVal) {
    // console.log("Welcome")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num1 = 3 + passVal;
            resolve(num1);
        }, 1000)
    })
}

// or async function Foo(){
(async function () {        //async us function sy pehly hoga jhn await k call kryga 2nd function ko
    try {
        const result = await add(4) // wait for function response
        const result1 = await add(result)
        const result2 = await add(result1)
        console.log(result2);
    } catch (error) {
        console.log(error);

    }

})()


// Foo()    //agar ap naming function rakhogy to usy apne call krna hai
// Foo().then((data)=>console.log(data));
