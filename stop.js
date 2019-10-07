$(document).ready(function() {
    $("#start").click(function() {
        $(".box").animate({ left: "500px", height: "toggle", opacity: '0.5' }, 2000);
    });
    $("#stop").click(function() {
        $(".box").stop();
    });
});