package TicTacToe;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class TicTacToe {
	private Scanner entrada = new Scanner(System.in);
	private ArrayList<ArrayList<String>> matriz = new ArrayList<ArrayList<String>>();
	
	private void imprimeMatriz() {
		for (int i = 0; i < matriz.size(); i++) {
			System.out.println(matriz.get(i));
		}
	}
	
	private String tabuleiro() {
		imprimeMatriz();
		return entrada.nextLine();
	}
	
	public void iniciar() {
		ArrayList<String> linhaTabuleiro1 = new ArrayList<String>(Arrays.asList("_","_","_"));
		ArrayList<String> linhaTabuleiro2 = new ArrayList<String>(Arrays.asList("_","_","_"));
		ArrayList<String> linhaTabuleiro3 = new ArrayList<String>(Arrays.asList("_","_","_"));
		
		matriz.add(linhaTabuleiro1);
		matriz.add(linhaTabuleiro2);
		matriz.add(linhaTabuleiro3);
		
		boolean vezJogador1 = true;
		Boolean houveVencedor = false;
		for(int i = 0; i < 9; i++) {
			String jogada = tabuleiro();
			Integer linha = Integer.valueOf(jogada.split("-")[0]);
			Integer coluna = Integer.valueOf(jogada.split("-")[1]);
			
			if(vezJogador1) {
				matriz.get(linha).set(coluna, "X");
			} else {
				matriz.get(linha).set(coluna, "O");
			}
			if (verificacaoVencedor()) {
				houveVencedor = true;
				String vencedor = vezJogador1 ? "1" : "2"; //funciona como um if simplificado
				imprimeMatriz();
				System.out.println("O jogador " + vencedor + " venceu!");
				break;
			}
			vezJogador1 = !vezJogador1;
		}
		if (!houveVencedor) {
			imprimeMatriz();
			System.out.println("Não houve vencedor");
		}
	}
	
	private boolean verificacaoVencedor() {
		//3 significa as 3 casas verificadas para completar o jogo da velha
		for (int i = 0; i < 3; i++) {
			//verificação de vitória na horizontal
			String horizontal1 = matriz.get(i).get(0);
			String horizontal2 = matriz.get(i).get(1);
			String horizontal3 = matriz.get(i).get(2);
			
			if (!horizontal1.equals("_") 
					&& horizontal1.equals(horizontal2) 
					&& horizontal1.equals(horizontal3)) {
				return true;
			}
			//verificação de vitória na vertical
			String vertical1 = matriz.get(0).get(i);
			String vertical2 = matriz.get(1).get(i);
			String vertical3 = matriz.get(2).get(i);
			
			if (!vertical1.equals("_") 
					&& vertical1.equals(vertical2) 
					&& vertical1.equals(vertical3)) {
				return true;
			}
		}
		//verificação de vitória na diagonal (esquerda para direita, de cima para baixo)
		String diagonal1 = matriz.get(0).get(0);
		String diagonal2 = matriz.get(1).get(1);
		String diagonal3 = matriz.get(2).get(2);
		
		if (!diagonal1.equals("_") 
				&& diagonal1.equals(diagonal2) 
				&& diagonal1.equals(diagonal3)) {
			return true;
		}
		//verificação de vitória na diagonal invertida (direita para esquerda,de baixo para cima)
		String diagonalInvertida1 = matriz.get(0).get(2);
		String diagonalInvertida2 = matriz.get(1).get(1);
		String diagonalInvertida3 = matriz.get(2).get(0);
		
		if (!diagonalInvertida1.equals("_") 
				&& diagonalInvertida1.equals(diagonalInvertida2)
				&& diagonalInvertida1.equals(diagonalInvertida3)) {
			return true;
		}
		return false;
	}

}
