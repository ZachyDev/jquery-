$(document).ready(function() {
    $("#head").mouseenter(function() {
        // alert("Mouse pointer inside the header!")
    });
});

// mutltiple event handlers
$(document).ready(function() {
    $(".box").on({
        mouseenter: function() {
            $(this).css("background-color", "green");
        },
        mouseleave: function() {
            $(this).css("background-color", "orange");
        },
        click: function() {
            $(this).css("background-color", "teal");
        }
    })
})

// hide and show 
$(document).ready(function() {
    $("#btn-hide").click(function() {
        $("#par").hide(1000)
    });
    $("#btn-show").click(function() {
        $("#par").show(1000);
    });
});