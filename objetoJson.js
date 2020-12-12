var pessoa = {
    "nome": "joão",
    idade: 40,
    telefone: "(99) 9999-9999"
    temCarro: true,
    filhos: [
        "lucas",
        "mateus",
    ]
    pai: {
        nome: "josé",
    }

}

pessoa.filhos.push("gabriel"); //adicionar no final da lista
pessoa.nome =+ "silva"; //acrescentar algo na string


//converter para string
JSON.stringify(pessoa)
JSON.parse()