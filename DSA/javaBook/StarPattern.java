public class StarPattern {
    public static void main(String args[]) {
        System.out.println(" Desplaying Star pattern ");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(" ");
                System.out.print("*");
            }
            System.out.println("\n");
        }
        System.out.println("Desplaying Star pattern in reverse order ");
    }
}
