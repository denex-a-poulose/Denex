var icon = document.getElementById('icon');


icon.onclick = function() {
  document.body.classList.toggle('dark-theme');


  if (document.body.classList.contains('dark-theme')) {
    icon.style.color = "#9450f2";
    icon.style.transform = "rotateZ(180deg)"
    icon.style.transition = "all ease 1s";
    elements.style.transition = 'all ease 1s';


  } else {
    icon.style.color = "#9450f2";
    icon.style.transform = "rotateZ(-180deg)"
    icon.style.transition = "all ease 1s";

  }
}
