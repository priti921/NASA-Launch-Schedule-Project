const request = require("supertest");
const app = require("../../app");

describe("Test GET /launches", () => {
  test("It should return a 200 status code", async () => {
    const response = await request(app)
      .get("/launches")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});

describe("Test POST /launches", () => {
  const completeLaunchData = {
    mission: "Test Mission",
    rocket: "Test Rocket",
    target: "Test Target",
    launchDate: "January 4, 2040",
  };

  const completeLaunchDataWithoutDate = {
    mission: "Test Mission",
    rocket: "Test Rocket",
    target: "Test Target",
  };
  const completeLaunchDataWithInvalidDate = {
    mission: "Test Mission",
    rocket: "Test Rocket",
    target: "Test Target",
    launchDate: "invalid",
  };

  test("It should return a 201 status code", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchData)
      .expect("Content-Type", /json/)
      .expect(201);

    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(response.body).toMatchObject(completeLaunchDataWithoutDate);
    expect(requestDate).toBe(responseDate);
  });

  test("It should catch missing required properties", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchDataWithoutDate)
      .expect("Content-Type", /json/)
      .expect(400);

    expect(response.body).toStrictEqual({
      error: "bad request",
    });
  });
  test("It should catch invalid dates", async () => {
    const response = await request(app)
      .post("/launches")
      .send(completeLaunchDataWithInvalidDate)
      .expect("Content-Type", /json/)
      .expect(404);

    expect(response.body).toStrictEqual({
      error: "bad request",
    });
  });
});
