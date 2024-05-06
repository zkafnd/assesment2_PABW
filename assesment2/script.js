var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    displayData(data);
  }
};
xhr.open("GET", "getData.php", true);
xhr.send();

function displayData(data) {
  var tableBody = document.querySelector("#customerTable tbody");
  data.forEach(function(row) {
    var newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = row.id;
    newRow.insertCell(1).textContent = row.customer_name;
    newRow.insertCell(2).textContent = row.service_rating;
    newRow.insertCell(3).textContent = row.feedback;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.setAttribute("data-id", row.id);
    deleteButton.addEventListener("click", deleteData);
    newRow.insertCell(4).appendChild(deleteButton);
  });
}

function deleteData() {
  var customerId = this.getAttribute("data-id");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(this.responseText);
      if (response.success) {
        alert("Data berhasil dihapus!");
        location.reload();
      } else {
        alert("Gagal menghapus data.");
      }
    }
  };
  xhr.open("GET", "deleteData.php?id=" + customerId, true);
  xhr.send();
}
