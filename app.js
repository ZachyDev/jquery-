$(document).ready(function() {
    $("#web-head").mouseover(function() {
        $(this).hide(3000);
    });
});

// hide elements using tag selector
$(document).ready(function() {
    $("button").click(function() {
        $('p').hide(1000);
    })
})

// id selectors

$(document).ready(function() {
    $("#my-head").dblclick(function() {
        $(this).hide();
    });
});

// selects all button elements
$(document).ready(function() {
    $(":button").click(function() {
        $(this).fadeTo(0.4);
    });
});

// link selector

$(document).ready(function() {
    $("[href]").click(function() {
        $(this).hide();
    });
});
``