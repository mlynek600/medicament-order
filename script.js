const form = document.querySelector(".form");

const medicaments = [
  "Abasaglar",
  "Abilify",
  "Abra",
  "Absenor",
  "Accofil",
  "Accordeon",
  "Accupro"
];

const departments = [
  "Anestezjologia",
  "Chirurgia",
  "Onkologia",
  "Geriatria",
  "Kardiologia",
  "Neurologia"
];

loadOptions(medicaments);
loadOptions(departments);

function loadOptions(options) {
  const optionsSelector = document.getElementById(
    `${options === medicaments ? "medicaments" : "departments"}`
  );

  options.forEach(option => {
    const opt = document.createElement("option");
    opt.appendChild(document.createTextNode(option));
    opt.value = option;
    optionsSelector.appendChild(opt);
  });
}

function onSubmit() {
  alert("Utworzono zlecenie");
}

form.addEventListener("submit", onSubmit);
