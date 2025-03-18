// problem 1: Write a program to add two numbers


// import java.util.*;
// public class DAY_1{
//     public static void main(String args[]){
//         Scanner sc = new Scanner(System.in);
//         int a = sc.nextInt();
//         int b = sc.nextInt();
//         int sum = a + b;
//         System.out.println(sum);7

//     }
// }

// problem 2: Write a program to find the area of a circle

// import java.util.*;
// public class DAY_1{
//     public static void main(String args[]){
//         Scanner sc = new Scanner(System.in);
//         float r = sc.nextFloat();
//         float area = 3.1414f * r * r;
//         System.out.println(area);
//     }
// }

// type conversion in java is done by using the following methods
// 1. Implicit type conversion
// 2. Explicit type conversion


// 1. Implicit type conversion 
// - In implicit type conversion, the compiler automatically converts one data type into another data type without any user intervention.


// implicit conversion - byte -> short -> int -> long -> float -> double

// problem 3: implicit type conversion

/*
import java.util.Scanner;

public class DAY_1{
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float number =  sc.nextInt();
        System.out.println(number);
    }
}
*/
/* 
// 2. Explicit type conversion

  import java.util.*;
  
  public class DAY_1 {
  public static void main(String[] args) {
  Scanner sc = new Scanner(System.in);
  float a = 25.787678657f;
  int b = (int) a;
  System.out.println(b);
  }
  }
  
 */

// import java.util.*;

public class DAY_1 {
    public static void main(String[] args) {
        char ch1 = 'a';
        char ch2 = 'b';
        char ch3 = 'c';
        int number = ch1;
        int number2 = ch2;
        int number3 = ch3;
        System.out.println(number);
        System.out.println(number2);
        System.out.println(number3);
    }
}