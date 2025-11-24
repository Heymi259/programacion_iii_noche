console.log("MANEJO DE ERRORES EN JAVASCRIPT - RESTAURANTE");


try {
    const pedido = JSON.parse('{"cliente": "Juan", edad:30}');
    console.log("Pedido procesado:", pedido);
} catch (e) {
    console.log("Error al procesar el pedido:", e.message);
    console.log(" El formato del pedido no es válido. Verifique los datos del cliente.");
}


try {
    console.log("Iniciando sistema del restaurante...");

    throw new Error("¡Menú del día no encontrado!");
} catch (error) {
    console.log("Error detectado en el sistema:", error.message);
    console.log(" Por favor cargue nuevamente el menú o contacte al administrador.");
} finally {
    console.log(" Finalizó el intento de abrir el menú.");
}