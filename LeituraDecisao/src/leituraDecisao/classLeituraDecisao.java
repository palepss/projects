package leituraDecisao;
import java.util.Scanner;
public class classLeituraDecisao {

	public static void main(String[] args) {
		Scanner entradaCaractere = new Scanner(System.in);
		Scanner entradaNumero = new Scanner(System.in);
		
		char operacao = ' ';
		int[] numeros = new int[1000];
		int i = 0, somatorio = 0, contaPares = 0;
		double media = 0;
		
		do {
			System.out.printf("Menu de op��es. \n"
					+ "D para digitar novos n�meros.\n"
					+ "Z para apresentar o somat�rio dos n�meros.\n"
					+ "V para visulizar todos os n�meros digitados.\n"
					+ "P para a quantidade de n�meros digitados.\n"
					+ "M para a m�dia simples dos n�meros digitados.\n"
					+ "Q para a quantidade de pares.\n"
					+ "S para sair do programa.");
			operacao = entradaCaractere.nextLine().charAt(0);
			
			switch (operacao) {
			case 'D':
				System.out.println("Digite o n�mero desejado: ");
				numeros[i] = entradaNumero.nextInt();
				i++;
				break;
			case 'Z':
				for (int j = 0; j < i; j++) {
				somatorio += numeros[j];
				}
				System.out.printf("A soma dos n�meros � : %d\n", somatorio);
				break;
			case 'V':
				for (int j = 0; j < i; j++) {
					System.out.printf("%d\n", numeros[j]);
				}break;
			case 'P':
				System.out.printf("Foram digitados %d n�meros.\n", i);
				break;
			case 'M':
				for (int j = 0; j < i; j++) {
					somatorio += numeros[i];
				}
				media = somatorio / i;
				System.out.printf("A m�dia dos n�meros � : %.2f\n", media);
				break;
			case 'Q':
				for (int j = 0; j < i; i++) {
					if (numeros[j] % 2 == 0)
					contaPares += 1;
				}
				System.out.printf("Quantidade de n�meros pares: %d.\n", contaPares);
				break;
			case 'S':
				break;
			default:
				System.out.println("Op��o inv�lida.");					
			}
		} while(operacao != 's');
		System.out.println("Fim da execu��o.");
	}

}
