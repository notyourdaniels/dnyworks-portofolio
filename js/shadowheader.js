window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("solidHeader").className = "solidHeaderShadow";
  } else {
    document.getElementById("solidHeader").className = "solidHeader";
  }
}
