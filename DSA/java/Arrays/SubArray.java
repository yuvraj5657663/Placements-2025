import java.util.*;

public class SubArray {

    public static void printSubarrays(int numbers[]) {
        int ts = 0; // Total subarrays counter
        for (int i = 0; i < numbers.length; i++) {
            int start = i;

            for (int j = i; j < numbers.length; j++) {
                int end = j;

                // Print the subarray from 'start' to 'end'
                for (int k = start; k <= end; k++) {
                    System.out.print(numbers[k] + " ");
                }
                ts++; // Increment total subarrays count
                System.out.println(); // Move to the next line
            }
        }
        System.out.println("Total subarrays = " + ts);
    }

    public static void main(String args[]) {
        int numbers[] = { 2, 4, 6, 8, 10 };
        printSubarrays(numbers); // Call the method to print subarrays
    }
}
