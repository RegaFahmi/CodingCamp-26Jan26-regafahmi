// Fill name
let userName = prompt("Enter your name:");
if (userName) {
    document.getElementById("username").innerText = userName;
}

// Form validation
document.getElementById("messageForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("birthdate").value;
    let message = document.getElementById("messageText").value;

    let genderInput = document.querySelector('input[name="gender"]:checked');

    if (name === "" || birthdate === "" || !genderInput || message === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    document.getElementById("resultName").innerText =
        "Nama: " + name;

    document.getElementById("resultBirth").innerText =
        "Tanggal Lahir: " + birthdate;

    document.getElementById("resultGender").innerText =
        "Jenis Kelamin: " + genderInput.value;

    document.getElementById("resultMessage").innerText =
        "Pesan: " + message;
});
