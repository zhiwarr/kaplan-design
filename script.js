window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  if (window.scrollY > 700) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
