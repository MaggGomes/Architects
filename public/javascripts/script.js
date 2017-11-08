$(document).ready(function () {

    // TODO - verificar se é para fazer desaprecer o div com click ou após alguns segundos
    $('#main-screen-display').click(function(){
        $(this).fadeOut(2000, function(){
            $('.hidden-container').fadeIn(2000);
        });
    });

    $(document).on("click", "#projects", function() {
        $('.hidden-container').css({'display': 'block'});
    });

    $(document).on("click", "#team", function() {
        $('.hidden-container').fadeIn(2000);
    });

    $(document).on("click", "#contacts", function() {
        $('.hidden-container').fadeIn(2000);
    });

});
