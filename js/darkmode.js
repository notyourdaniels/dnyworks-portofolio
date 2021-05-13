if (typeof Storage !== "undefined") {
  if (localStorage.darkMode === "true") {
    document.body.classList.toggle("dark");
    document.getElementById("check").checked = true;
    console.log("hello");
  }
}

const chk = document.getElementById("check");

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (typeof Storage !== "undefined") {
    if (document.getElementById("check").checked) {
      localStorage.darkMode = true;
    } else {
      localStorage.darkMode = false;
    }
  }
});
