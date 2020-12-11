var carros = ["gol", "palio", "uno", "sandero"];
var carro = carros.pop(); //pop remove o ultimo elemento, adiciona nessa variável e retorna(no terminal)o ultimo elemnto
carros.pop(); //pop remove o ultimo elemento permnentemente
carros[carros.length -1]; // o -1 mostra o ultimo elemento do arrays
console.log(carros);

carros.push("ford k"); // push insere um elemento no fim do array e retorna seu novo tamanho

carros.shift(); //shift remove o primeiro elemento do arrays, retorna ele e atualiza a posição dos outros indices para a direita.

carros.unshift("onix"); //unshift insere um novo elemento no inicio do array e repositiona os outros para a direita.

carros[2] = "novo uno" //altera o elemento dentro do array

delete carros[2]; //remore o elemento, porém não reposiciona os outros elementos. O espaço fica disponivel.

carros.splice(2, 0, "HRV", "celta",); //splice: 2 = posição que os novos elementos vão ser adicionados. 0 = quantos elementos serão removidos (se for 1, vai remover 1 elemento a partir da posição inicial), ""= novos elementos(serão inseridos na posição 2 e reposiciona os outros elementos). 

carros.splice(2, 1); // slice para remover 1 elemento na posição 2.




//concatenação = relacionamento de ideias, fatos ou coisas entre si; ligação, encadeamento.
var carrosAntigos = ["brasilia", "monza", "fusca"];
var todosCarros - carros.concat(carrosAntigos); //concate junta os arrays em orgem de pedido. carros em carrosantigo(1 e 2 posiçao)ou ao contrario
var carrosAntigos2 = ["corsel", "maverik", "chevet"];
var todosCarros - carros.concat(carrosAntigos, carrosAntigos2); //cancatena varias errays.
console.log(todosCarros);
var novoArray2 = todosCarros.slice(2,5); //vai criar um novo array com os alementos entre a posição 2 e 5, ou seja 2,3e4, pois o 5 é o limite e não imprime esse, porém não altera o array original.



//retorna um pedaço solicitado do array criando um novo array, mas sem alterar o array original.