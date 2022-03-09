$("#btnItem").click(function() {
    saveItem();
    loadAllItems();

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

function saveItem(){
    var itemCode = $("#txtCode").val();
    var itemName = $("#txtItemName").val();
    var price = $("#txtPrice").val();
    var qty = $("#txtQty").val();

    /*var itemOb = {
        code:itemCode,
        name:itemName,
        price:price,
        qty:qty
    };

    itemDB.push(itemOb);*/
    itemDB.push(new ItemDTO(itemCode,itemName,price,qty));
}

function loadAllItems(){
    $("#itemTable").empty();
    /*for(var i=0; i<itemDB.length; i++){
        var row = `<tr><td>${itemDB[i].code}</td><td>${itemDB[i].name}</td><td>${itemDB[i].price}</td><td>${itemDB[i].qty}</td></tr>`;
        $("#itemTable").append(row);
    }*/
    for(var i of itemDB){
        let row = `<tr><td>${i.getItemCODE()}</td><td>${i.getItemName()}</td><td>${i.getItemPrice()}</td><td>${i.getItemQty()}</td></tr>`;
        $("#itemTable").append(row);
    }
}

$("#button-addon3").click(function(){
    var searchCode = $("#txtsearchItemId").val();
    var response = searchItem(searchCode);
    if(response){
        $("#txtCode").val(response.getItemCODE);
        $("#txtItemName").val(response.getItemName);
        $("#txtPrice").val(response.getItemPrice);
        $("#txtQty").val(response.getItemQty);
    }else{
        /*clearAll();*/
        alert("No such a Item");
    }
});

function searchItem(code){
    for(let i=0; i<itemDB.length; i++){
        if(itemDB[i].getItemCODE==code){
            return itemDB[i];
        }
    }
}

function updateItem(){
    var itemCode = document.getElementById("txtCode").value;
    var itemName = document.getElementById("txtItemName").value;
    var itemPrice = document.getElementById("txtPrice").value;
    var itemQty = document.getElementById("txtQty").value;

    for(var i=0; i<itemDB.length; i++){
        if(itemDB[i].getItemCODE()==itemCode){
            var item = itemDB[i];
             item.setItemName(itemName);
             item.setItemPrice(itemPrice);
             item.setItemQty(itemQty);
        }
    }
}

$("#btnItemUpdate").click(function() {
    updateItem();
    loadAllItems();
});

function deleteItem(code){
    let item;
    if(code!=null){
        for(var i=0; i<itemDB.length; i++){
            if(code==itemDB[i].getItemCODE()){
                item=itemDB[i];
            }
        }
        let index = itemDB.indexOf(item);
        itemDB.splice(index,1);
        return true;
    }else{
        return false;
    }

}

$("#deleteItem").click(function() {
    let code = $("#txtCode").val();

    let option = confirm(`Do you want delete Item : ${code} `);
    if(option){
        if(deleteItem(code)){
            alert("Item delete Success");
            loadAllItems();
        }else{
            alert("Try again...");
        }
    }
});
/*//validation start
const regExItemCode = /^(I00-)[0-9]{1,3}$/;
const regExItemName = /^[A-z ]{1,20}$/;
const regExItemPrice = /^[0-9]{1,}[.]?[0-9]{1,2}$/
const regExItemQty = /^[0-9]{1,}$/;

$('#txtCode,#txtItemName,#txtPrice,#txtQty').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$('#txtCode,#txtItemName,#txtPrice,#txtQty').on('blur', function () {
    formValid();
});

//focusing events
$("#txtCode").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }

    if (eventOb.key == "Control") {
        var typedCustomerID = $("#txtCode").val();
        var srcCustomer = searchCustomerFromID(typedCustomerID);
        $("#txtCode").val(srcCustomer.getCustomerID());
        $("#txtItemName").val(srcCustomer.getCustomerName());
        $("#txtPrice").val(srcCustomer.getCustomerAddress());
        $("#txtQty").val(srcCustomer.getCustomerSalary());
    }

});

$("#txtItemName").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtPrice").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});

$("#txtQty").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfValid();
    }
});
// focusing events end

$("btnItem").attr('disabled', true);

function clearAll() {
    $('#txtCode,#txtItemName,#txtPrice,#txtQty').val("");
    $('#txtCode,#txtItemName,#txtPrice,#txtQty').css('border', '2px solid #ced4da');
    $('#txtCode').focus();
    $("#btnItem").attr('disabled', true);
    loadAllCustomers();
    $("#lblitemcode,#lblitemname,#lblitemprice,#lblitemqty").text("");
}

function formValid() {
    var itemCode = $("#txtCode").val();
    $("#txtCode").css('border', '2px solid green');
    $("#lblitemcode").text("");
    if (regExItemCode.test(itemCode)) {
        var itemName = $("#txtItemName").val();
        if (regExItemName.test(itemName)) {
            $("#txtItemName").css('border', '2px solid green');
            $("#lblitemname").text("");
            var itemPrice = $("#txtPrice").val();
            if (regExItemPrice.test(itemPrice)) {
                var itemQty = $("#txtQty").val();
                var resp = regExItemQty.test(itemQty);
                $("#txtPrice").css('border', '2px solid green');
                $("#lblitemprice").text("");
                if (resp) {
                    $("#txtQty").css('border', '2px solid green');
                    $("#lblitemqty").text("");
                    return true;
                } else {
                    $("#txtQty").css('border', '2px solid red');
                    $("#lblitemqty").text("Item QTY is a required field : Pattern 1 or 10");
                    return false;
                }
            } else {
                $("#txtPrice").css('border', '2px solid red');
                $("#lblitemprice").text("Item Price is a required field : Mimum 7");
                return false;
            }
        } else {
            $("#txtItemName").css('border', '2px solid red');
            $("#lblitemname").text("Item Name is a required field : Mimimum 5, Max 20, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtCode").css('border', '2px solid red');
        $("#lblitemcode").text("Item CODE is a required field : Pattern I00-000");
        return false;
    }
}

function checkIfValid() {
    var itemCode = $("#txtCode").val();
    if (regExItemCode.test(itemCode)) {
        $("#txtItemName").focus();
        var itemName = $("#txtItemName").val();
        if (regExItemName.test(itemName)) {
            $("#txtPrice").focus();
            var price = $("#txtPrice").val();
            if (regExItemPrice.test(price)) {
                $("#txtQty").focus();
                var qty = $("#txtQty").val();
                var resp = regExItemQty.test(qty);
                if (resp) {
                    let res = confirm("Do you really need to add this Item..?");
                    if (res) {
                        saveItem();
                        clearAll();
                    }
                } else {
                    $("#txtQty").focus();
                }
            } else {
                $("#txtPrice").focus();
            }
        } else {
            $("#txtItemName").focus();
        }
    } else {
        $("#txtCode").focus();
    }
}

function setButton() {
    let b = formValid();
    if (b) {
        $("#btnItem").attr('disabled', false);
    } else {
        $("#btnItem").attr('disabled', true);
    }
}

$('#btnItem').click(function () {
    checkIfValid();
});*/
//validation ended