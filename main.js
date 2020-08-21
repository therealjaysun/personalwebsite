const title = ["Mechanical Engineer", "Business Analyst", "Strategy", "Design", "Prototyping", "Manfucaturing", "Supply Chain", "Automotive", "Finance"];
const endTitle = "Anything if I put my mind to it.";
var i = 0;
var speed = 300;
var cursor = true;
//id = "job-titles"
setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.visibility = "hidden";
        cursor = false;
    }else {
        document.getElementById('cursor').style.visibility = "visible";
        cursor = true;
    }
    }, speed);


// js connection checker
function changeBackground(color) {
    document.body.style.background = color;
 }
 
// window.addEventListener("load",function() { changeBackground('red') });