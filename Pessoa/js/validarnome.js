function validaNome (e) {
	var expressao;

	expressao = /[a-zA-Z]/;

	if(expressao.test(String.fromCharCode(e.keyCode))) {
	   var recbNome = $("#nome").val();
		//console.log(recbNome);
		if ((typeof recbNome < 20)  && (typeof recbNome > 4)){
			$("#avisos").css('color','red').css('font-weight','bold').css('font-size','1.8em').html('<i class="glyphicon glyphicon-remove" /> Só é permitido letras no campo nome !!!');
           			   $('#myModal').modal('toggle');  
				return true;
		}
	}
	else{
		
	   $("#avisos").css('color','red').css('font-weight','bold').css('font-size','1.8em').html('<i class="glyphicon glyphicon-remove" /> Só é permitido letras no campo nome !!!');
                      $('#myModal').modal('toggle');  
                      return  false;
                };
};