$(document).ready(function () {

    // TODO - verificar se é para fazer desaprecer o div com click ou após alguns segundos
    $('#main-screen-display').click(function(){
        $(this).css({'display': 'none'});
        $('.main-container').css({'display': 'block'});
    });


});
