

// Library.java
import java.util.*;

public class Library {
    private List<Book> books = new ArrayList<>();
    private List<Transaction> transactions = new ArrayList<>();

    public void addBook(Book book) {
        books.add(book);
    }

    public Book searchBook(String title) {
        for (Book b : books) {
            if (b.getTitle().equalsIgnoreCase(title)) return b;
        }
        return null;
    }

    public void showAllBooks() {
        for (Book b : books) {
            System.out.println(b.getTitle() + " by " + b.getAuthor() + " - " + (b.isIssued() ? "Issued" : "Available"));
        }
    }

    public void issueBook(Student student, Book book) {
        if (!book.isIssued()) {
            book.issue();
            Transaction txn = new Transaction("T" + System.currentTimeMillis(), student.getUserId(), book.getId());
            transactions.add(txn);
            System.out.println("Book issued: " + book.getTitle());
        } else {
            System.out.println("Book already issued!");
        }
    }

    public void returnBook(Student student, Book book) {
        if (book.isIssued()) {
            book.returnBook();
            for (Transaction t : transactions) {
                if (t.getBookId().equals(book.getId()) && !t.isReturned()) {
                    t.markReturned();
                    break;
                }
            }
            System.out.println("Book returned: " + book.getTitle());
        } else {
            System.out.println("Book wasn't issued.");
        }
    }

    public void showAllTransactions() {
        for (Transaction t : transactions) {
            System.out.println(t);
        }
    }
}

