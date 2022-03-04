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

    //remove all the row click events
    $("#customerTable > tr").off("click");

    //gather customer information
    var custId = document.getElementById("txtCustId").value;
    var custName = document.getElementById("txtCustName").value;
    var custAddress = document.getElementById("txtCustAddress").value;
    var custSalary = document.getElementById("txtCustSalary").value;

     //create object
     var customerOb = {
        id:custId,
        name:custName,
        address:custAddress,
        salary:custSalary
    };

    customerDB.push(customerOb);
    loadAllCustomers();

    $("#customerTable > tr").click(function() {
        /*console.log("row clicked");
        console.log(this);*/
        //console.log($(this));
        var customerID = $(this).children(":eq(0)").text();
        var customerName = $(this).children(":eq(1)").text();
        var Address = $(this).children(":eq(2)").text();
        var salary = $(this).children(":eq(3)").text();

        //console.log(customerID, customerName, Address, salary);

        /*set customer details for the textFields*/
        $("#txtCustId").val(customerID);
        $("#txtCustName").val(customerName);
        $("#txtCustAddress").val(Address);
        $("#txtCustSalary").val(salary);
    });

     /*remove row from the customerTable*/
     $("#customerTable > tr").dblclick(function(){
        $(this).remove();
    });
});

function loadAllCustomers(){
    $("#customerTable").empty();
    for(var i=0; i<customerDB.length; i++){
        /*create a row*/
        var row = `<tr><td>${customerDB[i].id}</td><td>${customerDB[i].name}</td><td>${customerDB[i].address}</td><td>${customerDB[i].salary}</td></tr>`;
        /*select the body and added the row */
        $("#customerTable").append(row);
    }
}

//validation
// customer reguler expressions
const regExCustId = /^(C00-)[0-9]{1,3}$/;
const regExCustName = /^[A-z ]{5,20}$/;
const regExCustAddress = /^[0-9/A-z. ,]{7,}$/;
const regExCustSalary = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

$('#txtCustId,#txtCustName,#txtCustAddress,#txtCustSalary').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$('#txtCustId,#txtCustName,#txtCustAddress,#txtCustSalary').on('blur', function () {
    formValid();
});

//focusing events
$("#txtCustId").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }

    if (eventOb.key == "Control") {
        var typedCustomerID = $("#txtCustId").val();
        var srcCustomer = searchCustomerFromID(typedCustomerID);
        $("#txtCustId").val(srcCustomer.getCustomerID());
        $("#txtCustName").val(srcCustomer.getCustomerName());
        $("#txtCustAddress").val(srcCustomer.getCustomerAddress());
        $("#txtCustSalary").val(srcCustomer.getCustomerSalary());
    }

});

$("#txtCustName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCustAddress").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtCustSalary").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});
// focusing events end

$("#btnAdd").attr('disabled', true);

function clearAll() {
    $('#txtCustId,#txtCustName,#txtCustAddress,#txtCustSalary').val("");
    $('#txtCustId,#txtCustName,#txtCustAddress,#txtCustSalary').css('border', '2px solid #ced4da');
    $('#txtCustId').focus();
    $("#btnAdd").attr('disabled', true);

    $("#lblcustid,#lblcustname,#lblcustaddress,#lblcustsalary").text("");
}

function formValid() {
    var custId = $("#txtCustId").val();
    $("#txtCustId").css('border', '2px solid green');
    $("#lblcustid").text("");
    if (regExCustId.test(custId)) {
        var custName = $("#txtCustName").val();
        if (regExCustName.test(custName)) {
            $("#txtCustName").css('border', '2px solid green');
            $("#lblcustname").text("");
            var custAddress = $("#txtCustAddress").val();
            if (regExCustAddress.test(custAddress)) {
                var cusSalary = $("#txtCustSalary").val();
                var resp = regExCustSalary.test(cusSalary);
                $("#txtCustAddress").css('border', '2px solid green');
                $("#lblcustaddress").text("");
                if (resp) {
                    $("#txtCustSalary").css('border', '2px solid green');
                    $("#lblcustsalary").text("");
                    return true;
                } else {
                    $("#txtCustSalary").css('border', '2px solid red');
                    $("#lblcustsalary").text("Cus Salary is a required field : Pattern 100.00 or 100");
                    return false;
                }
            } else {
                $("#txtCustAddress").css('border', '2px solid red');
                $("#lblcustaddress").text("Cus Name is a required field : Mimum 7");
                return false;
            }
        } else {
            $("#txtCustName").css('border', '2px solid red');
            $("#lblcustname").text("Cus Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtCustId").css('border', '2px solid red');
        $("#lblcustid").text("Cus ID is a required field : Pattern C00-000");
        return false;
    }
}

function checkIfValid() {
    var custId = $("#txtCustId").val();
    if (regExCustId.test(custId)) {
        $("#txtCustName").focus();
        var custName = $("#txtCustName").val();
        if (regExCustName.test(custName)) {
            $("#txtCustAddress").focus();
            var custAddress = $("#txtCustAddress").val();
            if (regExCustAddress.test(custAddress)) {
                $("#txtCustSalary").focus();
                var custSalary = $("#txtCustSalary").val();
                var resp = regExCustSalary.test(custSalary);
                if (resp) {
                    let res = confirm("Do you really need to add this Customer..?");
                    if (res) {

                    }
                } else {
                    $("#txtCustSalary").focus();
                }
            } else {
                $("#txtCustAddress").focus();
            }
        } else {
            $("#txtCustName").focus();
        }
    } else {
        $("#txtCustId").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#btnAdd").attr('disabled', false);
    } else {
        $("#btnAdd").attr('disabled', true);
    }
}

$('#btnAdd').click(function () {
    checkIfValid();
});
//validation ended

/*save item*/
document.getElementById("btnItem").addEventListener("click", function (){

    //remove all the row click events
    $("#itemTable > tr").off("click");

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

    $("#itemTable > tr").click(function() {
            console.log("row clicked");
            console.log(this);

            var itemCode = $(this).children(":eq(0)").text();
            var itemName = $(this).children(":eq(1)").text();
            var price = $(this).children(":eq(2)").text();
            var qty = $(this).children(":eq(3)").text();

            /*set item details for the textFields*/
            $("#txtCode").val(itemCode);
            $("#txtItemName").val(itemName);
            $("#txtPrice").val(price);
            $("#txtQty").val(qty);
    });
});
