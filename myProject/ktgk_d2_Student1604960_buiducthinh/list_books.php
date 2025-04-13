<?php


include 'db_connect.php';
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
   
    $search="";
    $sql = "select * from books";
    $data = mysqli_query($conn, $sql);
    $array_books = mysqli_fetch_all($data, MYSQLI_ASSOC);
} else {

    $search=$_POST['search'];
    $sql = "select * from books where title like '%$search%'";
    $data = mysqli_query($conn, $sql);
    $array_books = mysqli_fetch_all($data, MYSQLI_ASSOC);
}

?>


<!DOCTYPE html>
<html>

<head>
    <title>Book Management System</title>
    <link rel="stylesheet" href="style.css">
    <script>
        function confirmDelete(bookId, bookTitle) {
            if (confirm("Are you sure you want to delete the book '" + bookTitle + "'?")) {
                window.location.href = 'delete_book.php?book_id=' + bookId;
            }
        }
    </script>
</head>

<body>
    <div class="container">
        <h2>Book Management System</h2>
        
        <form class="search-form" method="POST" action="list_books.php">
            <input type="text" name="search" placeholder="Search books by title..." value="<?php echo htmlspecialchars($search) ?>">
            <button type="submit">Search</button>
        </form>

        <a href="add_books.php" class="add-book-btn">+ Add New Book</a>
        

        <table>
            <tr>
                <th>Book ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publication Date</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Category ID</th>
                <th>Actions</th> 
                
            </tr>
            <?php foreach ($array_books as $book): ?>
            <tr>
                <td><?php echo htmlspecialchars($book['book_id']) ?></td>
                <td><?php echo htmlspecialchars($book['title']) ?></td>
                <td><?php echo htmlspecialchars($book['author']) ?></td>
                <td><?php echo htmlspecialchars($book['publication_date']) ?></td>
                <td class="price"><?php echo number_format($book['price'], 2) ?> VND</td>
                <td class="quantity"><?php echo htmlspecialchars($book['quantity']) ?></td>
                <td><span class="category"><?php echo htmlspecialchars($book['category_id']) ?></span></td>
                <td class="actions">
                    <a href="edit_book.php?book_id=<?php echo $book['book_id'] ?>" 
                       class="edit-btn">Edit</a>
                    <button onclick="confirmDelete(<?php echo $book['book_id'] ?>, '<?php echo htmlspecialchars(addslashes($book['title'])) ?>')" 
                            class="delete-btn">Delete</button>
                </td>
            </tr>
            <?php endforeach; ?>
        </table>
    </div>
</body>

</html>

<?php
    mysqli_close($conn);
?>
