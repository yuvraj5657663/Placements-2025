import java.util.*;

class ProductItem {
    private int id;
    private float price;

    ProductItem(int id, float price) {
        this.id = id;
        this.price = price;
    }

    public String toString() {
        return "ID: " + id + " Price: " + price;
    }

    float getPrice() {
        return price;
    }

    int getId() {
        return id;
    }
}

class ShoppingCart {
    private int custId;
    private Vector<ProductItem> itemsv;

    ShoppingCart(int custId) {
        this.custId = custId;
        itemsv = new Vector<>();
    }

    public void addItem(ProductItem pit) {
        itemsv.add(pit);
        System.out.println("Added: " + pit);
    }

    public void removeItem(ProductItem pit) {
        if (itemsv.remove(pit)) {
            System.out.println("Removed: " + pit);
        } else {
            System.out.println("Item not found: " + pit);
        }
    }

    public void doPayment() {
        float amt = 0.0f;
        for (ProductItem item : itemsv) {
            amt += item.getPrice();
        }
        System.out.println("Total price: " + amt);
    }
}

public class shopDemo {
    public static void main(String[] args) {
        int count = 0;
        ShoppingCart sc = new ShoppingCart(1);

        ProductItem it1 = new ProductItem(count++, 200);
        sc.addItem(it1);

        ProductItem it2 = new ProductItem(count++, 300);
        sc.addItem(it2);

        ProductItem it3 = new ProductItem(count++, 400);
        sc.addItem(it3);

        ProductItem it4 = new ProductItem(count++, 500);
        sc.addItem(it4);

        sc.removeItem(it2);

        System.out.println();
        sc.doPayment();
    }
}
