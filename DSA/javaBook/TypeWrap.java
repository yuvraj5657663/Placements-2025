public class TypeWrap {
    public static void main(String args[]){
        char c = 'a';
        byte b = 50;
        short s = 1996;
        int i = 12345678;
        long l = 123456654342l;
        float f = 3.142f;
        float f2 = 1.2e-5F;
        double d2 = 0.00000345;
        System.out.println(" c = " + c);
        System.out.println(" b = " + b);
        System.out.println(" s = " + s);
        System.out.println(" i = " + i);
        System.out.println(" l = " + l);
        System.out.println("f1= " + f);
        System.out.println("F2= " + f2);
        System.out.println("d2 = " + d2);
        System.out.println(" ");
        System.out.println("types coverted ");
        short s1 = (short)b;
        short s2 = (short)i;
        float n1 = (float)l;
        int m1 = (int)f;
        System.out.println("(short)b = " +s1);
        System.out.println("(short)i = " +s2);
        System.out.println("(float)l = " +n1);
        System.out.println("(int)f1 = " +m1);


    }
}
