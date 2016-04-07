function initClearables() {
    var inputs = $('.main-content').find("input[type='text']").not(".noClearable");

    for (var i = 0, len = inputs.length; i < len; i++) {
        var input = inputs[i];

        $(input).bind("keyup cls", function() {
            if ($(this).val() != '') {
                $("#cl_" + $(this).prop("id")).removeClass('hide');
                $("#cl_" + $(this).prop("id")).css("left", $(this).width() + "px");
            } else
                $("#cl_" + $(this).prop("id")).addClass('hide');
        });

        $("<i>").addClass('icon-remove hide').css({
            width: "10px",
            position: "absolute",
            top: "10px",
            cursor: "pointer"
        }).attr({
            id: "cl_" + $(input).prop("id"),
            parent: $(input).prop("id")
        }).insertAfter(input).click(function() {
            var input = "#" + $(this).attr("parent");

            $(input).val("").focus();
            $(this).addClass('hide');
        });
    }
}

$(document).on("mousemove", function() {
    $('.main-content').find("input[type='text']").not(".noClearable").trigger("cls");
});