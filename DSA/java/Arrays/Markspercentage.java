import java.util.*;

public class Markspercentage {
    public static void update(int marks[]) {
        for (int i = 0; i < marks.length; i++) {
            marks[i] = marks[i] + 1;

        }
    }

    public static void main(String args[]) {
        int marks[] = { 97, 98, 99 };
        update(marks);
        
        for (int i = 0; i < marks.length; i++) {
            System.out.println(marks[i] + " ");

        }
        int total = 0;
        for (int i = 0; i < marks.length; i++) {
            total += marks[i];
        }
        double percentage = (total / 300.0) * 100;
        
        System.out.println("nTotal marks: " + total + " out of 300");
        System.out.println("percentage: " + percentage + "%");
    }
}