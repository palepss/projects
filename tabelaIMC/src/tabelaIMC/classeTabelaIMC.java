package tabelaIMC;
import java.util.Scanner;
public class classeTabelaIMC {

	public static void main(String[] args) {
		double peso, altura, imc;
		
		Scanner entrada = new Scanner(System.in);
		System.out.println("Digite o peso: ");
		peso = entrada.nextFloat();
		System.out.println("Digite a altura: ");
		altura = entrada.nextFloat();
		
		imc = peso / (altura * altura);
		System.out.printf("Seu IMC é %.1f.\n", imc);
		
		if (imc <= 19)
			System.out.println("Abaixo do peso.");
		else if (imc > 19 && imc <= 25)
			System.out.println("Peso ideal.");
		else if (imc > 25 && imc <= 30)
			System.out.println("Acima do peso.");
		else if (imc > 30 && imc <= 35)
			System.out.println("Obesidade leve.");
		else
			System.out.println("Obesidade.");
	}

}
