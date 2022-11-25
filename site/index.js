import * as wasm from "wasm-test";

const nameInput = document.getElementById("name");
const submitButton = document.getElementById("button");

submitButton.addEventListener("click", handleSubmit);

function handleSubmit() {
  let name = nameInput.value;
  if (name.length < 1) return;
  wasm.greet(name);
  nameInput.value = "";
}
