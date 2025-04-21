const burgerMenu = document.getElementById("burgerMenu");
const mobileNav = document.getElementById("mobileNav");
const closeBtnNav = document.getElementById("closeBtnNav");

function toggleNav(open) {
  mobileNav.style.right = open ? "0" : "-500px";
}

burgerMenu?.addEventListener("click", (e) => {
  e.stopPropagation(); 
  toggleNav(true);
});

closeBtnNav?.addEventListener("click", (e) => {
  e.stopPropagation(); 
  toggleNav(false);
});
mobileNav?.addEventListener("click", (e) => {
  e.stopPropagation();
});
document.body.addEventListener("click", () => {
  toggleNav(false);
});


function togglePanel(panelId) {
  const allPanels = document.querySelectorAll('.panel-table');
  allPanels.forEach(panel => {
    if (panel.id === panelId) {
      panel.classList.toggle('open');
    } else {
      panel.classList.remove('open');
    }
  });
}

let sebetSay = document.querySelectorAll(".basketCount");
let butonlar = document.querySelectorAll(".SebeteElaveEt");

let yaddaSaxlanilan = parseInt(localStorage.getItem("sebetSayi")) || 0;
sebetSay.forEach(function(el) {
  el.innerText = yaddaSaxlanilan;
});


butonlar.forEach(function(buton) {
  buton.addEventListener("click", function () {
    let cariSay = parseInt(localStorage.getItem("sebetSayi")) || 0;
    cariSay++;
    sebetSay.forEach(function(el) {
      el.innerText = cariSay;
    });
    localStorage.setItem("sebetSayi", cariSay);
  });
});

let sifirlaButon = document.getElementById("sebetiSifirla");
sifirlaButon.addEventListener("click", function () {
  sebetSay.forEach(function(el) {
    el.innerText = 0;
  });
  localStorage.removeItem("sebetSayi");
});
