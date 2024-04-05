const disparar = document.querySelector("#disparar");

disparar.addEventListener("click", () => {
    Swal.fire({
        title: "Hola, mundo!",
        text: "Estamos probando la librería de SweetAlert.",
        footer: "Esto es un footer.",
        imageUrl: "https://placeholder.pics/svg/100x100",
        showCloseButton: true,
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Aceptar",
        customClass: {
            container: "alerta-1-container",
            popup: "alerta-1-popup",
            title: "alerta-1-title"
        }
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Aceptaste!",
            text: "El popup anterior fue aceptado.",
            icon: "success"
          });
        } else {
            Swal.fire({
              title: "Cancelaste!",
              text: "El popup anterior fue cancelado.",
              icon: "error"
            });
        }
    });
})