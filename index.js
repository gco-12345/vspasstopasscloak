function check() {
  var passcode = document.getElementById('input').value.trim();
  if (passcode === "Alpha67") {
    window.location.href = "https://gco-12345.github.io/vscloack/";
  }
  else {
    alert("try again");
  }
}
