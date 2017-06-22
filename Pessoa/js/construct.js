(function($){
      $("#enviar").click(function(){
            var nome = $("#nome").val();
                  if(typeof nome == "string" && nome != "") {
                    Pessoa.atribuirNome(nome);
                      var nome = Pessoa.ObterNome();
                              var settings = {
                                "async": true,
                                "crossDomain": true,
                                "url": "http://54.233.161.953000/inserir/pessoa",
                                "method": "POST",
                                      "headers": {
                                        "content-type": "application/x-www-form-urlencoded",
                                        "cache-control": "no-cache",
                                      },
                                            "data": {
                                            "nome": nome
                                          }
                       }

                       
                $.ajax(settings).done(function (response) {
                        $("#avisos").css('color','green')
                        .css('font-weight', 'bold')
                        .css('font-size', '1.8em')
                        .html('<i class="glyphicon glyphicon-ok" />  A pessoa ' + nome + ' Foi inserido com sucesso');
                       $('#myModal').modal('toggle');


                });

     // console.log(setting);
             // console.log(Pessoa)
            }else{
                      $("#avisos").css('color','red').css('font-weight','bold').css('font-size','1.8em').html('<i class="glyphicon glyphicon-remove" /> Nome é obrigatorio');
                      $('#myModal').modal('toggle');  
                 }
      });
})(jQuery);