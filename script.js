const a = document.getElementById("display");
function showOnDisplay(input) {
  a.value += input;
}
function Clear() {
  a.value = "";
}
function Calculate() {
  try {
    a.value = eval(a.value);
  } catch (error) {
    a.value = "Error";
  }
}
