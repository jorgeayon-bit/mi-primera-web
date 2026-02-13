function agregarTarea() {
  const input = document.getElementById("tareaInput");
  const texto = input.value;
  const lista = document.getElementById("lista");

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    const eliminar = document.createElement("button");
    eliminar.textContent = "❌";
    eliminar.style.marginLeft = "10px";

    eliminar.onclick = function () {
      lista.removeChild(li);
    };

    li.appendChild(eliminar);
    lista.appendChild(li);

    input.value = "";
  }
}
