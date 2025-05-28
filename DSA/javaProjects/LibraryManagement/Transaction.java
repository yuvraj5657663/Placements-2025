
// Transaction.java
import java.time.LocalDate;

public class Transaction {
    private String transactionId;
    private String userId;
    private String bookId;
    private LocalDate issueDate;
    private LocalDate returnDate;
    private boolean isReturned;

    public Transaction(String transactionId, String userId, String bookId) {
        this.transactionId = transactionId;
        this.userId = userId;
        this.bookId = bookId;
        this.issueDate = LocalDate.now();
        this.isReturned = false;
    }

    public void markReturned() {
        this.returnDate = LocalDate.now();
        this.isReturned = true;
    }

    public String getBookId() {
        return bookId;
    }

    public boolean isReturned() {
        return isReturned;
    }

    @Override
    public String toString() {
        return "Transaction[UserID=" + userId + ", BookID=" + bookId + ", IssueDate=" + issueDate +
                ", ReturnDate=" + (isReturned ? returnDate : "Not Returned") + "]";
    }
}