function initPasswordShow() {
    var inputs = $('.main-content').find("input[type='password']");

    for (var i = 0, len = inputs.length; i < len; i++) {
        var input = inputs[i];

        $(input).bind("keyup pwd", function() {
            if ($(this).val() != '') {
                $("#sh_" + $(this).prop("id")).removeClass('hide');
                $("#sh_" + $(this).prop("id")).css("left", $(this).width() + "px");
            } else
                $("#sh_" + $(this).prop("id")).addClass('hide');
        });

        $("<i>").addClass('icon-eye-open hide').css({
            width: "10px",
            position: "absolute",
            top: "10px",
            cursor: "pointer"
        }).attr({
            id: "sh_" + $(input).prop("id"),
            parent: $(input).prop("id")
        }).insertAfter(input).mousedown(function() {
            var input = "#" + $(this).attr("parent");
            $(input).prop("type","text");
        }).mouseup(function(){
        	var input = "#" + $(this).attr("parent");
            $(input).prop("type","password");
        });
    }
}

$(document).on("mousemove", function() {
    $('.main-content').find("input[type='password']").not(".noClearable").trigger("pwd");
});