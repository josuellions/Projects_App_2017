var Pessoa = {
	//propriedade
	nome: null,

	atribuirNome: function(nome){
		this.nome = nome;
	},

	//metodo
	ObterNome: function() {
		return this.nome;
	}
};

//module.exports = Pessoa;