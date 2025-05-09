import java.util.*;

public class Q4 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the numbers: ");

        double  num1 = sc.nextDouble();
        double num2 = sc.nextDouble();
        
        System.out.println("enter the opertor: (+,-,*,/)");
        char op = sc.next().charAt(0);
        double result = 0;

        switch (op){
            case'+': 
                result = num1+num2;
                break;
            case'-':
                result = num1-num2;
                break;
            case'*':
                result = num1*num2;
                break;
           case'/':
                result = num1/num2;
                break;
           
           default: 

           System.out.println("Invalid operator!");
           return;
    }
    System.out.println("the final result is: ");
    System.out.println(num1 + " " + op + " " + num2 + " = " + result);
}
}