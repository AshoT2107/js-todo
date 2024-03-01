// JavaScript code
let a = 1;

function insertUser() {
  var fullName = document.getElementById("inputFullName").value;
  var phone = document.getElementById("inputPhone").value;

  if (fullName == "" || phone == "") {
    Swal.fire({
      title: "Error!",
      text: "Some fields are empty",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else {
    addRow(fullName, phone);
    document.getElementById("inputFullName").value = "";
    document.getElementById("inputPhone").value = "";
  }
}

function addRow(fullName, phone) {
  const newRow = document.createElement("tr");
  newRow.classList.add("col");
  newRow.innerHTML = `
        <td>${fullName}</td>
        <td>${phone}</td>
        <td>${new Date().toLocaleString()}</td>
        <td><button id = "${a}-action" onclick="deleteRow(this)">Remove</button></td>`;


  document.getElementById("userTableBody").appendChild(newRow);

  var removeButton = document.getElementById(`${a++}-action`);
  removeButton.style.background = "red"; 
  removeButton.style.borderRadius = "5px"; 
  removeButton.style.color = "white"; 
  removeButton.style.padding =" 10px 25px";

  document.querySelectorAll("td").forEach(x=>x.style.padding = "8px");
}

function deleteRow(button) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      button.closest("tr").remove();
      Swal.fire({
        title: "Deleted!",
        text: "Your infomation has been deleted.",
        icon: "success",
      });
    }
  });
}

