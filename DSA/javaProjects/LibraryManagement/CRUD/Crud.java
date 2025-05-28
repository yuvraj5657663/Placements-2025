import java.util.*;

public class Crud {
    private static Scanner scanner = new Scanner(System.in);
    private static List<Book> books = new ArrayList<>();

    public static void main(String args[]) {
        int choice;
        do {
            System.out.println("Library Management System");
            System.out.println("1. Add Book");
            System.out.println("2. View Books");
            System.out.println("3. Update Book");
            System.out.println("4. Delete Book");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    addBook();
                    break;
                case 2:
                    viewBooks();
                    break;
                case 3:
                    updateBook();
                    break;
                // case 4:
                // deleteBook();
                // break;
                case 5:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice! Please try again.");
            }
        } while (choice != 5);
    }

    private static void addBook() {
        System.out.print("Enter book title: ");
        String title = scanner.nextLine();
        System.out.print("Enter book author: ");
        String author = scanner.nextLine();
        books.add(new Book(title, author));
        System.out.println("Book added successfully!");
    }

    private static void viewBooks() {
        System.out.println("Lists books available.");
        if (books.isEmpty()) {
            System.out.println("No books available.");
        } else {
            for (int i = 0; i < books.size(); i++) {
                System.out.println((i + 1) + ". " + books.get(i));
            }
        }
    }

    private static void updateBook() {
        viewBooks();
        if (!books.isEmpty()) {
            System.out.print("Enter the number of the book to update: ");
            int index = scanner.nextInt() - 1;
            scanner.nextLine(); // Consume newline
            if (index >= 0 && index < books.size()) {
                System.out.print("Enter new title: ");
                String title = scanner.nextLine();
                System.out.print("Enter new author: ");
                String author = scanner.nextLine();
                books.get(index).setTitle(title);
                books.get(index).setAuthor(author);
                System.out.println("Book updated successfully!");
            } else {
                System.out.println("Invalid book");
            }
        }
    }

    static class Book {
        private String title;
        private String author;

        public Book(String title, String author) {
            this.title = title;
            this.author = author;
        }

        public String getTitle() {
            return title;
        }

        public void setTitle(String title) {
            this.title = title;
        }

        public String getAuthor() {
            return author;
        }

        public void setAuthor(String author) {
            this.author = author;
        }

        @Override
        public String toString() {
            return "Title: " + title + ", Author: " + author;
        }
    }
}