barfun2();
function barfun2() {
    var div = document.createElement("div");



    var a1 = document.createElement("a");

    var a1_div = document.createElement("div");
    var i1 = document.createElement("i");
    var p1 = document.createElement("p");

    var a2 = document.createElement("a");
    var a2_div = document.createElement("div");
    var cdiv1 = document.createElement("div");
    var i2 = document.createElement("i");
    var p2 = document.createElement("p");
    var cdiv2 = document.createElement("div");
    var p22 = document.createElement("p");


    var a3 = document.createElement("a");

    var a3_div = document.createElement("div");
    var i3 = document.createElement("i");
    var p3 = document.createElement("p");

    var a4 = document.createElement("a");
    var a5 = document.createElement("a");
    var a6 = document.createElement("a");



    div.style.backgroundColor = "white";
    div.setAttribute("id", "menubar");
    document.querySelector("html").append(div);

    console.log("hello");
    div.style.display = "none";

}



document.querySelector("#bar").addEventListener("click", barfun);
function barfun() {
    document.getElementById("menubar").style.display = "block";
}



document.querySelector("#posterdiv").addEventListener("click", closeMenu);
function closeMenu() {
    document.getElementById("menubar").style.display = "none";
}




document.getElementById("button1").addEventListener("click", bagImg1);
document.getElementById("button2").addEventListener("click", bagImg2);

function bagImg1() {
    var div = document.getElementById("posterdiv");
    div.setAttribute("style", " background-image: url(https://www.zoomcar.com/img/banner_roundtrip.png);");
    var tab1 = document.getElementById("button1");
    tab1.setAttribute("style", " border: 1px solid rgb(105, 163, 77);");
}
function bagImg2() {
    var div = document.getElementById("posterdiv");
    div.setAttribute("style", " background-image: url(https://www.zoomcar.com/img/banner_airport.png);");
    var tab2 = document.getElementById("button2");
    tab2.setAttribute("style", " border: 1px solid rgb(105, 163, 77);");
}