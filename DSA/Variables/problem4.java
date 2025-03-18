

public class problem4 {
    public static void main(String[] args) {
        
        byte b = 4;
        char c = 'a';
        short s = 512;
        int i = 1000;
        float f = 3.14f;
        double d = 99.9954;
        double result = (f * b) + (i % c) - (d - s);
       System.out.println("result is : " + result);
    }
}
/* 
explaination:
Step-by-Step Breakdown:
1 ️⃣(f*b)
float*byte→float 
3.14f*4=12.56f(Result:float)
2 ️⃣(i%c)
i=1000,c='a'(ASCII 97)
1000%97=30(Result:int)
3 ️⃣(d-s)

double-short→double 99.9954-512=-412.0046(Result:double)
Final Calculation&
Type Promotion:
result=(12.56𝑓)+(30)−(−412.0046)
result=(12.56f)+(30)−(−412.0046)
float+int→float→12.56f+30=42.56f float-double→double→42.56-(-412.0046)=454.5646


➡️
Final result
का data type
double होगा।✅

Final Answer:👉
result का
data type
double रहेगा, क्योंकि
सबसे बड़ा
data type
double है
और implicit
type promotion
होता है
।
*/