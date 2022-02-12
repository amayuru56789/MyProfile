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

//Save Customer

//btn select
document.getElementById("btnAdd").addEventListener("click", function (){

    //gather customer information
    var custId = document.getElementById("txtCustId").value;
    var custName = document.getElementById("txtCustName").value;
    var custAddress = document.getElementById("txtCustAddress").value;
    var custSalary = document.getElementById("txtCustSalary").value;

    /*create a row*/
    //var row = `<tr><td>${custID}</td><td>${custName}</td><td>${custAddress}</td><td>${custSalary}</td></tr>`;
    var row = `<tr><td>${custId}</td><td>${custName}</td><td>${custAddress}</td><td>${custSalary}</td></tr>`;
   /* console.log(row);*/

    /*select the body and added the row */
    //document.getElementById("customerTable").append(row);
    $("#customerTable").append(row);
});

/*save item*/
document.getElementById("btnItem").addEventListener("click", function (){

    //gather item information
    var itemCode = document.getElementById("txtCode").value;
    var itemName = document.getElementById("txtItemName").value;
    var price = document.getElementById("txtPrice").value;
    var qty = document.getElementById("txtQty").value;

    /*create a row*/
    var row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${price}</td><td>${qty}</td></tr>`;
   /* console.log(row);*/

    /*select the body and added the row */
    //document.getElementById("itemTable").append(row);
    $("#itemTable").append(row);
});