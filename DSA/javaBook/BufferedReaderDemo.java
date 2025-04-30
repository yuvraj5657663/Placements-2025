import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class bufferedReaderDemo {
    public static void main(String args[]) {

            InputStreamReader isr = new InputStreamReader(System.in);
            BufferedReader br = new BufferedReader(isr);
            try {
                
                String input = br.readLine();
                System.out.println("You entered: " + input);
                 int n = Integer.parseInt(input);
                 System.out.println("Square is = " + n * n);
             } 
             catch (IOException ioe) 
             {
                System.out.println("input Error " + ioe);

             }
                //br.close();
        }
    }