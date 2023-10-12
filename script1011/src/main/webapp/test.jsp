<%@page import="java.util.Scanner"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Insert title here</title>
		<script>
		
		
		</script>
	</head>
	<body>
		<% 
		Scanner scan = new Scanner(System.in);		
		System.out.println("학생이름을 입려하세요.");
		String name=scan.next();
		%>
		<input type="text" name="name">
		
		
		
	</body>
</html>