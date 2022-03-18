function setCreditUnits(row) {
    var value = row.value;
    document.getElementById("1").innerHTML = value
    document.getElementById("2").innerHTML = value
    document.getElementById("3").innerHTML = value
    document.getElementById("4").innerHTML = value
    document.getElementById("5").innerHTML = value
    document.getElementById("6").innerHTML = value
}
function calculate(){
    var y = 90;
    var x = document.getElementById("one").value;

    document.getElementById("out").innerHTML = x * y;
    document.getElementById("total").innerHTML = x *y;
    document.getElementById("average").innerHTML = x *y/6;
}