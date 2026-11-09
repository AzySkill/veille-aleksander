const message = document.getElementById("message");
const date = document.getElementById("date");

message.textContent = "Si tu vois ce message, c'est que la veille d'Aleksander marche.";

// Petite animation d'apparition
setTimeout(() => {
  message.classList.add("visible");
}, 200);

date.textContent = "Page chargÃ©e le " + new Date().toLocaleString("fr-FR");
