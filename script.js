function agregarTarea() {
  let input = document.getElementById("tareaInput");
  let texto = input.value;

  if (texto === "") {
    return;
  }

  let li = document.createElement("li");
  li.textContent = texto;

  li.onclick = function () {
    li.remove();
  };

  document.getElementById("lista").appendChild(li);

  input.value = "";
}
