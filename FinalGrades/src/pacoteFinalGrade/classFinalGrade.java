package pacoteFinalGrade;

public class classFinalGrade {

	public static void main(String[] args) {
		double nota1, nota2, nota3, nota4, frequencia, totalNotas, testeRecuperacao;
		char statusAluno;
		boolean aprovado;
		String nomeAluno;
		
		nomeAluno = "Jaqueline Pereira da Silva";
		statusAluno = 'M';
		
		nota1 = 5;
		nota2 = 5;
		nota3 = 5;
		nota4 = 5;
		testeRecuperacao = 85;
		
		frequencia = 0.80;
		
		totalNotas = nota1 + nota2 + nota3 + nota4;
		
		aprovado = totalNotas >= 70 && frequencia >= 0.75 || testeRecuperacao >= 80 && frequencia >= 0.75;
		
		System.out.printf("o aluno %s atingiu a pontuação final %.0f e frequencia %.0f%%. \nStatus atual: %c."
				+ "\nEsse estudante foi aprovado? \n%b", nomeAluno, totalNotas, frequencia*100, statusAluno, aprovado);

	}

}
