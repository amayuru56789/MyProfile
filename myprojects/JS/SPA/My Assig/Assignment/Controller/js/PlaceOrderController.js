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

function forOrder() {
    generateOrderID();
    loadCustomerIds();

    
}