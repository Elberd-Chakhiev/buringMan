document.getElementById("trigger").onclick = function() {
  open()
};
function open() {
  document.getElementById("menu").classList.toggle("show");
}
document.getElementById("close").onclick = function() {
  close()
};
function close() {
  document.getElementById("menu").classList.remove("show");
}
