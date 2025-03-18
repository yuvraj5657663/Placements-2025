import java.util.*;

public class Swap {
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
        System.out.println("Inside swap, a = " + a + " and b = " + b);
        
    }
    
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        System.out.println("Before swapping, a = " + a + " and b = " + b);
        swap(a, b);
        System.out.println("After swapping, a = " + a + " and b is " + b);

    }
}