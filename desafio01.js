var fs = require("fs");
var arquivo = "funcionarios.json";
var listaFuncionarios;
//ler arquivo json no promp de comando
fs.readFile(arquivo, "utf-8", function(err, data){
    if (err) {
        console.log(err);
    } else {
        listaFuncionarios = JSON.parse(data); //passar os dados que eram stringS para objeto json.
        //console.log(listaFuncionarios);
    }
});

maiorSalarioEmpresa(listaFuncionarios);
function maiorSalarioEmpresa(listaFuncionarios) {
    var obj = JSON.parse(listaFuncionarios);
    console.log(listaFuncionarios);
};
