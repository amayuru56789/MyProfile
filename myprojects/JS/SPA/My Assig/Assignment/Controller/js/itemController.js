$("#btnItem").click(function() {
    saveItem();
    loadAllItems();
});

function saveItem(){
    var itemCode = $("#txtCode").val();
    var itemName = $("#txtItemName").val();
    var price = $("#txtPrice").val();
    var qty = $("#txtQty").val();

    var itemOb = {
        code:itemCode,
        name:itemName,
        price:price,
        qty:qty
    };

    itemDB.push(itemOb);
}

function loadAllItems(){
    $("#itemTable").empty();
    for(var i=0; i<itemDB.length; i++){
        var row = `<tr><td>${itemDB[i].code}</td><td>${itemDB[i].name}</td><td>${itemDB[i].price}</td><td>${itemDB[i].qty}</td></tr>`;
        $("#itemTable").append(row);
    }
}

$("#button-addon3").click(function(){
    var searchCode = $("#txtsearchItemId").val();
    var response = searchItem(searchCode);
    if(response){
        $("#txtCode").val(response.code);
        $("#txtItemName").val(response.name);
        $("#txtPrice").val(response.price);
        $("#txtQty").val(response.qty);
    }else{
        /*clearAll();*/
        alert("No such a Item");
    }
});

function searchItem(code){
    for(let i=0; i<itemDB.length; i++){
        if(itemDB[i].code==code){
            return itemDB[i];
        }
    }
}
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