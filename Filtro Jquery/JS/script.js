$(document).ready(()=>{
    $('.btns_principais').on('click',function (){ // não usar arrow function
        const idElemento = $(this).attr('id')
        const divImagem = $('.imagem')

        $('.btns_principais').removeClass('active')
        $(this).addClass('active')
        
        selecionaImagens(idElemento,divImagem);
    });
});

function selecionaImagens(classeTipo,div_imagens){
    if(classeTipo == 'todos'){
        $(div_imagens).fadeIn();
    }else{
        $(div_imagens).each(function (){
            if(!$(this).hasClass(classeTipo)){
                $(this).fadeOut('slow');
            }else{
                $(this).fadeIn();
            };
        });
    };
}