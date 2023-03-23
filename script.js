


var randomNumb1= Math.floor(Math.random()*6)+1;
var randomImg= "dice"+randomNumb1+".png";
var randomImgSource=  "images/"+ randomImg ;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource);


var randomNumb2= Math.floor(Math.random()*6)+1;
var randomImg2= "dice"+randomNumb2+".png";
var randomImgSource2=  "images/"+ randomImg2 ;

var image2  = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSource2);

if(randomNumb1>randomNumb2){
    document.querySelector("h1").innerHTML="Player1 wins🚩"
}
else if(randomNumb1<randomNumb2){
    document.querySelector("h1").innerHTML="Player2 wins🚩"
}
else{
    document.querySelector("h1").innerHTML="Its a tie:)"
}




