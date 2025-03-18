import java.util.*;

public class BinCoeff {
    public static int factorial(int n) {
        int f = 1;
        for (int i = 1; i <= n; i++) {
            f *= i;

        }
        return f;
    }
   
    public static int binCoeff(int n, int r) {
        int fact_n = factorial(n);
        int fact_r = factorial(r);
        int fact_n_r = factorial(n - r);
        int result = fact_n / (fact_r * fact_n_r);
        return result;
    }
 
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter n: ");
        int n = sc.nextInt();
        System.out.println("Enter r: ");
        int r = sc.nextInt();
        int result = binCoeff(n, r);
        System.out.println("Binomial Coefficient of " + n + " and " + r + " is " + result);
    }
    
}