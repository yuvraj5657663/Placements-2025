public class roomArea {
    public static void main(String[] args) {
        multipleClass room = new multipleClass();
        room.getdata(14, 10);
        float area = room.length * room.breadth;
        System.out.println("Area of room = " + area);
    }
}
