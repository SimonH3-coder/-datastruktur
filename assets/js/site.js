// write cool JS hwere!!
const userSelect = document.getElementById("userSelect");
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const colorInput = document.getElementById("colorInput");
const saveButton = document.getElementById("saveButton");

const dataBruger = {
  bruger1: { name: "Pia", age: 24, color: "red" },
  bruger2: { name: "Brian", age: 29, color: "green" },
  bruger3: { name: "Nina", age: 21, color: "brun" },
  bruger4: { name: "Michael", age: 26, color: "blue" },
};
saveBruger(dataBruger);

// Event listener: vis data for valgt bruger
userSelect.addEventListener("change", userSelectChange);

function userSelectChange() {
  const selectedUser = userSelect.value;
  console.log("change user to: " + selectedUser);
  // TODO: Hent data fra localStorage og vis i formularen
  const bruger = hentBruger();
  const data = bruger[selectedUser];
  console.log(data);
  nameInput.value = data.name;
  ageInput.value = data.age;
  colorInput.value = data.color;
}

function saveBruger(bruger) {
  localStorage.setItem("bruger", JSON.stringify(bruger));
}

function hentBruger() {
  const bruger = localStorage.getItem("bruger");
  return JSON.parse(bruger);
}

// Event listener: gem data fra formularen
saveButton.addEventListener("click", () => {
  console.log("save data");

  const selectedUser = userSelect.value;
  const name = nameInput.value;
  const age = ageInput.value;
  const color = colorInput.value;

  // TODO: Gem data i localStorage for den valgte bruger
});

// Vis data for første bruger ved load
window.onload = userSelectChange;
