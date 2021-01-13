package filaAtendimento;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class FilaAtendimento {
	private Scanner scanner = new Scanner(System.in);
	private Queue<String> fila = new LinkedList<>();
	
	private String mostrarMenu() {
		StringBuilder sb = new StringBuilder();
		sb.append("Digite o comando desejado: \n");
		sb.append("1 - ver fila\n");
		sb.append("2 - adicionar pessoa na fila\n");
		sb.append("3 - chamar próxima pessoa\n");
		sb.append("4 - limpar fila\n");
		sb.append("5 - sair\n");
		System.out.println(sb.toString());
		
		return scanner.nextLine();
	}
	public void iniciar(){
		
		String opcao = mostrarMenu();
		while(!opcao.equals("5")) {
			switch(opcao) {
			case "1":
				System.out.println(fila);
				opcao = mostrarMenu();
				break;
			case "2":
				System.out.println("Digite nome para dicionar pessoa na fila");
				String item = scanner.nextLine();
				fila.add(item);
				System.out.println(fila);
				opcao = mostrarMenu();
				break;
			case "3":
				System.out.println("Próxima pessoa da fila: " + fila.remove());
				System.out.println("Status atual da fila: " + fila);
				opcao = mostrarMenu();
				break;
			case "4":
				fila.clear();
				System.out.println("Status atual da fila: " + fila);
				opcao = mostrarMenu();
				break;
				default:
					System.out.println("Opção inválida.");
					opcao = mostrarMenu();
			}
		}
		
	}
}
