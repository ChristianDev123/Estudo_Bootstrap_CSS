$(document).ready(function(){
    $('#sidebar').mCustomScrollBar({
        theme:'minimal' //cria scroll personalizado
    });
    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');// cuida de abrir ou fechar a navbar
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded','false');
    });
});