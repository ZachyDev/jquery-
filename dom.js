$(document).ready(function() {
    $("#btn1").click(function() {
        alert($("#par").text());
    })
    $("#btn2").click(function() {
        alert($("#par").html());
    })
    $("#submit-btn").click(function() {
        alert($("#user_name").val());
    })
    $("#attr-btn").click(function() {
        alert($("#attr").attr("href"));
    })
})