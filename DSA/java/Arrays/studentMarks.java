import java.util.*;

public class studentMarks {
    public static void main(String args[]) {
        int marks[] = new int[50];
        Scanner sc = new Scanner(System.in);

        // marks input form user 

        System.out.println("enter the marks of 50 students");
        for (int i = 0; i < 50; i++) {
            System.out.println("subjects" + (i + 1) + ": ");
            marks[i] = sc.nextInt();
        }
        
        // displaying all marks 
        System.out.println(" marks of studdent are : ");
        for (int i = 0; i < 50; i++) {
            System.out.println("subjects" + (i + 1) + " : " + marks[i]);
        }
        sc.close();
     }
}