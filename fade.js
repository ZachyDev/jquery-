$(document).ready(function() {
    $("button").click(function() {
        $("#div1").fadeIn();
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(3000);
        $("#div4").fadeIn(5000);
    });
});