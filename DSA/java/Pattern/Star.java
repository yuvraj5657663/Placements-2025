import java.util.*;


public class Star {
    public static void main(String[] args) {
        System.out.println("how many lines you want to print star pattern");
        {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            for (int line = 1; line <= n; line++) {
                for (int star = 1; star <= line; star++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }
    }
}
