let password = "";
function generatePassword() {
  password = 0;
  const length = document.getElementById("password-length").value;
  const charset =
    "BCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    const randomChar = charset[randomIndex];
    password += randomChar;
  }
  console.log(password);
  passwordOutput = document.getElementById("password");
  passwordOutput.innerHTML = password;
  return password;
}

function saveFile() {
  const generatedText = password;
  const fileName = "password.txt";
  const blob = new Blob([generatedText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  URL.revokeObjectURL(url);
}
