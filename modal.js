let modal = document.getElementById("myModal");

let btns = document.getElementsByClassName("modalBtn");

let showModal = function () {
  modal.style.display = "block";
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", showModal, false);
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
