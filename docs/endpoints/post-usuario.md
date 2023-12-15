# Endpoint: POST/usuario

Permite crear un nuevo usuario.

## Parámetros del Cuerpo (JSON)

- nombre (obligatorio): Nombre del nuevo usuario.
- email (obligatorio): Correo electrónico del nuevo usuario.

## Ejemplo de Solicitud

http
POST /usuario/{id}
Content-Type: application/json

{
"nombre": "Alex Zermeño",
"correoElectronico": "test@mail.com",
}

## Respuesta Exitosa (Código 200 OK)

```json
{
  "msg": "Usuario creado exitosamente.",
  "user": {
    "id": 1,
    "name": "Fernando Viveros",
    "email": "test2@test.com",
    "updatedAt": "2023-12-15T00:46:26.675Z",
    "createdAt": "2023-12-15T00:46:26.675Z"
  },
  "card": {
    "id": 1,
    "name": "Tarjeta Digital de: Fernando Viveros",
    "userId": 1,
    "updatedAt": "2023-12-15T00:46:26.696Z",
    "createdAt": "2023-12-15T00:46:26.696Z"
  }
}
```

## Respuestas de Errores Posibles

- Código 404 Not Found:

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
