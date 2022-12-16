const register = document.querySelector('.botao');
const corpoRegistro = document.querySelector('.itemCompleto');
const form = document.querySelector('form-lista')

$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        const novaTarefa = $('.nova-tarefa').val(); 
        const novoItem = $(`<li>${novaTarefa}</li>`);
        $(novoItem).appendTo('ul');
        $('li').on('click', function () {
            $(this).addClass('item-completado');
        });
    });
});