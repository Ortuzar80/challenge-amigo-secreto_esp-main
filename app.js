// Paso 1: Inicialización
// Declaramos una variable de tipo array, usando 'let', para almacenar los nombres de los amigos [4, 5].
let amigos = []; 

// Función para agregar nombres
function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada (asumimos el ID 'nombreInput') [6].
    let nombre = document.getElementById('nombreInput').value;

    // 2. Validar la entrada: Asegurarse de que el campo no esté vacío [6].
    if (nombre.trim() === "") {
        // Mostrar un alert con el mensaje de error si está vacío [6].
        alert("Por favor, inserte un nombre."); 
        return; // Detiene la ejecución si la validación falla.
    }

    // 3. Actualizar el array de amigos: Si es válido, añadirlo al arreglo usando el método .push() [6, 7].
    amigos.push(nombre);

    // 4. Limpiar el campo de entrada: Restablecer el campo de texto a una cadena vacía [6].
    document.getElementById('nombreInput').value = '';

    // 5. Mostrar la lista actualizada.
    mostrarListaAmigos(); 
}

// Función para recorrer el array y actualizar la lista HTML
function mostrarListaAmigos() {
    // 1. Obtener el elemento de la lista (asumimos el ID 'listaAmigos') [8].
    let lista = document.getElementById('listaAmigos');
    
    // 2. Limpiar la lista existente para evitar duplicados, usando innerHTML = "" [8].
    lista.innerHTML = ""; 

    // 3. Iterar sobre el arreglo usando un bucle for [8].
    for (let i = 0; i < amigos.length; i++) {
        // 4. Agregar elementos a la lista, creando un nuevo elemento <li> para cada amigo [8].
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función que realiza la selección aleatoria del amigo secreto
function sortearAmigo() {
    // Asumimos que el ID del elemento donde se mostrará el resultado es 'resultadoSorteo' [9].
    let elementoResultado = document.getElementById('resultadoSorteo');

    // 1. Validar que haya amigos disponibles: Comprobar si el array amigos no está vacío [9].
    if (amigos.length === 0) {
        // Asignar un texto al elemento de resultado [10].
        elementoResultado.innerHTML = "No hay amigos para sortear. Por favor, agregue nombres.";
        return;
    }

    // 2. Generar un índice aleatorio. Se usan Math.random() y Math.floor() para obtener un índice aleatorio [9, 11].
    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 

    // 3. Obtener el nombre sorteado utilizando el índice aleatorio para acceder al arreglo [9].
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado: Actualizar el contenido del elemento utilizando innerHTML [9].
    elementoResultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`; }