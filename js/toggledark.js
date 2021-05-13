function checkDarkmode() {
  if (typeof Storage !== "undefined") {
    if (localStorage.darkmode) {
      localStorage.darkmode = true;
    } else {
      localStorage.darkmode = false;
    }
    document.getElementById("result").innerHTML =
      "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}
