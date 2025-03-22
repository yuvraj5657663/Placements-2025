import java.util.Scanner;

public class primeIsRange {
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false;
        }
        int c = 2;
        while (c * c <= num) {
            if (num % c == 0) {
                return false;
            }
            c++;
        }
        return c * c > num;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the first number ");
        int num1 = sc.nextInt();
        System.out.println("Enter the second number ");
        int num2 = sc.nextInt();
        System.out.println("your number between prime number");
        for (int i = num1; i <= num2; i++) {
            if (isPrime(i)) {
               
                System.out.println( i);
            }
        }
    }
}
