const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {

  it("GET /cafes devuelve status 200 y un arreglo con al menos un objeto", async () => {
    const response = await request(server)
      .get("/cafes")
      .send();

    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toBeInstanceOf(Object);
  });

  it("DELETE /cafes/:id devuelve status 404 si el cafe no existe", async () => {
    const idInexistente = 9999;

    const response = await request(server)
      .delete(`/cafes/${idInexistente}`)
      .set("Authorization", "token")
      .send();

    expect(response.statusCode).toBe(404);
  });

  it("POST /cafes agrega un nuevo cafe y devuelve status 201", async () => {
    const nuevoCafe = {
      id: 5,
      nombre: "Latte"
    };

    const response = await request(server)
      .post("/cafes")
      .send(nuevoCafe);

    expect(response.statusCode).toBe(201);
    expect(response.body).toContainEqual(nuevoCafe);
  });

  it("PUT /cafes/:id devuelve status 400 si los ids son diferentes", async () => {
    const cafe = {
      id: 2,
      nombre: "Cafe actualizado"
    };

    const response = await request(server)
      .put("/cafes/1")
      .send(cafe);

    expect(response.statusCode).toBe(400);
  });

});