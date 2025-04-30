import java.util.*;

class Book {
    int id;
    String name;
    Scanner sc;
    Pages[] pages;

    class Pages {
        int[] lines;

        Pages(int numLines) {
            lines = new int[numLines];
        }

        void setLines() {
            for (int i = 0; i < lines.length; i++) {
                System.out.print("Enter the number of words for line " + (i + 1) + ": ");
                lines[i] = sc.nextInt();
            }
        }

        int getLinesCount() {
            return lines.length;
        }
    }

    Book(int id, String name, int numPages) {
        this.id = id;
        this.name = name;
        sc = new Scanner(System.in);
        pages = new Pages[numPages];

        for (int i = 0; i < pages.length; i++) {
            System.out.print("Enter the number of lines for page " + (i + 1) + ": ");
            int nLines = sc.nextInt();
            pages[i] = new Pages(nLines);
            pages[i].setLines();
        }
    }

    public int getNumofWords() {
        int numofwords = 0;
        for (int i = 0; i < pages.length; i++) {
            for (int j = 0; j < pages[i].lines.length; j++) {
                numofwords += pages[i].lines[j];
            }
        }
        return numofwords;
    }
}

public class bookStatistics {
    public static void main(String[] args) {
        Book b = new Book(1, "OOPM Book", 3);
        int nowords = b.getNumofWords();
        System.out.println("Total Words = " + nowords);
    }
}
    