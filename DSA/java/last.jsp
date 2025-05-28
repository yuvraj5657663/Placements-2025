<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<head>
    <title>Student Grade Calculator</title>
</head>
<body>
    <h2>Enter Marks of 5 Subjects</h2>
    <form method="post">
        Subject 1: <input type="text" name="m1" /><br/>
        Subject 2: <input type="text" name="m2" /><br/>
        Subject 3: <input type="text" name="m3" /><br/>
        Subject 4: <input type="text" name="m4" /><br/>
        Subject 5: <input type="text" name="m5" /><br/>
        <input type="submit" value="Calculate Grade"/>
    </form>

    <%
        String mark1 = request.getParameter("m1");
        if (mark1 != null) {
            int m1 = Integer.parseInt(request.getParameter("m1"));
            int m2 = Integer.parseInt(request.getParameter("m2"));
            int m3 = Integer.parseInt(request.getParameter("m3"));
            int m4 = Integer.parseInt(request.getParameter("m4"));
            int m5 = Integer.parseInt(request.getParameter("m5"));

            int total = m1 + m2 + m3 + m4 + m5;987
            double percentage = total / 5.0;
            String grade = "";

            if (percentage >= 90) grade = "A+";
            else if (percentage >= 80) grade = "A";
            else if (percentage >= 70) grade = "B";
            else if (percentage >= 60) grade = "C";
            else if (percentage >= 50) grade = "D";
            else grade = "Fail";

    %>
    <h3>Result:</h3>
    <p>Total Marks: <%= total %></p>
    <p>Percentage: <%= percentage %> %</p>
    <p>Grade: <b><%= grade %></b></p>
    <%
        }
    %>
</body>
</html>
