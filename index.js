function calculate(){
    var price = parseFloat(document.getElementById("price").value);
    var quantity = parseFloat(document.getElementById("quantity").value);
    var buycharge = (price * quantity * 0.2) / 100;
    var buytotal = (price * quantity) + buycharge;
    document.getElementById("total").innerHTML = quantity * price;
    document.getElementById("buy_charge").innerHTML = buycharge;
    document.getElementById("buy_total").innerHTML = buytotal;

}