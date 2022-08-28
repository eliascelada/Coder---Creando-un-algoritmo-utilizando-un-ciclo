alert("Bienvenido a Bamboo restaurantes. A continuación organicemos nuestros clientes en las 15 mesas...")
for (let i = 1; i <= 15; i++) {
    let ingresarCliente = prompt("Ingrese nombre del cliente o escriba 0 para salir: ");
    if (ingresarCliente == 0){
        break;
    }
    alert("Mesa N° " + i + " asignada al cliente: " + ingresarCliente);
}
alert("¡Gracias por su trabajo! ¡Hasta la próxima!");