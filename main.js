$(document).ready(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        const valorinput = $("#tarefa").val();
        $("ul").append(`<li><span class="pendente">📍</span> ${valorinput}</li>`);
        $("#tarefa").val('');

        $("ul").on('click', 'li', function(){
            $(this).toggleClass("linha-meio");
            $(this).toggleClass("checked");
            $(this).find(".pendente").toggleClass("hide");
            
        })

        
    });

});
