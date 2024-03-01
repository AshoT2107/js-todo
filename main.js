// JavaScript code
function insertUser() {
  var fullName = document.getElementById("inputFullName").value;
  console.log(fullName);
  var phone = document.getElementById("inputPhone").value;
  var user = new User(fullName, phone);

  if (fullName == "" || phone == "") {
    Swal.fire({
      title: "Error!",
      text: "Some fields are empty",
      icon: "error",
      confirmButtonText: "OK",
    });
  } else {
    userQoshish(user);
    document.getElementById("inputFullName").value = "";
    document.getElementById("inputPhone").value = "";
  }
}

function userQoshish(user) {
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
        <td>${user.fullName}</td>
        <td>${user.phone}</td>
        <td>${new Date().toLocaleString()}</td>
        <td><button style="background: red; border-radius: 5px; color: white; padding: 10px 60px"  onclick="deleteRow(this)">Remove</button></td>`;

  document.getElementById("userTableBody").appendChild(newRow);
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
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}

class User {
  constructor(fullName, phone) {
    this.fullName = fullName;
    this.phone = phone;
  }
}
