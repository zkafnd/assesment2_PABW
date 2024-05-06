<?php
$koneksi = new mysqli('nama_host', 'nama_pengguna', 'kata_sandi', 'nama_database');
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "DELETE FROM customer_satisfaction WHERE id = $id";
    if ($koneksi->query($sql) === TRUE) {
        echo json_encode(array("success" => true));
    } else {
        echo json_encode(array("success" => false));
    }
} else {
    echo json_encode(array("success" => false));
}

$koneksi->close();
?>
