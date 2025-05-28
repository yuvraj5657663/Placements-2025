
// Librarian.java
public class Librarian extends User {
    public Librarian(String userId, String name) {
        super(userId, name);
    }

    public void addBook(Library library, Book book) {
        library.addBook(book);
        System.out.println("Book added: " + book.getTitle());
    }
}

