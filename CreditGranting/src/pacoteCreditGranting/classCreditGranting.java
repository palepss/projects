package pacoteCreditGranting;
// biblioteca do java
import java.math.*;
public class classCreditGranting {

	public static void main(String[] args) {
		// boolean sempre retona true ou false.
		boolean ultimos3EmprestimosQuitados, possuiRendaComprovada, clienteDezEstrelas, restricaoCredito;
		
		ultimos3EmprestimosQuitados = true;
		possuiRendaComprovada = true;
		clienteDezEstrelas = true;
		// no caso de restição de crédito, o ideal é false=não possui restrição. Sendo assim, tem que negar na expressão abaixo com !.
		restricaoCredito = true;
		
		// as operações de lógica entre parênteses são executadas primeiro.
		// !restricaoCredito está negando. Se é falso, retorna verdadeiro. Se é verdadeiro, retorna falso.
		boolean concederCredito = (ultimos3EmprestimosQuitados && possuiRendaComprovada || clienteDezEstrelas) && !restricaoCredito;
		// observe o \n ao lado do place holder no terminal.
		System.out.printf("Empréstimo concedido? \n%b", concederCredito);

	}

}
