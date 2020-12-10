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
		// no caso de resti��o de cr�dito, o ideal � false=n�o possui restri��o. Sendo assim, tem que negar na express�o abaixo com !.
		restricaoCredito = true;
		
		// as opera��es de l�gica entre par�nteses s�o executadas primeiro.
		// !restricaoCredito est� negando. Se � falso, retorna verdadeiro. Se � verdadeiro, retorna falso.
		boolean concederCredito = (ultimos3EmprestimosQuitados && possuiRendaComprovada || clienteDezEstrelas) && !restricaoCredito;
		// observe o \n ao lado do place holder no terminal.
		System.out.printf("Empr�stimo concedido? \n%b", concederCredito);

	}

}
