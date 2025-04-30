import java.util.*;
// Linear Search in an array    

public class linearSearch {
    public static int LinearSearch(int number[], int key) {
        for (int i = 0; i < number.length; i++) {
            if (number[i] == key) {
                return i;
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        int number[] = { 2, 4, 5, 6, 8, 10, 12, 14, 16, 18 };
        int key = 10;

        int index = LinearSearch(number, key);
        if (index == -1) {
            System.out.println("Element not found in the array.");
        } else {
            System.out.println("Element " + key + " found at index " + index + ".");
        }
        // Example of using Scanner to take input from user 
        // Scanner sc = new Scanner(System.in);
        // System.out.println("Enter the number to search: ");
        // int userInput = sc.nextInt();
        // int userIndex = LinearSearch(number, userInput);

        // if (userIndex == -1) {
        //     System.out.println("Element not found in the array.");
        // } else {
        //     System.out.println("Element " + userInput + " found at index " + userIndex + ".");
        // }
        // sc.close();

    }
}
