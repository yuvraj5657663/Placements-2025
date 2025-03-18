import java.util.*;
public class problem3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        float peencil = sc.nextFloat();
        float pen = sc.nextFloat();
        float eraser = sc.nextFloat();

        float total = peencil + pen + eraser;
        System.out.println("bill is : " + total);

        float newTotal = total + (0.18f * total);
        System.out.println("bill with 18% GST tax : " + newTotal);
        
    }
}