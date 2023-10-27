const body = document.querySelector("body");
const dark = document.querySelector("#dark");

dark.addEventListener("click", function () {
  if (dark.checked == true) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
