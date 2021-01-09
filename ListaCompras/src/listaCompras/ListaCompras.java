package listaCompras;
import java.util.ArrayList;
import java.util.Scanner;

/*menu
 * Digite o comando desejado
 * 1 - ver lista
 * 2 - adicionar intem na lista
 * 3 - remover item da lista
 * 4 - limpa lista
 * 5 - sair
 */
public class ListaCompras {
	private ArrayList<String> lista = new ArrayList<>();
	private Scanner scanner = new Scanner(System.in);
	private String opcao;
	
	private String mostrarMenu() {
		StringBuilder sb = new StringBuilder();
		sb.append("Digite o comando desejado.\n");
		sb.append("1 - ver lista.\n");
		sb.append("2 - adicionar intem na lista.\n");
		sb.append("3 - remover item da lista.\n");
		sb.append("4 - limpa lista.\n");
		sb.append("5 - sair.\n");
		System.out.println(sb.toString());
		
		return scanner.nextLine();
	}
	public void iniciar() {
		String opcao = mostrarMenu();
		while(!opcao.equals("5")) {
			switch(opcao) {
			case "1":
				System.out.println(lista);	
				opcao = mostrarMenu();
				break;
			case "2":
				System.out.println("Digite novo intem da lista:");
				String item = scanner.nextLine();
				lista.add(item);
				System.out.println(lista);				
				opcao = mostrarMenu();
				break;
			case "3":
				System.out.println("Digite o �ndice do item para remover da lista:");
				int indice = Integer.valueOf(scanner.nextLine());
				lista.remove(indice);
				System.out.println(lista);
				opcao = mostrarMenu();
				break;
			case "4":
				lista.clear();
				System.out.println(lista);
				opcao = mostrarMenu();
				break;
			default:
				System.out.println("Op��o Inv�lida.");
				opcao = mostrarMenu();
			}
		}
		scanner.close();
		System.out.println("Feito!");
	}
}
