var total = 33000;
var days_of_month;
var context;



function set()
{

    if (document.getElementById("Malfunctions").value)
        total = document.getElementById("Malfunctions").value
    else
        total = 22000;

    var rate = total / (days_of_month * 24 * 60 * 60);
    // now - first day of this month
    var interval = (new Date().getTime() - new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime()) / 1000;
    var result = interval * rate;

    document.getElementById("Money").innerHTML = "This month you have earned " + result.toFixed(8) + " dollars";
    document.getElementById("Rate").innerHTML = "You can earn " + rate + " dollars per second";
    // alert(document.getElementById("Malfunctions").value);
}

function start()
{
    days_of_month = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
    setInterval("set()", 30);
}
