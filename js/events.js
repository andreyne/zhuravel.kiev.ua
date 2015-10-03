$(function () {
    $("#catalog").booklet({
        width: 822,
        height: 611,
        pagePadding: 0,
        pageNumbers: false
    });

    $(".openPage").click(function(event) {
        event.preventDefault();
        var page = parseInt($(this).data("page"));
        $("#catalog").booklet("gotopage", page);
    });

    $(".catalogClose").click(function(event) {
        event.preventDefault();
        $(".catalog-wrapper").hide();
        $(".menu").show();
    });
});
