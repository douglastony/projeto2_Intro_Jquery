$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        if ($('#nova-tarefa').val() != ""){
            const novaTarefa = $('#nova-tarefa').val();
            $(`<li class="tarefa">${novaTarefa}</li>`).appendTo("ul");
            $('#nova-tarefa').val('')
        } else {
            alert('O Campo Tarefa não pode estar vazio')
        }
    })
    $(document).on('click', 'li', function(){
        console.log('Feito');
        $(this).toggleClass('tarefa-feita')
        $(this).toggleClass('tarefa');
    })

    $('#butao-limpar').on('click', function(){
        $(".tarefa-feita").css('display', 'none');
    })
})

