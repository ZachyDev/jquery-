$(document).ready(function() {
    $("#btn1").click(function() {
        alert($("#par").text());
    })
    $("#btn2").click(function() {
        alert($("#par").html());
    })
})