let platformFee = 0.472;
let TDSFee = 0.01;
function calculate() {
    var price = parseFloat(document.getElementById("price").value);
    var quantity = parseFloat(document.getElementById("quantity").value);
    var buycharge = (price * quantity * platformFee) / 100;
    var buytotal = (price * quantity) + buycharge;
    document.getElementById("total").innerHTML = quantity * price;
    document.getElementById("buy_charge").innerHTML = buycharge;
    document.getElementById("buy_total").innerHTML = buytotal;

}


function sellcalculate(){
    var price = parseFloat(document.getElementById("price").value);
    var quantity = parseFloat(document.getElementById("quantity").value);
    var buycharge = (price * quantity * platformFee) / 100;
    var buytotal = price * quantity + buycharge;
    var sellprice = parseFloat(document.getElementById("sell_price").value);
    var sell_total = quantity * sellprice;
    var sell_charge = (sell_total * platformFee) / 100;
    var tds = (sell_total - sell_charge) * TDSFee;
    var total_sell = sell_total - sell_charge - tds;
    
    document.getElementById("sell_total").innerHTML = sell_total;
    document.getElementById("sell_charge").innerHTML = sell_charge;
    document.getElementById("tds").innerHTML = tds;
    document.getElementById("total_sell_price").innerHTML = total_sell;


    var revenue = total_sell - buytotal;
    document.getElementById("revenue").innerHTML = revenue;
}