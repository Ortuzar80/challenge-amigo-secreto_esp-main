let amigos = []; 

// Función para agregar nombres a la lista [6]
function agregarAmigo() {
    // Capturar el valor del campo de entrada [6]. Usamos document.getElementById para obtener el texto ingresado [6, 7].
    let nombre = document.getElementById('nombre').value; // 'nombre' sería el ID del campo de texto

    // Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío [6].
    if (nombre.trim() === "") {
        // Mostrar un alert con el mensaje de error [6, 8, 9].
        alert("Por favor, inserte un nombre."); 
        return; // Detiene la función si la validación falla.
    }

    // Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo usando el método .push() [6, 10].
    amigos.push(nombre);

    // Limpiar el campo de entrada: Restablecer el campo de texto a una cadena vacía después de añadir [6, 11].
    document.getElementById('nombreInput').value = '';

    // Actualizar la lista visible en HTML [12].
    mostrarListaAmigos(); 
}

// Función que recorre el array y actualiza la lista HTML [12]
function mostrarListaAmigos() {
    // 1. Obtener el elemento de la lista [12]. Asumimos que el ID de la lista UL/OL es 'listaAmigos'
    let lista = document.getElementById('listaAmigos');
    
    // 2. Limpiar la lista existente para evitar duplicados, usando innerHTML = "" [12].
    lista.innerHTML = ""; 

    // 3. Iterar sobre el arreglo [12]. Utilizamos un bucle for.
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar elementos a la lista [12]. Se utiliza innerHTML para insertar el nuevo elemento <li>.
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función que realiza la selección aleatoria del amigo secreto [13]
function sortearAmigo() {
    // Asumimos que el ID del elemento donde se mostrará el resultado es 'resultadoSorteo'
    let elementoResultado = document.getElementById('resultadoSorteo');

    // 1. Validar que haya amigos disponibles: comprobar si el array amigos no está vacío [13].
    if (amigos.length === 0) {
        elementoResultado.innerHTML = "No hay amigos para sortear. Por favor, agregue nombres.";
        return;
    }

    // 2. Generar un índice aleatorio [13]. 
    // Se usan Math.random() y Math.floor() para obtener un índice aleatorio dentro del rango del arreglo [11, 13].
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    // 3. Obtener el nombre sorteado [13].
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado [13].
    // Actualizar el contenido del elemento de resultado utilizando innerHTML [7, 13].
    elementoResultado.innerHTML = `¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>!`; 
}

