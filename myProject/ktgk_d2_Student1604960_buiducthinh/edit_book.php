<?php
include 'db_connect.php';

$title_err = "";
$author_err = "";
$date_err = "";
$price_err = "";
$quantity_err = "";
$category_err = "";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (!isset($_GET['book_id'])) {
        header("Location: list_books.php");
        exit();
    }
    
    $book_id = $_GET['book_id'];
    $sql = "SELECT * FROM books WHERE book_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $book_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows != 1) {
        header("Location: list_books.php");
        exit();
    }
    
    $book = $result->fetch_assoc();
    $title = $book['title'];
    $author = $book['author'];
    $publication_date = $book['publication_date'];
    $price = $book['price'];
    $quantity = $book['quantity'];
    $category_id = $book['category_id'];
    
    // Get category book
    $sql = "SELECT * FROM categories";
    $result = mysqli_query($conn, $sql);
    $categories = mysqli_fetch_all($result, MYSQLI_ASSOC);
} else {
    // Handle POST request
    $book_id = $_POST['book_id'];
    $title = $_POST['title'];
    $author = $_POST['author'];
    $publication_date = $_POST['publication_date'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $category_id = $_POST['category_id'];

    // Validate title
    if (empty($title)) {
        $title_err = '<span style="color:red;">Title cannot be empty</span>';
    } elseif (strlen($title) > 200) {
        $title_err = '<span style="color:red;">Title cannot exceed 200 characters</span>';
    }

    // Validate author
    if (empty($author)) {
        $author_err = '<span style="color:red;">Author cannot be empty</span>';
    } elseif (strlen($author) > 100) {
        $author_err = '<span style="color:red;">Author cannot exceed 100 characters</span>';
    }

    // Validate date
    try {
        $date = new DateTime($publication_date);
    } catch (Exception $e) {
        $date_err = '<span style="color:red;">Invalid date format (YYYY-MM-DD)</span>';
    }

    // Validate price
    if (!is_numeric($price) || $price < 0) {
        $price_err = '<span style="color:red;">Price must be a positive number</span>';
    }

    // Validate quantity
    if (!is_numeric($quantity) || $quantity < 0 || floor($quantity) != $quantity) {
        $quantity_err = '<span style="color:red;">Quantity must be a positive integer</span>';
    }

    // Validate category
    if (empty($category_id)) {
        $category_err = '<span style="color:red;">Please select a category</span>';
    }

    // If no errors, update database
    if (empty($title_err) && empty($author_err) && empty($date_err) && 
        empty($price_err) && empty($quantity_err) && empty($category_err)) {
        
        $sql = "UPDATE books SET title=?, author=?, publication_date=?, price=?, quantity=?, category_id=? 
                WHERE book_id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssdiii", $title, $author, $publication_date, $price, $quantity, $category_id, $book_id);
        
        if ($stmt->execute()) {
            header("Location: list_books.php");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
    }

    // Get category book
    $sql = "SELECT * FROM categories";
    $result = mysqli_query($conn, $sql);
    $categories = mysqli_fetch_all($result, MYSQLI_ASSOC);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Edit Book</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            background-color: #f5f5f5;
            padding: 20px;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #2c3e50;
            margin-bottom: 20px;
            text-align: center;
        }

        .form-group {
            margin-bottom: 15px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #34495e;
            font-weight: 500;
        }

        input, select {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
        }

        input:focus, select:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 5px rgba(52, 152, 219, 0.3);
        }

        .error {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 5px;
        }

        .buttons {
            margin-top: 20px;
            display: flex;
            gap: 10px;
        }

        button {
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s;
        }

        button[type="submit"] {
            background-color: #3498db;
            color: white;
        }

        button[type="submit"]:hover {
            background-color: #2980b9;
        }

        button[type="button"] {
            background-color: #95a5a6;
            color: white;
        }

        button[type="button"]:hover {
            background-color: #7f8c8d;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Edit Book</h2>
        <form action="edit_book.php" method="POST">
            <input type="hidden" name="book_id" value="<?= htmlspecialchars($book_id) ?>">
            
            <div class="form-group">
                <label>Title <?= $title_err ?></label>
                <input type="text" name="title" value="<?= htmlspecialchars($title) ?>">
            </div>

            <div class="form-group">
                <label>Author <?= $author_err ?></label>
                <input type="text" name="author" value="<?= htmlspecialchars($author) ?>">
            </div>

            <div class="form-group">
                <label>Publication Date <?= $date_err ?></label>
                <input type="date" name="publication_date" value="<?= htmlspecialchars($publication_date) ?>">
            </div>

            <div class="form-group">
                <label>Price <?= $price_err ?></label>
                <input type="number" step="0.01" name="price" value="<?= htmlspecialchars($price) ?>">
            </div>

            <div class="form-group">
                <label>Quantity <?= $quantity_err ?></label>
                <input type="number" name="quantity" value="<?= htmlspecialchars($quantity) ?>">
            </div>

            <div class="form-group">
                <label>Category <?= $category_err ?></label>
                <select name="category_id">
                    <option value="">Select Category</option>
                    <?php foreach ($categories as $category): ?>
                        <option value="<?= $category['category_id'] ?>" 
                                <?= $category_id == $category['category_id'] ? 'selected' : '' ?>>
                            <?= htmlspecialchars($category['category_name']) ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>

            <div class="buttons">
                <button type="submit">Update Book</button>
                <button type="button" onclick="window.location.href='list_books.php'">Cancel</button>
            </div>
        </form>
    </div>
</body>
</html>

<?php
mysqli_close($conn);
?>