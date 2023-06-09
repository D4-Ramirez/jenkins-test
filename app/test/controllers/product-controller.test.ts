import request from "supertest";
import app from "../../src/index";

describe("Get All Products", () => {
    test("Test 1", async () => {
        const res = await request(app).get("/products");
        expect(res.body).toBeDefined();
    });
})
