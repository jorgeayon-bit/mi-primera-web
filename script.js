const boton = document.getElementById("agregar");
const input = document.getElementById("tareaInput");
const lista = document.getElementById("lista");

boton.addEventListener("click", function () {
  const texto = input.value;

  if (texto !== "") {
    const li = document.createElement("li");
    li.textContent = texto;

    const eliminar = document.createElement("button");
    eliminar.textContent = " ❌";
    eliminar.style.marginLeft = "10px";

    eliminar.addEventListener("click", function () {
      lista.removeChild(li);
    });

    li.appendChild(eliminar);
    lista.appendChild(li);

    input.value = "";
  }
});

