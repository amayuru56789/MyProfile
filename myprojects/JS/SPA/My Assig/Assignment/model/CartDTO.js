function CartDTO(itemCode,itemName,price,qty,total){
    var __itemCode=itemCode;
    var __itemName=itemName;
    var __itemPrice=price;
    var __itemQTY=qty;
    var __itemTot=total;

    this.getItemCode = function() {
        return __itemCode;
    }

    this.setItemCode = function() {
        __itemCode=itemCode;
    }

    this.getItemName = function() {
        return __itemName;
    }

    this.setItemName = function() {
        __itemName=itemName;
    }

    this.getItemPrice = function() {
        return __itemPrice;
    }

    this.setItemPrice = function() {
        __itemPrice=price;
    }

    this.getItemQty = function() {
        return __itemQTY;
    }

    this.setItemQty = function() {
        __itemQTY=qty;
    }

    this.getItemTotal = function() {
        return __itemTot;
    }

    this.setItemTotal = function() {
        __itemTot=total;
    }
}