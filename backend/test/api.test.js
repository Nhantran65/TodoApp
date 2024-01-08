const request = require("supertest");
const mongoose = require("mongoose");

const app = require("../src/app");

describe("GET /api/v1", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/v1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          message: "API - 👋🌎🌍🌏",
        },
        done,
      );
  });
});



describe("GET /api/v1/tasks/list", () => {
  const sampleList = [
    {
      title: "Task 1",
      done: false,
    },
    {
      title: "Task 2",
      done: false,
    },
  ];

  beforeAll(async () => {
    await mongoose.connect("mongodb+srv://tranhuynhdainhan:Baochau2903-@cluster0.ag2cn7s.mongodb.net/todoApp");
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("gets a list", (done) => {
    request(app)
      .get("/api/v1/tasks/list")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/, done);
  });

  it("creates a new list", (done) => {
    request(app)
      .post("/api/v1/tasks/list")
      .send({
        tasks: sampleList,
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/, done)
      .expect((res) => res["_id"] != undefined);
  });

  
});
