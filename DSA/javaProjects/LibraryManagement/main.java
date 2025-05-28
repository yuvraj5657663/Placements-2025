// Main.java
import java.util.Scanner;

public class main{
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        Library library = new Library();
        Student student = new Student("S1", "Yuvraj");
        Librarian librarian = new Librarian("L1", "Ravi");

        int choice;
        do {
            System.out.println("\n===== Library Menu =====");
            System.out.println("1. Add Book");
            System.out.println("2. Search Book");
            System.out.println("3. Show All Books");
            System.out.println("4. Borrow Book");
            System.out.println("5. Return Book");
            System.out.println("6. Show Transactions");
            System.out.println("0. Exit");
            System.out.print("Enter choice: ");
            choice = sc.nextInt();
            sc.nextLine();

            switch (choice) {
                case 1 -> {
                    System.out.print("Enter Book ID: ");
                    String id = sc.nextLine();
                    System.out.print("Enter Title: ");
                    String title = sc.nextLine();
                    System.out.print("Enter Author: ");
                    String author = sc.nextLine();
                    Book book = new Book(id, title, author);
                    librarian.addBook(library, book);
                }
                case 2 -> {
                    System.out.print("Enter Title to search: ");
                    String title = sc.nextLine();
                    Book b = library.searchBook(title);
                    if (b != null)
                        System.out.println("Found: " + b.getTitle() + " by " + b.getAuthor());
                    else
                        System.out.println("Book not found!");
                }
                case 3 -> library.showAllBooks();
                case 4 -> {
                    System.out.print("Enter title to borrow: ");
                    String title = sc.nextLine();
                    Book b = library.searchBook(title);
                    if (b != null)
                        library.issueBook(student, b);
                    else
                        System.out.println("Book not found!");
                }
                case 5 -> {
                    System.out.print("Enter title to return: ");
                    String title = sc.nextLine();
                    Book b = library.searchBook(title);
                    if (b != null)
                        library.returnBook(student, b);
                    else
                        System.out.println("Book not found!");
                }
                case 6 -> library.showAllTransactions();
                case 0 -> System.out.println("Exiting Library System.");
                default -> System.out.println("Invalid choice!");
            }
        } while (choice != 0);
    }
}
