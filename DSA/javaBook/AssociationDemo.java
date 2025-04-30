import java.util.*;

class SmartCard {
    int emp_idn;

    public void MarkAttendance(Employee e) {
        emp_idn = e.getEmpId();
        System.out.println("Employee " + emp_idn + " is marked present");
    }

    public int getEmpIdn(Employee e) {
        return e.getEmpId();
    }
}

class Employee {
    int empid;

    Employee() {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Employee ID: ");
        this.empid = sc.nextInt();
    }

    int getEmpId() {
        return empid;
    }

    public void login(SmartCard sc) {
        int eid = sc.getEmpIdn(this);
        System.out.println("Login successful for employee " + eid);
    }
}

 public class AssociationDemo {
    public static void main(String[] args) {
        System.out.println("ASSOCIATION BETWEEN EMPLOYEE AND SMARTCARD");

        Employee e = new Employee();
        System.out.println("NEW EMPLOYEE IS CREATED");

        SmartCard scd = new SmartCard();
        scd.MarkAttendance(e);

        e.login(scd);
    }
}
