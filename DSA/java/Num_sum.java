import java.util.Scanner;

public class Num_sum {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int sum = 0;
        int i = 1;
        while (i <= n) {
            sum += i;
            i++;

        }
        System.out.println("Sum of first " + n + " numbers is: " + sum);
    }
}
