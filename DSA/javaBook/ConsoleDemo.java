import java.util.*;
import java.io.Console;

class ConsoleDemo {
    public static void main(String args[]) {
        System.out.println("enter your username : ");
        String userName = System.console().readLine();
        System.out.println("enter your password : ");
        int passWord = Integer.parseInt(System.console().readLine());
          
        System.out.println("Your username is : " + userName);
        System.out.println("Your password is : " + passWord);
    }
}