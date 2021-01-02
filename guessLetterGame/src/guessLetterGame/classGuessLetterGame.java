package guessLetterGame;
import java.util.Scanner;
public class classGuessLetterGame {

	public static void main(String[] args) {
		char caractereDigitado, resposta = 'K'; 
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Tente adivinhar uam letra entre A e Z:");
		caractereDigitado = entrada.nextLine().charAt(0); //charAt(0) pega o caractere de posição 0 digitado no input.
		if (caractereDigitado == resposta)
			System.out.println("Resposta correta");
		else
			System.out.println("Tente novamente");
	}

}
