import java.util.*;

public class getLargest {

    public static int getLargestandSmallest(int numbers[]) {
        int largest = Integer.MIN_VALUE;
        int smallest = Integer.MAX_VALUE;

        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] > largest) {
                largest = numbers[i];
            }
            if (smallest > numbers[i]) {
                smallest = numbers[i];
            }
        }

        System.out.println("The smallest number in the array is: " + smallest);
        return largest;
    }

    public static void main(String[] args) {
        int numbers[] = { 2, 4, 5, 6, 8, 10, 12, 14, 16, 18 };
        int largest = getLargestandSmallest(numbers);
        System.out.println("The largest number in the array is: " + largest);
    }
}
