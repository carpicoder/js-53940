function jugarAdivinarNumero() {
    
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    let intentos = 0;
    let adivinado = false;

    //* !adivinado
    //* adivinado === false
    while (!adivinado) {
        let intento = parseInt(prompt("Intentá adivinar un número entre 1 y 100."));

        intentos++;

        if (intento === numeroAleatorio) {
            alert("¡Felicidades!\nEl número era " + numeroAleatorio + ".\nLo adivinaste en " + intentos + " intentos.");
            adivinado = true;
            jugarAdivinarNumero();
        } else if (intento < numeroAleatorio) {
            alert("El número es más alto. Intentá otra vez. Vas intentándolo " + intentos + " intentos.")
        } else {
            alert("El número es más bajo. Intentá otra vez. Vas intentándolo " + intentos + " intentos.")
        }

    }

}

jugarAdivinarNumero();