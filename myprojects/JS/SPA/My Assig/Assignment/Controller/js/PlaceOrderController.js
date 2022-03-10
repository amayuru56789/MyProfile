function generateOrderID(){
    try{
        let lastOId = orderDB[orderDB.length-1].getOrderID();
        let newOId = parseInt(lastOId.substring(1,4))+1;
        if (newOId < 10){
            $("#txtOrderId").val("O00"+newOId);
        }else if (newOId < 100){
            $("#txtOrderId").val("O0"+newOId);
        }else {
            $("#txtOrderId").val("O"+newOId);
        }
    }catch (e){
        $("#txtOrderId").val("O001");
    }
}

$("#cmbCustIDs").click(function () {
    let custId = $("#cmbCustIDs").val();
    for (var i of customerDB){
        if (custId==i.getCustomerID()){
            $("#txtPCustName").val(i.getCustomerName());
            $("#txtPCustAddress").val(i.getCustomerAddress());
            $("#txtPCustSalary").val(i.getCustomerSalary());
        }
    }
});

function loadCustomerIds(){
    $("#cmbCustIDs").empty();
    var cutomer = customerDB;
    for (var i in cutomer){
        var opt = document.createElement("option");
        opt.value = cutomer[i].getCustomerID();
        opt.text = cutomer[i].getCustomerID();
        $("#cmbCustIDs").append(opt);
    }
}

$("#cmbItemCode").click(function () {
    let itemCode = $("#cmbItemCode").val();
    for (var i of itemDB){
        if (itemCode==i.getItemCODE()){
            $("#txtPItemName").val(i.getItemName());
            $("#txtPItemPrice").val(i.getItemPrice());
            $("#txtPItemQty").val(i.getItemQty());
        }
    }
});

function loadItemCode(){
    $("#cmbItemCode").empty();
    var item = itemDB;
    for (var i in item){
        var opt = document.createElement("option");
        opt.value = item[i].getItemCODE();
        opt.text = item[i].getItemCODE();
        $("#cmbItemCode").append(opt);
    }
}

function findTotal(){
    let total = 0;
    $('#tblAddToCart > tr').each(function () {
        tot = tot + parseFloat($($(this).children().get(4)).text());
        $('#lblTot > span').text(tot).append('.00');

        if($("#txtDiscount").val()==""){

            $('#lblSubTot > span').text(tot).append('.00');
        }
    });
    t = tot;
}

function forOrder() {
    generateOrderID();
    loadCustomerIds();

    loadItemCode();
    findTotal();
}