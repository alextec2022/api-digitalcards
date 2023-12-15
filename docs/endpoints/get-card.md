# Endpoint: GET /cards/{userId}

Permite obtener información detallada sobre todas las tarjetas digitales disponibles

## Ejemplo de Solicitud

http
GET /cards/{userId}

## Respuesta Exitosa (Código 200 OK)

```json
{
  "id": 1,
  "name": "Tarjeta Digital de: Fernando Viveros",
  "userId": 1,
  "createdAt": "2023-12-15T00:46:26.000Z",
  "updatedAt": "2023-12-15T00:46:26.000Z"
}
```

## Respuestas de Errores Posibles

- Código 404 Not Found:

  ```json
  {
    "error": 404,
    "error": "not_found",
    "msg": "No hay tarjeta para el usuario."
  }
  ```

- Código 500 Internal Server Error:
  json
  {
  "error": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
