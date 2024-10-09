let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//essa função é dinâmica e tem a utilidade de colocar determinada palavra em minusculo ou em maiusculo, como tambem adiciona "cenoura" no texto
