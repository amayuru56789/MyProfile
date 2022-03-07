$("#btnItem").click(function() {
    saveItem();
});

function saveItem(){
    var itemCode = $("#txtCode").val;
    var itemName = $("#txtItemName").val;
    var price = $("#txtPrice").val;
    var qty = $("#txtQty").val;

    var itemOb = {
        code:itemCode,
        name:itemName,
        price:price,
        qty:qty
    }

    itemDB.push(itemOb)
}