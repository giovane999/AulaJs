/* Novo Js Alura */

var tempoInicial = 10;
var campo = $(".campo-digitacao");

//carega todas as funcoes ao dar f5
$(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$("#reiniciar-jogo").click(reiniciaJogo);
});

// Atualiza frase 
function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numeroPalavras = frase.split(" ").length;
	var contador = $("#palavras");
		contador.text(numeroPalavras);

}
// Inicializa Contadores
function inicializaContadores(){
	campo.on("input", function(){
			var conteudo = campo.val();
			var quantidadePalavras = conteudo.split(" ").length;
					$("#contador-palavras").text(quantidadePalavras);
			
			var quantidadeCaracteres = conteudo.length;
				$("#contador-caracteres").text(quantidadeCaracteres);
	})
}

//Inicializa Cronometro
function inicializaCronometro(){
	campo.one("focus",function(){
	var tempoRestante = $("#contador").text();
		var cronometroID = setInterval(function(){
			tempoRestante --;
				$("#contador").text(tempoRestante);
				if (tempoRestante < 1){
					campo.attr("disabled", true);
						clearInterval(cronometroID)
				}
		},1000)
	})	
}

//Reseta Jogo
function reiniciaJogo() {
	campo.attr("disabled", false);
	campo.val("");
	$("#contador-caracteres").text("0")
	$("#contador-palavras").text("0");
	$("#contador").text(tempoInicial);
	inicializaCronometro();
}



/* Novo Js Alura */

