const title = ["Mechanical Engineer", "Business Analyst", "Strategy/Planning", "Design/Prototyping", "Manufacturing/Supply Chain", "Automotive", "Finance", "Anything if I put my mind to it."];
var i = 0;
var j = 0;
var speed = 300;
var titleSpeed = 50;
var titleGap = 2000;
var industrySpeed = 25;
var industryGap = 1500;
var cursor = true;
var typeSpeed = titleSpeed;
var typeGap = titleGap;

//id = "job-titles"d
setInterval(() => {
    if(cursor) {
        document.getElementById('cursor').style.visibility = "hidden";
        cursor = false;
    }else {
        document.getElementById('cursor').style.visibility = "visible";
        cursor = true;
    }
    }, speed);


//scroll through text
function typingEffect() {
    if (i<title[j].length) {
        document.getElementById("job-titles").innerHTML += title[j].charAt(i);
        i++;
        setTimeout(typingEffect, typeSpeed); 
    } else if(i == title[j].length) {
        i++;
        setTimeout(typingEffect, typeGap);
    } else if(i == 2*title[j].length+1) {
        i = 0;
        j++;
        if (j>1 && j<title.length-1) {
            typeSpeed = industrySpeed;
            typeGap = industryGap;
        }
        setTimeout(typingEffect,0); 
    } else if(j != title.length-1) {
        document.getElementById("job-titles").innerHTML= document.getElementById("job-titles").innerHTML.slice(0,-1);
        i++;
        setTimeout(typingEffect,25);
    }

}

//my careers section
function changeTabs(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

// js connection checker
function changeBackground(color) {
    document.body.style.background = color;
 }
 
window.addEventListener("load",setTimeout(function() { typingEffect() }, 1250));