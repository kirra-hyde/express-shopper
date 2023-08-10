const request = require("supertest");

const app = require("./app");
let db = require("./fakeDb");

let popsicle = { name: "popsicle", price: 1.45 };

beforeEach(function() {
  db.items.push(popsicle);
});

afterEach(function() {
  db.items.deleteAll();
});

describe("GET/items", function() {
  it("Gets a list of items", async function() {
    const resp = await request(app).get(`/items`);

    console.log("resp body is", resp.body);
    expect(resp.body).toEqual({ "name": "popsicle", "price": 1.45 });
  });
});