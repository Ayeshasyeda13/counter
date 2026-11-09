// let name = `romana`;
// let age = 22;
// let isStudent = false;

// document.getElementById("myh1").textContent = `your name is ${name}`;
// document.getElementById("myp").textContent = `your age is ${age}`;
// document.getElementById("mypara").textContent = `student  ${isStudent}`;

// let username;
// document.getElementById("mysub").onclick= function(){
//   username = document.getElementById("mytext").value;
//    document.getElementById("myh1").textContent = `hello ${username}`
// }

// const increasebtn = document.getElementById("increasebtn");

// const decreasebtn = document.getElementById("decreasebtn");
// const resetbtn = document.getElementById("resetbtn");
// const counterlabel = document.getElementById("counterlabel");
// let count = 0;


// increasebtn.onclick = function () {

//     count++;
//     counterlabel.textContent = count;
// }

// decreasebtn.onclick = function (){
//     count--;
//     counterlabel.textContent = count;

// }
// resetbtn.onclick = function (){
//     count= 0;
//     counterlabel.textContent = count;

// }



//  random num generator

// const mybutton = document.getElementById("mybutton");
// const mylabel = document.getElementById("mylabel");
// const min = 1;
// const max = 6;
// let randomNum;

// mybutton.onclick = function (){

//       randomNum = Math.floor (Math.Random() * min) + max;
//       mylabel.textContent == randomNum;

// }


// const mytext = document.getElementById("mytext");
// const  mysumbit = document.getElementById("mysubmit");
// const resultelement = document.getElementById("resultelement");

// let age;

// mysumbit.onclick = function (){


//             age = mytext.value;
//             age= Number(age);

//       if (age >= 100) {
//             resultelement.textContent = `you are TOO OLD to enter a site`;

//       }else if (age >= 18){
//             resultelement.textContent = `you are Old enough to enter a site`;

//       }else if (age < 18){
//             resultelement.textContent = `you MUST BE 18+ to enter a site`;
//       }else{
//             resultelement.textContent =``;

//       }


// }

// const mycheckbox = document.getElementById("mycheckbox");
// const visabtn = document.getElementById("visabtn");
// const paytmbtn = document.getElementById("paytmbtn");
// const paypalbtn = document.getElementById("paypalbtn");
// const upibtn = document.getElementById("upibtn");
// const mysubmit = document.getElementById("mysubmit");
// const subresult = document.getElementById("subresult");
// const paymentResult = document.getElementById("paymentResult");

// mysubmit.onclick = function (){
//       if (mycheckbox.checked) {
//             subresult.textContent = `you following`;
//       } else {
//             subresult.textContent = `please... ~senpai follow`;
//       }




//       if (visabtn.checked) {
//             paymentResult.textContent = `you are paying with VISA`;

//       } else if (paytmbtn.checked) {
//             paymentResult.textContent = `you are paying with PayTm`;
//       } else if (paypalbtn.checked) {
//             paymentResult.textContent = ` you r paying with paypal`;
//       } else if (upibtn.checked) {
//             paymentResult.textContent = `you are paying with UPI`;
//       } else {
//             paymentResult.textContent = `please select card`;
//       }
// }

// const fullName = "syeda romana";

// let firstName = fullName.slice(0 , 3);


// console.log(firstName);


// let username ="";
// const nametext = document.getElementById("nametext"); 

// while(username == ""){
//    username = window.prompt(`naam bolo`);
//    nametext.textContent = `hello ${username}`;
// }
// console.log(`hello ${username}`);





// *********************frm chai code **********************

// console.log("romana");

//   let checkNumber = 777
//      let recheck = String(checkNumber)
//   console.log( recheck);
  
    
   
  let age = 22
     const changeAge = age++; //postfix also print phle kya value thi 
     const changeAge1 = ++age //prefix changed value hi print karre ga 
  console.log(`age: ${age} changeAge: ${changeAge1}`);
  