# Endpoint: PUT /usuario/{id}

Permite actualizar completamente la información de un usuario existente mediante su identificador único.

## Parámetros de URL
{id} (obligatorio): Identificador único del usuario que se desea actualizar.

## Parámetros del Cuerpo (JSON)
-  (obligatorio): Identificador único del tema que se desea recuperar.
- name (obligatorio): Nombre del actualizado usuario.
- email (obligatorio): Correo electrónico del usuario a actualizado .

## Ejemplo de Solicitud
http
PUT /usuario/1
Content-Type: application/json

{
  "name": "Nuevo Carlos",
  "email": "nuevo.correo@email.com",
}



## Respuesta Exitosa (Código 200 OK)
json
{
  "mensaje": "Usuario actualizado exitosamente."
}



## Respuestas de Errores Posibles
- Código 404 Not Found:

  json
  {
  "error": 404,
  "error": "not_found",
  "error_description": "No se encontró el usuario."
  }

  

- Código 400 Bad Request:
json
{
  "error": 400,
  "error": "bad_request",
  "error_description": "Faltan parámetros obligatorios en la solicitud."
}


- Código 500 Internal Server Error:
  json
  {
  "error": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
   

## Notas Adicionales

- Asegurate de incluir un datos válido en la solicitud para obtener la información
  sobre un tema en específico.