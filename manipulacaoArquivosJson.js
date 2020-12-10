var fs = require("fs");
var nomeDooArquivo = "carros.json";
var carros = ["gol", "palio", "uno", "celta"];
//arquivo JSON
var concessionaria = {
    nome: "concessionaria XYZ",
    carros
}
//console.log(concessionaria);

//(primeiro parâmetro: nome do arquivo, segundo parâmetro: JSON.stringif(arquivo json), função parâmetro de erro)
//npm isntall express = rodei no promp de comando pois estava dando erro e deu certo.
//JSON.stringify() = converte em string
//JSON.parse() = recebe em string e converte em objeto
fs.writeFile(nomeDooArquivo, JSON.stringify(concessionaria), function(err) {
    if (err) {
        console.log(err);
    } else {
        fs.readFile(nomeDooArquivo, "utf-8", function(err, data) {
            if (err) {
                console.log(err);
            } else {
                var obj = JSON.parse(data);
                obj.carros.push("HRV");
                fs.writeFile(nomeDooArquivo, JSON.stringify(obj), function(err) {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    }
});