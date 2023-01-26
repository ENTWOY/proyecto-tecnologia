document
  .querySelector('input[name="nombre"]')
  .addEventListener("keypress", function (event) {
    var ascii = event.keyCode || event.wich;
    if ((ascii > 48 && ascii <= 57) || ascii == 46) {
      window.event.preventDefault();
      alert("Solo se permite cadena");
      return;
    }
  });
document
  .querySelector('input[name="asunto"]')
  .addEventListener("keypress", function (event) {
    var ascii = event.keyCode || event.wich;
    if ((ascii > 48 && ascii <= 57) || ascii == 46) {
      window.event.preventDefault();
      alert("Solo se permite cadena");
      return;
    }
  });

function nuevo(frm) {
  let test = /^\s*$/;
  if (test.test(frm.nombre.value)) {
    window.event.preventDefault();
    alert("Ingrese Nombres y Apellidos");
    return;
  }
  test =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  if (!test.test(frm.correo.value)) {
    window.event.preventDefault();
    alert("Correo vacio o Formato incorrecto");
    return;
  }
  test = /^\s*$/;
  if (test.test(frm.asunto.value)) {
    window.event.preventDefault();
    alert("Ingrese asunto");
    return;
  }

  test = /^\s*$/;
  if (test.test(frm.mensaje.value)) {
    window.event.preventDefault();
    alert("Ingrese mensaje");
    return;
  }

  alert("Datos ingresados correctamente");
}

parpadear();
function parpadear()
{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    document.getElementById("tie").style.color="rgb("+r+","+g+","+b+")";
    setTimeout("parpadear()",1000);
}
document.body.setAttribute("onload","parpadear()"); 