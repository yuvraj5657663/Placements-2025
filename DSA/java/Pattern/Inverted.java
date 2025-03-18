import java.util.*;

public class Inverted {
    public static void main(String[] args) {
        System.out.println("how many lines you want to print star pattern");
        {
            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            for (int line = n; line >= 1; line--) {
                for (int star = 1; star <= line; star++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }

    }
}