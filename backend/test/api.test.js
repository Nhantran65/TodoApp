const request = require("supertest");
const mongoose = require("mongoose");


const app = require("../src/app");

describe("GET /api/v1", () => {
  it("responds with a json message", (done) => {
    request(app)
    .get("/api/v1/tasks")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/, done);
});
});

describe("GET /api/v1/lists", () => {
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
  await mongoose.connect(
    "mongodb+srv://tranhuynhdainhan25102004:Baochau2903@cluster0.qhp3ciw.mongodb.net/test" || "mongodb://localhost:27017/tasks",
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

it("gets a list", (done) => {
  request(app)
    .get("/api/v1/lists")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/, done);
});

it("creates a new list", (done) => {
  request(app)
    .post("/api/v1/lists")
    .send({
      tasks: sampleList,
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/, done)
    .expect((res) => res["_id"] != undefined);
});

it("updates a list", (done) => {
  let id = "";
  request(app)
    .post("/api/v1/lists")
    .send({
      tasks: sampleList,
    })
    .set("Accept", "application/json")
    .expect((res) => {
      id = res["_id"];
    });

  request(app)
    .put(`/api/v1/lists/${id}`)
    .send({
      tasks: [
        {
          title: "Task Updated",
          done: false,
        },
      ],
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/, done)
    .expect((res) => res["success"] === true && res["_id"] === id);

  request(app)
    .get(`/api/v1/lists/${id}`)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/, done)
    .expect(
      (res) =>
        res["success"] === true &&
        res["tasks"].length === 1 &&
        res["tasks"][0]["title"] === "Task Updated" &&
        res["tasks"][0]["done"] === false,
    );

  });
});