$('textarea').on('keyup paste', function() {
    setTimeout(function(){
        var valorTextarea = $('textarea').val().length;
        var palavras = $('textarea').val().split(' ').length;
        
        $('.caracteres').text(valorTextarea);
        $('.palavras').text(palavras);
    }, 200);
});

$('input').on('keyup paste', function() {
    setTimeout(function(){
        var input = $('input').val();
        var multiplica = input * 10;

        $('.calculo').text(multiplica);
    }, 200);
});