import java.util.*;

public class funtion {
    public static int claculatedmultiply(int num1, int num2) {
        int multiply = num1 * num2;
        return multiply;

    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter the first number ");
        int num1 = sc.nextInt();
        System.out.println("enter the second number");
        int num2 = sc.nextInt();
        int multiply = claculatedmultiply(num1, num2);
        System.out.println("The multiply of two numbers is " + multiply);
    }
}