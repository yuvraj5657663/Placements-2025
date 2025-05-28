import java.util.*;

public class ArraylistCollection {

    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<Integer>(); // create arraylist
        NumberingList(list); // call method to add values

        int total = 0;
        Iterator<Integer> iter = list.iterator();

        while (iter.hasNext()) {
            Integer val = iter.next();
            total = total + val;
        }

        System.out.println("The total amount is " + total); // output
    }

    private static void NumberingList(ArrayList<Integer> list) {
        list.add(1); // ✔ autoboxed
        list.add(2); 
    }
}
