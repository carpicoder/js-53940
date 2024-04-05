

const disparar = document.querySelector("#disparar");

disparar.addEventListener("click", () => {
    Toastify({
        text: "Esto es una tostadita",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(to right, red, yellow)",
            color: "white",
            borderRadius: "1rem",
            border: "1px solid black",
        },
        className: "tostadita",
        offset: {
            x: 0,
            y: 10
        },
        onClick: function() {
            alert("Hola!")
        }
    }).showToast();
})