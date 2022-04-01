   
  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
  
  $("h4").dblclick(function(){
    $(this).css('color', 'red');
    });
    
    $ ("#enviarCorreo").click(function(){
        alert ("El correo fue enviado correctamente")
    })

    $ (".card-title").click(function(){
         $ (".card-deck").toggle();
    })