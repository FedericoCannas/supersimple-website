<?php
// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $name = $_POST["name"];
    $country = $_POST["country"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configurar el destinatario del correo electrónico
    $to = "fede211285@hotmail.com";

    // Configurar el asunto y el contenido del correo electrónico
    $subject = "Nuevo mensaje de formulario";
    $body = "Nombre y apellido: " . $name . "\n";
    $body .= "País: " . $country . "\n";
    $body .= "Correo electrónico: " . $email . "\n";
    $body .= "Mensaje: " . $message;

    // Enviar el correo electrónico
    if (mail($to, $subject, $body)) {
        // El correo electrónico se envió correctamente
        echo "¡Gracias! Su mensaje ha sido enviado.";
    } else {
        // Ocurrió un error al enviar el correo electrónico
        echo "Lo sentimos, ha ocurrido un error al enviar su mensaje.";
    }
}
?>
