# Documentación de la API RESTful

Bienvenido a la documentación de la API. A continuación, se presenta una lista de endpoints disponibles con enlaces a sus respectivas documentaciones detalladas.

## Descripción General de Endpoints

| Recurso                                                      | Descripción                                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| [`GET /api/v1/users`](./endpoints/get-usuarios.md)           | Recupera la lista de todos los usuarios disponibles.                            |
| [`GET /api/v1/users/{id}`](./endpoints/get-usuario.md)       | Obtiene información detallada sobre un usuario específico.                      |
| [`POST /api/v1/users`](./endpoints/post-usuario.md)          | Crea un nuevo usuario, además al crearse el usuario se crea la tarjeta digital. |
| [`DELETE /api/v1/users/{id}`](./endpoints/delete-usuario.md) | Elimina un usuario existente.                                                   |
| [`PUT /api/v1/users/{id}`](./endpoints/put-usuario.md)       | Actualiza un usuario existente.                                                 |
| [`GET /api/v1/cards`](./endpoints/get-cards.md)              | Obtiene todas las tarjetas digitales.                                           |
| [`GET /api/v1/cards/{userId}`](./endpoints/get-card.md)      | Obtiene una tarjeta digital con el ID del usuario.                              |
