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

const increasebtn = document.getElementById("increasebtn");

const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const counterlabel = document.getElementById("counterlabel");
let count = 0;


increasebtn.onclick = function () {

    count++;
    counterlabel.textContent = count;
}

decreasebtn.onclick = function (){
    count--;
    counterlabel.textContent = count;

}
resetbtn.onclick = function (){
    count= 0;
    counterlabel.textContent = count;

}