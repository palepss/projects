//vou criar uma variável para armasenar o arquivo (var fs), require é a função de importação de moduloes/arquivos fora do node.
var fs = require("fs");

//criar variável para o novo arquivo txt para evitar erros.
var nomeArquivo = "meuArquivo.txt";

/* writeFile = criar e escrever arquivo txt - 3 parâmentos ("nomeDoArquivo","texto dentro do arquivo", função calbec = função de parâmetro de erro)
quando termina a escrita do orquivo, a function de erro é executada. Se tiver ocorrido algum erro, 
ele armazena o erro na variavel dentro da função(err). 

readFile = lê o conteúdo de um arquivo. 3 parâmentros. 
("nomeDoAruivo", Formatação do arquivo padrão "utf-8", function com 2 parâmetros) parâmetro de erro e de data.

appendFile = adiciona conteúdo ao texto

*/


fs.writeFile(nomeArquivo, "um texto qualquer", function(err){
    if (err !== null){
        console.log(err);
    } else {
        console.log("arquivo escrito com sucesso");
        fs.appendFile(nomeArquivo, "\nnova linha no texto", function(err){
            if (err) {
                console.log(err);
            } else {
                fs.readFile(nomeArquivo, "utf-8", function(err, data) {
                    if (err) {
                        console.log(err); 
                    } else {
                        console.log(data);
                    }
                });
            }

        });
    }
});