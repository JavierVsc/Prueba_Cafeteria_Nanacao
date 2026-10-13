# Prueba Cafetería Nanacao

Prueba correspondiente al módulo de **Testing**.

El objetivo de esta actividad es implementar pruebas automatizadas para una API REST utilizando **Jest** y **Supertest**.

## Tecnologías utilizadas

- Node.js
- Express
- Jest
- Supertest

## Pruebas realizadas

Se implementaron 4 pruebas automatizadas para verificar el funcionamiento de los endpoints de la API.

### GET /cafes

Comprueba que:

- El servidor responde con código de estado `200`.
- La respuesta es un arreglo.
- El arreglo contiene al menos un objeto.

### DELETE /cafes/:id

Comprueba que:

- Al intentar eliminar un café con un ID inexistente, el servidor responde con código de estado `404`.

### POST /cafes

Comprueba que:

- Se puede agregar un nuevo café.
- El servidor responde con código de estado `201`.
- El nuevo café se encuentra dentro de la respuesta.

### PUT /cafes/:id

Comprueba que:

- Si el ID enviado en la URL es diferente al ID enviado en el payload, el servidor responde con código de estado `400`.

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
npm install
```

## Ejecutar las pruebas

Para ejecutar los tests:

```bash
npm run test
```

## Resultado esperado

```text
Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

## Estructura del proyecto

```text
Prueba_Cafeteria_Nanacao/
├── tests/
│   └── server.spec.js
├── .gitignore
├── cafes.json
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

