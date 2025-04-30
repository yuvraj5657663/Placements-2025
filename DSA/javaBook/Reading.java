import java.io.*;

class Reading {
    public static void main(String args[]) {
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        int intNumber = 0;
        float floatNumber = 0.0f;

        try {
            System.out.print("Enter an integer: ");
            intNumber = Integer.parseInt(in.readLine());

            System.out.print("Enter a float number: ");
            floatNumber = Float.parseFloat(in.readLine());
        } catch (Exception e) {
            System.out.println("Input Error: " + e);
        }

        System.out.println("intNumber = " + intNumber);
        System.out.println("floatNumber = " + floatNumber);
    }
}
