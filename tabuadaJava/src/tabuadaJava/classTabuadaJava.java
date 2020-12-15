package tabuadaJava;

public class classTabuadaJava {

	public static void main(String[] args) {
		
	int i = 0, j = 0;
	//for (inicialização; condição; incremento)
	for (i = 0; i <= 10; i++) {
		System.out.printf("tabuada do %d.\n", i);
		for (j = 0; j <= 10; j++) {
			System.out.printf("%d * %d = %d\n.", i, j, i*j);
		}
	}

	}

}
