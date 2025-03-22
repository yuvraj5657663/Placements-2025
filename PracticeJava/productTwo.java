package PracticeJava;

import java.util.Scanner;

public class productTwo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the first number: ");
        int num1 = sc.nextInt();
        System.out.println("Enter the second number: ");
        int num2 = sc.nextInt();
        System.out.println("The product of the two numbers is: ");
        System.out.println(num1 * num2);
    }
}
