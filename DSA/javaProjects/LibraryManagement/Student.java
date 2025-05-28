

// Student.java
public class Student extends User {
    public Student(String userId, String name) {
        super(userId, name);
    }

    public void borrowBook(Book book) {
        if (!book.isIssued()) {
            book.issue();
            System.out.println(name + " borrowed \"" + book.getTitle() + "\"");
        } else {
            System.out.println("Book already issued!");
        }
    }

    public void returnBook(Book book) {
        if (book.isIssued()) {
            book.returnBook();
            System.out.println(name + " returned \"" + book.getTitle() + "\"");
        } else {
            System.out.println("Book wasn't issued.");
        }
    }
}





