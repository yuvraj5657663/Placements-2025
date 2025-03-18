import java.util.*;

public class PrimeNum {
    public static void main(String[] args) {
        System.out.println("enter the number to check prime or not");
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        boolean isPrime = true;
        for (int i = 2; i<=Math.sqrt(n); i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime == true) {
            System.out.println("n is prime");
        } else {
            System.out.println("n is not prime");
        }

    }
}
