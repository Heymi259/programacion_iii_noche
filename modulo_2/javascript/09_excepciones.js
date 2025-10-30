try {
    const user = JSON.parse('{"name": "Juan",  edad:30}');
} catch (e) {
    console.log("Error al parsear JSON:", e.message);

}
try {
    console.log("Iniciando programa...");
    throw new Error("¡Archivo no encontrado!");
} catch (error) {
    console.log("Error detectado:", error.message);
} finally {
    console.log("finalizo el intento de abrir el archivo.");
}