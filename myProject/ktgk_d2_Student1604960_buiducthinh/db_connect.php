<?php
// Kết nối MySQL
$servername = "localhost"; 
$username = "root";        
$password = "";            
$dbname = "quan_ly_sach"; 

// Thực hiện kết nối
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if (!$conn) {
    die("Kết nối thất bại: " . mysqli_connect_error());
}

?>