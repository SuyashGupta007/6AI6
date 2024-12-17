// //strings  
//          //0123456789 
// // var str ="Javascript"
// //             //-3-2-1 -0    
// // var strn = "Js is good for Development Js"

// // console.log(str.length)
// // console.log(str.charAt(3))
// // console.log(str.charCodeAt(3))
// // console.log(str.toLowerCase())
// // console.log(str.toUpperCase())
// // console.log(str.concat(" is king "))
// // console.log(str.trim())
// // console.log(strn.includes("Good"))
// // console.log(strn.indexOf('Js'))
// // console.log(strn.lastIndexOf('Js'))
// // console.log(strn.replaceAll("Js","C++"))
// // console.log(strn.split(" "))
// // console.log(strn.slice(0,4))


// //arr
// const arr =[1,2,3,4,5]
// var brr = [...arr] 
// // brr.pop()
// // console.log(brr)
// // console.log(arr)

// // //arr = [1,3,4,5,6]
// // arr.push(6)
// // console.log(arr)

// // brr.pop()
// // console.log(brr)
// // brr.unshift(0);
// // console.log(brr)
// // brr.shift()

// // console.log(brr)


// // console.log(brr.toString())
// // console.log(brr.join(" "))
// // console.log(brr.concat(arr))
// // console.log(arr.indexOf("king"))
// // console.log(arr.length)

// // // console.log(brr.splice(0,2))
// // // console.log(brr)
// // console.log(brr.slice(0,2))
// // console.log(brr)

// let count =0
// arr.forEach((n)=>{
//     count++
// })
// console.log(count)


// //map

// let doubled = arr.map((n)=>{
//  return n*n;
// })
// console.log(doubled)

// //reduce

// let sum = arr.reduce((total,curr)=>{
//     console.log("till now this is total " +total)
//     console.log("i am current " + curr)
//     return total+curr
// })
// console.log(sum)

// //filter 
// console.log( arr.filter((n)=> n>2))



// //objects


// var obj = {
//     "firstName":"Suyash",
//     "LastName":"Gupta",
//     "Phno":7080249355,
//     "isEmployed": true,
//     "sayHello": function(){console.log("hiiii")},
//     'Eat': ()=>{console.log("i Like to eact indian food")}
// }
// console.log(obj.Phno)
// console.log(obj.sayHello())
// for(var key in obj){
//  // console.log(key + obj[key])
//   console.log(`${key} : ${obj[key]}`)   
// }

// //function statment
// a()
// //b()
// function a(){
//     console.log("hii i am a")
// }
// //a()

// //function expression
// var b = function(){
//   console.log("hii i am b")
// }
// //anonymous function 
// // function(){

// // }
// //xyz()
// function c(param1){
//     return function(){
//        return  param1*param1
//     }
// }
// console.log(c(2)());

// //callback 
//   //setTimeout
//   //setInterval
// //promises 
// //axios
// //fetch
// //XMLHttpRequest
// console.log("hiii")
// setTimeout(function(){
//     console.log("hii2")
// },5000) 
// console.log("hii3")

// var ans = fetch("https://randomuser.me/api")
// .then(res=>res.json())
// .then(data=>console.log(data))
// .catch(err=>console.log(err))


var promise = new Promise((reslove,reject)=>{
     if(false){
        reslove("Sucess")
     }else{
        reject("err")
     }
})

promise.then((result)=>{
    console.log("bhai kaam ho gaya",result)
}).catch((err)=>{
    console.log("bhai nhi hua",err)
})
console.log(promise)

function user(){
    var ans = fetch("https://randomuser.me/api")
.then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))
}
user()