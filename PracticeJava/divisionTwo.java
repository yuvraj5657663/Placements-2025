package PracticeJava;
import java.util.Scanner;


public class divisionTwo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a, b;
        System.out.println("Enter two numbers: ");
        a = sc.nextInt();
        b = sc.nextInt();
        System.out.println("Division of " + a + " and " + b + " is ");
        System.out.println(a / b);
    }
    }
