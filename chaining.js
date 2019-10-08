$(document).ready(function() {
    $("button").click(function() {
        $(".box").fadeTo(0.4, 1000)
            .slideUp(1000)
            .slideDown(3000);

    })
})