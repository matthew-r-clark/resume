var links = document.querySelectorAll("a");

for (var i = 0; i < links.length; i += 1) {
  links[i].setAttribute("target", "blank");
}