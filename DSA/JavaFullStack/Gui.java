import java.util.*;
import javax.swing.*;

public class Gui {
    public static void main(String[] args) {
        JFrame frame = new JFrame("first Gui project ");
        frame.setSize(400, 400);
        frame.setLayout(null);
        frame.setVisible(true);
        JButton b1 = new JButton(new ImageIcon("D:\\Desktop\\collage 2025 \\ logoclg.png"));
        b1.setBounds(120, 100, 80, 50);
        
        b1.setBounds(120,100, 80, 50);
        frame.add(b1);

        JLabel L1 = new JLabel("click the button ");
        L1.setBounds(120, 80, 80, 20);
        frame.add(L1);
    }
}
