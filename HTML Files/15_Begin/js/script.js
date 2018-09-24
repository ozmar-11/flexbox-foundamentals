$(document).ready(function() {
    $('#magnify').click(function () {
        $(this).hide();
        $('#search').toogle('scale');
        $('#search').css('display', 'block');
    });
});
