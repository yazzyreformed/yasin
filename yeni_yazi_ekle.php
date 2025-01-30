<?php
// Veritabanı bağlantısı
$host = "127.0.0.1";
$dbname = "turnthepage";
$username = "root";
$password = "";

// MySQL bağlantısını aç
$conn = new mysqli($host, $username, $password, $dbname);

// Bağlantıyı kontrol et
if ($conn->connect_error) {
    die("Bağlantı hatası: " . $conn->connect_error);
}

// Formdan gelen verileri al
$title = $_POST['postTitle'];
$content = $_POST['postContent'];
$username = $_POST['username'];
$email = $_POST['email'];

// SQL Sorgusu (DİKKAT: Güvenlik önlemi yoktur, sadece basit ekleme işlemi)
$sql = "INSERT INTO posts (title, content, username, email) VALUES ('$title', '$content', '$username', '$email')";

// Sorguyu çalıştır
if ($conn->query($sql) === TRUE) {
    echo "Yeni yazı başarıyla eklendi!";
} else {
    echo "Hata: " . $sql . "<br>" . $conn->error;
}

// Bağlantıyı kapat
$conn->close();
?>
