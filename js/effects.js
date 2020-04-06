$('.collapse').on('shown.bs.collapse', function() {
    $(this).prev().addClass("active");
}).on('hidden.bs.collapse', function() {
    $(this).prev().removeClass("active");
});


$(".menu-icon-click").click(function() {

    $('section.menu').toggle(1000)
    $(this).toggleClass('closed');

})