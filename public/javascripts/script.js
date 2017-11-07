$(document).ready(function () {

    // TODO - verificar se é para fazer desaprecer o div com click ou após alguns segundos
    $('#main-screen-display').click(function(){
        $(this).css({'display': 'none'});
        $('.hidden-container').css({'display': 'block'});
    });


});
