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
    var searchCode = $("#txtsearchCustId").val();
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