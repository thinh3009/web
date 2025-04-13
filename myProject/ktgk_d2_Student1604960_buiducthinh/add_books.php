<?php
include 'db_connect.php';
$bookid_err="";
$title_err = "";
$author_err = "";
$date_err = "";
$price_err = "";
$quantity_err = "";
$category_err = "";

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $bookid="";
    $title = "";
    $author = "";
    $publication_date = "";
    $price = "";
    $quantity = "";
    $category_id = "";
    
    // Get categories for dropdown
    $sql = "SELECT * FROM categories";
    $result = mysqli_query($conn, $sql);
    $categories = mysqli_fetch_all($result, MYSQLI_ASSOC);
} else {
    // Handle POST request
    $bookid=$_POST['book_id'];
    $title = $_POST['title'];
    $author = $_POST['author'];
    $publication_date = $_POST['publication_date'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $category_id = $_POST['category_id'];

    // Validate bookid
    if(empty($bookid)){
        $bookid_err='<span style="color:red;">bookid cannot be empty</span>';
    }
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

    // If no errors, insert into database
    if (empty($title_err) && empty($author_err) && empty($date_err) && 
        empty($price_err) && empty($quantity_err) && empty($category_err)) {
        
        $sql = "INSERT INTO books (title, author, publication_date, price, quantity, category_id) 
                VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssdii", $title, $author, $publication_date, $price, $quantity, $category_id);
        
        if ($stmt->execute()) {
            header("Location: list_books.php");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }
    }

    // Get categories for dropdown (in case of error and form reshow)
    $sql = "SELECT * FROM categories";
    $result = mysqli_query($conn, $sql);
    $categories = mysqli_fetch_all($result, MYSQLI_ASSOC);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Add New Book</title>
    <style>
        .error { color: red; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; }
        input, select { width: 200px; padding: 5px; }
        button { padding: 10px; margin-right: 10px; }
    </style>
</head>
<body>
    <h2>Add New Book</h2>
    <form action="add_books.php" method="POST">
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

        <div class="form-group">
            <button type="submit">Add Book</button>
            <button type="button" onclick="window.location.href='list_books.php'">Cancel</button>
        </div>
    </form>
</body>
</html>

<?php
mysqli_close($conn);
?>