<?php
$koneksi = new mysqli('nama_host', 'nama_pengguna', 'kata_sandi', 'nama_database');
if ($koneksi->connect_error) {
    die("Koneksi gagal: " . $koneksi->connect_error);
}

$sql = "SELECT * FROM customer_satisfaction";
$result = $koneksi->query($sql);

if ($result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(array("message" => "Data tidak ditemukan."));
}

$koneksi->close();
?>
