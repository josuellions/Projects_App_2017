(function($){

$("#listar").click(function(){
        var settings = {
          // "url": "http://21.21.21.5:3000/listar/pessoa",
          "url":"http://54.233.161.95:4000/pessoa",
          "method": "GET",
          "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "78821fb2-d3bc-2800-bf0f-ccb2c893b975"
          }
        }
       var ip = "http://54.233.161.95:4000/pessoa" ;;


                   //$.each(exib, function(id,value){
                    $('#table_02 > tbody').append('<tr>' + '<td>' + ip + '</td>' + '</tr>'
                        );

  

          $.ajax(settings).done(function (response) {
              var exib = response;




              $.each(exib, function(id,value){
                  if(exib.length )     { 
                      $('#table_01 > tbody').append('<tr>' + '<td>' + this.id + '</td>' + '<td>' + this.nome + 
                        '</td>' + '</tr>'
                        );
                //console.log(id,value)
                 }

           });
      });
});

})(jQuery);