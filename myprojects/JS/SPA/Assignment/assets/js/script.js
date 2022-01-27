//document.getElementById("home").style.setProperty("Display", "none", "important");
document.getElementById("order").style.setProperty("Display", "none", "important");
document.getElementById("item").style.setProperty("Display", "none", "important");
document.getElementById("customer").style.setProperty("Display", "none", "important");

/*navigate for another pages*/
document.getElementById("home-click").addEventListener("click", function (){
    document.getElementById("home").style.setProperty("Display", "block", "important");
    document.getElementById("order").style.setProperty("Display", "none", "important");
    document.getElementById("item").style.setProperty("Display", "none", "important");
    document.getElementById("customer").style.setProperty("Display", "none", "important");
});

document.getElementById("customer-click").addEventListener("click", function (){
    document.getElementById("customer").style.setProperty("Display", "block", "important");
    document.getElementById("home").style.setProperty("Display", "none", "important");
    document.getElementById("order").style.setProperty("Display", "none", "important");
    document.getElementById("item").style.setProperty("Display", "none", "important");
});

document.getElementById("item-click").addEventListener("click", function (){
    document.getElementById("item").style.setProperty("Display", "block", "important");
    document.getElementById("customer").style.setProperty("Display", "none", "important");
    document.getElementById("home").style.setProperty("Display", "none", "important");
    document.getElementById("order").style.setProperty("Display", "none", "important");
});

document.getElementById("order-click").addEventListener("click", function (){
    document.getElementById("order").style.setProperty("Display", "block", "important");
    document.getElementById("home").style.setProperty("Display", "none", "important");
    document.getElementById("item").style.setProperty("Display", "none", "important");
    document.getElementById("customer").style.setProperty("Display", "none", "important");
});
/*
document.getElementById("customer").style.display="none";
document.getElementById("item").style.display="none";

document.getElementById("home").addEventListener("click", function (){
    document.getElementById("home").style.display="block";
    document.getElementById("customer").style.display="none";
    document.getElementById("item").style.display="none";
});

document.getElementById("customer").addEventListener("click", function (){
    document.getElementById("customer").style.display="block";
    document.getElementById("item").style.display="none";
    document.getElementById("home").style.display="none";
});

document.getElementById("item").addEventListener("click", function (){
    document.getElementById("home").style.display="block";
    document.getElementById("item").style.display="none";
    document.getElementById("customer").style.display="none";
});*/
