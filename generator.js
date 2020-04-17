var color1 =document.querySelector(".color1");
color1.addEventListener("input",creat)
var color2 =document.querySelector(".color2")
color2.addEventListener("input",creat)
var selectingh3 = document.querySelector("h3");
var back = document.querySelector("#gradient");


function creat (){ 
 back.style.background="linear-gradient(to right, " + color1.value + "," + color2.value + ")";
 selectingh3.innerHTML=back.style.background + ";"
}



