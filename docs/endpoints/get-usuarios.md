# Endpoint: GET /usuario

Permite obtener información detallada sobre todos los usuarios disponibles

## Ejemplo de Solicitud

http
GET /usuario

## Respuesta Exitosa (Código 200 OK)

```json
[
  {
    "id": 1,
    "name": "Juan",
    "email": "juan.perez@example.com"
  },
  {
    "id": 2,
    "name": "Maria",
    "apellido": "Rodriguez",
    "email": "maria.rodriguez@example.com",
    "contrasena": "contrasenaSegura"
  },
  {
    "id": 3,
    "name": "Alejandro",
    "email": "alex.zermeño@example.com"
  },
  {
    "id": 5,
    "name": "Prueba Dos",
    "email": "test@mail.com"
  }
]
```

## Respuestas de Errores Posibles

- Código 404 Not Found:

  json
  {
  "error": 404,
  "error": "not_found",
  "error_description": "No se encontró el usuario."
  }

- Código 500 Internal Server Error:
  json
  {
  "error": 500,
  "error": "internal_error",
  "error_description": "Ocurrió un problema para procesar la solicitud"
  }
