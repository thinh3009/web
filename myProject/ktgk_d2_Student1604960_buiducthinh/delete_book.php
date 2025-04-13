<?php
include 'db_connect.php';
if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['book_id'])) {
    $book_id = $_GET['book_id'];
    $sql = "DELETE FROM books WHERE book_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $book_id);
    if ($stmt->execute()) {
        header("Location: list_books.php");
        exit();
    } else {
        echo "Error deleting record: " . $conn->error;
    }
} else {
    header("Location: list_books.php");
    exit();
}
mysqli_close($conn);
