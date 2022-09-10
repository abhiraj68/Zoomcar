barfun2();
function barfun2() {
    
    
    
//     var a1 = document.createElement("a");
//     a1.setAttribute("id", "anchor");

//     var a1_div = document.createElement("div");

//     var i1 = document.createElement("i");
//     var p1 = document.createElement("p");
//     a1_div.append(i1,p1);
//     a1.append(a1_div);

//     var a2 = document.createElement("a");
//     a2.setAttribute("id", "anchor");
//     var a2_div = document.createElement("div");
//     var cdiv1 = document.createElement("div");
//     var i2 = document.createElement("i");
//     var p2 = document.createElement("p");
//     var cdiv2 = document.createElement("div");
//     var p22 = document.createElement("p");

//     cdiv1.append(i2,p2);
//     cdiv2.append(p22);
//     a2_div.append(cdiv1,cdiv2);
//     a2.append(a2_div);


//     var a3 = document.createElement("a");
//     a3.setAttribute("id", "anchor");

//     var a3_div = document.createElement("div");
//     var i3 = document.createElement("i");
//     var p3 = document.createElement("p");

//     a3_div.append(i3,p3);
//     a3.append(a3_div);

//     var a4 = document.createElement("a");
//     a4.setAttribute("id", "anchor");
//     var a4_div = document.createElement("div");
//     var i4 = document.createElement("i");
//     var p4 = document.createElement("p");
//     a4_div.append(i4,p4);
//     a4.append(a4_div);

//     var a5 = document.createElement("a");
//     a5.setAttribute("id", "anchor");
//     var a5_div = document.createElement("div");
//     var i5 = document.createElement("i");
//     var p5 = document.createElement("p");
//     a5_div.append(i5,p5);
//     a5.append(a5_div);

//     var a6 = document.createElement("a");
//     a6.setAttribute("id", "anchor");
//     var a6_div = document.createElement("div");
//     var i6= document.createElement("i");
//     var p6 = document.createElement("p");
//     a6_div.append(i6,p6);
//     a6.append(a6_div);
//     var div1=document.createElement("div");
//     div1.setAttribute("id", "bardiv");

// var d1=document.createElement("div");
// d1.setAttribute("id", "childdiv");
// d1.append(a1);
// var d2=document.createElement("div");
// d2.setAttribute("id", "childdiv");
// d2.append(a2);
// var d3=document.createElement("div");
// d3.setAttribute("id", "childdiv");
// d3.append(a3);
// var d4=document.createElement("div");
// d4.setAttribute("id", "childdiv");
// d4.append(a4);
// var d5=document.createElement("div");
// d5.setAttribute("id", "childdiv");
// d5.append(a5);
// var d6=document.createElement("div");
// d6.setAttribute("id", "childdiv");
// d6.append(a6);


// div1.append(d1,d2,d3,d4,d5,d6);
// div.append(div1);
    var div = document.createElement("div");

    var a1 =document.createElement("a");
    a1.setAttribute("href","signup.html");
    var childdiv1 =document.createElement("div");

    childdiv1.setAttribute("class","childdiv1");
    var i1 = document.createElement("div");
    var h1 = document.createElement("p");

    i1.innerHTML='<i class="fa-solid fa-user"></i>';
    h1.innerText="Login or Signup";
    childdiv1.append(i1,h1)

    a1.append(childdiv1);
    a1.setAttribute("class","menuSection");
  
    
    var a2 =document.createElement("a");
    a2.setAttribute("href","#");
    var childdiv2 =document.createElement("div");
    childdiv1.setAttribute("class","childdiv2");
    var i2 = document.createElement("div");
    var h2 = document.createElement("p");
    i2.innerHTML='<i class="fa-solid fa-location-dot"></i>';
    h2.innerText="Change City";
    childdiv2.append(i2,h2)
    a2.append(childdiv2);
    a2.setAttribute("class","menuSection");

    
    var a3 =document.createElement("a");
    a3.setAttribute("href","partnerPage.html");
    var childdiv3 =document.createElement("div");
    var i3 = document.createElement("div");
    i3.setAttribute("class","zoomm");
    var img=document.createElement("img");
    img.setAttribute("src","https://www.zoomcar.com/build/e222e7ff96ffdd76290118718d52d71f.svg");
    i3.append(img);
    var h3 = document.createElement("p");
    // i3.innerHTML='<i class="fa-solid fa-location-dot"></i>';
    h3.innerText="Become a Host";
    childdiv3.append(i3,h3)
    a3.append(childdiv3);
    a3.setAttribute("class","menuSection");


   
    
    var a4 =document.createElement("a");
    a4.setAttribute("href","indexp1.html");
    var childdiv4 =document.createElement("div");
    var i4 = document.createElement("div");
    var h4 = document.createElement("p");
    i4.innerHTML='<i class="fa-solid fa-file-lines"></i>';
    h4.innerText="Zoomcar Fleet Vehicales Policies";
    childdiv4.append(i4,h4)
    a4.append(childdiv4);
    a4.setAttribute("class","menuSection");
    
    var a5 =document.createElement("a");
    a5.setAttribute("href","indexp2.html");
    var childdiv5 =document.createElement("div");
    var i5 = document.createElement("div");
    var h5 = document.createElement("p");
    i5.innerHTML='<i class="fa-solid fa-file-lines"></i>';
    h5.innerText="Zoomcar Fleet Vehicales Policies";
    childdiv5.append(i5,h5)
    a5.append(childdiv5);
    a5.setAttribute("class","menuSection");

   
    
    var a6 =document.createElement("a");
    a6.setAttribute("href","Help.html");
    var childdiv6 =document.createElement("div");
    var i6 = document.createElement("div");
    var h6 = document.createElement("p");
    i6.innerHTML='<i class="fa-solid fa-phone-volume"></i>';
    h6.innerText="Help & Support";
    childdiv6.append(i6,h6)
    a6.append(childdiv6);
    a6.setAttribute("class","menuSection");
    
    div.append(a1,a2,a3,a4,a5,a6);

    div.style.backgroundColor = "white";
    div.setAttribute("id", "menubar");
    document.querySelector("html").append(div);

    console.log("hello");
    div.style.display = "none";

    i1.setAttribute("class","zoomm");
    i2.setAttribute("class","zoomm");
    i3.setAttribute("class","zoomm");
    i4.setAttribute("class","zoomm");
    i5.setAttribute("class","zoomm");
    i6.setAttribute("class","zoomm");
    

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

document.getElementById("tab3").addEventListener("click",findCar);
var t =document.getElementById("tab3");
function findCar(){
    if(document.getElementById("location").value==""){
        
    }
    else{
        localStorage.setItem("place",document.getElementById("location").value)
        location.href="carPage.html";
        t.style.backgroundColor="green";
    }

}

if(localStorage.getItem("loginName")==null){
    document.getElementById("loginName").innerText="LOGIN/SIGNUP"
}else{
    document.getElementById("loginName").innerText=localStorage.getItem("loginName")
}



