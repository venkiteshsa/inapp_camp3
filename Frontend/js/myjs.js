let mytext = 'Hello and Welcome';
//let parttext = mytext.slice(4, 10);
// let parttext = mytext.slice(-11, -4);
//let parttext = mytext.slice(5);
//let parttext = mytext.substring(3);
//alert(parttext);

//string replacement with replace()
 mytext = 'Hi there, How are you.';
// let newtext = mytext.replace('you', 'you?');
// alert(newtext);

//joining two strings using javascript
 mytext2 = ' Hope you are fine';
// let myjoinedtext = mytext.concat(mytext2)
// alert(myjoinedtext)

//changing case
// alert(mytext2.toUpperCase())
// alert(mytext2.tolowerCase())

//trim space
var mytext3 = '  hi  ';
// alert(mytext3.trim())

//select char from the string
let text4 = 'Hello World';
// alert(text4.charAt(6));

//var a = 5, b = 10;

// var result = a+b;
// alert(result);

// result = a-b;
// alert(result);

// result = a*b;
// alert(result);

// result = a/b;
// alert(result);

// var result = eval('a*b+b+2+3');
// alert(result);

// var a=5, b=10, c=5;
// var result = a !== b;
// alert(result)

//conditional operators
var a = 11;
var b = 10;
if(a<b) {
    //alert(a + ' is greater than ' + b);
} else {
    //alert(a + ' is less than ' + b);
}

//switch case
// switch (new Date().getDate()) {
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     default:
//         day = "Weekend"
//         break;
// }

// alert(day)


// for (var i = 1; i < 10; i++) {
//     alert(i);
// }

// var square = (a) => {
//     console.log(a)
//     return a*a
// }


// var result = square(5);
// alert(result)

const myarray = [1, 2, 3]
var array_square = myarray.map(a => a*a)
// console.log(array_square)

// myItems = ['Milk', 'Bread', 'Butter'];

// myItems.forEach(i => {
//     alert(i)
// });


//JSON Objects
//Creating a JSON object using the stringfy() method
// var jsonstring = JSON.stringify({
//     name: "Venky",
//     age: 22,
//     address:{
//         district: "TVM",
//         location: "Technopark"
//     }
// });
// console.log(jsonstring)

//Parsing the JSON string
// var parsedjson = JSON.parse(jsonstring)
// alert(parsedjson.name)
// alert(parsedjson.age)
// alert(parsedjson.address.district)

// var mypelements = document.getElementsByTagName('p')
// var myh2withid = document.getElementById('myh2elemid')
// var myh3withcls = document.getElementsByClassName('myh3elecls')

var myheaderwithid = document.querySelector('#header')
var myallbtns = document.querySelectorAll('.btn')

// alert(mypelements[0].textContent)
// alert(mypelements[1].textContent)
var mytxtname = document.getElementsByName('txtcustname')
// alert(mytxtname[0].value)

var handleClick = function(event) {
    alert(document.getElementById("mytxtbox").value);
    document.getElementById("mytxtbox").value = "The new value";
}